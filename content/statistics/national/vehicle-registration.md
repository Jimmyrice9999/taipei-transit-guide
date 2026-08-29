---
title: Vehicle registration, 1988-2025
summary: A near-40-year MOTC series tracking Taiwan's motor-vehicle fleet from 8.4 million to 23.3 million registered vehicles, with scooters still outnumbering cars by nearly two to one.
updated: 2026-08-29
aliases:
  - 機動車輛登記數
facts:
  - label: Total registered motor vehicles, 1988 (民國77年)
    value: 8,426,868
    source: motc-vehicle-registration-1988-2016
  - label: Total registered motor vehicles, end of 2024 (113年底)
    value: 23,335,950
    source: motc-vehicle-registration-2015-2025
  - label: Cars, end of 2024
    value: 8,679,866
    source: motc-vehicle-registration-2015-2025
  - label: Scooters, end of 2024
    value: 14,656,084
    source: motc-vehicle-registration-2015-2025
  - label: Total registered motor vehicles, 2008 (97年)
    value: 21,092,358
    source: motc-vehicle-registration-1988-2016
specs:
  - label: Total motor vehicles, 1998 (87年)
    value: 15959135
    unit: vehicles
    source: motc-vehicle-registration-1988-2016
  - label: Total motor vehicles, 2016 (105年)
    value: 21510650
    unit: vehicles
    source: motc-vehicle-registration-1988-2016
  - label: Total motor vehicles, 2021 (110年)
    value: 22597694
    unit: vehicles
    source: motc-vehicle-registration-2015-2025
sources:
  - id: motc-vehicle-registration-1988-2016
    title: Motor vehicle registration, annual table 1988-2016
    publisher: 交通部 (Ministry of Transportation and Communications)
    url: "https://www.motc.gov.tw/uploaddowndoc?file=opendata/201702091025540.pdf"
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "MOTC's own annual registration table, 民國77年(1988) to 105年(2016), giving total, car and scooter counts. 1988: 8,426,868 total / 2,089,270 cars / 6,337,598 scooters. 1998: 15,959,135 / 5,430,095 / 10,529,040. 2008: 21,092,358 / 6,726,916 / 14,365,442. 2016: 21,510,650 / 7,842,423 / 13,668,227."
  - id: motc-vehicle-registration-2015-2025
    title: Motor vehicle registration, table 3-5, 2015-January 2025
    titleOriginal: 表3-5 機動車輛登記數
    publisher: 交通部公路局 (Highway Bureau, cited on the table), via 交通部
    url: "https://www.motc.gov.tw/uploaddowndoc?file=month/23050.pdf"
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "MOTC monthly statistics table, 民國104年(2015) to 114年1月(January 2025). 2021: 22,597,694 total / 8,330,774 cars / 14,266,920 scooters. End of 2024: 23,335,950 / 8,679,866 / 14,656,084. End of January 2025: 23,342,799 / 8,686,630 / 14,656,169."
  - id: motc-vehicle-registration-table3-9
    title: "Registered automobiles by brand, table 3-9, end of January 2025"
    titleOriginal: 表3-9 各型汽車按廠牌分
    publisher: 公路局 (Highway Bureau), via 交通部
    url: "https://www.motc.gov.tw/uploaddowndoc?file=month/23090.pdf"
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "A separate MOTC monthly table (brand breakdown, not the same document as table 3-5). Its own grand-total row for end of January 2025 sums 小客車 7,427,433 + 小貨車 979,116 + 特種車 73,868 + 大客車 29,910 + 大貨車 176,303 = 8,686,630, independently reproducing table 3-5's car figure for the same month to the digit."
  - id: dgbas-vehicle-nov2022
    title: "Motor vehicle new registrations fell 6.0% year-on-year, November 2022 (National Statistics Bulletin No. 246)"
    titleOriginal: 111年1-11月機動車輛新增掛牌數年減6.0% (國情統計通報第246號)
    publisher: 行政院主計總處 綜合統計處 (Directorate-General of Budget, Accounting and Statistics, DGBAS)
    url: "https://ws.dgbas.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvNDYzL3JlbGZpbGUvMTEwMjAvMjMwNDgyLzBjMWVkMGE5LWE1NGMtNDFhOS1hOWM0LTk2OGY0OGZiNjczZi5wZGY%3D&n=TjExMTEyMjYucGRm"
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "DGBAS's own statistical bulletin, but the table itself states its source as 交通部統計處 (MOTC), making this DGBAS relaying MOTC figures rather than MOTC's own publication; stat.motc.gov.tw could not be reached directly to verify against MOTC itself. Gives a stock count of registered electric vehicles as of end November 2022: 電能汽車 31,000 (+65.1% YoY), 電能機車 622,000 (+16.6% YoY)."
  - id: evalue-ev-2025
    title: "Pure-electric vehicle registrations reach 128,631 by end of 2025"
    titleOriginal: 截至2025年底，純電動車登記數達128,631輛，較2024年成長33.4%
    publisher: EVALUE (電動車專業網站), reprinted from 財團法人車輛研究測試中心 (ARTC)
    url: "https://www.evalue.com.tw/research/121"
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Cites 交通部公路局統計查詢網 as its underlying source, compiled by 車輛研究測試中心 (ARTC); that query site returned HTTP 403 on direct fetch, so this could not be verified against the Highway Bureau itself. Its own framing compares the 128,631 figure against roughly 8.44 million total 小客貨, suggesting the figure is scoped to cars/vans, not all electric vehicles including scooters — the exact scope is not stated plainly enough to be certain."
  - id: artc-ev-sales-2023
    title: "Taiwan's 2023 electric-vehicle sales reach 29,329 units"
    titleOriginal: 2023年臺灣電動車總銷售量達29,329輛（BEV+PHEV），年增率高達60%
    publisher: 財團法人車輛研究測試中心 (Automotive Research & Testing Center, ARTC)
    url: "https://www.artc.org.tw/tw/knowledge/articles/13739"
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "ARTC reporting on MOTC data (cites 交通部統計查詢網), not MOTC's own publication. This is an annual new-registration/sales count (BEV+PHEV combined), a different measure from the stock counts in the other two EV sources — 795 units in 2018 against 29,329 in 2023."
---

MOTC publishes an annual motor-vehicle registration count reaching back to
民國77年 (1988).[^motc-vehicle-registration-1988-2016] Two MOTC tables
together cover the run to the present: one spanning 1988 to 2016, the other
2015 through January 2025, with a one-year overlap between
them.[^motc-vehicle-registration-1988-2016][^motc-vehicle-registration-2015-2025]

## The fleet nearly tripled in size, and the mix shifted

In 1988, 8,426,868 motor vehicles were registered nationally: 2,089,270 cars
and 6,337,598 scooters — roughly three scooters for every
car.[^motc-vehicle-registration-1988-2016] By 1998 the total had almost
doubled to 15,959,135 (5,430,095 cars, 10,529,040 scooters), and by 2008 it
passed 21 million (21,092,358 total: 6,726,916 cars, 14,365,442
scooters).[^motc-vehicle-registration-1988-2016]

Growth continued but slowed after that. By the end of 2024 the registered
fleet stood at 23,335,950 vehicles — 8,679,866 cars and 14,656,084
scooters.[^motc-vehicle-registration-2015-2025] The car-to-scooter ratio has
narrowed steadily over the whole series, from roughly 1:3 in 1988 to
roughly 1:1.7 by the end of 2024, even though the scooter fleet remains the
larger of the two at every point in the series.[^motc-vehicle-registration-1988-2016][^motc-vehicle-registration-2015-2025]
The most recent month in this data, January 2025, shows the total still
climbing marginally to 23,342,799.[^motc-vehicle-registration-2015-2025]
Growth has slowed sharply across the series rather than continued at its
early pace: the fleet grew by roughly 7.5 million vehicles in the decade
from 1988 to 1998, but by only about 1.8 million across the eight years
from 2016 to 2024, even though the 2016-2024 span is nearly as
long.[^motc-vehicle-registration-1988-2016][^motc-vehicle-registration-2015-2025]

## A cross-check between two different MOTC tables agrees to the digit

Table 3-5 (the total/car/scooter series used above) and table 3-9 (a
separate MOTC monthly table breaking cars down by brand) are different
documents in the same monthly statistics bundle. Table 3-9's own vehicle-type
subtotals for end of January 2025 — 小客車 7,427,433, 小貨車 979,116, 特種車
73,868, 大客車 29,910 and 大貨車 176,303 — sum to 8,686,630, exactly matching
table 3-5's car figure for the same month.[^motc-vehicle-registration-table3-9]
That is a genuine independent cross-check for one shared month, though it does
not address the two original tables' own 2015-2016 overlap years, for which no
third source was found.

## Electric vehicles: three sources, three different measures

A MOTC or Highway Bureau table specifically breaking out electric vehicles
was not found — the Highway Bureau's own statistics-query site
returned errors on every attempt. Three secondary sources give EV figures,
but they measure different things and should not be read as one series:
DGBAS's own bulletin, citing MOTC as its source, gives a stock count of
31,000 registered electric cars and 622,000 electric scooters as of the end
of November 2022, each up more than 16% year-on-year.[^dgbas-vehicle-nov2022]
ARTC, via EVALUE, gives a stock count of 128,631 pure-electric vehicles by
the end of 2025, apparently scoped to cars and vans rather than all electric
vehicles including scooters, though the source does not state its own scope
plainly enough to be certain.[^evalue-ev-2025] ARTC separately gives an
annual new-registration count — not a stock count — of 29,329 electric
vehicles (battery-electric plus plug-in hybrid combined) sold in 2023, up
from 795 in 2018.[^artc-ev-sales-2023] These three figures are not
comparable to each other without knowing each one's exact vehicle-category
scope, which this page could not fully establish for the EVALUE figure
specifically.

## What remains TBC

A single MOTC table covering the entire 1988-2025 span without the seam
between the two source PDFs used here was not found, despite trying
MOTC's statistics-query site, the Highway Bureau's statistics-query site,
two data.gov.tw dataset pages and MOTC's monthly-bulletin index — every
route either failed to load or (one data.gov.tw dataset) confirmed a
different, later seam (starting February 2017) rather than a continuous
span back to 1988. The two original tables' own 2015-2016 overlap years
are TBC, not cross-checked against a third source. A single, MOTC-published
electric-vehicle registration series by year, comparable in scope to the
car/scooter totals above, is also TBC.
