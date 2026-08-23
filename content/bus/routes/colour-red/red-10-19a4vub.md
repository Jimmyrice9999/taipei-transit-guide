---
title: R10Shuttle / 紅10區
summary: Red-line feeder route R10Shuttle (紅10區).
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
    note: Lists 紅10區 under 捷運紅線接駁公車.
  - id: ebus-r10-shuttle
    title: R10Shuttle route and stop information
    titleOriginal: 紅10區路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111001020
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 社子–捷運劍潭站 corridor, weekday-only service, one-section fare and 光華巴士海專站 contact.
---

## Classification and corridor

The official catalogue lists 紅10區 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 社子 - 捷運劍潭站, weekday service 0700–1800, holiday suspension, one-section fare and 光華巴士海專站 as the service contact.[^ebus-r10-shuttle]

The confirmed stop sequence runs from 社子國小二, past 社子市場/陽明高中/士林
區行政中心, through 士林 past a stop literally named 捷運士林站(中正), then on
the outbound working continues to 台電台北北區營業處/銘傳大學, ending near
捷運劍潭站.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Jiantan (R15) and Shilin (R16), matching plain
紅10's own confirmed pair.[^tdx-bus] The route runs weekdays only, with
holiday service suspended entirely.[^ebus-r10-shuttle]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R10Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R10Shuttle (17 stops):** Shezi Elementary School 2 -> Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Substation -> Shezi Market2 -> Shezi Market -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin Farmers Assn[^tdx-bus]

**R10Shuttle (9 stops):** Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Sheyuan Village -> Shezi Police Substation -> Yonoglun Village (south) -> Shezi Elementary School -> Yonglun Village (Yanping)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅10區 or its
relationship to plain 紅10 beyond a shared 社子–劍潭 corridor and operator
was found in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own weekday-only 0700–1800
span.[^ebus-r10-shuttle] No predecessor-route or renumbering history for 紅10區 was located
either, nor a stated reason for its own holiday suspension against plain
紅10's own near-24-hour, seven-day span, both run by the same operator,
光華巴士, from its 海專站 dispatch point.[^tdx-bus]
