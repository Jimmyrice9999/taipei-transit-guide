---
title: 5 / 5
summary: General-bus route 5 (中和 - 行天宮).
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
    value: "Weekday 0530–2220; holiday 0540–2220"
    source: ebus-5
  - label: Headway by day type
    value: "Weekday peak 15–20 min, off-peak 20–30 min; holiday 26 departures across the day"
    source: ebus-5
  - label: Fare / transfer
    value: Two-section fare (兩段票)
    source: ebus-5
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length field. Records a single subroute, 5, and confirmed rail-stop joins to MRT stations BR12, O03, O04 and R09 by stop-ID geometry.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 5 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-5
    title: 5 route schedule
    titleOriginal: 5班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中和–行天宮 corridor, service span, headway, fare buffer zone and operator contact.
---

## Classification and corridor

The official catalogue lists 5 under 一般公車.[^ebus-general] Its full
schedule page gives 中和 - 行天宮, weekday service 0530–2220 at peak intervals
of 15–20 minutes and off-peak intervals of 20–30 minutes, holiday service
0540–2220 run as a 26-departure schedule across the day, a two-section fare
(兩段票) with the buffer zone at 中山市場 to 南門, and 大都會客運中和站 as the
service contact.[^ebus-5] The TDX snapshot records a single subroute for
this route.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records, including
confirmed rail-stop joins to stations BR12, O03, O04 and R09; route length
remains TBC.[^tdx-bus] A community wiki (zh.wikiversity) lead describes a
February 2008 shortening that cut the route back from Songshan Airport and
the area east of the 民權復興路口 (Minquan-Fuxing) intersection to
approximately its current extent; this could not be corroborated against a
primary source in this search — the 臺北市公共運輸處's public 公車營運調整 document
archive only extends back to 2024, and no 2008-dated primary announcement
was found — so the claim is left unconfirmed and does not appear above. No
predecessor-route or renumbering claim for route 5 was found in this
search.[^tdx-bus]
