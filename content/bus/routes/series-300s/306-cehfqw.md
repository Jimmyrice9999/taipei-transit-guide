---
title: 306區 / 306Shuttle
summary: General-bus shuttle route 306區 (舊莊 - 臺北橋).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0500–2230; holiday 0510–2230"
    source: ebus-306-shuttle
  - label: Headway by day type
    value: "Weekday peak 4–8 min, off-peak 10–15 min, after 2000 15–20 min; holiday 10–20 min"
    source: ebus-306-shuttle
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-306-shuttle
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
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 306區 under 一般公車, filed as its own routeid entry distinct from the plain 306 route.
  - id: ebus-306-shuttle
    title: 306區 route schedule
    titleOriginal: 306區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030620
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 舊莊–臺北橋 corridor, service span, fare and operator contact (大都會客運舊莊站 02-2651-2945).
---

## Classification and corridor

The official catalogue lists 306區 under 一般公車, filed as its own routeid
entry distinct from the plain 306 route.[^ebus-general] Its full schedule
page gives 舊莊 - 臺北橋, weekday service 0500–2230, holiday service
0510–2230, a single-section fare (一段票), and 大都會客運舊莊站 as the service
contact.[^ebus-306-shuttle] Weekday frequency is peak 4–8 minutes,
off-peak 10–15 minutes, and 15–20 minutes after 2000; holiday frequency runs
a consistent 10–20 minutes.[^ebus-306-shuttle]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus] No
route-specific history distinct from the wider 306 family (see 306's page)
was found for the shuttle variant in this search.
