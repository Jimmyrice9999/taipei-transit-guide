---
title: BR7 / 棕7
summary: Brown-line feeder pilot route BR7 (棕7).
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
    note: Lists 棕7 under 捷運棕線接駁公車.
  - id: ebus-br7
    title: BR7 route schedule
    titleOriginal: 棕7班表
    publisher: Taipei City and New Taipei City Public Transportation Offices (臺北市政府公共運輸處、新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0414000700
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新店–臺北市政府 corridor, service span, headways, 綠野香坡 trip pattern and 臺北客運新店站 contact.
---

## Classification

The official 大臺北公車 catalogue lists 棕7 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The TDX snapshot supplies the structural fields shown above; route length remains TBC where that layer has no field.[^tdx-bus]

- Route history: TBC — the full current schedule does not establish an opening date, former alignment or renumbering.[^ebus-br7]
- Corridor decision: TBC — the current 新店–臺北市政府 corridor is published, but its original rationale was not.[^ebus-br7]
- Unusual branch or short working: Partial — the page publishes a 綠野香坡 trip pattern, but not when it began or why.[^ebus-br7]
- Operator changes: TBC — the current page names 臺北客運新店站, but no dated transfer record was found.[^ebus-br7]
