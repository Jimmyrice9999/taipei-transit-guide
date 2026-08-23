---
title: "M12 / 市民小巴12"
summary: "Minibus and community route: M12 (市民小巴12)."
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
  - id: ebus-route-minibus-12-eyacik
    title: "M12 route schedule"
    titleOriginal: "市民小巴12班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153001200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴12 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運芝山站 - 社子”, the current head/last-departure field “[平日] 0600 - 1800 [假日] 停駛”, fare “一段票”.[^ebus-route-minibus-12-eyacik] It currently lists weekday service and suspended holiday service.[^ebus-route-minibus-12-eyacik]

The confirmed stop sequence runs from 捷運芝山站(福華), past 新光醫院/士林
區行政中心/陽明高中, through 社子's 社子市場/社正路/國泰人壽大樓/社子公園, along
永平街口/永倫里, ending at 社子市場二, with the return working detouring
past 葫蘆寺/海光新村/葫蘆堵市場.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Zhishan (R17), matching the
route's own terminus.[^tdx-bus] The route runs a single subroute under one
operator, 三重客運, weekdays only with holiday service suspended
entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for M12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M12 (14 stops):** MRT Zhishan Sta (Fuhua) -> Xinguang General Hospital -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Shezheng Rd -> Cathay Life Insurance Building -> Shezi Park -> Yongping St Entrance -> Yonglun Village (Shezhong) -> Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Substation -> Shezi Market2[^tdx-bus]

**M12 (12 stops):** Shezi Market -> Hulu Temple (Hulu Village) -> Hulu Elementary School (Hulu Village) -> Haiguang Park -> Fuguang Village -> Haiguang New Village -> Huludu Market -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Xinguang General Hospital -> MRT Zhishan Sta (Fuhua)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the
route's own holiday suspension was found in this search, nor a stated
reason for pairing 捷運芝山站 with 社子 specifically as the route's own
termini.
