---
title: "K6 / 安坑6線"
summary: "New Taipei route: K6 (安坑6線)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Light-rail feeder route (輕軌接駁路線)"
    source: ntpc-category-lrt
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
  - id: ntpc-category-lrt
    title: "New Taipei bus route catalogue — Light-rail feeder routes"
    titleOriginal: "輕軌接駁路線"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/0358b481-a8ce-45ac-a40f-50cd6c895683
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 輕軌接駁路線 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 輕軌接駁路線 dataset files 安坑6線 as a Light-rail feeder route (輕軌接駁路線) identity.[^ntpc-category-lrt]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence is a there-and-back working of 14 stops from 輕軌雙城站, past 安坑輕軌機廠, then 璦丁堡社區, then 二城, then 雙城安康路口, then 和成路12巷, returning to 輕軌雙城站.[^tdx-bus] 1 confirmed interchange is recorded in the curated stop-ID join set: Shuangcheng.[^tdx-bus] The route runs 1 subroute under a single operator, 指南客運.[^tdx-bus] The committed record carries 1 direction/variant sequence: 14 stops (outbound).[^tdx-bus] The published fare is charged over 1 Segment; the published route length is 3.45 km; weekday service runs from 06:30 to 20:00; holiday service instead runs from 07:00 to 17:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “安泰路-輕軌雙城站”; published distance 3.45 km; service span Weekdays: 去程：0630-2000；返程：0630-2000; Holidays: 去程：0700-1700；返程：0700-1700; fare 一段票 / 1 Segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 1 directional or variant stop sequence for K6; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**K6 (14 stops):** LRT Shuangcheng Sta -> LRT Depot -> Dinghao Community -> Lane 60 Antai Rd Entrance -> Aidingbao Community -> Lane 19 Antai Rd Entrance -> Antai & Ankang Intersection -> Ercheng -> Central Engraving & Printing Plant -> Shuangcheng & Ankang Intersection -> Xiyangyang Community Activity Center -> Yuhe 4th St Entrance -> Lane 12 Hecheng Rd -> LRT Shuangcheng Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 1 published shape record in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-lrt][^ntpc-transport]
