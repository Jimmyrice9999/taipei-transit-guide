---
title: "Airport Terminal 2 Station — Taoyuan Airport MRT"
summary: "Airport Terminal 2 Station (A13), stop 13 of 22 on the Taoyuan Airport MRT, in 大園區."
order: 113
line: A
operator: TYMC
spine: A13
updated: 2026-08-28
facts:
  - label: Station code
    value: A13
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 機場第二航廈站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 大園區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 13
    source: tdx-tymc-sor
  - label: Structure
    value: "Underground, two side platforms, 2 tracks; no independent street entrance — reached only via Terminal 2's own B2 level"
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Both express (直達車) and commuter (普通車)
    source: tymc-express-timetable
  - label: Exits
    value: "1; southeast side of Terminal 2's B2 food court"
    source: tymc-a13-station
specs:
  - label: Cumulative distance from A1
    value: 35.896
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
  - id: tymc-a13-station
    title: Taoyuan Airport MRT A13 station information
    titleOriginal: 桃園機場捷運機場第二航廈站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A13/A4
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
  - id: rb-airport-risk-paper
    title: Airport MRT tunnel-crossing technical paper
    titleOriginal: 機場捷運穿越機場跑滑行道段技術報告
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/public/upimgs/D04/1520_Tunnel_for_TIAA_MRT.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The Bureau's own technical paper on the underground airport crossing shared by the two airport stations."
  - id: tycg-tourism-airport-mrt
    title: Airport MRT travel guide
    titleOriginal: 機場捷運交通資訊
    publisher: Taoyuan Tourism (桃園觀光導覽網, Taoyuan City Government)
    url: https://travel.tycg.gov.tw/zh-tw/traffic/airportmrt
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The city government's current tourism page states express and commuter journey times between named stations."
  - id: tymc-art
    title: Public art
    titleOriginal: 公共藝術
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/life/public_art.html
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own current public-art allocation list, incomplete for year, medium and selection method."
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

Airport Terminal 2 has no independent street-level entrance of its own: TYMC's own station page and zh.wikipedia's dedicated article agree that reaching the station requires going through Terminal 2 itself down to its B2 level, where the single exit connects to the terminal's food court.[^tymc-a13-station] TYMC's own facility listing records this as the only station on the line with no public restroom, a detail zh.wikipedia separately frames as unique among Taiwan's metro stations generally — a superlative this page does not independently verify beyond what TYMC's own facility list states for this station.[^tymc-a13-station]

TYMC's own timetable page lists A13 among the fixed express (直達車) stops — A1, A3, A8, A12, A13 — alongside the commuter (普通車) service that calls at every station.[^tymc-express-timetable] A Taoyuan tourism-portal page gives an express journey time from Taipei Main Station of 39 minutes.[^tycg-tourism-airport-mrt] This station and Terminal 1 sit within the same airport underground civil package described on the Terminal 1 page.[^rb-airport-risk-paper]

TYMC's own station page names an inquiry desk near the exit and a direct connection to the southeast side of Terminal 2's B2 food court, but records no dedicated station parking — the station instead shares Terminal 1's P4 lot.[^tymc-a13-station] TYMC's own current public-art page names one work here, "Digital Mirror" (數位鏡面) by artist 丹尼爾·羅森 (Daniel Rozin), without a stated year or medium.[^tymc-art]

Airport Terminal 2 opened with the rest of the initial line on 2 March 2017.[^tymc-history]

TDX's own committed route data places A13 35.896 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor] Daily ridership at this station is not established by any source read for this page and stays TBC; TYMC's own operations disclosures cover network-wide and route-level figures rather than a per-station count for this stop.
