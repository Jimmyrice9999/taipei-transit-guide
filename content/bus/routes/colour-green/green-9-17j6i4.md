---
title: G9Gengxin / 綠9耕莘
summary: Green-line feeder route G9Gengxin (綠9耕莘).
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
    note: Lists 綠9耕莘 under 捷運綠線接駁公車.
  - id: ebus-g9gengxin
    title: G9Gengxin route schedule
    titleOriginal: 綠9耕莘班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000990
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大香山–耕莘醫院 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠9耕莘 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 大香山 - 耕莘醫院, weekday service 0740–1650, holiday service 1530–2100, one-section fare and 大南汽車土城站 as the service contact.[^ebus-g9gengxin] It shares its 大香山 origin and operator contact with plain 綠9 (`green-9-1furgka`) and 綠9北新國小 (`green-9-eilq32`), but TDX carries all three as separate records rather than variants of one route.

The confirmed stop sequence shares the same 大香山-to-江坡華城 gated-community
loop as its 綠9 and 綠9北新國小 siblings — including the same out-and-back
detour to 大千豪景 — but turns off after 七張(北新路) to end at 耕莘醫院 via
新店郵局 and 大豐國小, a different final leg from either sibling.[^tdx-bus] The
one confirmed interchange, 捷運七張站 (Qizhang, G03), is shared with both
siblings.[^tdx-bus] Its weekday and holiday spans barely overlap — 0740–1650
on weekdays against 1530–2100 on holidays, sharing only the 1530–1650
window — unlike the flat all-week hours most other routes in this project's
colour-green coverage publish.[^ebus-g9gengxin] A weekday evening rider
after 1650, or a holiday-morning rider before 1530, has no service on this
specific route at all — the two spans cover different parts of the day
depending on the day type, rather than one span shrinking on
holidays.[^ebus-g9gengxin]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for G9Gengxin; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G9Gengxin (25 stops):** Great Xiangshan -> Daxiang mountain Trailhead -> Songlan Grange -> Mingren Village -> Dadi Shiji -> Changchun Rd -> Daqian Haojing -> Lantian Dadi -> International House -> Jiangpo Huacheng Ａ -> Jiangpo Huacheng Ｃ -> Daqian Riverview sentry -> Daqian Haojing -> Daqian Riverview sentry -> Jiangpo Huacheng Ｃ -> Hua Jiang Bo City Area A -> International House -> Wufeng Junior High School -> Zhongzheng Rd -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Minzu and Beixin Intersection -> Dafeng Elementary School -> Minzu Rd Entrance(Cardinal Tien Hospital)[^tdx-bus]

**G9Gengxin (26 stops):** Zhongzheng Public Housing -> Chongguang High School -> Zhongzheng Rd Entrance -> Qizhang(Beixin Rd) -> Qizhang(Baoqiao Rd) -> Baoqiao and Zhongxing Intersection -> Zhongxing&Zhongzheng Rd Intersection -> Wufeng Junior High School -> International House -> Jiangpo Huacheng Ａ -> Jiangpo Huacheng Ｃ -> Daqian Riverview sentry -> Daqian Haojing -> Daqian Riverview sentry -> Jiangpo Huacheng Ｃ -> Hua Jiang Bo City Area A -> International House -> Lantian Dadi -> Daqian Haojing -> Changchun Rd -> Dadi Shiji -> Mingren Village -> Mingren Park -> Songlan Grange -> Daxiang mountain Trailhead -> Great Xiangshan[^tdx-bus]

**G9Gengxin Daqian Haojing (13 stops):** Daqian Haojing -> Daqian Riverview sentry -> Jiangpo Huacheng Ｃ -> Hua Jiang Bo City Area A -> International House -> Wufeng Junior High School -> Zhongzheng Rd -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Minzu and Beixin Intersection -> Dafeng Elementary School -> Minzu Rd Entrance(Cardinal Tien Hospital)[^tdx-bus]

**G9Gengxin Daqian Haojing (13 stops):** Zhongzheng Public Housing -> Chongguang High School -> Zhongzheng Rd Entrance -> Qizhang(Beixin Rd) -> Qizhang(Baoqiao Rd) -> Baoqiao and Zhongxing Intersection -> Zhongxing&Zhongzheng Rd Intersection -> Wufeng Junior High School -> International House -> Jiangpo Huacheng Ａ -> Jiangpo Huacheng Ｃ -> Daqian Riverview sentry -> Daqian Haojing[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to the other 綠9 records remain TBC.[^tdx-bus]
