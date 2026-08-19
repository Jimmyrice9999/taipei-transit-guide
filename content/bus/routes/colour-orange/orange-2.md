---
title: O2 / 橘2
summary: Orange-line feeder route O2 (橘2).
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
    note: Lists 橘2 under 捷運橘線接駁公車.
  - id: ebus-o2
    title: O2 route schedule
    titleOriginal: 橘2班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中和–秀山 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘2 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 中和 - 秀山, weekday service 0550–2300, holiday service 0600–2300, one-section fare and 臺北客運中和站 as the service contact.[^ebus-o2]

The confirmed stop sequence runs from 中和站, past 雙和醫院 (Shuang Ho
Hospital) and 捷運景安站, through 永和's 華泰新城/永安市場 area, ending at
秀山站 near 秀朗國小.[^tdx-bus] Two confirmed interchanges lie along the way:
捷運景安站 (Jing'an, served by both the Zhonghe–Xinlu Line as O02 and the
Circular Line as Y11) and 捷運永安市場站 (Yong'an Market, O03).[^tdx-bus] Its
full 0550–2300 span, seven days a week, is longer than several other routes
in this project's colour-orange coverage that run weekday-only or
commuter-hours-only schedules — 橘10, 橘12 and 橘22 among them.[^ebus-o2]
Passing 雙和醫院 (Shuang Ho Hospital) partway along without a stated hospital
detour or reservation clause, unlike some hospital-adjacent stops recorded
elsewhere in this project's bus coverage, suggests it is simply on this
route's direct alignment rather than a purpose-built medical
shuttle.[^tdx-bus] Its 23-stop outbound and 20-stop return workings differ
by three stops, a modest asymmetry compared with some other routes in this
project's colour-orange coverage.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
