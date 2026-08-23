---
title: "Sanchong-Neihu Tech.Park / 三重-內科"
summary: "New Taipei route: Sanchong-Neihu Tech.Park (三重-內科)."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 三重-內科 as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 17 stops from 仙公廟, past 三重商工(中正北路), then 幸福市場, then 五華街, then 重陽橋, then 基湖路口, then 瑞光路, ending at 麗寶大樓.[^tdx-bus] 2 confirmed interchanges are recorded in the curated stop-ID join set: Jiannan Rd. and St.lgnatius High School.[^tdx-bus] The route runs 2 subroutes under a single operator, 中興巴士.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 三重-內科去、三重-內科返.[^tdx-bus] The committed record carries 2 direction/variant sequences, 35 distinct stops in total: 17 stops (outbound, 三重-內科去); 18 stops (return, 三重-內科返).[^tdx-bus] The published fare is charged over 2 segment; the published route length is 34.9 km; weekday service runs from 06:45 to 06:45.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “三重-內科”; published distance 34.9 km; service span Weekdays: 去程：0645-0645；返程：1800-1800; Holidays: 去程： - ；返程： -; fare 二段票 / 2 segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Sanchong-Neihu Tech.Park; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Sanchong-Neihu TechPark Go (17 stops):** Xiangong Temple -> Sanchong Vocational School -> Lixing Rd -> Yongfu St Entrance(Shengyou Temple) -> Xingfu Market -> MRT St Ignatius High School -> Jixian Rd -> Wuhua St -> Ziqiang & Wuhua Intersection -> Chongyang Bridge -> MRT Shilin Sta (Zhongzheng) -> MRT Jiannan Rd Station -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Libao Building[^tdx-bus]

**Sanchong-Neihu TechPark Back (18 stops):** Libao Building -> Ruiguang Rd -> Ruiguang & Gangqian Intersection -> Renbao Bldg -> Jihu Rd Entrance -> MRT Jiannan Rd Station -> MRT Shilin Sta (Zhongzheng) -> Chongyang Bridge -> Wufu Village -> Ziqiang & Wuhua Intersection -> Wuhua St -> Jixian Rd -> MRT St Ignatius High School Sta(Jixian Rd) -> Xingfu Market -> Yongfu St Entrance(Shengyou Temple) -> Lixing Rd -> Sanchong Vocational School -> Xiangong Temple[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
