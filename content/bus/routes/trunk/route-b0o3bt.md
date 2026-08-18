---
title: Keelung Rd. Metro Bus / 基隆路幹線
summary: Trunk route 基隆路幹線 (Keelung Rd. Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 基隆路幹線 under 幹線專車.
  - id: ebus-keelung
    title: Keelung Rd. Metro Bus route schedule
    titleOriginal: 基隆路幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大崎腳–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 基隆路幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 大崎腳 - 捷運市政府站, weekday and holiday service 0530–2230, a two-section fare and 新店客運新店站 as the service contact. It publishes a two-way transfer discount.[^ebus-keelung]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus]
