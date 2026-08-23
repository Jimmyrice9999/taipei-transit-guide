---
title: "982Shuttle / 982區"
summary: "New Taipei route: 982Shuttle (982區)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 982區 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 19 stops from 榮華中平路口, past 行政院新莊聯合辦公大樓(中央路), then 勞工活動中心, then 政錩汽車, then 思源新北大道路口, then 仁義里, then 捷運頭前庄站(思源路), ending at 捷運新埔站.[^tdx-bus] 6 confirmed interchanges are recorded in the curated stop-ID join set: New Taipei Industrial Park Station, Xinpu, Touqianzhuang, Xinpu Minsheng, Xingfu and New Taipei Industrial Park.[^tdx-bus] The route runs 2 subroutes under two operators, 首都客運 and 大都會客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 39 distinct stops in total: 19 stops (outbound); 20 stops (return).[^tdx-bus] The published fare is charged over 1 segments; the published route length is 17 km; weekday service runs from 06:35 to 17:30.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “新莊-捷運新埔站”; published distance 17 km; service span Weekdays: 去程：0635-1730；返程：0635-1730; Holidays: 去程： - ；返程： -; fare 一段票 / 1 segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 982Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**982 Shuttle (19 stops):** Ronghua & Zhongping Intersection -> Xinzhuang Joint Office Tower Executive Yuan -> MRT Xinzhuang Fuduxin Sta(zhangyang Rd) -> Vision of Zhonggang Main Drainage -> Laborers Activity Center -> Bourgeois Exhibit Center -> Shixiang -> Zhengchang Motors -> Standard Factory -> Management Center -> MRT New Taipei Industrial Park Sta -> Siyuan Rd & New Taipei Blvd Intersection -> Touqian Junior High School -> MRT Xingfu Sta -> Renyi Village -> Siyuan & Fuxing Intersection -> Taipei Hospital -> MRT Touqianzhuang Sta(Siyuan Rd) -> MRT Xinpu Sta[^tdx-bus]

**982 Shuttle (20 stops):** Banqiao Flower Market -> MRT Xinpu Sta -> MRT Touqianzhuang  Sta (Siyuan Rd) -> Taipei Hospital -> Siyuan & Fuxing Intersection -> MRT Xingfu Sta -> Siyuan & Touqian Intersection -> Touqian Junior High School -> Siyuan Rd & New Taipei Blvd Intersection -> MRT New Taipei Industrial Park Sta -> Wugong and Fuhui Intersection -> Management Center -> Standard Factory -> Zhengchang Motors -> Shixiang -> Bourgeois Exhibit Center -> Laborers Activity Center -> Vision of Zhonggang Main Drainage -> MRT Xinzhuang Fuduxin Sta(zhangyang Rd) -> Ronghua & Zhongping Intersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
