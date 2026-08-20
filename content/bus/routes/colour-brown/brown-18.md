---
title: BR18 / 棕18
summary: Brown-line feeder pilot route BR18 (棕18).
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
    note: Lists 棕18 under 捷運棕線接駁公車.
  - id: ebus-br18
    title: BR18 route schedule and stop information
    titleOriginal: 棕18班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001800
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 政治大學–松山車站 corridor, service span, one-section fare, 欣欣客運富德站 contact and the standard/經松山車站 service variant.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕18 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 政大, past 政大(聯合醫院)/大誠高中, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei City Hall (BL18) and Taipei Zoo (BR01).[^tdx-bus] The route runs 4 subroutes under a single operator, 欣欣客運富德站: standard trips and a 經松山車站 (via Songshan Station) variant, each with its own inbound and outbound working, extending the standard 政大–市政府 corridor east to 松山車站.[^ebus-br18][^tdx-bus] The standard outbound working covers 22 stops; the 經松山車站 outbound working covers 29, the difference being the eastward extension past City Hall.[^tdx-bus] Both variants share the same 政大 origin and the same two confirmed interchanges.

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC.
- Corridor decision: TBC — the current 政治大學–松山車站 corridor is published, but its original rationale was not.[^ebus-br18]
- Unusual branch or short working: Partial — the page distinguishes standard trips from 棕18經松山車站 trips, but gives no creation date or rationale for the variant.[^ebus-br18]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br18]
