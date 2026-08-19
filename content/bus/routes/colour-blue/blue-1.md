---
title: BL1 / 藍1
summary: Blue-line feeder route BL1 (藍1).
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
    note: Lists 藍1 under 捷運藍線接駁公車.
  - id: ebus-bl1
    title: BL1 route schedule
    titleOriginal: 藍1班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–臺北車站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍1 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 蘆洲 - 臺北車站, weekday and holiday service 0600–2300, one-section fare and 三重客運蘆二站 as the service contact.[^ebus-bl1]

The confirmed stop sequence runs from 蘆洲總站, through 長榮路/永平市場 and
九芎廟 in central Luzhou, then south past 溪墘 into 三重's 徐匯中學/幸福市場/
建和新村/三和國中/德林寺 area, then past 正義重新路口 and 中正南路 to end at 臺北
車站.[^tdx-bus] Five confirmed interchanges are
recorded in the curated stop-ID join set: 臺北車站 itself — a three-line
interchange served by the Airport MRT (A1), Bannan Line (BL12) and
Tamsui–Xinyi Line (R10) — plus Sanchong Elementary School (O50), Sanhe
Junior High School (O51), St. Ignatius High School (O52) and Luzhou (O54).
[^tdx-bus] The route runs a single subroute under one operator, 三重客運,
with no recorded holiday variant or short working.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] Why 藍1 pairs 蘆洲 with 臺北車站 rather than a nearer Blue-line
station, and whether the route predates the Circular Line stations (O50–
O54) its curated joins also touch, were not found in this search. No
predecessor route, renumbering, or fare-transfer history for 藍1 specifically
was located, distinct from the joint-operation-numbered routes this
project's other bus batches have found dated Wikiversity leads for.
