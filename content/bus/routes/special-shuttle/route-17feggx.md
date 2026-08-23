---
title: "Maokong Right / 貓空右線"
summary: "Special shuttle route: Maokong Right (貓空右線)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Special shuttle / commuter service (通勤／專車)"
    source: ebus-special
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
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
  - id: ebus-route-route-17feggx
    title: "Maokong Right route schedule"
    titleOriginal: "貓空右線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162002000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 貓空右線 under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “貓空纜車站 - 杏花林”, the current head/last-departure field “[平日] 0900 - 2000 [假日] 0830 - 2000”, fare “一段票”.[^ebus-route-route-17feggx]

The confirmed stop sequence is a single loop, running from 貓空纜車站,
past 石坡坑/田寮橋/樟樹步道北口/樟山寺/望遠亭(老泉里)/杏花林(老泉里)/樟
樹步道南口/瓦厝/樟湖步道, and back to 貓空纜車站.[^tdx-bus] The curated
stop-ID join set records zero confirmed interchanges for this route,
consistent with its own corridor running entirely within the Maokong
hillside, well away from any rail line.[^tdx-bus] The route runs a
single subroute under one operator, 欣欣客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 1 directional or variant stop sequence for Maokong Right; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Maokong Right (11 stops):** Maokong Gondola Stop -> Shipokeng -> Tianliao Bridge -> North Entrance of Camphor Tree Trail -> Zhangshan Temple -> Wangyuan Pavilion (Laoquan Village) -> Xinghualin (Laoquan Village) -> South Entrance of Camphor Tree Trail -> Wacuo -> Zhanghu Hiking Trail -> Maokong Gondola Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing this route's own loop with the separate 貓空左線(動物園) and 貓空左線(指南宮), rather than a single combined Maokong shuttle serving all three destinations from one shared terminus, was found in this search, nor a stated reason for the route's own slightly later weekday start against its own holiday hours.
