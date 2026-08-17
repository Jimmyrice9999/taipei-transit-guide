---
title: BR1 / 棕1
summary: Brown-line feeder pilot route BR1 (棕1).
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
    note: Lists 棕1 under 捷運棕線接駁公車.
  - id: ebus-br1
    title: BR1 route schedule
    titleOriginal: 棕1班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114000100
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 松山車站–松山機場 corridor, service pattern and 首都客運內湖站 contact.
  - id: dot-br1-shortening
    title: Minibus 10 scheduled to start service in Neihu
    titleOriginal: 市民小巴10路公車訂於98年8月3日通車營運，提供內湖地區市民便捷之大眾運輸服務
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://dot.gov.taipei/News_Content.aspx?n=230A79C0F27D6B8F&s=4232D242EAA4B05A
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official 2009 announcement saying Minibus 10 was created after 棕1 was shortened, to serve short trips for Mackay New Town and Xinming Road-area residents; it does not publish the prior 棕1 termini or a transfer record.
---

## Classification

The official 大臺北公車 catalogue lists 棕1 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the 2009 announcement records that 棕1 had been shortened before 市民小巴10 began, but the earlier route shape and shortening decision are TBC.[^dot-br1-shortening]
- Corridor decision: TBC for the original 棕1 decision; the replacement minibus announcement gives the short-trip needs it was intended to serve.[^dot-br1-shortening]
- Unusual branch or short working: TBC.
- Operator changes: TBC — the current schedule names 首都客運內湖站, but no dated operator-transfer record was found.[^ebus-br1]
