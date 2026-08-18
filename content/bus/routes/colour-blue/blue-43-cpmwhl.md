---
title: BL43 / 藍43
summary: Blue-line feeder route BL43 (藍43).
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
    note: Lists 藍43 under 捷運藍線接駁公車.
  - id: ebus-bl43
    title: BL43 route schedule
    titleOriginal: 藍43班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 三峽–捷運永寧站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍43 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 三峽 - 捷運永寧站, weekday service 0600–2000, holiday service 1730–1930, one-section fare and 臺北客運三峽二站 as the service contact.[^ebus-bl43] TDX carries a separate 藍43延南天母 record (canonical slug `blue-43-1c3c509`) with the same published termini and operator; their relationship is TBC.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍43延南天母 remain TBC.[^tdx-bus]
