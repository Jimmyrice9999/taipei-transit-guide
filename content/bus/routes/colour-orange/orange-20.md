---
title: O20 / 橘20
summary: Orange-line feeder route O20 (橘20).
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
    note: Lists 橘20 under 捷運橘線接駁公車.
  - id: ebus-o20
    title: O20 route schedule
    titleOriginal: 橘20班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 觀音山–蘆洲 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘20 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 觀音山 - 蘆洲, weekday service 0540–2050, holiday service 0540–2000, one-section fare and 三重客運五股站 as the service contact — sharing its operator with 橘19 and 橘19副.[^ebus-o20]

The confirmed stop sequence climbs 觀音山 (Guanyinshan), calling at a run of
named temples — 凌雲禪寺, 凌雲寺, 妙雲寺 — before descending through 五股's
成州市場 area into 蘆洲, ending at 捷運蘆洲站.[^tdx-bus] TDX carries two
variants of this route, one starting at 觀音山遊客中心 (the mountain's own
visitor centre) and one at 凌雲寺停車場 (the temple's own car park), differing
only in their first two stops.[^tdx-bus] Two confirmed interchanges sit at
the built-up end of the route rather than on the mountain itself: 捷運蘆洲站
(Luzhou, O54) and 捷運三民高中站 (Sanmin Senior High School, O53).[^tdx-bus]
Its 三重客運五股站 operator contact is shared with 橘19 and 橘19副, three
routes serving different parts of the same general 五股 area from one
dispatch point.[^ebus-o20] Its own two variants' dir0 workings run 22 and
20 stops respectively, the shortest difference between named variants of
any route in this project's colour-orange coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for O20; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O20 Guanyin Mountain Visitor Center (22 stops):** Guanyin Mountain Visitor Center -> Lingyun Temple -> Lingyun Temple 1 -> Lingyun Temple -> Miaoyun Temple -> Guanyin Village -> Fulongshan -> Fulongshan 1 -> Guanyinshan -> Lingyun Road Sec 1 -> Zhongkeng -> Guanyinkeng -> Qigan Lake -> Lingyun Bridge 5 -> Jifu Village -> língfong Temple -> Zhongyi Bridge -> Chengzhou Market -> Wugu Post Office -> XinXing Apartment -> Huiyao -> MRT Luzhou Sta[^tdx-bus]

**O20 Guanyin Mountain Visitor Center (33 stops):** Minzu Rd Entrance -> National Open Univ(Sanmin Rd) -> MRTSanMin High School -> Minquan Rd Entrance -> Fuxing Rd -> Loucuo -> Minzu & Minyi Intersection -> Renai St Entrance -> Renai Elementary School -> Minzu Rd Entrance -> MRT Luzhou Sta -> MRT Luzhou Sta -> Huiyao -> Xinxing Apartment -> Wugu Post Office -> Chengde Market -> Zhongyi Bridge -> língfong Temple -> Jifu Village -> Lingyun Bridge 5 -> Qigan Lake -> Guanyinkeng -> Zhongkeng -> Lingyun Road Sec 1 -> Guanyinshan -> Fulongshan 1 -> Fulongshan -> Guanyin Village -> Miaoyun Temple -> Lingyun Temple -> Lingyun Temple 1 -> Lingyun Temple -> Guanyin Mountain Visitor Center[^tdx-bus]

**O20 Lingyun Temple Parking Lot (20 stops):** Lingyun Temple Parking Lot -> Lingyun Temple -> Miaoyun Temple -> Guanyin Village -> Fulongshan -> Fulongshan 1 -> Guanyinshan -> Lingyun Road Sec 1 -> Zhongkeng -> Guanyinkeng -> Qigan Lake -> Lingyun Bridge 5 -> Jifu Village -> língfong Temple -> Zhongyi Bridge -> Chengzhou Market -> Wugu Post Office -> XinXing Apartment -> Huiyao -> MRT Luzhou Sta[^tdx-bus]

**O20 Lingyun Temple Parking Lot (31 stops):** Minzu Rd Entrance -> National Open Univ(Sanmin Rd) -> MRTSanMin High School -> Minquan Rd Entrance -> Fuxing Rd -> Loucuo -> Minzu & Minyi Intersection -> Renai St Entrance -> Renai Elementary School -> Minzu Rd Entrance -> MRT Luzhou Sta -> MRT Luzhou Sta -> Huiyao -> Xinxing Apartment -> Wugu Post Office -> Chengde Market -> Zhongyi Bridge -> língfong Temple -> Jifu Village -> Lingyun Bridge 5 -> Qigan Lake -> Guanyinkeng -> Zhongkeng -> Lingyun Road Sec 1 -> Guanyinshan -> Fulongshan 1 -> Fulongshan -> Guanyin Village -> Miaoyun Temple -> Lingyun Temple -> Lingyun Temple Parking Lot[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
