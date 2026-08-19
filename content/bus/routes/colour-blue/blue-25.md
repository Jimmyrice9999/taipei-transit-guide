---
title: BL25 / 藍25
summary: Blue-line feeder route BL25 (藍25).
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
    note: Lists 藍25 under 捷運藍線接駁公車.
  - id: ebus-bl25
    title: BL25 route schedule
    titleOriginal: 藍25班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中華科技大學–捷運昆陽站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍25 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 中華科技大學 - 捷運昆陽站, weekday and holiday service 0540–0020, one-section fare and 大有巴士興中站 as the service contact.[^ebus-bl25]

The confirmed stop sequence runs from 中華科技大學 in outer Nangang, past
軍人公墓/胡適公園, through 中央研究院 (Academia Sinica) and 南港水廠, then along
研究院路 to end at 捷運昆陽站.[^tdx-bus] Two confirmed interchanges are
recorded in the curated stop-ID join set: Kunyang (BL21) and Nangang
(BL22).[^tdx-bus] The route runs a single subroute under one operator,
大有巴士, with a near-24-hour span, 0540–0020, on both weekday and
holiday.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍25 was found in this search, nor any stated reason for
routing past Academia Sinica rather than a more direct street between its
two termini. A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own near-24-hour service-span
statement.[^ebus-bl25] No predecessor-route or renumbering history for
藍25 was located either, nor a stated reason for pairing 中華科技大學 with 捷運昆陽站 as the route's own
Nangang terminus.
