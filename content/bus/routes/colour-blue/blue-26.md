---
title: BL26 / 藍26
summary: Blue-line feeder route BL26 (藍26).
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
    note: Lists 藍26 under 捷運藍線接駁公車.
  - id: ebus-bl26
    title: BL26 route schedule
    titleOriginal: 藍26班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 舊宗路–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍26 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 舊宗路 - 捷運市政府站, weekday and holiday service 0600–2320, one-section fare and 三重客運南港站 as the service contact.[^ebus-bl26]

The confirmed stop sequence runs from 精技大樓 near 新湖舊宗路口 in Neihu's
office-park corridor, past 大直's 明水路/自強隧道, through 劍南路/西湖/港墘, then
along 民權大橋 into 三民/南京三民, ending at 捷運市政府站.[^tdx-bus] Five
confirmed interchanges are recorded in the curated stop-ID join set: Taipei
City Hall (BL18), Jiannan Rd. (BR15), Xihu (BR16), Gangqian (BR17) and
Nanjing Sanmin (G18).[^tdx-bus] TDX records four named subroutes — 藍26,
藍26往捷運市政府, 藍26往舊宗路 and 藍26繞駛台北花市 — among the richer variant
structures in this batch.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] What distinguishes the four named subroutes operationally — whether they
represent different scheduled departures, a detour condition, or a
historical succession — was not found in this search beyond what their own
names describe. The route length and a headway-by-day-type figure also
remain TBC, and no dated history for the route, its four subroutes, or the
operator's own naming convention behind 繞駛/往 was found in this search,
nor a stated reason for the operator, 三重客運, running a route so far from
its own namesake district.
