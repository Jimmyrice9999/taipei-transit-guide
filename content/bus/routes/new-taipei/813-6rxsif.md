---
title: "813 / 813"
summary: "New Taipei route: 813 (813)."
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

New Taipei City Department of Transportation's full 一般公車 dataset files 813 as a General bus (一般公車) identity.[^ntpc-category-general]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 44 stops from 明日世界, past 德音國小, then 捷運泰山站(泰林路), then 頭前國中(中原路), then 新民里, then 重慶國中(國慶路), then 平和里, ending at 變電所.[^tdx-bus] 6 confirmed interchanges are recorded in the curated stop-ID join set: Taishan Station, Xinpu, Touqianzhuang, Banqiao, Xinpu Minsheng and Xingfu.[^tdx-bus] The route runs 2 subroutes under two operators, 光華巴士 and 指南客運.[^tdx-bus] The TDX record files 2 distinct stop-pattern names under this identity: 813明日世界、813變電所.[^tdx-bus] The committed record carries 2 direction/variant sequences, 90 distinct stops in total: 44 stops (outbound, 813明日世界); 46 stops (return, 813變電所).[^tdx-bus] The published fare is charged over Charge for 2 sections; the published route length is 37.6 km; weekday service runs from 05:30 to 22:30, with a published peak headway of 1015 minutes and 1520 minutes off-peak; holiday service follows the same published span.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “五股-中和”; published distance 37.6 km; service span Weekdays: 去程：0530-2230；返程：0530-2230; Holidays: 去程：0530-2230；返程：0530-2230; headway fields Weekdays: weekday peak 1015; weekday off-peak 1520; 20:30後班距30分; fare 二段票 / Charge for 2 sections.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 813; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**813 Ming Ri Shi Jie (44 stops):** Ming Ri Shi Jie -> Deyin Elementary School -> Far East Logistic -> Dake Bridge -> Mingzhi and Heping Intersection -> Taishan Post Office -> Taishan Police station -> Futai Village -> Tailin & Rende Rd Intersection -> MRT Taishan Station(Tailin Rd) -> Taishan MRT Park -> Xinzhuang High School -> Xinzhuang High School(Xinzhuang Culture & Arts Center) -> Zhongping Junior High School -> Zhongyuan Rd -> Zhongyuan Village -> Zhongyuan Rd 1 -> Touqian Junior High School(Zhongyuan Rd) -> MRT Xingfu Sta -> Renyi Village -> Siyuan & FuSing Intersection -> Taipei Hospital -> MRT Touqianzhuang Sta(Siyuan Rd) -> MRT Xinpu Sta -> Chihlee University of Technology -> Zhongshan Junior High School -> Xinmin Village -> Xianmin Blvd Intersection -> New Taipei City Hall(Zhongshan Rd) -> Minquan Rd Entrance -> Jieshou Park(Guanqian E Rd) -> Shijian & Chengdu Intersectuon -> Houpu Elementary school -> Chongqing & Zhongxiao Rd Intersection -> Chongqing Junior High School -> Post Office -> Xinyi Rd -> Yihuafang Factory -> Sibiantou -> Detention Center -> Jincheng Rd Entrance -> Yongfeng Rd Entrance -> Pinghe Village -> Transformer Station[^tdx-bus]

**813 Transformer Station (46 stops):** Transformer Station -> Pinghe Village -> Yongfeng Rd Entrance -> Jincheng Rd Entrance -> Detention Center -> Sibiantou -> Yihua Textile -> Xinyi Rd -> Post Office -> Shoude New Village -> Chongqing Junior High School -> Chongqing & Zhongxiao Rd Intersection -> Houpu Elementary School -> Shijian & Chengdu Intersectuon -> Jieshou Park -> Minquan Rd Entrance -> New Taipei City Hall(Zhongshan Rd) -> Xianmin Blvd Intersection -> Xinmin Village -> Zhongshan Junior High School -> Chihlee University of Technology -> Banqiao Flower Market -> MRT Xinpu Sta -> MRT Touqianzhuang  Sta (Siyuan Rd) -> Taipei Hospital -> Siyuan & Fuxing Intersection -> MRT Xingfu Sta -> Touqian Junior High School(Zhongyuan Rd) -> Zhongyuan Rd 1 -> Zhongyuan Village -> Zhongyuan Rd -> Zhongyuan & Zhongping Intersection -> Zhongping Junior High School -> Xinzhuang High School(Xinzhuang Culture & Arts Center) -> Xinzhuang High School -> Taishan MRT Park -> MRT Taishan Station(Tailin Rd) -> Tailin & Rende Rd Intersection -> Futai Village -> Taishan Precinct -> Taishan Post Office -> Mingzhi and Heping Intersection -> Dake Bridge -> Far Eastern Logistic Co -> Deyin Elementary School -> Ming Ri Shi Jie[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-general][^ntpc-transport]
