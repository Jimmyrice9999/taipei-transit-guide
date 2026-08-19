---
title: Keelung Rd. Metro Bus / 基隆路幹線
summary: Trunk route 基隆路幹線 (Keelung Rd. Metro Bus).
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
    note: Lists 基隆路幹線 under 幹線專車.
  - id: ebus-keelung
    title: Keelung Rd. Metro Bus route schedule
    titleOriginal: 基隆路幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大崎腳–捷運市政府站 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 基隆路幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 基隆路幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 大崎腳 - 捷運市政府站, weekday and holiday service 0530–2230, a two-section fare and 新店客運新店站 as the service contact. It publishes a two-way transfer discount.[^ebus-keelung]

A community wiki lists 基隆路幹線 as the renamed form of a former numbered
route, 650, one of eight conversions this project's joint-operation network
page records.[^zh-trunk-bus] Unlike 北環幹線's own 620 predecessor, this
route's eBus routeid (0161001500) carries no visible trace of "650".

The confirmed stop sequence shares its 大崎腳-to-大坪林 leg almost exactly
with 松江新生幹線, then diverges south along 基隆路 through Da'an into Xinyi,
ending at 捷運市政府站.[^tdx-bus] Eight confirmed interchanges are named
directly in the stop sequence: 捷運新店站 (Xindian, G01), 捷運新店區公所站
(Xindian District Office, G02), 捷運七張站 (Qizhang, G03), 捷運大坪林站
(served by both the Songshan–Xindian Line as G04 and the Circular Line as
Y07), 捷運景美站 (Jingmei, G05), 捷運萬隆站 (Wanlong, G06), 捷運六張犁站
(Liuzhangli, BR07) and 捷運市政府站 (Taipei City Hall, BL18).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus] The 650 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 新店客運 announcement in this search.
