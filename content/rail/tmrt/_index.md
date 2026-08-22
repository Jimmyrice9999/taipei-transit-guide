---
title: Taichung Metro
kind: system
description: Taichung's Green Line — a single steel-wheel, driverless metro linking Beitun, the city centre and the HSR station.
order: 2
hero:
  image: tmrt/hero
  alt: A white-and-green Taichung Metro Green Line train approaching Beitun Main Station over steel track and switches.
  caption: A Taichung Metro Green Line train at Beitun Main Station.
sources:
  - id: tdx-tmrt
    title: Taiwan MOTC TDX rail records for TMRT
    titleOriginal: 交通部運輸資料流通服務標準資料
    publisher: Ministry of Transportation and Communications, Taiwan (交通部)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TMRT?$format=JSON
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Committed station, route and geometry records for the Green Line.
  - id: tmrt-map
    title: Metro map
    titleOriginal: 路線圖
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/map
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator map and station order.
  - id: tmrt-faq
    title: Frequently asked questions
    titleOriginal: 常見問題
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/our-services/faq
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current technical description of the Green Line.
  - id: tmrt-annual
    title: Taichung Metro Corporation 2021 operational route report
    titleOriginal: 臺中捷運股份有限公司營運路線資料
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/Content/Uploads/PublicClassArticle/9ad3a311-c8e4-4bb8-883a-d36d756eeeae.pdf
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Route length, station count and system context.
  - id: cj910
    title: CJ910 project record
    titleOriginal: CJ910 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C30
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: G0, depot and northern civil package.
  - id: cj920
    title: CJ920 project record
    titleOriginal: CJ920 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C29
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: G3–G9 civil package.
  - id: cj930
    title: CJ930 project record
    titleOriginal: CJ930 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C28
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: G10–G17 civil package.
  - id: cj900
    title: CJ900/CJ907 system-equipment project record
    titleOriginal: CJ900、CJ907 機電系統工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Green Line system-equipment package.
  - id: tmrt-events
    title: Major events
    titleOriginal: 大事紀
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/about/major-events
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Company, accident and opening chronology.
  - id: cy-control
    title: Investigation into the Taichung Metro joint-shaft fracture
    titleOriginal: 臺中捷運鋼箱梁斷裂案調查報告
    publisher: Control Yuan, Taiwan (監察院)
    url: https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/71448
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Investigation of the 2020 test-operation failure.
  - id: tmrt-reopen
    title: Taichung Metro resumes test operation
    titleOriginal: 臺中捷運恢復試營運
    publisher: Taichung City Government (臺中市政府)
    url: https://www.taichung.gov.tw/8868/8872/9962/1742706
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Test restart and formal opening dates.
---

Taichung Metro Corporation's Green Line is a separate railway from the Taipei-region network, even though both are represented by the same TDX rail-data family.[^tmrt-annual] Its public service opened on 25 April 2021 after a test-operation restart, and the current operating line has 18 stations between G0 Beitun Main Station and G17 HSR Taichung Station.[^tmrt-reopen][^tmrt-map] The station records, route sequence and coordinates on this system are the committed TMRT records from Taiwan MOTC's TDX platform.[^tdx-tmrt]

The system is medium-capacity, steel-wheel and fully driverless.[^tmrt-faq] G0 and G17 are at ground level; the other 16 stations are elevated.[^tmrt-faq] Its route crosses several kinds of urban edge: the Beitun depot and new development at the north end, established neighbourhoods and civic destinations through the middle, and the TRA/HSR interchange at the south.[^tmrt-map][^tmrt-annual] That geography is more useful here than calling the line simply “green”: each station page keeps its TDX address, district, official sequence and chainage visible.

The construction record is split across four packages. CJ910 covers G0, the Beitun depot and the full track system at the northern end; CJ920 covers G3–G9; CJ930 covers G10–G17; and CJ900/CJ907 covers the system equipment and rolling stock.[^cj910][^cj920][^cj930][^cj900] The system's most consequential incident was a joint-shaft fracture during test operation on 21 November 2020, followed by a new-axle verification programme and the 2021 reopening.[^tmrt-events][^cy-control][^tmrt-reopen] An older beam-collapse accident at the G4/G5 construction site in 2015 is a separate event with separate casualties, not the later operating incident.[^tmrt-events]

This system uses TDX for structured station and route data, and the operator, Taichung City government, construction bureau and Control Yuan for history and engineering. The page does not infer a station's structure from its address or from a photograph.
