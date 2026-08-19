---
title: BL44Ext / 藍44延
summary: Blue-line feeder route BL44Ext (藍44延).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍44延 under 捷運藍線接駁公車.
  - id: ebus-bl44ext
    title: BL44Ext route schedule
    titleOriginal: 藍44延班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004470
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 樹林–南天母廣場 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 藍44延 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 樹林 - 南天母廣場, weekday-only service 0810–2040 with no holiday service, one-section fare and 臺北客運樹林站 as the service contact — the same 樹林 origin and operator as plain 藍44 (`blue-44-1b76ti2`), with a different destination.[^ebus-bl44ext]

The confirmed stop sequence follows plain 藍44's own route through 濟安宮/
樹林火車站/樹林中學/中華中學, past its 捷運永寧站 terminus, then continues via
承天路/科技公司/登山口, ending at 南天母廣場 — the same extension pattern as
藍43延南天母's own relationship to plain 藍43.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Yongning (BL02),
matching plain 藍44's own terminus rather than this route's actual
end.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍44 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for the 南天母
extension, nor a stated reason for its own weekday-only 0810–2040 span
with no holiday service, was found in this search. A headway-by-day-type
figure and the route length also remain TBC, and no predecessor-route or
renumbering history for either 藍44延 or plain 藍44 was located, nor a
stated reason for the "延" (extension) naming used here matching the same
convention seen on 藍43延南天母 elsewhere in this batch.
