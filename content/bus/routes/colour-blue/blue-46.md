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

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍46 or a stated reason for pairing 二鬮 with 捷運頂埔站 was
found in this search, nor any explanation of why 藍45 and 藍46 overlap so
closely along the 頂埔 stretch while starting from entirely different
districts, nor a predecessor-route or renumbering history for 藍46 was located in
this search, nor a stated reason for the operator, 臺北客運, running a
route so far into 三峽/土城 rather than closer to its own namesake city.
