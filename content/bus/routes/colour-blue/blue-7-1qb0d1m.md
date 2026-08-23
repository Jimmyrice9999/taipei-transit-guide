---
title: BL7Sub / 藍7副
summary: Blue-line feeder route BL7Sub (藍7副).
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
    note: Lists 藍7副 under 捷運藍線接駁公車.
  - id: ebus-bl7sub
    title: BL7Sub route schedule
    titleOriginal: 藍7副班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000710
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 故宮–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍7副 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 故宮 - 捷運市政府站, weekday service 0600–1900, holiday service 0630–2130, one-section fare and 光華巴士故宮站 as the service contact — the same termini and operator as plain 藍7 (`blue-7-1kzqp7s`), with a different published span.[^ebus-bl7sub]

The confirmed stop sequence follows plain 藍7's own 故宮/外雙溪/劍南路/西湖/
港墘/瑞光/民權大橋 corridor, but detours via 新湖民善街口/行善路 near 玉成before
rejoining the same route into 松山車站/捷運市政府站.[^tdx-bus] Five confirmed
interchanges are recorded in the curated stop-ID join set: Taipei City
Hall (BL18), Jiannan Rd. (BR15), Xihu (BR16), Gangqian (BR17) and Songshan
(G19) — the same five stations plain 藍7 confirms.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL7Sub; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL7Sub (32 stops):** National Palace Museum -> Waishuangxi -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Gangqian Police Station -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Xinhu 1st Rd Entrance -> Xinhu and Minshan Intersection (1) -> Xingshan Rd -> Tanmei Elementary School (Jiuzong) -> Zhoumei Village 1 -> Yucheng Village -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> yaxiang Park -> Yongji and Songxin Intersection -> futai Park -> Songshan High School of Agriculture and Industry -> Petroleum Building -> MRT Taipei City Hall Sta[^tdx-bus]

**BL7Sub (30 stops):** futai Park -> Yongji and Songxin Intersection -> yaxiang Park -> Songshan Farmers Association -> Songshan Rail Sta (Bade) -> Yucheng Village -> Zhoumei Village 1 -> Jiuzong Rd Sec (Xingshan) -> Xingshan Rd -> Xinhu and Minshan Intersection (1) -> Xinhu 1st Rd Entrance -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Minquan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Neihu Sports Center -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Waishuangxi -> Waishuangxi -> National Palace Museum[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍7 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍7副 or its
行善路 detour was found in this search. A headway-by-day-type figure is
likewise absent from the primary schedule page beyond its own weekday
0600–1900 and holiday 0630–2130 span statement, notably narrower on
weekdays and wider on holidays than plain 藍7's own span.[^ebus-bl7sub] No
predecessor-route or renumbering history for 藍7副 was located either, nor
a stated reason for the 行善路 detour existing as a separate route rather
than a subroute of plain 藍7 itself, unlike the subroute pattern used for
藍20's own 三軍總醫院內湖 bypass.
