---
title: "849 / 849"
summary: "New Taipei route: 849 (849)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 849 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 67 stops from 烏來, past 觀光大橋, then 台電訓練所, then 永興路口, then 捷運新店區公所站(北新), then 萬隆, then 一女中(公園), ending at 捷運台大醫院站.[^tdx-bus] 11 confirmed interchanges are recorded in the curated stop-ID join set: Taipei Main Station, Xindian, Xindian District Office, Dapinglin, Jingmei, Wanlong, Gongguan, Taipower Building, Guting, Chiang Kai-Shek Memorial Hall and NTU Hospital.[^tdx-bus] The route runs 2 subroutes under a single operator, 新店客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 134 distinct stops in total: 67 stops (outbound); 67 stops (return).[^tdx-bus] The published fare is charged over 1 segments; the published route length is 54.9 km; weekday service runs from 05:30 to 21:40, with a published peak headway of 1520 minutes and 1520 minutes off-peak; holiday service follows the same published span.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “烏來-臺北”; published distance 54.9 km; service span Weekdays: 去程：0530-2140；返程：0640-2230; Holidays: 去程：0530-2140；返程：0640-2230; headway fields Weekdays: weekday peak 1520; weekday off-peak 1520; Holidays: holiday peak 1520; holiday off-peak 1520; fare 三段票 / 1 segments.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 849; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**849 (67 stops):** Wulai -> Tourism Bridge -> Yanti -> Julong Village -> Sewage treatment plant -> Chenggong -> JiaJiuliao -> Tampya Park -> Tampya -> Suidaokou -> Chestnut Park -> Baodao Lane Entrance -> Boy scout center -> Guishan Rd -> Taipower Training Center -> Feitsui Reservoir -> Minzhuang Tin -> Qingshuiyan -> Guangxing Rd Entrance -> Gas Station -> Meihua lake -> Finance officer center -> Quchi -> Yinghua Village -> Shenzhangban(Wenshan Farm) -> Jinxing Rd Entrance -> Xincheng Blvd -> Yongxing Rd Entrance -> Zhongxing Keng -> Xiaocu Keng -> Qingtan(Xinwu) -> Qingtan(Beiyi) -> Qingtan 1 -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> MRT Xindian Sta(Beixin Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Huiguo Market -> Zhongzheng Rd -> Zhongxing Rd Sec 2 -> Baoxing Rd Entrance -> Baoqiao Rd Entrance -> Baozhong Rd Entrance -> Zhongxing Rd Sec 3 -> MRT Dapinglin Sta(Minquan Rd) -> MRT Dapinglin Station -> Hujiang High School -> MRT Jingmei -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> MRT Taipower Building Sta -> Roosevelt and Pucheng Intersection -> Roosevelt and Kinmen St Intersection -> MRT Guting Sta (Roosevelt) -> MRT Guting Sta (Hangzhou) -> Chaozhou St Entrance -> MRT CKS Memorial Hall Station(Aiguo) -> Taipei First Girls High School (Gongyuan) -> MRT NTU Hospital Station[^tdx-bus]

**849 (67 stops):** Taipei Main Station(Qingdao) -> NTU Hospital -> MRT CKS Memorial Hall Station(Zhongshan) -> MRT CKS Memorial Hall Station(Bureau of Labor Insurance) -> Roosevelt and Chaozhou Intersection -> MRT Guting Sta (Roosevelt) -> Roosevelt and Kinmen St Intersection -> Roosevelt and Pucheng Intersection -> MRT Taipower Building Sta -> Taipower Building -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> MRT Jingmei -> Hujiang High School -> MRT Dapinglin Sta(Minquan Rd) -> Zhongxing Rd Sec 3 -> Baozhong Rd Entrance -> Baoqiao Rd Entrance -> Baoxing Rd Entrance -> Zhongxing Rd Sec 2 -> Zhongzheng Rd Entrance -> MRT Xindian District Office Station(Beixin) -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Beixin Rd) -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> Qingtan 1 -> Nanqing Temple -> Qingtan(Xinwu) -> Qingtan Yan -> Xiaocu Keng -> Zhongxing Keng -> Yongxing Rd Entrance -> Qiding -> Xincheng Blvd -> Jinxing Rd Entrance -> Shenzhangban(Wenshan Farm) -> Yinghua Village -> Quchi -> Finance officer center -> Meihua lake -> Gas Station -> Guangxing Rd Entrance -> Qingshuiyan -> Minzhuang Tin -> Feitsui Reservoir -> Taipower Training Center -> Guishan Rd -> Boy scout center -> Baodao Lane Entrance -> Suziyuan -> Suidaokou -> Tampya -> Tampya Park -> Jiajiuliao -> Chenggong -> Sewage treatment plant -> Julong Village -> Yanti -> Tourism Bridge -> Wulai[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
