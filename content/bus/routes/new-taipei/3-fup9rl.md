---
title: "K3 / 安坑3線"
summary: "New Taipei route: K3 (安坑3線)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Light-rail feeder route (輕軌接駁路線)"
    source: ntpc-category-lrt
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
  - id: ntpc-category-lrt
    title: "New Taipei bus route catalogue — Light-rail feeder routes"
    titleOriginal: "輕軌接駁路線"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/0358b481-a8ce-45ac-a40f-50cd6c895683
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 輕軌接駁路線 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 輕軌接駁路線 dataset files 安坑3線 as a Light-rail feeder route (輕軌接駁路線) identity.[^ntpc-category-lrt]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 16 stops from 伴山別墅(一), past 伴山別墅(二), then 造鎮, then 綠中海一期, then 輕軌台北小城站(達觀國中小), then 台貿八村, ending at 安居公教住宅.[^tdx-bus] 1 confirmed interchange is recorded in the curated stop-ID join set: Jinwen University of Science and Technology.[^tdx-bus] The route runs 2 subroutes under two operators, 大都會客運 and 臺北客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 32 distinct stops in total: 16 stops (outbound); 16 stops (return).[^tdx-bus] The published fare is charged over 1 Segment; the published route length is 13.3 km; weekday service runs from 06:05 to 00:00, with a published peak headway of 1520 minutes and 3040 minutes off-peak; holiday service instead runs from 06:15 to 00:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “綠野香坡-安忠路”; published distance 13.3 km; service span Weekdays: 去程：0605-0000；返程：0605-0000; Holidays: 去程：0615-0000；返程：0615-0000; headway fields Weekdays: weekday peak 1520; weekday off-peak 3040; Holidays: holiday peak 30; holiday off-peak 40; fare 一段票 / 1 Segment.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-lrt][^ntpc-transport]
