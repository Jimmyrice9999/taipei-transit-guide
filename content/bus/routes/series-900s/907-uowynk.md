---
title: 907通勤 / 907CB
summary: General-bus route 907通勤 (萬華 - 崇義高中).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0610–2100; no holiday service (例假日停駛)"
    source: ebus-907cb
  - label: Headway by day type
    value: "Five named timed commuter workings: 907通勤0610, 907通勤0650, 907通勤0710, 907通勤0805, 907通勤2100"
    source: ebus-907cb
  - label: Fare / transfer
    value: Two-section fare (兩段票) throughout, because the route runs on the freeway; buffer zone 國道三甲交流道
    source: ebus-907cb
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records five subroutes, each named for a distinct scheduled departure time — 907通勤0610, 907通勤0650, 907通勤0710, 907通勤0805 and 907通勤2100.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 907通勤 under 一般公車, as a routeid entry separate from plain 907.
  - id: ebus-907cb
    title: 907通勤 route schedule
    titleOriginal: 907通勤班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100090790
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official schedule page listing the current 萬華–崇義高中 corridor, service span, fare, buffer zone and operator contact (欣欣客運華江站 02-2308-9487). Lists five separate named timetables (907通勤0610班表, 907通勤0650班表, 907通勤0710班表, 907通勤0805班表, 907通勤2100班表) and states verbatim: 0710班次發車起點為臺大綜合體育館."
---

## Classification and corridor

The official catalogue lists 907通勤 under 一般公車, as a routeid entry
separate from plain 907.[^ebus-general] Its full schedule page gives the same
萬華 - 崇義高中 corridor as plain 907, weekday-only service 0610–2100 with no
holiday service, the same two-section freeway fare and 國道三甲交流道 buffer
zone, and 欣欣客運華江站 as the service contact.[^ebus-907cb] The page states
that the 0710 working starts from 臺大綜合體育館 (NTU Sports Complex) rather
than the 萬華 terminus: 「0710班次發車起點為臺大綜合體育館」.[^ebus-907cb]

## Timed commuter workings

TDX records five subroutes for this route, each named for a specific
departure time: 907通勤0610, 907通勤0650, 907通勤0710, 907通勤0805 and
907通勤2100.[^tdx-bus] The schedule page's own labelling matches this pattern
exactly, presenting 907通勤0610班表, 907通勤0650班表, 907通勤0710班表,
907通勤0805班表 and 907通勤2100班表 as five separate named timetables rather
than one continuous headway.[^ebus-907cb] This confirms the subroutes are
scheduled peak/off-peak commuter departures, each run as its own named
working, rather than route-alignment variants.

## Research status

Searching 台北市 公車907路 歷史 沿革 欣欣客運 in Chinese found fleet and
schedule history for plain 907 but nothing specific to a 907通勤 opening date
or predecessor route, so that detail is left TBC.[^tdx-bus] Route length also
remains TBC.[^tdx-bus]
