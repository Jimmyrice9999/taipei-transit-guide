---
title: 38 / 38
summary: General-bus route 38 (環南市場 - 大安國宅).
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
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. A separate TDX record, 38區 (38Shuttle, route-id 10863), is a distinct normalized route from this one, not a subroute of it.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 38 under 一般公車.
  - id: ebus-38
    title: 38 route schedule
    titleOriginal: 38班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100003800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 環南市場–大安國宅 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 38 under 一般公車.[^ebus-general] Its full
schedule page gives 環南市場 - 大安國宅, weekday service 0540–2100, holiday
service 0550–1900, a one-section fare (一段票), and 大都會客運東園站 as the
service contact.[^ebus-38] The page records 34 weekday departures and 13
holiday departures.[^ebus-38] The TDX snapshot carries a separately numbered
38區 (38Shuttle) route as its own normalized record rather than as a subroute
of 38.[^tdx-bus]

The confirmed stop sequence runs from 環南市場 in Wanhua, past a stop
literally named 捷運龍山寺站, then through Zhongzheng past 捷運小南門站 and
捷運東門站, ending at 大安國宅 near a stop literally named 捷運大安森林公園
站.[^tdx-bus] None of these four literally-named MRT stops is in the
curated stop-ID join set as a confirmed interchange for this route.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length and timetable detail beyond the departure count remain TBC.[^tdx-bus]
A community wiki (zh.wikiversity) lead gives a sparser history for 38 than
for the other 30s-series routes searched alongside it: a series of
service-frequency cuts from 2006 onward, a shortening and a fare-transfer
arrangement with route 22 tied to the November 2013 opening of the MRT Xinyi
line's southern section, and a 2021 increase in weekday departures. This
could not be corroborated against a primary 臺北市政府交通局 or 公共運輸處
announcement in this search, so it is left unconfirmed and does not appear
above.[^tdx-bus]
