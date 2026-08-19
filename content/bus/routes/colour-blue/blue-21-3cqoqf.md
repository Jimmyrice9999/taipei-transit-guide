---
title: BL21 / 藍21
summary: Blue-line feeder route BL21 (藍21).
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
    note: Lists 藍21 under 捷運藍線接駁公車.
  - id: ebus-bl21
    title: BL21 route schedule
    titleOriginal: 藍21班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–南港車站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍21 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止社后 - 南港車站, weekday and holiday service 0600–2130, one-section fare and 光華巴士北峰站 as the service contact.[^ebus-bl21] TDX carries a separate 藍21副 record (canonical slug `blue-21-11dc6r7`) with the same published termini and operator; their relationship is TBC.

The confirmed stop sequence runs from 社后消防隊 in Xizhi, through 理明社區/
台北奇蹟/生活大國社區, then via 社后派出所/中興路/樟樹灣 — a different street path
through 社后 than 藍21副 takes — before joining the same 橫科/南港展覽館
corridor into 南港車站.[^tdx-bus] Two confirmed interchanges are recorded in
the curated stop-ID join set: Nangang (BL22) and Taipei Nangang Exhibition
Center, a Bannan–Wenhu interchange (BL23/BR24) — the same two stations
藍21副 confirms, despite the differing street path through 社后.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍21副 remain TBC.[^tdx-bus] Neither primary schedule page states what distinguishes 藍21 from 藍21副
beyond their differing street path through 社后, so this project treats
them as two parallel routes rather than one route with a documented
variant. The route length and a headway-by-day-type figure also remain TBC, and no
dated history for either route was found in this search.
