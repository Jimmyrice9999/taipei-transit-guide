---
title: "Huanbei Station — Taoyuan Airport MRT"
summary: "Huanbei Station (A21), stop 21 of 22 on the Taoyuan Airport MRT, in 中壢區."
order: 121
line: A
operator: TYMC
spine: A21
updated: 2026-08-28
facts:
  - label: Station code
    value: A21
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 環北站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 中壢區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 21
    source: tdx-tymc-sor
  - label: Structure
    value: Underground, two levels below ground, one island platform, 2 tracks; the Taoyuan bus terminal (桃園轉運站) adjoins its east side
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Both express (直達車) and commuter (普通車)
    source: tymc-express-timetable
  - label: Exits
    value: 1; northwest corner of Zhongfeng North Road Section 1 and Huanbei Road
    source: tymc-a21-station
specs:
  - label: Cumulative distance from A1
    value: 50.81
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
  - id: tymc-a21-station
    title: Taoyuan Airport MRT A21 station information
    titleOriginal: 桃園機場捷運環北站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A21/A4
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
  - id: rb-102-annual-report
    title: Railway Bureau 102nd-year annual report
    titleOriginal: 鐵道局102年度年報
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/public/files/artsinfo/1503058979-0.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Describes civil package CU03, the underground works that built this station.
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

Huanbei was the line's southern terminus from its 2017 opening until Laojie River Station opened south of it in 2023; a Railway Bureau annual report on the underground civil package (CU03) that built this station and its associated cut-and-cover and emergence sections records completion, partial acceptance on 15 August, fire-safety approval on 19 November, and three-stage SCADA testing completed on 17–18 December of the reporting year, at 99.96% year-end progress.[^rb-102-annual-report] The Taoyuan bus terminal (桃園轉運站) adjoins the station's east side, per the same architecture report.[^rb-airport-station-architecture]

TYMC's own timetable page lists A21 among the peak-hour "Huanbei Express" (環北直達車) stops — the base express pattern of A1, A3, A8, A12 and A13 with A18 and A21 added during peak hours — alongside the commuter (普通車) service that calls at every station.[^tymc-express-timetable] Every current southward extension proposal found in the sources read for this page (see Laojie River Station and the line's own page) begins its description from Huanbei, not from any station further south; nothing read describes a proposed extension beyond the current Zhongli-area works.

TYMC's own station page gives the address as Zhongfeng North Road Section 1 No. 26, with a single exit at the northwest corner of that road and Huanbei Road.[^tymc-a21-station] The Railway Bureau's architecture report groups this station with National Taiwan Sport University, the two airport terminal stations, the not-yet-open Terminal 3 station and Airport Hotel under the same underground design contract, DU01.[^rb-airport-station-architecture]

Huanbei opened with the rest of the initial line on 2 March 2017.[^tymc-history]

TDX's own committed route data places A21 50.81 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor] Daily ridership at this station is not established by any source read for this page and stays TBC.
