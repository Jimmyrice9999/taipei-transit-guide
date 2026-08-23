---
title: "M15 / 市民小巴15"
summary: "Minibus and community route: M15 (市民小巴15)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-15-oo38hu
    title: "M15 route schedule"
    titleOriginal: "市民小巴15班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴15 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運昆陽站 - 捷運南港展覽館站”, the current head/last-departure field “[平日] 0600 - 2100 [假日] 0600 - 2100”, fare “一段票”.[^ebus-route-minibus-15-oo38hu]

Three confirmed interchanges are recorded in the curated stop-ID join
set: Kunyang (BL21), Taipei Nangang Exhibition Center (BL23/BR24) and
Nangang Software Park (BR23), matching the route's own terminus and
two stops along its own Nangang corridor.[^tdx-bus] The route runs a
single subroute under one operator, over a corridor sharing its own
Kunyang and Nangang Exhibition Center interchanges with the separate
小12, which additionally confirms Nangang (BL22) and Taipei Zoo (BR01)
on its own longer run to the Maokong Gondola.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for M15; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M15 (12 stops):** MRT Kunyang -> Nangang High School -> Nangang Police Dist (Xiangyang) -> Wengehua Community -> Fendi Community -> Dongyang Elementary School -> Dongxin Elementary School -> Nangang Vocational High School (Chongyang) -> Yucheng High School -> Sanchong Village -> Nangang Pumping Sta -> MRT Nangang Software Park Sta[^tdx-bus]

**M15 (17 stops):** MRT Taipei Nangang Exhibition Center Sta (Jingmao 2) -> TWTC Nangang Exhibition Hall -> Nangang Software Park S -> Nangang Software Park N -> Nangang Pumping Sta -> Sanchong Village -> Yucheng High School -> Nangang Vocational High School (Chongyang) -> Dongxin Elementary School -> China Television Company -> Dongyang Elementary School -> Fendi Community -> Wengehua Community -> Xiangyang　Park -> Nangang Police Dist (Xiangyang) -> Nangang High School -> MRT Kunyang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 捷運昆陽站 with 捷運南港展覽館站 specifically as the route's own termini, rather than a more direct pairing, was found in this search.
