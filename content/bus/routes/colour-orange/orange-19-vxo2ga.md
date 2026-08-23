---
title: O19 / 橘19
summary: Orange-line feeder route O19 (橘19).
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
    note: Lists 橘19 under 捷運橘線接駁公車.
  - id: ebus-o19
    title: O19 route schedule
    titleOriginal: 橘19班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五股–三重 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘19 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 五股 - 三重, weekday and holiday service 0530–2330, one-section fare and 三重客運五股站 as the service contact.[^ebus-o19] TDX carries a separate 橘19副 record (canonical slug `orange-19-153docx`) with the same published termini and operator and a shorter span; their relationship is TBC.

The confirmed stop sequence runs from 五股站 through 五股's 洲仔橋/成泰路三段/
坑口 streets, then into 蘆洲 past 捷運蘆洲站 and 捷運三民高中站, ending near 分子尾
in 三重.[^tdx-bus] Three confirmed interchanges lie along the way: 捷運徐匯
中學站 (St. Ignatius High School, O52), 捷運三民高中站 (Sanmin Senior High
School, O53) and 捷運蘆洲站 (Luzhou, O54).[^tdx-bus] Against its 橘19副
sibling's own stop sequence, this working takes a different street path
through 五股 — via 洲仔橋/成泰路三段/坑口/洲仔 rather than 新五路芳洲路口/芳洲
一路/賀聖宮/新城 — before both rejoin at 西雲寺.[^tdx-bus] Its full 0530–2330
span, weekday and holiday alike, is one of the longer published spans in
this project's colour-orange coverage, against 橘19副's shorter
commuter-hours schedule on the same general termini.[^ebus-o19] Its 31-stop
outbound and 30-stop return workings run close to symmetric, unlike several
other routes in this batch whose two directions differ by a wider
margin.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O19; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O19 (31 stops):** Wugu Sta -> Luguang Public Housing I -> Luguang Public Housing -> Wufu Community -> Community Activity Center -> Yongfeng International Bank -> Zhouzi Bridge -> Chengtai Rd Sec 3 -> Kengkou -> Zhouzih(Wugu Household Registration Office) -> Chenggong Village -> Xiyun Temple(Wugu Civil Sports Center) -> Wufuqiansui -> Chengzhou Elementary School -> Wugu Post Office -> XinXing Apartment -> Huiyao -> MRT Luzhou Sta -> Minzu Rd Entrance -> National Open Univ(Sanmin Rd) -> MRT Sanmin Senior High School -> Luzhou District Office -> Lujiang Elementary School(Sanmin Rd) -> XiQian -> MRT St Ignatius High School -> Nicaragua Park -> Jixian Rd -> Wuhua St Entrance -> Carrefour -> Fenziwei -> New Taipei Senior High School[^tdx-bus]

**O19 (30 stops):** Jisian Rd Intersection -> Nature Park -> Jixian Rd -> Nicaragua Park -> MRT St Ignatius High School Station -> Minhe Apartment(MRT St Ignatius High School Station) -> XiQian -> Lujiang Elementary School(Sanmin Rd) -> MRT Sanmin Senior High School -> Sanmin High School -> National Open Univ(Sanmin Rd) -> Minzu Rd Entrance -> MRT Luzhou Sta -> Huiyao -> Xinxing Apartment -> Wugu Post Office -> Chengzhou Elementary School -> Wufuqiansui -> Xiyun Temple(Wugu Civil Sports Center) -> Chenggong Village -> Zhouzih(Wugu Household Registration Office) -> Kengkou -> Chengtai Rd Sec 3 -> Zhouzi Bridge -> Yongfeng International Bank -> Community Activity Center -> Wufu Community -> Luguang Public Housing -> Luguang Public Housing I -> Wugu Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘19副 remain TBC.[^tdx-bus]
