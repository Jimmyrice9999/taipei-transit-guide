---
title: "S30 / 小30"
summary: "Minibus and community route: S30 (小30)."
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
  - id: ebus-route-minibus-30
    title: "S30 route schedule"
    titleOriginal: "小30班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151003000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小30 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “木柵路五段 - 自來水博物館”, the current head/last-departure field “[平日] 0600 - 1655 [假日] 停駛”, fare “一段票”.[^ebus-route-minibus-30] It currently lists weekday service and suspended holiday service.[^ebus-route-minibus-30]

The confirmed stop sequence runs from 富德, past 象頭埔/萬福橋/石壁坑/風動
石/博嘉國小/軍功新村/萬芳社區(和平)/和平東路4段/名門社區/臥龍新村/大我新舍,
through 麟光站, along 臥龍富陽街口/樂業街/黎明社教中心/芳和國中/自來水事業
處/芳蘭路/芳蘭山莊/臺大癌醫/臺灣科技大學/公館/寶藏巖, ending at 自來水博物
館.[^tdx-bus] Two confirmed interchanges are recorded in the curated
stop-ID join set: Muzha (BR02) and Linguang (BR06), matching the
route's own starting stretch.[^tdx-bus] The route runs a single
subroute under one operator, 東南客運, weekdays only with holiday
service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the route's own holiday suspension was found in this search, nor a stated reason for pairing 木柵路五段 with the water-museum terminus specifically, rather than a nearer campus stop.
