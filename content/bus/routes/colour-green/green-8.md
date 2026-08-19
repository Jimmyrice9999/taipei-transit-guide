---
title: G8 / 綠8
summary: Green-line feeder route G8 (綠8).
updated: 2026-08-18
line: G
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠8 under 捷運綠線接駁公車.
  - id: ebus-g8
    title: G8 route schedule
    titleOriginal: 綠8班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 台北小城–中和 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 綠8 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 台北小城 - 中和, weekday and holiday service 0600–2230, one-section fare, weekday peak/off-peak headways of 15–20/20–30 minutes, holiday peak/off-peak headways of 20–30/20–30 minutes, and 新店客運碧潭站 as the service contact.[^ebus-g8]

The confirmed stop sequence is the longest and most-connected in this
project's colour-green coverage: starting at 台北小城, another Ankeng estate,
it combines 綠7's 安坑/安康-to-新店 leg with 綠3/綠6's 新店-to-中和 leg into one
continuous run, ending at 中和區公所.[^tdx-bus] Nine separately confirmed
interchange codes lie along the way — 捷運新店區公所站 (G02), 捷運七張站 (G03),
捷運大坪林站 (G04, also Circular Line Y07), 輕軌安康站 (Ankeng LRT, K06), and
捷運景安站 (Zhonghe–Xinlu Line O02, also Circular Line Y11) among them — more
than any other route in this batch.[^tdx-bus] Despite covering the combined
distance of two other routes end to end, it still charges the same flat
one-section fare as the much shorter G18 and G11 — the same pattern already
noted on 綠3, and consistent across this project's whole colour-green
coverage rather than a one-off.[^ebus-g8] Its schedule page is also the only
one in this batch to publish separate weekday and holiday headway bands —
15–20/20–30 minutes on weekdays against a flat 20–30 on holidays — where 綠6
and 綠7 state one peak/off-peak pair covering both day types.[^ebus-g8]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
