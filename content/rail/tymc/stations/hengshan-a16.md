---
title: "Hengshan Station — Taoyuan Airport MRT"
summary: "Hengshan Station (A16), stop 16 of 22 on the Taoyuan Airport MRT, in 大園區."
order: 116
line: A
operator: TYMC
spine: A16
updated: 2026-08-28
facts:
  - label: Station code
    value: A16
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 橫山站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 大園區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 16
    source: tdx-tymc-sor
  - label: Structure
    value: Elevated, two levels above ground, side platform, 2 tracks; two conflicting station-body length figures (see below)
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Commuter (普通車) only
    source: tymc-express-timetable
  - label: Exits
    value: 1; north side of Dazhu South Road
    source: tymc-a16-station
specs:
  - label: Cumulative distance from A1
    value: 41.38
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
  - id: tymc-a16-station
    title: Taoyuan Airport MRT A16 station information
    titleOriginal: 桃園機場捷運橫山站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A16/A4
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
    note: Describes civil package CE03B, the elevated Qingpu-to-Zhongli bridge and the four stations it carries.
  - id: dorts-airport-a-table
    title: Airport MRT station table
    titleOriginal: 機場線車站一覽表
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23131
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Current station table giving each station's location, structure and any stated interchange."
  - id: dorts-green
    title: Taoyuan Metro Green Line project page
    titleOriginal: 桃園市政府捷運工程局-捷運綠線
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23132
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Current Green Line project page giving station codes, naming status and target opening.
  - id: zhwiki-a16
    title: A16 station article
    titleOriginal: 橫山站_(桃園市)
    publisher: 維基百科 (zh.wikipedia)
    url: https://zh.wikipedia.org/zh-tw/%E6%A9%AB%E5%B1%B1%E7%AB%99_(%E6%A1%83%E5%9C%92%E5%B8%82)
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Encyclopedia article giving station-body dimensions not found in the primary sources read for this page; used as a lead/secondary figure, not an authority.
  - id: ltn-a16-greenline
    title: "Airport MRT station-by-station series: A16 Hengshan, also a Green Line terminus"
    titleOriginal: 機場捷運各站系列報導A16橫山站 也是綠線終點站
    publisher: Liberty Times (自由時報)
    url: https://news.ltn.com.tw/news/local/paper/1092541
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "News reporting naming G18 as Hengshan's Green Line interchange, conflicting with Taoyuan DORTS's own G19; read in full."
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

Hengshan is named on Taoyuan City's own current Airport Line station table as interchanging with the under-construction Metro Green Line at station G19 — the second of the Green Line's two stated Airport MRT branch points, alongside Kengkou/A11 — and the Green Line's own project page confirms the same G19 code and states that station's own name has not yet been finalised, together with G16, G17 and G18.[^dorts-airport-a-table][^dorts-green] That same Green Line page gives a 2030 (119年) target for the Green Line's main-line opening.[^dorts-green] A Liberty Times station-by-station report instead names G18, not G19, as Hengshan's interchange, unattributed to any named authority; this page follows the two directly-sourced Taoyuan DORTS primary pages, which agree with each other on G19, and records the news report's differing G18 as a conflict rather than silently adopting either.[^ltn-a16-greenline] Neither the Green Line nor this interchange currently operates; TYMC's own A16 station page does not mention it at all.[^tymc-a16-station]

The station was built under the same CE03B elevated civil package as Dayuan, Linghang and Taoyuan HSR Station.[^rb-102-annual-report] Sources disagree on the station's own dimensions in the same pattern as Dayuan: zh.wikipedia gives about 153.6 m by 26.4 m,[^zhwiki-a16] while the Railway Bureau's architecture report gives 80 m by 27.7 m.[^rb-airport-station-architecture] Both describe the same elevated, two-level, side-platform station, and both figures are published rather than resolved.

No rail interchange currently operates at this station. TYMC's own timetable page does not list A16 among the express (直達車) stops; only the commuter (普通車) service, calling at every station, serves this stop.[^tymc-express-timetable]

Hengshan opened with the rest of the initial line on 2 March 2017.[^tymc-history]

TDX's own committed route data places A16 41.38 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor]
