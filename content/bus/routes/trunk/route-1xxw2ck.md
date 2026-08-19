---
title: Zhongshan Metro Bus / 中山幹線
summary: Trunk route 中山幹線 (Zhongshan Metro Bus).
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
    note: Lists 中山幹線 under 幹線專車.
  - id: ebus-zhongshan
    title: Zhongshan Metro Bus route schedule
    titleOriginal: 中山幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 天母–青年公園 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 中山幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 中山幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 天母 - 青年公園, weekday and holiday service 0530–2300, a two-section fare and 光華巴士天東站 as the service contact.[^ebus-zhongshan]

A community wiki lists 中山幹線 as the renamed form of a former numbered
route, 220, one of eight conversions this project's joint-operation network
page records — like 松江新生幹線's 642, a numbered route rather than an
already-colour-prefixed feeder.[^zh-trunk-bus]

The confirmed stop sequence runs from 天母 in Shilin/Beitou, down 中山北路
through Shilin and Zhongshan past 台北市立美術館 (Taipei Fine Arts Museum),
through central Taipei past 西門, then along 中華路 into Wanhua and 青年公園
(Youth Park) in the south.[^tdx-bus] Four confirmed interchange points, covering all six curated codes, are
named directly in the stop sequence: 捷運士林站 (Shilin, R16), 捷運劍潭站
(Jiantan, R15), 臺北車站 (Taipei Main Station, served by both the Bannan
Line as BL12 and the Tamsui–Xinyi Line as R10) and 捷運西門站 (served by
both the Bannan Line as BL11 and the Songshan–Xindian Line as
G12).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 220 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 光華巴士 announcement in this search.
