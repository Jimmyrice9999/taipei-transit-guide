---
title: "M1 / 市民小巴1"
summary: "Minibus and community route: M1 (市民小巴1)."
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
  - id: ebus-route-minibus-1-12m6pyo
    title: "M1 route schedule"
    titleOriginal: "市民小巴1班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴1 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 3 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 風櫃嘴”, the current head/last-departure field “[平日] 0610 - 1730 [假日] 0610 - 1730”, fare “一段票”.[^ebus-route-minibus-1-12m6pyo]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its own climb toward 內湖／風櫃嘴, the same pair
confirmed for the separate 小15 corridor family further along
Yangmingshan.[^tdx-bus] TDX records three named direction/variant
records for this service, including a pair distinguished only by
whether the working detours via 溪山 on the outbound or return
leg.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for routing the 溪山 detour on only one leg of the round trip rather than both was found in this search.
