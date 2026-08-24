"""Fetch and reduce NTMC's official monthly whole-system reports."""

from __future__ import annotations

import calendar
import io
import json
import re
import urllib.parse
import urllib.request
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data/ridership/ntmc-system.json"
INDEX_URL = "https://www.ntmetro.com.tw/basic/?node=10145"
RETRIEVED = "2026-08-24"
TABLE_NS = "urn:oasis:names:tc:opendocument:xmlns:table:1.0"
TEXT_NS = "urn:oasis:names:tc:opendocument:xmlns:text:1.0"


def text_of(element: ET.Element) -> str:
    return " ".join((node.text or "") for node in element.iter(f"{{{TEXT_NS}}}p")).strip()


def rows_from_ods(data: bytes) -> list[list[str]]:
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        root = ET.fromstring(archive.read("content.xml"))
    rows: list[list[str]] = []
    for row in root.findall(f".//{{{TABLE_NS}}}table-row"):
        values: list[str] = []
        for cell in row.findall(f"{{{TABLE_NS}}}table-cell"):
            repeat = int(cell.attrib.get(f"{{{TABLE_NS}}}number-columns-repeated", "1"))
            values.extend([text_of(cell)] * repeat)
        if any(value for value in values):
            rows.append(values)
    return rows


def number(value: str) -> int | None:
    cleaned = value.replace(",", "").strip()
    return int(cleaned) if re.fullmatch(r"\d+", cleaned) else None


def fetch_entries() -> list[tuple[str, str, str]]:
    with urllib.request.urlopen(INDEX_URL, timeout=60) as response:
        html = response.read().decode("utf-8", errors="replace")
    pattern = re.compile(
        r'<a\s+href="(?P<h>[^"]+\.ods)"\s+title="(?P<title>(?P<year>\d+)年(?P<month>\d+)月全系統運量統計\.ods)"',
        re.IGNORECASE | re.DOTALL,
    )
    entries = []
    for match in pattern.finditer(html):
        year = int(match.group("year")) + 1911
        month = int(match.group("month"))
        entries.append((f"{year:04d}-{month:02d}", urllib.parse.urljoin(INDEX_URL, match.group("h")), match.group("title")))
    if not entries:
        raise RuntimeError("no NTMC ODS links found on the official statistics page")
    return entries[:10]


def sum_row(row: list[str]) -> int:
    return sum(number(value) or 0 for value in row[1:])


def parse_report(data: bytes, period: str) -> dict[str, object]:
    rows = rows_from_ods(data)
    # Keep this assertion close to the extraction: the report's columns are
    # official line totals, not a reconstruction from station data.
    labels = {
        "Y": "環狀線小計",
        "V": "淡海輕軌小計",
        "K": "安坑輕軌小計",
        "LB": "三鶯線小計",
    }
    dimensions: dict[str, dict[str, int]] = {"entry": {}, "exit": {}}
    station_dimensions: dict[str, dict[str, object]] = {}
    mode: str | None = None
    for row in rows:
        heading = row[0] if row else ""
        if "進站" in heading:
            mode = "entry"
            continue
        if "出站" in heading:
            mode = "exit"
            continue
        if mode is None:
            continue
        station_match = re.fullmatch(r"(V|K|Y|LB)\d+[A-Za-z]?", heading)
        if station_match:
            code = heading.upper()
            station_dimensions.setdefault(code, {"nameZh": row[1] if len(row) > 1 else "", "entry": 0, "exit": 0})
            station_dimensions[code][mode] = sum(number(value) or 0 for value in row[2:])
            continue
        if heading in labels.values():
            line = next(key for key, label in labels.items() if label == heading)
            dimensions[mode][line] = sum_row(row)
        elif heading == "全線總計":
            dimensions[mode]["network"] = sum_row(row)
    # The Sanying row is absent from older reports; that is a missing
    # publication, not a zero that can safely be invented.
    expected = {"Y", "V", "K", "network"}
    for dimension in dimensions.values():
        if not expected.issubset(dimension):
            raise RuntimeError(f"{period} did not expose the expected NTMC report rows: {dimensions}")
    lines = {
        line: {
            "value": dimensions["exit"].get(line),
            "entry": dimensions["entry"].get(line),
            "exit": dimensions["exit"].get(line),
            "published": line in dimensions["exit"],
        }
        for line in labels
    }
    return {
        "period": period,
        "value": dimensions["exit"]["network"],
        "entry": dimensions["entry"]["network"],
        "exit": dimensions["exit"]["network"],
        "days": calendar.monthrange(int(period[:4]), int(period[5:]))[1],
        "lines": lines,
        "stations": station_dimensions,
    }


def main() -> None:
    periods = []
    source_files = []
    for period, url, title in fetch_entries():
        with urllib.request.urlopen(url, timeout=60) as response:
            data = response.read()
        periods.append(parse_report(data, period))
        source_files.append({"period": period, "url": url, "title": title})
    periods.sort(key=lambda item: item["period"])
    registry: dict[str, dict[str, object]] = {}
    for report in periods:
        for code, station in report["stations"].items():
            if code not in registry:
                line = re.match(r"[A-Z]+", code).group(0)
                registry[code] = {
                    "operator": "NTMC",
                    "code": code,
                    "line": line,
                    "name": code,
                    "nameZh": station["nameZh"],
                    "periods": [],
                }
            entry = station["entry"]
            exit_ = station["exit"]
            registry[code]["periods"].append({
                "period": report["period"],
                "value": entry + exit_,
                "entry": entry,
                "exit": exit_,
                "days": report["days"],
            })
        report.pop("stations", None)
    document = {
        "retrieved": RETRIEVED,
        "currentPeriod": periods[-1]["period"],
        "source": {
            "id": "ntmc-system-ods",
            "title": "Monthly whole-system passenger traffic",
            "titleOriginal": "全系統運量統計",
            "publisher": "New Taipei Metro Corporation",
            "publisherOriginal": "新北大眾捷運股份有限公司",
            "indexUrl": INDEX_URL,
            "accessed": RETRIEVED,
            "kind": "primary",
            "measure": "The operator's monthly report publishes entry and exit station-day rows and line subtotals. Station value is entry plus exit movement; network and line values use exit counts, with both dimensions retained.",
            "files": source_files,
        },
        "stations": sorted(registry.values(), key=lambda station: station["code"]),
        "network": periods,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT}: {len(periods)} months")


if __name__ == "__main__":
    main()
