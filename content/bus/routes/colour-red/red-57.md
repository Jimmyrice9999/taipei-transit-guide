---
title: R57 / 紅57
summary: Red-line feeder route R57 (紅57).
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
    note: Lists 紅57 under 捷運紅線接駁公車.
  - id: ebus-r57
    title: R57 route schedule
    titleOriginal: 紅57班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111005700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運行天宮站–捷運科技大樓站 corridor, weekday service, holiday suspension, one-section fare and the three operator contacts.
---

## Classification and corridor

The official catalogue lists 紅57 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 捷運行天宮站 - 捷運科技大樓站, weekday service 0630–2100, no holiday service, one-section fare and contacts for 首都客運社子站, 首都客運士林站 and 臺北客運士林站. The page repeats that holidays are suspended.[^ebus-r57]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
