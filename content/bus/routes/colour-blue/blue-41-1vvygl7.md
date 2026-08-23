---
title: BL41 / 藍41
summary: Blue-line feeder route BL41 (藍41).
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
    note: Lists 藍41 under 捷運藍線接駁公車.
  - id: ebus-bl41
    title: BL41 route schedule
    titleOriginal: 藍41班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 員福里–捷運永安市場站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍41 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 員福里 - 捷運永安市場站, weekday service 0545–2300, holiday service 0600–2300, one-section fare and 基隆客運土城站 as the service contact.[^ebus-bl41] TDX carries a separate 藍41延和 record (canonical slug `blue-41-3uzeni`) with the same published termini and operator; their relationship is TBC.

The confirmed stop sequence runs from 員福里 near 捷運海山站, through 裕民路/
清水/明德路, past 平和里/中和高中/連城路, into 中和's 圓通路/景新街 area, ending at
捷運永安市場站.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Jingan, a Zhonghe–Xinlu/Circular interchange
(O02/Y11), and Yongan Market (O03).[^tdx-bus] The route runs a single
subroute under one operator, 基隆客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL41; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL41 (33 stops):** Yuanfu Village -> Rihe Village -> Yumin Rd Entrance -> MRT Haishan Station -> Yumin Rd -> New Taipei Vocational High School(Yumin) -> Yumin Square -> Guangchuan Hospital -> Qingshui -> Qingshui & Liren Intersection -> Qingshui Elementary School -> Qingshui New Village -> Mingde Rd -> Yongfeng Rd Entrance -> Pinghe Village -> Transformer Station -> Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Zhongzheng Village I -> New Taipei City Zhonghe Civil Sports Center -> Jinhan High School -> Zhonghe Stop -> Yuantong Rd Lane 305 -> Shuang Ho Hospital -> Lixing Village -> Yuantong Rd Entrance -> Zhongxing St Entrance -> MRT Jingan Sta -> Jingxin St Entrance -> Anhe Rd Entrance -> Huatai Xincheng -> MRT Yongan Market Sta[^tdx-bus]

**BL41 (35 stops):** Yonghe Rd Intersection -> Ziyou St Entrance -> Ziqiang St Entrance -> Yonghe Rd Entrance -> MRT Yongan Market Sta -> Huatai Xincheng -> Anhe Rd Entrance -> Jingxin St Entrance -> MRT Jingan Sta -> Lixing Village -> Shuang Ho Hospital -> Shuangho Hospital -> Jinhe Rd Entrance -> New Taipei City Zhonghe Civil Sports Center -> Liancheng Rd Entrance -> Liancheng Rd -> Zhonghe High School -> Drivers Training Center -> Transformer Station -> Pinghe Village -> Yongfeng Rd Entrance -> Mingde Rd -> Qingshui New Village -> Qingshui Elementary School -> Qingshui & Liren Intersection -> Qingshui -> Yumin Rd Entrance -> Guangchuan Hospital -> Yumin Square -> Haishan Vocational High School -> Yumin Rd -> MRT Haishan Sta -> Yumin Rd Entrance -> Rihe Village -> Yuanfu Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍41延和 remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍41 was found in this search, nor a stated reason for
pairing 員福里 with 捷運永安市場站 specifically as the route's own termini.[^ebus-bl41]
No predecessor-route or renumbering history for 藍41 was located either,
and its relationship to 藍41延和 is stated on neither primary schedule page
beyond the shared termini and operator, 基隆客運. A headway-by-day-type
figure is also absent from the primary schedule page.[^ebus-bl41]
