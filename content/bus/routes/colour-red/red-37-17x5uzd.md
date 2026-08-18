---
title: R37 Via The Ocean Communty / 紅37行經海洋都心社區
summary: Red-line feeder route R37 Via The Ocean Communty (紅37行經海洋都心社區).
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
    note: Lists 紅37行經海洋都心社區 under 捷運紅線接駁公車.
  - id: ebus-r37-ocean
    title: R37 Via The Ocean Community route and stop information
    titleOriginal: 紅37行經海洋都心社區路線資訊
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0411003790
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 淡海新市鎮–捷運淡水站 corridor, weekday/holiday service windows, one-section fare and 淡水客運新市站 contact.
---

## Classification and corridor

The official catalogue lists 紅37行經海洋都心社區 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 淡海新市鎮 - 捷運淡水站, weekday service 0605–2300, holiday service 0820–2200, one-section fare and 淡水客運新市站 as the service contact.[^ebus-r37-ocean]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
