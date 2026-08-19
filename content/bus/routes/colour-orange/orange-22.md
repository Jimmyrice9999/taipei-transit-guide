---
title: O22 / 橘22
summary: Orange-line feeder route O22 (橘22).
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
    note: Lists 橘22 under 捷運橘線接駁公車.
  - id: ebus-o22
    title: O22 route schedule
    titleOriginal: 橘22班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 瓊林–捷運新莊站 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 橘22 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 瓊林 - 捷運新莊站, weekday-only service 0630–1830 with no holiday service, one-section fare and 三重客運新莊站 as the service contact.[^ebus-o22]

The confirmed stop sequence runs from 新樹民安路口 through 西盛, threading a
run of five consecutively numbered 瓊林南路 stops, then into 新莊 past 豐年
國小 to end at 保元宮.[^tdx-bus] The one confirmed interchange, 捷運新莊站
(Xinzhuang, O18), sits partway along both directions rather than at either
published terminus.[^tdx-bus] Weekday-only hours with no holiday service at
all put it among the more limited routes in this project's colour-orange
coverage.[^ebus-o22] Its 瓊林 origin sits close enough to 新莊 that the whole
route runs within a single district rather than crossing into a
neighbouring one, unlike most other routes in this batch.[^tdx-bus] The five
consecutively numbered 瓊林南路 stops (一 through 五) suggest a single long
residential street served at regular intervals rather than five distinct
neighbourhoods, though the schedule page does not describe the street
itself.[^tdx-bus] Its 三重客運新莊站 operator contact is a New Taipei dispatch
point distinct from the several other 三重客運 stations named across this
project's colour-orange coverage.[^ebus-o22]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
