---
title: "CB12 / 通勤12"
summary: "Special shuttle route: CB12 (通勤12)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Special shuttle / commuter service (通勤／專車)"
    source: ebus-special
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
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
  - id: ebus-route-12-10palml
    title: "CB12 route schedule"
    titleOriginal: "通勤12班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 通勤12 under 通勤公車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中和 - 臺北市政府”, the current head/last-departure field “[平日] 0655 - 0655 [假日] 停駛”, fare “兩段票”.[^ebus-route-12-10palml] It currently lists weekday service and suspended holiday service.[^ebus-route-12-10palml]

The confirmed stop sequence runs from 中和保養廠, past 家美工業區/捷運中
和站(中山路)/連城路口/中和區公所/南華路口/捷運景安站/中和教會/南勢角(景
平路)/捷運景平站, through 景平路景德街口/秀景里/范厝/秀朗路三段70巷/劉厝/
六合社區/成功得和路口/福和橋(成功路)/和平高中, ending at 捷運六張犁站(基
隆路)/三興國小/吳興街口/世貿中心(基隆路)/市政府(市府).[^tdx-bus] Five
confirmed interchanges are recorded in the curated stop-ID join set:
Liuzhangli (BR07), Jingan (O02/Y11), Xiulang Bridge (Y09), Jingping
(Y10) and Zhonghe (Y12), the widest confirmed spread of any route
sharing the 中和-臺北市政府 pairing with the neighbouring 通勤11.[^tdx-bus] The route runs a single subroute under one operator, 大都會
客運, on a two-stage fare and a same-time head/last-departure field
publishing only one trip.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 1 directional or variant stop sequence for CB12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**CB12 (24 stops):** Zhonghe Maintenance Plant -> Jiamei industrial Area -> MRT Zhonghe Sta (Zhongshan Rd) -> Liancheng Rd Entrance -> Zhonghe Dist Office (Jingping Rd) -> Yuantong&Jingping Rd Entrance -> MRT Jingan Sta(Jingping Rd) -> Zhonghe Church -> Nanshijiao(Jingping Rd) -> MRT Jingping Sta -> Jingping Jingde Intersection -> Xiujing Village -> Fancuo -> Xiulang Rd Sec 3 Lane 70 -> Liucuo -> Liuhe Community -> Chenggong Dehe Rd -> Fuhe Bridge(Chonggong Rd) -> Heping Senior High School -> MRT Liuzhangli (Keelung Rd) -> Sanxing Elementary School (Linjiang St Night Market) -> Wuxing St Entrance -> World Trade Center (Keelung Rd) -> Taipei City Hall[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 1 published shape record in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own single published trip, unlike the range of departures shown for the neighbouring 通勤11, was found in this search.
