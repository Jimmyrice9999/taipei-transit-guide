---
title: BL41 / 藍41
summary: Blue-line feeder route BL41 (藍41).
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
    note: Lists 藍41 under 捷運藍線接駁公車.
  - id: ebus-bl41
    title: BL41 route schedule
    titleOriginal: 藍41班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 員福里–捷運永安市場站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍41 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 員福里 - 捷運永安市場站, weekday service 0545–2300, holiday service 0600–2300, one-section fare and 基隆客運土城站 as the service contact.[^ebus-bl41] TDX carries a separate 藍41延和 record (canonical slug `blue-41-3uzeni`) with the same published termini and operator; their relationship is TBC.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍41延和 remain TBC.[^tdx-bus]
