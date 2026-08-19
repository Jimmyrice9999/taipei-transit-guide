---
title: New Taipei bus routes
description: New Taipei routes grouped by the official Department of Transportation route-type datasets.
order: 17
sources:
  - id: tdx-bus
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry the New Taipei route-type or service fields."
  - id: ntpc-bus-route-data
    title: "New Taipei bus route list"
    titleOriginal: "公車路線清單"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/api/datasets/0ee4e6bf-cee6-4ec8-8fe1-71f544015127/json?size=1000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full current route-service dataset was fetched. A record is joined to a TDX route only by the exact published Traditional-Chinese route name; it supports current route endpoints, distance, first/last service, headway fields and fare where the row carries them. Missing rows remain TBC."
  - id: ntpc-transport
    title: "New Taipei Department of Transportation transport-management page"
    titleOriginal: "新北市政府交通局運輸管理科"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The official transport-management page identifies the New Taipei route-information, rapid, jump-frog and low-floor service resources searched for this run."
  - id: ntpc-category-general
    title: "New Taipei bus route catalogue — General buses"
    titleOriginal: "一般公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/45572534-e503-4ece-afea-54440bf2624a
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 一般公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-category-rapid
    title: "New Taipei bus route catalogue — Rapid buses"
    titleOriginal: "快速公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/8732f6a7-c226-4ebd-ab0c-fca42b981b5c
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 快速公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-category-pioneer
    title: "New Taipei bus route catalogue — MRT pioneer buses"
    titleOriginal: "捷運先導公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/99fa69ea-24bf-4580-877a-998eb2cc42c2
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 捷運先導公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-category-newbus
    title: "New Taipei bus route catalogue — New Bus community services"
    titleOriginal: "新巴士"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/e4c58656-22d1-4bcf-af33-16ca94532a36
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 新巴士 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-category-event
    title: "New Taipei bus route catalogue — Event shuttles"
    titleOriginal: "活動專車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/0c8bfb41-4014-4e09-bfb3-129a65103fb7
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 活動專車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-category-jumpfrog
    title: "New Taipei bus route catalogue — Jump-frog commuter buses"
    titleOriginal: "跳蛙公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/f5e9a430-f337-476f-801e-dc167a112aa2
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 跳蛙公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-category-lrt
    title: "New Taipei bus route catalogue — Light-rail feeder routes"
    titleOriginal: "輕軌接駁路線"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/0358b481-a8ce-45ac-a40f-50cd6c895683
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 輕軌接駁路線 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
---

The committed TDX layer contains 562 New Taipei route identities in this municipality group.[^tdx-bus] New Taipei Department of Transportation route-type datasets provide seven stable browse subgroups: General buses (217), Rapid buses (57), MRT pioneer buses (2), New Bus community services (207), Event shuttles (4), Jump-frog commuter buses (70), Light-rail feeder routes (5).[^ntpc-transport][^ntpc-category-general][^ntpc-category-rapid][^ntpc-category-pioneer][^ntpc-category-newbus][^ntpc-category-event][^ntpc-category-jumpfrog][^ntpc-category-lrt]

The group page lists those subgroups in size order, opening the first and leaving the rest closed, and retains every route at the municipality-scoped URL `/bus/routes/new-taipei/<slug>/`.[^tdx-bus] That path includes the municipality group, so a numeric collision with a Taipei route cannot overwrite or masquerade as the other record.[^tdx-bus]

The full current New Taipei route-service dataset was fetched and joined by exact route name.[^ntpc-bus-route-data] Missing current rows stay TBC on their route pages; no related route is used as a proxy.[^ntpc-bus-route-data]
