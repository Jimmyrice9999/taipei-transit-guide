---
title: Red Line
summary: "Red Line (紅線) — 25 TDX-ordered stations with a sourced construction, opening and north-extension chronology."
order: 1
operator: KRTC
line: R
updated: 2026-08-25
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
  - label: "Original Red Line service"
    value: 2008-03-09
    source: krtc-15th-anniversary
  - label: "R24 service opening"
    value: 2012-12-23
    source: mtbu-annual-109
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
  - id: krtc-history
    title: "Mission and vision: company origin"
    titleOriginal: "使命與願景"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://corp.krtc.com.tw/About/page?id=6df67da0dd21469da80e9528f32d7057"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator records the 1999 invitation, 2000 selection and incorporation, 2001 concession and construction start, six-year construction period, and 36-year concession."
  - id: mtbu-network-origin
    title: "Long-term network introduction"
    titleOriginal: "路網簡介"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/LongtermNetwork/LN01.html"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government records Red and Orange as first-stage routes approved in ROC80 and places their completion in ROC97, with later network planning reviewed after the 2010 county-city merger."
  - id: krtc-15th-anniversary
    title: "KRTC fifteenth-anniversary service history"
    titleOriginal: "歡慶高雄捷運通車十五週年 高捷柑心為你"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/Information/news_more?id=1b8bdb412efe4f489271bd368efdd22d"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator records Red service from 9 March 2008, Orange service from 14 September 2008, and network-level daily-ridership milestones."
  - id: mtbu-r11
    title: "R11 Kaohsiung Main Station"
    titleOriginal: "R11高雄車站"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/RedandOrange/RedandOrange02.html"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The project page records the temporary R11 station, its coordination with railway undergrounding, and the 5 September 2018 switch to the permanent station."
  - id: mtbu-r24-report
    title: "R24 Nanguan-shan station delivery study"
    titleOriginal: "高雄捷運紅線南岡山站辦理方式研析"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=101%E5%B9%B47%E6%9C%88-%E5%A2%9E%E8%A8%AD%E9%AB%98%E9%9B%84%E6%8D%B7%E9%81%8B%E7%B4%85%E7%B7%9A%E5%8D%97%E5%B2%A1%E5%B1%B1%E7%AB%99%E8%BE%A6%E7%90%86%E6%96%B9%E5%BC%8F%E7%A0%94%E6%9E%90&fileDictionary=FileUpload&fileFormat=.pdf&fileId=e13f8edc-c8c3-4307-aadd-4b42c778b4e6&fileName=20200312204112663.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The full government PDF records R24’s 3 January 2011 start, June 2012 progress, schedule and budget delay, and milestone-based acceleration."
  - id: mtbu-annual-109
    title: "Kaohsiung MRT Bureau 2020 statistical yearbook"
    titleOriginal: "高雄市政府捷運工程局109年度統計年報"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=%E9%AB%98%E9%9B%84%E5%B8%82%E6%94%BF%E5%BA%9C%E6%8D%B7%E9%81%8B%E5%B7%A5%E7%A8%8B%E5%B1%80109%E5%B9%B4%E5%BA%A6%E7%B5%B1%E8%A8%88%E5%B9%B4%E5%A0%B1&fileDictionary=FileUpload&fileFormat=.pdf&fileId=efe781ae-fb6b-4f6d-8af9-2c0f1ea14abb&fileName=20210810163925808.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The yearbook gives a historical Red Line length of 29.214 km, 24 stations, April ROC97 opening and 23 December ROC101 R24 opening, plus two Red depots and one shared control centre."
  - id: mtbu-service-indicators
    title: "Kaohsiung MRT operating service indicators"
    titleOriginal: "高雄捷運營運服務指標"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=95%E5%B9%B48%E6%9C%88-%E9%AB%98%E9%9B%84%E6%8D%B7%E9%81%8B%E7%87%9F%E9%81%8B%E6%9C%8D%E5%8B%99%E6%8C%87%E6%A8%99&fileDictionary=FileUpload&fileFormat=.pdf&fileName=20200312203955689.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government document describes the historical Red/Orange design boundary, underground/elevated split and the electrical, signalling, communications, platform and fare systems that form the integrated system."
  - id: krtc-south-depot
    title: "South Depot"
    titleOriginal: "南機廠"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://corp.krtc.com.tw/Business/land_development_more?id=db843544a4ce473bb05505ce84013ca8"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator places the South Depot at the southern end of the Red Line, gives its R4A station, 26-hectare site and Level 3 maintenance function, and identifies the control centre."
  - id: krtc-north-depot
    title: "North Depot"
    titleOriginal: "北機廠"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://corp.krtc.com.tw/Business/land_development_more?id=ec242f99d99949be84f3cfdef6d56b0b"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator places the North Depot at the northern Red Line end across Gangshan and Ciaotou districts."
  - id: mtbu-rk1-opening
    title: "RK1 Gangshan Station trial operation"
    titleOriginal: "高雄捷運RK1岡山車站試營運，總統、市長共同啟動"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&Keyword=&PageNumber=19&PageType=1&id=51834dab-87c9-4c7a-b722-d2324998f5a0"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government records free trial operation from noon on 30 June 2024, the R24–RK1 connection to TRA Gangshan and the planned joint development around the station."
  - id: mtbu-rk1-formal
    title: "RK1 formal operation and charging"
    titleOriginal: "高雄捷運岡山車站RK1，自9月1日起開始正式營運與收費"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=ee7b8b6d-03c0-4e8f-b133-e0a7c97fa933&Keyword=RK1&PageNumber=1&PageType=1&id=3672721d-f352-48fb-be98-c441503042ce"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government records the end of the free trial and the start of formal operation and charging on 1 September 2024, with trial ridership context."
  - id: mtbu-rk1-systems
    title: "RK1 extension single-train signalling tests"
    titleOriginal: "高雄捷運紅線向北推進 RK1岡山車站路段進行單列車行車測試"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&Keyword=&PageNumber=17&PageType=1&id=b37208c9-e0c9-44d4-802a-b29a088c3bcd"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government records the RK1 extension’s train, power, signalling, communications, fare collection and platform-door testing, including door/signalling interlocks."
  - id: mtbu-rk1-power
    title: "RK1 extension power energisation"
    titleOriginal: "岡山路竹延伸線持續朝今年6月底RK1通車目標邁進—高雄捷運RK1岡山車站電力系統送電"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&Keyword=&PageNumber=3&PageType=1&id=8cad73f8-0149-4839-94a3-7b2ab628fc56"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government records RK1’s feed from BSS5 through the North Depot, 22 kV traction supply and 380/220 V station supply."
  - id: mtbu-rk-extension-progress
    title: "Gangshan–Lujhu extension utility relocation and progress"
    titleOriginal: "捷運岡山路竹延伸線管線遷移先行，兼顧高科技產業能源的穩定供應，確保捷運主體工程之順利進行"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=ee7b8b6d-03c0-4e8f-b133-e0a7c97fa933&Keyword=&PageNumber=1&PageType=1&id=b9541369-9d07-440e-af7b-d6686be20659"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The current government notice records the RK2–RK6 Phase 2A works, 33.59% progress at 20 May 2026 and the 2,000 mm water-main relocation constraint."
---

## Red Line in the current data

TDX identifies this route as the Red Line with line ID R; the line record supplies the Traditional Chinese name 紅線.[^tdx-krtc-line] The operator’s English guide map uses the same line identity and lists the same station-code family from R3 to RK1.[^krtc-guide-map-en] This page keeps the line record, route record and station-of-route record separate because they answer different questions.[^tdx-krtc-line][^tdx-krtc-route][^tdx-krtc-station-of-route]

The direction-zero StationOfRoute record contains 25 ordered members.[^tdx-krtc-station-of-route] The reverse-direction record is also present in the raw pull, but this page uses direction zero as the reader-facing sequence so that the order is stable and explicit.[^tdx-krtc-station-of-route] The sequence is a data relationship; it does not claim that every train service stops identically at every time of day.[^tdx-krtc-station-of-route][^tdx-krtc-first-last]

## Construction and opening chronology

The government’s network history places the Red and Orange lines in the first stage of Kaohsiung’s first-period MRT development plan, approved in ROC80, and says that the two routes were completed and opened in ROC97.[^mtbu-network-origin] KRTC’s company history gives a more granular institutional chronology: the city invited private participation on 1 February 1999, the China Steel-led application was selected on 10 May 2000, the company received its licence on 28 December 2000, and the construction and development agreements were signed on 12 January 2001.[^krtc-history] KRTC records construction beginning in October 2001 and describes the concession as 36 years from the start of construction, comprising more than six years of construction before the Red and Orange lines entered service.[^krtc-history]

MTBU treats the Red and Orange network as one private-participation construction and operating project: its page gives six years of construction, 30 years of operation and a 36-year concession, with a planned 42.7 km and 38 stations, three depots and a total construction cost of NT$183.963 billion.[^mtbu-red-orange] KRTC records the Red Line’s regular service opening on 9 March 2008 and the Orange Line’s opening on 14 September 2008; the latter date marks the full operation of the original cross-shaped network, not the first Red Line service.[^krtc-15th-anniversary]

The historical service-indicator document is a separate design snapshot. It describes a Red Line of 28.3 km, with 19.8 km underground and 8.5 km elevated, and 23 stations at the time of that document.[^mtbu-service-indicators] The current government page reports 28.3 km and 24 Red Line stations, while the TDX route pull reports 29.72 km and its current sequence includes R24 and RK1.[^mtbu-red-orange][^tdx-krtc-route][^tdx-krtc-station-of-route] Those values are retained as different dated or structured boundaries rather than made to agree by arithmetic.

## Extensions, interfaces and depots

R24 was not part of the original 2008 station opening.[^krtc-15th-anniversary][^mtbu-annual-109] MTBU’s delivery study says the station contract began on 3 January 2011, that overall progress reached 79.55% by the end of June 2012, and that the project had initially fallen behind because approval timing was later than expected and KRTC had declined to invest in the electrical and mechanical works on financial-difficulty grounds.[^mtbu-r24-report] The same study describes the response as a contract change with more finely divided milestone payments and records the target of substantive completion and system integration by the end of 2012.[^mtbu-r24-report] The government’s 109-year statistical report records R24’s opening on 23 December 2012.[^mtbu-annual-109]

R11 Kaohsiung Main Station was a second interface with another major project. The temporary co-constructed station opened with the Red Line in ROC97, while the permanent station had to follow the city railway-undergrounding programme; MTBU records the switch from the temporary station to the permanent station’s initial operating area on 5 September 2018.[^mtbu-r11] This is why a Red Line opening date alone does not describe every station’s final architectural or systems completion.

The first Gangshan–Lujhu extension phase added RK1 north of R24.[^tdx-krtc-station-of-route][^mtbu-rk1-opening] MTBU records free trial operation from noon on 30 June 2024, a connection to TRA Gangshan Station and planned joint development around the new interchange.[^mtbu-rk1-opening] The free trial ended and formal operation and charging began on 1 September 2024.[^mtbu-rk1-formal] The current second phase is split into 2A and 2B; the government reports RK2–RK6 Phase 2A at 33.59% on 20 May 2026 and identifies relocation of a 2,000 mm water main under Provincial Highway 1 as a major construction constraint.[^mtbu-rk-extension-progress]

The joint project planned two Red Line depots and one Orange Line depot, a distinction also recorded in the statistical report.[^mtbu-annual-109] KRTC places the South Depot at the Red Line’s southern end around R4A, with a 26-hectare site, a Level 3 maintenance function and the network control centre.[^krtc-south-depot] It places the North Depot at the Red Line’s northern end across Gangshan and Ciaotou districts.[^krtc-north-depot]

## Systems evidence and boundary

The historical service-indicator document lists rolling stock, signalling, DC traction power, AC power, platforms, communications, automatic fare collection, lifts, escalators and depot equipment as the integrated system components.[^mtbu-service-indicators] The checked modern system record is more specific for the RK1 extension than for the original line: MTBU describes train, power, signalling, communications, fare collection and platform-door testing, including the interlock between the doors and signalling.[^mtbu-rk1-systems] Its power notice records RK1 traction supply extended from BSS5 through the North Depot, with a 22 kV feeder and 380/220 V station supply.[^mtbu-rk1-power] These extension records establish the interface and power arrangement for the new section, but they do not establish the original Red Line signalling supplier, generation, headways, full-line platform-door retrofit history or per-station accessibility inventory; those remain TBC.

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
