---
title: R55Shuttle / 紅55區
summary: Red-line feeder route R55Shuttle (紅55區).
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
    note: Lists 紅55區 under 捷運紅線接駁公車.
  - id: ebus-r55-shuttle
    title: R55Shuttle route and stop information
    titleOriginal: 紅55區路線資訊
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111005520
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 捷運關渡站–臺北城市科技大學 corridor, weekday service, holiday suspension, one-section fare, 大南汽車關渡站 contact and university-vacation suspension.
---

## Classification and corridor

The official catalogue lists 紅55區 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 捷運關渡站 - 臺北城市科技大學, weekday service 0720–1830, no holiday service, one-section fare and 大南汽車關渡站 as the service contact. It records suspension on holidays and during winter and summer vacations.[^ebus-r55-shuttle]

At just 3-8 stops each way, the confirmed stop sequence is among the
shortest in this batch: 捷運關渡站、北投區公所(關渡)、立功街、關渡、學園路口、北藝大
校門口、北藝大藝文生態館、臺北城市科技大學, a shorter version of sibling 紅55's
own campus loop.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Guandu (R25), matching the route's own
terminus.[^tdx-bus] The route runs a single subroute under one operator,
大南汽車, weekdays only with holidays and university vacations both
suspended.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R55Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R55Shuttle (8 stops):** MRT Guandu Sta -> Beitou District Office(Guandu) -> Ligong St -> Guandu -> Xueyuan Rd Entrance -> Entrance of TNUA -> Literary arts ecology hall -> Taipei Chengshih University of Science&Technology[^tdx-bus]

**R55Shuttle (3 stops):** Xueyuan Rd Entrance -> Guandu -> MRT Guandu Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅55區 was found in this search, nor a stated reason for
running as a separate route rather than a subroute of plain 紅55. No
predecessor-route or renumbering history for 紅55區 was located either,
nor a stated reason for the shorter stop count against plain 紅55's own
fuller campus loop, which continues on to 北藝大音樂廳 and further stops
this route omits.[^tdx-bus]
