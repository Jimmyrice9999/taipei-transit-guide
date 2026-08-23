---
title: R25Shuttle / 紅25區
summary: Red-line feeder route R25Shuttle (紅25區).
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
    note: Lists 紅25區 under 捷運紅線接駁公車.
  - id: ebus-r25-shuttle
    title: R25Shuttle route schedule
    titleOriginal: 紅25區班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111002520
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港–捷運南京復興站 corridor, weekday/holiday service spans, one-section fare and 首都客運經貿站 contact.
---

## Classification and corridor

The official catalogue lists 紅25區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 南港 - 捷運南京復興站, weekday service 0940–2110, holiday service 0830–2030, one-section fare and 首都客運經貿站 as the service contact.[^ebus-r25-shuttle]

The confirmed stop sequence runs from 三重里 in Nangang, past 育成高中/南港
高工/東新國小, through 南港分局's 向陽/重陽 sub-stops, along 新明路/南京舊宗路口,
ending at 捷運南京復興站.[^tdx-bus] Two confirmed interchanges are recorded
in the curated stop-ID join set: Nanjing Fuxing, a Wenhu–Songshan/Xindian
interchange (BR11/G16), and Nanjing Sanmin (G18).[^tdx-bus] The route runs
a single subroute under one operator, 首都客運, with a narrower weekday
0940–2110 span than most other routes in this batch.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R25Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R25(Shuttle) (18 stops):** Sanchong Village -> Yucheng High School -> Nangang Vocational High School (Chongyang) -> Dongxin Elementary School -> China Television Company -> Nangang Police Dist (Chongyang) -> Nangang Police Dist (Xiangyang) -> Xinming and Chenggong Intersection -> TCBD -> Xinming Rd -> Zhoumei Village -> Nanjing and Jiuzong Intersection -> MacArthur No1 bridge -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> NanJing-SanMin Intersection -> Nanjing & Ningan Intersection -> Nanjing & Dunhua Intersection (Taipei Arena) -> MRT Nanjing Fuxing Station[^tdx-bus]

**R25(Shuttle) (20 stops):** Longjiang Rd Entrance -> Changchun Market -> Liaoning St Entrance -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Nanjing & Ningan Intersection -> NanJing-SanMin Intersection -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> MacArthur No1 bridge -> Nanjing & Jiuzong Intersection -> Zhoumei Village -> Xinming Rd -> TCBD -> Xinming and Chenggong Intersection -> Nangang Police Dist (Chongyang) -> China Television Company -> Dongxin Elementary School -> Nangang Vocational High School (Chongyang) -> Yucheng High School -> Sanchong Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅25區 or its
relationship to plain 紅25, run by the same operator over an overlapping
南港–南京東路 stretch, was found in this search. A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday and holiday span statement. No predecessor-route or renumbering
history for 紅25區 was located either, nor a stated reason for its own
narrower weekday-only 0940 start compared with plain 紅25's own 0550 start.[^tdx-bus]
