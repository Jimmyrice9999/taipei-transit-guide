---
title: "967Express / 967直"
summary: "New Taipei route: 967Express (967直)."
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

New Taipei City Department of Transportation's full 快速公車 dataset files 967直 as a Rapid bus (快速公車) identity.[^ntpc-category-rapid]
The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]

The confirmed stop sequence runs 36 stops from 體育大學行政教學大樓, past 長庚大學, then 長庚醫院, then 忠孝路口B, then 民權敦化路口, then 市民敦化路口, then 國父紀念館, ending at 市政府(市府).[^tdx-bus] 6 confirmed interchanges are recorded in the curated stop-ID join set: National Taiwan Sport University Station, Chang Gung Memorial Hospital Station, Zhongxiao Dunhua, Taipei City Hall, Zhongshan Junior High School and Songshan Airport.[^tdx-bus] The route runs 2 subroutes under a single operator, 三重客運.[^tdx-bus] The committed record carries 2 direction/variant sequences, 72 distinct stops in total: 36 stops (outbound); 36 stops (return).[^tdx-bus] The published fare is charged over 3 Segment; the published route length is 69.5 km; weekday service runs from 06:15 to 18:00; holiday service instead runs from 07:30 to 19:30.[^ntpc-bus-route-data]

## Current service data

The full New Taipei route-service row publishes endpoints “體育大學行政教學大樓-捷運市政府站”; published distance 69.5 km; service span Weekdays: 去程：0615-1800；返程：0615-1800; Holidays: 去程：0730-1930；返程：0730-1930; fare 三段票 / 3 Segment.[^ntpc-bus-route-data]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 967Express; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**967 Express (36 stops):** National Taiwan Sport University Administrative ed -> Changgung University -> National Sports University Gymnasium -> MRT National Taiwan Sport University -> Wenhua 1st Rd & Leshan 2nd Rd Intersection -> Gaozheng Steel -> Taoyuan Sake Brewery -> Management Center -> Chang-Gung Memorial Hospital -> Medical Building -> Highness Hotel -> Wenhua 2nd Rd Sec 1 Post Office -> Andun Community -> Linkou Mitsui Outlet Park -> Zhongxiao Rd Entrance B -> Farmers Association Branch -> FreewayBureau -> Xingtian Temple -> Minquan Jianguo Road Intersection -> Minquan and Longjiang Intersection -> Minquan and Fuxing Intersection -> Minquan and Dunhua Intersection -> Songshan Airport -> Minsheng & Dunhua Intersection -> Changchun Dunhua Road Intersection -> Taipei Arena -> Bade Dunhua Road Intersection -> Civic Blvd Dunhua Intersection -> Zhongxiao and Dunhua Roads -> Renai Dunhua  Road Intersection -> Renai and Anhe Intersection -> Cathay General Hospital -> Ren-ai Yanji Street Intersection -> Ren-ai Guangfu Road Intersection -> Dr Sun Yat-sen Memorial Hall -> Taipei City Hall[^tdx-bus]

**967 Express (36 stops):** MRT Taipei City Hall Sta -> DrSun Yat-Sen Memorial Hall Station -> Ren-ai Guangfu Road Intersection -> Ren-ai Yanji Street Intersection -> Renai Cathay General Hospital -> Renai & Anhe Intersection -> Anhe-Dunhua Intersection -> MRT Zhongxiao Dunhua Station -> Cive Boulevard Entrance -> Municipal　gymnasiumn -> Taipei Arena -> Chang-Gung Memorial Hospital -> Fujin St Entrance -> Songshan Airport -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> Minquan Jianguo Road Intersection -> Xingtian Temple -> Taiwan Area National Freeway Bureau -> Zhongxiao Rd Entrance B -> Linkou Mitsui Outlet Park -> Andun Community -> Wenhua 2nd Rd Sec 1 Post Office -> Highness Hotel -> Medical Building -> Chang-Gung Memorial Hospital -> MRT Chang-Gung Memorial Hospital Sta -> Management Center -> Taoyuan Sake Brewery -> Gaozheng Steel Enterprise Company -> Wenhua 1st Rd & Leshan 2nd Rd Intersection -> MRT National Taiwan Sport University -> National Sports University Gymnasium -> Changgung University -> National Taiwan Sport University Administrative ed[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^ntpc-category-rapid][^ntpc-transport]
