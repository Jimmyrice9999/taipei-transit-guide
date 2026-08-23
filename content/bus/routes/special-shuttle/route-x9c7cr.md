---
title: "Maokong Left (Zhinan Temple) / 貓空左線(指南宮)"
summary: "Special shuttle route: Maokong Left (Zhinan Temple) (貓空左線(指南宮))."
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
  - id: ebus-route-route-x9c7cr
    title: "Maokong Left (Zhinan Temple) route schedule"
    titleOriginal: "貓空左線(指南宮)班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 貓空左線(指南宮) under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “貓空纜車站 - 貓纜指南宮站”, the current head/last-departure field “[平日] 0900 - 1720 [假日] 1320 - 1550”, fare “一段票”.[^ebus-route-route-x9c7cr]

The confirmed stop sequence runs from 貓空壺穴站, past 貓空站(小天空步
道)/涼亭站/圓山/草湳, ending at 岐山/貓纜指南宮站, with a longer working
starting further back at 貓空纜車站 via 天恩宮/茶推廣中心.[^tdx-bus] The
curated stop-ID join set records zero confirmed interchanges for this
route, consistent with its own corridor running entirely within the
Maokong hillside.[^tdx-bus] TDX records four direction/variant records
for this service, distinguishing the short and long workings in each
direction, under one operator, 欣欣客運, with a markedly shorter
published holiday window than its own weekday hours.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Maokong Left (Zhinan Temple); each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Maokong Left (Zhinan Temple) (7 stops):** Maokong Pothole Sta -> Maokong Sta (Mini Skywalk) -> Pavilion Stop -> Yuanshan -> Caonan -> Qishan -> Maokong Gondola Zhinan Temple Station[^tdx-bus]

**Maokong Left (Zhinan Temple) (5 stops):** Caonan -> Yuanshan -> Pavilion Stop -> Maokong Sta (Mini Skywalk) -> Maokong Pothole Sta[^tdx-bus]

**Maokong Left (Zhinan Temple) (10 stops):** Maokong Gondola Stop -> Tianen Temple -> Tea Promotion Center -> Maokong Pothole Sta -> Maokong Sta (Mini Skywalk) -> Pavilion Stop -> Yuanshan -> Caonan -> Qishan -> Maokong Gondola Zhinan Temple Station[^tdx-bus]

**Maokong Left (Zhinan Temple) (8 stops):** Caonan -> Yuanshan -> Pavilion Stop -> Maokong Sta (Mini Skywalk) -> Maokong Pothole Sta -> Tea Promotion Center -> Tianen Temple -> Maokong Gondola Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own narrower holiday window, the opposite pattern from the separate 貓空左線(動物園), which runs later on holidays, was found in this search.
