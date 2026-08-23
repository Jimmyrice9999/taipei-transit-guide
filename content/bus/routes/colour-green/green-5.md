---
title: G5 / 綠5
summary: Green-line feeder route G5 (綠5).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠5 under 捷運綠線接駁公車.
  - id: ebus-g5
    title: G5 route schedule
    titleOriginal: 綠5班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大崎腳–中正環河路口 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠5 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 大崎腳 - 中正環河路口, weekday and holiday service 0530–2230, one-section fare and 新店客運新店站 as the service contact.[^ebus-g5]

The confirmed stop sequence starts at 大崎腳, a hillside spot above 青潭, runs
through 新店 and past a cluster of newer 十四張 developments — 央北社會住宅
(the social-housing project), 十四張歷史公園 — before ending at 中正環河路口.[^tdx-bus] Four confirmed interchanges lie along the way: 捷運新店站 (Xindian,
G01), 捷運新店區公所站 (Xindian District Office, G02), and 捷運十四張站
(Shisizhang) — a genuine interchange between the Ankeng Light Rail (K09) and
the Circular Line (Y08) that this route serves twice, once on each
direction.[^tdx-bus] The stop-sequence data names the 央北社會住宅
development itself, one of three consecutive 央北-prefixed stops on this
route, rather than an older street or landmark name.[^tdx-bus] Its service
contact, 新店客運新店站, is the same one 綠13 names, distinct from the 新店客運
碧潭站 contact that 綠7, 綠10 and 綠12 share — two separate dispatch points
under the same operator across this project's colour-green
coverage.[^ebus-g5] Its own weekday and holiday service both run the full
0530–2230 span with no split, a simpler pattern than the 大香山 sibling group
covered elsewhere in this batch.[^ebus-g5]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G5; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G5 (39 stops):** Zhongshen Bridge -> Daqijiao -> Qingtan Maintenance Plant -> Youzheng Bridge -> Qingtan Elementary School -> Qingtan New Village -> Training Center of Land Bank -> Qingtan -> Qingtan (I) -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> MRT Xindian Sta(Beixin Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Zhongzheng Rd Entrance -> Chongguang High School -> Zhongzheng Public Housing -> Cardinal Tien Hospital(Zhongzheng Rd) -> Ershizhang Rd -> Ershizhang Rd Entrance -> Huakaifugui -> Far East Industrial City -> Zhuangjing High School/National Human Rights Museum -> MRT Shisizhang Sta -> Central north social house -> Shisizhang Historical Park -> Yangbei 2nd Rd -> Xindian Senior High School -> Zhongyang New Village(Yangbei 1st Rd) -> Tangquanmeidi -> Tangquan Community -> Lane 255 Xiyuan Rd -> Lanzhuang -> Shisizhang Road -> MRT Shisizhang Sta -> Xiyuan Rd Lane 101 Entrance -> Fuxing Rd & Xiulang Bridge[^tdx-bus]

**G5 (28 stops):** Zhongzheng&Huanhe RdIntersection -> Zhuangjing High School/National Human Rights Museum -> Far East Industrial City -> Huakaifugui -> Ershizhang Rd Entrance -> Ershizhang Rd -> Cardinal Tien Hospital -> Zhongzheng Public Housing -> Chongguang High School -> Zhongzheng Rd Entrance -> MRT Xindian Dist Office Station -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Beixin Rd) -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> QingTan(I) -> Nanqing Temple -> Qingtan( Beiyi Rd) -> Training Center of Land Bank -> Qingtan New Village -> Qingtan Elementary School -> Qingtan Elementary School -> Youzheng Bridge -> Qingtan Maintenance Plant -> Daqijiao -> Zhongshen Bridge[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
