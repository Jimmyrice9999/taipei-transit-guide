---
title: "S1 / 小1"
summary: "Minibus and community route: S1 (小1)."
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
  - id: ebus-route-minibus-1-p1l27q
    title: "S1 route schedule"
    titleOriginal: "小1班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小1 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中華科技大學 - 內溝”, the current head/last-departure field “[平日] 0550 - 1830 [假日] 0550 - 1830”, fare “一段票”.[^ebus-route-minibus-1-p1l27q]

The confirmed stop sequence runs from 中華科技大學 in outer Nangang, past
軍人公墓/凌雲站/胡適公園, through 中研院/中研新村/南港水廠, into 南港展覽館/南港
軟體園區, past a stop literally named 捷運東湖站(南湖高中), ending near 內溝.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID
join set: Taipei Nangang Exhibition Center (BL23/BR24) and Donghu (BR22).[^tdx-bus] The route runs a single subroute under one operator, 東南客運,
the same company that runs sibling 小1區 over an overlapping Nangang-
Neihu corridor.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S1; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S1 (26 stops):** China U of Science & Technology (Main Entrance) -> China U of Science & Technology -> Soldiers Public Cemetry -> Lingyun Stop -> Jiuru Village 2 -> Lingyun Village 5 -> Jiuru Village 1 -> Hushih Park -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang Software Park S -> Nangang Software Park N -> MRT Donghu Sta (Nanhu High School) -> Wufen Community -> Donghu Elementary School -> Donghu Community -> Kangle St -> Donghu Junior High School -> Wufenpi -> Kanghu Tunnel(White Horse Villa) -> Nanliao(Zhong 3rd St Entrance) -> Qitou[^tdx-bus]

**S1 (26 stops):** Neigou -> Qitou -> Nanliao(Zhong 3rd St Entrance) -> Kanghu Tunnel(White Horse Villa) -> Wufenpi -> Donghu Junior High School -> Kangle St -> Donghu Community -> Donghu Elementary School -> Wufen Community -> MRT Donghu Sta (Nanhu High School) -> Nangang Software Park N -> Nangang Software Park S -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop -> Soldiers' Public Cemetry (Main Gate) -> China U of Science & Technology (Main Entrance)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for
pairing 中華科技大學 with 內溝 specifically as the route's own termini was
found in this search, sharing its own 內溝 end with sibling 小1區's own
opposite terminus at 捷運昆陽站.
