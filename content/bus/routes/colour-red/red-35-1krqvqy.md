---
title: R35 / 紅35
summary: Red-line feeder route R35 (紅35).
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
    note: Lists 紅35 under 捷運紅線接駁公車.
  - id: ebus-r35
    title: R35 route schedule
    titleOriginal: 紅35班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 關渡碼頭–臺北藝術大學 corridor, weekday/holiday service spans, one-section fare and 大南汽車關渡站 contact.
---

## Classification and corridor

The official catalogue lists 紅35 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 關渡碼頭 - 臺北藝術大學, weekday and holiday service 0900–2150, one-section fare and 大南汽車關渡站 as the service contact.[^ebus-r35]

The confirmed stop sequence runs from 關渡碼頭, past 關渡宮/敬老院/關渡自然
公園, through 關渡國中(關渡醫院)/關渡里, past 捷運關渡站/北投區公所(關渡)/立功街,
then along 學園路口 into 北藝大's own campus stops — 北藝大校門口/北藝大音樂
廳/北藝大行政大樓, ending at 北藝大圖書館/北藝大藝科中心(游泳館).[^tdx-bus] One
confirmed interchange is recorded in the curated stop-ID join set: Guandu
(R25).[^tdx-bus] The route runs a single subroute under one operator,
大南汽車, the same company that runs siblings 紅35區, 紅55 and 紅55區 over
overlapping campus corridors.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R35; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R35 (16 stops):** Guandu Wharf -> Guandu Temple -> Senior Citizens Home -> Guandu Nature Park -> Guandu Junior High School (Guandu Hospital) -> Guandu Village -> MRT Guandu Sta -> Beitou District Office(Guandu) -> Ligong St -> Guandu -> Xueyuan Rd Entrance -> Entrance of TNUA -> Music hall -> Administration Building of TNUA -> Library of TNUA -> Center for Art and Technology of TNUA(Natatorium)[^tdx-bus]

**R35 (12 stops):** 2513988547 -> Taipei Chengshih University of Science and Technology (back door) -> Literary arts ecology hall -> Xueyuan Rd Entrance -> Guandu -> MRT Guandu Sta -> Guandu Village -> Guandu Junior High School (Guandu Hospital) -> Guandu Nature Park -> Senior Citizens Home -> Guandu Temple -> Guandu Wharf[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅35 was found in this search, nor a stated reason for
pairing 關渡碼頭 with the 北藝大 campus specifically as the route's own
termini. No predecessor-route or renumbering history for 紅35 was located
either, nor a stated reason for confirming only Guandu despite the route
running the length of the 北藝大 campus itself, ending well past its own
confirmed interchange near 北藝大圖書館, deep inside the campus itself.[^tdx-bus]
