---
title: Donghuan Metro Bus / 東環幹線
summary: Trunk route 東環幹線 (Donghuan Metro Bus).
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
    note: Lists 東環幹線 under 幹線專車.
  - id: ebus-donghuan
    title: Donghuan Metro Bus route schedule
    titleOriginal: 東環幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 松德站–捷運劍南路站 corridor, service span and operator contact; the route has no published holiday service.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 東環幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 東環幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 松德站 - 捷運劍南路站, weekday-only service 0630–1930 with no holiday service, one-section fare and 大都會客運松德站 as the service contact.[^ebus-donghuan]

A community wiki lists 東環幹線 as the renamed form of a former MRT feeder,
綠16 — a Songshan–Xindian Line feeder losing its colour prefix and gaining a
compass-direction name, one of eight such conversions this project's
joint-operation network page records.[^zh-trunk-bus]

The confirmed stop sequence runs from 松德站 in Xinyi, through 永春/松山 past
內湖's 新湖/瑞光 office corridor, ending near 大直.[^tdx-bus] Two confirmed
interchanges lie along the way: 捷運永春站 (Yongchun, BL19), named directly
in the stop sequence, and 松山車站, resolving to Songshan (G19).[^tdx-bus]
TDX also records a "繞駛新湖三路、堤頂大道" (detour via Xinhu 3rd Road and
Dingding Boulevard) variant taking a different street through the Neihu
office-park stretch.[^tdx-bus] Its weekday-only 0630–1930 span, with no published holiday service at all,
is markedly narrower than the near-all-day spans published for most other
trunk routes in this project's coverage, and matches the office-park
corridor it serves.[^ebus-donghuan]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 綠16 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 大都會客運 announcement in this search.
