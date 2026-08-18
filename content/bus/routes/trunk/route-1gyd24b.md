---
title: Heping Metro Bus / 和平幹線
summary: Trunk route 和平幹線 (Heping Metro Bus).
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
    note: Lists 和平幹線 under 幹線專車.
  - id: ebus-heping
    title: Heping Metro Bus route schedule
    titleOriginal: 和平幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬芳社區–衡陽路 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 和平幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 萬芳社區 - 衡陽路, weekday and holiday service 0520–2300, one-section fare, weekday peak headways of 4–6 minutes and off-peak headways of 5–10 minutes, and 大都會客運萬芳站 as the service contact. It publishes a two-way transfer discount.[^ebus-heping]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus]
