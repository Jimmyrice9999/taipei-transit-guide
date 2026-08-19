---
title: O19 / 橘19
summary: Orange-line feeder route O19 (橘19).
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
    note: Lists 橘19 under 捷運橘線接駁公車.
  - id: ebus-o19
    title: O19 route schedule
    titleOriginal: 橘19班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五股–三重 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘19 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 五股 - 三重, weekday and holiday service 0530–2330, one-section fare and 三重客運五股站 as the service contact.[^ebus-o19] TDX carries a separate 橘19副 record (canonical slug `orange-19-153docx`) with the same published termini and operator and a shorter span; their relationship is TBC.

The confirmed stop sequence runs from 五股站 through 五股's 洲仔橋/成泰路三段/
坑口 streets, then into 蘆洲 past 捷運蘆洲站 and 捷運三民高中站, ending near 分子尾
in 三重.[^tdx-bus] Three confirmed interchanges lie along the way: 捷運徐匯
中學站 (St. Ignatius High School, O52), 捷運三民高中站 (Sanmin Senior High
School, O53) and 捷運蘆洲站 (Luzhou, O54).[^tdx-bus] Against its 橘19副
sibling's own stop sequence, this working takes a different street path
through 五股 — via 洲仔橋/成泰路三段/坑口/洲仔 rather than 新五路芳洲路口/芳洲
一路/賀聖宮/新城 — before both rejoin at 西雲寺.[^tdx-bus] Its full 0530–2330
span, weekday and holiday alike, is one of the longer published spans in
this project's colour-orange coverage, against 橘19副's shorter
commuter-hours schedule on the same general termini.[^ebus-o19] Its 31-stop
outbound and 30-stop return workings run close to symmetric, unlike several
other routes in this batch whose two directions differ by a wider
margin.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘19副 remain TBC.[^tdx-bus]
