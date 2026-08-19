---
title: 307西藏三民 / 307Xizang Sanmin
summary: General-bus route 307西藏三民, a Xizang/Sanmin Road branch of 307 (板橋 - 撫遠街).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Branch history
    value: Trialled from 12 June 2012, made permanent 2013; Taipei-end routing changed from 西藏路 to 三民路 on 21 February 2021
    source: zhwikipedia-307
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday and holiday 0510–2200"
    source: ebus-307-xizang-sanmin
  - label: Headway by day type
    value: "Approximately 36–37 departures/day each direction, roughly 30 min intervals daytime"
    source: ebus-307-xizang-sanmin
  - label: Fare / transfer
    value: Two-section fare (兩段票), buffer zone 萬大國小–中和國稅局
    source: ebus-307-xizang-sanmin
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records 307西藏三民 (routeId 19108) and plain 307 (routeId 16111) as two separate route records.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 307西藏三民 under 一般公車, filed as its own routeid entry distinct from plain 307 — a street-name branch, not a 區/預 shuttle marker.
  - id: ebus-307-xizang-sanmin
    title: 307西藏三民 route schedule
    titleOriginal: 307西藏三民班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030790
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 板橋–撫遠街 corridor, service span, fare, buffer zone and operator contacts (臺北客運民生站/板橋站; 首都客運民生站/板橋站).
  - id: zhwikipedia-307
    title: Taipei joint-operation bus route 307
    titleOriginal: 台北聯營公車307路線
    publisher: Wikipedia contributors, 維基百科
    url: https://zh.wikipedia.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A307%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Community-compiled route article; not independently verified against a primary PTO announcement in this search. Quoted verbatim on the branch: 2012年6月12日試辦，2013年正式實施。該線調整「部分班次行駛西藏路」並增設雙邊站位。2021年2月21日，經西藏路線的台北市末端改經三民路."
---

## Classification and corridor

The official catalogue lists 307西藏三民 under 一般公車, filed as its own
routeid entry distinct from plain 307 — a street-name branch rather than a
區/預 shuttle marker.[^ebus-general] Its full schedule page gives the same
published termini text as plain 307, 板橋 - 撫遠街, weekday and holiday
service 0510–2200, a two-section fare (兩段票) with a buffer zone between
萬大國小 and 中和國稅局, and both 臺北客運 and 首都客運 as operator contacts.[^ebus-307-xizang-sanmin]
The schedule shows roughly 36–37 departures per direction daily at
approximately 30-minute daytime intervals.[^ebus-307-xizang-sanmin] The
schedule page itself does not state a corridor difference from plain 307 in
words; the stop-level distinction is carried in the TDX stop-sequence data,
not duplicated here.[^tdx-bus]

## History

A community wiki states this branch was trialled from 12 June 2012 and made
permanent in 2013, running select workings via 西藏路 with stops added on
both sides, and that the Taipei-city end of the 西藏路 working was changed to
run via 三民路 from 21 February 2021 — the point at which the two branches
gained a clear geographic distinction: 「2012年6月12日試辦，2013年正式實施。該線調整
「部分班次行駛西藏路」並增設雙邊站位。2021年2月21日，經西藏路線的台北市末端改經三民路」.[^zhwikipedia-307]
This is a secondary source and was not corroborated against a primary PTO
announcement in this search.

## Research status

The TDX snapshot supplies the changing stop and geometry records and
confirms 307西藏三民 and plain 307 are separate route records.[^tdx-bus] Route
length remains TBC, as is this route's own founding history.
