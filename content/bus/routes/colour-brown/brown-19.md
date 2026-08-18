---
title: BR19 / 棕19
summary: Brown-line feeder pilot route BR19 (棕19).
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
    note: Lists 棕19 under 捷運棕線接駁公車.
  - id: ebus-br19
    title: BR19 route information
    titleOriginal: 棕19路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?rid=16153&sec=0
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 捷運昆陽站–捷運大湖公園站 corridor, one-section fare, weekday/holiday service windows,東南客運內湖站 contact and the southern Neihu/Nangang stop sequence.
---

## Classification

The official 大臺北公車 catalogue lists 棕19 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC.
- Corridor decision: TBC — the current 捷運昆陽站–捷運大湖公園站 corridor is published, but its original rationale was not.[^ebus-br19]
- Unusual branch or short working: TBC — no dated branch or short-working history was found.[^ebus-br19]
- Operator changes: TBC — the current page names 東南客運內湖站, but no dated transfer record was found.[^ebus-br19]
