---
title: R27 / 紅27
summary: Red-line feeder route R27 (紅27).
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
    note: Lists 紅27 under 捷運紅線接駁公車.
  - id: ebus-r27
    title: R27 route schedule
    titleOriginal: 紅27班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡江大學–捷運淡水站 corridor, weekday/holiday service spans, one-section fare, headway notes and 指南客運淡大站 contact.
---

## Classification and corridor

The official catalogue lists 紅27 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡江大學 - 捷運淡水站, weekday service 0640–0000, holiday service 0700–0000, one-section fare and 指南客運淡大站 as the service contact. The same page records 20–30 minute holiday headways and a 30-minute service after 23:30.[^ebus-r27]

At just six stops outbound, the confirmed stop sequence is among the
shortest in this batch: 淡江大學、黃昏市場、北淡水、永樂巷口(中山市場)、華南銀行,
ending at 捷運淡水站.[^tdx-bus] One confirmed interchange is recorded in
the curated stop-ID join set: Tamsui (R28), matching the route's own
terminus.[^tdx-bus] The route runs a single subroute under one operator,
指南客運.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅27 was found in
this search, nor a stated reason for its own near-24-hour, 0640–0000
weekday span over such a short corridor. No predecessor-route or
renumbering history for 紅27 was located either, nor a stated reason for
confirming only Tamsui despite the route's own short, single-corridor
length, matching a pattern also seen on several other short shuttle routes
in this batch, including sibling 紅28 elsewhere in the same 淡水地區.[^tdx-bus]
