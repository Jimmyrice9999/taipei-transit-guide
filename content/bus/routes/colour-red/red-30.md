---
title: R30 / 紅30
summary: Red-line feeder route R30 (紅30).
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
    note: Lists 紅30 under 捷運紅線接駁公車.
  - id: ebus-r30
    title: R30 route schedule
    titleOriginal: 紅30班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003000
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 故宮博物院–捷運劍潭站 corridor, weekday/holiday service spans, one-section fare and 中興巴士故宮站 contact.
---

## Classification and corridor

The official catalogue lists 紅30 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 故宮博物院 - 捷運劍潭站, weekday service 0720–1830, holiday service 0730–1900, one-section fare and 中興巴士故宮站 as the service contact.[^ebus-r30]

The confirmed stop sequence runs from 故宮博物院, past 東吳大學/梅林新村/雙溪
公園/泰北中學, through 士林's 士林官邸/天文科學館/國立科教館, then a loop past
陽明高中/士林監理站/兒童新樂園/士林區行政中心, ending at 捷運劍潭站.[^tdx-bus] One
confirmed interchange is recorded in the curated stop-ID join set: Jiantan
(R15), matching the route's own terminus.[^tdx-bus] The route runs a
single subroute under one operator, 中興巴士.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅30 was found
in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own weekday 0720–1830 and holiday
0730–1900 span statement, nor a stated reason for pairing 故宮博物院 with
捷運劍潭站 specifically as the route's own termini.[^ebus-r30] No predecessor-route or
renumbering history for 紅30 was located either, nor a stated reason for
its own narrow, 11-hour weekday span despite serving a major tourist
destination, unlike several longer-span routes elsewhere in this batch that run past
2200.[^tdx-bus]
