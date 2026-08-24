---
title: Stations
description: Kaohsiung Metro station pages from the 39-record TDX metro pull and the 38-station operator/government Circular Light Rail list.
order: 2
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
  - id: krtc-lrt-guide
    title: "KRTC Circular Light Rail timetable station list"
    titleOriginal: "各車站時刻表"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/KLRT/timetable"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator page lists the 38 Circular Light Rail codes and Traditional Chinese names."
  - id: krtc-station-guide-en
    title: "KRTC station information"
    titleOriginal: "各車站資訊"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/eng/KLRT/station_guide"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator’s English station-guide page exposes metro and light-rail station information and the accessibility/safety navigation."
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

This station index contains 77 pages: 39 current KRTC metro station records from TDX and 38 Circular Light Rail stations from the operator and government route pages.[^tdx-krtc-station][^krtc-lrt-guide][^mtbu-lrt] The two groups are intentionally labelled by source family because a station count without a dataset boundary can imply a false completeness.[^tdx-krtc-station][^mtbu-lrt]

The metro records preserve the source station IDs, names, addresses, administrative areas and coordinates.[^tdx-krtc-station] The Red and Orange sequence pages preserve TDX’s direction-zero order and cumulative distances, while the reverse direction remains available in the committed raw snapshot.[^tdx-krtc-station-of-route] The light-rail pages preserve the operator’s English names and the government’s Traditional Chinese names and location descriptions.[^krtc-guide-map-en][^mtbu-lrt]

C21A and C21 are separate light-rail station codes and remain separate pages.[^mtbu-lrt] O5 and R10 likewise remain distinct TDX station IDs even though both official route records identify Formosa Boulevard, because that is how the source publishes the two line relationships.[^tdx-krtc-station][^tdx-krtc-station-of-route] The guide does not collapse either pair into an invented shared ID.[^tdx-krtc-station][^mtbu-lrt]

Station facilities, accessibility details, ridership, platform gaps and detailed first/last times remain source-specific follow-up work.[^tdx-krtc-first-last][^krtc-station-guide-en] The TDX timetable pull contains 304 rows, but blank time fields and direction/service-day distinctions mean that a reliable station timetable needs a separate transcription and validation pass.[^tdx-krtc-first-last] The station pages mark that boundary as TBC.[^tdx-krtc-first-last][^krtc-station-guide-en]
