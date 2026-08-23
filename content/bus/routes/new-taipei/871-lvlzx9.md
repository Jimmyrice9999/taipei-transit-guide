---
title: "871 Zhongshan North Road / 871經中山北路"
summary: "New Taipei route: 871 Zhongshan North Road (871經中山北路)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 871經中山北路 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 31 stops from 捷運淡水站, past 捷運淡水站, then 福德宮, then 國民運動中心, then 義山里, then 鄉根園, then 行忠堂, ending at 椿子林.[^tdx-bus] 4 confirmed interchanges are recorded in the curated stop-ID join set: Tamsui, Danjin Beixin, Xinshi 1st Rd. and Tamsui District Office.[^tdx-bus] The route runs 2 subroutes under a single operator, 淡水客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 60 distinct stops in total: 31 stops (outbound); 29 stops (return).[^tdx-bus] The published fare is charged over 1 segments; the published route length is 21.6 km; weekday service runs from 05:35 to 05:35.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “捷運淡水站-行忠堂”; published distance 21.6 km; service span Weekdays: 去程：0535-0535；返程：0535-0535; Holidays: 去程： - ；返程： -; fare 一段票 / 1 segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 871 Zhongshan North Road; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**871 Zhongshan North Road (31 stops):** MRT Tamsui Sta -> MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> BeiTamsui -> Dinghao -> Zhengde Junior High School -> TPC Dormitory -> Fude Temple -> LRT Danjin Beixin Sta -> Xinshi 1st Rd -> Department of Irrigation And Engineering -> Gongyuanju -> Public Sports Center -> Zhongshan & Binhai Intersection -> Gongsi Tianxi Bridge -> Pidao Village -> Yuying Elementary school -> Linzi -> Yishan Village -> Xiaguiroushan -> Yingguang Factory -> Dongyuan Factory -> Chelujiao -> Xianggenyuan -> Colorful World -> Daniutou RdEntrance -> Yunguangkeng -> Yunguangkeng -> Neighbor 7 Fanshu Village -> Xingzhong Temple -> Chunzihlin[^tdx-bus]

**871 Zhongshan North Road (29 stops):** Xingzhong Temple -> Xianggong Mountain -> Laiyin Castle -> Kanghua Villa -> Shuibiantou -> No295 Kuiroushan Rd -> Daniuchou -> Xuli Electronics -> Xiaguiroushan -> Yishan Village -> Linzi -> Yuying Elementary school -> Pidao Village -> Gongsi Tianxi Bridge -> Zhongshan & Binhai Intersection -> Public Sports Center -> Gongyuanju -> Department of Irrigation And Engineering -> Xinshi 1st Rd -> Tamjin & Xinshi 1st Rd Intersection -> Tamsui Qingge -> Fude Temple -> TPC Dormitory -> Zhengde Junior High School -> Dinghao -> North Tamsui -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
