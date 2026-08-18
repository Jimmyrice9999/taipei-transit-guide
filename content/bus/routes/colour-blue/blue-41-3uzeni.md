---
title: BL41 Yanhe / 藍41延和
summary: Blue-line feeder route BL41 Yanhe (藍41延和).
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
    note: Lists 藍41延和 under 捷運藍線接駁公車.
  - id: ebus-bl41yanhe
    title: BL41 Yanhe route schedule
    titleOriginal: 藍41延和班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004170
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 員福里–捷運永安市場站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍41延和 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 員福里 - 捷運永安市場站, weekday service 0600–2230, holiday service 0635–2220, one-section fare and 基隆客運土城站 as the service contact — the same termini and operator as plain 藍41 (`blue-41-1vvygl7`), with a different published span.[^ebus-bl41yanhe]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍41 remain TBC.[^tdx-bus]
