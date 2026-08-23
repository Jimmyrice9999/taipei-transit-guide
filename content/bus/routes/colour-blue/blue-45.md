---
title: BL45 / 藍45
summary: Blue-line feeder route BL45 (藍45).
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
    note: Lists 藍45 under 捷運藍線接駁公車.
  - id: ebus-bl45
    title: BL45 route schedule
    titleOriginal: 藍45班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 成福–捷運永寧站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍45 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 成福 - 捷運永寧站, weekday service 0600–2200, holiday service 0700–2040, one-section fare and 臺北客運三峽二站 as the service contact — sharing its operator with 藍43, 藍43延南天母 and 藍46.[^ebus-bl45]

The confirmed stop sequence runs from 田寮站 near 成福, past 竹崙/大成國小/
駱駝潭/成福派出所, through 大坪新村/辭修高中/溪東/橫溪, along 介壽路三段/溪北里,
ending at 捷運永寧站 via 頂埔/震安宮.[^tdx-bus] Four confirmed interchanges are
recorded in the curated stop-ID join set: Dingpu (BL01/LB01), Yongning
(BL02), Mazutian (LB02) and Changshoushan (LB03).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL45; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL45 (36 stops):** Tianliao Stop -> Zhulun -> Dacheng Elementary School -> Check Point -> Luotuotan -> Chengfu Police Station -> Chengfu Activity Center -> Haiyi 1 -> Haiyi -> Tatung Factory -> Daping New Village -> Cihxiu Senior High School -> Chengfu Elementary School -> Xidong -> Xidong Village -> Longxin Factory -> Hengxi -> Jieshou Rd Sec 3 -> Gas Sta -> Xibei Village -> MRT Changshoushan Sta -> Changshoushan -> Demen Temple -> Mazutian -> MRT Mazutian Sta(Taiyangcheng Community) -> Dingpu Elementary School -> Dingpu -> MRT Dingpu Sta -> Danuan Rd Entrance -> Tucheng Industrial Dist -> Fude Temple -> Tucheng Junior High School -> Zhongyang Rd Sec 3 -> MRT Yongning Station -> Zhongyi Rd Entrance -> Jhenan Temple[^tdx-bus]

**BL45 (35 stops):** Zhongyi Rd Entrance -> MRT Yongning Station -> Zhongyang Rd Sec 3 -> Tucheng Junior High School -> Fude Temple -> Tucheng Industrial Dist -> Danuan Rd Entrance -> MRT Dingpu Sta -> Dingpu -> Dingpu Elementary School -> MRT Mazutian Sta(Taiyangcheng Community) -> Mazutian -> Demen Temple -> Changshoushan -> MRT Changshoushan Sta -> Xibei Village -> Gas Sta -> Jieshou Rd Sec 3 -> Hengxi -> Longxin Factory -> Xidong Village -> Xiubo Electronics -> Chengfu Elementary School -> Cixiu high School -> Daping New Village -> Tatung Factory -> Haiyi -> Haiyi 1 -> Chengfu Activity Center -> Chengfu Police Station -> Luotuotan -> Security Checkpoint -> Zhulun -> Tianliao Stop -> Queenstown farm[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍45 or its relationship to sibling routes 藍43 and 藍46,
run by the same operator through overlapping 三峽/土城 territory, was found
in this search. Whether 臺北客運 designed these three routes as a
deliberate network or grew them independently over time is likewise not
established. No predecessor-route or renumbering history for 藍45
specifically was located in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own weekday 0600–2200 and
holiday 0700–2040 span statement.[^ebus-bl45]
