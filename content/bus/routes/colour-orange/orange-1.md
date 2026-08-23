---
title: O1 / 橘1
summary: Orange-line feeder route O1 (橘1).
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
    note: Lists 橘1 under 捷運橘線接駁公車.
  - id: ebus-o1
    title: O1 route schedule
    titleOriginal: 橘1班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 錦繡–捷運景安站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘1 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 錦繡 - 捷運景安站, weekday service 0530–2230, holiday service 0600–2230, one-section fare and 指南客運錦繡站 as the service contact.[^ebus-o1]

The confirmed stop sequence starts at 錦秀路口 in New Taipei's Ankeng area,
runs through 安康/十四份 past a run of light-rail-adjacent stops, then follows
the same 陽光運動公園/新和國小 corridor as 橘9 before ending at 捷運景安站.[^tdx-bus] It calls at five confirmed interchanges along the way: 輕軌安康站
(Ankang, K06), 輕軌陽光運動公園站 (Sunshine Sports Park, K07), 輕軌新和國小站
(Xinhe Elementary School, K08) on the Ankeng Light Rail, and 捷運景安站
itself — Jing'an, served by both the Zhonghe–Xinlu Line (O02) and the
Circular Line (Y11).[^tdx-bus] As an orange-line feeder, its own colour
identifies the Zhonghe–Xinlu Line rather than a geographic zone, and it
happens to also connect directly to the newer Ankeng Light Rail along the
way — a cross-mode connection the route's own classification does not
name.[^ebus-orange] Its operator, 指南客運, also runs 橘9 out of the same
錦繡 dispatch point, the two routes' corridors diverging only at the 南勢角
end, where 橘9 continues on to 雙和醫院.[^ebus-o1]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O1; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O1 (37 stops):** Jinxiu Rd Entrance -> Biyao -> Rixing Library -> Sancheng -> Jianye Rd -> Ercheng -> Central Engraving and Printing Plant -> Zhongyang New Village -> Toucheng -> Toucheng 1 -> Damaopu -> Kangle New Village -> Jen-Kang Hospital -> Yirenkeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Langmanguizu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> LRT Ankang Sta -> Chi Jen High School -> Shisifen -> Guanghua St Entrance -> LRT Sunshine Sports Park Sta -> Shitoucuo -> Anhe Rd Sec 2 -> Yangguang Park (Xindian Flower Market) -> Yongping Village -> LRT Xinhe Elementary School Sta(Hydraulic building) -> Xinhe Elementary School -> Sanjie Temple -> Jingxin St -> Anle Rd Entrance -> Anhe Rd -> Xinxin Xiangrong -> Jingxin St Intersection -> MRT Jingan Sta[^tdx-bus]

**O1 (31 stops):** Zhonghe Church -> Jingxin St -> Sanjie Temple -> Xinhe Elementary School -> LRT Xinhe Elementary School Sta(Hydraulic building) -> Yongping Village -> Yangguang Park (Xindian Flower Market) -> Anhe Rd Sec 2 -> Shitoucuo -> LRT Sunshine Sports Park Sta -> Guanghua St Entrance -> Shisifen -> Chi Jen High School -> LRT Ankang Sta -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Langmanguizu -> Taipei Tobacco Factory -> Chezih Rd -> Yirenkeng -> Jen-Kang Hospital -> Kangle New Village -> Damaopu -> Toucheng 1 -> Toucheng -> Central Engraving and Printing Plant -> Ercheng -> Jianye Rd -> Sancheng -> Rixing Library -> Biyao[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
