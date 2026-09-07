---
title: Domestic route families
description: A dated airport-pair view of Taiwan's scheduled domestic aviation, with verified September 2026 snapshots from Hualien and Penghu and an explicit gap where the official national timetable is not a stable route catalogue.
summary: A dated airport-pair view of Taiwan's scheduled domestic aviation, with verified September 2026 snapshots from Hualien and Penghu and an explicit gap where the official national timetable is not a stable route catalogue.
order: 1
updated: 2026-09-07
facts:
  - label: September 2026 undirected airport-pair families
    value: 24
    source: caa-september-2026-download
  - label: September 2026 directional route labels
    value: 48
    source: caa-september-2026-download
  - label: September 2026 timetable rows
    value: 285
    source: caa-september-2026-download
  - label: Operators in the workbook
    value: 3 — UNI Air, Mandarin Airlines and Daily Air
    source: caa-september-2026-download
  - label: Timetable window
    value: 2026-09-01 through 2026-09-30
    source: caa-september-2026-download
specs:
  - label: Hualien Taipei schedule database time
    value: 2026-09-06 05:50:05
    source: hualien-route-pages
  - label: Hualien Taichung and Kaohsiung schedule database time
    value: 2026-09-05, as displayed on each route page
    source: hualien-route-pages
  - label: Penghu schedule retrieval
    value: 2026-09-06
    source: penghu-route-page
  - label: National timetable export
    value: 2026-07-02 publisher update; September 2026 workbook retrieved 2026-09-07
    source: caa-september-2026-download
sources:
  - id: caa-domestic-timetable
    title: Domestic scheduled-route flight timetable
    titleOriginal: 國內定期航線班機時刻表
    publisher: Civil Aeronautics Administration, Ministry of Transportation and Communications (交通部民用航空局)
    url: "https://www.caa.gov.tw/RegularFlight.aspx?a=268&lang=1"
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: "CAA's current timetable page exposes July, August and September 2026 selectors and links the September workbook; it states 「僅供參考，如有異動，正確時間仍以航空公司公告為準」."
  - id: caa-september-2026-download
    title: September 2026 domestic scheduled-route flight timetable
    titleOriginal: 115年9月國內定期航線班機時刻表
    publisher: Civil Aeronautics Administration, Ministry of Transportation and Communications (交通部民用航空局)
    url: https://www.caa.gov.tw/FileAtt.ashx?id=41066&lang=1
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: "The full official XLSX was fetched from the CAA download link and parsed as 285 timetable rows, 48 directional route labels and 24 normalized undirected airport-pair families for 2026-09-01 through 2026-09-30."
  - id: hualien-route-pages
    title: Hualien Airport monthly flight timetables
    titleOriginal: 花蓮-台北／花蓮-台中／花蓮-高雄
    publisher: Hualien Airport, Civil Aeronautics Administration (交通部民用航空局花蓮航空站)
    url: "https://www.hulairport.gov.tw/Schedule03?lang=TW&program=722"
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: "The airport's three linked monthly timetable pages identify Taipei, Taichung and Kaohsiung route families. The Taipei page displays database time 2026-09-06 05:50:05; the Taichung and Kaohsiung pages displayed 2026-09-05 times. Their own navigation labels the three pairs 「花蓮-台北」, 「花蓮-台中」 and 「花蓮-高雄」."
  - id: penghu-route-page
    title: Penghu Airport fixed departure schedule
    titleOriginal: Penghu Airport fixed schedule
    publisher: Penghu Airport, Civil Aeronautics Administration (交通部民用航空局澎湖航空站)
    url: "https://www.mkport.gov.tw/English/schedule/FixFlight_Dep.aspx"
    accessed: 2026-09-06
    kind: primary
    lang: en
    note: "The airport's live fixed-departure table was fetched with September 2026 validity windows. The displayed destination families from Penghu were Taipei, Taichung, Tainan, Chiayi, Kaohsiung and Kinmen; the source exposes flight numbers, aircraft, times and validity windows rather than a permanent route total."
  - id: route-snapshot-method
    title: Penghu Airport and Hualien Airport route pages
    titleOriginal: 機場班機時刻表
    publisher: Civil Aeronautics Administration aviation stations (交通部民用航空局所屬航空站)
    url: "https://www.caa.gov.tw/RegularFlight.aspx?a=268&lang=1"
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: "The combined count is a transparent addition of the three route families shown by Hualien's three linked pages and the six destination families shown by Penghu's fixed-departure page. It is not a national total and does not deduplicate airport-origin records across different station snapshots."
---

This is the route-family layer for domestic aviation. It answers which airport
pairs appear in the Civil Aeronautics Administration's current official
schedule workbook without turning one month's changing flight table into a
permanent network map.[^caa-domestic-timetable][^caa-september-2026-download]

## Verified September 2026 snapshot

The September workbook is labelled `2026/09/01~2026/09/30` and was last updated
by the CAA on 2 July 2026.[^caa-september-2026-download] Parsing the complete
file produced 285 timetable rows after the title and header rows. Each row has a
directional route label, airline, flight number, departure and arrival time,
operating-day pattern, aircraft field and an optional note; the notes include
extra flights and cancellations, so a row is not the same thing as a daily
departure.[^caa-september-2026-download]

Normalising the 48 directional labels into unordered airport pairs produces 24
route families for this month.[^caa-september-2026-download] The families reach
the main-island airports of Taipei Songshan, Taichung, Tainan, Chiayi,
Kaohsiung, Hualien and Taitung, and the island airports at Kinmen, Penghu,
Nangan, Beigan, Green Island, Orchid Island, Qimei and Wang'an.[^caa-september-2026-download]
The last statement describes airport names appearing in the workbook, not a
claim that every airport has service from every named operator.[^caa-september-2026-download]

The workbook contains three operator labels: UNI Air (立榮航空), Mandarin
Airlines (華信航空) and Daily Air (德安航空).[^caa-september-2026-download] UNI
Air and Mandarin Airlines appear across the larger main-island–island pairs,
while Daily Air appears on the September Green Island, Orchid Island, Qimei
and Wang'an records.[^caa-september-2026-download] This is a measurement of
the month-specific timetable file; it is not a claim about the carriers'
permanent fleet, full commercial network or future timetable.[^caa-september-2026-download]

## How to use the index

Use the [Hualien Airport page](/air/airports/hualien/) for the airport's own
monthly timetable links and its ground-access qualifications.[^hualien-route-pages]
Use the [Penghu Airport page](/air/airports/penghu/) for the airport-specific
departure table and its explicit bus and passenger-shipping links.[^penghu-route-page]
Use the CAA workbook source in the references below for the 24-family national
September snapshot; the source file, not this prose, is the authority for the
individual flight number and operating-day rows.[^caa-september-2026-download]
The [airport index](/air/airports/) remains the canonical place for airport
history, facilities and intermodal context; this page is the dated route
discovery layer rather than a second airport dossier.[^route-snapshot-method]

## What remains TBC

The complete all-month route-family total, route-wide fares, a permanent
airport-to-airport matrix and a guaranteed current frequency for every pair are
TBC.[^caa-domestic-timetable][^caa-september-2026-download] The CAA explicitly
warns that the timetable is for reference and that the correct time remains the
airline's announcement when changes occur.[^caa-domestic-timetable] The guide
therefore stores this as a dated acquisition snapshot and does not infer a
route from an airport page or from one extraordinary flight alone.
