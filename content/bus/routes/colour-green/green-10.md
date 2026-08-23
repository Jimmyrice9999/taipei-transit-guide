---
title: G10 / 綠10
summary: Green-line feeder route G10 (綠10).
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
    note: Lists 綠10 under 捷運綠線接駁公車.
  - id: ebus-g10
    title: G10 route schedule
    titleOriginal: 綠10班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001000
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 景文科技大學–捷運大坪林站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠10 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 景文科技大學 - 捷運大坪林站, weekday and holiday service 0600–2230, one-section fare, 29 daily departures and 新店客運碧潭站 as the service contact.[^ebus-g10]

A 捷運綠線接駁公車 is a feeder route the catalogue files against the Songshan–Xindian Line specifically, distinct from the general-bus routes elsewhere in this project's coverage; the colour identifies which MRT line the route is built to connect to, not a geographic zone.[^ebus-green]

The confirmed stop sequence runs from 景文科技大學 (Jingwen University of Science and Technology) through Ankeng's 安坑 residential blocks — past 安康派出所 and a run of named apartment communities — to 新店 (Xindian), ending at 捷運大坪林站.[^tdx-bus] Along the way it calls at four confirmed MRT/light-rail interchanges: 捷運新店區公所站 (Xindian District Office, G02), 捷運七張站 (Qizhang, G03), 捷運大坪林站 itself (Dapinglin, G04, also served by the Circular Line as Y07), and 輕軌安康站 (Ankang, K06) on the Ankeng Light Rail.[^tdx-bus] At a flat one-section fare over 29 daily
departures, a rider boarding anywhere on the route pays the same amount
whether they ride one stop or the full length between the university and
大坪林.[^ebus-g10]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
