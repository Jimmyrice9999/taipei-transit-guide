---
title: Fuxing Metro Bus / 復興幹線
summary: Trunk route 復興幹線 (Fuxing Metro Bus).
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
    note: Lists 復興幹線 under 幹線專車.
  - id: ebus-fuxing
    title: Fuxing Metro Bus route schedule
    titleOriginal: 復興幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 建國北路–景美 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 復興幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 建國北路 - 景美, weekday and holiday service 0550–2300, one-section fare and 大都會客運建北站 as the service contact.[^ebus-fuxing]

The confirmed stop sequence runs the full length of 復興北/南路 from 建北站
near Songshan Airport, through Zhongshan and Da'an, along 羅斯福路 past NTU
into Wenshan, ending at 景華公園 near 景美.[^tdx-bus] It is the
most-connected route in this project's trunk-route coverage: the curated
join set confirms 14 separate station codes, of which eight are named
directly in the stop sequence — 捷運中山國中站 (Zhongshan Junior High School,
BR12), 捷運南京復興站 (served by both the Wenhu Line as BR11 and the
Songshan–Xindian Line as G16), 捷運忠孝復興站 (served by both the Bannan Line
as BL15 and the Wenhu Line as BR10), 捷運大安站 (served by both the Wenhu
Line as BR09 and the Tamsui–Xinyi Line as R05), 捷運科技大樓站 (Technology
Building, BR08), 捷運古亭站 (served by both the Songshan–Xindian Line as G09
and the Zhonghe–Xinlu Line as O05), 捷運台電大樓站 (Taipower Building, G08)
and 捷運萬隆站 (Wanlong, G06).[^tdx-bus] A fourteenth code resolves to
Jingmei (G05), not directly named in the stop sequence's own
text.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
