---
title: "672 / 672"
summary: "600-series route: 672 (672)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "600-series numbered service (一般公車)"
    source: ebus-general
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
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
  - id: ebus-route-672-6cgqbt
    title: "672 route schedule"
    titleOriginal: "672班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100067200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 672 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “大鵬新城 - 民生社區”, the current head/last-departure field “[平日] 0520 - 2310 [假日] 0520 - 2310”, fare “兩段票”.[^ebus-route-672-6cgqbt]

The confirmed stop sequence runs from 中正環河路口, past 捷運秀朗橋站/尖山腳, through 景平路景德街口/捷運景平站, along 羅斯福金門街口/捷運古亭站/師大, past 溫州街口/長庚醫院, ending at 公教住宅/介壽國中/民生社區.[^tdx-bus] Twelve confirmed interchanges are recorded in the curated stop-ID join set: Zhongxiao Xinsheng (BL14/O07), Sun Yat-Sen Memorial Hall (BL17), Liuzhangli (BR07), Nanjing Fuxing (BR11/G16), Gongguan (G07), Taipower Building (G08), Guting (G09/O05), Xiulang Bridge (Y09) and Jingping (Y10), matching the same starting stretch confirmed for its own shorter 672區 sibling.[^tdx-bus] The route runs a single subroute under one operator, 首都客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 672; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**672 (39 stops):** Zhongzheng&Huanhe RdIntersection -> MRT Xiulang Bridge Sta -> Jianshanjiao -> Jingping Jingde Intersection -> MRT Jingping Sta -> ET Plaza -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Zhongxing Village 2 -> Zhongxing New Village -> Dehe Rd -> Xiulang Elementary School -> Yongyuan Rd -> Fuhe Bridge(Yongyuan Rd) -> MRT Gongguan Sta -> Taipower Building -> MRT Taipower Building Sta -> Roosevelt and Pucheng Intersection -> Roosevelt and Kinmen St Intersection -> MRT Guting Sta (Heping) -> National Taiwan Normal U -> NTNU Union Building 1 -> Wenzhou St Entrance -> Jinhua and Xinsheng Intersection -> Xinyi & Xinsheng Intersection -> Renai and Xinsheng Intersection -> MRT Zhongxiao Xinsheng Sta -> Guanghua Market -> Changan&SongJiang Intersection -> Changan E Rd Sec 2 -> Nanjing & Jianguo Intersection -> Nanjing & Longjiang Intersection -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Taipei Arena -> Chang-Gung Memorial Hospital -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Minsheng Activity Center[^tdx-bus]

**672 (33 stops):** Sanmin Rd Entrance -> Sanmin and Jiankang Intersection (Xisong High School) -> Jiankang New Village -> Changshou Park -> Tri-Servics General Hospital Songshan Branch -> Nanjing New Village -> Po Jen Hospital -> Taipei City Motor Vehicles Office (Guangfu) -> MRT Sun Yat-sen Memorial Hall Sta (Guangfu) -> Dr Sun Yat-sen Memorial Hall -> Citizens Housing -> Sanzhangli -> Guangfu S Rd Entrance -> Sanxing Elementary School (Linjiang St Night Market) -> George Vocational High School of Taipei -> MRT Liuzhangli (Keelung Rd) -> Heping High School -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> Fuhe Bridge(Linsen Rd) -> Yongyuan Rd -> Xiulang Elementary School -> Dehe Rd -> Zhongxing New Village -> Zhongxing Village 2 -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Nanshijiao(Jingping Rd) -> MRT Jingping Sta -> Jingping Jingde Intersection -> MRT Xiulang Bridge Sta -> Zhongzheng&Huanhe RdIntersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 大鵬新城 with 民生社區 specifically as the route's own termini, over a corridor confirming twelve separate rail interchanges, was found in this search.
