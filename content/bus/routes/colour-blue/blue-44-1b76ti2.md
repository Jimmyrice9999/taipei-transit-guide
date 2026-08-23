---
title: BL44 / 藍44
summary: Blue-line feeder route BL44 (藍44).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍44 under 捷運藍線接駁公車.
  - id: ebus-bl44
    title: BL44 route schedule
    titleOriginal: 藍44班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 樹林–捷運永寧站 corridor, service span, fare, departure counts and operator contact.
---

## Classification and corridor

The official catalogue lists 藍44 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 樹林 - 捷運永寧站, weekday and holiday service 0600–2000, one-section fare, 28 weekday and 22 holiday departures, and 臺北客運樹林站 as the service contact.[^ebus-bl44] TDX carries a separate 藍44延 record (canonical slug `blue-44-1tw6b27`) sharing this route's 樹林 origin and operator with a different destination; their relationship is TBC.

The confirmed stop sequence runs from 樹林藝文綜合行政大樓, past 濟安宮(樹新路)/
樹林火車站/樹林酒廠, through 八德街口/東陽里/鎮前街/東榮街口/大同國小/樹林中學, then
via 篤行路/城林橋/中華中學, ending at 捷運永寧站.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Yongning (BL02),
matching the route's own terminus.[^tdx-bus] The route runs a single
subroute under one operator, 臺北客運, with 28 weekday and 22 holiday
departures on an identical 0600–2000 span.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL44; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL44 (17 stops):** Shulin Arts Administration Building -> Jian Temple(Shuxin Rd) -> ShuLin Train Station -> ShuLin Brewery -> Bade St Entrance -> Dongyang Borough -> Jhenciian St -> Dongrong St Entrance -> Datong Elementary School -> Heping St Entrance -> Shulin High School -> Duxing Rd Entrance -> ChengLin Bridge -> Zhonghua High School(Chenglin Rd) -> Zhonghua High School 1 -> Tucheng 2 -> MRT Yongning Station[^tdx-bus]

**BL44 (14 stops):** MRT Yongning Station -> TuCheng (II) -> Zhonghua High School 1 -> ChengLin Bridge -> Shulin High School -> Heping St Entrance -> Datong Elementary School -> Dongrong St Entrance -> Zhenqian St -> Dongyang Borough -> Bade St Entrance -> Shulin Winery -> ShuLin Train Station -> Jian Temple(Shuxin Rd)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍44延 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍44 was found
in this search, nor a stated reason for the schedule page listing exact
departure counts (28 weekday, 22 holiday) rather than a headway band as
several other routes in this batch do, nor a predecessor-route or
renumbering history for 藍44 was located.
