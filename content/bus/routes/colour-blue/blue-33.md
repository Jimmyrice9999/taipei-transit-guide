---
title: BL33 / 藍33
summary: Blue-line feeder route BL33 (藍33).
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
    note: Lists 藍33 under 捷運藍線接駁公車.
  - id: ebus-bl33
    title: BL33 route schedule
    titleOriginal: 藍33班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五福新村–新北板橋公車站 corridor, service span, fare, the school-day detour note and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 藍33 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 五福新村 - 新北板橋公車站, weekday-only service 0700–0815 with no holiday service, one-section fare and 臺北客運五福站 as the service contact. It records that the 07:00 departure detours via 光復國小/國中 except during school breaks.[^ebus-bl33]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the detour's creation date and rationale remain TBC.[^tdx-bus]
