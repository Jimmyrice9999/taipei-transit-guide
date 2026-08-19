---
title: "S18 / 小18"
summary: "Minibus and community route: S18 (小18)."
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
  - id: ebus-route-minibus-18-1s5ifb0
    title: "S18 route schedule"
    titleOriginal: "小18班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小18 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 聖人瀑布”, the current head/last-departure field “[平日] 0545 - 2240 [假日] 0550 - 2240”, fare “一段票”.[^ebus-route-minibus-18-1s5ifb0]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its own climb.[^tdx-bus] Past 故宮博物院 the
confirmed corridor diverges from the neighbouring 小1/小1區/小19 family,
running instead via 礁坑/溪山國小/溪山派出所/妙法寺/聖人橋, ending at 聖人
瀑布, distinct from both the 風櫃嘴 and 平菁街 corridors served by those
routes. The route runs a single subroute under one operator, 首都
客車.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 捷運劍潭站 with 聖人瀑布 specifically as the route's own termini, rather than a nearer named stop, was found in this search.
