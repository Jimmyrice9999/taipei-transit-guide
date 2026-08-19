---
title: R22 / 紅22
summary: Red-line feeder route R22 (紅22).
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
    note: Lists 紅22 under 捷運紅線接駁公車.
  - id: ebus-r22
    title: R22 route schedule
    titleOriginal: 紅22班表
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 八里–捷運關渡站 corridor, service spans, one-section fare, timetable variants and 淡水客運八里站 contact.
---

## Classification and corridor

The official catalogue lists 紅22 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 八里 - 捷運關渡站, weekday service 0530–2330, holiday service 0545–2330, one-section fare and 淡水客運八里站 as the service contact. The page also publishes the current 07:03 return, 17:19 outbound and post-22:00 timetable variants.[^ebus-r22]

The confirmed stop sequence runs from 淡水客運八里站, past 幸福花園社區/龍井
天朗社區/春城台北港, through 八里's 舊城里/八里區農會/十三行博物館, then along
關渡自然保護區's 大崁/西門/水雲山莊, crosses 關渡大橋, ending at 捷運關渡站.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID
join set: Guandu (R25), matching the route's own terminus.[^tdx-bus] TDX
records five named subroutes distinguishing the 台北港 detour and
車機-triggered short workings.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅22 or its
relationship to sibling route 紅13, run by the same operator, 淡水客運, over
a similar 八里–關渡 corridor, was found in this search. A headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own timetable-variant listing.
No predecessor-route or renumbering history for 紅22 was located either,
nor a stated reason for confirming only one interchange along a 44-stop
corridor covering nearly all of 八里.[^tdx-bus]
