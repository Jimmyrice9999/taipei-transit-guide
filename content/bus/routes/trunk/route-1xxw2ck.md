---
title: Zhongshan Metro Bus / 中山幹線
summary: Trunk route 中山幹線 (Zhongshan Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 中山幹線 under 幹線專車.
  - id: ebus-zhongshan
    title: Zhongshan Metro Bus route schedule
    titleOriginal: 中山幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 天母–青年公園 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 中山幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 中山幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 天母 - 青年公園, weekday and holiday service 0530–2300, a two-section fare and 光華巴士天東站 as the service contact.[^ebus-zhongshan]

A community wiki lists 中山幹線 as the renamed form of a former numbered
route, 220, one of eight conversions this project's joint-operation network
page records — like 松江新生幹線's 642, a numbered route rather than an
already-colour-prefixed feeder.[^zh-trunk-bus]

The confirmed stop sequence runs from 天母 in Shilin/Beitou, down 中山北路
through Shilin and Zhongshan past 台北市立美術館 (Taipei Fine Arts Museum),
through central Taipei past 西門, then along 中華路 into Wanhua and 青年公園
(Youth Park) in the south.[^tdx-bus] Four confirmed interchange points, covering all six curated codes, are
named directly in the stop sequence: 捷運士林站 (Shilin, R16), 捷運劍潭站
(Jiantan, R15), 臺北車站 (Taipei Main Station, served by both the Bannan
Line as BL12 and the Tamsui–Xinyi Line as R10) and 捷運西門站 (served by
both the Bannan Line as BL11 and the Songshan–Xindian Line as
G12).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Zhongshan Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Zhongshan Metro Bus (46 stops):** Taipei Vocational Development Institute 2 -> Taipei Vocational Development Institute -> Dongshan Rd -> Tianmu Junior High School -> Zhongcheng Rd Entrance -> Sanyu Temple -> Tianmu Square -> Tianmu New Village -> Tianmu -> Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> Taipei American School/ Japanese School -> Laicuo -> Shidong Elementary School -> Keqiang Swimming Pool -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> Fulin Bridge -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> Taipei Fine Arts Museum -> Tatung U -> Tatung Company (Qingguang Market) -> Taini Building (Mackay Memorial Hospital) -> The Ambassador Hotel -> Zhongshan Market -> Executive Yuan -> Taipei Main Sta (Zhongxiao) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> TCUH, Heping Branch -> Dapu St -> Shaan Village -> Nanjichang Apartment -> Zhonghua and Nanhai Intersection -> Guoxing Rd Entrance -> Guting Junior High School -> Wanhua Hospital -> Youth Park (Traffic Teaching Area) -> Youth Park[^tdx-bus]

**Zhongshan Metro Bus (45 stops):** Qingnian Social Housing -> Qingnian Rd -> Zhongzheng New Village -> Qingnian Community -> Youth Park (Qingnian) -> Youth Park (Guoxing) -> Guoxing Rd Entrance 1 -> Guoxing Rd Entrance -> Zhonghua and Nanhai Intersection -> Nanjichang Apartment -> Shaan Village -> Dapu St -> TCUH, Heping Branch -> MRT Ximen Sta -> Zhonghua Rd N Stop -> Taipei Main Sta (Zhongxiao) -> Executive Yuan -> Zhongshan Market -> The Ambassador Hotel -> Taini Building (Mackay Memorial Hospital) -> Tatung Company (Qingguang Market) -> Tatung U -> Taipei Fine Arts Museum -> Jiantan -> Mingchuan U -> Taiwan Power Company North Taipei District Office -> Chiang Kai-Shek Shilin Residence (Zhongshan) -> Fulin Bridge -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Keqiang Swimming Pool -> Shidong Elementary School -> Laicuo -> Taipei American School/ Japanese School -> Tianmu Square -> Tianmu New Village -> Tianmu -> Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> Sanyu Temple -> Zhongcheng Rd Entrance -> Tianmu Junior High School -> Dongshan Rd -> Taipei Vocational Development Institute 2[^tdx-bus]

**Zhongshan Metro Bus (46 stops):** Taipei Vocational Development Institute 2 -> Taipei Vocational Development Institute -> Dongshan Rd -> Tianmu Junior High School -> Zhongcheng Rd Entrance -> Sanyu Temple -> Tianmu Square -> Tianmu New Village -> Tianmu -> Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> Taipei American School/ Japanese School -> Laicuo -> Shidong Elementary School -> Keqiang Swimming Pool -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> Fulin Bridge -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> Taipei Fine Arts Museum -> Tatung U -> Tatung Company (Qingguang Market) -> Taini Building (Mackay Memorial Hospital) -> The Ambassador Hotel -> Zhongshan Market -> Executive Yuan -> Taipei Main Sta (Zhongxiao) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> TCUH, Heping Branch -> Dapu St -> Shaan Village -> Nanjichang Apartment -> Zhonghua and Nanhai Intersection -> Guoxing Rd Entrance -> Guting Junior High School -> Wanhua Hospital -> Youth Park (Traffic Teaching Area) -> Youth Park[^tdx-bus]

**Zhongshan Metro Bus (45 stops):** Qingnian Social Housing -> Qingnian Rd -> Zhongzheng New Village -> Qingnian Community -> Youth Park (Qingnian) -> Youth Park (Guoxing) -> Guoxing Rd Entrance 1 -> Guoxing Rd Entrance -> Zhonghua and Nanhai Intersection -> Nanjichang Apartment -> Shaan Village -> Dapu St -> TCUH, Heping Branch -> MRT Ximen Sta -> Zhonghua Rd N Stop -> Taipei Main Sta (Zhongxiao) -> Executive Yuan -> Zhongshan Market -> The Ambassador Hotel -> Taini Building (Mackay Memorial Hospital) -> Tatung Company (Qingguang Market) -> Tatung U -> Taipei Fine Arts Museum -> Jiantan -> Mingchuan U -> Taiwan Power Company North Taipei District Office -> Chiang Kai-Shek Shilin Residence (Zhongshan) -> Fulin Bridge -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Keqiang Swimming Pool -> Shidong Elementary School -> Laicuo -> Taipei American School/ Japanese School -> Tianmu Square -> Tianmu New Village -> Tianmu -> Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> Sanyu Temple -> Zhongcheng Rd Entrance -> Tianmu Junior High School -> Dongshan Rd -> Taipei Vocational Development Institute 2[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 220 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 光華巴士 announcement in this search.
