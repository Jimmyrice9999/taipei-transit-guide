---
title: "Tutan Holidays / 塗潭假日線"
summary: "New Taipei route: Tutan Holidays (塗潭假日線)."
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

New Taipei City Department of Transportation's full 新巴士 dataset files 塗潭假日線 as a New Bus community service (新巴士) identity.[^ntpc-category-newbus]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 10 stops from 捷運新店站(新店路), past 永業路口, then 新潭路1段120巷口, then 新潭路2段62巷口, then 新潭路2段190巷口, then 新潭路3段215巷口, then 新潭路3段231巷口, ending at 新潭路3段275巷口.[^tdx-bus] 1 confirmed interchange is recorded in the curated stop-ID join set: Xindian.[^tdx-bus] The route runs 4 subroutes under a single operator, 新店區公所.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 塗潭假日線第1-5班、塗潭假日線第6班.[^tdx-bus] The committed record carries 4 direction/variant sequences, 20 distinct stops in total: 10 stops (outbound, 塗潭假日線第1-5班); 10 stops (return, 塗潭假日線第1-5班); 7 stops (outbound, 塗潭假日線第6班); 7 stops (return, 塗潭假日線第6班).[^tdx-bus] The published fare is charged over Free; the published route length is recorded as 99 km, a value shared identically across 175 otherwise unrelated New Taipei routes in this dataset and treated here as an unpopulated placeholder rather than a measured distance for this specific route; no weekday service is published; holiday service runs from 06:40 to 17:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “捷運新店站-新潭路3段275巷口”; published distance 99 km (a value shared identically across 175 otherwise unrelated New Taipei routes in this dataset, which reads as an unpopulated placeholder rather than a measured distance for this specific route); service span Weekdays: 去程： - ；返程： -; Holidays: 去程：0640-1700；返程：0640-1700; headway fields Holidays: 3~10月第6班次行駛至新潭路3段275巷口。11~2月第6班次行駛至新潭路3段112巷口。; fare 免費 / Free.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-newbus][^ntpc-transport]
