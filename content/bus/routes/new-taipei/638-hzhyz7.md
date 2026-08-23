---
title: "638 / 638"
summary: "New Taipei route: 638 (638)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 638 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 65 stops from 五股站, past 陸光國宅一, then 大窠橋, then 宏泰新村, then 新莊國小, then 捷運台北橋站, then 興安華城, ending at 捷運南京復興站.[^tdx-bus] 11 confirmed interchanges are recorded in the curated stop-ID join set: Taishan Guihe Station, Nanjing Fuxing, Xingtian Temple, Zhongshan Elementary School, Minquan W. Rd., Taipei Bridge, Cailiao, Xianse Temple, Touqianzhuang, Fu Jen University and Danfeng.[^tdx-bus] The route runs 2 subroutes under a single operator, 三重客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 128 distinct stops in total: 65 stops (outbound); 63 stops (return).[^tdx-bus] The published fare is charged over Charge for 2 sections; the published route length is 44.7 km; weekday service runs from 05:15 to 22:05, with a published peak headway of 1215 minutes and 1520 minutes off-peak; holiday service follows the same published span.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “五股-捷運南京復興站”; published distance 44.7 km; service span Weekdays: 去程：0515-2205；返程：0515-2205; Holidays: 去程：0515-2205；返程：0515-2205; headway fields Weekdays: weekday peak 1215; weekday off-peak 1520; Holidays: holiday peak 15; holiday off-peak 20; fare 二段票 / Charge for 2 sections.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 638; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**638 (65 stops):** Wugu Sta -> Luguang Public Housing I -> Luguang Public Housing -> Wufu Community -> Community Activity Center -> Bank SinoPac -> Wugu Service Society -> Wugu Elementary School -> Penglaikeng -> Military Police Academy -> Ming Ri Shi Jie -> Deyinl Elementary School -> Far Eastern Logistic Co -> Dake Bridge -> Mingzhi and Heping Intersection -> Taishan Post Office -> Xiataishanyan -> Taishan Dist Office -> Taishan High School -> Tongrong Village -> Yixue Village -> Wencheng Rd Entrance -> Mingzhi Village -> Mingzhi Elementary School -> Taishanyan -> Mingchi University of Technology -> Hongtai New Village -> Xiapojiao -> MRT Taishan Guihe Station(Mingzhi Rd) -> Danfeng 1 -> MRT Danfeng Station -> Sanyo -> Yingpankou -> MRT Fu Jen University Station -> Institute for the Blind -> Haishan Village -> Xintai Rd Entrance -> MRT Xinzhuang Sta(Xinzhuang Post Office) -> Xinzhuang Elementary School -> Baoyuan Temple -> MRT Touqianzhuang Station -> Touqian -> Ginling Girls' High School -> Zhongxing St Entrance -> MRT Xianse Temple Sta -> Wuguwang Temple -> Cailiao(Chongxin Rd) -> MRT Cailiao Sta -> Zhongshan Art Park -> Datong Rd Entrance -> Tiantai Square -> MRT Taipei Bridge Sta -> Sanchong Police Station (Chongxin Rd) -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> Xinxing Junior High School -> Jusheng village -> Zhongshan Village (Minsheng) -> Zhongyuan St Entrance (Senior Housing) -> MRT Xingtian Temple Sta (Minsheng E Rd) -> Minsheng & Songjiang Intersection -> Hejiang St Intersection -> Nat'I Taipei U(Taipei Campus) -> Xingan Huacheng -> MRT Nanjing Fuxing Station[^tdx-bus]

**638 (63 stops):** Nanjing & Longjiang Intersection -> Changchun Elementary School -> Nat'I Taipei U(Taipei Campus) -> Minsheng & Songjiang Intersection -> MRT Xingtian Temple Sta (Minsheng E Rd) -> Zhongyuan St Entrance (Senior Housing) -> Jusheng village -> Xinxing Junior High School -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station -> Minquan & Dalong Intersection -> Sanchong Police Station (Chongxin Rd) -> MRT Taipei Bridge Sta -> Tiantai Square -> Datong Rd Entrance -> Zhongshan Art park -> MRT Cailiao Sta -> Cailiao(Chongxin Rd) -> Wuguwang Temple -> MRT Xianse Temple Sta -> Zhongxing St Entrance -> Ginling Girls' High School -> Touqian -> MRT Touqianzhuang Station -> Dazhong Temple -> MRT Xinzhuang Sta(Xinzhuang Post Office) -> Xintai Rd Entrance -> Haishan Village -> Institute for the Blind -> MRT Fu Jen University Station -> Yingpankou -> Sanyo -> MRT Danfeng Station -> Danfeng 1 -> MRT Taishan Guihe Station(Mingzhi Rd) -> Xiapojiao -> Hongtai New Village -> Mingchi U of Technology -> Taishanyan -> Mingzhi Elementary School -> Mingzhi Village -> Wencheng Rd Entrance -> Yixue Village -> Tongrong Village -> Taishan Senior High School -> Taishan Dist Office -> Xiataishanyan -> Taishan Post Office -> Mingzhi and Heping Intersection -> Dake Bridge -> Far Eastern Logistic Co -> Deyinl Elementary School -> Ming Ri Shi Jie -> Military Police Academy -> Penglaikeng -> Wugu Elementary School -> Wugu Service Center -> Bank SinoPac -> Activity Center -> Wufu Community -> Luguang Public Housing -> Luguang Public Housing I -> Wugu Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
