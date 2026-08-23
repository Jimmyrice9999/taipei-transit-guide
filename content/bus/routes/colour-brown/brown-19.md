---
title: BR19 / 棕19
summary: Brown-line feeder pilot route BR19 (棕19).
updated: 2026-08-17
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
    note: Lists 棕19 under 捷運棕線接駁公車.
  - id: ebus-br19
    title: BR19 route information
    titleOriginal: 棕19路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?rid=16153&sec=0
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 捷運昆陽站–捷運大湖公園站 corridor, one-section fare, weekday/holiday service windows,東南客運內湖站 contact and the southern Neihu/Nangang stop sequence.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕19 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 捷運昆陽站, past 衛生福利部/五分社區, ending at 捷運大湖公園站.[^tdx-bus] Four confirmed interchanges are recorded in the curated stop-ID join set: Kunyang (BL21), Nangang (BL22), Dahu Park (BR20) and Nangang Software Park (BR23), reflecting a corridor that runs past both Blue-line and Brown-line stations rather than feeding a single brown-line stop.[^tdx-bus] The route runs 2 subroutes under a single operator, 東南客運內湖站, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 19 stops; the return, running the corridor in reverse from 捷運大湖公園站, covers 18.[^tdx-bus] Both termini are themselves named MRT stations, 昆陽 and 大湖公園, unlike most other routes in this group whose named endpoints sit away from a station.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR19; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR19 (19 stops):** MRT Kunyang -> Ministry of Health and Welfare -> Nangang Depot -> MRT Nangang Sta -> Taipei Bioinnovation Park -> National Civil Service Institute -> Nangang Exhibition Hall -> MRT Nangang Software Park Sta -> MRT Donghu Sta (Nanhu High School) -> Wufen Community -> Donghu Elementary School -> Donghu Community -> Kangle St -> Donghu Junior High School -> Wufenpi -> Kanghu Tunnel Entrance(Baima Shanzhuang) -> Antai Bridge -> Dahu Park -> MRT Dahu Park Sta[^tdx-bus]

**BR19 (18 stops):** MRT Dahu Park Sta -> Dahu Park -> Antai Bridge -> Kanghu Tunnel Entrance(Baima Shanzhuang) -> Wufenpi -> Donghu Junior High School -> Kangle St -> Donghu Community -> Donghu Elementary School -> Wufen Community -> MRT Donghu Sta (Nanhu High School) -> MRT Nangang Software Park Sta -> Nangang Exhibition Hall -> Nat'l Civil Service Institute -> Taipei Bioinnovation Park -> MRT Nangang Sta -> Nangang Depot -> MRT Kunyang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC.
- Corridor decision: TBC — the current 捷運昆陽站–捷運大湖公園站 corridor is published, but its original rationale was not.[^ebus-br19]
- Unusual branch or short working: TBC — no dated branch or short-working history was found.[^ebus-br19]
- Operator changes: TBC — the current page names 東南客運內湖站, but no dated transfer record was found.[^ebus-br19]
