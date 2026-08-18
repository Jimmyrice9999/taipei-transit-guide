---
title: O21 / 橘21
summary: Orange-line feeder route O21 (橘21).
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
    note: Lists 橘21 under 捷運橘線接駁公車.
  - id: ebus-o21
    title: O21 route schedule
    titleOriginal: 橘21班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 龍壽里–新北產業園區 corridor, service span, fare, departure counts and operator contact.
---

## Classification and corridor

The official catalogue lists 橘21 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 龍壽里 - 新北產業園區, weekday and holiday service 0530–2330, one-section fare and 三重客運迴龍站 as the service contact, with 32 weekday departures and 20 holiday departures at reduced mid-day frequency.[^ebus-o21]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
