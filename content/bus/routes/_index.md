---
title: Routes
description: Individual bus routes — operator, corridor, stop list and frequency.
order: 1
sources:
  - id: tdx-bus
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized bus route identities and municipality fields used by the route index."
  - id: ntpc-transport
    title: "New Taipei Department of Transportation transport-management page"
    titleOriginal: "新北市政府交通局運輸管理科"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the New Taipei route-information and route-type resources used to organize that municipality's index."
---

The route index is organised by service class and municipality.[^tdx-bus]
New Taipei routes have a municipality-scoped index with collapsed subgroups
taken from the New Taipei Department of Transportation's route-type datasets;[^ntpc-transport]
Taipei and New Taipei route identities are never merged by number alone.[^tdx-bus]
