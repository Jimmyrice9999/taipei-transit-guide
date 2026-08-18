---
title: O19Sub / 橘19副
summary: Orange-line feeder route O19Sub (橘19副).
updated: 2026-08-19
line: O
facts:
  - label: Service class
    value: MRT orange-line feeder
    source: ebus-orange
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
  - id: ebus-orange
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 橘19副 under 捷運橘線接駁公車.
  - id: ebus-o19sub
    title: O19Sub route schedule
    titleOriginal: 橘19副班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001910
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五股–三重 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘19副 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 五股 - 三重, weekday service 0630–1900, holiday service 0800–1900, one-section fare and 三重客運五股站 as the service contact — the same termini and operator as plain 橘19 (`orange-19-vxo2ga`), with a shorter published span.[^ebus-o19sub]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘19 remain TBC.[^tdx-bus]
