---
title: G2Left / 綠2左
summary: Green-line feeder route G2Left (綠2左).
updated: 2026-08-18
line: G
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠2左 under 捷運綠線接駁公車.
  - id: ebus-g2left
    title: G2Left route schedule
    titleOriginal: 綠2左班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000270
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 景美女中–中永和 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠2左 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 景美女中 - 中永和, weekday and holiday service 0600–0000, one-section fare and 欣欣客運中興站 as the service contact.[^ebus-g2left] The catalogue lists 綠2左 and 綠2右 (canonical slug `green-2-a3vlet`) as two separate labels sharing the same published termini, rather than as directional variants filed under one 綠2.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
