---
title: O25 / 橘25
summary: Orange-line feeder route O25 (橘25).
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
    note: Lists 橘25 under 捷運橘線接駁公車.
  - id: ebus-o25
    title: O25 route schedule
    titleOriginal: 橘25班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–捷運三重國小站 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 橘25 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 蘆洲 - 捷運三重國小站, weekday-only service 0600–1800 with no holiday service, one-section fare and 三重客運蘆二站 as the service contact.[^ebus-o25]

The confirmed stop sequence starts at 蘆洲總站, runs past 捷運蘆洲站 and 仙公廟
into 三重, calling at 果菜市場 (the produce market) before ending at 捷運三重
國小站.[^tdx-bus] Three confirmed interchanges lie along the way: 捷運蘆洲站
(Luzhou, O54), 捷運台北橋站 (Taipei Bridge, O13) on the return working, and
捷運三重國小站 itself (Sanchong Elementary School, O50).[^tdx-bus] Its two
directions are not mirror images of each other — the return leg detours via
捷運台北橋站 and 正義重新路口, stops the outbound working does not
serve.[^tdx-bus] Its 三重客運蘆二站 operator contact is distinct from every
other 三重客運 dispatch point named on this project's other colour-orange
pages, one of several separate named stations the same operator runs across
this route family.[^ebus-o25] Weekday-only hours ending at 1800, with no
holiday service published, place it among the shorter-hours routes in this
project's colour-orange coverage rather than an all-day connection.[^ebus-o25]
Its 20-stop outbound and 32-stop return workings differ substantially,
reflecting the detour the return leg alone carries through 捷運台北橋站 and
正義重新路口.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
