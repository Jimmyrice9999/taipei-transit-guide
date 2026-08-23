---
title: BL29 / 藍29
summary: Blue-line feeder route BL29 (藍29).
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
    note: Lists 藍29 under 捷運藍線接駁公車.
  - id: ebus-bl29
    title: BL29 route schedule
    titleOriginal: 藍29班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 東園–聯合醫院中興院區 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍29 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 東園 - 聯合醫院中興院區, weekday and holiday service 0600–0000, one-section fare and 欣欣客運華江站 as the service contact.[^ebus-bl29]

The confirmed stop sequence runs from 東園 through 光仁國小/青年路/中正新城,
past 青年公園 and 古亭國中/萬華醫院, along 西藏路/萬大路past 萬華車站, then on the
return working through 捷運北門站/萬華運動中心/捷運西門站/小南門/龍山寺(康定) before
ending at 聯合醫院中興院區.[^tdx-bus] Three confirmed interchanges are
recorded in the curated stop-ID join set: Longshan Temple (BL10), Ximen — a
Bannan–Songshan/Xindian interchange (BL11/G12) — and Beimen (G13).[^tdx-bus]
The route runs a single subroute under one operator, 欣欣客運, the same
company that runs neighbouring 藍28.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL29; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B29 (29 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Guangren Elementary School -> Qingnian Rd Police Substation -> Qingnian Rd -> Zhongzheng New Village -> Qingnian Community -> Youth Park (Qingnian) -> Youth Park (Guoxing) -> Guoxing Rd Entrance 1 -> Guting Junior High School -> Wanhua Hospital -> Guoxing Community -> Guoxing Rd Entrance 1 -> Guoxing Rd Entrance -> Zhonghua and Nanhai Intersection -> Nanjichang Apartment -> Xizang Rd -> Wanda Rd -> Juguang Rd Entrance -> Wanhua Station -> Longshan Temple (Bopiliao) -> Laosong Elementary School -> Kunming Activity Center -> Kunming St -> Taipei Municipal Hospital of Tradodional Chinese Medicine -> FuxingPark -> Luoyang Parking Lot -> TCUHZhongxinBranch[^tdx-bus]

**B29 (29 stops):** MRT Beimen Station -> Wanhua Sports Center -> ZhongHua HanKou Intersection -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> Guilin and Kunming Intersection -> Laosong Elementary School -> Longshan Temple (Kangding) -> Wanhua Station -> Juguang Rd Entrance -> Wanda Rd -> Xizang Rd -> Shaan Village -> Nanjichang Apartment -> Zhonghua and Nanhai Intersection -> Guoxing Rd Entrance -> Guting Junior High School -> Wanhua Hospital -> Guoxing Community -> Youth Park (Guoxing) -> Youth Park (Qingnian) -> Qingnian Community -> Zhongzheng New Village -> Qingnian Rd -> Qingnian Rd Police Substation -> Guangren Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍29, nor a stated reason for its own near-24-hour
0600–0000 span, close to but not identical with neighbouring 藍28's
0550–0000, was found in this search. Whether 藍28 and 藍29, run by the same
operator with near-identical spans and both terminating near 東園, were
introduced together as a pair or grew independently over time is likewise
not established in this search.
