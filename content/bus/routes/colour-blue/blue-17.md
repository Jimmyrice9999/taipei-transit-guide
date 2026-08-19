---
title: BL17 / 藍17
summary: Blue-line feeder route BL17 (藍17).
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
    note: Lists 藍17 under 捷運藍線接駁公車.
  - id: ebus-bl17
    title: BL17 route schedule
    titleOriginal: 藍17班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五福新村–捷運永寧站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍17 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 五福新村 - 捷運永寧站, weekday service 0530–2200, holiday service 0600–2200, one-section fare and 臺北客運五福站 as the service contact.[^ebus-bl17]

The confirmed stop sequence runs from 五福新村 in Banqiao, through 江子翠/
捷運新埔站/板橋花市, past 西安里/海山高中/莒光路, into Tucheng along 安和國小/
金城路/明德路 past 清水高中/手信坊文化館, ending at 承天路 near 承天禪寺.[^tdx-bus]
Six confirmed interchanges are recorded in the curated stop-ID join set:
Yongning (BL02), Tucheng (BL03), Xinpu (BL08), Jiangzicui (BL09), Banxin
(Y15) and Xinpu Minsheng (Y17).[^tdx-bus] The route runs a single subroute
under one operator, 臺北客運, with no recorded holiday variant or short
working.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] Whether the route's six confirmed interchanges reflect a deliberate
design to link Banqiao, Xinpu and Tucheng's own MRT stations, or are
incidental to a corridor chosen for other reasons, was not found in this
search. The route length and a headway-by-day-type figure also remain
TBC, and no dated history — predecessor route, renumbering, or corridor
change — was found for 藍17 in this search, nor any stated reason for the route's own choice of 承天路, rather than one
of its confirmed MRT interchanges, as its Tucheng terminus.
