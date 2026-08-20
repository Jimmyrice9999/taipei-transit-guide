---
title: "F921 / F921"
summary: "New Taipei route: F921 (F921)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "New Bus community service (新巴士)"
    source: ntpc-category-newbus
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
  - id: ntpc-category-newbus
    title: "New Taipei bus route catalogue — New Bus community services"
    titleOriginal: "新巴士"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/e4c58656-22d1-4bcf-af33-16ca94532a36
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 新巴士 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 新巴士 dataset files F921 as a New Bus community service (新巴士) identity.[^ntpc-category-newbus]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 13 stops from 萬里區公所, past 萬里北基路口, then 圳頭, then 集會所, then 加投里, then 獅頭山公園(老街溫泉區), then 田心子, ending at 金山醫院.[^tdx-bus] The curated stop-ID join set records no confirmed MRT interchange on this route.[^tdx-bus] The route runs 10 subroutes under a single operator, 萬里區公所.[^tdx-bus] The TDX record files 10 distinct stop-pattern names under this identity: F921去-大坪國小學生專車、F921去-繞圳頭、F921去、F921去-大鵬國小學生專車、F921返-繞大鵬國小、F921返-金山發車繞圳頭、F921返、F921返-獅頭山發車繞圳頭、F921去-繞雙星里活動中心、F921返-繞雙星里活動中心.[^tdx-bus] The committed record carries 10 direction/variant sequences, 28 distinct stops in total: 7 stops (outbound, F921去-大坪國小學生專車); 12 stops (outbound, F921去-繞圳頭); 9 stops (outbound, F921去); 7 stops (outbound, F921去-大鵬國小學生專車); 10 stops (return, F921返-繞大鵬國小); 12 stops (return, F921返-金山發車繞圳頭); 9 stops (return, F921返); 9 stops (return, F921返-獅頭山發車繞圳頭); 13 stops (outbound, F921去-繞雙星里活動中心); 13 stops (return, F921返-繞雙星里活動中心).[^tdx-bus] The published route length is recorded as 99 km, a value shared identically across 175 otherwise unrelated New Taipei routes in this dataset and treated here as an unpopulated placeholder rather than a measured distance for this specific route; weekday service runs from 06:40 to 17:05.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “萬里區公所-金山醫院”; published distance 99 km (a value shared identically across 175 otherwise unrelated New Taipei routes in this dataset, which reads as an unpopulated placeholder rather than a measured distance for this specific route); service span Weekdays: 去程：0640-1705；返程：0930-1745; Holidays: 去程： - ；返程： -; headway fields Weekdays: 學生專車06:40 15:40；時刻路線走法請參照簡圖; Holidays: 請參見F921假日路線.[^ntpc-bus-route-data]

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-newbus][^ntpc-transport]
