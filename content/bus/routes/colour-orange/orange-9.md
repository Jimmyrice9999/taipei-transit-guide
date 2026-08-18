---
title: O9 / 橘9
summary: Orange-line feeder route O9 (橘9).
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
    note: Lists 橘9 under 捷運橘線接駁公車.
  - id: ebus-o9
    title: O9 route schedule
    titleOriginal: 橘9班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 錦繡–雙和醫院 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘9 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 錦繡 - 雙和醫院, weekday service 0555–1935, holiday service 0615–1935, one-section fare and 指南客運錦繡站 as the service contact — sharing its 錦繡 origin and operator contact with 橘1.[^ebus-o9]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘1 remain TBC.[^tdx-bus]
