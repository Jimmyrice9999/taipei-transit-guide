---
title: G7 / 綠7
summary: Green-line feeder route G7 (綠7).
updated: 2026-08-18
line: G
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
    note: Lists 綠7 under 捷運綠線接駁公車.
  - id: ebus-g7
    title: G7 route schedule
    titleOriginal: 綠7班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 黎明清境–捷運大坪林站 corridor, service span, fare, headway and two operator contacts.
---

## Classification and corridor

The official catalogue lists 綠7 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 黎明清境 - 捷運大坪林站, weekday and holiday service 0600–2230, one-section fare, peak headways of 15–20 minutes, off-peak headways of 20–30 minutes, and two service contacts, 新店客運碧潭站 and 新店客運錦繡站.[^ebus-g7]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
