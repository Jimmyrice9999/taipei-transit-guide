---
title: "S14 / 小14"
summary: "Minibus and community route: S14 (小14)."
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
  - id: ebus-route-minibus-14
    title: "S14 route schedule"
    titleOriginal: "小14班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小14 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 照明寺”, the current head/last-departure field “[平日] 0620 - 1540 [假日] 0620 - 1540”, fare “一段票”.[^ebus-route-minibus-14]

The confirmed stop sequence runs from 致遠新村, past 稻香圖書館/復興崗/文化
國小, through 北投's 大業中央北路口/北投國小/北投市場, along 福安宮/石門/清江
國小, ending at 照明寺 near 奇岩新村/公館華廈.[^tdx-bus] The curated
stop-ID join set records zero confirmed interchanges for this route.[^tdx-bus] The route runs a single subroute under one operator, 大南汽車.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S14; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S14 (13 stops):** Zhiyuan New Village -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> Beitou Market (Huanggang) -> Fuan Temple -> Shimen -> Qingjiang Elementary School -> Qiyan New Village -> Gongguan Mansion -> Zhaoming Temple[^tdx-bus]

**S14 (13 stops):** Zhaoming Temple -> Gongguan Huaxia -> Qiyan New Village -> Qingjiang Elementary School -> Shimen -> Fuan Temple -> Beitou Market (Gongguan) -> Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Zhiyuan New Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 致遠新村 with 照明寺 specifically as the route's own termini was found in this search, nor a reason for the route confirming zero curated MRT interchanges despite running entirely within a district, 北投, that several other minibus routes in this batch confirm multiple stations against. Whether that absence reflects the corridor's own distance from the nearest station or simply a gap in the curated join set is not settled by the data pulled for this page.
