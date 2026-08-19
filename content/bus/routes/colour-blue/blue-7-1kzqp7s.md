---
title: BL7 / 藍7
summary: Blue-line feeder route BL7 (藍7).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍7 under 捷運藍線接駁公車.
  - id: ebus-bl7
    title: BL7 route schedule
    titleOriginal: 藍7班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 故宮–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍7 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 故宮 - 捷運市政府站, weekday service 0630–2200, holiday service 0800–1930, one-section fare and 光華巴士故宮站 as the service contact.[^ebus-bl7] TDX carries a separate 藍7副 record (canonical slug `blue-7-1qb0d1m`) with the same published termini and operator; their relationship is TBC.

The confirmed stop sequence runs from 故宮博物院, past 外雙溪/自強隧道/捷運劍南
路站, through Neihu's 西湖/港墘/瑞光 corridor, along 民權大橋 into 玉成/松山車站,
ending at 捷運市政府站.[^tdx-bus] Five confirmed interchanges are recorded
in the curated stop-ID join set: Taipei City Hall (BL18), Jiannan Rd.
(BR15), Xihu (BR16), Gangqian (BR17) and Songshan (G19).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍7副 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍7 was found
in this search.[^ebus-bl7] A headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own weekday 0630–2200 and
holiday 0800–1930 span statement.[^ebus-bl7] No predecessor-route or
renumbering history for 藍7 specifically was located, nor a stated reason for pairing 故宮
(the National Palace Museum) with 捷運市政府站 across such a wide stretch of
the city — one of the longer confirmed corridors in this batch, alongside
藍22's own Xizhi-to-Nangang span.
