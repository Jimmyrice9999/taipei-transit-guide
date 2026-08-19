---
title: BL5 / 藍5
summary: Blue-line feeder route BL5 (藍5).
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
    note: Lists 藍5 under 捷運藍線接駁公車.
  - id: ebus-bl5
    title: BL5 route schedule
    titleOriginal: 藍5班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 吳興街–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍5 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 吳興街 - 捷運市政府站, weekday service 0535–0030, holiday service 0545–0030, one-section fare and 大都會客運松德站 as the service contact.[^ebus-bl5]

The confirmed stop sequence climbs from 吳興街站 up 拇指山登山口/景雲街/公園/
網球場, past 挹翠山莊/糶米公園/泰和公園, before descending back to 吳興街站 and
running east along 松仁路/信義國中/世貿中心, ending at 捷運市政府站.[^tdx-bus] One
confirmed interchange is recorded in the curated stop-ID join set: Taipei
City Hall (BL18), matching the route's own terminus.[^tdx-bus] TDX records
four named subroutes — 藍5, 藍5去程半, 藍5返程半 and 藍5去程不上山往MRT市府 — the
last skipping the 拇指山 hillside loop entirely to run direct to the
terminus.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍5 or its own
near-19-hour, 0535–0030 span was found in this search. Nor was any stated
reason found for why the hillside loop past 拇指山登山口 exists as a separate
subroute choice rather than always being run, and no predecessor-route or
renumbering history for 藍5 was located either. A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday and holiday span statements.
