---
title: "Linghang Station — Taoyuan Airport MRT"
summary: "Linghang Station (A17), stop 17 of 22 on the Taoyuan Airport MRT, in 大園區."
order: 117
line: A
operator: TYMC
spine: A17
updated: 2026-08-28
facts:
  - label: Station code
    value: A17
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 領航站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 大園區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 17
    source: tdx-tymc-sor
  - label: Structure
    value: Elevated, two levels above ground, two island platforms, 4 tracks; two conflicting station-body length figures (see below)
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Commuter (普通車) only
    source: tymc-express-timetable
  - label: Exits
    value: 1; north side of Linghang North Road Section 4
    source: tymc-a17-station
specs:
  - label: Cumulative distance from A1
    value: 42.96
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
  - id: tymc-a17-station
    title: Taoyuan Airport MRT A17 station information
    titleOriginal: 桃園機場捷運領航站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A17/A4
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
  - id: tymc-a17-timetable
    title: A17 station timetable
    titleOriginal: A17 車站時刻表
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-A17
    accessed: 2026-09-05
    kind: primary
    lang: zh-Hant
    note: "The operator's full current timetable page gives the first, regular and late added commuter departures shown for A17."
  - id: rb-airport-depot-page
    title: Airport MRT maintenance depots record
    titleOriginal: 機場捷運維修機廠
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/public/files/artsinfo/1500644721-0.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Names the Qingpu and Luzhu maintenance depots and their parking, cleaning, maintenance, overhaul and line-inspection functions.
  - id: rb-102-annual-report
    title: Railway Bureau 102nd-year annual report
    titleOriginal: 鐵道局102年度年報
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/public/files/artsinfo/1503058979-0.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Describes civil package CE03B, the elevated Qingpu-to-Zhongli bridge and the four stations it carries.
  - id: zhwiki-a17
    title: A17 station article
    titleOriginal: 領航站
    publisher: 維基百科 (zh.wikipedia)
    url: https://zh.wikipedia.org/zh-tw/%E9%A0%98%E8%88%AA%E7%AB%99
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Encyclopedia article giving station-body dimensions not found in the primary sources read for this page; used as a lead/secondary figure, not an authority.
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

Linghang sits beside TYMC's Qingpu Depot (青埔機廠), which also serves as the operator's own headquarters, at 251 Linghang North Road Section 4 in Dayuan District — TYMC relocated its headquarters to the depot site on 19 July 2014, ahead of the line's 2017 opening.[^rb-airport-station-architecture] This station was built under the same CE03B elevated civil package as Dayuan, Hengshan and Taoyuan HSR Station, which also covered the Qingpu Depot's administration building.[^rb-102-annual-report] A Railway Bureau depot page names Qingpu and the separate Luzhu depot as the line's two maintenance facilities, covering parking, cleaning, maintenance, overhaul and line-inspection functions for the fleet, without publishing a station-by-station operating roster; which depot serves which trains day to day is not established here.[^rb-airport-depot-page]

Sources disagree on the station's own dimensions in the same pattern as Dayuan and Hengshan: zh.wikipedia gives about 148.8 m by 21.6 m,[^zhwiki-a17] while the Railway Bureau's architecture report gives 87 m by 22.42 m and additionally states a 4-track arrangement not restated in the Wikipedia excerpt read for this page.[^rb-airport-station-architecture] Both length figures are published rather than resolved.

No rail interchange is established at this station. TYMC's own timetable page does not list A17 among the express (直達車) stops; only the commuter (普通車) service, calling at every station, serves this stop.[^tymc-express-timetable]

Linghang opened with the rest of the initial line on 2 March 2017.[^tymc-history] It sits within Dayuan District, Taoyuan, one of six current Airport MRT stations there — Dayuan, Hengshan, Linghang, and the two airport terminal stations plus Airport Hotel all lie in that district, per this project's own committed TDX administrative-district data.[^tdx-tymc-station]

TDX's own committed route data places A17 42.96 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor]

The detailed timetable page currently shows the combined Taipei/airport direction beginning at 06:06, with the displayed daytime departures stepping in 15-minute increments; the late added airport-bound departures shown are 23:38, 23:53 and 00:08.[^tymc-a17-timetable] The separate Zhongli-direction display begins at 06:12 and continues to a last shown departure at 00:11, so the operator's page does not present one symmetrical first/last pair for both directions.[^tymc-a17-timetable]

The timetable's normal A17-to-Taipei/airport pattern remains at :06, :21, :36 and :51 through the displayed daytime rows, while the southbound pattern is offset to :12, :27, :42 and :57.[^tymc-a17-timetable] That offset is useful operational context: the page records two ordinary all-stop streams at the station, not a single hourly timetable, and marks the three late airport services as added airport trips rather than ordinary departures.[^tymc-a17-timetable]
