---
title: R28Sub / 紅28直
summary: Red-line feeder route R28Sub (紅28直).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅28直 under 捷運紅線接駁公車.
  - id: ebus-r28-sub
    title: R28Sub route schedule
    titleOriginal: 紅28直班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002830
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡江大學–捷運淡水站 corridor, weekday service span, holiday suspension, one-section fare, 淡水客運淡水站 contact and school-calendar note.
---

## Classification and corridor

The official catalogue lists 紅28直 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡江大學 - 捷運淡水站, weekday service 0624–1930, no holiday service, one-section fare and 淡水客運淡水站 as the service contact. It notes that the route is suspended on holidays and during university winter and summer vacations.[^ebus-r28-sub]

At just four stops outbound, the confirmed stop sequence is among the
shortest in this batch: 淡江大學、淡江大學城、鄧公國小、鄧公里, a more direct path
than plain 紅28's own five-stop pattern, dropping 文宏廣場/淡江柏園 in favour
of 鄧公國小.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Tamsui (R28).[^tdx-bus] The
route runs a single subroute under one operator, 淡水客運, the same
company that runs plain 紅28.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅28直 or its
relationship to plain 紅28 was found in this search.[^tdx-bus] A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday-only 0624–1930 span, narrower than plain 紅28's own weekday and
holiday service.[^ebus-r28-sub] No predecessor-route or renumbering history for 紅28直
was located either, nor a stated reason for its own name, "直" (direct),
against the schedule's own stop-name evidence for a shorter path.[^tdx-bus]
