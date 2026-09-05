---
title: "Chang Gung Memorial Hospital Station — Taoyuan Airport MRT"
summary: "Chang Gung Memorial Hospital Station (A8), stop 8 of 22 on the Taoyuan Airport MRT, in 龜山區."
order: 108
line: A
operator: TYMC
spine: A8
updated: 2026-08-28
facts:
  - label: Station code
    value: A8
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 長庚醫院站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 龜山區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 8
    source: tdx-tymc-sor
  - label: Structure
    value: Elevated, three levels above ground, two island platforms, 4 tracks (the two middle tracks for express trains, the two outer tracks for commuter trains)
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Both express (直達車) and commuter (普通車)
    source: tymc-express-timetable
  - label: Exits
    value: 1; southeast corner of the Wenhua 1st Road–Fuxing 1st Road intersection
    source: tymc-a8-station
specs:
  - label: Cumulative distance from A1
    value: 20.145
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
  - id: tymc-a8-station
    title: Taoyuan Airport MRT A8 station information
    titleOriginal: 桃園機場捷運長庚醫院站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A8/A4
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
  - id: tymc-a8-timetable
    title: "A8 station timetable"
    titleOriginal: "長庚醫院站時刻表"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-A8
    accessed: 2026-09-05
    kind: primary
    lang: zh-Hant
    note: "The operator's full current station timetable gives A8's alternating express/commuter service and late added airport rows."
  - id: ltn-a8-bus-hub
    title: "Airport MRT station-by-station series: A8 Chang Gung Memorial Hospital, a transport transfer hub"
    titleOriginal: 機場捷運各站系列報導A8長庚醫院站 轉運交通樞紐
    publisher: Liberty Times (自由時報)
    url: https://news.ltn.com.tw/news/local/paper/1091254
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "News reporting describing the station's role as a bus-transfer hub and express-transfer point for Guishan and Linkou residents, read in full."
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

Chang Gung Memorial Hospital is named for the adjacent Linkou Chang Gung Memorial Hospital and sits within a joint-development complex including a shopping mall and hotel built above and beside the station.[^rb-airport-station-architecture] No conventional rail interchange exists here, but TYMC's own station page and a Taiwanese newspaper's station-by-station series both describe it as the line's de facto bus-transfer hub for Guishan and Linkou: the newspaper cites over 40 bus routes serving the station, reaching New Taipei's Linkou, Xinzhuang, Shulin, Sanchong, Banqiao, Luzhou and Bali districts and Taipei's Xinyi and Shilin districts.[^ltn-a8-bus-hub] The same report states that A7 and A9 passengers travelling toward Taipei or the airport by express must change trains at A8, since A8 is the nearest of the fixed express stops to both.[^ltn-a8-bus-hub]

TYMC's own timetable page lists A8 among the fixed express (直達車) stops — A1, A3, A8, A12, A13 — alongside the commuter (普通車) service that calls at every station.[^tymc-express-timetable] The elevated station's own track arrangement, with express and commuter services on separate track pairs at the same platforms, is recorded by TDX's committed structure data and corroborated independently in the sources read for this page; a claim that A8 is the line's only station where an express train overtakes a commuter train via a same-platform transfer could not be traced to any primary source and is not repeated here.

Chang Gung Memorial Hospital opened with the rest of the initial line on 2 March 2017.[^tymc-history]

TDX's own committed route data places A8 20.145 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor] The exact floor area or storey count of the joint-development complex above the station is not established by any source read for this page and stays TBC, beyond the general description of a mixed residential-commercial building.

The operator's detailed A8 table shows an express departure followed about two minutes later by a commuter departure in the northbound direction: for example, 05:56 express/05:58 commuter and then 06:11/06:13.[^tymc-a8-timetable] In the airport-bound direction the first displayed express is 05:52, followed by 06:08 commuter, and the late table includes added airport services at 23:51 and 00:06.[^tymc-a8-timetable] This supports the service distinction without turning it into an unsupported claim about overtaking or platform operations.[^tymc-a8-timetable]

The schedule therefore supplies a second, operational reason A8 is different from neighbouring commuter-only stations: the same timetable page places fixed express and ordinary commuter departures side by side, while retaining separate late airport-service rows.[^tymc-a8-timetable]
