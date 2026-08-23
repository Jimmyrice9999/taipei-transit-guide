---
title: "S28 / 小28"
summary: "Minibus and community route: S28 (小28)."
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
  - id: ebus-route-minibus-28
    title: "S28 route schedule"
    titleOriginal: "小28班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151002800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小28 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運北投站 - 珠海路”, the current head/last-departure field “[平日] 0645 - 1915 [假日] 0645 - 1915”, fare “一段票”.[^ebus-route-minibus-28]

The confirmed stop sequence runs from 捷運北投站(北投), past 中央南路/北投
國小/大業中央北路口/文化區民活動中心/大同街口/復興一路口/進賢路口/長壽路口/
泉源公園/義方國小/48號公園, ending at 慈惠堂.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Beitou (R22),
matching the route's own terminus.[^tdx-bus] The route runs a single
subroute under one operator, 大南汽車, with an identical weekday and
holiday schedule window, unlike several other minibus routes in this
batch that suspend or shorten holiday service.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S28; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S28 (13 stops):** MRT Beitou Sta (Beitou) -> Zhongyang S Rd -> Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Wenhua Activity Center -> Datong St Entrance -> Fuxing 1st Rd Entrance -> Jinxian Rd Entrance -> Changshou Rd Entrance -> Quanyuan Park -> Yifang Elementary School -> 48 Park -> Cihui Temple[^tdx-bus]

**S28 (12 stops):** 48 Park -> Yifang Elementary School -> Quanyuan Park -> Changshou Rd Entrance -> Jinxian Rd Entrance -> Fuxing 1st Rd Entrance -> Datong St Entrance -> Wenhua Activity Center -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> Zhongyang S Rd -> Daxing St Entrance[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 捷運北投站 with 珠海路 specifically as the route's own termini was found in this search, nor a stated reason for confirming only one interchange despite running most of its own corridor within a short walk of the Tamsui-Xinyi Line.
