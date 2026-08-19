---
title: "S39 / 小39"
summary: "Minibus and community route: S39 (小39)."
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
  - id: ebus-route-minibus-39
    title: "S39 route schedule"
    titleOriginal: "小39班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151003900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小39 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “新北投車站 - 硫磺谷”, the current head/last-departure field “[平日] 0900 - 1900 [假日] 0900 - 1900”, fare “一段票”.[^ebus-route-minibus-39]

The confirmed stop sequence runs from 新北投車站, past 溫泉博物館(梅庭)/銀
光巷口(普濟寺)/幽雅路7號/春天酒店/幽雅路35號/北投文物館/不動明王/泉源別墅,
ending at 彌陀寺(硫磺谷)/大同之家.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Xinbeitou (R22A), matching
the route's own terminus.[^tdx-bus] The route runs a single subroute
under one operator, 大南汽車, with a markedly shorter published span,
0900–1900, than most other minibus routes in this batch, several of
which start service before 0600.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for this route's own late 0900 start, well after the neighbouring Beitou-area minibus routes sharing much of the same catchment, was found in this search, nor a stated reason for the short published corridor compared to those neighbours.
