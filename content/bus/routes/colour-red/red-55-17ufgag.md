---
title: R55 / 紅55
summary: Red-line feeder route R55 (紅55).
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
    note: Lists 紅55 under 捷運紅線接駁公車.
  - id: ebus-r55
    title: R55 route and stop information
    titleOriginal: 紅55路線資訊
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111005500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 捷運關渡站–臺北藝術大學 corridor, weekday/holiday service windows, one-section fare, 大南汽車關渡站 contact and summer-vacation note.
---

## Classification and corridor

The official catalogue lists 紅55 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 捷運關渡站 - 臺北藝術大學, weekday service 0700–1900, holiday service 0800–1900, one-section fare and 大南汽車關渡站 as the service contact. It records that winter- and summer-vacation service uses the holiday timetable.[^ebus-r55]

The confirmed stop sequence runs from 捷運關渡站, past 北投區公所/立功街, through
關渡/學園路口, into 北藝大's own campus stops — 北藝大校門口/北藝大藝文生態館/臺北
城市科技大學, ending at 北藝大藝科中心(游泳館)/北藝大圖書館/北藝大行政大樓/北藝大
音樂廳.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Guandu (R25), matching the route's own terminus.[^tdx-bus]
The route runs a single subroute under one operator, 大南汽車, entirely
within the 北藝大/臺北城市科大 campus corridor.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R55; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R55 (15 stops):** MRT Guandu Sta -> Beitou District Office(Guandu) -> Ligong St -> Guandu -> Xueyuan Rd Entrance -> Entrance of TNUA -> Literary arts ecology hall -> Taipei Chengshih University (Main Gate) -> Taipei Chengshih University of Science and Technology (back door) -> Barren hill theater -> Center for Art and Technology of TNUA(Natatorium) -> Library of TNUA -> Administration Building of TNUA -> Music hall -> Grassland[^tdx-bus]

**R55 (3 stops):** Xueyuan Rd Entrance -> Guandu -> MRT Guandu Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅55 or its
relationship to sibling 紅55區, run by the same operator over an
overlapping corridor, was found in this search. A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday and holiday span statement. No predecessor-route or renumbering
history for 紅55 was located either, nor a stated reason for pairing
捷運關渡站 with a university campus rather than a residential district.[^tdx-bus]
