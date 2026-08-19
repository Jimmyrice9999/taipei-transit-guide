---
title: 26 / 26
summary: General-bus route 26 (社子 - 行天宮).
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
    value: "Weekday 0550-2050; suspended on holidays (例假日停駛)"
    source: ebus-26
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-26
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence and shape fields; the committed bus layer does not publish a route-length, headway-interval or historical-operator field.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 26 under 一般公車.
  - id: ebus-26
    title: 26 route schedule
    titleOriginal: 26班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100002600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子–行天宮 corridor, weekday-only service span, seven weekday departure times and operator contact.
  - id: pto-joint-operation
    title: City bus introduction
    titleOriginal: 市區公車-公車簡介
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://pto.gov.taipei/News_Content.aspx?n=AAEEE8A01971ECFB&s=FBAD7AB84D95E137
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: States the joint-operation (聯營) system began 30 April 1977 with five private operators including 三重市公車（今首都客運）, and that the former city bus administration itself transformed into a private company renamed 大都會汽車客運公司 effective 1 January 2004. Does not mention route 26 specifically.
  - id: wikiversity-26
    title: Taipei joint-operation bus route 26
    titleOriginal: 台北聯營公車26路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/wiki/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A26%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: Community wiki lead giving a 1977 launch date and a 9 July 2002 transfer from the city bus administration to Capital Bus, and a November 2020 frequency cut from 12 to 7 trips, with no cited primary source for any of the three dates; treated as an uncorroborated lead only.
---

## Classification and corridor

The official catalogue lists 26 under 一般公車.[^ebus-general] Its schedule
page gives 社子 - 行天宮 as the current termini, weekday-only service
0550-2050 with holiday service suspended (例假日停駛), a single-section fare
(一段票) over the full route, and 首都客運社子站 as the service contact.[^ebus-26]
The weekday table lists seven departures: 0550, 0730, 0900, 1630, 1800, 1930
and 2050; no interval-based headway figure is published on the page.[^ebus-26]
The operator is Capital Bus Co., Ltd. (首都客運).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length and a headway interval beyond the seven listed departures remain
TBC.[^tdx-bus] A primary Taipei PTO page confirms that the city's
joint-operation bus system began 30 April 1977 with five private operators,
including 三重市公車（今首都客運）, and separately that the former city bus
administration itself was not privatised and renamed 大都會汽車客運公司 until
1 January 2004.[^pto-joint-operation] A Wikiversity lead gives route 26 a
1977 launch date and states the route was released from the still-public
city bus administration to Capital Bus on 9 July 2002 — a date that falls
between the two corroborated primary dates above rather than matching
either of them, and which the wiki page does not itself cite to a primary
source; this search did not find a primary record of that specific 2002
transfer, so it is left unconfirmed and does not appear in the facts or
specs above.[^wikiversity-26]
