---
title: BL22 / 藍22
summary: Blue-line feeder route BL22 (藍22).
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
    note: Lists 藍22 under 捷運藍線接駁公車.
  - id: ebus-bl22
    title: BL22 route schedule
    titleOriginal: 藍22班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止–南港花園社區 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍22 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止 - 南港花園社區, weekday and holiday service 0530–2340, a two-section fare and 大有巴士汐止站 as the service contact.[^ebus-bl22]

At 45 stops outbound, the confirmed stop sequence is one of the longer
routes in this batch: from 基隆市界 on Xizhi's eastern edge, through 汐止/
汐科 past several tech-park stops, into Nangang along 南港展覽館/南港軟體園區,
then south past 昆陽/後山埤 to end at 南港花園社區.[^tdx-bus] Three confirmed
interchanges are recorded in the curated stop-ID join set: Houshanpi
(BL20), Kunyang (BL21) and Taipei Nangang Exhibition Center, a Bannan–
Wenhu interchange (BL23/BR24).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL22; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL22 (45 stops):** Keelung City Line(Mingde 3rd Rd) -> Motian Community -> Asia Pacific Technology Park -> Baochangkeng -> Baoan Village -> Changan Village -> Chongyi High School(Wudu Rail Sta) -> Qiaodong Village -> Xizhi -> Xizhi Park -> Xizhi Elementary School -> Xike Science Park Sta N -> Far Eastern Technology Center -> Xike Science Park Sta S -> Haotianling -> United Daily News Group -> Zhang Shu Wan -> South Zhang Shu River Band -> Ocean Community -> Hengke -> MRT Nangang Exhibition Hall Station(Nangang Rd) -> Nangang Exhibition Hall -> Nangang Software Park S -> Park St -> Sanchong Village -> Yucheng High School -> Nangang Vocational High School (Chongyang) -> Dongxin Elementary School -> China Television Company -> Nangang Police Dist (Chongyang) -> Nangang High School -> MRT Kunyang -> Army Logistics Command -> Guohua New Village -> TCUH, Zhongxiao Branch -> MRT Houshanpi Sta -> Xiangbin New Village -> Yucheng Park(Chengfu) -> Chengfu Rd Entrance 1 -> Chengfu Changchun Assembly -> Nangang Public Housing II -> Nangang Garden Community 1 -> Nangang Garden Community 5 -> Nangang Garden Community 4 -> NanGang Public Housing III[^tdx-bus]

**BL22 (39 stops):** Chengfu Changchun Assembly -> Chengfu Rd Entrance 1 -> Yucheng Park(Chengfu) -> Xiangbin New Village -> TCUH Zhongxiao Branch (chengfu) -> MRT Houshanpi Sta -> TCUH Zhongxiao Branch -> Guohua New Village -> Army Logistics Command -> MRT Kunyang -> Nangang High School -> Nangang Police Dist (Chongyang) -> China Television Company -> Dongxin Elementary School -> Nangang Vocational High School (Chongyang) -> Yucheng High School -> Sanchong Village -> Park St -> Nangang Software Park N -> Nangang Software Park S -> MRT Nangang Exhibition Hall Station(Nangang Rd) -> Hengke -> Fusin Hotel -> South Zhang Shu River Band -> Zhang Shu Wan -> United Daily News Group -> Haotianling -> Xike Science Park Sta S -> Xike Science Park Sta N -> Xizhi Elementary School -> Xizhi Junior High School -> Xizhi -> Qiaodong Village -> Chongyi High School(Wudu Rail Sta) -> Changan Village -> Baoan Village -> Baochangkeng -> Xinmao Factory -> Keelung City Line(Mingde 3rd Rd)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] Why this route carries a two-section fare, unlike most other Blue-line
feeders in this batch which run a flat one-section fare over a comparably
long corridor, was not found in this search. The route length and a
headway-by-day-type figure also remain TBC beyond the schedule page's own
service-span statement, and no dated history for the route or its predecessor, if any, was found
in this search, nor any stated reason for the two-section fare on the operator's own
schedule page, 新北客運.
