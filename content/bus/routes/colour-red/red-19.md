---
title: R19 / 紅19
summary: Red-line feeder route R19 (紅19).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅19 under 捷運紅線接駁公車.
  - id: ebus-r19
    title: R19 route schedule
    titleOriginal: 紅19班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001900
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 天母–捷運石牌站 corridor, service span, one-section fare, 光華巴士天東站 contact and the current school-day return stop variant.
---

## Classification and corridor

The official catalogue lists 紅19 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 天母 - 捷運石牌站, weekday and holiday service 0630–2315, one-section fare and 光華巴士天東站 as the service contact. It also records a weekday 0700 return trip serving 天母國中 except during school holidays and non-school days.[^ebus-r19]

The confirmed stop sequence runs from 天母, past 農訓協會/天母新村/天母廣場/齊
福華廈, through 榮總's 齊賢華廈/榮總一, ending at 捷運石牌站.[^tdx-bus] One
confirmed interchange is recorded in the curated stop-ID join set: Shipai
(R19), matching the route's own terminus.[^tdx-bus] TDX records two named
subroutes, matching the schedule page's own school-day 天母國中 return
variant.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅19 was found in this search, nor a stated reason for
the school-return variant serving only one direction. A headway-by-day-
type figure is likewise absent from the primary schedule page beyond its
own weekday and holiday span statement. No predecessor-route or
renumbering history for 紅19 was located either, nor a stated reason for
pairing 天母 with 捷運石牌站 specifically as the route's own termini.[^tdx-bus]
