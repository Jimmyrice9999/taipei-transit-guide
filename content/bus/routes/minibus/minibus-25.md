---
title: "S25 / 小25"
summary: "Minibus and community route: S25 (小25)."
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
  - id: ebus-route-minibus-25
    title: "S25 route schedule"
    titleOriginal: "小25班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151002500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小25 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 5 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運北投站 - 六窟”, the current head/last-departure field “[平日] 0520 - 2240 [假日] 0520 - 2240”, fare “一段票”.[^ebus-route-minibus-25]

The confirmed stop sequence runs from 大興街口, past 捷運北投站(北投)/幼
華高中/大業中央北路口/北投國小/第一銀行, through 泉都溫泉飯店/北投綠色圖書
館/熱海大飯店/地熱谷/銀光巷口/幽雅路7號/春天酒店/幽雅路35號/北投文物館/大
磺嘴/惇敘工商(泉源)/龍鳳谷/頂北投/紗帽橋一/梅湖/吳厝一(橫嶺古道口)/吳厝/
湖底路20號/湖底路66號/六窟一, ending at 六窟.[^tdx-bus] Three confirmed
interchanges are recorded in the curated stop-ID join set: Qiyan
(R21), Beitou (R22) and Xinbeitou (R22A), all confirmed along the
route's own starting stretch.[^tdx-bus] TDX records five named
direction/variant records for this service, distinguishing workings
that detour via 紗帽馬場 or that reroute onto 東昇路 on either leg.
[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the specific pairing of 紗帽馬場 detours with 東昇路 reroutes across five separate named variants, rather than a single flexible working, was found in this search.
