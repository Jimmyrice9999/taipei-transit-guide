---
title: "S5 / 小5"
summary: "Minibus and community route: S5 (小5)."
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
  - id: ebus-route-minibus-5-r758xg
    title: "S5 route schedule"
    titleOriginal: "小5班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小5 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運昆陽站 - 光明寺”, the current head/last-departure field “[平日] 0530 - 1830 [假日] 0530 - 1600”, fare “一段票”.[^ebus-route-minibus-5-r758xg]

The confirmed stop sequence runs from 捷運昆陽站, past 南港高中/土地公廟/東
明里/南港路二段178巷口/台肥新村/南港行政中心/南港高工, through 南港/南港展
覽館/誠正國中/南港水廠/圓拱橋/中研新村/中研院, along 舊莊一站/舊莊國小/舊莊/
舊莊二站/茶葉製造示範場/光明里, ending at 光明寺, continuing past the
terminus published for the separate shorter 小5區 over the same
corridor.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Kunyang (BL21) and Taipei Nangang Exhibition
Center (BL23/BR24), the same pair confirmed for 小5區.[^tdx-bus] The
route runs a single subroute under one operator, 東南客運, with a
shorter weekend span, 0530–1600 against a fuller weekday 0530–1830.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S5; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S5 (22 stops):** MRT Kunyang -> Nangang High School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Jiuzhuang 1st Stop -> Jiuzhuang Elementary School -> Jiuzhuang -> Jiuzhang Stop 2 -> Tea Processing Demonstration Center -> Guangming Village -> Guangming Temple[^tdx-bus]

**S5 (25 stops):** Guangming Temple -> Tea Processing Demonstration Center -> Liangting -> Yu Historic House -> Yu Xiang Ju -> Dakeng -> Jiuzhang Stop 2 -> Jiuzhuang -> Jiuzhuang Elementary School -> Jiuzhuang 1st Stop -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> Nangang Elementary School -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Nangang High School -> MRT Kunyang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own shorter weekend span was found in this search, nor a stated reason for pairing 捷運昆陽站 with 光明寺 specifically as the route's own termini.
