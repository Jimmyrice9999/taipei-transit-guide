---
title: "S1Shuttle / 小1區"
summary: "Minibus and community route: S1Shuttle (小1區)."
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
  - id: ebus-route-minibus-1-1nj7r2x
    title: "S1Shuttle route schedule"
    titleOriginal: "小1區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000120
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小1區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “內溝 - 捷運昆陽站”, the current head/last-departure field “[平日] 0600 - 2100 [假日] 0600 - 2100”, fare “一段票”.[^ebus-route-minibus-1-1nj7r2x]

The confirmed stop sequence runs from 內溝 in outer Neihu, past 奇頭/南寮/
康湖隧道口, through 東湖's 東湖國中/東湖社區/五分社區, past a stop literally
named 捷運東湖站(南湖高中), into 南港軟體園區/南港/南港高工, ending at 捷運昆
陽站.[^tdx-bus] Two confirmed interchanges are recorded in the curated
stop-ID join set: Kunyang (BL21) and Donghu (BR22).[^tdx-bus] TDX records
two named subroutes, 小1區 and 小1區經康寧, the second detouring via 康寧
天闊站/康寧大學.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for
the 康寧 detour existing as a separate subroute was found in this search,
nor a stated reason for pairing 內溝 with 捷運昆陽站 specifically as the
route's own termini, sharing its own 內溝 end with sibling 小1's own
opposite terminus.
