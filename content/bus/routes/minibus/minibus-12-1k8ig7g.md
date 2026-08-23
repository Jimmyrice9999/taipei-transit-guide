---
title: "S12 / 小12"
summary: "Minibus and community route: S12 (小12)."
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
  - id: ebus-route-minibus-12-1k8ig7g
    title: "S12 route schedule"
    titleOriginal: "小12班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小12 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運昆陽站 - 貓纜動物園站”, the current head/last-departure field “[平日] 0620 - 1740 [假日] 0620 - 1740”, fare “一段票”.[^ebus-route-minibus-12-1k8ig7g]

At 31-32 stops each way, the confirmed stop sequence runs from 捷運昆陽站,
past 南港車站/南港展覽館/中研院/胡適公園, through 中華科技大學/軍人公墓, along
麗山橋/下寮橋, past 富德公墓's own numbered sections (12區/14區/20區/28區)
and 福德坑環保復育公園, ending at 捷運動物園站/貓纜動物園站.[^tdx-bus] Four
confirmed interchanges are recorded in the curated stop-ID join set:
Kunyang (BL21), Nangang (BL22), Taipei Nangang Exhibition Center
(BL23/BR24) and Taipei Zoo (BR01).[^tdx-bus] TDX records two named
subroutes, one shorter working ending at 富德公墓 itself.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for S12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S12 (31 stops):** MRT Kunyang -> Nangang High School (Civic Blvd) -> TaipeiMusicCenter -> Civic Blvd Sec 8 -> Nangang Rail Sta -> Nangang Vocational High School (Nangang Rd) -> Nangang -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop -> China U of Science & Technology -> Lishan Bridge -> Xialiao Bridge -> Guanghuatian Temple -> Fude Cemetery -> FudeCemeterySec12 -> FudeCemeterySec14 -> FudeCemeterySec20 -> FudeCemeterySec28 -> Fude Columbarium (Tree Burial Area) -> FudekengEco-park -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station[^tdx-bus]

**S12 (32 stops):** Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> ShibikengFudeTemple -> FudekengEco-park -> Fude Columbarium (Tree Burial Area) -> FudeCemeterySec28 -> FudeCemeterySec20 -> FudeCemeterySec14 -> FudeCemeterySec12 -> Fude Cemetery -> Guanghuatian Temple -> Xialiao Bridge -> Lishan Bridge -> China U of Science & Technology -> Soldiers Public Cemetry -> Lingyun Stop -> Jiuru Village 2 -> Lingyun Village 5 -> Jiuru Village 1 -> Hushih Park -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Rail Sta -> Civic Blvd Sec 8 -> TaipeiMusicCenter -> MRT Kunyang[^tdx-bus]

**S12 (23 stops):** MRT Kunyang -> Nangang High School (Civic Blvd) -> TaipeiMusicCenter -> Civic Blvd Sec 8 -> Nangang Rail Sta -> Nangang Vocational High School (Nangang Rd) -> Nangang -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop -> China U of Science & Technology -> Lishan Bridge -> Xialiao Bridge -> Guanghuatian Temple -> Fude Cemetery[^tdx-bus]

**S12 (23 stops):** Fude Cemetery -> Guanghuatian Temple -> Xialiao Bridge -> Lishan Bridge -> China U of Science & Technology -> Soldiers Public Cemetry -> Lingyun Stop -> Jiuru Village 2 -> Lingyun Village 5 -> Jiuru Village 1 -> Hushih Park -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Rail Sta -> Civic Blvd Sec 8 -> TaipeiMusicCenter -> MRT Kunyang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for
pairing 捷運昆陽站 with the Maokong Gondola's own 貓纜動物園站 specifically
as the route's own termini was found in this search, nor a stated reason
for the shorter 富德公墓 working existing as a separate subroute.
