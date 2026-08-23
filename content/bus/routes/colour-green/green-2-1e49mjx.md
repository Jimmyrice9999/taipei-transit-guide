---
title: G2Left / 綠2左
summary: Green-line feeder route G2Left (綠2左).
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

The confirmed stop sequence runs a large loop rather than a there-and-back
line: from 景美女中 in Wenshan it threads 木柵/興隆 past 捷運萬芳醫院站, crosses
into 新店 past 捷運秀朗橋站, then into 永和/中和 past 捷運景平站 and 捷運景安站,
ending near 中山路口 without retracing its outbound stops on the way
back.[^tdx-bus] Six confirmed interchanges lie along that loop: 捷運萬芳醫院站
(Wanfang Hospital, BR04) on the Wenhu Line, 捷運景平站/捷運景安站 area stations
(O02/Y11, both named Jing'an — a real Zhonghe-Xinlu/Circular Line
interchange), 捷運永安市場站 (Yong'an Market, O03), and 捷運秀朗橋站 (Xiulang
Bridge, Y09) on the Circular Line.[^tdx-bus] Its published span, 0600 to
midnight seven days a week, is longer than most other routes in this
project's colour-green coverage, several of which stop running well before
2200 or skip holiday service entirely.[^ebus-g2left]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
