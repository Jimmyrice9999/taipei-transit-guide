"""Fetch and reduce TYMC's official monthly station passenger PDFs.

The station report is a one-page monthly table.  It publishes entry and exit
counts separately, so this importer keeps both dimensions and also records the
operator's station movement (entry plus exit) for ranking stations.
"""

from __future__ import annotations

import calendar
import json
import re
import sys
import urllib.request
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data/ridership/tymc-station.json"
RETRIEVED = "2026-08-24"
INDEX_URL = "https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/statistics.html"

FILES = [
    ("2025-07", "https://www.tymetro.com.tw/tymetro-new/upload/file/20250812121118_0.pdf"),
    ("2025-08", "https://www.tymetro.com.tw/tymetro-new/upload/file/20250910041054_0.pdf"),
    ("2025-09", "https://www.tymetro.com.tw/tymetro-new/upload/file/20251014054831_0.pdf"),
    ("2025-10", "https://www.tymetro.com.tw/tymetro-new/upload/file/20251118100455_0.pdf"),
    ("2025-11", "https://www.tymetro.com.tw/tymetro-new/upload/file/20251211023916_0.pdf"),
    ("2025-12", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260114105502_0.pdf"),
    ("2026-01", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260212020430_0.pdf"),
    ("2026-02", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260313042431_0.pdf"),
    ("2026-03", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260420_084721_doc_856.pdf"),
    ("2026-04", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260515_112934_doc_492.pdf"),
    ("2026-05", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260615_134158_doc_731.pdf"),
    ("2026-06", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260714_154819_doc_104.pdf"),
    ("2026-07", "https://www.tymetro.com.tw/tymetro-new/upload/file/20260819_111103_doc_243.pdf"),
]


def parse_pdf(url: str) -> tuple[list[tuple[int, int]], tuple[int, int]]:
    with urllib.request.urlopen(url, timeout=60) as response:
        data = response.read()
    reader = PdfReader(__import__("io").BytesIO(data))
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    pairs = [
        (int(entry.replace(",", "")), int(exit_.replace(",", "")))
        for entry, exit_ in re.findall(r"(?<!\d)([\d,]+)\s+([\d,]+)(?!\d)", text)
    ]
    if len(pairs) < 23:
        raise RuntimeError(f"{url} yielded only {len(pairs)} entry/exit pairs")
    return pairs[:22], pairs[22]


def main() -> None:
    stations = json.loads((ROOT / "data/tdx/TYMC/station.json").read_text(encoding="utf-8"))
    ordered_stations = sorted(stations, key=lambda station: station["StationID"])
    if [station["StationID"] for station in ordered_stations] != [
        "A1", "A10", "A11", "A12", "A13", "A14a", "A15", "A16", "A17", "A18", "A19", "A2", "A20", "A21", "A22", "A3", "A4", "A5", "A6", "A7", "A8", "A9"
    ]:
        raise RuntimeError("unexpected TYMC station registry")
    # The PDF orders A1, A2, ..., A14a, A15, ..., A22 rather than lexical order.
    pdf_order = sorted(stations, key=lambda station: int(re.search(r"\d+", station["StationID"])[0]))
    pdf_order.remove(next(station for station in pdf_order if station["StationID"] == "A14a"))
    pdf_order.insert(13, next(station for station in stations if station["StationID"] == "A14a"))

    by_code = {
        station["StationID"]: {
            "operator": "TYMC",
            "code": station["StationID"],
            "line": "A",
            "name": station["StationName"]["En"],
            "nameZh": station["StationName"]["Zh_tw"],
            "periods": [],
        }
        for station in stations
    }
    network = []
    for period, url in FILES:
        rows, total = parse_pdf(url)
        days = calendar.monthrange(int(period[:4]), int(period[5:]))[1]
        for station, (entry, exit_) in zip(pdf_order, rows):
            by_code[station["StationID"]]["periods"].append(
                {
                    "period": period,
                    "value": entry + exit_,
                    "entry": entry,
                    "exit": exit_,
                    "days": days,
                }
            )
        network.append(
            {
                "period": period,
                "value": total[1],
                "entry": total[0],
                "exit": total[1],
                "days": days,
            }
        )

    document = {
        "retrieved": RETRIEVED,
        "currentPeriod": FILES[-1][0],
        "source": {
            "id": "tymc-station-pdf",
            "title": "Monthly station passenger traffic",
            "titleOriginal": "各站旅運量統計",
            "publisher": "Taoyuan Metro Corporation",
            "publisherOriginal": "桃園大眾捷運股份有限公司",
            "indexUrl": INDEX_URL,
            "accessed": RETRIEVED,
            "kind": "primary",
            "measure": "Station value is entry plus exit movement. The network value is the published exit total; both dimensions are retained.",
            "files": [{"period": period, "url": url} for period, url in FILES],
        },
        "stations": [by_code[station["StationID"]] for station in stations],
        "network": network,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT}: {len(stations)} station records, {len(FILES)} months")


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"import failed: {error}", file=sys.stderr)
        raise
