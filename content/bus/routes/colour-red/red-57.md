---
title: R57 / 紅57
summary: Red-line feeder route R57 (紅57).
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
    note: Lists 紅57 under 捷運紅線接駁公車.
  - id: ebus-r57
    title: R57 route schedule
    titleOriginal: 紅57班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111005700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運行天宮站–捷運科技大樓站 corridor, weekday service, holiday suspension, one-section fare and the three operator contacts.
---

## Classification and corridor

The official catalogue lists 紅57 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 捷運行天宮站 - 捷運科技大樓站, weekday service 0630–2100, no holiday service, one-section fare and contacts for 首都客運社子站, 首都客運士林站 and 臺北客運士林站. The page repeats that holidays are suspended.[^ebus-r57]

The confirmed stop sequence runs from 吉林路底, past 新福里/新壽公園/捷運行天宮
站, through 民生松江路口/臺北大學/長春國小, along 建國南路 past 空軍總部/信義市場,
into 大安's 龍門國中/國立臺北教育大學/臥龍街, ending at 復興南路口 near 大安運動
中心.[^tdx-bus] Three confirmed interchanges are recorded in the curated
stop-ID join set: Technology Building (BR08), Xingtian Temple (O09) and
Daan Park (R06).[^tdx-bus] The route is jointly run by two operators, 首都
客運 and 臺北客運, with three separate contact points across three
dispatch stations.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R57; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R57 (24 stops):** Jilin Rd End -> Xinfu Village -> Xinshou Park -> MRT Xingtian Temple Sta (Songjiang Rd) -> Minsheng & Songjiang Intersection -> Nat'I Taipei U(Taipei Campus) -> Changchun Elementary School -> Zhongshan Girls High School -> Jianguo Brewery -> Nat'l Taipei U of Technology (Jianguo) -> General Headquarters of the Air Force -> Yanping High School -> Xinyi Market -> Jianguo S Rd -> Daan Public Housing -> Longmen Jr High School (Heping) -> Fuxing S Rd Entrance -> National Taipei University of Education -> Wolong St -> Dunhua & Heping Intersection -> Heping Senior High School -> Daan Sports Center -> Daan Dist Health Center -> Fuxing S Rd Entrance[^tdx-bus]

**R57 (16 stops):** National Taipei University of Education Experiment Elementary School -> Longmen Jr High School (Heping) -> Heping and Jianguo intersection -> Daan Public Housing -> Xinyi Market -> Yanping High School -> General Headquarters of the Air Force -> Nat'l Taipei U of Technology (Jianguo) -> Zhongshan Girls High School -> Changchun Elementary School -> Nat'I Taipei U(Taipei Campus) -> Minsheng & Songjiang Intersection -> Minquan and Songjiang Intersection -> Xinshou Park -> Xinfu Village -> Jilin Rd End[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅57 was found in this search, nor a stated reason for
how the three contact stations divide the route's own departures between
three separate dispatch points. No predecessor-route or renumbering
history for 紅57 was located either, nor a stated reason for its own
weekday-only pattern despite serving a dense residential and school
corridor.[^tdx-bus]
