---
title: "Taishan Elementary School-BR15 / 泰山-內湖(直達)"
summary: "New Taipei route: Taishan Elementary School-BR15 (泰山-內湖(直達))."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 泰山-內湖(直達) as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 10 stops from 泰山國小, past 泰山公有市場一, then 同興公園, then 時報廣場, then 瑞光路, then 仁寶大樓, then 基湖路口, ending at 捷運劍南路站.[^tdx-bus] 2 confirmed interchanges are recorded in the curated stop-ID join set: Taishan Station and Jiannan Rd..[^tdx-bus] The route runs 2 subroutes under a single operator, 中興巴士.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 泰山-內湖(直達)去、泰山-內湖(直達)返.[^tdx-bus] The committed record carries 2 direction/variant sequences, 20 distinct stops in total: 10 stops (outbound, 泰山-內湖(直達)去); 10 stops (return, 泰山-內湖(直達)返).[^tdx-bus] The published fare is charged over 2 Segment; the published route length is 50 km; weekday service runs from 06:55 to 06:55.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “泰山國小-捷運劍南路站(植福)”; published distance 50 km; service span Weekdays: 去程：0655-0655；返程：1755-1755; Holidays: 去程： - ；返程： -; fare 二段票 / 2 Segment.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
