---
title: G3 / 綠3
summary: Green-line feeder route G3 (綠3).
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
    note: Lists 綠3 under 捷運綠線接駁公車.
  - id: ebus-g3
    title: G3 route schedule
    titleOriginal: 綠3班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 花園新城–中和 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠3 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 花園新城 - 中和, weekday and holiday service 0600–2200, one-section fare and 新店客運碧潭站 as the service contact.[^ebus-g3]

The confirmed stop sequence runs from 花園新城, a hillside housing estate
above 新店, down through 新店 and 大坪林, then along the same 秀朗橋/景平/景安
corridor as 綠2左, ending at 中和區公所 in 中和.[^tdx-bus] Six confirmed
interchanges lie along the way, including 捷運新店站 (Xindian, G01), 捷運大坪林站
(Dapinglin, G04, also Circular Line Y07) and 捷運景安站 (Jing'an, served by
both the Zhonghe–Xinlu Line as O02 and the Circular Line as Y11) — more
confirmed interchanges than most other routes in this project's colour-green
coverage.[^tdx-bus] Despite that length and interchange count, the fare
stays flat at one section, the same as the much shorter G18 and G11 routes
in this group — this project's coverage of the green-line feeders shows no
consistent relationship between a route's length and its fare
class.[^ebus-g3] Its 新店客運碧潭站 contact is the same dispatch point named on
綠7, 綠10 and 綠12, four routes together covering most of 新店 and the hills
around it under one operator.[^ebus-g3]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G3; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G3 (38 stops):** Huayuan Xincheng -> Huayuan Xincheng 1 -> Xincheng Blvd -> Yongxing Rd Entrance -> Zhongxingkeng -> Xiaocukeng -> Qingtan(Xinwu) -> Qingtan -> Qingtan (I) -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> Xindian -> Old Postal Hall -> Zhongxing Rd Sec 1 -> Wufeng Junior High School -> Zhongxing&Zhongzheng Rd Intersection -> Zhongxing Rd Sec 2 -> Baoxing Rd Entrance -> Baoqiao Rd Entrance -> Baozhong Rd Entrance -> Zhongxing Rd Sec 3 -> MRT Dapinglin Sta(Minquan Rd) -> Minquan Rd Entrance -> Minquan Industrial Park -> Buddhist Tzu Chi General Hospital -> Fuxing Rd Entrance -> Zhuangjing High School (Fuxing Rd) -> MRT Xiulang Bridge Sta -> Jianshanjiao -> Jingping Jingde Intersection -> MRT Jingping Sta -> ET Plaza -> Nanshijiao(Jingping Rd) -> Zhonghe Church -> MRT Jingan Sta(Jingping Rd) -> Yuantong&Jingping Rd Entrance -> Zhonghe Dist Office (Jingping Rd)[^tdx-bus]

**G3 (43 stops):** Taihe St -> Zhonghe Temple -> Zhonghe Police Station -> Nanshan High School -> Shuanghe Village -> Anhe Rd Entrance -> Jingxin St Entrance -> MRT Jingan Sta -> Zhonghe Church -> Nanshijiao(Jingping Rd) -> MRT Jingping Sta -> Jingping Jingde Intersection -> MRT Xiulang Bridge Sta -> Zhuangjing High School (Fuxing Rd) -> Fuxing Rd Entrance -> Buddhist Tzu Chi General Hospital -> Minquan Industrial Park -> Minquan Rd Entrance -> MRT Dapinglin Sta(Minquan Rd) -> Zhongxing Rd Sec 3 -> Baozhong Rd Entrance -> Baoqiao Rd Entrance -> Baoxing Rd Entrance -> Zhongxing Rd Sec 2 -> Zhongxing&Zhongzheng Rd Intersection -> Wufong Junior High School -> Zhongxing Rd Sec 1 -> Old Postal Hall -> Xindian -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> Qingtan (I) -> Nanqing Temple -> Qingtan -> Qingtanyan -> Xiaocukeng -> Zhongxingkeng -> Yongxing Rd Entrance -> Qiding -> Xincheng Blvd -> Huayuan Xincheng 1 -> Huayuan Xincheng[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
