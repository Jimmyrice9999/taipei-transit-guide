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

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data/ridership/ntmc-system.json"
INDEX_URL = "https://www.ntmetro.com.tw/basic/?node=10145"
RETRIEVED = "2026-08-26"
TABLE_NS = "urn:oasis:names:tc:opendocument:xmlns:table:1.0"
TEXT_NS = "urn:oasis:names:tc:opendocument:xmlns:text:1.0"
XLSX_NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"


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


def shared_strings(archive: zipfile.ZipFile) -> list[str]:
    try:
        root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    except KeyError:
        return []
    return [
        "".join(node.text or "" for node in item.iter(f"{{{XLSX_NS}}}t"))
        for item in root
    ]


def cell_value(cell: ET.Element, strings: list[str]) -> str:
    value = cell.find(f"{{{XLSX_NS}}}v")
    if value is None:
        return ""
    if cell.attrib.get("t") == "s":
        return strings[int(value.text)]
    return value.text or ""


def rows_from_xlsx(data: bytes) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    """Read the legacy workbook's separate entry and exit station sheets."""
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        strings = shared_strings(archive)
        worksheets = []
        for sheet in ("xl/worksheets/sheet1.xml", "xl/worksheets/sheet2.xml"):
            root = ET.fromstring(archive.read(sheet))
            rows: list[dict[str, str]] = []
            for row in root.findall(f".//{{{XLSX_NS}}}row"):
                values: dict[str, str] = {}
                for cell in row.findall(f"{{{XLSX_NS}}}c"):
                    coordinate = cell.attrib.get("r", "")
                    column = re.match(r"[A-Z]+", coordinate)
                    if column and column.group(0) in {"A", "B", "AH"}:
                        values[column.group(0)] = cell_value(cell, strings)
                if values:
                    rows.append(values)
            worksheets.append(rows)
    return worksheets[0], worksheets[1]


def parse_xlsx(data: bytes, period: str) -> dict[str, object]:
    entry_rows, exit_rows = rows_from_xlsx(data)
    dimensions: dict[str, dict[str, int]] = {"entry": {}, "exit": {}}
    stations: dict[str, dict[str, object]] = {}
    for mode, rows in (("entry", entry_rows), ("exit", exit_rows)):
        for row in rows:
            code = row.get("A", "").strip().upper()
            total = number(row.get("AH", ""))
            if not re.fullmatch(r"[A-Z]{1,3}\d+[A-Z]?", code) or total is None:
                continue
            station = stations.setdefault(code, {"nameZh": row.get("B", "").strip(), "entry": 0, "exit": 0})
            station[mode] = total
            line = re.match(r"[A-Z]+", code).group(0)
            dimensions[mode][line] = dimensions[mode].get(line, 0) + total
            dimensions[mode]["network"] = dimensions[mode].get("network", 0) + total
    expected = {"Y", "V", "K", "network"}
    for dimension in dimensions.values():
        if not expected.issubset(dimension):
            raise RuntimeError(f"{period} did not expose the expected NTMC XLSX rows: {dimensions}")
    lines = {
        line: {
            "value": dimensions["exit"].get(line),
            "entry": dimensions["entry"].get(line),
            "exit": dimensions["exit"].get(line),
            "published": True,
            "measure": "station-sum",
        }
        for line in ("Y", "V", "K", "LB")
        if line in dimensions["exit"]
    }
    return {
        "period": period,
        "value": dimensions["exit"]["network"],
        "entry": dimensions["entry"]["network"],
        "exit": dimensions["exit"]["network"],
        "days": calendar.monthrange(int(period[:4]), int(period[5:]))[1],
        "measure": "station-sum",
        "lines": lines,
        "stations": stations,
    }


def parse_pdf(data: bytes, period: str) -> dict[str, object]:
    """Read the legacy PDF's daily rows and its whole-month line totals."""
    text = "\n".join(page.extract_text() or "" for page in PdfReader(io.BytesIO(data)).pages)
    numeric_rows = []
    for line in text.splitlines():
        parts = line.strip().split()
        if len(parts) == 4 and all(number(part) is not None for part in parts):
            numeric_rows.append([number(part) for part in parts])
    days = calendar.monthrange(int(period[:4]), int(period[5:]))[1]
    if len(numeric_rows) != days + 2:
        raise RuntimeError(f"{period} PDF exposed {len(numeric_rows)} four-column rows; expected {days + 2}")
    monthly = numeric_rows[days]
    lines = {
        "V": {"value": monthly[1], "entry": None, "exit": None, "published": True, "measure": "published-total"},
        "K": {"value": monthly[2], "entry": None, "exit": None, "published": True, "measure": "published-total"},
        "Y": {"value": monthly[3], "entry": None, "exit": None, "published": True, "measure": "published-total"},
    }
    return {
        "period": period,
        "value": monthly[0],
        "entry": None,
        "exit": None,
        "days": days,
        "measure": "published-total",
        "lines": lines,
        "stations": {},
    }


def fetch_entries() -> list[tuple[str, str, str]]:
    with urllib.request.urlopen(INDEX_URL, timeout=60) as response:
        html = response.read().decode("utf-8", errors="replace")
    pattern = re.compile(
        r'<a\s+href="(?P<h>[^"]+\.(?P<extension>ods|xlsx|pdf))"\s+title="(?P<title>(?P<year>\d{3})[^"\d]+(?P<month>\d{1,2})[^"\d]+[^\"]*)"',
        re.IGNORECASE | re.DOTALL,
    )
    entries = []
    for match in pattern.finditer(html):
        year = int(match.group("year")) + 1911
        month = int(match.group("month"))
        entries.append((f"{year:04d}-{month:02d}", urllib.parse.urljoin(INDEX_URL, match.group("h")), match.group("title")))
    if not entries:
        raise RuntimeError("no NTMC report links found on the official statistics page")
    return entries


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
            "measure": "entry-exit",
        }
        for line in labels
    }
    return {
        "period": period,
        "value": dimensions["exit"]["network"],
        "entry": dimensions["entry"]["network"],
        "exit": dimensions["exit"]["network"],
        "days": calendar.monthrange(int(period[:4]), int(period[5:]))[1],
        "measure": "entry-exit",
        "lines": lines,
        "stations": station_dimensions,
    }


def main() -> None:
    periods = []
    source_files = []
    for period, url, title in fetch_entries():
        with urllib.request.urlopen(url, timeout=60) as response:
            data = response.read()
        extension = url.rsplit(".", 1)[-1].lower()
        if extension == "ods":
            report = parse_report(data, period)
        elif extension == "xlsx":
            report = parse_xlsx(data, period)
        elif extension == "pdf":
            report = parse_pdf(data, period)
        else:
            raise RuntimeError(f"unsupported NTMC report extension: {extension}")
        periods.append(report)
        source_files.append({"period": period, "url": url, "title": title, "format": extension})
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
            "id": "ntmc-system-reports",
            "title": "Monthly whole-system passenger traffic reports",
            "titleOriginal": "全系統運量統計",
            "publisher": "New Taipei Metro Corporation",
            "publisherOriginal": "新北大眾捷運股份有限公司",
            "indexUrl": INDEX_URL,
            "accessed": RETRIEVED,
            "kind": "primary",
            "measure": "Current ODS reports publish entry and exit station-day rows and line subtotals. The August 2025 XLSX has separate entry and exit station sheets, so its line values are summed from those station rows. Older PDFs publish daily and monthly whole-system and line totals without station rows or separate entry and exit dimensions. Station values are entry plus exit movement where station rows exist; network and line values retain the source measure.",
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
