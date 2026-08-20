---
title: BR7 Jianye Rd. / 棕7建業路
summary: Brown-line feeder pilot route BR7 Jianye Rd. (棕7建業路).
updated: 2026-08-17
line: BR
facts:
  - label: Service class
    value: MRT brown-line feeder
    source: ebus-brown
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
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports normalized route and stop structure; route length and timetable fields are absent from the committed bus layer.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕7建業路 under 捷運棕線接駁公車.
  - id: ebus-br7-jianye
    title: BR7 Jianye Road route information
    titleOriginal: 棕7建業路路線資訊
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?rid=17940&sec=1
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 新店–臺北市政府 corridor, limited weekday/holiday departures, 建業路 stops and 臺北客運新店站 contact.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕7建業路 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 新店站, past 彩蝶別墅/大坪頂, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei City Hall (BL18) and Muzha (BR02) — the same pair confirmed for plain 棕7 and for 棕7綠野香坡, since all three share the 新店–市政府 corridor's Muzha and City Hall ends.[^tdx-bus] The route runs 2 subroutes under a single operator, 臺北客運新店站. The 建業路 (Jianye Road) suffix marks the stop pattern that routes via Jianye Road rather than the parent identity's own alignment through that section of Xindian.[^ebus-br7-jianye]

## Research status

The TDX snapshot supplies the structural fields shown above; route length remains TBC where that layer has no field.[^tdx-bus]

- Route history: TBC — the full current page does not establish an opening date, former alignment or renumbering.[^ebus-br7-jianye]
- Corridor decision: TBC — the current 新店–臺北市政府 corridor and 建業路 section are published, but the original rationale was not.[^ebus-br7-jianye]
- Unusual branch or short working: Partial — the page publishes limited weekday and holiday departures for this 建業路 variant, but not when it began or why.[^ebus-br7-jianye]
- Operator changes: TBC — the current page names 臺北客運新店站, but no dated transfer record was found.[^ebus-br7-jianye]
