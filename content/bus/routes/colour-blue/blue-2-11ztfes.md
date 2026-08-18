---
title: BL2 / 藍2
summary: Blue-line feeder route BL2 (藍2).
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
    note: Lists 藍2 under 捷運藍線接駁公車.
  - id: ebus-bl2
    title: BL2 route schedule
    titleOriginal: 藍2班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412000200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新莊–捷運台大醫院站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍2 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 新莊 - 捷運台大醫院站, weekday and holiday service 0530–2300, one-section fare and 首都客運新莊二站 as the service contact.[^ebus-bl2] This is a separate TDX record from 藍海2線先導公車 (excluded from this group; see the research file), which shares only the digit "2" and no other part of its name or number.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
