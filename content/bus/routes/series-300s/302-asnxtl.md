---
title: 302區 / 302Shuttle
summary: General-bus shuttle route 302區 (關渡宮 - 兒童新樂園).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Service start
    value: 15 June 2024 (113年6月15日)
    source: ebus-302-shuttle
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0610–1710; holiday 0600–1700"
    source: ebus-302-shuttle
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-302-shuttle
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
    note: Lists 302區 under 一般公車, as its own routeid entry distinct from the plain 302 route.
  - id: ebus-302-shuttle
    title: 302區 route schedule
    titleOriginal: 302區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030220
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official schedule page listing the current 關渡宮–兒童新樂園 corridor, service span, fare and operator contact. States verbatim: 本路線自113年6月15日起實施."
---

## Classification and corridor

The official catalogue lists 302區 under 一般公車, filed as its own routeid
entry rather than a sub-listing of plain 302 — confirming the TDX group's
treatment of the shuttle variant as a separate route record.[^ebus-general]
Its full schedule page gives 關渡宮 - 兒童新樂園, weekday service 0610–1710,
holiday service 0600–1700, a single-section fare (一段票), and 大南汽車關渡站
as the service contact.[^ebus-302-shuttle] The page states the route
commenced 15 June 2024: 「本路線自113年6月15日起實施」.[^ebus-302-shuttle] Four
holiday departures (0700, 0900, 1200, 1700) are marked as dog-friendly
workings.[^ebus-302-shuttle]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length and headway detail remain TBC.[^tdx-bus] The service-start date above comes directly from the
operator's own schedule page, so no further secondary corroboration was
sought.
