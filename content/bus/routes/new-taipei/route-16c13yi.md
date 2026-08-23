---
title: "Taipei Xiaocheng-Dapinglin / 台北小城-大坪林"
summary: "New Taipei route: Taipei Xiaocheng-Dapinglin (台北小城-大坪林)."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 台北小城-大坪林 as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 11 stops from 僑愛七路, past 僑愛公園, then 台北小城(二), then 台北小城(三), then 輕軌耕莘安康院區站, then 檳榔路, then 捷運七張站, ending at 大坪林.[^tdx-bus] 3 confirmed interchanges are recorded in the curated stop-ID join set: Xindian District Office, Qizhang and Dapinglin.[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 24 distinct stops in total: 11 stops (outbound); 13 stops (return).[^tdx-bus] The published fare is charged over 1 segment; the published route length is 18.5 km; weekday service runs from 06:30 to 19:35; holiday service instead runs from 08:00 to 16:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “台北小城-大坪林”; published distance 18.5 km; service span Weekdays: 去程：0630-1935；返程：0630-1935; Holidays: 去程：0800-1600；返程：0800-1600; fare 一段票 / 1 segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Taipei Xiaocheng-Dapinglin; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Taipei Xiaocheng-MRT (11 stops):** Qiaoai 7th Rd -> Qiaoai Park -> Taipei Xiaocheng 1 -> Taipei Xiaocheng 2 -> Taipei Xiaocheng 3 -> LRT Taipei Xiaocheng Sta(DaGuan Elementary and Junior High School) -> LRT Cardinal Tien Hospital An Kang Branch Sta -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> MRT Qizhang Sta -> Dapingding[^tdx-bus]

**Taipei Xiaocheng-MRT (13 stops):** Minquan Industrial Area -> Dafeng Elementary School -> Minzu Rd Entrance -> Zhongzheng Public Housing -> Chongguang High School -> MRT Xindian Dist Office Station -> LRT Cardinal Tien Hospital An Kang Branch Sta -> LRT Taipei Xiaocheng Sta(DaGuan Elementary and Junior High School) -> Taipei Xiaocheng 3 -> Taipei Xiaocheng 2 -> Taipei Xiaocheng 1 -> Qiaoai Park -> Qiaoai 7th Rd[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
