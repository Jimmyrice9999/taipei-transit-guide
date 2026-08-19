---
title: Nanhuan Metro Bus / 南環幹線
summary: Trunk route 南環幹線 (Nanhuan Metro Bus).
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
    note: Lists 南環幹線 under 幹線專車.
  - id: ebus-nanhuan
    title: Nanhuan Metro Bus route schedule
    titleOriginal: 南環幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新店–臺北市政府 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 南環幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 南環幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 新店 - 臺北市政府, weekday and holiday service 0525–2230, a two-section fare and 臺北客運新店站 as the service contact.[^ebus-nanhuan]

A community wiki lists 南環幹線 as the renamed form of a former MRT feeder,
綠1 — a Songshan–Xindian Line feeder losing its colour prefix and gaining a
compass-direction name, the same conversion pattern as 東環幹線's own 綠16
predecessor.[^zh-trunk-bus]

The confirmed stop sequence runs from 新店, through 安坑/景美/木柵 past
政治大學 (National Chengchi University) and the gondola's own 貓纜動物園站,
then along 信義路 into Xinyi, ending at 臺北市政府.[^tdx-bus] Five confirmed
interchanges are named directly in the stop sequence: 捷運新店站 (Xindian,
G01), 捷運新店區公所站 (Xindian District Office, G02), 捷運七張站 (Qizhang,
G03), 捷運動物園站 (Taipei Zoo, BR01) and 捷運台北101/世貿站 (Taipei
101/World Trade Center, R03), plus 捷運市政府站 (Taipei City Hall,
BL18).[^tdx-bus] A further curated code resolves to Ankang (K06), not
directly named in the stop sequence's own text.[^tdx-bus] TDX records two
named variants distinguishing whether the working starts from the 調度站
(dispatch depot) or from 捷運新店站 itself.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 綠1 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 臺北客運 announcement in this search.
