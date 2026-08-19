---
title: BL7Sub / 藍7副
summary: Blue-line feeder route BL7Sub (藍7副).
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
    note: Lists 藍7副 under 捷運藍線接駁公車.
  - id: ebus-bl7sub
    title: BL7Sub route schedule
    titleOriginal: 藍7副班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000710
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 故宮–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍7副 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 故宮 - 捷運市政府站, weekday service 0600–1900, holiday service 0630–2130, one-section fare and 光華巴士故宮站 as the service contact — the same termini and operator as plain 藍7 (`blue-7-1kzqp7s`), with a different published span.[^ebus-bl7sub]

The confirmed stop sequence follows plain 藍7's own 故宮/外雙溪/劍南路/西湖/
港墘/瑞光/民權大橋 corridor, but detours via 新湖民善街口/行善路 near 玉成before
rejoining the same route into 松山車站/捷運市政府站.[^tdx-bus] Five confirmed
interchanges are recorded in the curated stop-ID join set: Taipei City
Hall (BL18), Jiannan Rd. (BR15), Xihu (BR16), Gangqian (BR17) and Songshan
(G19) — the same five stations plain 藍7 confirms.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍7 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍7副 or its
行善路 detour was found in this search. A headway-by-day-type figure is
likewise absent from the primary schedule page beyond its own weekday
0600–1900 and holiday 0630–2130 span statement, notably narrower on
weekdays and wider on holidays than plain 藍7's own span.[^ebus-bl7sub] No
predecessor-route or renumbering history for 藍7副 was located either, nor
a stated reason for the 行善路 detour existing as a separate route rather
than a subroute of plain 藍7 itself, unlike the subroute pattern used for
藍20's own 三軍總醫院內湖 bypass.
