---
title: "953 / 953"
summary: "New Taipei route: 953 (953)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Rapid bus (快速公車)"
    source: ntpc-category-rapid
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
  - id: ntpc-category-rapid
    title: "New Taipei bus route catalogue — Rapid buses"
    titleOriginal: "快速公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/8732f6a7-c226-4ebd-ab0c-fca42b981b5c
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 快速公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 快速公車 dataset files 953 as a Rapid bus (快速公車) identity.[^ntpc-category-rapid]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 49 stops from 金山(南勢), past 金山醫院, then 野柳, then 萬里海水浴場, then 大武崙, then 婦幼福利服務中心, then 復興南路口, ending at 大安健康服務中心.[^tdx-bus] 3 confirmed interchanges are recorded in the curated stop-ID join set: Zhongxiao Xinsheng, Technology Building and Daan Park.[^tdx-bus] The route runs 2 subroutes under two operators, 基隆客運 and 淡水客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 98 distinct stops in total: 49 stops (outbound); 49 stops (return).[^tdx-bus] The published fare is charged over 5 segments; the published route length is 104.7 km; weekday service runs from 06:00 to 19:00; holiday service instead runs from 06:00 to 18:00.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “金山(南勢)-臺大計資中心”; published distance 104.7 km; service span Weekdays: 去程：0600-1900；返程：0600-1900; Holidays: 去程：0600-1800；返程：0600-1800; headway fields Weekdays: 班表:0600 0625 0645 0730 0900 1005 1050 1150 1300 1410 1530 1545 1610 1720 1900; Holidays: 班表:0600 0740 0920 1100 1230 1430 1600 1800; fare 五段票 / 5 segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 953; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**953 (49 stops):** Jinshan(Nanshih) -> Jinshan Hospital -> Zhongzheng Rd -> Jinshan District Office -> Jinshan Post Office -> Jiatou Village -> Dapeng Village -> Dapeng Elementary School -> Dingliao -> Taipower Exhibit Center in Northern Taiwan -> Yeliu -> Gangdong -> Yehliu Geopark -> Dongao -> Guihou Fishing Port -> Shijiao -> Guting -> Green Bay -> Meilun -> Wanli Beach -> Wanli District office -> Wanli Bridge -> Keelung City Line(Jijin 3rd Rd) -> Neiliao -> Wusheng St Entrance -> Lantian Lidi Community -> Shishan -> Dawulun Industry Park -> Sanceng -> Dawulun -> Jinshan Iron Stores -> Qingren Lake Entrance -> Wuling St Entrance -> Zhonglian Warehouse -> Xingliao Village -> Shipilai -> Xinshan Water Purification Plant -> Maijin & Leli 3rd St Intersection -> Womem and Children Welfare Service Center -> Keelung Chang-Gung Memorial Hospital -> Fujing Tainxia Community -> General Headquarters of the Air Force -> Yanping High School -> Xinyi Market -> Jianguo S Rd -> Daan Public Housing -> Longmen Jr High School (Heping) -> Fuxing S Rd Entrance -> Daan Dist Health Center[^tdx-bus]

**953 (49 stops):** NTU Computer and Information Networking Center -> Longmen Jr High School (Xinhai Rd Entrance) -> Heping and Jianguo intersection -> Daan Public Housing -> Xinyi Market -> Yanping High School -> Xinsheng S Rd Entrance -> Nat'l Taipei U of Technology (Zhongxiao) -> Fujing Tainxia Community -> Keelung Chang-Gung Memorial Hospital -> Womem and Children Welfare Service Center -> Maijin & Leli 3rd St Intersection -> Xinshan Water Purification Plant -> Shipilai -> Xingliao Village -> Zhonglian Warehouse -> Wuling St Entrance -> Qingren Lake Entrance -> Jinshan Iron Stores -> Dawulun -> Sanceng -> Dawulun Industry Park -> Shishan -> Lantian Lidi Community -> Wusheng St Entrance -> Neiliao -> Keelung City Line(Jijin 3rd Rd) -> Wanli Bridge -> Wanli District office -> Wanli Beach -> Meilun -> Green Bay -> Guting -> Shijiao -> Guihou Fishing Harbor -> Dongao -> Yehliu Geopark -> Gangdong -> Yeliu -> Taipower Exhibit Center in Northern Taiwan -> Dingliao -> Dapeng Elementary School -> Dapeng Village -> Jiatou Village -> Jinshan Post Office -> Jinshan District Office -> Zhongzheng Rd -> Jinshan Hospital -> Jinshan(Nanshih)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-rapid][^ntpc-transport]
