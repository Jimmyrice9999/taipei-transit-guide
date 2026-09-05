---
title: "Airport Hotel Station — Taoyuan Airport MRT"
summary: "Airport Hotel Station (A14a), stop 14 of 22 on the Taoyuan Airport MRT, in 大園區."
order: 114
line: A
operator: TYMC
spine: A14a
updated: 2026-08-28
facts:
  - label: Station code
    value: A14a
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 機場旅館站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 大園區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 14
    source: tdx-tymc-sor
  - label: Structure
    value: Underground, one island platform, 2 tracks, one entrance
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Commuter (普通車) only
    source: tymc-express-timetable
  - label: Exits
    value: 1; Airport South Road 1-2
    source: tymc-a14a-station
specs:
  - label: Cumulative distance from A1
    value: 37.232
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
  - id: tymc-a14a-station
    title: Taoyuan Airport MRT A14a station information
    titleOriginal: 桃園機場捷運機場旅館站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A14a/A4
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
  - id: tymc-a14a-first-last
    title: "A14a first and last trains"
    titleOriginal: "First and last trains: A14a Airport Hotel Station"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: https://www.tymetro.com.tw/tymetro-new/en/_pages/travel-guide/dep-A14a
    accessed: 2026-09-05
    kind: primary
    lang: en
    note: "The operator's current English first/last-train table records A14a as commuter-only and gives the displayed terminal times."
  - id: dorts-airport-a-table
    title: Airport MRT station table
    titleOriginal: 機場線車站一覽表
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23131
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Current station table giving each station's location, structure and any stated interchange."
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

Airport Hotel was not part of the Airport MRT's original station plan. The Railway Bureau's architecture report records it as an addition coordinated between the then High Speed Rail Bureau and the Civil Aeronautics Administration to serve Taoyuan International Airport's aviation-business operations centre and hotel project, sited between the future A15/A16 stations; it was known during construction as "Transit Hotel Station" before being named Airport Hotel Station on 22 September 2008.[^rb-airport-station-architecture] Taoyuan City's own current Airport MRT station table still describes its surroundings only as "near Taiwan Taoyuan International Airport's transit hotel," without naming a specific hotel brand.[^dorts-airport-a-table] The platform serves commuter (普通車) trains only, a restriction TYMC's own timetable page and the Railway Bureau's architecture report both state directly.[^tymc-express-timetable][^rb-airport-station-architecture]

No rail interchange exists here. TYMC's own station page does not itself name any specific hotel or shopping complex reachable from the station, despite the "Airport Hotel" name; a hotel connection near this station is stated in secondary sources but is not confirmed against the operator's own page, and is left TBC rather than named here.

TYMC's own station page gives the address as Airport South Road 1-2, with operating hours from 05:50 to the last train, one elevator at the exit and a second serving platforms 1 and 2 from the paid-area concourse; it records three bus routes serving the station (1623, 1627, 706B) and states the station itself has no parking.[^tymc-a14a-station]

Airport Hotel opened with the rest of the initial line on 2 March 2017, despite its own construction predating the wider project's later stations.[^tymc-history]

TDX's own committed route data places A14a 37.232 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor]

TYMC's current English first/last-train table confirms the commuter-only service boundary in operational terms: it shows no express first or last train for A14a.[^tymc-a14a-first-last] The displayed commuter first trains are 06:00 to A1 and 06:00 to A12, and the displayed commuter last trains are 23:31 to A1 and 00:18 to A12; no A22 value is shown on that table.[^tymc-a14a-first-last] The page is a timetable display, not a promise that these times remain unchanged outside the operator's stated update window.[^tymc-a14a-first-last]

The absence of an A22 entry is itself kept as a display boundary, not converted into a claim that no train can ever reach A22 from A14a.[^tymc-a14a-first-last] The fetched table lists the displayed directions and times for this station but does not explain why that field is blank; the reason remains TBC rather than being inferred from the route map.[^tymc-a14a-first-last]
