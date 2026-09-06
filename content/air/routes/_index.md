---
title: Domestic route families
description: A dated airport-pair view of Taiwan's scheduled domestic aviation, with verified September 2026 snapshots from Hualien and Penghu and an explicit gap where the official national timetable is not a stable route catalogue.
summary: A dated airport-pair view of Taiwan's scheduled domestic aviation, with verified September 2026 snapshots from Hualien and Penghu and an explicit gap where the official national timetable is not a stable route catalogue.
order: 1
updated: 2026-09-06
facts:
  - label: Hualien airport-origin route families in snapshot
    value: 3 — Taipei, Taichung and Kaohsiung
    source: hualien-route-pages
  - label: Penghu airport-origin route families in snapshot
    value: 6 — Taipei, Taichung, Tainan, Chiayi, Kaohsiung and Kinmen
    source: penghu-route-page
  - label: Combined station snapshots
    value: 9 airport-origin family records
    source: route-snapshot-method
  - label: Complete national route-family total
    value: TBC
  - label: Timetable window
    value: September 2026, with airline announcements controlling changes
    source: caa-domestic-timetable
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
    value: TBC
sources:
  - id: caa-domestic-timetable
    title: Domestic scheduled-route flight timetable
    titleOriginal: 國內定期航線班機時刻表
    publisher: Civil Aeronautics Administration, Ministry of Transportation and Communications (交通部民用航空局)
    url: "https://www.caa.gov.tw/RegularFlight.aspx?a=268&lang=1"
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: "CAA's current timetable page exposes July, August and September 2026 selectors and a September download; it states 「僅供參考，如有異動，正確時間仍以航空公司公告為準」. It is the national official timetable surface, but the page does not present a stable, directly readable route-family catalogue in the fetched HTML."
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

This is the route-family layer for domestic aviation. It answers “which
airport pairs are visible in the current official schedule surfaces?” without
turning one month's changing flight table into a permanent network map.[^caa-domestic-timetable]

## Verified September 2026 snapshots

Hualien Airport's own monthly timetable navigation exposes three airport-origin
families: Hualien–Taipei, Hualien–Taichung and Hualien–Kaohsiung.[^hualien-route-pages]
The Taipei page reports a database time of 2026-09-06 05:50:05; the Taichung and
Kaohsiung pages reported 2026-09-05 database times when fetched.[^hualien-route-pages]
Those are three dated station records, not a claim that the same pattern will
remain in a later month.[^caa-domestic-timetable]

Penghu Airport's fixed-departure table displayed six destination families in
the September 2026 validity window: Taipei, Taichung, Tainan, Chiayi,
Kaohsiung and Kinmen.[^penghu-route-page] Its rows carry the flight number,
aircraft, times and validity dates, which is why the page records a snapshot of
families rather than a timeless daily-frequency claim.[^penghu-route-page]

Together these two station snapshots provide nine airport-origin family
records for this page's dated sample: three from Hualien and six from Penghu.[^route-snapshot-method]
The count is intentionally defined as a sample of official station surfaces,
not as Taiwan's complete domestic route total.[^route-snapshot-method]

## How to use the index

Use the [Hualien Airport page](/air/airports/hualien/) for the flight numbers,
operating days and ground-access qualifications behind its three families.[^hualien-route-pages]
Use the [Penghu Airport page](/air/airports/penghu/) for the six displayed
families and its explicit bus and passenger-shipping links.[^penghu-route-page]
The [airport index](/air/airports/) remains the canonical place for airport
history, facilities and intermodal context; this page is the dated route
discovery layer rather than a second airport dossier.[^route-snapshot-method]

## What remains TBC

The complete national route-family total, a stable all-airport matrix, current
route-wide fares and a guaranteed current frequency for every airport pair are
TBC.[^caa-domestic-timetable] CAA's official page exposes a September 2026
download and warns that airline announcements control when times change, but
the fetched HTML does not provide a stable national catalogue that can be
joined safely to every airport node.[^caa-domestic-timetable]
