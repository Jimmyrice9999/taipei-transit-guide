---
title: O3 / 橘3
summary: Orange-line feeder route O3 (橘3).
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
    note: Lists 橘3 under 捷運橘線接駁公車.
  - id: ebus-o3
    title: O3 route schedule
    titleOriginal: 橘3班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中和–捷運頂溪站 corridor, service span, fare, the 0700-0900 stop-skip note and operator contact.
---

## Classification and corridor

The official catalogue lists 橘3 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 中和 - 捷運頂溪站, weekday service 0600–2300, holiday service 0640–2200, one-section fare and 臺北客運中和站 as the service contact. It records that weekday 07:00–09:00 departures do not stop at 捷運頂溪站.[^ebus-o3]

The confirmed stop sequence runs from 中和站 along 環河西路/仁愛路, a riverside
corridor through 中和 and 永和, past 中正橋頭 and a run of named community
stops before ending at 捷運頂溪站.[^tdx-bus] TDX carries a separate subroute
recording the same weekday-morning skip the schedule page describes, naming
it directly: 「橘3平日07:00-09:00之時段取消停靠捷運頂溪站」.[^tdx-bus] Two confirmed
interchanges apply to the through workings: 捷運頂溪站 itself (Dingxi, O04)
and a curated join resolving to 橋和站 (Qiaohe, Y13) partway along — the stop
sequence's own name for that point does not repeat the station's full
"捷運" form.[^tdx-bus] Its 臺北客運中和站 operator contact matches the one
橘2 also names, two 臺北客運 routes covering different parts of 中和/永和 out
of the same dispatch point.[^ebus-o3] Its 35-stop outbound working is
substantially longer than its 18-stop return leg, one of the largest
directional asymmetries recorded in this project's colour-orange
coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for O3; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O3 (35 stops):** Zhonghe Stop -> Jinhe Rd -> Xinan Village -> Lite-On Electronics Inc -> Zhongshan Rd Entrance -> Bannan Rd Entrance -> Ciaohe Rd -> Tailong Factory -> Huanhe W Rd -> Baoshun Rd Entrance -> Tailongboyuan -> Renai Park -> Renai & Yongping Intersection -> Jhongxi Village -> Renai Rd 1 -> Renai Rd -> Zhongzheng Bridge Stop -> Boai Activity Center -> Yongde Temple -> Huanhe E Rd -> Yuxi St Entrance -> Huanhe E Rd Sec 3 -> Fuhe Park -> Dalu New Village -> Minle Village 2 -> Liuhe Community(Chenggong Rd) -> Atomic Energy Council -> Yongheng Rd -> siouhe Village -> Yonghe Junior High School -> Yongfu Bridge -> Fuhe Rd -> Daxin St -> Zhengxing Village -> MRT Dingxi Station[^tdx-bus]

**O3 (18 stops):** Renai Rd -> Renai Rd 1 -> Zhongxi Village -> Renai & Yongping Intersection -> Renai Park -> Baoshun Rd Entrance -> Yongping Elementary School -> Zhuangren Bridge -> Zhuangjing Rd -> Zhuangjing Rd Entrance -> Shengli Rd -> Tailong Factory -> Ciaohe Rd -> Bannan Rd Entrance -> Lite-On Electronics Inc -> Xinan Village -> Jinhe Rd -> Zhonghe Stop[^tdx-bus]

**O3 (34 stops):** Zhonghe Stop -> Jinhe Rd -> Xinan Village -> Lite-On Electronics Inc -> Zhongshan Rd Entrance -> Bannan Rd Entrance -> Ciaohe Rd -> Tailong Factory -> Huanhe W Rd -> Baoshun Rd Entrance -> Tailongboyuan -> Renai Park -> Renai & Yongping Intersection -> Jhongxi Village -> Renai Rd 1 -> Renai Rd -> Zhongzheng Bridge Stop -> Boai Activity Center -> Yongde Temple -> Huanhe E Rd -> Yuxi St Entrance -> Huanhe E Rd Sec 3 -> Fuhe Park -> Dalu New Village -> Minle Village 2 -> Liuhe Community(Chenggong Rd) -> Atomic Energy Council -> Yongheng Rd -> siouhe Village -> Yonghe Junior High School -> Yongfu Bridge -> Fuhe Rd -> Daxin St -> Zhengxing Village[^tdx-bus]

**O3 (18 stops):** Renai Rd -> Renai Rd 1 -> Zhongxi Village -> Renai & Yongping Intersection -> Renai Park -> Baoshun Rd Entrance -> Yongping Elementary School -> Zhuangren Bridge -> Zhuangjing Rd -> Zhuangjing Rd Entrance -> Shengli Rd -> Tailong Factory -> Ciaohe Rd -> Bannan Rd Entrance -> Lite-On Electronics Inc -> Xinan Village -> Jinhe Rd -> Zhonghe Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the stop-skip's creation date and rationale remain TBC.[^tdx-bus]
