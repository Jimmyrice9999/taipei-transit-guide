---
title: Songjiang Xinsheng Metro Bus / 松江新生幹線
summary: Trunk route 松江新生幹線 (Songjiang Xinsheng Metro Bus).
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
    note: Lists 松江新生幹線 under 幹線專車.
  - id: ebus-songjiang
    title: Songjiang Xinsheng Metro Bus route schedule
    titleOriginal: 松江新生幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 青潭–復興北村 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 松江新生幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 松江新生幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 青潭 - 復興北村, weekday and holiday service 0530–2230, a two-section fare and 新店客運新店站 as the service contact.[^ebus-songjiang]

A community wiki lists 松江新生幹線 as the renamed form of a former numbered
route, 642, one of eight conversions this project's joint-operation network
page records — the only one of the eight in that table that was not
already a colour-prefixed feeder.[^zh-trunk-bus]

The confirmed stop sequence runs the length of 新生南/北路 and 松江路, from
青潭 in Xindian, through 大坪林/景美/萬隆/公館, up 新生南路 past NTU, then along
松江路 into Zhongshan, ending at 復興北村.[^tdx-bus] Ten confirmed
interchanges are named directly in the stop sequence — among them 捷運大坪林站
(Dapinglin, served by both the Songshan–Xindian Line as G04 and the Circular
Line as Y07), 捷運公館站 (Gongguan, G07), 捷運忠孝新生站 (Zhongxiao Xinsheng,
served by both the Bannan Line as BL14 and the Zhonghe–Xinlu Line as O07),
捷運松江南京站 (Songjiang Nanjing, served by both the Songshan–Xindian Line as
G15 and the Zhonghe–Xinlu Line as O08), and 捷運行天宮站 (Xingtian Temple,
O09) — more confirmed interchanges than any other route in this project's
trunk-route coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Songjiang Xinsheng Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Songjiang Xinsheng Metro Bus (42 stops):** Dispath QingTan Stop -> Qingtan(Xinwu) -> Qingtan( Beiyi ) -> Qingtan 1 -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> MRT Xindian Sta(Beixin Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Dapinglin -> MRT Dapinglin Sta -> Hujiang High School -> MRT Jingmei -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Longan Elementary School (Civil Service Development Institute) -> Jinhua and Xinsheng Intersection -> Xinyi & Xinsheng Intersection -> Renai and Xinsheng Intersection -> MRT Zhongxiao Xinsheng Sta -> Guanghua Market -> Changan&SongJiang Intersection -> MRT Songjiang Nanjing Sta -> ChangChun&SongJiang Intersection -> MRT Xingtian Temple Sta (Songjiang Rd) -> Xingtian Temple -> Xinsheng Park (Lin An-tai Historic House) -> Taipei Fish Market -> The Second Wholesale Fruit and Vegetable Market -> Xiapi Village -> Fuxing N Village[^tdx-bus]

**Songjiang Xinsheng Metro Bus (41 stops):** Wuchang St Entrance -> Minquan and Longjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Songjiang Intersection -> MRT Xingtian Temple Sta (Songjiang Rd) -> ChangChun&SongJiang Intersection -> MRT Songjiang Nanjing Sta -> Changan&SongJiang Intersection -> Guanghua Market -> MRT Zhongxiao Xinsheng Sta -> Renai and Xinsheng Intersection -> Xinyi & Xinsheng Intersection -> Jinhua and Xinsheng Intersection -> Heping and Xinsheng Intersection -> Longan Elementary School (Civil Service Development Institute) -> NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> MRT Jingmei -> Hujiang High School -> MRT Dapinglin Sta -> Dapinglin -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Xindian City Hall Sta -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Beixin Rd) -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> Qingtan 1 -> Nanqing Temple -> Qingtan(Xinwu) -> Final Stop QingTan Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 642 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 新店客運 announcement in this search.
