---
title: "M2 / 市民小巴2"
summary: "Minibus and community route: M2 (市民小巴2)."
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
  - id: ebus-route-minibus-2-yb2u6a
    title: "M2 route schedule"
    titleOriginal: "市民小巴2班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴2 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運北投站 - 溫泉路”, the current head/last-departure field “[平日] 0610 - 2105 [假日] 0610 - 2105”, fare “一段票”.[^ebus-route-minibus-2-yb2u6a]

The confirmed outbound sequence runs from 捷運北投站(北投), past 北投分
局/北投市場/北投國中/漾館時尚旅館/溫泉奇岩路口/熱海大飯店/普濟寺/銀光巷口/
幽雅路口/法藏寺/中心街口/公民會館(北投社大), ending at 溫泉博物館, with the
return working much shorter, rejoining via 北投公園/第一銀行/北投分局 back
to 捷運北投站(育仁).[^tdx-bus] Two confirmed interchanges are recorded in
the curated stop-ID join set: Beitou (R22) and Xinbeitou (R22A), both
matching the route's own starting stretch.[^tdx-bus] The route runs a
single subroute under one operator, 大南汽車.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the outbound and return workings differing so sharply in stop count was found in this search, nor a stated reason for pairing 捷運北投站 with 溫泉路 specifically as the route's own termini, rather than a nearer named stop.
