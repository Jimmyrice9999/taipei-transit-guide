---
title: G6 / 綠6
summary: Green-line feeder route G6 (綠6).
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
    note: Lists 綠6 under 捷運綠線接駁公車.
  - id: ebus-g6
    title: G6 route schedule
    titleOriginal: 綠6班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000600
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 美之城–中和 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 綠6 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 美之城 - 中和, weekday and holiday service 0600–2230, one-section fare, peak headways of 15–20 minutes, off-peak headways of 20–30 minutes, and 新店客運碧潭站 as the service contact.[^ebus-g6]

The confirmed stop sequence starts at 美之城, a housing estate on 新店's
西 side, runs past 華城路/華福宮 and through central 新店, then the same
秀朗橋/景平/景安 corridor as 綠3, ending at 中和
區公所.[^tdx-bus] Four confirmed interchanges lie along the way: 捷運新店站
(Xindian, G01), 捷運新店區公所站 (Xindian District Office, G02), and 捷運景安站
(Jing'an, served by both the Zhonghe–Xinlu Line as O02 and the Circular Line
as Y11).[^tdx-bus] 綠6 and 綠3 share almost their entire alignment from 新店
onward, differing only in which housing estate each one starts from — 美之城
here against the hillside 花園新城 on 綠3 — rather than in their route through
中和 itself.[^tdx-bus] Its published headways, 15–20 minutes peak and 20–30
off-peak, match 綠7 and 綠8 exactly, suggesting a shared scheduling pattern
across 新店客運's colour-green routes rather than route-specific
tuning.[^ebus-g6] The route's operating span, 0600–2230 both weekday and
holiday, is also the same span published for 綠7 and 綠8, though 綠3 —
otherwise its closest sibling in corridor — closes 30 minutes earlier at
2200.[^ebus-g6]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
