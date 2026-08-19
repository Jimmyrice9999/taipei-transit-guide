---
title: R2 / 紅2
summary: Red-line feeder route R2 (紅2).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅2 under 捷運紅線接駁公車.
  - id: ebus-r2
    title: R2 route schedule
    titleOriginal: 紅2班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–捷運圓山站 corridor, service span, one-section fare and 光華巴士北峰站 contact.
---

## Classification and corridor

The official catalogue lists 紅2 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 汐止社后 - 捷運圓山站, weekday and holiday service 0600–2300, one-section fare and 光華巴士北峰站 as the service contact.[^ebus-r2]

At 44-45 stops each way, the confirmed stop sequence is one of the longest
in this batch: from 社后消防隊 in Xizhi, through 東湖/明湖 past a stop
literally named 捷運內湖站, along the whole 西湖/港墘/劍南路 stretch of Neihu,
across 自強隧道 into 大直, then down 中山北路 past 圓山大飯店, ending at 捷運
圓山站.[^tdx-bus] Nine confirmed interchanges are recorded in the curated
stop-ID join set — Dazhi (BR14), Jiannan Rd. (BR15), Xihu (BR16), Gangqian
(BR17), Wende (BR18), Neihu (BR19), Dahu Park (BR20), Huzhou (BR21) and
Yuanshan (R14) — effectively threading eight consecutive Wenhu Line
stations by road alongside a ninth on the Tamsui–Xinyi Line.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅2 was found in
this search. A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own weekday and holiday span statement.
No predecessor-route or renumbering history for 紅2 was located either.
