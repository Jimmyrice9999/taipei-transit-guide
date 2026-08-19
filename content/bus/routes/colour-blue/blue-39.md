---
title: BL39 / 藍39
summary: Blue-line feeder route BL39 (藍39).
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
    note: Lists 藍39 under 捷運藍線接駁公車.
  - id: ebus-bl39
    title: BL39 route schedule
    titleOriginal: 藍39班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–南港車站 corridor, service span, fare, departure counts and operator contact.
---

## Classification and corridor

The official catalogue lists 藍39 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止社后 - 南港車站, weekday service 0600–2330 with 45 departures, holiday service 0600–2330 with 36 departures, one-section fare and 光華巴士北峰站 as the service contact.[^ebus-bl39]

The confirmed stop sequence runs from 社后消防隊 in Xizhi, through 理明社區/
台北奇蹟/人情味小鎮/福德一路口, past 半島花園/山光樟樹二路330巷口/開山宮/樟樹國小/
樟樹國際實中, then via 工建路/中興路/樟樹灣 — a fourth distinct street path
through the 社后/樟樹 area alongside 藍21/藍21副/藍23's own three — before
joining the same 橫科/南港展覽館 corridor into 南港車站/南港行政中心.[^tdx-bus] Two
confirmed interchanges are recorded in the curated stop-ID join set:
Nangang (BL22) and Taipei Nangang Exhibition Center, a Bannan–Wenhu
interchange (BL23/BR24).[^tdx-bus] The route runs a single subroute under
one operator, 光華巴士, the same company that runs 藍21, 藍21副 and 藍23.
[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍39, nor a
stated reason for 光華巴士 running four parallel routes through 社后 rather
than one route with variants, was found in this search. The route length
and a headway-by-day-type figure also remain TBC beyond the schedule
page's own weekday/holiday departure counts.
