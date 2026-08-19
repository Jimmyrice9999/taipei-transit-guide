---
title: "S22 / 小22"
summary: "Minibus and community route: S22 (小22)."
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
  - id: ebus-route-minibus-22
    title: "S22 route schedule"
    titleOriginal: "小22班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151002200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小22 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運北投站 - 泉源路”, the current head/last-departure field “[平日] 0600 - 2300 [假日] 0600 - 2300”, fare “一段票”.[^ebus-route-minibus-22]

The confirmed outbound sequence runs from 大興街口, past 捷運北投站(北
投)/幼華高中/大業中央北路口/北投國小/第一銀行/北投公園, through 新北投, ending
at 新民國中/國軍北投醫院/林泉里/新民路底, with the return working looping
via 上北投/八勝園/郵政訓練所/源之鄉/雅敘園/華僑會館 and 捷運奇岩站.[^tdx-bus]
Three confirmed interchanges are recorded in the curated stop-ID join
set, on three separate named stations: Qiyan (R21), Beitou (R22) and
Xinbeitou (R22A), all three on the same Tamsui-Xinyi Line stretch the
route's own corridor threads.[^tdx-bus] The route runs a single subroute
under one operator, 大南汽車, the same operator running the 小25/小26/
小6/小7/小9 family over overlapping Beitou-area corridors.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 捷運北投站 with 泉源路 specifically as the route's own termini, distinct from the neighbouring routes sharing the same operator and district, was found in this search.
