---
title: Chengde Metro Bus / 承德幹線
summary: Trunk route 承德幹線 (Chengde Metro Bus).
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
    note: Lists 承德幹線 under 幹線專車.
  - id: ebus-chengde
    title: Chengde Metro Bus route schedule
    titleOriginal: 承德幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新北投–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 承德幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 新北投 - 捷運市政府站, weekday and holiday service 0500–2200, a two-section fare and 大南汽車北投站 as the service contact.[^ebus-chengde]

At roughly 70 stops each way, the confirmed stop sequence is among the
longest in this project's trunk-route coverage, spanning the length of the
city from Beitou to Xinyi.[^tdx-bus] It runs from 新北投, down 大業路 and 承德路
through 石牌 and 芝山, into 士林 and 劍潭, then along 中山北路 into central
Taipei, joins 南京東路 for the same Songshan stretch 南京幹線 and 忠孝幹線
also run, continues past 國父紀念館 and into Xinyi along 松仁路, ending at
捷運市政府站.[^tdx-bus] Confirmed interchanges named directly in the stop
sequence include 新北投 (Xinbeitou, R22A), 捷運芝山站 (Zhishan, R17),
捷運劍潭站 (Jiantan, R15), 捷運中山站 (a Songshan–Xindian–Tamsui/Xinyi
interchange, G14/R11), 捷運松江南京站 (a Songshan–Xindian–Zhonghe/Xinlu
interchange, G15/O08), 捷運南京復興站 (a Wenhu–Songshan/Xindian
interchange, BR11/G16), 捷運國父紀念館站 (Sun Yat-Sen Memorial Hall, BL17)
and 捷運市政府站 (Taipei City Hall, BL18).[^tdx-bus] Several further curated
codes do not repeat a station name in the stop text at all: Yuanshan (R14)
resolves to 庫倫街口, Minquan W. Rd. (O11/R13) resolves to 成淵高中 and
防癆協會, and Xiangshan (R02) resolves to a single stop at 信義松仁路口 far
from that station's own name.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
