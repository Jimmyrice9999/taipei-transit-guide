---
title: Roosevelt Rd. Metro Bus / 羅斯福路幹線
summary: Trunk route 羅斯福路幹線 (Roosevelt Rd. Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 羅斯福路幹線 under 幹線專車.
  - id: ebus-roosevelt
    title: Roosevelt Rd. Metro Bus route schedule
    titleOriginal: 羅斯福路幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運動物園站–臺北車站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 羅斯福路幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 捷運動物園站 - 臺北車站, weekday and holiday service 0530–0030, a two-section fare and 欣欣客運木柵二站 as the service contact.[^ebus-roosevelt]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
