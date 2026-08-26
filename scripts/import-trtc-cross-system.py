"""Import TRTC's official monthly cross-system ridership HTML reports."""

from __future__ import annotations

from html.parser import HTMLParser
import json
from datetime import date
from pathlib import Path
import re
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data/ridership/trtc-cross-system.json"
INDEX_URL = "https://english.metro.taipei/cp.aspx?n=C702FF0562802D53"
RETRIEVED = "2026-08-26"
LINK_PATTERN = re.compile(
    r'href="(https://web\.metro\.taipei/RidershipCounts/E/(\d+)e\.htm)"'
    r'[^>]*title="Cross-system ridership statistics\((\d{4})\.(\d+)\)[^"]*"',
)
HEADING_PATTERN = re.compile(r"^[A-Z][a-z]+-\d{4}$")
NUMBER_PATTERN = re.compile(r"^[\d,]+(?:\.\d+)?$")


class TableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.rows: list[list[str]] = []
        self._row: list[str] | None = None
        self._cell: list[str] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "tr":
            self._row = []
        elif tag in {"td", "th"} and self._row is not None:
            self._cell = []

    def handle_data(self, data: str) -> None:
        if self._cell is not None:
            self._cell.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag in {"td", "th"} and self._cell is not None and self._row is not None:
            self._row.append(" ".join("".join(self._cell).split()))
            self._cell = None
        elif tag == "tr" and self._row is not None:
            if self._row:
                self.rows.append(self._row)
            self._row = None


def number(value: str) -> int | None:
    if not NUMBER_PATTERN.fullmatch(value):
        return None
    return int(float(value.replace(",", "")))


def fetch(url: str) -> str:
    request = Request(url, headers={"User-Agent": "taipei-transit-guide research importer"})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("big5", errors="replace")


def parse_report(html: str, period: str) -> tuple[int, int, str | None, int | None]:
    parser = TableParser()
    parser.feed(html)
    total: int | None = None
    days = 0
    heading: str | None = None
    average: int | None = None
    for row in parser.rows:
        text = " ".join(row).strip()
        if len(row) >= 3 and HEADING_PATTERN.fullmatch(row[2]):
            heading = row[2]
        if row and row[0].startswith("Monthly Total Ridership"):
            total = number(row[-1])
        if row and row[0].startswith("Average Daily Transport Ridership"):
            average = number(row[-1])
        if len(row) >= 3 and re.fullmatch(r"[A-Z][a-z]{2}\.\d{1,2}", row[0]) and number(row[-1]) is not None:
            days += 1
    if total is None:
        raise ValueError(f"no monthly total found for {period}")
    if days == 0:
        raise ValueError(f"no daily rows found for {period}")
    return total, days, heading, average


def main() -> None:
    index = fetch(INDEX_URL)
    links = [
        {
            "url": match.group(1),
            "period": f"{int(match.group(2)[:-2]) + 1911}-{int(match.group(2)[-2:]):02d}",
            "code": match.group(2),
            "indexLabel": f"{match.group(3)}-{int(match.group(4)):02d}",
        }
        for match in LINK_PATTERN.finditer(index)
    ]
    if not links:
        raise ValueError("the TRTC index returned no cross-system links")

    records: list[dict[str, object]] = []
    source_files: list[dict[str, str]] = []
    mismatches: list[dict[str, str]] = []
    index_mismatches: list[dict[str, str]] = []
    failures: list[dict[str, str]] = []
    for link in links:
        try:
            total, days, heading, average = parse_report(fetch(link["url"]), link["period"])
        except Exception as error:  # keep the successful archive explicit if one file fails
            failures.append({"period": link["period"], "url": link["url"], "reason": str(error)})
            continue
        file_record = {"period": link["period"], "url": link["url"]}
        if heading:
            file_record["title"] = heading
        if link["indexLabel"] != link["period"]:
            file_record["indexLabel"] = link["indexLabel"]
        source_files.append(file_record)
        if link["indexLabel"] != link["period"]:
            index_mismatches.append({"period": link["period"], "url": link["url"], "reported": link["indexLabel"]})
        expected_heading = date.fromisoformat(link["period"] + "-01").strftime("%B-%Y")
        if heading and heading != expected_heading:
            mismatches.append({"period": link["period"], "url": link["url"], "reported": heading})
        point: dict[str, object] = {
            "period": link["period"],
            "value": total,
            "days": days,
            "measure": "published-total",
        }
        if average is not None:
            point["averageDaily"] = average
        records.append(point)

    records.sort(key=lambda item: str(item["period"]))
    source_files.sort(key=lambda item: item["period"])
    document: dict[str, object] = {
        "retrieved": RETRIEVED,
        "currentPeriod": records[-1]["period"] if records else None,
        "source": {
            "id": "trtc-cross-system-html",
            "title": "Ridership Counts — monthly cross-system HTML reports",
            "titleOriginal": "Cross-system ridership statistics",
            "publisher": "Taipei Rapid Transit Corporation",
            "publisherOriginal": "臺北大眾捷運股份有限公司",
            "indexUrl": INDEX_URL,
            "accessed": RETRIEVED,
            "kind": "primary",
            "measure": "Published monthly cross-system ridership total in trips; it is a separate operator series from station entry-plus-exit movement and is not merged with it.",
            "files": source_files,
        },
        "network": records,
        "indexMismatches": index_mismatches,
        "headingMismatches": mismatches,
        "failures": failures,
    }
    OUTPUT.write_text(json.dumps(document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT}: {len(records)} reports, {len(index_mismatches)} index mismatches, {len(mismatches)} heading mismatches, {len(failures)} failures")
    if failures:
        print(json.dumps(failures, ensure_ascii=False))


if __name__ == "__main__":
    main()
