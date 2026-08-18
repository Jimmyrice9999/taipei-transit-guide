---
title: R25Shuttle / 紅25區
summary: Red-line feeder route R25Shuttle (紅25區).
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
    note: Lists 紅25區 under 捷運紅線接駁公車.
  - id: ebus-r25-shuttle
    title: R25Shuttle route schedule
    titleOriginal: 紅25區班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111002520
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港–捷運南京復興站 corridor, weekday/holiday service spans, one-section fare and 首都客運經貿站 contact.
---

## Classification and corridor

The official catalogue lists 紅25區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 南港 - 捷運南京復興站, weekday service 0940–2110, holiday service 0830–2030, one-section fare and 首都客運經貿站 as the service contact.[^ebus-r25-shuttle]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
