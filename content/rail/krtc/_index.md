---
title: Kaohsiung Metro
kind: system
description: Kaohsiung Metro’s Red and Orange Lines and the Circular Light Rail, with TDX metro data and operator/government LRT records kept distinct.
order: 5
operator: KRTC
sources:
  - id: tdx-krtc-station
    title: "TDX Kaohsiung Metro station records"
    titleOriginal: "高雄捷運車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live KRTC pull contains 39 metro station records with codes, names, addresses, administrative areas, coordinates and update times."
  - id: tdx-krtc-station-of-route
    title: "TDX Kaohsiung Metro station-of-route records"
    titleOriginal: "高雄捷運路線車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains four directional records: two for the Red Line and two for the Orange Line, with ordered members and cumulative distances."
  - id: tdx-krtc-line
    title: "TDX Kaohsiung Metro line records"
    titleOriginal: "高雄捷運路線資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains the two line identities returned for KRTC: R and O."
  - id: tdx-krtc-route
    title: "TDX Kaohsiung Metro route records"
    titleOriginal: "高雄捷運路線資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Route/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains four directional route records with source route lengths, termini and travel times."
  - id: tdx-krtc-transfer
    title: "TDX Kaohsiung Metro line-transfer records"
    titleOriginal: "高雄捷運路線轉乘資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/LineTransfer/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains two interchange records for the Formosa Boulevard transfer between R10 and O5."
  - id: tdx-krtc-first-last
    title: "TDX Kaohsiung Metro first-last timetable records"
    titleOriginal: "高雄捷運首末班車資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/FirstLastTimetable/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains 304 station-direction timetable records; blank time fields are retained as blank rather than converted into a claim."
  - id: krtc-guide-map-en
    title: "KRTC guide map"
    titleOriginal: "導覽圖"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/eng/KLRT/guide_map"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator’s English guide map lists the Red, Orange and Circular Light Rail station names and codes."
  - id: krtc-station-guide-en
    title: "KRTC station information"
    titleOriginal: "各車站資訊"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/eng/KLRT/station_guide"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator’s English station-guide page exposes metro and light-rail station information and the accessibility/safety navigation."
  - id: krtc-lrt-guide
    title: "KRTC Circular Light Rail timetable station list"
    titleOriginal: "各車站時刻表"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/KLRT/timetable"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator page lists the 38 Circular Light Rail codes and Traditional Chinese names."
  - id: mtbu-red-orange
    title: "Red and Orange Line route description"
    titleOriginal: "路線說明（含路網及車站）"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/RedandOrange/RedandOrange01.html"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The government project page gives the Red/Orange route lengths, station counts, type, depot count and transfer relationships."
  - id: mtbu-lrt
    title: "Circular Light Rail route description"
    titleOriginal: "路線說明"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/LightRail/LightRail01.html"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The government project page gives the circular alignment, every station’s Traditional Chinese name and location, 22.1 km length, 38 stations, surface-light-rail type and listed transfers."
---

Kaohsiung Metro is operated by Kaohsiung Rapid Transit Corporation and is represented here as one system containing two TDX metro lines and a separate Circular Light Rail station layer.[^krtc-guide-map-en][^tdx-krtc-line][^krtc-lrt-guide] The Red and Orange Lines are the heavy-metro records returned by the live KRTC TDX pull; the Circular Light Rail list comes from the operator and Kaohsiung City Government pages because it is not part of that committed Metro response.[^tdx-krtc-station][^krtc-lrt-guide][^mtbu-lrt]

The government route page describes the Red and Orange project as 42.7 km and 38 stations in total, with underground and elevated metro infrastructure.[^mtbu-red-orange] The Circular Light Rail page describes a 22.1 km surface-light-rail loop with 38 stations and transfers to the metro and TRA.[^mtbu-lrt] These are different published measurements of different modes and are not combined into one invented line length.[^mtbu-red-orange][^mtbu-lrt]

The current data boundary is visible in the page structure. The metro station pages retain TDX IDs, coordinates, route order, chainage and source update fields.[^tdx-krtc-station][^tdx-krtc-station-of-route] The light-rail pages retain the operator’s English and Traditional Chinese names plus the government’s station-location text, while coordinates and a TDX light-rail station sequence remain TBC.[^krtc-guide-map-en][^mtbu-lrt] This distinction prevents a polished map from hiding which dataset actually supports a claim.[^tdx-krtc-station][^mtbu-lrt]

The interchange structure is explicit in the live metro data: the two TDX LineTransfer records describe the Formosa Boulevard connection between R10 and O5.[^tdx-krtc-transfer] The government pages separately list metro/LRT and metro/TRA relationships, including R6, R13, O1, R11, R16, R23, C18 and C30.[^mtbu-red-orange][^mtbu-lrt] Station pages preserve those as source relationships rather than treating similarly named stations as proof of a transfer.[^tdx-krtc-transfer][^mtbu-lrt]

The route and station records also carry an important conflict boundary. TDX reports directional route lengths of 29.72 km for the Red Line and 13.12 km for the Orange Line in the current pull, while the government project page reports 28.3 km and 14.4 km respectively.[^tdx-krtc-route][^mtbu-red-orange] The site publishes both values and does not average them, because they may measure different route definitions.[^tdx-krtc-route][^mtbu-red-orange]

Ridership, accessibility facilities, platform gaps, depots, power, headways and historical construction disputes are separate research boundaries. This first data layer records what the live structured endpoints and the two full government/operator route pages establish; every unsourced detail remains TBC.[^tdx-krtc-first-last][^krtc-station-guide-en][^mtbu-red-orange][^mtbu-lrt]

The [signalling and automation record](/rail/krtc/technology/signalling/) covers train control separately: the Red and Orange Lines run with drivers on Siemens track-circuit interlockings, while the under-construction Yellow Line will be a fully driverless Siemens CBTC system — two different generations, not one upgraded in place. The [rolling-stock record](/rail/krtc/rolling-stock/fleet-roster/) covers the original Siemens fleet, an incoming Hyundai Rotem order, and the separate light-rail and Yellow Line fleets.
