---
title: "Linkou-MRT Fuzhong Station / 林口-捷運府中站"
summary: "New Taipei route: Linkou-MRT Fuzhong Station (林口-捷運府中站)."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 林口-捷運府中站 as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 12 stops from 文化三路中山路口, past 春城麗池, then 林口國中, then 忠孝路口B, then 林口三井, then 捷運新埔站, then 板橋車站(文化路), ending at 捷運府中站(府中路).[^tdx-bus] 2 confirmed interchanges are recorded in the curated stop-ID join set: Fuzhong and Xinpu.[^tdx-bus] The route runs 2 subroutes under a single operator, 臺北客運.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 林口-捷運府中站、林口-捷運府中站(經仁愛路).[^tdx-bus] The committed record carries 2 direction/variant sequences, 16 distinct stops in total: 12 stops (outbound, 林口-捷運府中站); 12 stops (outbound, 林口-捷運府中站(經仁愛路)).[^tdx-bus] The published fare is charged over 2 segment; the published route length is 26.6 km; weekday service runs from 06:30 to 07:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “林口-捷運府中站”; published distance 26.6 km; service span Weekdays: 去程：0630-0700；返程：0630-0700; Holidays: 去程： - ；返程： -; fare 二段票 / 2 segment.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
