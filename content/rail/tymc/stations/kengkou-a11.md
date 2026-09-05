---
title: "Kengkou Station — Taoyuan Airport MRT"
summary: "Kengkou Station (A11), stop 11 of 22 on the Taoyuan Airport MRT, in 蘆竹區."
order: 111
line: A
operator: TYMC
spine: A11
updated: 2026-08-28
facts:
  - label: Station code
    value: A11
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 坑口站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 蘆竹區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 11
    source: tdx-tymc-sor
  - label: Structure
    value: Elevated, three levels above ground, two island platforms, 4 tracks, with reserved space for a future freight-park branch
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Commuter (普通車) only
    source: tymc-express-timetable
  - label: Exits
    value: 1; southwest of Kengguo Road
    source: tymc-a11-station
specs:
  - label: Cumulative distance from A1
    value: 31.721
    unit: km
    source: tdx-tymc-sor
sources:
  - id: tdx-tymc-station
    title: TDX Taoyuan Airport MRT station records
    titleOriginal: 桃園機場捷運車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/TYMC?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The committed 22-station snapshot supplies this station's code, Traditional Chinese and English names, address, administrative city/district and coordinates."
  - id: tdx-tymc-sor
    title: TDX Taoyuan Airport MRT station-of-route records
    titleOriginal: 桃園機場捷運路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TYMC?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Route A-1 (Taipei Main Station to Laojie River) gives this station's sequence position and cumulative distance from A1."
  - id: tymc-a11-station
    title: Taoyuan Airport MRT A11 station information
    titleOriginal: 桃園機場捷運坑口站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A11/A4
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own current station page, giving the address, exit table and accessible-lift information used on this page."
  - id: rb-airport-station-architecture
    title: Taoyuan Airport MRT station architecture report
    titleOriginal: 桃園國際機場聯外捷運系統車站建築設計報告
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/public/files/artsinfo/1500644721-0.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The Bureau's own full architecture report gives each station's structure, platform form, track count and design-contract package."
  - id: tymc-express-timetable
    title: Taoyuan Airport MRT route and stopping pattern
    titleOriginal: 桃園捷運機場線路線圖及停靠站
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/road.html
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own current page states the fixed express (直達車) stop list (A1, A3, A8, A12, A13), the peak-hour \"Huanbei Express\" addition of A18 and A21, and that the commuter (普通車) service calls at every station."
  - id: tymc-a11-timetable
    title: "A11 station timetable"
    titleOriginal: "坑口站時刻表"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-A11
    accessed: 2026-09-05
    kind: primary
    lang: zh-Hant
    note: "The operator's full current station timetable gives A11's all-stop commuter intervals and late added airport services."
  - id: dorts-green
    title: Taoyuan Metro Green Line project page
    titleOriginal: 桃園市政府捷運工程局-捷運綠線
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23132
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Current Green Line project page describing the route forking after G14 to reach Airport MRT station A11.
  - id: dorts-green-gc01
    title: Green Line GC01 contract station record
    titleOriginal: 捷運綠線GC01標
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?n=23242
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Gives station G15b's design concept and its stated transfer relationship with Airport MRT station A11, plus a mid-2026 construction-progress figure for the package."
  - id: tymc-history
    title: Company milestones
    titleOriginal: 桃捷大事紀
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/history.html
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States the Airport MRT opened 2 March 2017 (機場捷運線於106年3月2日正式營運通車)."
---

Kengkou is named as a stated future transfer point to Taoyuan's own under-construction Metro Green Line, at that line's planned station G15b — a relationship recorded on Taoyuan City's own current project pages for both lines, not merely inferred from proximity.[^dorts-green][^dorts-green-gc01] The Green Line project page describes the route forking west after station G14 to reach A11, and the G15b station-specific description gives it a wing-shaped design intended to evoke "dreams taking flight," reflecting its airport-adjacent siting.[^dorts-green-gc01] A civil-package progress note on the same Taoyuan project page put this section's construction at 93.85% complete as of a mid-2026 update, targeting the Green Line's first-phase opening later in 2026; the exact opening date is not stated on the page and is left TBC.[^dorts-green-gc01]

Secondary sources disagree with each other on whether A11 itself is elevated or underground: zh.wikipedia's own dedicated A11 article describes an elevated, two-island-platform station, while a station-list table on zh.wikipedia's general Airport MRT overview article instead marks A11 underground. The Railway Bureau's architecture report — a primary source — describes A11 as elevated with reserved space for a future freight-park branch, and that primary reading is what this page follows; the secondary disagreement is recorded here rather than silently dropped.[^rb-airport-station-architecture]

No rail interchange currently operates at this station. TYMC's own timetable page does not list A11 among the express (直達車) stops; only the commuter (普通車) service, calling at every station, serves this stop.[^tymc-express-timetable]

Kengkou opened with the rest of the initial line on 2 March 2017.[^tymc-history]

TDX's own committed route data places A11 31.721 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor]

The operator's current table displays commuter first departures at 06:08 toward the airport and 06:11 toward Taipei.[^tymc-a11-timetable] The ordinary last departures are 23:41 in both displayed directions, followed by added airport services at 00:08 and 00:23 toward the airport.[^tymc-a11-timetable] Daytime rows remain a 15-minute all-stop pattern, and A11 is not in the express-stop list.[^tymc-a11-timetable][^tymc-express-timetable]

The A11 timetable identifies the southbound heading as “airport, Zhongli (Laojie River)” rather than separating A13 and A22.[^tymc-a11-timetable] That is why the page records the first and late service values without assigning a terminal to every departure.[^tymc-a11-timetable] The detailed table supports the 15-minute daytime pattern and the two post-23:00 added airport workings, but no separate A11–A22 stopping claim.[^tymc-a11-timetable]

No fixed express row appears for A11.[^tymc-a11-timetable]

The station timetable labels the regular rows as all-stop commuter services.[^tymc-a11-timetable]
