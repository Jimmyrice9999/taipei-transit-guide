---
title: "Luzhou-shilin / 蘆洲中正路-士林中正路"
summary: "New Taipei route: Luzhou-shilin (蘆洲中正路-士林中正路)."
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

New Taipei City Department of Transportation's full 跳蛙公車 dataset files 蘆洲中正路-士林中正路 as a Jump-frog commuter bus (跳蛙公車) identity.[^ntpc-category-jumpfrog]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 13 stops from 蘆洲總站, past 空中大學(中正路), then 蘆洲國小, then 溪墘, then 集賢路, then 五華國小, then 士林國中, ending at 捷運士林站(中正).[^tdx-bus] The curated stop-ID join set records no confirmed MRT interchange on this route.[^tdx-bus] The route runs 1 subroute under a single operator, 三重客運.[^tdx-bus] The committed record carries 1 direction/variant sequence, 13 distinct stops in total: 13 stops (outbound).[^tdx-bus] The published fare is charged over 1 segment; the published route length is 7.6 km; weekday service runs from 06:50 to 06:50.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “蘆洲總站-捷運士林站”; published distance 7.6 km; service span Weekdays: 去程：0650-0650；返程：0650-0650; Holidays: 去程： - ；返程： -; fare 一段票 / 1 segment.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-jumpfrog][^ntpc-transport]
