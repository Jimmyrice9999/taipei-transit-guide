---
title: R12 / 紅12
summary: Red-line feeder route R12 (紅12).
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
    note: Lists 紅12 under 捷運紅線接駁公車.
  - id: ebus-r12
    title: R12 route schedule
    titleOriginal: 紅12班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 天文科學館–捷運石牌站 corridor, service span, one-section fare, headway notes and 中興巴士北士科站 contact.
---

## Classification and corridor

The official catalogue lists 紅12 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 天文科學館 - 捷運石牌站, weekday and holiday service 0600–2215, one-section fare and 中興巴士北士科站 as the service contact.[^ebus-r12]

The confirmed stop sequence runs from 天文科學館 near 雙溪, past 士林高商/士林
區行政中心/士林國中, through 忠誠公園/雨農國小/蘭雅新城/天母棒球場, ending at
榮總/捷運石牌站.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Shipai (R19), matching the route's own
terminus.[^tdx-bus] The route runs a single subroute under one operator,
中興巴士, with no recorded holiday variant or short working.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R12 (20 stops):** Astronomical Museum -> National Taiwan Science Education Center -> Shilin High School of Commerce -> Shilin Admin Center -> Shilin Jr High School -> Fulin Bridge -> Zhongcheng park -> Yunong Elementary School -> Lanya New Village -> Lanya Junior High School -> Tianmu Baseball Stadium (Zhongcheng) -> Taipei Municipal School of Special Education -> Sanyu Temple -> Qifu Mansion -> Qixian Mansion -> Veterans General Hospital I -> Veterans General Hospital -> Yongming Police Substation -> General Market (MRT Shipai Sta) -> MRT Shipai Sta (Xian)[^tdx-bus]

**R12 (22 stops):** MRT Shipai Sta (Donghua) -> General Market (MRT Shipai Sta) -> Yongming Police Substation -> Veterans General Hospital -> Cheng Hsin Park -> Qixian Mansion -> Qifu Mansion -> Sanyu Temple -> Taipei Municipal School of Special Education -> Tianmu Baseball Stadium (Zhongcheng) -> Lanya Junior High School -> Lanya New Village -> Yunong Elementary School -> Zhongcheng park -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> Fulin Bridge -> MRT Shilin Sta (Zhongzheng) -> Shilin Jr High School -> Shilin Admin Center -> Shilin High School of Commerce -> National Taiwan Science Education Center -> Astronomical Museum[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅12 was found
in this search, nor a stated reason for pairing 天文科學館 with 捷運石牌站
specifically as the route's own termini. A headway-by-day-type figure is
likewise absent from the primary schedule page beyond its own weekday and
holiday span statement. No predecessor-route or renumbering history for
紅12 was located either, nor a stated reason for confirming only a single interchange along a
corridor that also passes 天母棒球場 and several schools along the way,
including 士林高商 and 蘭雅國中, or for pairing 天文科學館 with 捷運石牌站 specifically as the route's own
termini.[^tdx-bus]
