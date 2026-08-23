---
title: BL35 / 藍35
summary: Blue-line feeder route BL35 (藍35).
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
    note: Lists 藍35 under 捷運藍線接駁公車.
  - id: ebus-bl35
    title: BL35 route schedule
    titleOriginal: 藍35班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 歡仔園–捷運新埔站 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 藍35 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 歡仔園 - 捷運新埔站, weekday-only service 0650–2000 with 11 departures and no holiday service, one-section fare and 臺北客運歡仔園站 as the service contact.[^ebus-bl35]

At 14 stops outbound, the confirmed stop sequence is short and entirely
local: from 歡仔園, past 僑中一街/天主堂/湳興里/南雅西路, through 大仁街/大庭新村/
國光路/漢生郵局, ending at 捷運新埔站 via 板橋花市.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Xinpu (BL08),
matching the route's own terminus.[^tdx-bus] The route runs a single
subroute under one operator, 臺北客運, with no recorded holiday variant or
short working.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL35; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL35 (14 stops):** Huanziyuan -> Qiaozhong 1st St -> Daguan Rd Lane 28 -> Catholic Church -> Nanxing Village -> Nanya W Rd -> Daren St -> Dating New Village -> Guoguang Rd -> Hansheng Post Office -> Zhongshan Junior High School -> Chihlee University of Technology -> Banqiao Flower Market -> MRT Xinpu Sta[^tdx-bus]

**BL35 (11 stops):** Chihlee University of Technology -> Zhongshan Junior High School -> Hansheng Post Office -> Guoguang Rd -> Dating New Village -> Daren St -> Nanya W Rd -> Nansing Village -> Catholic Church -> Daguan Rd Lane 28 -> Qiaozhong 1st St[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍35 or a
stated reason for its weekday-only, no-holiday-service pattern — a pattern
also seen on 藍21副 and 藍33 elsewhere in this batch — was found in this
search. A headway-by-day-type figure is likewise absent from the primary
schedule page beyond its own 11-departure weekday listing.[^ebus-bl35] No
predecessor-route or renumbering history for 藍35, nor a stated reason for
pairing 歡仔園 with 捷運新埔站 specifically, was located either.
