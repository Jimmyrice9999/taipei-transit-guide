---
title: R25 / 紅25
summary: Red-line feeder route R25 (紅25).
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
    note: Lists 紅25 under 捷運紅線接駁公車.
  - id: ebus-r25
    title: R25 route information
    titleOriginal: 紅25路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0111002500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 南港–捷運北門站 corridor, weekday/holiday service windows, one-section fare and 首都客運經貿站 contact.
---

## Classification and corridor

The official catalogue lists 紅25 under 捷運紅線接駁公車.[^ebus-red] Its full route-information page gives 南港 - 捷運北門站, weekday service 0550–2200, holiday service 0700–2130, one-section fare and 首都客運經貿站 as the service contact.[^ebus-r25]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
