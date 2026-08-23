---
title: "837Shuttle / 837區"
summary: "New Taipei route: 837Shuttle (837區)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 837區 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence is a there-and-back working of 45 stops from 捷運淡水站, past 運動公園, then 高厝坑, then 竹圍活動中心, then 竹林民富街口, then 淡金路16巷, returning to 捷運淡水站.[^tdx-bus] 4 confirmed interchanges are recorded in the curated stop-ID join set: Zhuwei, Hongshulin, Tamsui and Ganzhenlin.[^tdx-bus] The route runs 3 subroutes under a single operator, 淡水客運.[^tdx-bus] The TDX record files 3 distinct stop-pattern names under this identity: 837區、837區經竿蓁二街福德宮、837區經紅樹林路.[^tdx-bus] The committed record carries 3 direction/variant sequences, 57 distinct stops in total: 38 stops (outbound, 837區); 41 stops (outbound, 837區經竿蓁二街福德宮); 45 stops (outbound, 837區經紅樹林路).[^tdx-bus] The published fare is charged over 1 segment; the published route length is 27.4 km; weekday service runs from 06:20 to 19:10; holiday service follows the same published span.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “淡水-竹圍”; published distance 27.4 km; service span Weekdays: 去程：0620-1910；返程：0620-1910; Holidays: 去程：0620-1910；返程：0620-1910; fare 一段票 / 1 segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 3 directional or variant stop sequences for 837Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**837 Shuttle (38 stops):** MRT Tamsui Station -> Sports Park -> Waigan Zhenlin -> Xiaguan -> LRT Ganzhenlin Sta -> ShanHaiDaDi -> LRT Hongshulin Sta -> MRT Hongshulin Sta -> Bashi Village -> Zhuwei Elementary School -> Nursing Home -> Mackay Memorial Hospital -> MRT Zhuwei Sta -> Kid Castle -> Yuhuayuan -> Modeng Family -> Zhuwei Activity Center -> Gongjiu park -> Weige -> Zhulin & Minfu Intersection -> Zhuwei Junior High School -> Zhuwei Elementary School -> Xiayin -> Hanbiyuan -> Shuixian Village -> Gaocuokeng -> MRT Hongshulin Sta -> LRT Hongshulin Sta -> Danjin Rd Lane 16 -> Meigui Huayuan -> Feilengcui -> Hongshulin Rd 3 -> Haiyue Community -> Monaco -> Xiaguan -> Waigan Zhenlin -> SportsPark -> MRT Tamsui Sta[^tdx-bus]

**837 Shuttle Ganzhen 2nd St Fude Temple (41 stops):** MRT Tamsui Station -> Sports Park -> Waigan Zhenlin -> Xiaguan -> LRT Ganzhenlin Sta -> ShanHaiDaDi -> LRT Hongshulin Sta -> MRT Hongshulin Sta -> Bashi Village -> Zhuwei Elementary School -> Nursing Home -> Mackay Memorial Hospital -> MRT Zhuwei Sta -> Kid Castle -> Yuhuayuan -> Modeng Family -> Zhuwei Activity Center -> Gongjiu park -> Weige -> Zhulin & Minfu Intersection -> Zhuwei Junior High School -> Zhuwei Elementary School -> Xiayin -> Hanbiyuan -> Shuixian Village -> Gaocuokeng -> MRT Hongshulin Sta -> LRT Hongshulin Sta -> Danjin Rd Lane 16 -> Meigui Huayuan -> Feilengcui -> Hongshulin Rd 3 -> Haiyue Community -> Monaco -> Xiaguan -> Ganzhen 2nd St 1 -> Ganzhen 2nd St Fude Temple -> Ganzhen 2nd St 2 -> Waigan Zhenlin -> SportsPark -> MRT Tamsui Sta[^tdx-bus]

**837ShuttleB (45 stops):** MRT Tamsui Station -> Sports Park -> Waigan Zhenlin -> Ganzhenlin(Pingding Rd) -> Pingding Rd Lane 52 -> Hongshulin Rd 3 -> Hongshulin Rd 2 -> Hongshulin Rd 1 -> Hongshulin Rd -> Gaocuokeng -> Shuixian Village -> Hanbiyuan -> Xiayin -> Zhuwei Elementary School -> Zhuwei High School -> Zhulin & Minfu Intersection -> Weige -> Gongjiu park -> Zhuwei Activity Center -> MRT Zhuwei Sta -> Kid Castle -> Yuhuayuan -> Modeng Family -> Zhuwei Activity Center -> Gongjiu park -> Weige -> Zhulin & Minfu Intersection -> Zhuwei Junior High School -> Zhuwei Elementary School -> Xiayin -> Hanbiyuan -> Shuixian Village -> Gaocuokeng -> MRT Hongshulin Sta -> LRT Hongshulin Sta -> Danjin Rd Lane 16 -> Meigui Huayuan -> Feilengcui -> Hongshulin Rd 3 -> Haiyue Community -> Monaco -> Xiaguan -> Waigan Zhenlin -> SportsPark -> MRT Tamsui Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 3 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
