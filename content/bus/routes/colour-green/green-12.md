---
title: G12 / 綠12
summary: Green-line feeder route G12 (綠12).
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
    note: Lists 綠12 under 捷運綠線接駁公車.
  - id: ebus-g12
    title: G12 route schedule
    titleOriginal: 綠12班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 坪林–捷運新店站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠12 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 坪林 - 捷運新店站, weekday and holiday service 0600–1915, a two-section fare and 新店客運碧潭站 as the service contact.[^ebus-g12]

The confirmed stop sequence is the longest and most rural in this project's
colour-green coverage: it starts at 坪林站, the tea-growing township deep in
New Taipei's mountains, calling at 坪林遊客中心 (the Pinglin Tea Museum visitor
centre) before threading nearly sixty stops of mountain hamlets — 石空里,
棲霞山, 十股寮, 銀河洞 among them — down through 青潭 to 新店 (Xindian), ending
at 捷運新店站.[^tdx-bus] Despite that length, only the Xindian terminus itself
is a confirmed MRT interchange (G01) — every intermediate stop is outside
the curated join set.[^tdx-bus] The two-section fare marks it as covering a
genuinely longer distance than the flat one-section feeders that dominate
this project's colour-green coverage, consistent with a route running the
full distance from a mountain township to the metro rather than a short
last-mile connection.[^ebus-g12] The route's own stop sequence names 銀河洞
(Yinhe Cave, a waterfall and temple site) and 國史館 (the Academia Historica's
branch archive) along its return leg — landmarks that appear on no other
route in this project's colour-green coverage.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
