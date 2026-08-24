---
title: "Kaisyuan Ersheng — Kaohsiung Circular Light Rail"
summary: "Kaisyuan Ersheng (凱旋二聖), operator code C36, position 37 in the 38-station Circular Light Rail list."
order: 37
operator: KRTC
updated: 2026-08-24
facts:
  - label: "Light rail code"
    value: "C36"
    source: mtbu-lrt
  - label: "Traditional Chinese name"
    value: "凱旋二聖"
    source: mtbu-lrt
  - label: "English name"
    value: "Kaisyuan Ersheng"
    source: krtc-guide-map-en
  - label: "Circular list position"
    value: 37
    source: mtbu-lrt
specs:
  - label: "Published station location"
    value: "凱旋三路與二聖路口"
    source: mtbu-lrt
  - label: "Coordinate"
    value: TBC
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
---

## Identity in the operator and government lists

Kaisyuan Ersheng is Circular Light Rail station C36, with Traditional Chinese name 凱旋二聖.[^krtc-guide-map-en][^mtbu-lrt] The operator’s English guide map supplies the English station name and code, while the Kaohsiung City Government completed-route page supplies the Traditional Chinese name and published location text.[^krtc-guide-map-en][^mtbu-lrt] This page keeps the two source roles visible instead of pretending that a TDX Metro Station record exists for the LRT.[^tdx-krtc-line][^krtc-lrt-guide]

The government location field places the station at 凱旋三路與二聖路口.[^mtbu-lrt] That text is a station-location description, not a latitude/longitude pair; the coordinate field remains TBC until a primary structured LRT coordinate dataset is fetched and verified.[^mtbu-lrt] The page does not infer a point from the road names, a map image or the nearest metro station.[^mtbu-lrt]

## Position in the circular line

C36 is position 37 in the 38-station list published by the government route page.[^mtbu-lrt] The previous published list member is Kaisyuan Wuchang (C35) and the next is LRT Depot (C37), with wrap-around because this is a circular line list rather than a pair of terminal stations.[^mtbu-lrt][^krtc-guide-map-en] The sequence is a published list order; it is not a claim that a vehicle’s operational direction or stopping time can be reconstructed from this page alone.[^mtbu-lrt]

The operator guide map places Kaisyuan Ersheng in the LRT list, and the operator station-guide namespace provides a station-information page for each code.[^krtc-guide-map-en][^krtc-station-guide-en] The current batch does not transcribe platform entrances, station shelter dimensions, artwork, lifts, tactile paths, accessible toilets or platform gap measurements because those are station-facility claims requiring the relevant primary record.[^krtc-station-guide-en][^mtbu-lrt]

## Interchanges and operations

The checked government station table does not list a transfer relationship for this station, so an interchange claim is TBC rather than inferred from the line’s circular geography.[^mtbu-lrt]

KRTC’s English first/last-train page describes the light rail’s published operating model as 06:30–22:30 with a 15-minute headway throughout the day, while also warning that the displayed timetable is for reference and subject to dispatch status.[^krtc-lrt-first-last] This station page does not turn that system-level statement into a station-specific departure promise.[^krtc-lrt-first-last] Current ridership, station facilities, exact platform geometry, accessibility details, power, rolling stock allocation and construction disputes remain TBC.[^krtc-station-guide-en][^mtbu-lrt]

## Source boundary

The Circular Light Rail page is deliberately built from the operator’s English naming, the operator’s Traditional Chinese station list and the government’s route/location table.[^krtc-guide-map-en][^krtc-lrt-guide][^mtbu-lrt] It is not silently presented as a TDX metro record, and a future primary coordinate or ridership dataset can be added without changing this station’s source-backed identity.[^tdx-krtc-line][^mtbu-lrt]
