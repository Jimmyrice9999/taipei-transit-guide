---
title: "Lan Hai2 / 藍海2線先導公車"
summary: "New Taipei route: Lan Hai2 (藍海2線先導公車)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "MRT pioneer bus (捷運先導公車)"
    source: ntpc-category-pioneer
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
  - id: ntpc-category-pioneer
    title: "New Taipei bus route catalogue — MRT pioneer buses"
    titleOriginal: "捷運先導公車"
    publisher: "New Taipei City Department of Transportation, 新北市政府交通局"
    url: https://data.ntpc.gov.tw/datasets/99fa69ea-24bf-4580-877a-998eb2cc42c2
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official 捷運先導公車 dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history."
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

New Taipei City Department of Transportation's full 捷運先導公車 dataset files 藍海2線先導公車 as a MRT pioneer bus (捷運先導公車) identity.[^ntpc-category-pioneer]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 29 stops from 新市站, past 勤家捷奏社區, then 輕軌濱海義山站, then 果嶺大道, then 獸醫研究所, then 華南銀行, ending at 捷運淡水站.[^tdx-bus] 3 confirmed interchanges are recorded in the curated stop-ID join set: Tamsui, Binhai Yishan and Binhai Shalun.[^tdx-bus] The route runs 2 subroutes under a single operator, 淡水客運.[^tdx-bus] The committed record carries 2 direction/variant sequences: 29 stops (outbound); 27 stops (return).[^tdx-bus] The published fare is charged over 1 segment; the published route length is 15.8 km; weekday service runs from 07:52 to 17:50; holiday service follows the same published span.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “淡海新市鎮-捷運淡水站”; published distance 15.8 km; service span Weekdays: 去程：0752-1750；返程：0752-1750; Holidays: 去程：0752-1750；返程：0752-1750; fare 一段票 / 1 segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Lan Hai2; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BS2 (29 stops):** Xinshi Station -> Qinjiajiezou  Community -> Taizi Temple -> The Ocean Community -> Ocean Square -> No3 Ocean City -> Yishan & Xinshi 2nd Rd Intersection -> Sec1,Yishan Rd -> LRT Binhai & YI SHAN Intersection Sta -> Kaide Temple -> LRT Binhai Shalun Sta -> Shalun Rd Sec 1 -> Shalun Rd Sec 1 1 -> Tiansheng Community -> Green Avenue -> Dahe Wenming -> Tiansheng Elementary School -> Danjiang New Residentail Quarter -> Shijieguan -> Youchekou -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> VeterInary Research Institute -> Fort Santo Domingo (Aletheia University) -> Little White House (Danshui Precinct) -> Tamsui Liberry -> Chongjian St Intersection -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Station[^tdx-bus]

**BS2 (27 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> JhongJian St Entrance -> Tamsui Liberry -> Little White House (Danshui Precinct) -> Fort Santo Domingo (Aletheia U) -> VeterInary Research Institute -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> YouCheKou -> Tamkang New Village -> TianSheng Elementary School -> Dahewenming -> Green Avenue -> Tiansheng Community -> Shalun Rd Sec 1 1 -> Shalun Rd Sec 1 -> LRT Binhai Shalun Sta -> Kaide Temple -> LRT Binhai & YI SHAN Intersection Sta -> Sec1,Yishan Rd -> Yishan & Xinshi 2nd Rd Intersection -> No3 Ocean City -> Ocean Square -> The Ocean Community -> Fengxiang Dist -> Gongersan Park -> Xinshi Station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-pioneer][^ntpc-transport]
