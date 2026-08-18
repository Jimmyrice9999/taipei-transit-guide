---
title: O19 / 橘19
summary: Orange-line feeder route O19 (橘19).
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
    note: Lists 橘19 under 捷運橘線接駁公車.
  - id: ebus-o19
    title: O19 route schedule
    titleOriginal: 橘19班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五股–三重 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘19 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 五股 - 三重, weekday and holiday service 0530–2330, one-section fare and 三重客運五股站 as the service contact.[^ebus-o19] TDX carries a separate 橘19副 record (canonical slug `orange-19-153docx`) with the same published termini and operator and a shorter span; their relationship is TBC.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘19副 remain TBC.[^tdx-bus]
