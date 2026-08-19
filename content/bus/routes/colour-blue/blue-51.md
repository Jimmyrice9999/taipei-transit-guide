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
