---
title: Nanjing Metro Bus / 南京幹線
summary: Trunk route 南京幹線 (Nanjing Metro Bus).
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
    note: Lists 南京幹線 under 幹線專車.
  - id: ebus-nanjing
    title: Nanjing Metro Bus route schedule
    titleOriginal: 南京幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港高工–圓環 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 南京幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 南港高工 - 圓環, weekday service 0530–2300, holiday service 0550–2300, one-section fare and 首都客運經貿站 as the service contact. It publishes a two-way transfer discount.[^ebus-nanjing]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus]
