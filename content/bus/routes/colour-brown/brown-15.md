---
title: BR15 / 棕15
summary: Brown-line feeder pilot route BR15 (棕15).
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
    note: Lists 棕15 under 捷運棕線接駁公車.
  - id: ebus-br15
    title: BR15 route schedule
    titleOriginal: 棕15班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001500
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 富德–貓空纜車站 corridor, service span, one-section fare, 山區路段隨招隨停 note and 欣欣客運富德站 contact.
  - id: pto-107-br15
    title: April 2018 approved bus operating-plan adjustments
    titleOriginal: 107年4月份營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/458/relfile/22562/3499374/57acc21d-fdf2-4386-a9ab-cce8040fbae3.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording the addition of 政大(聯合醫院) and cancellation of 政大一 (往南) effective 26 April 2018.
  - id: pto-111-br15
    title: March 2022 approved bus operating-plan adjustments
    titleOriginal: 111年3月份營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/458/relfile/22562/3499374/42ca36d2-ba63-4cf6-aed5-8aa65218430c.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording the addition of 水鋼琴社區 (往北) for 棕15 and related routes effective 17 March 2022.
---

## Classification

The official 大臺北公車 catalogue lists 棕15 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO records the 2018 政大(聯合醫院) addition and 政大一 cancellation, and the 2022 水鋼琴社區 addition; opening and earlier alignment remain TBC.[^pto-107-br15][^pto-111-br15]
- Corridor decision: TBC — the current 富德–貓空纜車站 corridor is published, but its original rationale was not.[^ebus-br15]
- Unusual branch or short working: Partial — the current page records a safety-dependent 隨招隨停 mountain section, but not a dated branch history.[^ebus-br15]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br15]
