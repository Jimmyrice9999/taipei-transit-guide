---
title: BR11Sub / 棕11副
summary: Brown-line feeder pilot route BR11Sub (棕11副).
updated: 2026-08-15
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
    note: Lists 棕11副 under 捷運棕線接駁公車.
---

## Classification

The official 大臺北公車 catalogue lists 棕11副 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The TDX snapshot supplies the structural fields shown above; route history, corridor decision, unusual branch or short working, operator changes, route length and timetable fields remain TBC.[^tdx-bus]
