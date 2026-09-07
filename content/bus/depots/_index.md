---
title: Bus depots and operating sites
description: Sourced bus stations, dispatch sites and charging-depot procurements, with capacity and opening gaps left visible.
order: 2
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports operator and route associations; it contains no depot field.
  - id: chiayi-bus-brt-query
    title: Chiayi BRT real-time information and stop list
    titleOriginal: BRT公車動態系統
    publisher: Chiayi Bus Co., Ltd. (嘉義汽車客運股份有限公司)
    url: https://www.cibus.com.tw/brt3
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page's stop tables name the rear-station transfer centre and HSR Chiayi Station.
  - id: chiayi-bus-brt-current
    title: Chiayi BRT current state
    titleOriginal: 嘉義BRT現況
    publisher: Chiayi Bus Co., Ltd. (嘉義汽車客運股份有限公司)
    url: https://www.cibus.com.tw/brt2
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page publishes corridor length, route segmentation, displayed stop count and low-floor accessibility.
---

TDX has no depot or garage field, so these are published only where an operator or government document names a site [^tdx-bus-operator-pull].

- [Danan Guandu charging depot](/bus/depots/guandu-danan/) — a Danan procurement specification for 74 parking spaces and charging classes; completion is not verified.
- [San Chung Bus operating sites](/bus/depots/sanchung-operating-sites/) — 16 dispatch sites and two maintenance yards named by the operator; individual capacities and opening dates are TBC.
- [Taipei Bus stations and facilities](/bus/depots/taipei-bus-stations/) — the operator’s station page publishes addresses and route allocations, while capacity and opening dates remain TBC.
  - [Keelung Transfer Station](/bus/depots/keelung-transfer-station/) — the city’s two-zone terminal notice, named operators and the separate railway-station bus-stop boundary.
- [Chiayi rear-station transfer centre](/bus/depots/chiayi-rear-station-transfer-centre/) — Chiayi Bus’s published BRT stop relationship, corridor metrics and explicit gap between a named stop and a confirmed timed rail interchange.[^chiayi-bus-brt-query][^chiayi-bus-brt-current]
- [Depot electrification and charging infrastructure](/bus/depots/charging-infrastructure/) — no national depot-charger registry exists, but named installations show buses sharing an MRT depot's power draw by night, rationed charging bays, and a public-EV-charger boom that mostly isn't measured against buses at all.

A route association is not a depot allocation. Where a source publishes a station list but not route-by-site assignments, this index keeps that distinction rather than guessing from endpoints [^tdx-bus-operator-pull].
