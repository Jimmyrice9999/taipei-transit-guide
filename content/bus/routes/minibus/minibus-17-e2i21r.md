---
title: "M17 / 市民小巴17"
summary: "Minibus and community route: M17 (市民小巴17)."
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
  - id: ebus-route-minibus-17-e2i21r
    title: "M17 route schedule"
    titleOriginal: "市民小巴17班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153001700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴17 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “吳興街 - 松山車站”, the current head/last-departure field “[平日] 0630 - 1850 [假日] 停駛”, fare “一段票”.[^ebus-route-minibus-17-e2i21r] It currently lists weekday service and suspended holiday service.[^ebus-route-minibus-17-e2i21r]

The confirmed stop sequence runs from 吳興街站, past 松仁路/吳興國小/信義
國中/松平路口, through 捷運象山站, along 松山商職/信義行政中心/捷運廣慈奉天
宮站, past 中行里/玉成公園/協和祐德高中/五分埔商圈, ending at 松山車站.
[^tdx-bus] Two confirmed interchanges are recorded in the curated
stop-ID join set, on two different rail lines: Songshan (G19) and
Xiangshan (R02), matching the route's own eastern terminus and a stop
partway along its own corridor.[^tdx-bus] The route runs a single
subroute under one operator, 大都會客運, weekdays only with holiday
service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension was found in this search, nor a stated reason for pairing 吳興街 with 松山車站 specifically as the route's own termini.
