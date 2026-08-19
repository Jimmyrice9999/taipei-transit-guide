---
title: O26 / 橘26
summary: Orange-line feeder route O26 (橘26).
updated: 2026-08-19
line: O
facts:
  - label: Service class
    value: MRT orange-line feeder
    source: ebus-orange
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
  - id: ebus-orange
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 橘26 under 捷運橘線接駁公車.
  - id: ebus-o26
    title: O26 route schedule
    titleOriginal: 橘26班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 東昇公園–捷運迴龍站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘26 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 東昇公園 - 捷運迴龍站, weekday service 0530–2200, holiday service 0600–2100, one-section fare and 三重客運樹林站 as the service contact.[^ebus-o26]

The confirmed stop sequence starts at 東昇公園 in 樹林 (Shulin), passes 樹林
後火車站 (Shulin's rear train-station entrance) and a run of 武林國小/工業區
stops, then crosses into 迴龍 to end at 捷運迴龍站.[^tdx-bus] The one confirmed
interchange, 捷運迴龍站 (Huilong, O21), sits at the terminus.[^tdx-bus] Naming
Shulin's own TRA station by its back entrance rather than the station itself
is consistent with the route serving that side of the station specifically,
though the schedule page does not state that reasoning.[^tdx-bus] Its
三重客運樹林站 operator contact is the only 樹林-named dispatch point in this
project's colour-orange coverage, distinct from the several 三重客運 stations
elsewhere in the batch.[^ebus-o26] The route also directly overlaps 橘21's
own 迴龍/丹鳳 corridor for several stops — 丹鳳國小(新北大道), 鳳山街口, 青山路口,
雙鳳福德宮, 丹鳳派出所 — before the two diverge toward different
termini.[^tdx-bus] Its 25-stop outbound and 21-stop return workings are
close but not identical in length, consistent with minor routing
differences rather than a symmetric there-and-back service.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
