---
title: BL40 / 藍40
summary: Blue-line feeder route BL40 (藍40).
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
    note: Lists 藍40 under 捷運藍線接駁公車.
  - id: ebus-bl40
    title: BL40 route schedule
    titleOriginal: 藍40班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 華克山莊–土城 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍40 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 華克山莊 - 土城, weekday service 0630–2000, holiday service 0700–1900, one-section fare and 臺北客運四海站 as the service contact.[^ebus-bl40]

The confirmed stop sequence runs from 華克山莊, past 土地公廟/資源回收站/廷寮里/
應天府, through 清水國小/中正國中/裕民路口, ending in Tucheng at 千歲路 near
捷運土城站.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Tucheng (BL03), matching a literal stop at 捷運土城站
named on both directions.[^tdx-bus] The route runs a single subroute under
one operator, 臺北客運, with no recorded holiday variant or short
working.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL40; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL40 (16 stops):** Huake Village -> Tudigong Temple -> Recycling Sta -> Tingliao village -> Yingtian Temple -> Mingde Rd -> Qingshui Elementary School -> New Taipei District Court(Jincheng) -> Zhongzheng Junior High School -> Yumin Rd Entrance -> New Taipei Vocational High School(Jincheng) -> Ganlin Bridge -> Tucheng Hospital -> MRT Tucheng Station -> Tucheng Dist Office -> Ciansuei Rd[^tdx-bus]

**BL40 (13 stops):** Tucheng Dist Office -> MRT Tucheng Station -> Tucheng Hospital -> Ganlin Bridge -> New Taipei Vocational High School(Jincheng) -> Yumin Rd Entrance -> Zhongzheng Junior High School -> Banqiao District Court -> Qingshui Elementary School -> Mingde Rd -> Yingtian Temple -> Tingliao village -> Recycling Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍40 or a
stated reason for pairing 華克山莊 with plain 土城 rather than the confirmed
捷運土城站 as the route's own name was found in this search.[^ebus-bl40] A
headway-by-day-type figure is likewise absent from the primary schedule
page beyond its own weekday/holiday span statement. No predecessor-route
or renumbering history for 藍40 was located either, nor any stated reason for
its own short, single-district corridor compared with the longer
cross-district Blue-line feeders elsewhere in this batch.[^tdx-bus]
