---
title: R10 / 紅10
summary: Red-line feeder route R10 (紅10).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅10 under 捷運紅線接駁公車.
  - id: ebus-r10
    title: R10 route schedule
    titleOriginal: 紅10班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001000
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 台北海大–捷運劍潭站 corridor, service span, one-section fare and 光華巴士海專站 contact.
---

## Classification and corridor

The official catalogue lists 紅10 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 台北海大 - 捷運劍潭站, weekday and holiday service 0530–2340, one-section fare and 光華巴士海專站 as the service contact.[^ebus-r10]

The confirmed stop sequence runs from 台北海大 on the Shezi peninsula, past
富洲里/威靈廟/福安國小, through 社子's 普濟堂/社子市場/陽明高中/士林區行政中心,
into 士林 past a stop literally named 捷運士林站(中正), then on to 台電台北
北區營業處/銘傳大學, ending near 捷運劍潭站.[^tdx-bus] Two confirmed
interchanges are recorded in the curated stop-ID join set: Jiantan (R15)
and Shilin (R16).[^tdx-bus] TDX carries a separate 紅10區 record (canonical
slug `red-10-19a4vub`) sharing this route's corridor and operator but
running weekdays only.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅10 was found
in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own near-24-hour, 0530–2340 weekday and
holiday span statement.[^ebus-r10] No predecessor-route or renumbering history for
紅10 was located either, nor a stated reason for pairing 台北海大 with
捷運劍潭站 across such a wide stretch of the city, run by the same
operator, 光華巴士, as 紅10區 from its 海專站 dispatch point.[^tdx-bus]
