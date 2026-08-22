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
---

TDX has no depot or garage field, so these are published only where an operator or government document names a site [^tdx-bus-operator-pull].

- [Danan Guandu charging depot](/bus/depots/guandu-danan/) — a Danan procurement specification for 74 parking spaces and charging classes; completion is not verified.
- [San Chung Bus operating sites](/bus/depots/sanchung-operating-sites/) — 16 dispatch sites and two maintenance yards named by the operator; individual capacities and opening dates are TBC.
- [Taipei Bus stations and facilities](/bus/depots/taipei-bus-stations/) — the operator’s station page publishes addresses and route allocations, while capacity and opening dates remain TBC.

A route association is not a depot allocation. Where a source publishes a station list but not route-by-site assignments, this index keeps that distinction rather than guessing from endpoints [^tdx-bus-operator-pull].
