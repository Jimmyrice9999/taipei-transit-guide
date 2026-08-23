---
title: "Tamsui-Neihu Technology Park / 淡水-內湖科技園區"
summary: "New Taipei route: Tamsui-Neihu Technology Park (淡水-內湖科技園區)."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 淡水-內湖科技園區 as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 14 stops from 新市站, past 沙崙路一段, then 淡江豪景, then 捷運淡水站, then 捷運劍南路站, then 恕德家商, then 港墘派出所, ending at 仁寶大樓.[^tdx-bus] 7 confirmed interchanges are recorded in the curated stop-ID join set: Jiannan Rd., Xihu, Gangqian, Zhuwei, Hongshulin, Tamsui and Binhai Shalun.[^tdx-bus] The route runs 1 subroute under a single operator, 淡水客運.[^tdx-bus] The committed record carries 1 direction/variant sequence, 14 distinct stops in total: 14 stops (outbound).[^tdx-bus] The published fare is charged over 3 Segments; the published route length is 29.8 km; weekday service runs from 06:40 to 06:40.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “淡水-內湖科技園區”; published distance 29.8 km; service span Weekdays: 去程：0640-0640；返程：0640-0640; Holidays: 去程： - ；返程： -; fare 三段票 / 3 Segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 1 directional or variant stop sequence for Tamsui-Neihu Technology Park; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Tamsui-Neihu Technology Park-Nangang Main Sta (14 stops):** Xinshi Station -> Shalun Rd Sec 1 -> Dahe Wenming -> Tamkang Haojing -> Chongjian St Intersection -> MRT Tamsui Sta -> MRT Hongshulin Sta -> MRT Zhuwei Station -> MRT Jiannan Rd Station -> MRT Xihu Station -> ShudeHighSchoolofCommerceandHomeEconomics -> LishanSt -> Gangqian Police Station -> Renbao Bldg[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 1 published shape record in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
