---
title: "946Sub / 946副"
summary: "New Taipei route: 946Sub (946副)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Rapid bus (快速公車)"
    source: ntpc-category-rapid
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
  - id: ntpc-category-rapid
    title: "New Taipei bus route catalogue — Rapid buses"
    titleOriginal: "快速公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/8732f6a7-c226-4ebd-ab0c-fca42b981b5c
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 快速公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 快速公車 dataset files 946副 as a Rapid bus (快速公車) identity.[^ntpc-category-rapid]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 28 stops from 林口站, past 湖北里2.3鄰路口, then 文三信義路口, then 文三忠孝路口, then 未來城社區, then 復興一路, then 瑞光路, ending at 瑞光港墘路口.[^tdx-bus] 3 confirmed interchanges are recorded in the curated stop-ID join set: Linkou Station, Xihu and Gangqian.[^tdx-bus] The route runs 2 subroutes under a single operator, 三重客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 62 distinct stops in total: 28 stops (outbound); 34 stops (return).[^tdx-bus] The published fare is charged over Charge for 2 sections; the published route length is 63.6 km; weekday service runs from 06:30 to 19:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “林口-內湖科技園區(經南勢街)”; published distance 63.6 km; service span Weekdays: 去程：0630-1900；返程：0630-1900; Holidays: 去程： - ；返程： -; fare 二段票 / Charge for 2 sections.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-rapid][^ntpc-transport]
