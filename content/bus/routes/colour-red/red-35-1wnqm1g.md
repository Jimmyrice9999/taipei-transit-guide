---
title: R35Shuttle / 紅35區
summary: Red-line feeder route R35Shuttle (紅35區).
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
    note: Lists 紅35區 under 捷運紅線接駁公車.
  - id: ebus-r35-shuttle
    title: R35Shuttle route schedule
    titleOriginal: 紅35區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003520
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運關渡站–北藝大游泳館 corridor, weekday service span, holiday suspension, one-section fare, holiday note and 大南汽車關渡站 contact.
---

## Classification and corridor

The official catalogue lists 紅35區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 捷運關渡站 - 北藝大游泳館, weekday service 0750–1730, no holiday service, one-section fare and 大南汽車關渡站 as the service contact. The page repeats that the route is suspended on holidays.[^ebus-r35-shuttle]

At just six stops each way, the confirmed stop sequence is short and
entirely campus-focused: 捷運關渡站、北投區公所(關渡)、立功街、北藝大校門口、北藝大
音樂廳、北藝大行政大樓, a shorter version of sibling 紅35's own longer 關渡碼頭
corridor.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Guandu (R25), matching the route's own terminus.[^tdx-bus]
The route runs a single subroute under one operator, 大南汽車, weekdays
only with holidays suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅35區 was found in this search, nor a stated reason for
running as a separate route rather than a subroute of plain 紅35. No
predecessor-route or renumbering history for 紅35區 was located either,
nor a stated reason for its own narrow 0750–1730 weekday-only span
compared with plain 紅35's own 0900–2150 daily service across both
weekday and holiday schedules.[^tdx-bus]
