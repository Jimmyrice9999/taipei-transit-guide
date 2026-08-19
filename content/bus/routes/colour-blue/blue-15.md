---
title: BL15 / 藍15
summary: Blue-line feeder route BL15 (藍15).
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
    note: Lists 藍15 under 捷運藍線接駁公車.
  - id: ebus-bl15
    title: BL15 route schedule
    titleOriginal: 藍15班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止–捷運昆陽站 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 藍15 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止 - 捷運昆陽站, weekday and holiday service 0540–0010, one-section fare, weekday peak/off-peak headways of 5–8/8–12 minutes, holiday peak/off-peak headways of 10/15 minutes, and 中興巴士汐止站 as the service contact.[^ebus-bl15]

The confirmed stop sequence runs from 東方山河社區 in outer Xizhi, past 崇義
高中/汐止後車站/秀峰高中 through the town centre, along 忠孝東路 past 東方科學
園區/遠東世界中心 into Nangang, through 南港展覽館/南港/南港高工, then south past
南港行政中心/台肥新村 to end at 捷運昆陽站.[^tdx-bus] Two confirmed interchanges
are recorded in the curated stop-ID join set: Kunyang (BL21) and Taipei
Nangang Exhibition Center, itself a Bannan–Wenhu interchange (BL23/BR24).[^tdx-bus] TDX records a second, near-identical subroute named 藍15寵物公車
(pet bus), sharing the same stop sequence under the same operator,
中興巴士.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] What distinguishes 藍15寵物公車 operationally from the plain 藍15 working —
whether it runs specific departures, a different vehicle, or a booking
requirement — was not found in this search. The route length also remains
TBC beyond the schedule page's own headway figures, and no dated history
for the route was found in this search.
