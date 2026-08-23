---
title: "M18 / 市民小巴18"
summary: "Minibus and community route: M18 (市民小巴18)."
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
  - id: ebus-route-minibus-18-1nbu2cn
    title: "M18 route schedule"
    titleOriginal: "市民小巴18班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴18 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “撫遠街 - 松山車站”, the current head/last-departure field “[平日] 0800 - 1730 [假日] 停駛”, fare “一段票”.[^ebus-route-minibus-18-1nbu2cn] It currently lists weekday service and suspended holiday service.[^ebus-route-minibus-18-1nbu2cn]

The confirmed stop sequence runs from 莊敬里, past 新益里/民生國中/新東街
口/三民路/三民健康路口/西松國小, through 南京公寓(捷運南京三民), along 南松山
(南京)/饒河街觀光夜市, ending at 松山車站(八德)/松山車站.[^tdx-bus] Two
confirmed interchanges are recorded in the curated stop-ID join set:
Nanjing Sanmin (G18) and Songshan (G19), both on the same Songshan-
Xindian Line stretch the route parallels for most of its own run.[^tdx-bus] The route runs a single subroute under one operator, 大都會
客運, weekdays only with holiday service suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for M18; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M18 (13 stops):** Zhuangjing Village -> Xinyi Village -> Minsheng Junior High School -> Xindong St Entrance -> Sanmin Rd -> Sanmin and Jiankang Intersection (Xisong High School) -> Xisong Elementary School -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Nansongshan (Nanjing) -> Raohe St Night Market (Tayou) -> Songshan Farmers Assn -> Songshan Rail Sta (Bade) -> Songshan Rail Sta[^tdx-bus]

**M18 (12 stops):** Bade and Zhongpo Intersection -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> Raohe St Night Market (Tayou) -> Nansongshan (Nanjing) -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Xisong Elementary School -> Sanmin and Jiankang Intersection (Xisong High School) -> Sanmin Rd -> Guanghe New Village -> Sanmin Elementary School -> Zhuangjing Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension, shared with the separate 市民小巴17 run by the same operator, was found in this search, nor a stated reason for pairing 撫遠街 with 松山車站 specifically as the route's own termini.
