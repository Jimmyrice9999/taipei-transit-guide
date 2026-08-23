---
title: G13 / 綠13
summary: Green-line feeder route G13 (綠13).
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
    note: Lists 綠13 under 捷運綠線接駁公車.
  - id: ebus-g13
    title: G13 route schedule
    titleOriginal: 綠13班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 青潭–捷運公館站 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 綠13 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 青潭 - 捷運公館站, weekday and holiday service 0530–2230, a two-section fare, peak headways of 10 minutes and off-peak headways of 20 minutes, and 新店客運新店站 as the service contact.[^ebus-g13]

The confirmed stop sequence runs the Songshan–Xindian Line's own corridor at
street level almost end to end: from 青潭, past 新店, it calls at seven
confirmed interchanges in sequence — 捷運新店站 (Xindian, G01), 捷運新店區
公所站 (Xindian District Office, G02), 捷運大坪林站 (Dapinglin, G04, also
Circular Line Y07), 捷運景美站 (Jingmei, G05), 捷運萬隆站 (Wanlong, G06) and
捷運公館站 (Gongguan, G07) — before ending at 臺大.[^tdx-bus] Six separate MRT
stations confirmed on one feeder route is more than any other route in this
project's colour-green coverage, consistent with G13 functioning as a
surface-level parallel to the line itself rather than a cross-corridor
feeder.[^tdx-bus] Its 10-minute peak headway is also the tightest published
figure among this project's colour-green routes, a frequency that fits a
route running the same corridor as the metro rather than serving as an
occasional last-mile connector.[^ebus-g13]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G13; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G13 (35 stops):** QingTan Parking Lot -> Qingtan(Xinwu) -> Qingtan -> Qingtan (I) -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> MRT Xindian Sta(Beixin Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian District Office Sta(Zhonghua) -> Zhonghua Market -> Zhongzheng Elementary School -> Sanmin Rd -> Gongyuan New Village -> Cardinal Tien Hospital(Sanmin Rd) -> Cardinal Tien Hospital(Minzu Rd) -> Dafeng Elementary School -> Dafong Rd -> Jianguo Rd -> Minquan Industrial Dist -> Minquan Rd Entrance -> MRT Dapinglin Station -> Hujiang High School -> MRT Jingmei -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> Wenzhou St Entrance -> NTU Sports Center -> National Taiwan University[^tdx-bus]

**G13 (32 stops):** MRT Gongguan Sta -> National Taiwan Normal University Branch -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> WanLong -> Ministry of Finance Park -> MRT Jingmei -> Hujiang High School -> MRT Dapinglin Station -> Minquan Rd Entrance -> Minquan Industrial Area -> Jianguo Rd -> Dafong Rd -> Dafong Elementary School -> Minzu Rd -> Cardinal Tien Hospital(Sanmin Rd) -> Gongyuan New Village -> Sanmin Rd -> Zhongzheng Elementary School -> Investigation Bureau -> Zhonghua Market -> MRT Xindian District Office Sta(Zhonghua) -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Beixin Rd) -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> Qingtan (I) -> Nanqing Temple -> Qingtan -> QingTan Parking Lot[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
