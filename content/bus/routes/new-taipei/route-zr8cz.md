---
title: "Wugu-Banqiao Leapfrog bus / 五股-板橋"
summary: "New Taipei route: Wugu-Banqiao Leapfrog bus (五股-板橋)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Jump-frog commuter bus (跳蛙公車)"
    source: ntpc-category-jumpfrog
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
  - id: ntpc-category-jumpfrog
    title: "New Taipei bus route catalogue — Jump-frog commuter buses"
    titleOriginal: "跳蛙公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/f5e9a430-f337-476f-801e-dc167a112aa2
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 跳蛙公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 五股-板橋 as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 7 stops from 五股服務社, past 五股區公所(五股公有市場), then 中興路三段, then 板橋花市, then 華翠大橋, then 中山國中(縣民大道), ending at 新北板橋公車站.[^tdx-bus] 2 confirmed interchanges are recorded in the curated stop-ID join set: Banqiao and Xinpu Minsheng.[^tdx-bus] The route runs 2 subroutes under two operators, 淡水客運 and 指南客運.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 五股-板橋去、五股-板橋返.[^tdx-bus] The committed record carries 2 direction/variant sequences, 16 distinct stops in total: 7 stops (outbound, 五股-板橋去); 9 stops (return, 五股-板橋返).[^tdx-bus] The published fare is charged over 1 Segment; the published route length is 24.3 km; weekday service runs from 06:40 to 07:40.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “五股-板橋”; published distance 24.3 km; service span Weekdays: 去程：0640-0740；返程：1745-1745; Holidays: 去程： - ；返程： -; fare 一段票 / 1 Segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Wugu-Banqiao Leapfrog bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Wugu-Banqiao Go (7 stops):** Wugu Service Center -> Wugu District Office(Wugu Market) -> Zhongxing Rd Sec 3 -> Banqiao Flower Market -> Huacui Bridge -> Zhongshan Junior High School(Xian min Blvd) -> NTPC Banqiao Bus Station[^tdx-bus]

**Wugu-Banqiao Back (9 stops):** NTPC Banqiao Bus Station -> Zhongshan Junior High School(Xian min Blvd) -> Huacui Bridge -> Banqiao Flower Market -> MRT Xinpu Minsheng Sta -> Dahan Bridge -> Changjiang Rd Entrance -> Xitou Village -> Parking Lot(Wugu Market)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
