---
title: Nanjing Metro Bus / 南京幹線
summary: Trunk route 南京幹線 (Nanjing Metro Bus).
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
    note: Lists 南京幹線 under 幹線專車.
  - id: ebus-nanjing
    title: Nanjing Metro Bus route schedule
    titleOriginal: 南京幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港高工–圓環 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 南京幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 南京幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 南港高工 - 圓環, weekday service 0530–2300, holiday service 0550–2300, one-section fare and 首都客運經貿站 as the service contact. It publishes a two-way transfer discount.[^ebus-nanjing]

A community wiki lists 南京幹線 as the renamed form of a former numbered
route, 棕9, one of eight conversions this project's joint-operation network
page records.[^zh-trunk-bus]

The confirmed stop sequence begins in Nangang at 東新國小 and loops through
Neihu — past 南港軟體園區, 東湖, 葫洲 and 內湖 — before joining 南京東路
(Nanjing East Road) and running west through Songshan and Zhongshan into
Datong, ending at 圓環, the district's historic traffic-circle
site.[^tdx-bus] The curated joins resolve to six distinct interchange
stops named directly, or near-directly, in the stop sequence's own text:
捷運內湖站 (Neihu, BR19), 捷運葫洲站 (Huzhou, BR21), 捷運東湖站 (Donghu,
BR22), 南港軟體園區北站 (a near-match for Nangang Software Park, BR23 — the
stop's own name adds 北 and drops 捷運), 捷運南京復興站 (a Wenhu–Songshan–
Xindian interchange, BR11/G16), 捷運中山站 (a Songshan–Xindian–Tamsui–Xinyi
interchange, G14/R11) and 捷運松江南京站 (a Songshan–Xindian–Zhonghe–Xinlu
interchange, G15/O08). A further curated code resolves to 南京公寓, whose
own stop name embeds 捷運南京三民站 in parentheses rather than using it as
the stop's primary name (Nanjing Sanmin, G18).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus] The 棕9 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 首都客運 announcement in this search.
