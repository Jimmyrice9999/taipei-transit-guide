---
title: BR5 / 棕5
summary: Brown-line feeder pilot route BR5 (棕5).
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
    note: Lists 棕5 under 捷運棕線接駁公車.
  - id: ebus-br5
    title: BR5 route information
    titleOriginal: 棕5路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114000500
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 萬芳社區–指南宮 corridor, the three weekday trips that detour via 指南實小 and the 東南客運萬芳站 contact.
  - id: pto-101-br5-adjustments
    title: March 2012 approved bus operating-plan adjustments
    titleOriginal: 101年3月份核定營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/public/Attachment/241216302476.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording the 棕5 stop-name change from 萬寧街一 to 萬寧山莊 effective 1 March 2012 and the addition of 政大附中 on the return trip effective 14 March 2012.
---

## Classification

The official 大臺北公車 catalogue lists 棕5 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO records a 2012 stop-name change and a return-trip stop addition, but the opening and earlier alignment remain TBC.[^pto-101-br5-adjustments]
- Corridor decision: TBC — the current route and its 指南實小 detour are published, but the original corridor rationale was not.[^ebus-br5]
- Unusual branch or short working: Partial — three weekday trips detour via 指南實小 and holidays do not, while the historical reason for that pattern is TBC.[^ebus-br5]
- Operator changes: TBC — the current page names 東南客運萬芳站, but no dated transfer record was found.[^ebus-br5]
