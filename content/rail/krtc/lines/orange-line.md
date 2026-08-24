---
title: Orange Line
summary: "Orange Line (橘線) — 14 TDX-ordered stations, with route-length values published from both TDX and the Kaohsiung government project page."
order: 2
operator: KRTC
line: O
updated: 2026-08-24
facts:
  - label: "TDX line ID"
    value: "O"
    source: tdx-krtc-line
  - label: "Ordered TDX stations"
    value: 14
    source: tdx-krtc-station-of-route
  - label: "TDX route length"
    value: "13.12"
    unit: km
    source: tdx-krtc-route
  - label: "Government project length"
    value: "14.4"
    unit: km
    source: mtbu-red-orange
  - label: "Traditional Chinese name"
    value: "橘線"
    source: tdx-krtc-line
sources:
  - id: tdx-krtc-line
    title: "TDX Kaohsiung Metro line records"
    titleOriginal: "高雄捷運路線資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains the two line identities returned for KRTC: R and O."
  - id: tdx-krtc-station-of-route
    title: "TDX Kaohsiung Metro station-of-route records"
    titleOriginal: "高雄捷運路線車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains four directional records: two for the Red Line and two for the Orange Line, with ordered members and cumulative distances."
  - id: tdx-krtc-route
    title: "TDX Kaohsiung Metro route records"
    titleOriginal: "高雄捷運路線資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Route/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains four directional route records with source route lengths, termini and travel times."
  - id: tdx-krtc-shape
    title: "TDX Kaohsiung Metro line shapes"
    titleOriginal: "高雄捷運路線幾何資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Shape/KRTC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The live pull contains two current metro geometry records, one for each line."
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

## Orange Line in the current data

TDX identifies this route as the Orange Line with line ID O; the line record supplies the Traditional Chinese name 橘線.[^tdx-krtc-line] The operator’s English guide map uses the same line identity and lists the same station-code family from O1 to OT1.[^krtc-guide-map-en] This page keeps the line record, route record and station-of-route record separate because they answer different questions.[^tdx-krtc-line][^tdx-krtc-route][^tdx-krtc-station-of-route]

The direction-zero StationOfRoute record contains 14 ordered members.[^tdx-krtc-station-of-route] The reverse-direction record is also present in the raw pull, but this page uses direction zero as the reader-facing sequence so that the order is stable and explicit.[^tdx-krtc-station-of-route] The sequence is a data relationship; it does not claim that every train service stops identically at every time of day.[^tdx-krtc-station-of-route][^tdx-krtc-first-last]

## Ordered stations

- [Hamasen (O1)](/rail/krtc/stations/hamasen-o1): sequence 1, TDX distance 0 km.[^tdx-krtc-station-of-route]
- [Yanchengpu (O2)](/rail/krtc/stations/yanchengpu-o2): sequence 2, TDX distance 1.34 km.[^tdx-krtc-station-of-route]
- [Cianjin (O4)](/rail/krtc/stations/cianjin-o4): sequence 3, TDX distance 2.63 km.[^tdx-krtc-station-of-route]
- [Formosa Boulevard (O5)](/rail/krtc/stations/formosa-boulevard-o5): sequence 4, TDX distance 3.57 km.[^tdx-krtc-station-of-route]
- [Sinyi Elementary School (O6)](/rail/krtc/stations/sinyi-elementary-school-o6): sequence 5, TDX distance 4.4 km.[^tdx-krtc-station-of-route]
- [Cultural Center (O7)](/rail/krtc/stations/cultural-center-o7): sequence 6, TDX distance 5.04 km.[^tdx-krtc-station-of-route]
- [Wukuaicuo (O8)](/rail/krtc/stations/wukuaicuo-o8): sequence 7, TDX distance 6.09 km.[^tdx-krtc-station-of-route]
- [Lingya Sports Park (O9)](/rail/krtc/stations/lingya-sports-park-o9): sequence 8, TDX distance 6.83 km.[^tdx-krtc-station-of-route]
- [Weiwuying (O10)](/rail/krtc/stations/weiwuying-o10): sequence 9, TDX distance 7.53 km.[^tdx-krtc-station-of-route]
- [Fongshan West (O11)](/rail/krtc/stations/fongshan-west-o11): sequence 10, TDX distance 8.27 km.[^tdx-krtc-station-of-route]
- [Fongshan (O12)](/rail/krtc/stations/fongshan-o12): sequence 11, TDX distance 9.02 km.[^tdx-krtc-station-of-route]
- [Dadong (O13)](/rail/krtc/stations/dadong-o13): sequence 12, TDX distance 9.87 km.[^tdx-krtc-station-of-route]
- [Fongshan Junior High School (O14)](/rail/krtc/stations/fongshan-junior-high-school-o14): sequence 13, TDX distance 10.91 km.[^tdx-krtc-station-of-route]
- [Daliao (OT1)](/rail/krtc/stations/daliao-ot1): sequence 14, TDX distance 13.12 km.[^tdx-krtc-station-of-route]

The TDX route record gives 13.12 km for this direction-zero route, while the Kaohsiung City Government project page gives 14.4 km for the Orange Line.[^tdx-krtc-route][^mtbu-red-orange] Both values are published because the sources may measure different route definitions; this site does not average them, choose the newest value or relabel one as an error without a source that explains the difference.[^tdx-krtc-route][^mtbu-red-orange] The government page describes the joint Red/Orange project as underground and elevated metro infrastructure and names the relevant station and transfer structure.[^mtbu-red-orange]

## Transfers and service boundary

The TDX LineTransfer response identifies the Formosa Boulevard transfer relationship between O5 and R10, while the government page lists O1 and O5 among the Orange Line’s transfer stations.[^tdx-krtc-transfer][^mtbu-red-orange] The LRT page identifies O1 at Hamasen as a transfer location for C14.[^mtbu-lrt][^krtc-guide-map-en]

The committed FirstLastTimetable pull contains station-direction rows for this operator, but several time fields are blank and the dataset has service-day and destination dimensions.[^tdx-krtc-first-last] Detailed first/last trains, headways by time of day, actual versus design capacity, signalling generation, power, depot allocation, platform screen doors, accessibility facilities and current station ridership remain TBC until their primary records are transcribed and checked.[^tdx-krtc-first-last][^krtc-station-guide-en]

## What the current page does not claim

The TDX shape is geometry rather than an engineering history; station depth is not inferred from a coordinate, and a route length is not treated as a universal measurement.[^tdx-krtc-shape][^tdx-krtc-route] The government project page, operator map and TDX records are all retained as distinct evidence layers so future construction, fleet and operations research can attach to the correct source.[^mtbu-red-orange][^krtc-guide-map-en][^tdx-krtc-shape]
