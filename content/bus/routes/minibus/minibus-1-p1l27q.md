---
title: "S1 / 小1"
summary: "Minibus and community route: S1 (小1)."
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
  - id: ebus-route-minibus-1-p1l27q
    title: "S1 route schedule"
    titleOriginal: "小1班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小1 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中華科技大學 - 內溝”, the current head/last-departure field “[平日] 0550 - 1830 [假日] 0550 - 1830”, fare “一段票”.[^ebus-route-minibus-1-p1l27q]

The confirmed stop sequence runs from 中華科技大學 in outer Nangang, past
軍人公墓/凌雲站/胡適公園, through 中研院/中研新村/南港水廠, into 南港展覽館/南港
軟體園區, past a stop literally named 捷運東湖站(南湖高中), ending near 內溝.
[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID
join set: Taipei Nangang Exhibition Center (BL23/BR24) and Donghu (BR22).
[^tdx-bus] The route runs a single subroute under one operator, 東南客運,
the same company that runs sibling 小1區 over an overlapping Nangang-
Neihu corridor.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for
pairing 中華科技大學 with 內溝 specifically as the route's own termini was
found in this search, sharing its own 內溝 end with sibling 小1區's own
opposite terminus at 捷運昆陽站.
