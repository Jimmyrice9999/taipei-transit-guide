---
title: "677 / 677"
summary: "New Taipei route: 677 (677)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "General bus (一般公車)"
    source: ntpc-category-general
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
  - id: ntpc-category-general
    title: "New Taipei bus route catalogue — General buses"
    titleOriginal: "一般公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/45572534-e503-4ece-afea-54440bf2624a
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 一般公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 677 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 37 stops from 社后消防隊, past 社后派出所, then 樟江大橋, then 湖前街口, then 東湖國小, then 大湖公園, then 金龍隧道口, ending at 金龍寺.[^tdx-bus] 3 confirmed interchanges are recorded in the curated stop-ID join set: Neihu, Dahu Park and Huzhou.[^tdx-bus] The route runs 2 subroutes under a single operator, 光華巴士.[^tdx-bus] The committed record carries 2 direction/variant sequences, 74 distinct stops in total: 37 stops (outbound); 37 stops (return).[^tdx-bus] The published fare is charged over 1 Segment; the published route length is 20.8 km; weekday service runs from 06:00 to 21:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “汐止社后-金龍寺”; published distance 20.8 km; service span Weekdays: 去程：0600-2100；返程：0600-2100; Holidays: 去程： - ；返程： -; fare 一段票 / 1 Segment.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
