---
title: "S17 / 小17"
summary: "Minibus and community route: S17 (小17)."
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
  - id: ebus-route-minibus-17-1f9ifk9
    title: "S17 route schedule"
    titleOriginal: "小17班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小17 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 新安里”, the current head/last-departure field “[平日] 0600 - 2240 [假日] 0600 - 2240”, fare “一段票”.[^ebus-route-minibus-17-1f9ifk9]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its climb through 士林.[^tdx-bus] The
confirmed corridor continues past 陽明山國小 into 新安路一 through 七,
ending at 新安里, distinct from the 菁山/擎天崗-bound corridor shared by
小15, 小15區 and 小15區預. TDX records two named subroutes distinguishing
whether a working detours via 莊頂.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 捷運劍潭站 with 新安里 specifically as the route's own termini was found in this search, nor a stated reason for confirming the same two stations as several unrelated Shilin-area minibus routes despite each running a distinct hillside corridor.
