---
title: O9 / 橘9
summary: Orange-line feeder route O9 (橘9).
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
    note: Lists 橘9 under 捷運橘線接駁公車.
  - id: ebus-o9
    title: O9 route schedule
    titleOriginal: 橘9班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 錦繡–雙和醫院 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘9 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 錦繡 - 雙和醫院, weekday service 0555–1935, holiday service 0615–1935, one-section fare and 指南客運錦繡站 as the service contact — sharing its 錦繡 origin and operator contact with 橘1.[^ebus-o9]

The confirmed stop sequence shares almost the entire 錦秀路口-to-陽光運動公園
corridor with 橘1 — including a detour past 伴山別墅/綠野香坡 that 橘1's own
sequence does not carry — but continues past 南勢角 and 捷運景安站 to end at
雙和醫院, well beyond 橘1's own 景安 terminus.[^tdx-bus] It confirms the same
four interchanges as 橘1 — 輕軌安康站 (K06), 輕軌陽光運動公園站 (K07), 輕軌新和
國小站 (K08) and 捷運景安站 (Jing'an, O02/Y11) — reached partway along rather
than at the terminus.[^tdx-bus] Its published span, weekday 0555–1935 and
holiday 0615–1935, is shorter at both ends of the day than 橘1's 0530–2230
span despite sharing an origin, an operator and most of a corridor.[^ebus-o9]
The 伴山別墅/綠中海/彩蝶別墅 estates its detour serves are the same gated
communities this project's colour-green coverage records 綠15 also passing
through, from a different direction.[^tdx-bus] Its 45-stop outbound and
41-stop return workings are among the longer single-direction stop counts
recorded in this project's colour-orange coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O9; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O9 (45 stops):** Jinxiu Rd Entrance -> Biyao -> Rixing Library -> Sancheng -> Ankang & Jianye Intersection -> JENG SHONG Company -> Tianyi -> Banshan Villa(1) -> Banshan Villa(2) -> Banshan Villa(3) -> Luyexiangpo -> ZaoJhen -> Green Villa Stage 2 -> Banwu Villa -> Caidie Villa -> Green Villa Stage 1 -> Anxiang Rd Entrance -> DaMaoPu -> Kangle New Village -> Jen-Kang Hospital -> YiRenKeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> LangManGuiZu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> LRT Ankang Sta -> Chi Jen High School -> Shisifen -> Guanghua St Entrance -> LRT Sunshine Sports Park Sta -> Shitoucuo -> Anhe Rd Sec 2 -> Yangguang Park (Xindian Flower Market) -> Yongping Village -> LRT Xinhe Elementary School Sta(Hydraulic building) -> Xinhe Elementary School -> Sanjie Temple -> Jingxin St -> Nanshijiao(Jingping Rd) -> ZhongHe Church -> MRT Jingan Sta(Jingping Rd) -> Lixing Village -> Shuanghe Hospital -> Shuang Ho Hospital[^tdx-bus]

**O9 (41 stops):** Yuantong Rd Entrance -> Zhongxing St Entrance -> MRT Jingan Sta(Jingping Rd) -> Zhonghe Church -> Jingxin St -> Sanjie Temple -> Xinhe Elementary School -> LRT Xinhe Elementary School Sta(Hydraulic building) -> Yongping Village -> Yangguang Park (Xindian Flower Market) -> Anhe Rd Sec 2 -> Shitoucuo -> LRT Sunshine Sports Park Sta -> Guanghua St Entrance -> Shisifen -> Jiren High School -> LRT Ankang Sta -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Caidie Villa -> Taipei Cigarette Plant -> CheZi Rd -> Yirenkeng -> Jen-Kang Hospital -> KangLe XinCun -> Damaopu -> Anxiang Rd Entrance -> Green Villa Stage 1 -> Caidie Villa -> Banwu Villa -> Green Villa Stage 2 -> ZaoJhen -> Luyexiangpo -> Banshan Villa(3) -> Banshan Villa(2) -> Banshan Villa(1) -> Tianyi -> JENG SHONG Company -> Sancheng -> Rixing Library -> Biyao[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 橘1 remain TBC.[^tdx-bus]
