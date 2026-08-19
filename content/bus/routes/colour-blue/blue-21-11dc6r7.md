---
title: BL21Sub / 藍21副
summary: Blue-line feeder route BL21Sub (藍21副).
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
    note: Lists 藍21副 under 捷運藍線接駁公車.
  - id: ebus-bl21sub
    title: BL21Sub route schedule
    titleOriginal: 藍21副班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002110
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–南港車站 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 藍21副 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止社后 - 南港車站, weekday-only service 0615–1900 with no holiday service, one-section fare and 光華巴士北峰站 as the service contact — the same termini and operator as plain 藍21 (`blue-21-3cqoqf`).[^ebus-bl21sub]

The confirmed stop sequence runs from 社后消防隊 in Xizhi, through 理明社區/
台北奇蹟/生活大國社區, then via 南陽街口/福德二路/環河市民活動中心 — a different
street path through 社后 than plain 藍21 takes — before joining the same
橫科/南港展覽館 corridor into 南港車站.[^tdx-bus] Two confirmed interchanges
are recorded in the curated stop-ID join set: Nangang (BL22) and Taipei
Nangang Exhibition Center, a Bannan–Wenhu interchange (BL23/BR24).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍21 remain TBC.[^tdx-bus] Whether 藍21副 is a later addition to relieve 藍21, a permanent alternative
alignment, or a peak-only supplement was not found in this search; neither
primary schedule page states what distinguishes the two beyond their
differing street path through 社后. The route length and a
headway-by-day-type figure also remain TBC, and no dated history for the
route or its relationship to plain 藍21 was found in this search beyond
what the schedule pages themselves state.
