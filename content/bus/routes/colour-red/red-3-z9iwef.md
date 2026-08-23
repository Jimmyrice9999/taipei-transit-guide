---
title: R3Shuttle / 紅3區
summary: Red-line feeder route R3Shuttle (紅3區).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅3區 under 捷運紅線接駁公車.
  - id: ebus-r3-shuttle
    title: R3Shuttle route schedule
    titleOriginal: 紅3區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000320
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子站–內湖科技園區 corridor, weekday/holiday service spans, 陽明高中–劍潭 buffer, two-section fare, special-calendar note and 光華巴士洲美站 contact.
---

## Classification and corridor

The official catalogue lists 紅3區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 社子站 - 內湖科技園區, weekday service 0545–2200, holiday service 0800–2000, a 陽明高中–劍潭 fare buffer, two-section fare and 光華巴士洲美站 as the service contact.[^ebus-r3-shuttle] The page says national holidays use the Sunday timetable, Lunar New Year's Eve uses the Saturday timetable, and typhoon closure days use the Sunday timetable.[^ebus-r3-shuttle]

The confirmed stop sequence follows plain 紅3's own 社子/士林/中山北路/大直
corridor as far as 捷運劍南路站, then continues into Neihu's 濱江/瑞光/西湖
area rather than turning toward 台北花市, ending at 港墘派出所.[^tdx-bus] Five
confirmed interchanges are recorded in the curated stop-ID join set: Dazhi
(BR14), Jiannan Rd. (BR15), Gangqian (BR17), Jiantan (R15) and Shilin
(R16) — the same five stations plain 紅3 confirms.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R3Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R3Shuttle (44 stops):** Shezi Elementary School2 -> Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Substation -> Shezi Market2 -> Shezi Market -> Hulu Temple (Hulu Village) -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> The Grand Hotel -> Radio Taiwan International -> Martyr Shrine -> CHING-KUO Chihai Cultural Park -> Air Force Command Headquarters -> Dazhi High School -> Dazhi Elementary School -> MRT Dazhi Station -> Zhifu Temple -> Zihqiang Tunnel (Dazhi Church) -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Jingye 3rd Rd 1 -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Zhipan New Village -> Neihu and Jihu Intersection -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Wende Police Substation -> Wende Park No2 -> Huguang Public Housing -> Xihu Library (Huguang Church) -> Gangqian Police Station[^tdx-bus]

**R3Shuttle (30 stops):** Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Jingye 3rd Rd 2 -> Jingye 3rd Rd 1 -> MRT Jiannan Rd Station -> Zihqiang Tunnel -> Zhifu Temple -> MRT Dazhi Station -> Dazhi High School -> Air Force Command Headquarters -> Martyr Shrine -> Radio Taiwan International -> The Grand Hotel -> Jiantan -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shihlin Farmers Association -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Sheyuan Village -> Shezi Police Substation -> Yonoglun Village (south) -> Shezi Elementary School -> Yonglun Village (Yanping)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅3區 or its
relationship to plain 紅3, run by the same operator over a shared opening
corridor, was found in this search.[^tdx-bus] A headway-by-day-type figure is
likewise absent from the primary schedule page beyond its own weekday
0545–2200 and holiday 0800–2000 span statement.[^ebus-r3-shuttle]
