---
title: R28 / 紅28
summary: Red-line feeder route R28 (紅28).
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
    note: Lists 紅28 under 捷運紅線接駁公車.
  - id: ebus-r28
    title: R28 route schedule
    titleOriginal: 紅28班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡江大學–捷運淡水站 corridor, weekday/holiday service spans, one-section fare and 淡水客運淡水站 contact.
---

## Classification and corridor

The official catalogue lists 紅28 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡江大學 - 捷運淡水站, weekday service 0600–2220, holiday service 0640–2220, one-section fare and 淡水客運淡水站 as the service contact.[^ebus-r28]

At just five stops outbound, the confirmed stop sequence is among the
shortest in this batch: 淡江大學、淡江大學城、文宏廣場、淡江柏園、鄧公里, connecting
to 捷運淡水站 on the return working.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Tamsui (R28).[^tdx-bus] The
route runs a single subroute under one operator, 淡水客運, distinct from
紅28直's own more direct stop pattern over the same termini.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R28; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R28 (5 stops):** Tamkang University -> Tamkang Community -> Wenhong Square -> Danjiangboyuan -> Denggong Village[^tdx-bus]

**R28 (7 stops):** MRT DANSHUI Station -> Denggong Villa -> Tamkang -> Wenhong Square -> Xuefu Rd Entrance -> Tamkang University City -> Tamkang University[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅28 or its
relationship to 紅28直 was found in this search.[^tdx-bus] A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday 0600–2220 and holiday 0640–2220 span statement.[^ebus-r28] No predecessor-
route or renumbering history for 紅28 was located either, nor a stated
reason for the operator running two near-identical routes over the same
termini rather than one with a short-working variant, as done elsewhere in this
batch.[^tdx-bus]
