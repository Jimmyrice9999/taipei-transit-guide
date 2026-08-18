---
title: O18 / 橘18
summary: Orange-line feeder route O18 (橘18).
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
    note: Lists 橘18 under 捷運橘線接駁公車.
  - id: ebus-o18
    title: O18 route schedule
    titleOriginal: 橘18班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–五華街 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘18 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 蘆洲 - 五華街, weekday service 0600–2200, holiday service 0600–2100, one-section fare and 大都會客運蘆洲站 as the service contact.[^ebus-o18] TDX carries a separate 橘18福隆路 record (canonical slug `orange-18-1p8cb7v`) with the same published termini and operator; their relationship is TBC.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘18福隆路 remain TBC.[^tdx-bus]
