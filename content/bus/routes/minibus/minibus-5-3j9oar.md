---
title: "S5Shuttle / 小5區"
summary: "Minibus and community route: S5Shuttle (小5區)."
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
  - id: ebus-route-minibus-5-3j9oar
    title: "S5Shuttle route schedule"
    titleOriginal: "小5區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000520
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小5區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運昆陽站 - 茶葉製造示範廠”, the current head/last-departure field “[平日] 0600 - 2100 [假日] 0600 - 2100”, fare “一段票”.[^ebus-route-minibus-5-3j9oar]

The confirmed stop sequence runs from 捷運昆陽站, past 南港高中/土地公廟/東
明里/南港路二段178巷口/台肥新村/南港行政中心/南港高工, through 南港/南港展
覽館/誠正國中/南港水廠/圓拱橋/中研新村/中研院, along 舊莊一站/舊莊國小/舊莊/
舊莊二站, ending at 茶葉製造示範場, a shorter run than the separate 小5,
which continues past the same terminus to 光明寺.[^tdx-bus] Two
confirmed interchanges are recorded in the curated stop-ID join set:
Kunyang (BL21) and Taipei Nangang Exhibition Center (BL23/BR24),
matching the route's own starting stretch, the same pair confirmed for
小5 itself.[^tdx-bus] The route runs a single subroute under one
operator, 東南客運, the same operator running 小5 over the longer
corridor.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for publishing this shorter run as a separately numbered shuttle route rather than a subroute of 小5 itself was found in this search.
