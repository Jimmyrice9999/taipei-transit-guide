---
title: BL41 Yanhe / 藍41延和
summary: Blue-line feeder route BL41 Yanhe (藍41延和).
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
    note: Lists 藍41延和 under 捷運藍線接駁公車.
  - id: ebus-bl41yanhe
    title: BL41 Yanhe route schedule
    titleOriginal: 藍41延和班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004170
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 員福里–捷運永安市場站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍41延和 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 員福里 - 捷運永安市場站, weekday service 0600–2230, holiday service 0635–2220, one-section fare and 基隆客運土城站 as the service contact — the same termini and operator as plain 藍41 (`blue-41-1vvygl7`), with a different published span.[^ebus-bl41yanhe]

The confirmed stop sequence runs from 員福里 near 捷運海山站, through 裕民路/
清水/明德路, then via 金城路口/安和國小/延和路/延和社區公園 — a detour plain 藍41
does not take — before rejoining the same 中和高中/圓通路/景新街 corridor into
捷運永安市場站.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Jingan, a Zhonghe–Xinlu/Circular interchange
(O02/Y11), and Yongan Market (O03) — the same two stations plain 藍41
confirms.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL41 Yanhe; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL41 Yanhan (35 stops):** Yuanfu Village -> Rihe Village -> Yumin Rd Entrance -> MRT Haishan Station -> Yumin Rd -> New Taipei Vocational High School(Yumin) -> Yumin Square -> Guangchuan Hospital -> Qingshui -> Qingshui & Liren Intersection -> Qingshui Elementary School -> Qingshui New Village -> Mingde Rd -> Jincheng Rd Entrance -> Anhe Elementary School -> Yanhe Rd -> Yanhe Community Park -> Transformer Station -> Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Zhongzheng Village I -> New Taipei City Zhonghe Civil Sports Center -> Jinhan High School -> Zhonghe Stop -> Yuantong Rd Lane 305 -> Shuang Ho Hospital -> Lixing Village -> Yuantong Rd Entrance -> Zhongxing St Entrance -> MRT Jingan Sta -> Jingxin St Entrance -> Anhe Rd Entrance -> Huatai Xincheng -> MRT Yongan Market Sta[^tdx-bus]

**BL41 Yanhan (37 stops):** Yonghe Rd Intersection -> Ziyou St Entrance -> Ziqiang St Entrance -> Yonghe Rd Entrance -> MRT Yongan Market Sta -> Huatai Xincheng -> Anhe Rd Entrance -> Jingxin St Entrance -> MRT Jingan Sta -> Lixing Village -> Shuang Ho Hospital -> Shuangho Hospital -> Jinhe Rd Entrance -> New Taipei City Zhonghe Civil Sports Center -> Liancheng Rd Entrance -> Liancheng Rd -> Zhonghe High School -> Drivers Training Center -> Transformer Station -> Yanhe Community Park -> Yanhe Rd -> Anhe Elementary School -> Jincheng Rd Entrance -> Mingde Rd -> Qingshui New Village -> Qingshui Elementary School -> Qingshui & Liren Intersection -> Qingshui -> Yumin Rd Entrance -> Guangchuan Hospital -> Yumin Square -> Haishan Vocational High School -> Yumin Rd -> MRT Haishan Sta -> Yumin Rd Entrance -> Rihe Village -> Yuanfu Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍41 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍41延和 or
a stated reason for the 延和路 detour's own name — "extending via Yanhe" —
was found in this search.[^ebus-bl41yanhe] A headway-by-day-type figure is
likewise absent from the primary schedule page beyond its own weekday
0600–2230 and holiday 0635–2220 span statement.[^ebus-bl41yanhe] No
predecessor-route or renumbering history for either 藍41延和 or plain 藍41
was located.
