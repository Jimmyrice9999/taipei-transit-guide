---
title: "Laojie River Station — Taoyuan Airport MRT"
summary: "Laojie River Station (A22), stop 22 of 22 on the Taoyuan Airport MRT, in 中壢區."
order: 122
line: A
operator: TYMC
spine: A22
updated: 2026-08-28
facts:
  - label: Station code
    value: A22
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 老街溪站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 中壢區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 22
    source: tdx-tymc-sor
  - label: Structure
    value: Underground; general primary sources agree the extension is underground, though the specific level count and platform dimensions rest only on a secondary source (see below)
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Commuter (普通車) only
    source: tymc-express-timetable
  - label: Exits
    value: 2; the Central West Road–Zhongfeng Road intersection and a separate exit onto Zhongfeng Road
    source: tymc-a22-station
specs:
  - label: Cumulative distance from A1
    value: 51.76
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
  - id: tymc-a22-station
    title: Taoyuan Airport MRT A22 station information
    titleOriginal: 桃園機場捷運老街溪站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A22/A4
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
  - id: rb-a22-opening
    title: Airport MRT A22 Laojie River Station opens
    titleOriginal: 機場捷運延伸線A22老街溪站正式通車
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/zh-TW/main/main_188/news/main_347/artsinfo_3905/
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The Bureau's own opening announcement gives the testing, handover, permit and opening dates and the three delay causes."
  - id: rb-a22-extension-scope
    title: Airport MRT A21-A23 extension project record
    titleOriginal: 機場捷運A21至A23延伸案
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/zh-TW/%5Bsite%5D/main_28/20250505_152320/20251104_133945/20250505_152539/
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Gives the extension's length, construction method and the three successive project-cost totals."
  - id: dorts-airport-a-table
    title: Airport MRT station table
    titleOriginal: 機場線車站一覽表
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23131
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Current station table giving A22's opening status and two internally-conflicting target years for the further A23 extension."
---

Laojie River is the current southern terminus of the Airport MRT, opened 31 July 2023 as a roughly 2.06 km underground extension beyond Huanbei — the same day the Ministry of Transportation and Communications issued its operating permit, following stability testing completed that March.[^rb-a22-opening] The Ministry's own opening release gives three delay causes together, not one: COVID-19-era disruption to foreign electrical-and-mechanical suppliers between 2020 and 2022, the technical difficulty of integrating the extension's newer signalling generation with the existing line (requiring extended testing), and design changes needed to coordinate with the separately-planned Taoyuan railway-undergrounding project.[^rb-a22-opening] The same release puts the total project cost at NT$17.302 billion, revised up from an original NT$13.801 billion and a first revision of NT$13.8 billion.[^rb-a22-extension-scope]

A further extension to Zhongli (`A23`), continuing underground and planned to connect with the future Taoyuan Metro Green Line, was under construction as of the sources read for this page; a Taoyuan city project page gives conflicting target years for its opening — 117 (2028) in one section and 118 (2029) in another section of the same page — a discrepancy this page reports rather than resolves.[^dorts-airport-a-table]

Structural detail beyond "underground" rests only on a secondary source: zh.wikipedia's dedicated article describes three below-ground levels (concourse, equipment and platform) and a single island platform roughly 80 m long, a level of detail this page's primary sources do not themselves state. TYMC's own timetable page does not list A22 among the express (直達車) stops; only the commuter (普通車) service serves this stop, consistent with it being the line's newest and southernmost station.[^tymc-express-timetable]

TDX's own committed route data places A22 51.76 km along route A-1 from Taipei Main Station by cumulative surveyed distance, the same measure this project uses for every station on the line.[^tdx-tymc-sor]
