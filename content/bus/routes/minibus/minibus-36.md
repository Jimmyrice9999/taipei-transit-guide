---
title: "S36 / 小36"
summary: "Minibus and community route: S36 (小36)."
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
  - id: ebus-route-minibus-36
    title: "S36 route schedule"
    titleOriginal: "小36班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151003600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小36 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 5 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運石牌站 - 六窟”, the current head/last-departure field “[平日] 0600 - 2350 [假日] 0600 - 2350”, fare “一段票”.[^ebus-route-minibus-36]

The confirmed stop sequence runs from 捷運石牌站(東華), past 綜合市場/永明
派出所/榮總/榮光新村/永欣里/五福宮(石牌路)/五福宮(行義路)/磺溪/明山宮/永和
里/行義路154巷至402巷, through 惇敘工商(行義)/惇敘工商(泉源)/龍鳳谷/頂北
投/紗帽橋一/梅湖/吳厝一/吳厝/湖底路20號/66號/六窟一, ending at 六窟, with
one working detouring via 天母/農訓協會/天母新村/天母廣場/齊賢華廈 on its
return leg.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Shipai (R19), matching the route's own
terminus.[^tdx-bus] TDX records five named direction/variant records
distinguishing whether a working detours via 中山 or reroutes onto 東昇
路 on either leg.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing this many named detours onto a single route number, rather than splitting them into separately numbered services, was found in this search, nor a stated reason for pairing 捷運石牌站 with 六窟 specifically as the route's own termini.
