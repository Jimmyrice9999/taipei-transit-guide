---
title: BR11Sub / 棕11副
summary: Brown-line feeder pilot route BR11Sub (棕11副).
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
    note: Lists 棕11副 under 捷運棕線接駁公車.
  - id: ebus-br11sub
    title: BR11Sub route and stop information
    titleOriginal: 棕11副路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114001110
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 富德–福興路 corridor, timetable, one-section fare and 欣欣客運富德站 contact.
  - id: pto-101-br11sub
    title: Taipei Public Transportation Office 2012 chronology
    titleOriginal: 臺北市公共運輸處大事紀要(101 年)
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/Download.ashx?n=MzQxNTE1MzUxMzcxLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1OTAvMzUwMjkxMi8zNDE1MTUzNTEzNzEucGRm
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official chronology recording the 棕11副線 extension to 文山區福興路 on 4 August 2012.
  - id: pto-102-br11sub-stops
    title: November 2013 supplementary approved bus operating-plan adjustments
    titleOriginal: 102年11月份營運計畫調整(補充)
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/public/Attachment/412316222945.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording that 棕11(含副) cancelled the 萬壽橋頭(木柵) stop effective 31 December 2013.
---

## Classification

The official 大臺北公車 catalogue lists 棕11副 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The TDX snapshot supplies the structural fields shown above; route length remains TBC where that layer has no field.[^tdx-bus]

- Route history: Partial — the PTO chronology records the extension to 文山區福興路 on 4 August 2012, and a 2013 stop cancellation also covers the sub-line; the opening and earlier alignment remain TBC.[^pto-101-br11sub][^pto-102-br11sub-stops]
- Corridor decision: TBC — the current 富德–福興路 corridor is published, but the original rationale was not.[^ebus-br11sub]
- Unusual branch or short working: Partial — the current route is the 福興路 variant, but the reason for the variant is not recorded in the checked sources.[^ebus-br11sub][^pto-101-br11sub]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br11sub]
