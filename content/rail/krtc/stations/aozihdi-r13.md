---
title: "Aozihdi (R13) — Kaohsiung Metro"
summary: "Aozihdi (凹子底), TDX station R13, with current KRTC line membership, coordinates and source update fields."
order: 12
operator: KRTC
updated: 2026-08-24
facts:
  - label: "Station ID"
    value: "R13"
    source: tdx-krtc-station
  - label: "Traditional Chinese name"
    value: "凹子底"
    source: tdx-krtc-station
  - label: "Line membership"
    value: "Red Line (R)"
    source: tdx-krtc-station-of-route
  - label: "Administrative city"
    value: "高雄市"
    source: tdx-krtc-station
specs:
  - label: "Latitude"
    value: 22.657268
    unit: degrees
    source: tdx-krtc-station
  - label: "Longitude"
    value: 120.303239
    unit: degrees
    source: tdx-krtc-station
  - label: "Red Line sequence"
    value: 12
    unit: position
    source: tdx-krtc-station-of-route
  - label: "Red Line cumulative distance"
    value: "12.69"
    unit: km
    source: tdx-krtc-station-of-route
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
  - id: mtbu-red-orange
    title: "Red and Orange Line route description"
    titleOriginal: "路線說明（含路網及車站）"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/RedandOrange/RedandOrange01.html"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The government project page gives the Red/Orange route lengths, station counts, type, depot count and transfer relationships."
---

## Current identity

Aozihdi (凹子底) is station ID R13 in the KRTC TDX Station response retrieved on 2026-08-24.[^tdx-krtc-station] The record supplies the operator station UID, English and Traditional Chinese names, address, city, district, coordinates, station-class field and source update time.[^tdx-krtc-station] This page reports those fields as the source publishes them and does not convert the station-class code into an unsupported passenger-service ranking.[^tdx-krtc-station]

The TDX address is 高雄市鼓山區博愛二路21號地下一層, in 高雄市’s 左營區.[^tdx-krtc-station] The coordinate returned by the same record is 22.657268, 120.303239.[^tdx-krtc-station] An address and a coordinate describe different reference fields, so neither is substituted for the other.[^tdx-krtc-station] Platform orientation, station depth, entrances, track count and surrounding walking catchment are TBC on this page because those details are not fields in the committed Station record.[^tdx-krtc-station][^krtc-station-guide-en]

## Position in the metro network

The current StationOfRoute data places this station on Red Line (R).[^tdx-krtc-station-of-route] In the Red Line direction-zero sequence it is position 12, with a cumulative distance of 12.69 km.[^tdx-krtc-station-of-route] The preceding member is Houyi (R12), and the following member is Kaohsiung Arena (R14).[^tdx-krtc-station-of-route] These are relationships in the published ordered dataset, not a claim that every train stops in exactly the same pattern at all times.[^tdx-krtc-station-of-route][^tdx-krtc-first-last]

The operator’s English guide map names this station in the Red Line list.[^krtc-guide-map-en] Where a station is a transfer point, the line-transfer dataset is the stronger source for the interchange relationship; the current pull identifies the Formosa Boulevard transfer between O5 and R10.[^tdx-krtc-transfer] A same-name relationship without a LineTransfer record is not promoted into a transfer claim.[^tdx-krtc-transfer]

## Service, facilities and access

The KRTC first/last-timetable pull contains 304 station-direction rows for the operator, with service-day and destination fields.[^tdx-krtc-first-last] The current page does not manufacture a first or last train time from a blank row, nor does it collapse workday and holiday records into a single schedule.[^tdx-krtc-first-last] Detailed headways, actual and design capacity, station accessibility facilities, tactile paths, lifts, toilets, nursing rooms, platform gap, screen doors and station staffing remain TBC until the operator’s station-level material is transcribed.[^tdx-krtc-first-last][^krtc-station-guide-en]

## Historical and ridership boundary

The government Red/Orange project page gives system-level route, station-count and transfer context, but it does not by itself supply this station’s opening chronology, rebuild history, construction dispute or current ridership row.[^mtbu-red-orange] Those claims are therefore TBC here rather than inferred from the station’s current name and coordinate.[^mtbu-red-orange][^tdx-krtc-station] The station page is ready for later primary-source additions because its current identity and route sequence are anchored to stable source IDs.[^tdx-krtc-station][^tdx-krtc-station-of-route]

This station is consequently a reference entry, not a departure board. The current structured data establishes identity, position, membership and source fields; operations, facilities, ridership and detailed history remain explicit research work.[^tdx-krtc-station][^tdx-krtc-station-of-route][^tdx-krtc-first-last]
