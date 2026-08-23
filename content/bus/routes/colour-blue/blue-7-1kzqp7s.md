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

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL7; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B7 (30 stops):** National Palace Museum -> Waishuangxi -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Gangqian Police Station -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Xinhu 1st Rd Entrance -> Tanmei Elementary School (Jiuzong) -> Zhoumei Village 1 -> Yucheng Village -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> yaxiang Park -> Yongji and Songxin Intersection -> futai Park -> Songshan High School of Agriculture and Industry -> Petroleum Building -> MRT Taipei City Hall Sta[^tdx-bus]

**B7 (28 stops):** futai Park -> Yongji and Songxin Intersection -> yaxiang Park -> Songshan Farmers Association -> Songshan Rail Sta (Bade) -> Yucheng Village -> Zhoumei Village 1 -> Tanmei Elementary School (Jiuzong) -> Xinhu 1st Rd Entrance -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Minquan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Neihu Sports Center -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Waishuangxi -> Waishuangxi -> National Palace Museum[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍7副 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍7 was found
in this search.[^ebus-bl7] A headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own weekday 0630–2200 and
holiday 0800–1930 span statement.[^ebus-bl7] No predecessor-route or
renumbering history for 藍7 specifically was located, nor a stated reason for pairing 故宮
(the National Palace Museum) with 捷運市政府站 across such a wide stretch of
the city — one of the longer confirmed corridors in this batch, alongside
藍22's own Xizhi-to-Nangang span.
