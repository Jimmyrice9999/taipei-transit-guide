---
title: 9 / 9
summary: General-bus route 9 (社子國小 - 萬華).
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
    value: "[平日] 0550–2300 [假日] 0550–2300"
    source: ebus-9
  - label: Headway by day type
    value: Peak 12–15 min, off-peak 15–20 min; fixed timetable after 2100
    source: ebus-9
  - label: Fare / transfer
    value: 一段票 (single-section fare)
    source: ebus-9
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute for 9, with no dog-friendly or split-working variant.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 9 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-9
    title: 9 route schedule
    titleOriginal: 9班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子國小–萬華 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 9 under 一般公車; it is also cross-listed under
低地板 (low-floor fleet).[^ebus-general] Its schedule page gives 社子國小 - 萬華
as the corridor, with weekday and holiday service both running 0550–2300 on a
single-section fare (一段票).[^ebus-9] Weekday peak interval is 12–15 minutes,
off-peak 15–20 minutes, and departures after 2100 run to a fixed timetable
rather than a frequency band; the page lists 36 numbered weekday trips.[^ebus-9]
The operator contact given is 大都會客運士林站, 02-2833-5706.[^ebus-9]

## Research status

The TDX snapshot supplies the stop and geometry records; route length and
full timetable detail beyond the departure count stay TBC.[^tdx-bus] A
community wiki (zh.wikiversity) lead states that 9 has run the 社子國小–萬華
corridor unchanged since before Taipei's joint-operation (聯營) bus system
began, that it was originally run by 臺北市公車管理處 before that agency's
reorganisation into 大都會客運, and gives further dated fleet and stop changes
including an 8-bus low-floor delivery on 2014-05-01 and a stop adjustment on
2016-12-17 tied to 忠孝西路 permanent-roadworks near 北門. The wikiversity page
carries no cited primary source for any of these dates; this could not be
corroborated against a primary source in this search, so none of it appears
above.[^tdx-bus]
