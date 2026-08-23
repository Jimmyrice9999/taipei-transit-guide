---
title: "MRT Yingtao Fude Sta.-Ming Chuan University (Taoyuan Campus) / 捷運鶯桃福德站-銘傳大學(桃園校區)"
summary: "New Taipei route: MRT Yingtao Fude Sta.-Ming Chuan University (Taoyuan Campus) (捷運鶯桃福德站-銘傳大學(桃園校區))."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 捷運鶯桃福德站-銘傳大學(桃園校區) as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 5 stops from 捷運鶯桃福德站, past 鳳鳴火車站, then 銘傳資管大樓, then 銘傳設計大樓, ending at 銘傳郵政代辦所.[^tdx-bus] 1 confirmed interchange is recorded in the curated stop-ID join set: Yingtao Fude.[^tdx-bus] The route runs 2 subroutes under a single operator, 臺北客運.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 捷運鶯桃福德站-銘傳大學(桃園校區)去、捷運鶯桃福德站-銘傳大學(桃園校區)返.[^tdx-bus] The committed record carries 2 direction/variant sequences, 10 distinct stops in total: 5 stops (outbound, 捷運鶯桃福德站-銘傳大學(桃園校區)去); 5 stops (return, 捷運鶯桃福德站-銘傳大學(桃園校區)返).[^tdx-bus] The published fare is charged over 2 Segments; the published route length is 9.85 km; weekday service runs from 07:30 to 08:30.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “捷運鶯桃福德站-銘傳大學(桃園校區)”; published distance 9.85 km; service span Weekdays: 去程：0730-0830；返程：1600-1700; Holidays: 去程： - ；返程： -; fare 二段票 / 2 Segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for MRT Yingtao Fude Sta.-Ming Chuan University (Taoyuan Campus); each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**MRT Yingtao Fude Sta-Ming Chuan University (Taoyuan Campus) (5 stops):** MRT Yingtao Fude Sta -> Fengming Rail Sta -> Ming Chuan Info & Mgmt Building -> Ming Chuan Design Building -> Ming Chuan Postal Agency[^tdx-bus]

**MRT Yingtao Fude Sta-Ming Chuan University (Taoyuan Campus) (5 stops):** Ming Chuan Info & Mgmt Building -> Ming Chuan Design Building -> Ming Chuan Postal Agency -> Fengming Rail Sta -> MRT Yingtao Fude Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
