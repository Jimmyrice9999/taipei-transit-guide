---
title: BL23 / 藍23
summary: Blue-line feeder route BL23 (藍23).
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
    note: Lists 藍23 under 捷運藍線接駁公車.
  - id: ebus-bl23
    title: BL23 route schedule
    titleOriginal: 藍23班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–捷運昆陽站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍23 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止社后 - 捷運昆陽站, weekday service 0550–2330, holiday service 0600–2330, one-section fare and 光華巴士北峰站 as the service contact.[^ebus-bl23]

The confirmed stop sequence runs from 福德二路 in Xizhi, through 理明社區/
台北奇蹟/生活大國社區, then via 樟江大橋/半島花園/樟樹國小 — a third distinct
street path through the 社后/樟樹 area, alongside 藍21 and 藍21副's own two
paths — before joining the same 橫科/南港展覽館 corridor and continuing past
南港 into 昆陽.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Kunyang (BL21) and Taipei Nangang Exhibition
Center, a Bannan–Wenhu interchange (BL23/BR24).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] With 藍21, 藍21副 and 藍23 all sharing the same 汐止社后 origin area and the
same 光華巴士 operator but three distinct street paths through it, why the
company runs three separate routes rather than one with variants was not
found in this search. The route length and a headway-by-day-type figure
also remain TBC, and no dated history for the route or its relationship to
its two siblings was found in this search, including which of the three
routes, if any, was the original before the others were added.
