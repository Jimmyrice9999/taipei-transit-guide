---
title: R15 / 紅15
summary: Red-line feeder route R15 (紅15).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅15 under 捷運紅線接駁公車.
  - id: ebus-r15
    title: R15 route schedule
    titleOriginal: 紅15班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 天母–社子 corridor, service span, one-section fare and 中興巴士天母站 contact.
---

## Classification and corridor

The official catalogue lists 紅15 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 天母 - 社子, weekday and holiday service 0600–2200, one-section fare and 中興巴士天母站 as the service contact.[^ebus-r15]

The confirmed stop sequence runs from 職能發展學院 near 芝山, past 忠孝新村/
芝山國小/忠義街/聯合醫院陽明院區, through a stop literally named 捷運士林站
(中正), then into 社子 past 陽明高中/社子市場/社子公園, ending at 社子國小二.[^tdx-bus] The curated stop-ID join set records zero confirmed
interchanges for this route, despite the literally-named 捷運士林站 stop
along the way.[^tdx-bus] The route runs a single subroute under one
operator, 中興巴士.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R15; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R15 (25 stops):** Taipei Vocational Development Institute 2 -> Zhongxiao New Village -> Zhishan Elementary School -> Dexing and Zhiyu Intersection -> Zhongyi St -> Yunong Elementary School -> Yunong Elementary School -> Zhongcheng park -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> Fulin Bridge -> MRT Shilin Sta (Zhongzheng) -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Shezheng Rd -> Cathay Life Insurance Building -> Shezi Park -> Yongping St Entrance -> Yonglun Village (Shezhong) -> Shezi Elementary School -> Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Substation -> Shezi Market2[^tdx-bus]

**R15 (13 stops):** Shezi Market -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Fulin Bridge -> Zhongcheng park -> Yunong Elementary School -> TCUH Yangming Branch -> Zhongyi St -> Dexing and Zhiyu Intersection -> Zhishan Elementary School -> Zhongxiao New Village -> Taipei Vocational Development Institute 2[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅15 was found
in this search. A headway-by-day-type figure is likewise absent from the primary schedule
page beyond its own weekday and holiday span statement. No predecessor-
route or renumbering history for 紅15 was located either, nor a stated
reason for pairing 天母 with 社子 across such a wide stretch of Shilin, nor
why the raw name-matching process attached to this route's own data
differs so sharply in outcome from sibling routes 紅10 and 紅7 along a
broadly similar corridor.[^tdx-bus]
