---
title: BL51 / 藍51
summary: Blue-line feeder route BL51 (藍51).
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
    note: Lists 藍51 under 捷運藍線接駁公車.
  - id: ebus-bl51
    title: BL51 route schedule
    titleOriginal: 藍51班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112005100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運昆陽站–東湖安泰里 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍51 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 捷運昆陽站 - 東湖安泰里, weekday service 0600–1850, holiday service 0640–1850, one-section fare and 東南客運內湖站 as the service contact — sharing its operator with 藍50.[^ebus-bl51]

The confirmed stop sequence runs from 捷運昆陽站, past 南港機廠/捷運南港站/
台北生技園區/國家文官學院, through 捷運南港展覽館站/捷運南港軟體園區站, into Neihu's
東湖/五分社區/康樂街/安泰公園, ending at 安泰街(康樂橋下).[^tdx-bus] Five confirmed
interchanges are recorded in the curated stop-ID join set: Kunyang (BL21),
Nangang (BL22), Taipei Nangang Exhibition Center, a Bannan–Wenhu
interchange (BL23/BR24), Donghu (BR22) and Nangang Software Park
(BR23).[^tdx-bus] The route runs a single subroute under one operator,
東南客運, the same company that runs 藍50.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL51; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B51 (19 stops):** MRT Kunyang -> Ministry of Health and Welfare -> Nangang Depot -> MRT Nangang Sta -> Taipei Bioinnovation Park -> National Academy of Civil Service -> MRT TWTC Nangang Exhibition Hall (Jingmao 2) -> MRT Nangang Software Park Sta -> MRT Donghu Sta (Nanhu High School) -> Wufen Community -> Donghu Elementary School -> Donghu Community -> Kangle St -> Donghu Junior High School -> Antai Park -> Antai Village 1 -> Antai St -> Antai St Lane129 -> Antai St (Kangle Bridge)[^tdx-bus]

**B51 (15 stops):** Antai  Community -> Antai Village -> Donghu Junior High School -> Kangle St -> Donghu Community -> Donghu Elementary School -> Wufen Community -> MRT Donghu Sta (Nanhu High School) -> MRT Nangang Software Park Sta -> MRT TWTC Nangang Exhibition Hall (Jingmao 2) -> Nat'l Civil Service Institute -> Taipei Bioinnovation Park -> MRT Nangang Sta -> Nangang Depot -> MRT Kunyang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍51 was found
in this search, nor a stated reason for pairing 捷運昆陽站 with 東湖安泰里
specifically as the route's own termini.[^ebus-bl51] A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday 0600–1850 and holiday 0640–1850 span statement.[^ebus-bl51] No
predecessor-route or renumbering history for 藍51 specifically was
located, nor a stated reason for confirming five interchanges along a corridor
entirely within Nangang and eastern Neihu, more than the single
interchange 藍50 confirms over a comparably short distance.
