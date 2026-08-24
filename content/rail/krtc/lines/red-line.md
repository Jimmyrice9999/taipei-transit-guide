---
title: Red Line
summary: "Red Line (紅線) — 25 TDX-ordered stations, with route-length values published from both TDX and the Kaohsiung government project page."
order: 1
operator: KRTC
line: R
updated: 2026-08-24
facts:
  - label: "TDX line ID"
    value: "R"
    source: tdx-krtc-line
  - label: "Ordered TDX stations"
    value: 25
    source: tdx-krtc-station-of-route
  - label: "TDX route length"
    value: "29.72"
    unit: km
    source: tdx-krtc-route
  - label: "Government project length"
    value: "28.3"
    unit: km
    source: mtbu-red-orange
  - label: "Traditional Chinese name"
    value: "紅線"
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
---

## Red Line in the current data

TDX identifies this route as the Red Line with line ID R; the line record supplies the Traditional Chinese name 紅線.[^tdx-krtc-line] The operator’s English guide map uses the same line identity and lists the same station-code family from R3 to RK1.[^krtc-guide-map-en] This page keeps the line record, route record and station-of-route record separate because they answer different questions.[^tdx-krtc-line][^tdx-krtc-route][^tdx-krtc-station-of-route]

The direction-zero StationOfRoute record contains 25 ordered members.[^tdx-krtc-station-of-route] The reverse-direction record is also present in the raw pull, but this page uses direction zero as the reader-facing sequence so that the order is stable and explicit.[^tdx-krtc-station-of-route] The sequence is a data relationship; it does not claim that every train service stops identically at every time of day.[^tdx-krtc-station-of-route][^tdx-krtc-first-last]

## Ordered stations

- [Siaogang (R3)](/rail/krtc/stations/siaogang-r3): sequence 1, TDX distance 0 km.[^tdx-krtc-station-of-route]
- [Kaohsiung International Airport (R4)](/rail/krtc/stations/kaohsiung-international-airport-r4): sequence 2, TDX distance 1.49 km.[^tdx-krtc-station-of-route]
- [Caoya (R4A)](/rail/krtc/stations/caoya-r4a): sequence 3, TDX distance 3.32 km.[^tdx-krtc-station-of-route]
- [Cianjhen Senior High School (R5)](/rail/krtc/stations/cianjhen-senior-high-school-r5): sequence 4, TDX distance 4.46 km.[^tdx-krtc-station-of-route]
- [Kaisyuan (R6)](/rail/krtc/stations/kaisyuan-r6): sequence 5, TDX distance 5.61 km.[^tdx-krtc-station-of-route]
- [Shihjia (R7)](/rail/krtc/stations/shihjia-r7): sequence 6, TDX distance 6.86 km.[^tdx-krtc-station-of-route]
- [Sanduo Shopping District (R8)](/rail/krtc/stations/sanduo-shopping-district-r8): sequence 7, TDX distance 7.82 km.[^tdx-krtc-station-of-route]
- [Central Park (R9)](/rail/krtc/stations/central-park-r9): sequence 8, TDX distance 9.1 km.[^tdx-krtc-station-of-route]
- [Formosa Boulevard (R10)](/rail/krtc/stations/formosa-boulevard-r10): sequence 9, TDX distance 9.84 km.[^tdx-krtc-station-of-route]
- [Kaohsiung Main Station (R11)](/rail/krtc/stations/kaohsiung-main-station-r11): sequence 10, TDX distance 10.72 km.[^tdx-krtc-station-of-route]
- [Houyi (R12)](/rail/krtc/stations/houyi-r12): sequence 11, TDX distance 11.73 km.[^tdx-krtc-station-of-route]
- [Aozihdi (R13)](/rail/krtc/stations/aozihdi-r13): sequence 12, TDX distance 12.69 km.[^tdx-krtc-station-of-route]
- [Kaohsiung Arena (R14)](/rail/krtc/stations/kaohsiung-arena-r14): sequence 13, TDX distance 13.68 km.[^tdx-krtc-station-of-route]
- [Ecological District (R15)](/rail/krtc/stations/ecological-district-r15): sequence 14, TDX distance 14.93 km.[^tdx-krtc-station-of-route]
- [Zuoying (R16)](/rail/krtc/stations/zuoying-r16): sequence 15, TDX distance 16.52 km.[^tdx-krtc-station-of-route]
- [World Game (R17)](/rail/krtc/stations/world-game-r17): sequence 16, TDX distance 18.19 km.[^tdx-krtc-station-of-route]
- [Oil Refinery Elementary School (R18)](/rail/krtc/stations/oil-refinery-elementary-school-r18): sequence 17, TDX distance 18.97 km.[^tdx-krtc-station-of-route]
- [Nanzih Technology Industrial Park (R19)](/rail/krtc/stations/nanzih-technology-industrial-park-r19): sequence 18, TDX distance 20.27 km.[^tdx-krtc-station-of-route]
- [Houjing (R20)](/rail/krtc/stations/houjing-r20): sequence 19, TDX distance 21.28 km.[^tdx-krtc-station-of-route]
- [Metropolitan Park (R21)](/rail/krtc/stations/metropolitan-park-r21): sequence 20, TDX distance 22.36 km.[^tdx-krtc-station-of-route]
- [Cingpu (R22)](/rail/krtc/stations/cingpu-r22): sequence 21, TDX distance 24.04 km.[^tdx-krtc-station-of-route]
- [Ciaotou Sugar Refinery (R22A)](/rail/krtc/stations/ciaotou-sugar-refinery-r22a): sequence 22, TDX distance 25.14 km.[^tdx-krtc-station-of-route]
- [Ciaotou Station (R23)](/rail/krtc/stations/ciaotou-station-r23): sequence 23, TDX distance 26 km.[^tdx-krtc-station-of-route]
- [Kaohsiung Medical University Gangshan Hospital (R24)](/rail/krtc/stations/kaohsiung-medical-university-gangshan-hospital-r24): sequence 24, TDX distance 28.81 km.[^tdx-krtc-station-of-route]
- [Gangshan Station (RK1)](/rail/krtc/stations/gangshan-station-rk1): sequence 25, TDX distance 29.72 km.[^tdx-krtc-station-of-route]

The TDX route record gives 29.72 km for this direction-zero route, while the Kaohsiung City Government project page gives 28.3 km for the Red Line.[^tdx-krtc-route][^mtbu-red-orange] Both values are published because the sources may measure different route definitions; this site does not average them, choose the newest value or relabel one as an error without a source that explains the difference.[^tdx-krtc-route][^mtbu-red-orange] The government page describes the joint Red/Orange project as underground and elevated metro infrastructure and names the relevant station and transfer structure.[^mtbu-red-orange]

## Transfers and service boundary

The TDX LineTransfer response identifies the Formosa Boulevard transfer relationship between R10 and O5, while the government page lists R10, R11, R13, R16 and R23 among the Red Line’s transfer stations.[^tdx-krtc-transfer][^mtbu-red-orange] The operator and government pages also identify LRT relationships around R6 and R13.[^mtbu-red-orange][^krtc-guide-map-en]

The committed FirstLastTimetable pull contains station-direction rows for this operator, but several time fields are blank and the dataset has service-day and destination dimensions.[^tdx-krtc-first-last] Detailed first/last trains, headways by time of day, actual versus design capacity, signalling generation, power, depot allocation, platform screen doors, accessibility facilities and current station ridership remain TBC until their primary records are transcribed and checked.[^tdx-krtc-first-last][^krtc-station-guide-en]

## What the current page does not claim

The TDX shape is geometry rather than an engineering history; station depth is not inferred from a coordinate, and a route length is not treated as a universal measurement.[^tdx-krtc-shape][^tdx-krtc-route] The government project page, operator map and TDX records are all retained as distinct evidence layers so future construction, fleet and operations research can attach to the correct source.[^mtbu-red-orange][^krtc-guide-map-en][^tdx-krtc-shape]
