---
title: "937 / 937"
summary: "New Taipei route: 937 (937)."
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

New Taipei City Department of Transportation's full 快速公車 dataset files 937 as a Rapid bus (快速公車) identity.[^ntpc-category-rapid]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 33 stops from 人見仁愛社區(民權路), past 頭湖國小, then 幸福市, then 榮耀之星, then 文化三路忠孝路口, then 復興一路, then 蘭州國中, ending at 民族承德路口.[^tdx-bus] 2 confirmed interchanges are recorded in the curated stop-ID join set: Linkou Station and Yuanshan.[^tdx-bus] The route runs 2 subroutes under a single operator, 大都會客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 67 distinct stops in total: 33 stops (outbound); 34 stops (return).[^tdx-bus] The published fare is charged over Charge for 2 sections; the published route length is 53.2 km; weekday service runs from 05:40 to 22:40, with a published peak headway of 0712 minutes and 1520 minutes off-peak; holiday service follows the same published span.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “林口-圓山”; published distance 53.2 km; service span Weekdays: 去程：0540-2240；返程：0540-2240; Holidays: 去程：0540-2240；返程：0540-2240; headway fields Weekdays: weekday peak 0712; weekday off-peak 1520; Holidays: holiday peak 1520; holiday off-peak 1520; fare 二段票 / Charge for 2 sections.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 937; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**937 (33 stops):** Renjianrenai Community -> Touhu Elementary School -> Hunan Village Activity Center -> Zonghufu Community -> Fulin & Minshen Intersection -> Fulin & Songbo Intersection -> Linkou Civil Sports Center(Wunhua 3rd) -> Xingfushi Community -> Wenhua 3rd & Zhongshan Intersection -> Chuncheng Lichi -> Shangpin Community -> Dongtouhu -> Versailles Community -> Rongyaozhixing Community -> Wensan & Xinyi Intersection -> Glory of the fature -> Swiss Garden Community 9 -> Simcity Societies -> RotaryPark(Wunhua 3rd) -> Wenhua 3rd & Zhongxiao Intersection -> FutureTownCommunity -> Administrative Park -> MRT Linkou Sta -> Gongxi -> Military Police Training Center -> Fuxing1stRdIntersection -> Chang-Gung Memorial Hospital -> FreewayBureau -> Taipei School for the Hearing Impaired -> Jiuquan & Chongqing Intersection -> Minzu and Chongqing Intersection -> Lanzhou Junior High School -> Minzu and Chengde Intersection[^tdx-bus]

**937 (34 stops):** MRT Yuanshan Station (Yuanshan Transfer Station) -> Kulun St Entrance -> Lanzhou Junior High School -> Jiuquan & Chongqing Intersection -> Taipei School for the Hearing Impaired -> Freeway Bureau -> Chang-Gung Memorial Hospital -> Fuxing1stRdIntersection -> Wunhua 3rd Rd Entrance -> Military Police Training Center -> Gongxi -> Linkou Bus Station -> Administrative Park -> FutureTownCommunity -> Wenhua 3rd & Zhongxiao Intersection -> RotaryPark(Wunhua 3rd) -> Simcity Societies -> Swiss Garden Community 9 -> Glory of the fature -> Wunhua 3rd & Jixiangi Intersection -> Rongyaozhixing Community -> Versailles Community -> Donghutou -> Zhongshan&Wenyi Intersection -> Chuncheng Lichi -> Wenhua 3rd & Zhongshan Intersection -> Xingfushi Community -> Linkou Civil Sports Center(Wunhua 3rd) -> Fulin & Songbo Intersection -> Fulin & Minshen Intersection -> Zongdufu Community -> Hunan Village Activity Center -> Touhu Elementary School -> Renjianrenai Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-rapid][^ntpc-transport]
