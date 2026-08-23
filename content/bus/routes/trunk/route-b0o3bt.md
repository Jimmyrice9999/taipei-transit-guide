---
title: Keelung Rd. Metro Bus / 基隆路幹線
summary: Trunk route 基隆路幹線 (Keelung Rd. Metro Bus).
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
    note: Lists 基隆路幹線 under 幹線專車.
  - id: ebus-keelung
    title: Keelung Rd. Metro Bus route schedule
    titleOriginal: 基隆路幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大崎腳–捷運市政府站 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 基隆路幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 基隆路幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 大崎腳 - 捷運市政府站, weekday and holiday service 0530–2230, a two-section fare and 新店客運新店站 as the service contact. It publishes a two-way transfer discount.[^ebus-keelung]

A community wiki lists 基隆路幹線 as the renamed form of a former numbered
route, 650, one of eight conversions this project's joint-operation network
page records.[^zh-trunk-bus] Unlike 北環幹線's own 620 predecessor, this
route's eBus routeid (0161001500) carries no visible trace of "650".

The confirmed stop sequence shares its 大崎腳-to-大坪林 leg almost exactly
with 松江新生幹線, then diverges south along 基隆路 through Da'an into Xinyi,
ending at 捷運市政府站.[^tdx-bus] Eight confirmed interchanges are named
directly in the stop sequence: 捷運新店站 (Xindian, G01), 捷運新店區公所站
(Xindian District Office, G02), 捷運七張站 (Qizhang, G03), 捷運大坪林站
(served by both the Songshan–Xindian Line as G04 and the Circular Line as
Y07), 捷運景美站 (Jingmei, G05), 捷運萬隆站 (Wanlong, G06), 捷運六張犁站
(Liuzhangli, BR07) and 捷運市政府站 (Taipei City Hall, BL18).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Keelung Rd. Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Keelung Rd Metro Bus (40 stops):** Zhongshen Bridge -> Daqijiao -> Qingtan Maintenance Plant -> Youzheng Bridge -> Qingtan Elementary School -> Qingtan New Village -> Training Center of Land Bank -> Qingtan( Beiyi ) -> Qingtan 1 -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> MRT Xindian Sta(Beixin Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Dapinglin -> MRT Ta Pinglin Station -> Hujiang High School -> MRT Jingmei -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> National Taiwan Normal University Branch -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Heping High School -> MRT Liuzhangli (Keelung Rd) -> George Vocational High School of Taipei -> Sanxing Elementary School (Linjiang St Night Market) -> Wuxing St Entrance -> World Trade Center (Keelung Rd) -> Taipei City Hall (Songzhi) -> MRT Taipei City Hall Sta[^tdx-bus]

**Keelung Rd Metro Bus (46 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Xinyi and Songren Intersection (Xinyi) -> Taipei 101 -> Taipei City Hall (SongShou) -> World Trade Center (Keelung Rd) -> Wuxing St Entrance -> Sanxing Elementary School (Linjiang St Night Market) -> George Vocational High School of Taipei -> MRT Liuzhangli (Keelung Rd) -> Heping High School -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> National Taiwan Normal University Branch -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> MRT Jingmei -> Hujiang High School -> MRT Ta Pinglin Station -> Dapinglin -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Hsintien City Hall Statio -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Beixin Rd) -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> Qingtan 1 -> Nanqing Temple -> Qingtan( Beiyi Rd) -> Training Center of Land Bank -> Qingtan New Village -> Qingtan Elementary School -> Qingtan Elementary School(1) -> Youzheng Bridge -> Qingtan Maintenance Plant -> Daqijiao -> Zhongshen Bridge[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus] The 650 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 新店客運 announcement in this search.
