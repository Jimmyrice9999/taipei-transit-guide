---
title: R3Shuttle / 紅3區
summary: Red-line feeder route R3Shuttle (紅3區).
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
    note: Lists 紅3區 under 捷運紅線接駁公車.
  - id: ebus-r3-shuttle
    title: R3Shuttle route schedule
    titleOriginal: 紅3區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000320
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子站–內湖科技園區 corridor, weekday/holiday service spans, 陽明高中–劍潭 buffer, two-section fare, special-calendar note and 光華巴士洲美站 contact.
---

## Classification and corridor

The official catalogue lists 紅3區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 社子站 - 內湖科技園區, weekday service 0545–2200, holiday service 0800–2000, a 陽明高中–劍潭 fare buffer, two-section fare and 光華巴士洲美站 as the service contact.[^ebus-r3-shuttle] The page says national holidays use the Sunday timetable, Lunar New Year's Eve uses the Saturday timetable, and typhoon closure days use the Sunday timetable.[^ebus-r3-shuttle]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
