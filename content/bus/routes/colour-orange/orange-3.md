---
title: O3 / 橘3
summary: Orange-line feeder route O3 (橘3).
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
    note: Lists 橘3 under 捷運橘線接駁公車.
  - id: ebus-o3
    title: O3 route schedule
    titleOriginal: 橘3班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中和–捷運頂溪站 corridor, service span, fare, the 0700-0900 stop-skip note and operator contact.
---

## Classification and corridor

The official catalogue lists 橘3 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 中和 - 捷運頂溪站, weekday service 0600–2300, holiday service 0640–2200, one-section fare and 臺北客運中和站 as the service contact. It records that weekday 07:00–09:00 departures do not stop at 捷運頂溪站.[^ebus-o3]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the stop-skip's creation date and rationale remain TBC.[^tdx-bus]
