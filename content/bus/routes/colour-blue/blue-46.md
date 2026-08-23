---
title: BL46 / 藍46
summary: Blue-line feeder route BL46 (藍46).
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
    note: Lists 藍46 under 捷運藍線接駁公車.
  - id: ebus-bl46
    title: BL46 route schedule
    titleOriginal: 藍46班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 二鬮–捷運頂埔站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍46 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 二鬮 - 捷運頂埔站, weekday service 0600–2100, holiday service 0630–2030, one-section fare and 臺北客運三峽二站 as the service contact.[^ebus-bl46]

The confirmed stop sequence runs from 光武園區 near 二鬮, past 中央社區/明德
中學/大埔/中正路二段, through 溪墘/大同橋/台塑/安溪國中, then past 介壽里/員潭仔溝/
林厝/橫溪, ending at 捷運頂埔站.[^tdx-bus] Three confirmed interchanges are
recorded in the curated stop-ID join set: Dingpu (BL01/LB01), Mazutian
(LB02) and Changshoushan (LB03) — the same three stations 藍45 also
confirms along an overlapping 頂埔-area stretch, though 藍45 additionally
confirms a fourth, Yongning, that 藍46 does not.[^tdx-bus] The route runs a single
subroute under one operator, 臺北客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL46; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL46 (33 stops):** NCSIST-Guangwu Campus -> Jiali Community -> Erjiou -> Zhongyang Community -> Mingde Senior High School -> Dapu -> Zhongzheng Rd Sec 2 -> Cheliao -> XiQian -> DaTong Bridge 1 -> DaTong Bridge -> Formosa Plastics Corporation -> Anxi Junior High School -> Datong Rd -> Jieshou Village -> Jieshou Elementary School -> Yihua -> Jusheng Company -> Yuantanzigou -> Xinan Village -> Lincuo -> Hengxi -> Jieshou Rd Sec 3 -> Gas Sta -> Xibei Village -> MRT Changshoushan Sta -> Changshoushan -> Demen Temple -> Mazutian -> MRT Mazutian Sta(Taiyangcheng Community) -> Dingpu Elementary School -> Dingpu -> MRT Dingpu Sta[^tdx-bus]

**BL46 (34 stops):** Tucheng Industrial Dist -> Danuan Rd Entrance -> MRT Dingpu Sta -> Dingpu -> Dingpu Elementary School -> MRT Mazutian Sta(Taiyangcheng Community) -> Mazutian -> Demen Temple -> Changshoushan -> MRT Changshoushan Sta -> Xibei Village -> Gas Sta -> Jieshou Rd Sec 3 -> Hengxi -> Lincuo -> Xinan Village -> Yuantanzigou -> Jusheng Company -> Yihua -> Jieshou Village -> Datong Rd -> Anxi Junior High School -> Formosa Plastics Corporation -> DaTong Bridge -> DaTong Bridge 1 -> XiQian -> Cheliao -> Zhongzheng Rd Sec 2 -> Dapu -> Mingde Senior High School -> Zhongyang Community -> Erjiou -> Jiali Community -> NCSIST-Guangwu Campus[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍46 or a stated reason for pairing 二鬮 with 捷運頂埔站 was
found in this search, nor any explanation of why 藍45 and 藍46 overlap so
closely along the 頂埔 stretch while starting from entirely different
districts, nor a predecessor-route or renumbering history for 藍46 was located in
this search, nor a stated reason for the operator, 臺北客運, running a
route so far into 三峽/土城 rather than closer to its own namesake city.
