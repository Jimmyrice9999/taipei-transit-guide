---
title: 12 / 12
summary: General-bus route 12 (東園 - 民生社區).
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
    value: "[平日] 0530–2230 [假日] 0530–2230"
    source: ebus-12
  - label: Headway by day type
    value: Weekday peak 12–15 min
    source: ebus-12
  - label: Fare / transfer
    value: 一段票 (single-section fare)
    source: ebus-12
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records four subroutes for 12 — the plain working, a 12狗狗公車 (dog-friendly) working, and outbound/inbound half-route (去程半/返程半) workings.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 12 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-12
    title: 12 route schedule
    titleOriginal: 12班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100001200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 東園–民生社區 corridor, service span, fare, dog-friendly departures and operator contact.
---

## Classification and corridor

The official catalogue lists 12 under 一般公車; it is also cross-listed under
低地板 (low-floor fleet).[^ebus-general] Its schedule page gives 東園 - 民生社區
as the corridor, with weekday and holiday service both running 0530–2230 on a
single-section fare (一段票), 30 scheduled departures a day in each
direction.[^ebus-12] Weekday peak interval is 12–15 minutes.[^ebus-12] Two
weekday departures (0900, 1500) and four holiday departures (0730, 1230,
1630, 1930) are marked as 狗狗友善公車 (dog-friendly bus) workings, consistent
with the TDX snapshot's separate 12狗狗公車 subroute record.[^ebus-12] The
operator contact given is 大都會客運東園站, 02-2303-1862.[^ebus-12]

## Research status

The TDX snapshot supplies the stop and geometry records, and separately
carries outbound/inbound half-route (去程半/返程半) subroutes alongside the
dog-friendly working; route length and full timetable detail beyond the
departure count stay TBC.[^tdx-bus] A community wiki (zh.wikiversity) lead
states that from 2017-07-27 route 12 was adjusted jointly with route 46 so
that the return working no longer calls at 圓環(南京)站, running via 承德路
一段 instead, and attributes this to 大都會客運's own website; a direct fetch
of the operator's route pages in this search returned only a site index with
no route-46/12 detail, so this could not be corroborated against a primary
source and is left unconfirmed and does not appear above.[^tdx-bus] The same
wiki lead also gives a 2022-10-30 trial of three holiday dog-friendly
departures, which is smaller than the four holiday departures the current
schedule page lists; this earlier figure is likewise uncorroborated against a
primary source and is not asserted above.[^ebus-12]
