---
title: G5 / 綠5
summary: Green-line feeder route G5 (綠5).
updated: 2026-08-18
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
    note: Lists 綠5 under 捷運綠線接駁公車.
  - id: ebus-g5
    title: G5 route schedule
    titleOriginal: 綠5班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大崎腳–中正環河路口 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠5 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 大崎腳 - 中正環河路口, weekday and holiday service 0530–2230, one-section fare and 新店客運新店站 as the service contact.[^ebus-g5]

The confirmed stop sequence starts at 大崎腳, a hillside spot above 青潭, runs
through 新店 and past a cluster of newer 十四張 developments — 央北社會住宅
(the social-housing project), 十四張歷史公園 — before ending at 中正環河路口.[^tdx-bus] Four confirmed interchanges lie along the way: 捷運新店站 (Xindian,
G01), 捷運新店區公所站 (Xindian District Office, G02), and 捷運十四張站
(Shisizhang) — a genuine interchange between the Ankeng Light Rail (K09) and
the Circular Line (Y08) that this route serves twice, once on each
direction.[^tdx-bus] The stop-sequence data names the 央北社會住宅
development itself, one of three consecutive 央北-prefixed stops on this
route, rather than an older street or landmark name.[^tdx-bus] Its service
contact, 新店客運新店站, is the same one 綠13 names, distinct from the 新店客運
碧潭站 contact that 綠7, 綠10 and 綠12 share — two separate dispatch points
under the same operator across this project's colour-green
coverage.[^ebus-g5] Its own weekday and holiday service both run the full
0530–2230 span with no split, a simpler pattern than the 大香山 sibling group
covered elsewhere in this batch.[^ebus-g5]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
