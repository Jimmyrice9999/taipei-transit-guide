---
title: Minsheng Metro Bus / 民生幹線
summary: Trunk route 民生幹線 (Minsheng Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 民生幹線 under 幹線專車.
  - id: ebus-minsheng
    title: Minsheng Metro Bus route schedule
    titleOriginal: 民生幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 麥帥新城–圓環 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 民生幹線 under 幹線專車, the trunk-route class rather than a colour-prefixed MRT feeder.[^ebus-trunk] Its full schedule page gives 麥帥新城 - 圓環, weekday service 0550–2230, holiday service 0600–2230, one-section fare and 首都客運內湖站 as the service contact.[^ebus-minsheng]

The confirmed stop sequence runs from Neihu's 新湖/行善路 area past 松山車站
and 饒河街觀光夜市 (the Raohe Street night market), through 民生社區 (Minsheng
Community) and along 民生東路 into Zhongshan, ending near 朝陽公園 in
Datong.[^tdx-bus] It calls at three confirmed interchanges: 松山車站, resolving to Songshan
(G19), 捷運行天宮站 (Xingtian Temple, O09) and 捷運雙連站 (Shuanglian,
R12).[^tdx-bus] Trunk routes are the Public Transport Office's own named
service class for major arterial corridors, distinct from the colour-
prefixed feeders that name a single MRT line — 民生幹線's own name describes
the road it runs, 民生東路, rather than any line it feeds.[^ebus-trunk] TDX
records two additional named subroutes alongside the full corridor, an
outbound half-working (去程半) and a return half-working (返程半); their own
stop-sequence records list the same stop counts as the full route, so this
snapshot does not itself show where either working actually turns
back.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
