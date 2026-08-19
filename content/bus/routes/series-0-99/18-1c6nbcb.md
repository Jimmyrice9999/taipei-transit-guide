---
title: 18 / 18
summary: General-bus route 18 (萬華 - 捷運麟光站).
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
    value: "[平日] 0525–2300 [假日] 0525–2300"
    source: ebus-18
  - label: Headway by day type
    value: Peak 12–15 min, off-peak 30–40 min
    source: ebus-18
  - label: Fare / transfer
    value: 一段票 (single-section fare)
    source: ebus-18
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute for 18.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 18 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-18
    title: 18 route schedule
    titleOriginal: 18班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬華–捷運麟光站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 18 under 一般公車; it is also cross-listed under
低地板 (low-floor fleet).[^ebus-general] Its schedule page gives 萬華 - 捷運麟光站
as the corridor, with weekday and holiday service both running 0525–2300 on a
single-section fare (一段票), 35 scheduled departures a day.[^ebus-18] Weekday
peak interval is 12–15 minutes, off-peak 30–40 minutes.[^ebus-18] The operator
contact given is 欣欣客運華江站, 02-2308-9487, naming a different depot from
the 萬華 terminus in the route name.[^ebus-18] Route 18 is one of two routes in
this group's four operated by 欣欣客運 (Shin-Shin Bus) rather than 大都會客運
(Metropolitan Bus).[^tdx-bus]

## Research status

The TDX snapshot supplies the stop and geometry records; route length and
full timetable detail stay TBC.[^tdx-bus] A community wiki (zh.wikiversity)
lead states that 18's predecessor was 欣欣客運's own self-operated Route 2,
running 華江大橋 - 六張犁 from its opening day, 1969-08-02; that the route was
rerouted in 1970 to dispatch from 人壽一村 via 和平東路; that on 1977-06-12 it
was brought into the joint-operation (聯營) bus system and renamed 18; and
that it was adjusted again on 2006-05-10 for the opening of the 羅斯福路 bus
lane. The wikiversity page carries no cited primary source for any of these
dates; this could not be corroborated against a primary source in this
search, so none of this appears above.[^tdx-bus] The same lead also names a
2026-07 to 2026-10 stop suspension tied to 師大人行地下道 works, which — if
real — would fall inside this route's current service period; this too is
uncorroborated against a primary announcement in this search and does not
appear above.[^tdx-bus]
