---
title: "Airport Terminal 1 Station — Taoyuan Airport MRT"
summary: "Airport Terminal 1 Station (A12), stop 12 of 22 on the Taoyuan Airport MRT, in 大園區."
order: 112
line: A
operator: TYMC
spine: A12
updated: 2026-08-28
facts:
  - label: Station code
    value: A12
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 機場第一航廈站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 大園區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 12
    source: tdx-tymc-sor
  - label: Structure
    value: Underground, one island platform, 2 tracks
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Both express (直達車) and commuter (普通車)
    source: tymc-express-timetable
  - label: Exits
    value: "1 numbered exit at Terminal 1 parking lot 1, plus a direct connector to Terminal 1's B2 food court"
    source: tymc-a12-station
specs:
  - label: Cumulative distance from A1
    value: 34.876
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
  - id: tymc-a12-station
    title: Taoyuan Airport MRT A12 station information
    titleOriginal: 桃園機場捷運機場第一航廈站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A12/A4
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
    note: "The Bureau's own technical paper on the underground airport crossing, describing construction methods and ground conditions around the two airport stations."
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
---

Airport Terminal 1 is the first of the line's two airport stations and one of the fixed express (直達車) stops, alongside A1, A3, A8 and A13, on top of the commuter (普通車) service that calls at every station.[^tymc-express-timetable] TYMC's own station page states the address at basement level 1 and gives two access points: a numbered street exit into Terminal 1's parking lot 1, and a separate connector reaching the terminal's B2 food court directly.[^tymc-a12-station] A Taoyuan tourism-portal page gives an express journey time from Taipei Main Station of 35 minutes.[^tycg-tourism-airport-mrt]

This station and Terminal 2 sit within the airport's underground civil package (CU02/CU02A), an approximately 5,520 m stretch built by cut-and-cover and shield-tunnelling methods beneath runway and control-tower-adjacent ground; a Railway Bureau technical paper on the airport crossing places the East Taxiway 48 m from this section and records the red-soil and gravel-bearing strata used in the crossing's monitoring design.[^rb-airport-risk-paper] TYMC's own station page does not itself describe an in-town check-in or baggage-drop facility at this station specifically; that service, where it exists at this network's stations, is documented separately on the line's own page rather than assumed here.

TYMC's own station page lists an inquiry desk in the main hall, drinking water in the non-paid area near the station's public artwork, restrooms in the paid area, and 16 large lockers (45×60×90 cm, NT$50 per three hours); it records no dedicated station parking, with the station instead sharing Terminal 1's own P1/P2 lots.[^tymc-a12-station] TYMC's own current public-art page names one work here, "Transit — Heart's Flight Path" (過境—心航線) by artist 林俊廷, without a stated year or medium.[^tymc-art]
