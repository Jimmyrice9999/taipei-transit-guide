---
title: R33 / 紅33
summary: Red-line feeder route R33 (紅33).
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
    note: Lists 紅33 under 捷運紅線接駁公車.
  - id: ebus-r33
    title: R33 route and stop information
    titleOriginal: 紅33路線資訊
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111003300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 葫蘆里–聯合醫院中興院區(西寧) corridor, weekday/holiday timetable variants, one-section fare and 首都客運士林站 contact.
---

## Classification and corridor

The official catalogue lists 紅33 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 葫蘆里 - 聯合醫院中興院區(西寧), weekday and holiday service 0900–1900, one-section fare and 首都客運士林站 as the service contact. The page lists weekday departures at 0900, 1100, 1300, 1500, 1700 and 1900, and holiday departures at 0900, 1300, 1500, 1700 and 1900.[^ebus-r33]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
