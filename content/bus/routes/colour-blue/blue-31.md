---
title: BL31 / 藍31
summary: Blue-line feeder route BL31 (藍31).
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
    note: Lists 藍31 under 捷運藍線接駁公車.
  - id: ebus-bl31
    title: BL31 route schedule
    titleOriginal: 藍31班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五福新村–板橋後站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍31 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 五福新村 - 板橋後站, weekday service 0530–2130, holiday service 0600–2100, one-section fare and 臺北客運五福站 as the service contact.[^ebus-bl31]

The confirmed stop sequence runs from 五福新村, past 富貴新村/冷凍廠(懷德)/江子翠/
江翠國小, along 雙十路/大同街口/永安公園/翠華新村/埔墘, into 積穗 past 自來水公司/
松下電子/板橋監理站/環球購物中心, then through 莒光路/德光路/民德路/自強國小, ending
at 板橋後站.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Jiangzicui (BL09), matching a
literal stop at 捷運江子翠站 named on the return working.[^tdx-bus] The route
runs a single subroute under one operator, 臺北客運, with no recorded
holiday variant or short working.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍31 or a
stated reason for pairing 五福新村 with 板橋後站 specifically was found in
this search. A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own weekday/holiday span statement. Why
this route confirms only one MRT interchange despite running the length of
Banqiao's 積穗/莒光路 residential corridor, unlike several other Blue-line
feeders in this batch that confirm three or more, was not found in this
search.
