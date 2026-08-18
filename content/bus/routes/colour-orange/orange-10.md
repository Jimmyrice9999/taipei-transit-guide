---
title: O10 / 橘10
summary: Orange-line feeder route O10 (橘10).
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
    note: Lists 橘10 under 捷運橘線接駁公車.
  - id: ebus-o10
    title: O10 route schedule
    titleOriginal: 橘10班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 泰山–蘆洲 corridor, six weekday departures and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 橘10 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 泰山 - 蘆洲, weekday-only service 0600–1820 with six departures (0600, 0700, 0810, 1540, 1650, 1820), no holiday service, one-section fare and 指南客運泰山站 as the service contact.[^ebus-o10]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
