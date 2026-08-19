---
title: BL50 / 藍50
summary: Blue-line feeder route BL50 (藍50).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍50 under 捷運藍線接駁公車.
  - id: ebus-bl50
    title: BL50 route schedule
    titleOriginal: 藍50班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112005000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新湖二路–捷運昆陽站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍50 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 新湖二路 - 捷運昆陽站, weekday service 0630–2000, holiday service 0700–2000, one-section fare and 東南客運內湖站 as the service contact.[^ebus-bl50]

At 12–16 stops each way, the confirmed stop sequence is among the
shortest in this batch: from 東南客運停車場 near 新湖舊宗路口, past 潭美國小/
行善行愛路口/石潭路, ending at 捷運昆陽站 via 南港分局/南港高中.[^tdx-bus] One
confirmed interchange is recorded in the curated stop-ID join set: Kunyang
(BL21), matching the route's own terminus.[^tdx-bus] The route runs a
single subroute under one operator, 東南客運, the same company that runs
藍51.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍50 or its
relationship to 藍51 beyond their shared operator and Kunyang terminus was
found in this search.[^ebus-bl50] A headway-by-day-type figure is likewise
absent from the primary schedule page beyond its own weekday 0630–2000
and holiday 0700–2000 span statement.[^ebus-bl50] No predecessor-route or
renumbering history for 藍50 specifically was located either, nor a stated reason for pairing 新湖二路 with 捷運昆陽站 specifically as this
short route's own termini, one confirmed interchange over a comparably
short distance to sibling 藍51's own five.
