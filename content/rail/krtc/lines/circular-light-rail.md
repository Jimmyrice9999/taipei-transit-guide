---
title: Circular Light Rail
summary: "Kaohsiung’s 22.1 km Circular Light Rail, with 38 operator-listed stations and a government-published surface alignment."
order: 3
operator: KRTC
line: C
updated: 2026-08-24
facts:
  - label: "Station count"
    value: 38
    source: mtbu-lrt
  - label: "Government route length"
    value: "22.1"
    unit: km
    source: mtbu-lrt
  - label: "System type"
    value: "surface light rail"
    source: mtbu-lrt
  - label: "TDX KRTC Metro coverage"
    value: "No LRT records in the committed Metro pull"
    source: tdx-krtc-line
sources:
  - id: krtc-guide-map-en
    title: "KRTC guide map"
    titleOriginal: "導覽圖"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/eng/KLRT/guide_map"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator’s English guide map lists the Red, Orange and Circular Light Rail station names and codes."
  - id: krtc-lrt-guide
    title: "KRTC Circular Light Rail timetable station list"
    titleOriginal: "各車站時刻表"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/KLRT/timetable"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator page lists the 38 Circular Light Rail codes and Traditional Chinese names."
  - id: mtbu-lrt
    title: "Circular Light Rail route description"
    titleOriginal: "路線說明"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/LightRail/LightRail01.html"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The government project page gives the circular alignment, every station’s Traditional Chinese name and location, 22.1 km length, 38 stations, surface-light-rail type and listed transfers."
  - id: mtbu-red-orange
    title: "Red and Orange Line route description"
    titleOriginal: "路線說明（含路網及車站）"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/RedandOrange/RedandOrange01.html"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The government project page gives the Red/Orange route lengths, station counts, type, depot count and transfer relationships."
  - id: krtc-station-guide-en
    title: "KRTC station information"
    titleOriginal: "各車站資訊"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/eng/KLRT/station_guide"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator’s English station-guide page exposes metro and light-rail station information and the accessibility/safety navigation."
  - id: krtc-lrt-first-last
    title: "KRTC Circular Light Rail first and last train page"
    titleOriginal: "首末班車"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/eng/KLRT/first_and_last_train?KRTCStation=C1"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator page for C1 Lizihnei displays the Circular Light Rail operating window 06:30–22:30 and 15-minute headway, with a reference-timetable caveat."
  - id: tdx-krtc-line
    title: "TDX Kaohsiung Metro line records"
    titleOriginal: "高雄捷運路線資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains the two line identities returned for KRTC: R and O."
  - id: tdx-krtc-station
    title: "TDX Kaohsiung Metro station records"
    titleOriginal: "高雄捷運車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live KRTC pull contains 39 metro station records with codes, names, addresses, administrative areas, coordinates and update times."
  - id: tdx-krtc-shape
    title: "TDX Kaohsiung Metro line shapes"
    titleOriginal: "高雄捷運路線幾何資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Shape/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains two current metro geometry records, one for each line."
---

## A circular line with a separate source boundary

Kaohsiung’s Circular Light Rail is a 22.1 km surface-light-rail route with 38 stations in the Kaohsiung City Government’s completed-route description.[^mtbu-lrt] The operator’s English guide map lists the same line as LRT and supplies the English names used here.[^krtc-guide-map-en] The station page is therefore not presented as a TDX Metro pull: the committed KRTC Metro data contains the Red and Orange line records and 39 metro stations, while the LRT station layer comes from the operator and government pages.[^tdx-krtc-station][^tdx-krtc-line][^krtc-lrt-guide][^mtbu-lrt]

The government describes the route as a loop running from the former harbour-rail corridor through the port, Pier-2, the west-side railway corridor, the Museum of Fine Arts area and the Dashun roads before returning toward the south-western corridor.[^mtbu-lrt] This is a route-history description, not a geometry generated by guessing between station coordinates.[^mtbu-lrt] The current page preserves the station-location text supplied by the government and leaves a TDX LRT geometry field TBC.[^mtbu-lrt][^tdx-krtc-shape]

## Station sequence and transfers

The official station list contains C1 through C37 plus C21A, for 38 stations.[^mtbu-lrt][^krtc-lrt-guide] C21A Neiwei Arts Center and C21 Kaohsiung Museum of Fine Arts are separate codes and separate pages.[^mtbu-lrt] The government page lists transfers to the Red Line at C3 and C24, to the Orange Line at C14 and C32, and to TRA at C18 and C30.[^mtbu-lrt] The Red/Orange project page independently lists R6, R13 and O1 as LRT transfer relationships, so the station pages preserve both the LRT-side and metro-side evidence.[^mtbu-red-orange][^mtbu-lrt]

## What is established and what is TBC

The operator and government pages establish the English/Chinese station identities, station locations, loop structure, route length, surface-light-rail type and listed interchanges.[^krtc-guide-map-en][^mtbu-lrt] The operator’s station-guide and first/last-train navigation also establish that station-level operational material exists on the KRTC site, but this batch does not copy a schedule or facilities table into the data layer.[^krtc-station-guide-en][^krtc-lrt-first-last] Detailed platform coordinates, measured alignment geometry, station accessibility facilities, ridership, headways, rolling stock allocation, power system and construction controversy remain TBC until their primary records are fetched and transcribed.[^krtc-station-guide-en][^mtbu-lrt]

The choice to keep this as an operator/government layer is itself part of the provenance. A reader can see exactly why the Circular Light Rail pages have different structured fields from the TDX metro pages, and future research can replace a TBC with a source without rewriting the current station identities.[^tdx-krtc-line][^krtc-lrt-guide][^mtbu-lrt]
