---
title: G10 / 綠10
summary: Green-line feeder route G10 (綠10).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠10 under 捷運綠線接駁公車.
  - id: ebus-g10
    title: G10 route schedule
    titleOriginal: 綠10班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001000
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 景文科技大學–捷運大坪林站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠10 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 景文科技大學 - 捷運大坪林站, weekday and holiday service 0600–2230, one-section fare, 29 daily departures and 新店客運碧潭站 as the service contact.[^ebus-g10]

A 捷運綠線接駁公車 is a feeder route the catalogue files against the Songshan–Xindian Line specifically, distinct from the general-bus routes elsewhere in this project's coverage; the colour identifies which MRT line the route is built to connect to, not a geographic zone.[^ebus-green]

The confirmed stop sequence runs from 景文科技大學 (Jingwen University of Science and Technology) through Ankeng's 安坑 residential blocks — past 安康派出所 and a run of named apartment communities — to 新店 (Xindian), ending at 捷運大坪林站.[^tdx-bus] Along the way it calls at four confirmed MRT/light-rail interchanges: 捷運新店區公所站 (Xindian District Office, G02), 捷運七張站 (Qizhang, G03), 捷運大坪林站 itself (Dapinglin, G04, also served by the Circular Line as Y07), and 輕軌安康站 (Ankang, K06) on the Ankeng Light Rail.[^tdx-bus] At a flat one-section fare over 29 daily
departures, a rider boarding anywhere on the route pays the same amount
whether they ride one stop or the full length between the university and
大坪林.[^ebus-g10]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G10; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G10 (20 stops):** Jinwen U of Science and Technology -> Taimao Village 8 -> Anju Civil Service Housing -> Ankeng Elementary School -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anhua Rd Intersection -> Xiacheng Community -> Mansion of General Hu-Lien -> Dingcheng -> Dapingding -> Xitou -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Dapingding -> MRT Dapingding Station[^tdx-bus]

**G10 (23 stops):** Shunan St -> Jiangling Ercun -> Buddhist Tzu Chi General Hospital -> Minquan Industrial Area -> Minquan Rd Entrance -> Dapingding -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Xindian District Office Station(Beixin Rd) -> Binlang Rd -> Bitan Bridge -> Xitou -> Dapingding -> Dingcheng -> Mansion of General Hu-Lien -> Xiacheng Community -> Anhua Rd Intersection -> Guanghua New Village(Ankang Rd) -> Ankeng Elementary School -> Anju Civil Service Housing -> Taimao Village 8 -> Jinwen U of Science and Technology[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
