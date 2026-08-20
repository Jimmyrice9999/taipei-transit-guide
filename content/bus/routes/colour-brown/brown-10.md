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

The confirmed outbound stop sequence runs from 捷運大湖公園站, past 大湖公園/園區街/南京敦化路口(小巨蛋), ending at 捷運南京復興站.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID join set, at the route's own starting terminus: Dahu Park (BR20).[^tdx-bus] The route runs 2 subroutes under a single operator, 東南客運, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 18 stops; the return working, starting from 龍江路口, covers 21, a longer stop count on the return leg that the TDX sequence records but does not explain.[^tdx-bus] The single confirmed interchange sits at the route's own starting stop rather than partway along the corridor, so a rider joining anywhere past 捷運大湖公園站 has no further curated MRT connection until the 南京復興 terminus, whose own station code is not among the confirmed joins.[^tdx-bus] The one-section fare and 東南客運 contact recorded on the schedule page apply across both directions of this two-subroute record without a published discount or transfer note.[^ebus-br10]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
