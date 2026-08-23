---
title: O18fu / 橘18福隆路
summary: Orange-line feeder route O18fu (橘18福隆路).
updated: 2026-08-19
line: O
facts:
  - label: Service class
    value: MRT orange-line feeder
    source: ebus-orange
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
  - id: ebus-orange
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 橘18福隆路 under 捷運橘線接駁公車.
  - id: ebus-o18fu
    title: O18fu route schedule
    titleOriginal: 橘18福隆路班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001870
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–五華街 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘18福隆路 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 蘆洲 - 五華街, weekday service 0600–2000, holiday service 0600–1900, one-section fare and 大都會客運蘆洲站 as the service contact — the same termini and operator as plain 橘18 (`orange-18-1wqt5b1`), with a shorter published span and the 福隆路 suffix distinguishing the TDX record.[^ebus-o18fu]

The confirmed stop sequence matches plain 橘18 almost exactly — the same
捷運三和國中站 (O51), 捷運徐匯中學站 (O52) and 捷運三民高中站 (O53) interchanges —
but detours via 仁政街, 福隆路 and 仁愛街 between 溪尾街口 and 自強路五段, the
literal street the route's own suffix names, where plain 橘18 runs
straight.[^tdx-bus] That is a real, if short, corridor difference rather
than an alternate name for the same stop-for-stop route.[^tdx-bus] Its
published span, weekday 0600–2000 and holiday 0600–1900, runs shorter than
plain 橘18's 0600–2200/0600–2100 despite sharing an operator and near-
identical corridor.[^ebus-o18fu] Its 41-stop return working is longer than
its 34-stop outbound one, both counting stops the plain 橘18 sibling's own
31/38-stop pair does not exactly match despite the near-identical
route.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O18fu; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O18 fu (34 stops):** Luzhou Sta -> Jiuqiong St Entrance -> Jiuqiong Temple -> Wanquan Market -> Guanghua & Heping Intersection -> Guanghua & Zhongzheng Intersection -> Yonglian Temple -> MRT Sanmin Senior High School Station(Fuxing Rd 1) -> MRTSanMin High School -> Minquan Rd Entrance -> Fuxing Rd -> Hutian Temple -> Zhongxing St(Fuxing Rd) -> Zhongxing St(Minzu Rd) -> Yuqing Temple -> Xinyi Rd -> Xinyi Rd Entrance -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Ziqiang Rd Entrance -> Xiwei St Entrance -> Renzheng St -> Fulong Rd -> Renai St -> Ziqiang Rd Sec 5 -> Wuhua St -> Bihua Elementary School -> Jiying Rd -> Sanxian and Jizhi Intersection -> Xinxian St -> New Taipei Senior High School -> Wuhua Elementary School[^tdx-bus]

**O18 fu (41 stops):** Mozart Community -> Jinan St -> Tonghua St -> Wuhua Village -> Renyi St -> Jijing Community -> Chongyang Bridge Civic Activity Center -> New Taipei Senior High School -> Xinxian St -> Sanxian and Jizhi Intersection -> Jiying Rd -> Fenziwei -> Bihua Elementary School -> Wuhua St -> Ziqiang Rd Sec 5 -> Renai St -> Fulong Rd -> Renzheng St -> Xiwei St Entrance -> Ziqiang Rd Entrance -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Xinyi Rd Entrance -> Xinyi Rd -> Yuqing Temple -> Zhongxing St(Minzu Rd) -> Zhongxing St(Fuxing Rd) -> Hutian Temple -> Fuxing Rd -> Minquan Rd Entrance -> MRT Sanmin Senior High School Station(Fuxing Rd) -> Yonglian Temple -> Guanghua & Zhongzheng Intersection -> Guanghua & Heping Intersection -> Wanquan Market -> Jiucun Temple -> Jiucun St Intersection -> Luzhou Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the meaning of the 福隆路 suffix beyond a literal street name remain TBC.[^tdx-bus]
