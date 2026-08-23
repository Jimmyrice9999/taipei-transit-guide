---
title: "M10 / 市民小巴10"
summary: "Minibus and community route: M10 (市民小巴10)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-10-1c9yflw
    title: "M10 route schedule"
    titleOriginal: "市民小巴10班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153001000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴10 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “麥帥新城 - 三民國中”, the current head/last-departure field “[平日] 0650 - 1740 [假日] 停駛”, fare “一段票”.[^ebus-route-minibus-10-1c9yflw] It currently lists weekday service and suspended holiday service.[^ebus-route-minibus-10-1c9yflw]

The confirmed stop sequence runs from 新湖舊宗路口 in Neihu, past 新湖民善
街口/行善路/潭美國小, through 週美里/新明路/台北企業總部園區, along 成功路二段
past 上灣仔/湖興/國防醫學中心/三總內湖站, ending at 三民國中.[^tdx-bus] The
curated stop-ID join set records zero confirmed interchanges for this
route.[^tdx-bus] The route runs a single subroute under one operator,
首都客運, with weekday-only service and holiday service suspended
entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for M10; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M10 (16 stops):** Xinhu and Jiuzong Intersection -> Xinhu and Minshan Intersection (1) -> Xingshan Rd -> Tanmei Elementary School (Jiuzong) -> Zhoumei Village -> Xinming Rd -> TCBD -> Xinming and Chenggong Intersection -> Shitan Park (Chenggong) -> Chenggong Rd Sec 2(Interchange) -> Shangwanzi -> Huxing -> National Defense Medical Center -> Tri-Service General Hospital -> Neihu Admin Building -> Sanmin Junior High School[^tdx-bus]

**M10 (16 stops):** Sanmin Junior High School -> Neihu Admin Building -> Tri-Service General Hospital -> National Defense Medical Center -> Huxing -> Shangwanzi -> Chenggong Rd Sec 2(Interchange) -> Shitan Park (Chenggong) -> Xinming and Chenggong Intersection -> TCBD -> Xinming Rd -> Zhoumei Village -> Jiuzong Rd Sec (Xingshan) -> Xingshan Rd -> Xinhu and Minshan Intersection (1) -> Xinhu and Jiuzong Intersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the
route's own holiday suspension despite its Neihu corridor's dense
residential and school ridership was found in this search, nor a stated
reason for pairing 麥帥新城 with 三民國中 specifically as the route's own
termini.
