---
title: Beihuan Metro Bus / 北環幹線
summary: Trunk route 北環幹線 (Beihuan Metro Bus).
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
    note: Lists 北環幹線 under 幹線專車.
  - id: ebus-beihuan
    title: Beihuan Metro Bus route schedule
    titleOriginal: 北環幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100062000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 北士科–中華科技大學 corridor, service span, fare and two operator contacts.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 北環幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 北環幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 北士科 - 中華科技大學, weekday service 0530–2230, holiday service 0600–2230, a two-section fare and two service contacts, 光華巴士北士科站 and 大有巴士興中站.[^ebus-beihuan]

A community wiki lists 北環幹線 as the renamed form of a former numbered
route, 620, one of eight conversions this project's joint-operation network
page records.[^zh-trunk-bus] The route's own eBus routeid, 0100062000,
carries the digits "620" inside it — a coincidence consistent with the
predecessor claim, though the routeid field's own construction rules are
not established here and the match is not treated as independent
confirmation.[^ebus-beihuan]

The confirmed stop sequence is the most Wenhu-Line-connected route in this
project's trunk-route coverage: it runs from 士林's 北士科 area, past 中研院
in Nangang, then the length of the Wenhu Line's own corridor through
Neihu — 捷運東湖站 (Donghu, BR22), 捷運葫洲站 (Huzhou, BR21), 捷運大湖公園站
(Dahu Park, BR20), 捷運內湖站 (Neihu, BR19), 捷運文德站 (Wende, BR18), 捷運港墘站
(Gangqian, BR17) and 捷運西湖站 (Xihu, BR16), all named directly in the stop
sequence — before returning to 士林 past 故宮 (the National Palace
Museum).[^tdx-bus] Three further curated codes resolve to Nangang (BL23),
Jiannan Rd. (BR15) and Taipei Nangang Exhibition Center (BR24), not
directly named in the stop sequence's own text.[^tdx-bus] TDX records four
subroute variants distinguishing whether a working detours via 士科路 and
whether it carries a dog-friendly (狗狗公車) designation.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 620 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or operator announcement in this search.
