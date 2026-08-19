---
title: R50 / 紅50
summary: Red-line feeder route R50 (紅50).
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
    note: Lists 紅50 under 捷運紅線接駁公車.
  - id: ebus-r50
    title: R50 route schedule
    titleOriginal: 紅50班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111005000
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 內湖–捷運圓山站 corridor, weekday/holiday service spans, one-section fare, 首都客運內湖站 contact and the weekday 復興北路 subsidiary timetable.
---

## Classification and corridor

The official catalogue lists 紅50 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 內湖 - 捷運圓山站, weekday and holiday service 0600–2200, one-section fare and 首都客運內湖站 as the service contact. It also publishes a weekday subsidiary timetable labelled 經復興北路, with departures at 0930, 1100, 1300, 1430 and 1600.[^ebus-r50]

The confirmed stop sequence runs from 行善石潭路口 in Neihu, past 行善行愛
路口/行愛路/行忠行愛路口, through 三民國小/民權國小/中華航空, along 民權敦化路口/
民權復興路口, then either past 榮星花園/第二果菜市場/新生公園 or, on the 經復興
北路 subroute, past 五常街口/下埤里/臺北漁市, ending at 捷運圓山站/大同大學.[^tdx-bus] Three confirmed interchanges are recorded in the curated
stop-ID join set: Zhongshan Junior High School (BR12), Songshan Airport
(BR13) and Yuanshan (R14).[^tdx-bus] TDX records two named subroutes,
紅50 and 紅50經復興北路, matching the schedule page's own subsidiary
timetable.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅50 was found
in this search, nor a stated reason for the subsidiary 經復興北路 timetable
running only five weekday departures against the full route's own
continuous service. No predecessor-route or renumbering history for 紅50
was located either, nor a stated reason for pairing 內湖 with 捷運圓山站
specifically as the route's own termini.[^tdx-bus]
