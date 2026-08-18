---
title: O18fu / 橘18福隆路
summary: Orange-line feeder route O18fu (橘18福隆路).
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
    note: Lists 橘18福隆路 under 捷運橘線接駁公車.
  - id: ebus-o18fu
    title: O18fu route schedule
    titleOriginal: 橘18福隆路班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001870
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–五華街 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘18福隆路 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 蘆洲 - 五華街, weekday service 0600–2000, holiday service 0600–1900, one-section fare and 大都會客運蘆洲站 as the service contact — the same termini and operator as plain 橘18 (`orange-18-1wqt5b1`), with a shorter published span and the 福隆路 suffix distinguishing the TDX record.[^ebus-o18fu]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the meaning of the 福隆路 suffix beyond a literal street name remain TBC.[^tdx-bus]
