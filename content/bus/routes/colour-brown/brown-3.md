---
title: BR3 / 棕3
summary: Brown-line feeder pilot route BR3 (棕3).
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
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕3 under 捷運棕線接駁公車.
  - id: ebus-br3
    title: BR3 route information
    titleOriginal: 棕3路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114000300
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 富德–萬美社區 corridor, 欣欣客運富德站 contact and special-event headway response in the Maokong-area section.
---

## Classification

The official 大臺北公車 catalogue lists 棕3 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC — the full current route page does not establish the opening, former alignment or renumbering.[^ebus-br3]
- Corridor decision: TBC — the current 富德–萬美社區 corridor and the operational response to Maokong-area special events are published, but not the original planning rationale.[^ebus-br3]
- Unusual branch or short working: TBC — the page records a special-event headway adjustment, not a dated branch or short-working history.[^ebus-br3]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br3]
