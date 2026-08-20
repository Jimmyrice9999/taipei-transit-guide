---
title: BR6 / 棕6
summary: Brown-line feeder pilot route BR6 (棕6).
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
    note: Lists 棕6 under 捷運棕線接駁公車.
  - id: ebus-br6
    title: BR6 route information
    titleOriginal: 棕6路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?gb=1&routeid=0114000600
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 捷運動物園站–捷運市政府站 corridor, timetable, dog-friendly trips, 貓空 event headway note and 欣欣客運木柵二站 contact.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕6 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 捷運動物園站, past 貓纜動物園站/靜心高中, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Five confirmed interchanges are recorded in the curated stop-ID join set, the widest interchange count in this group: Taipei City Hall (BL18), Taipei Zoo (BR01), Wanfang Community (BR03), Wanfang Hospital (BR04) and Wanlong (G06).[^tdx-bus] The route runs 4 subroutes under a single operator, 欣欣客運木柵二站: a standard working and a 狗狗公車 (dog-friendly) working carrying the same 54-stop 動物園–市政府 corridor, each with its own inbound and outbound trip.[^ebus-br6][^tdx-bus]

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC — the full current page does not establish an opening date, former alignment or renumbering.[^ebus-br6]
- Corridor decision: TBC — the current 捷運動物園站–捷運市政府站 corridor is published, but its original rationale was not.[^ebus-br6]
- Unusual branch or short working: Partial — the page records dog-friendly trips and a current 貓空 special-event headway adjustment, not a dated branch history.[^ebus-br6]
- Operator changes: TBC — the current page names 欣欣客運木柵二站, but no dated transfer record was found.[^ebus-br6]
