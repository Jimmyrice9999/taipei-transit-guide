---
title: R37 / 紅37
summary: Red-line feeder route R37 (紅37).
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
    note: Lists 紅37 under 捷運紅線接駁公車.
  - id: ebus-r37
    title: R37 route schedule
    titleOriginal: 紅37班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411003700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡海新市鎮–捷運淡水站 corridor, weekday/holiday service spans, headway notes, one-section fare, 淡水客運新市站 contact and 淡水商工 detour note.
---

## Classification and corridor

The official catalogue lists 紅37 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡海新市鎮 - 捷運淡水站, weekday and holiday service 0540–2330, one-section fare and 淡水客運新市站 as the service contact. It records weekday peak/off-peak headways of 6–10/12–15 minutes, holiday peak/off-peak headways of 10–30 minutes, and says trips detouring via 淡水商工 do not make that detour on holidays or during university winter and summer vacations.[^ebus-r37]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
