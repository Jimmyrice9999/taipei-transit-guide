---
title: BL18 / 藍18
summary: Blue-line feeder route BL18 (藍18).
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
    note: Lists 藍18 under 捷運藍線接駁公車.
  - id: ebus-bl18
    title: BL18 route schedule
    titleOriginal: 藍18班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中和–新莊田徑場(中和里) corridor, service span, fare and two operator contacts.
---

## Classification and corridor

The official catalogue lists 藍18 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 中和 - 新莊田徑場(中和里), weekday and holiday service 0600–2300, one-section fare and two service contacts, 首都客運新莊一站 and 臺北客運中和站.[^ebus-bl18]

The confirmed stop sequence runs from 中和站, through 中和's 光寶電子/國際
科學園區/正隆廣場 area, into 板橋 past 板橋花市/捷運頭前庄站/臺北醫院, then north
into 新莊 along 幸福新城/中原路/中平國中/新莊高中, ending at 新莊田徑場.[^tdx-bus]
Six confirmed interchanges are recorded in the curated stop-ID join set:
Xinpu (BL08), Touqianzhuang (O17/Y18), Qiaohe (Y13), Zhongyuan (Y14),
Banxin (Y15) and Xinpu Minsheng (Y17).[^tdx-bus] TDX records two named
subroutes, 藍18中和站 and 藍18新莊田徑場(中和里), matching the two schedule-page
termini and run jointly by two operators, 首都客運 and 臺北客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL18; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL18Zhonghe Sta (33 stops):** Zhonghe Stop -> New Taipei City Zhonghe Civil Sports Center -> Zhongzheng Rd -> Lite-On Electronics Inc -> Zhongshan Rd Entrance -> Bannan Rd Entrance -> Lide St -> International Science Park -> Zhonghe District Household Registration Office(Yuanshan Branch) -> Zhenglong Square -> Military Police Squad -> Minsheng Zongshan Road Intersection -> Banqiao Flower Market -> MRT Xinpu Sta -> MRT Touqianzhuang  Sta (Siyuan Rd) -> Taipei Hospital -> Siyuan & Fuxing Intersection -> Xingfu & Siyuan Intersection -> Xingfu New Village -> Xingfu & Zhonghua Intersection -> Lianbang Community -> Zhonghua & Zhongyuan Intersection -> Zhongyuan Village -> Zhongyuan Rd -> Zhongyuan & Zhongping Intersection -> Zhongping Junior High School -> Xinzhuang High School(Xinzhuang Culture & Arts Center) -> Xinzhuang High School -> Zhongping Rd -> Xintai & Fuxing Intersection -> Xinzhuang Baseball Stadium(Ligong Village Lide Village) -> Xinzhuang Stadium(Ligong Village) -> Xinzhuang Athletic Field(Zhonghe Village)[^tdx-bus]

**BL18Xinzhuang Stadium (32 stops):** Xinzhuang Athletic Field(Zhonghe Village) -> Xinzhuang Stadium(Ligong Village) -> Xinzhuang Baseball Stadium(Ligong Village Lide Village) -> Xintai Junior High School South Stop -> Zhongping Rd -> Xinzhuang High School -> Xinzhuang High School(Xinzhuang Culture & Arts Center) -> Zhongping Junior High School -> Zhongyuan Rd -> Zhongyuan Village -> Zhonghua & Zhongyuan Intersection -> Lianbang Community -> Xingfu & Zhonghua Intersection -> Xingfu New Village -> Xingfu & Siyuan Intersection -> Renyi Village -> Siyuan & Fuxing Intersection -> Taipei Hospital -> MRT Touqianzhuang(Siyuan Rd) -> MRT Xinpu Sta -> Banqiao Flower Market -> Minsheng Zongshan Road Intersection -> Zhenglong Square -> Yuanshan Rd Entrance -> MRT Zhongyuan Sta -> Jieshou Rd Sec 3 -> Bannan Rd Entrance -> Lite-On Electronics Inc -> Xinan Village -> New Taipei City Zhonghe Civil Sports Center -> Jinhan High School -> Zhonghe Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] How the two operators, 首都客運 and 臺北客運, divide the route's departures
between them, and whether each runs one direction or alternates, was not
found in this search. Nor was any dated history explaining why the route
carries two separately-named termini variants rather than a single fixed
corridor. The route length and a headway-by-day-type figure also remain
TBC, and no predecessor route or renumbering history was found in this
search.
