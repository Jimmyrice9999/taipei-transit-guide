---
title: BR2 / 棕2
summary: Brown-line feeder pilot route BR2 (棕2).
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
    note: Lists 棕2 under 捷運棕線接駁公車.
  - id: ebus-br2
    title: BR2 route schedule
    titleOriginal: 棕2班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114000200
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬芳社區–景美女中 corridor, service pattern and 欣欣客運木柵二站 contact.
---

## Classification

The official 大臺北公車 catalogue lists 棕2 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC — the full current schedule establishes the present route but no fetched primary establishes its opening, former alignment or renumbering.[^ebus-br2]
- Corridor decision: TBC — the current corridor is published, but no primary rationale for selecting it was found.[^ebus-br2]
- Unusual branch or short working: TBC.
- Operator changes: TBC — the current schedule names 欣欣客運木柵二站, but no dated transfer record was found.[^ebus-br2]
