---
title: O19Sub / 橘19副
summary: Orange-line feeder route O19Sub (橘19副).
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
    note: Lists 橘19副 under 捷運橘線接駁公車.
  - id: ebus-o19sub
    title: O19Sub route schedule
    titleOriginal: 橘19副班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001910
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五股–三重 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘19副 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 五股 - 三重, weekday service 0630–1900, holiday service 0800–1900, one-section fare and 三重客運五股站 as the service contact — the same termini and operator as plain 橘19 (`orange-19-vxo2ga`), with a shorter published span.[^ebus-o19sub]

The confirmed stop sequence shares the same 五股-to-三重 termini and the same
three confirmed interchanges as plain 橘19 — 捷運徐匯中學站 (O52), 捷運三民
高中站 (O53) and 捷運蘆洲站 (O54) — but takes a different street path through
五股 itself: via 新五路芳洲路口/芳洲一路/賀聖宮/新城/新城八路 rather than 橘19's
own 洲仔橋/成泰路三段/坑口/洲仔 route, before both rejoin at 西雲寺.[^tdx-bus]
This is a real corridor divergence, not a shorter timetable on an identical
route.[^tdx-bus] Its published span, weekday 0630–1900 and holiday
0800–1900, is also considerably shorter than plain 橘19's 0530–2330 span
covering both day types alike.[^ebus-o19sub] The shared 三重客運五股站
operator contact across 橘19, 橘19副 and 橘20 means one dispatch point runs
three orange-line feeders serving overlapping but not identical corridors
through the same district.[^ebus-o19sub] Its 31-stop outbound and 32-stop
return workings are close in length to plain 橘19's own 31/30-stop pair,
consistent with the two sharing most of a corridor while diverging only
through 五股 itself.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘19 remain TBC.[^tdx-bus]
