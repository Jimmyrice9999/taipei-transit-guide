---
title: Green Line
summary: Taichung's 18-station driverless railway from Beitun Main Station to HSR Taichung Station.
order: 1
line: G
operator: TMRT
aliases:
  - 綠線
  - 臺中捷運綠線
  - Taichung Metro Green Line
updated: 2026-08-23
lead:
  value: "16.71"
  unit: km
  label: operator-published route length
  source: tmrt-annual
  note: TDX publishes RouteLength 16.70 km, plus 16.93 km in direction 0 and 16.97 km in direction 1 as cumulative station chainage; these values are retained as a conflict rather than silently substituted for the operator's 16.71 km figure.
facts:
  - label: Operator
    value: Taichung Metro Corporation
    source: tmrt-events
  - label: Stations
    value: "18"
    source: tmrt-annual
  - label: Termini
    value: G0 Beitun Main Station — G17 HSR Taichung Station
    source: tmrt-map
  - label: Public opening
    value: 25 April 2021
    source: tmrt-reopen
  - label: Guideway
    value: 16 elevated stations; G0 and G17 at ground level
    source: tmrt-faq
  - label: Automation
    value: Fully driverless
    source: tmrt-faq
specs:
  - label: Operator route length
    value: "16.71"
    unit: km
    source: tmrt-annual
  - label: TDX direction 0 chainage
    value: "16.93"
    unit: km
    source: tdx-tmrt
  - label: TDX route length field
    value: "16.70"
    unit: km
    source: tdx-tmrt
  - label: TDX direction 1 chainage
    value: "16.97"
    unit: km
    source: tdx-tmrt
  - label: Stations
    value: "18"
    source: tmrt-annual
  - label: Train formation
    value: 2
    unit: cars
    source: tmrt-faq
sources:
  - id: tdx-tmrt
    title: Taiwan MOTC TDX rail records for TMRT
    titleOriginal: 交通部運輸資料流通服務標準資料
    publisher: Ministry of Transportation and Communications, Taiwan (交通部)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TMRT?$format=JSON
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Committed TDX StationOfRoute and Route records provide the 18-stop sequence and directional cumulative chainage; Shape provides the geometry.
  - id: tmrt-map
    title: Metro map
    titleOriginal: 路線圖
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/map
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator map and station order from G0 to G17.
  - id: tmrt-annual
    title: Taichung Metro Corporation 2021 operational route report
    titleOriginal: 臺中捷運股份有限公司營運路線資料
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/Content/Uploads/PublicClassArticle/9ad3a311-c8e4-4bb8-883a-d36d756eeeae.pdf
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The operator's report gives the 16.71 km route, 18 stations, start/end and system description.
  - id: tmrt-faq
    title: Frequently asked questions
    titleOriginal: 常見問題
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/our-services/faq
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The operator's FAQ gives steel-wheel medium-capacity operation, two-car trains, 536 passengers per train, driverless operation, speeds and the two ground-level stations.
  - id: cj910
    title: CJ910 project record
    titleOriginal: CJ910 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C30
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Northern civil package: G0, Beitun depot and the track system."
  - id: cj920
    title: CJ920 project record
    titleOriginal: CJ920 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C29
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Civil package for the G3–G9 elevated section."
  - id: cj930
    title: CJ930 project record
    titleOriginal: CJ930 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C28
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Civil package for G10–G17, including the ground-level HSR end."
  - id: cj900
    title: CJ900/CJ907 system-equipment project record
    titleOriginal: CJ900、CJ907 機電系統工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: System-equipment package from the depot to G17, jointly delivered by Kawasaki Heavy Industries, Alstom and CTCI.
  - id: tmrt-art
    title: Public works
    titleOriginal: 公共藝術
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/art/public-works
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator roster of Green Line public works and artists.
  - id: tmrt-events
    title: Major events
    titleOriginal: 大事紀
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/about/major-events
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Company, construction-accident, joint-shaft and opening milestones.
  - id: cy-control
    title: Investigation into the Taichung Metro joint-shaft fracture
    titleOriginal: 臺中捷運鋼箱梁斷裂案調查報告
    publisher: Control Yuan, Taiwan (監察院)
    url: https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/71448
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Investigation of the design-check, quality-control and oversight failures in the 2020 test-operation fracture, and the subsequent remedial sequence.
  - id: tmrt-reopen
    title: Taichung Metro resumes test operation
    titleOriginal: 臺中捷運恢復試營運
    publisher: Taichung City Government (臺中市政府)
    url: https://www.taichung.gov.tw/8868/8872/9962/1742706
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The city announcement records test-operation restart on 25 March 2021 and formal service on 25 April 2021.
---

The Green Line is a single line, but it is not a single measurement. The operator's 2021 route report gives **16.71 km** and 18 stations.[^tmrt-annual] The committed TDX route record gives **16.70 km** in its `RouteLength` field, while its station chainages reach **16.93 km** in direction 0 and **16.97 km** in direction 1.[^tdx-tmrt] Those four figures are published together here because the sources do not state that they measure exactly the same object; the page does not average them.

`G0` Beitun Main Station and `G17` HSR Taichung Station are the line's two ground-level stations; the other 16 are elevated.[^tmrt-faq] The operator describes the railway as steel-wheel and medium-capacity, with two-car, fully driverless trains and a maximum operating speed of 75 km/h.[^tmrt-faq] The TDX sequence runs through Beitun, North District, Xitun, Nantun, South District and Wuri, ending beside the HSR and TRA interchange at `G17`.[^tdx-tmrt][^tmrt-map]

The civil work is readable as three geographic packages: CJ910 at `G0` and the Beitun depot, CJ920 across `G3`–`G9`, and CJ930 from `G10` through `G17`.[^cj910][^cj920][^cj930] CJ900/CJ907 is the system-equipment package, covering power, communications, automatic fare collection, depot equipment, trains and related systems rather than a further passenger-facing segment.[^cj900]

The line's opening history contains a material safety event. A joint shaft fractured during test operation on 21 November 2020; the Control Yuan records failures to verify design parameters and deficiencies in quality supervision.[^tmrt-events][^cy-control] Taichung restarted test operation on 25 March 2021 and began formal service on 25 April 2021 after the remedial programme.[^tmrt-reopen] The sources read for this page do not support the often-repeated “2022 reopening” date, so it is recorded as a checked conflict rather than repeated as fact.

Public art is not treated as a colour swatch for the line. The operator's current roster names works at `G0`, `G3`, `G7`, `G9`, `G10a`, `G13`, `G16` and `G17`, with the station-specific pages below preserving those names and artists.[^tmrt-art]
