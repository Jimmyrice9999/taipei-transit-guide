---
title: BL37 / 藍37
summary: Blue-line feeder route BL37 (藍37).
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
    note: Lists 藍37 under 捷運藍線接駁公車.
  - id: ebus-bl37
    title: BL37 route schedule
    titleOriginal: 藍37班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 龍壽里–捷運板橋站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍37 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 龍壽里 - 捷運板橋站, weekday service 0535–2345, holiday service 0600–2345, one-section fare and 三重客運迴龍站 as the service contact.[^ebus-bl37]

At 38 stops each way, the confirmed stop sequence is one of the longer
routes in this batch: from 龍壽里 near 迴龍, past 捷運迴龍站/丹鳳國小, through
福營國中/福祿新城/大唐江山, into 樹林's 圳福里/濟安宮/沙崙里, then past 捷運亞東醫院站/
南雅站, ending at 捷運府中站/新北板橋公車站.[^tdx-bus] Four confirmed
interchanges are recorded in the curated stop-ID join set: Far Eastern
Hospital (BL05), Fuzhong (BL06), Banqiao (BL07) and Huilong (O21).[^tdx-bus]
TDX records three named subroutes, matching the schedule page's own
龍壽里(車機) and 新北板橋公車站(車機) short-working labels.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍37 or a stated reason for its own near-18-hour,
0535–2345 span was found in this search.[^ebus-bl37] A headway-by-day-type
figure is likewise absent from the primary schedule page. No
predecessor-route or renumbering history for 藍37 specifically was located
either, nor a
stated reason for the route's own three-way subroute split into a plain
working and two vehicle-triggered short workings.[^tdx-bus]
