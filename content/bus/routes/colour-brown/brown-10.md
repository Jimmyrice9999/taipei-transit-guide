---
title: BR10 / 棕10
summary: Brown-line feeder pilot route BR10 (棕10).
updated: 2026-08-15
line: BR
facts:
  - label: Service class
    value: MRT brown-line feeder
    source: ebus-brown
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
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕10 under 捷運棕線接駁公車.
  - id: ebus-br10
    title: BR10 route schedule
    titleOriginal: 棕10班表
    publisher: Taipei City Government, 臺北市政府大臺北公車
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001000
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the published BR10 termini, service span, fare class and operator contact.
---

## Classification and corridor

The official catalogue lists 棕10 under 捷運棕線接駁公車.[^ebus-brown] Its full route page gives the termini as 「捷運大湖公園站 - 南京復興路口」 and publishes 0600–2300 on weekdays and holidays, one-section fare and 東南客運 as the service contact.[^ebus-br10]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
