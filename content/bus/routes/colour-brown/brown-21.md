---
title: BR21 / 棕21
summary: Brown-line feeder pilot route BR21 (棕21).
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
    note: Lists 棕21 under 捷運棕線接駁公車.
  - id: ebus-br21
    title: BR21 route and stop information
    titleOriginal: 棕21路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114002100
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 政大里–捷運市政府站 corridor, weekday-only service, the 不經政大御花園/經政大御花園 variants, the 兆如安養中心 short working and 欣欣客運富德站 contact.
  - id: pto-101-br21
    title: Taipei Public Transportation Office 2012 chronology
    titleOriginal: 臺北市公共運輸處大事紀要(101 年)
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/Download.ashx?n=MzQxNTE1MzUxMzcxLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1OTAvMzUwMjkxMi8zNDE1MTUzNTEzNzEucGRm
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official chronology recording the new 棕21 service between 政大里 and 捷運市政府站 on 16 July 2012.
---

## Classification

The official 大臺北公車 catalogue lists 棕21 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO chronology records the new service as 7月 16日 新闢棕 21 路(政大里─捷運市政府站) in 2012; an earlier opening record and the decision behind it remain TBC.[^pto-101-br21]
- Corridor decision: TBC — the chronology establishes the 2012 corridor, but not why it was selected.[^pto-101-br21]
- Unusual branch or short working: Partial — the current page records 不經政大御花園 and 經政大御花園 variants, including two departures beginning/ending at 兆如安養中心; no creation date or rationale for these workings was found.[^ebus-br21]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br21]
