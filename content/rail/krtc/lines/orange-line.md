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
  - label: "Operator-stated opening"
    value: 2008-09-14
    source: krtc-15th-anniversary
  - label: "Government engineering length"
    value: "13.266"
    unit: km
    source: mtbu-112-engineering-summary
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
    note: "The operator records the 1999 invitation, 2000 selection and incorporation, 2001 concession and construction start, six-year construction period and 36-year concession for the joint Red/Orange project."
  - id: mtbu-network-origin
    title: "Long-term network introduction"
    titleOriginal: "路網簡介"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/LongtermNetwork/LN01.html"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government records the Red and Orange lines as first-stage routes approved in ROC80 and places their completion in ROC97."
  - id: krtc-15th-anniversary
    title: "KRTC fifteenth-anniversary service history"
    titleOriginal: "歡慶高雄捷運通車十五週年 高捷柑心為你"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/Information/news_more?id=1b8bdb412efe4f489271bd368efdd22d"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator records Red service from 9 March 2008 and Orange service from 14 September 2008, plus network-level daily-ridership milestones."
  - id: mtbu-annual-109
    title: "Kaohsiung MRT Bureau 2020 statistical yearbook"
    titleOriginal: "高雄市政府捷運工程局109年度統計年報"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=%E9%AB%98%E9%9B%84%E5%B8%82%E6%94%BF%E5%BA%9C%E6%8D%B7%E9%81%8B%E5%B7%A5%E7%A8%8B%E5%B1%80109%E5%B9%B4%E5%BA%A6%E7%B5%B1%E8%A8%88%E5%B9%B4%E5%A0%B1&fileDictionary=FileUpload&fileFormat=.pdf&fileId=efe781ae-fb6b-4f6d-8af9-2c0f1ea14abb&fileName=20210810163925808.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The yearbook gives the Red/Orange opening months, a historical Red/Orange length and depot/control-centre table."
  - id: mtbu-service-indicators
    title: "Kaohsiung MRT operating service indicators"
    titleOriginal: "高雄捷運營運服務指標"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=95%E5%B9%B48%E6%9C%88-%E9%AB%98%E9%9B%84%E6%8D%B7%E9%81%8B%E7%87%9F%E9%81%8B%E6%9C%8D%E5%8B%99%E6%8C%87%E6%A8%99&fileDictionary=FileUpload&fileFormat=.pdf&fileName=20200312203955689.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government document lists the historical Red/Orange integrated systems and identifies Daliao as the Orange depot."
  - id: mtbu-108-engineering-summary
    title: "Kaohsiung metropolitan MRT engineering plan summary, 2019"
    titleOriginal: "高雄都會區捷運系統工程計畫概況"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=108%E5%B9%B4%E9%AB%98%E9%9B%84%E9%83%BD%E6%9C%83%E5%8D%80%E6%8D%B7%E9%81%8B%E7%B3%BB%E7%B5%B1%E5%B7%A5%E7%A8%8B%E8%A8%88%E7%95%AB%E6%A6%82%E6%B3%81&fileDictionary=FileUpload&fileFormat=.pdf&fileName=20200415174749237.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The one-page government table reports the Orange O1-OT1 engineering boundary as 0.408 km ground and 12.858 km underground, with one depot, and records the ROC97 September operating month."
  - id: mtbu-112-engineering-summary
    title: "Kaohsiung metropolitan MRT engineering plan summary, 2023"
    titleOriginal: "高雄都會區捷運系統工程計畫概況"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=112%E5%B9%B4%E9%AB%98%E9%9B%84%E9%83%BD%E6%9C%83%E5%8D%80%E6%8D%B7%E9%81%8B%E7%B3%BB%E7%B5%B1%E5%B7%A5%E7%A8%8B%E8%A8%88%E7%95%AB%E6%A6%82%E6%B3%81&fileDictionary=FileUpload&fileFormat=.pdf&fileId=7150ab97-89ab-4c2c-8895-7d5478ad6840&fileName=20240819150212202.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The current government table reports the Orange O1-OT1 engineering boundary as 0.408 km ground and 12.858 km underground, source length 13.266 km and one depot, and repeats the ROC97 September opening month."
  - id: mtbu-104-bot-report
    title: "Sustainable operation of the Kaohsiung MRT Red/Orange network through government-assisted land development"
    titleOriginal: "高雄市大眾捷運系統紅橘線路網永續經營－以政府協助土地開發績效為例"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FileContent/GetDownloadFile?fileCaption=104%E5%B9%B47%E6%9C%88-%E9%AB%98%E9%9B%84%E5%B8%82%E5%A4%A7%E7%9C%BE%E6%8D%B7%E9%81%8B%E7%B3%BB%E7%B5%B1%E7%B4%85%E6%A9%98%E7%B7%9A%E8%B7%AF%E7%B6%B2%E6%B0%B8%E7%BA%8C%E7%B6%93%E7%87%9F%EF%BC%8D%E4%BB%A5%E6%94%BF%E5%BA%9C%E5%8D%94%E5%8A%A9%E5%9C%9F%E5%9C%B0%E9%96%8B%E7%99%BC%E7%B8%BE%E6%95%88%E7%82%BA%E4%BE%8B&fileDictionary=FileUpload&fileFormat=.pdf&fileId=4d9f212a-630a-4860-9a55-24d1f0c75b87&fileName=20200312203849553.pdf"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government research report records an Orange opening date of ROC97 22 September and describes the BOT model and later land-development response."
  - id: krtc-service-faq
    title: "Red/Orange operating hours and headways"
    titleOriginal: "高雄捷運紅橘線之營運服務時間從幾點開始，到幾點結束?班距時間多久?"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/Service/faq_more?id=9af982f12b2240869d4bb3143b600a33"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator states Orange departures begin at 06:00 from O1 and OT1, terminal departures end at 24:00, peak headways are 4-6 minutes, off-peak 8 minutes and late evening 20 minutes; the dated page defines weekday peaks."
  - id: krtc-red-orange-faq
    title: "What the Red/Orange full opening means"
    titleOriginal: "高雄捷運紅橘線全線通車，紅橘線指的是哪裡?每一站都有停嗎?"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/Service/faq_more?id=3431e868fa1c4bd08433b1a2749dfb5c"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator defines Orange as OT1-Daliao to O1-Hamasen and says every station is served."
  - id: krtc-station-guide
    title: "KRTC station information"
    titleOriginal: "各車站資訊"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://www.krtc.com.tw/Guide/station_guide"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator's full station index lists all Orange stations, their current names/codes and the shared R10/O5 station."
  - id: krtc-daliao-depot
    title: "Daliao Depot"
    titleOriginal: "大寮機廠"
    publisher: "Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)"
    url: "https://corp.krtc.com.tw/Business/land_development_more?id=278b8920c45c4ac78f3e010646cf4f4f"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The operator places Daliao Depot at the Orange eastern end, gives its 54-hectare site, approximately 36-hectare Level 5 maintenance area and approximately 18-hectare commercial-service area."
  - id: mtbu-systems-faq
    title: "Red/Orange system integration and standards FAQ"
    titleOriginal: "高雄捷運未來若有新增路線時，其機電系統在整合上會不會常常當機，造成電聯車無法行駛而影響營運?"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/FAQs/C004600?PageType=1&id=ac92bfec-0cce-46fc-81db-3975dbe26bc8"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The government FAQ calls the Red/Orange network high-capacity metro, says its design considered extensions and approved international standards, and describes R24 as an integration test case without naming a signalling supplier or generation."
  - id: mtbu-roadmap
    title: "MRT network map and line description"
    titleOriginal: "捷運路網"
    publisher: "Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)"
    url: "https://mtbu.kcg.gov.tw/KaohsiungMetro/Roadmap.html"
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "The current government network page lists the 14 Orange stations from O1 to OT1 and identifies O5/R10 as the transfer station."
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

## Construction and opening chronology

The Orange Line was not a separately procured railway in the sources checked here. KRTC describes the Red/Orange network as a private-participation project: the city invited private participation in 1999, selected the China Steel-led applicant in 2000, signed the construction-and-operation and development contracts in January 2001, and began construction in October 2001.[^krtc-history] The operator describes the combined concession as 36 years, while the government project page breaks it into six years of construction and 30 years of operation.[^krtc-history][^mtbu-red-orange]

The planning history is older than the concession record. MTBU says the Red and Orange lines were approved as first-stage, first-phase construction routes in ROC80 and completed in ROC97.[^mtbu-network-origin] The government history is a network milestone, not a station-by-station Orange commissioning record. KRTC supplies the exact operator date: the Orange Line entered service on 14 September 2008, after the Red Line had begun regular service on 9 March.[^krtc-15th-anniversary] That account treats the Orange opening as the event that completed the original Red/Orange cross-shaped network.[^krtc-15th-anniversary]

The official records do not all give the same day. MTBU's 108-year engineering table says only ROC97 September for Orange operation.[^mtbu-108-engineering-summary] Its 112-year table repeats ROC97 September, while a 2015 MTBU research report gives 22 September 2008.[^mtbu-112-engineering-summary][^mtbu-104-bot-report] The annual report likewise records Orange as ROC97 September rather than a Gregorian day.[^mtbu-annual-109] These values remain a chronology conflict: the operator's 14 September, the annual engineering month, and the government research report's 22 September are not silently merged.

## Engineering boundary and depot

The government completed-route page describes the Orange Line as 14.4 km and 14 stations within a 42.7 km, 38-station Red/Orange project.[^mtbu-red-orange] The current TDX direction-zero route record instead gives 13.12 km for the 14-member Orange sequence.[^tdx-krtc-route][^tdx-krtc-station-of-route] Two MTBU engineering tables provide a third boundary: 0.408 km of ground route plus 12.858 km underground, a source-length sum of 13.266 km, and one depot.[^mtbu-108-engineering-summary][^mtbu-112-engineering-summary] The 112-year table also notes that adding depot-entry and turnout tracks using KRTC's supplied figure would make the Orange value 13.548 km.[^mtbu-112-engineering-summary]

These are not interchangeable measurements. The project page is a rounded route-planning summary, TDX is a current structured route field, and the engineering tables separate construction form and public facilities from the additional depot/turnout accounting.[^mtbu-red-orange][^tdx-krtc-route][^mtbu-112-engineering-summary] The page publishes all values rather than selecting a winner.

The Orange Line's depot is at its eastern end. KRTC places Daliao Depot in Daliao District around OT1, describes a 54-hectare site, and says the facility plan assigns about 36 hectares to the metro station and Level 5 maintenance depot, leaving about 18 hectares as a commercial-service area.[^krtc-daliao-depot] The operator's page describes two signed commercial developments and approximately 15 hectares still available for development; those are depot-land facts, not evidence that the commercial area is part of the railway's route length.[^krtc-daliao-depot] The government service-indicator document also distinguishes one Daliao depot for the Orange Line from the two Red depots.[^mtbu-service-indicators]

## Operations and systems boundary

The historical government service-indicator document lists the integrated Red/Orange system components as rolling stock, signalling, DC traction power, AC power, platforms, communications, automatic fare collection, lifts, escalators and depot equipment.[^mtbu-service-indicators] It establishes the system families that had to be delivered, but it does not identify the Orange Line's signalling supplier, signalling generation, traction-voltage register or individual substation locations.[^mtbu-service-indicators] A separate MTBU FAQ describes the Red/Orange network as high-capacity metro built to approved international standards, with expansion and extension considered at system design; it does not name a supplier or convert that compatibility statement into a CBTC or fixed-block claim.[^mtbu-systems-faq]

KRTC's current service FAQ supplies a line-level operating pattern rather than a station-by-station timetable. Orange trains start from O1 and OT1 at 06:00, terminal departures end at 24:00, peak headways are 4–6 minutes, off-peak headway is 8 minutes and the late-evening interval is 20 minutes; the page defines weekday peaks as 06:30–08:30 and 16:30–18:30.[^krtc-service-faq] The operator's separate Red/Orange FAQ says every Orange station is served, from O1 Hamasen to OT1 Daliao.[^krtc-red-orange-faq] The TDX first/last pull contains service-day, direction and destination dimensions with blank time fields in some rows, so it is not turned into a single station-specific timetable here.[^tdx-krtc-first-last]

The current operator station index confirms the Orange code family O1, O2, O4, O5, O6–O14 and OT1, with O5 sharing Formosa Boulevard with R10.[^krtc-station-guide] TDX records the same O5/R10 transfer relationship in its line-transfer response, while the government network page lists O5/R10 as the metro interchange and O1 as a Circular Light Rail connection.[^tdx-krtc-transfer][^mtbu-roadmap][^mtbu-red-orange] The station sequence and interchange data establish the current passenger-facing structure; they do not establish platform-screen-door retrofit dates, accessibility inventories, design capacity or Orange-only ridership, which remain TBC.[^krtc-station-guide][^tdx-krtc-first-last]

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
