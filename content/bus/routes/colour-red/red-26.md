---
title: R26 / 紅26
summary: Red-line feeder route R26 (紅26).
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
    note: Lists 紅26 under 捷運紅線接駁公車.
  - id: ebus-r26
    title: R26 route schedule
    titleOriginal: 紅26班表
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002600
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 漁人碼頭–捷運淡水站 corridor, service span, one-section fare, 指南客運淡海站 contact and the no-fisherman-wharf short working before 08:00 and after 22:00.
---

## Classification and corridor

The official catalogue lists 紅26 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 漁人碼頭 - 捷運淡水站, weekday and holiday service 0600–0000, one-section fare and 指南客運淡海站 as the service contact. It also records the current working from 淡海 without entering 漁人碼頭 before 08:00 and after 22:00.[^ebus-r26]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
