---
title: Minquan Metro Bus / 民權幹線
summary: Trunk route 民權幹線 (Minquan Metro Bus).
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
    note: Lists 民權幹線 under 幹線專車.
  - id: ebus-minquan
    title: Minquan Metro Bus route schedule
    titleOriginal: 民權幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港–臺北橋 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 民權幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 民權幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 南港 - 臺北橋, weekday and holiday service 0540–2340, one-section fare and 首都客運南港站 as the service contact.[^ebus-minquan]

A community wiki lists 民權幹線 as the renamed form of a former MRT feeder,
紅32 — a Tamsui–Xinyi Line feeder losing its colour prefix and gaining a
street name, one of eight such conversions this project's joint-operation
network page records.[^zh-trunk-bus]

The confirmed stop sequence runs from 南港, past a run of Neihu software-park
stops, through 民權東路 the length of Neihu and into central Taipei, ending
at 臺北橋 in Datong.[^tdx-bus] Four confirmed interchanges are named directly
in the stop sequence: 捷運東湖站 (Donghu, BR22), 捷運葫洲站 (Huzhou, BR21),
捷運中山國小站 (Zhongshan Elementary School, O10) and 捷運民權西路站, served by
both the Zhonghe–Xinlu Line (O11) and the Tamsui–Xinyi Line (R13).[^tdx-bus]
The curated join set adds three further confirmed codes — resolving to
Zhongshan Junior High School (BR12), Songshan Airport (BR13) and Nangang
Software Park (BR23) — at points the stop sequence's own names do not
directly repeat.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 紅32 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 首都客運 announcement in this search.
