---
title: "New Taipei Industrial Park Station — Taoyuan Airport MRT"
summary: "New Taipei Industrial Park Station (A3), stop 3 of 22 on the Taoyuan Airport MRT, in 新莊區."
order: 103
line: A
operator: TYMC
spine: A3
updated: 2026-08-28
facts:
  - label: Station code
    value: A3
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 新北產業園區站
    source: tdx-tymc-station
  - label: Administrative city
    value: 新北市
    source: tdx-tymc-station
  - label: Administrative district
    value: 新莊區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 3
    source: tdx-tymc-sor
  - label: Structure
    value: Elevated, three levels above ground, two island platforms, 4 tracks
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Both express (直達車) and commuter (普通車)
    source: tymc-express-timetable
  - label: Exits
    value: 1 numbered exit at Wugong Road 37, plus a separate connector to the Circular Line
    source: tymc-a3-station
specs:
  - label: Cumulative distance from A1
    value: 7.729
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
  - id: tymc-a3-station
    title: Taoyuan Airport MRT A3 station information
    titleOriginal: 桃園機場捷運新北產業園區站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A3/A4
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
  - id: tymc-a3-transfer-promo
    title: Circular Line Y20 opening transfer-fare notice
    titleOriginal: 環狀線Y20通車轉乘優惠公告
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/show-1196-4.html
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own 31 January 2020 release announcing a time-limited 20%-off A3/Circular Line transfer fare, running only through 29 February 2020."
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

New Taipei Industrial Park connects to the Taipei Metro Circular Line through a third-floor connecting passage, reached in about five minutes on foot according to TYMC's own station page.[^tymc-a3-station] The Circular Line's own station at this interchange is recorded under two different codes in this project's sources: the Railway Bureau's architecture report, describing the Airport MRT station as built, calls the Circular Line connection `Y19`, while this site's own current TDX pull for the Circular Line uses `Y20` for the operating station.[^rb-airport-station-architecture] Both values are published rather than one silently discarded, since it is not established here whether this is a renumbering of the same platform or two different reference points.

TYMC's own timetable page lists A3 among the express (直達車) stops, alongside the commuter (普通車) service that calls at every station.[^tymc-express-timetable] The Railway Bureau's architecture report describes the elevated station as built for the airport-check-in and Circular Line connection role, with a form drawing on aircraft-wing imagery.[^rb-airport-station-architecture] A TYMC news release from the Circular Line's own 31 January 2020 opening records a temporary 20%-off transfer fare between the two lines at this station, running only through 29 February 2020; no source read for this page establishes whether any transfer discount is still current, and this is left TBC rather than repeated as an ongoing policy.[^tymc-a3-transfer-promo]

TYMC's own current public-art page names two works here: "The Moon Galileo and His Friends Left Me…" (伽利略與他朋友們留給我的月亮…) by artist 蘇尼爾·高帝, and "City Neighbours" (城市鄰居) by artist 賴珮瑜, neither with a stated year or medium.[^tymc-art] TYMC's own station page gives the address as Wugong Road No. 37 in Xinzhuang District.[^tymc-a3-station]

New Taipei Industrial Park opened with the rest of the initial line on 2 March 2017.[^tymc-history]

TDX's own committed route data places A3 7.729 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor]
