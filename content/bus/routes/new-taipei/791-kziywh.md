---
title: "791 / 791"
summary: "New Taipei route: 791 (791)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 791 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 80 stops from 國家新城, past 天驕社區, then 信五路口, then 漁貨直銷中心(碧砂漁港), then 海濱路三巷, then 金沙灣, then 龍門營區, ending at 福隆.[^tdx-bus] The curated stop-ID join set records no confirmed MRT interchange on this route.[^tdx-bus] The route runs 2 subroutes under a single operator, 基隆客運.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 791國家新城、791福隆.[^tdx-bus] The committed record carries 2 direction/variant sequences, 157 distinct stops in total: 80 stops (outbound, 791國家新城); 77 stops (return, 791福隆).[^tdx-bus] The published fare is charged over 5 segments; the published route length is 86.4 km; weekday service runs from 04:30 to 21:20; holiday service instead runs from 05:00 to 21:20.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “基隆-福隆”; published distance 86.4 km; service span Weekdays: 去程：0430-2120；返程：0550-2250; Holidays: 去程：0500-2120；返程：0630-2250; fare 五段票 / 5 segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 791; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**791 National Park (80 stops):** National Park -> Tianjiao Community -> Maijin & Leli 3rd St Intersection -> Womem and Children Welfare Service Center -> Keelung Chang-Gung Memorial Hospital -> Anle DistAdministration Building -> Telecommunication Repair Center -> Ziqiang Tunnel -> Lane 81 Sec 1 Anle Rd Entrance -> Chenggong Market -> Zhongsi Rd -> Keelung Transit Station -> Chenghung Temple -> Zhong 1st & Xiao 1st Intersection -> Keelung City Hall -> Temporary Stop(K Hotel) -> Xin 5th Rd Entrance -> Employment Center -> Beiwu New Village -> Veterans Service Center -> Zhengrong St Entrance -> Civil Service Housing -> Marine Affairs Field Office -> Zhongbin Village -> The Second Credit Cooperative of Keelung Branch -> Zhongzheng Rd Zhengbin Rd Intersection -> National Taiwan Ocean University(Zhongzhang Rd Entrance) -> National Taiwan Ocean University(Xiangfeng Entrance) -> National Taiwan Ocean University(Binhai School Entrance) -> National Taiwan Ocean University(Gymnasium) -> Beining Rd(988 Restaurant) -> Lantougou -> Taiwan Tourist Seafood Market (Bisha Fish Harbor) -> Yibao New Village -> Linglinxiang -> Badouzi -> National Museum of Marine Science & Technology(Bishueixiang) -> Wanghaixiang -> Badouzi Rail Sta -> Rongxing -> Jianji -> Jianji Coal Mine -> Shen'ao Power Plant -> Ruibin -> Bangbang -> Old Fishmens’Association -> Haibin -> Ln 3, Haibin Rd -> Syuanming Temple -> Yin Yang Sea -> Chuanwu -> Taijin Company -> Nanya Tourism Service Center(Nanxin Temple) -> Bitou -> Bitoujiao -> Longdong Bay Ocean Park -> Longdong -> Longdonggang -> Fozu Temple -> Longdong Ocean Park -> Beishikengkou -> Hemei No1 Bridge -> Hemei -> Jinsha Bay -> Chuanliwu -> Huoyanshan -> Dashusia -> Jingbeiban -> Aodi Fish Harbor -> Aodi -> Mazu Temple -> Shiding Bridge -> Paotai Mountain -> Yanliao -> Yanhai St -> Zhaohuei Temple -> Longmen -> Fulong Gas Station -> Longmen Area -> Fulong[^tdx-bus]

**791 Fulong (77 stops):** Fulong -> Longmen Area -> Longmen -> Zhaohuei Temple -> Yanhai St -> Yanliao -> Paotai Mountain -> Shiding Bridge -> Mazu Temple -> Aodi -> Aodi Fish Harbor -> Jingbeiban -> Dashusia -> Huoyanshan -> Chuanliwu -> Jinsha Bay -> Hemei -> Hemei No1 Bridge -> Beishikengkou -> Longdong Ocean Park -> Fozu Temple -> Longdonggang -> Longdong -> Longdong Bay Ocean Park -> Bitoujiao -> Bitou -> Nanya Tourism Service Center(Nanxin Temple) -> Taijin Company -> Chuanwu -> Yin Yang Sea -> Diyibengpu -> Ln 3, Haibin Rd -> Haibin -> Old Fishmens’Association -> Bangbang -> Ruibin -> Shen'ao Power Plant -> Jianji Coal Mine -> Jianji -> Rongxing -> Badouzi Rail Sta -> Wanghaixiang -> National Museum of Marine Science & Technology(Bishueixiang) -> Badouzi -> Linglinxiang -> Yibao New Village -> Taiwan Tourist Seafood Market (Bisha Fish Harbor) -> Lantougou -> Beining Rd(988 Restaurant) -> National Taiwan Ocean University(Gymnasium) -> National Taiwan Ocean University(Binhai School Entrance) -> National Taiwan Ocean University(Xiangfeng Entrance) -> National Taiwan Ocean University(Zhongzhang Rd Entrance) -> Zhongzheng Rd Zhengbin Rd Intersection -> The Second Credit Cooperative of Keelung Branch -> Zhongbin Village -> Marine Affairs Field Office -> Civil Service Housing -> Anlan Bridge -> Zhongzheng Dist Administration Building -> Beiwu New Village -> Employment Center -> Xin 5th Rd Entrance -> Keelung City Hall -> Keelung Transit Station -> Chenghung Temple -> Zhong 4th Rd -> Guanghua Public Housing -> Lane 81 Sec 1 Anle Rd Entrance -> Ziqiang Tunnel -> Telecommunication Repair Center -> Anle DistAdministration Building -> Keelung Chang-Gung Memorial Hospital -> Womem and Children Welfare Service Center -> Maijin & Leli 3rd St Intersection -> Longtengdadi Community -> National Park[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
