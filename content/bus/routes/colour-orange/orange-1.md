---
title: O1 / 橘1
summary: Orange-line feeder route O1 (橘1).
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
    note: Lists 橘1 under 捷運橘線接駁公車.
  - id: ebus-o1
    title: O1 route schedule
    titleOriginal: 橘1班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 錦繡–捷運景安站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘1 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 錦繡 - 捷運景安站, weekday service 0530–2230, holiday service 0600–2230, one-section fare and 指南客運錦繡站 as the service contact.[^ebus-o1]

The confirmed stop sequence starts at 錦秀路口 in New Taipei's Ankeng area,
runs through 安康/十四份 past a run of light-rail-adjacent stops, then follows
the same 陽光運動公園/新和國小 corridor as 橘9 before ending at 捷運景安站.[^tdx-bus] It calls at five confirmed interchanges along the way: 輕軌安康站
(Ankang, K06), 輕軌陽光運動公園站 (Sunshine Sports Park, K07), 輕軌新和國小站
(Xinhe Elementary School, K08) on the Ankeng Light Rail, and 捷運景安站
itself — Jing'an, served by both the Zhonghe–Xinlu Line (O02) and the
Circular Line (Y11).[^tdx-bus] As an orange-line feeder, its own colour
identifies the Zhonghe–Xinlu Line rather than a geographic zone, and it
happens to also connect directly to the newer Ankeng Light Rail along the
way — a cross-mode connection the route's own classification does not
name.[^ebus-orange] Its operator, 指南客運, also runs 橘9 out of the same
錦繡 dispatch point, the two routes' corridors diverging only at the 南勢角
end, where 橘9 continues on to 雙和醫院.[^ebus-o1]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
