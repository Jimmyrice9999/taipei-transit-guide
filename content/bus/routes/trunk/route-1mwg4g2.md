---
title: Dunhua Metro Bus / 敦化幹線
summary: Trunk route 敦化幹線 (Dunhua Metro Bus).
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
    note: Lists 敦化幹線 under 幹線專車.
  - id: ebus-dunhua
    title: Dunhua Metro Bus route schedule
    titleOriginal: 敦化幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 麟光新村–榮總 corridor, service span, fare and operator contact.
  - id: zh-taipei-bus
    title: Taipei city buses
    titleOriginal: 臺北市市區公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市市區公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Secondary source naming 信義幹線 and 敦化幹線 as the trunk network's original two named corridors, assembled from existing joint-operation routes before the wider 2017-18 renaming programme this project's joint-operation network page records. No Public Transport Office publication found in this project's research states the 敦化幹線 name's own origin directly."
---

## Classification and corridor

The official catalogue lists 敦化幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 麟光新村 - 榮總, weekday and holiday service 0510–2230, a two-section fare and 大都會客運麟光站 as the service contact.[^ebus-dunhua]

A secondary source names 敦化幹線, alongside 信義幹線, as one of the trunk
network's original two named corridors — assembled from existing routes
before the wider 2017-18 renaming this project's joint-operation network
page documents, rather than a later conversion of a single numbered or
colour-prefixed route.[^zh-taipei-bus]

The confirmed stop sequence runs from 麟光站 in Wenshan, along 敦化南/北路
through Da'an and Songshan, then up 新生北路/中山北路 through Zhongshan into
Shilin and Beitou, ending near 榮總 (Taipei Veterans General
Hospital).[^tdx-bus] Five confirmed interchanges are named directly in the
stop sequence: 麟光站 (Linguang, BR06), 捷運六張犁站 (Liuzhangli, BR07), 捷運
忠孝敦化站 (Zhongxiao Dunhua, BL16), 中山國小(新生) (Zhongshan Elementary
School, O10) and, on the return working, 捷運劍潭站 (Jiantan, R15) and 捷運
士林站 (Shilin, R16).[^tdx-bus] A further curated code resolves to Zhongshan
Junior High School (BR12), not directly named in the stop sequence's own
text.[^tdx-bus] TDX records 敦化幹線 as a single subroute with no separate holiday,
half-working or detour variant, unlike several other trunk routes in this
project's coverage that carry two or more.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
