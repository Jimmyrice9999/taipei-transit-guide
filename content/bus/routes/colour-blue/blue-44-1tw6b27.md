---
title: BL44Ext / 藍44延
summary: Blue-line feeder route BL44Ext (藍44延).
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
    note: Lists 藍44延 under 捷運藍線接駁公車.
  - id: ebus-bl44ext
    title: BL44Ext route schedule
    titleOriginal: 藍44延班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004470
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 樹林–南天母廣場 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 藍44延 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 樹林 - 南天母廣場, weekday-only service 0810–2040 with no holiday service, one-section fare and 臺北客運樹林站 as the service contact — the same 樹林 origin and operator as plain 藍44 (`blue-44-1b76ti2`), with a different destination.[^ebus-bl44ext]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍44 remain TBC.[^tdx-bus]
