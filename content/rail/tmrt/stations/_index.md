---
title: Stations
description: Eighteen Green Line stations in TDX running order, with their siting, contract context and published station design.
order: 2
sources:
  - id: tdx-tmrt
    title: Taiwan MOTC TDX rail records for TMRT
    titleOriginal: 交通部運輸資料流通服務標準資料
    publisher: Ministry of Transportation and Communications, Taiwan (交通部)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TMRT?$format=JSON
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Committed station and route sequence records for TMRT.
  - id: cj910
    title: CJ910 project record
    titleOriginal: CJ910 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C30
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Northern civil package.
  - id: cj920
    title: CJ920 project record
    titleOriginal: CJ920 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C29
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Central civil package.
  - id: cj930
    title: CJ930 project record
    titleOriginal: CJ930 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C28
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Southern civil package.
  - id: tmrt-art
    title: Public works
    titleOriginal: 公共藝術
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/art/public-works
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current public-art roster.
---

The station list is generated from the TMRT `Station` and `StationOfRoute` records in TDX.[^tdx-tmrt] Station pages are content entities because the useful distinctions are not only coordinates: the construction package, engineering form, naming context and the operator's published public-art record differ from stop to stop.[^cj910][^cj920][^cj930][^tmrt-art]
