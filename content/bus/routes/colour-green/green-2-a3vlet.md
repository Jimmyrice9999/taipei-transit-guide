---
title: G2Right / 綠2右
summary: Green-line feeder route G2Right (綠2右).
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
    note: Lists 綠2右 under 捷運綠線接駁公車.
  - id: ebus-g2right
    title: G2Right route schedule
    titleOriginal: 綠2右班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 景美女中–中永和 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 綠2右 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 景美女中 - 中永和, weekday and holiday service 0530–2345, one-section fare, weekday peak headways of 12–15 minutes with enhanced afternoon service on school days, and 欣欣客運中興站 as the service contact.[^ebus-g2right] 綠2右 and 綠2左 (canonical slug `green-2-1e49mjx`) share the same published termini and are separately timetabled TDX records; TDX does not label them as directional variants of a single 綠2, and no such single route was found in the official catalogue.

The confirmed stop sequence shares its 景美/木柵 start with 綠2左, through
捷運萬芳醫院站 (Wanfang Hospital, BR04) to 莊敬中學/人權博物館, but the two
routes then take genuinely different paths through the Yonghe/Zhonghe area:
綠2左 continues via 捷運秀朗橋站 and 捷運景平站/捷運景安站 (Jing'an, O02/Y11)
through 南勢角, while 綠2右 instead runs through central 永和 — past 永和
區公所 and 網溪國小 — before both routes reconverge near 捷運永安市場站
(Yong'an Market, O03).[^tdx-bus] They are two different loop routings sharing
the same published termini, not a simple left/right direction pair. The TDX
record also carries a third, shorter 綠2右 subroute, 綠2右景美女中, that starts
partway along at 景美女中 rather than at the full loop's own start.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
