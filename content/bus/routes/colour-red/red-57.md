---
title: R57 / 紅57
summary: Red-line feeder route R57 (紅57).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅57 under 捷運紅線接駁公車.
  - id: ebus-r57
    title: R57 route schedule
    titleOriginal: 紅57班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111005700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運行天宮站–捷運科技大樓站 corridor, weekday service, holiday suspension, one-section fare and the three operator contacts.
---

## Classification and corridor

The official catalogue lists 紅57 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 捷運行天宮站 - 捷運科技大樓站, weekday service 0630–2100, no holiday service, one-section fare and contacts for 首都客運社子站, 首都客運士林站 and 臺北客運士林站. The page repeats that holidays are suspended.[^ebus-r57]

The confirmed stop sequence runs from 吉林路底, past 新福里/新壽公園/捷運行天宮
站, through 民生松江路口/臺北大學/長春國小, along 建國南路 past 空軍總部/信義市場,
into 大安's 龍門國中/國立臺北教育大學/臥龍街, ending at 復興南路口 near 大安運動
中心.[^tdx-bus] Three confirmed interchanges are recorded in the curated
stop-ID join set: Technology Building (BR08), Xingtian Temple (O09) and
Daan Park (R06).[^tdx-bus] The route is jointly run by two operators, 首都
客運 and 臺北客運, with three separate contact points across three
dispatch stations.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅57 was found in this search, nor a stated reason for
how the three contact stations divide the route's own departures between
three separate dispatch points. No predecessor-route or renumbering
history for 紅57 was located either, nor a stated reason for its own
weekday-only pattern despite serving a dense residential and school
corridor.[^tdx-bus]
