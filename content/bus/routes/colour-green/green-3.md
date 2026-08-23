---
title: G3 / 綠3
summary: Green-line feeder route G3 (綠3).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠3 under 捷運綠線接駁公車.
  - id: ebus-g3
    title: G3 route schedule
    titleOriginal: 綠3班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 花園新城–中和 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠3 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 花園新城 - 中和, weekday and holiday service 0600–2200, one-section fare and 新店客運碧潭站 as the service contact.[^ebus-g3]

The confirmed stop sequence runs from 花園新城, a hillside housing estate
above 新店, down through 新店 and 大坪林, then along the same 秀朗橋/景平/景安
corridor as 綠2左, ending at 中和區公所 in 中和.[^tdx-bus] Six confirmed
interchanges lie along the way, including 捷運新店站 (Xindian, G01), 捷運大坪林站
(Dapinglin, G04, also Circular Line Y07) and 捷運景安站 (Jing'an, served by
both the Zhonghe–Xinlu Line as O02 and the Circular Line as Y11) — more
confirmed interchanges than most other routes in this project's colour-green
coverage.[^tdx-bus] Despite that length and interchange count, the fare
stays flat at one section, the same as the much shorter G18 and G11 routes
in this group — this project's coverage of the green-line feeders shows no
consistent relationship between a route's length and its fare
class.[^ebus-g3] Its 新店客運碧潭站 contact is the same dispatch point named on
綠7, 綠10 and 綠12, four routes together covering most of 新店 and the hills
around it under one operator.[^ebus-g3]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
