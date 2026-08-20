---
title: "Zhitan Village / 直潭里線"
summary: "New Taipei route: Zhitan Village (直潭里線)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "New Bus community service (新巴士)"
    source: ntpc-category-newbus
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: TBC
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: TBC
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
  - id: ntpc-category-newbus
    title: "New Taipei bus route catalogue — New Bus community services"
    titleOriginal: "新巴士"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/e4c58656-22d1-4bcf-af33-16ca94532a36
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 新巴士 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
  - id: ntpc-transport
    title: "New Taipei Department of Transportation transport-management page"
    titleOriginal: "新北市政府交通局運輸管理科"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The official transport-management page identifies the New Taipei route-information, rapid, jump-frog and low-floor service resources searched for this run."
---

## Classification and current service

New Taipei City Department of Transportation's full 新巴士 dataset files 直潭里線 as a New Bus community service (新巴士) identity.[^ntpc-category-newbus]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 8 stops from 下石厝路, past 直潭國小, then 三界公廟, then 金龍路口, then 海會寺, then 直潭里辦公處, then 永業路口, ending at 新店捷運站.[^tdx-bus] 1 confirmed interchange is recorded in the curated stop-ID join set: Xindian.[^tdx-bus] The route runs 2 subroutes under a single operator, 新店區公所.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 水源區直潭里去、水源區直潭里返.[^tdx-bus] The committed record carries 2 direction/variant sequences, 16 distinct stops in total: 8 stops (outbound, 水源區直潭里去); 8 stops (return, 水源區直潭里返).[^tdx-bus] The published route length is recorded as 99 km, a value shared identically across 175 otherwise unrelated New Taipei routes in this dataset and treated here as an unpopulated placeholder rather than a measured distance for this specific route; weekday service runs from 06:20 to 19:05.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “下石厝路-新店捷運站”; published distance 99 km (a value shared identically across 175 otherwise unrelated New Taipei routes in this dataset, which reads as an unpopulated placeholder rather than a measured distance for this specific route); service span Weekdays: 去程：0620-1905；返程：0700-1830; Holidays: 去程： - ；返程： -; headway fields Weekdays: 第8班僅行駛到新店捷運站.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-newbus][^ntpc-transport]
