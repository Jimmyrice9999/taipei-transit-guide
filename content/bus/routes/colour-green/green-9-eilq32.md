---
title: G9Beixin / 綠9北新國小
summary: Green-line feeder route G9Beixin (綠9北新國小).
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
    note: Lists 綠9北新國小 under 捷運綠線接駁公車.
  - id: ebus-g9beixin
    title: G9Beixin route schedule
    titleOriginal: 綠9北新國小班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000970
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大香山–北新國小 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠9北新國小 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 大香山 - 北新國小, weekday service 0550–2155, holiday service 0600–2310, one-section fare and 大南汽車土城站 as the service contact.[^ebus-g9beixin] It shares its 大香山 origin and operator contact with plain 綠9 (`green-9-1furgka`) and 綠9耕莘 (`green-9-17j6i4`), but TDX carries all three as separate records rather than variants of one route.

The confirmed stop sequence shares the same 大香山-to-江坡華城 gated-community
loop and 大千豪景 out-and-back detour as its 綠9 and 綠9耕莘 siblings, but ends
at the shortest distance of the three, stopping at 北新國小 rather than
continuing to either 慈濟醫院 or 耕莘醫院.[^tdx-bus] The one confirmed
interchange, 捷運七張站 (Qizhang, G03), is shared with both
siblings.[^tdx-bus] Of the three 大香山 siblings, this is the only one running
a genuinely all-week, nearly-round-the-clock span — 0550–2155 weekdays,
0600–2310 holidays — against 綠9耕莘's split weekday/holiday hours and plain
綠9's weekday-only service.[^ebus-g9beixin] Three routes sharing one
origin, one operator and most of one alignment, but publishing three
different service patterns, is itself the finding: a shared corridor does
not imply a shared timetable on this project's evidence.[^ebus-g9beixin]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for G9Beixin; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G9Beixin (22 stops):** Great Xiangshan -> Daxiang mountain Trailhead -> Songlan Grange -> Mingren Village -> Dadi Shiji -> Changchun Rd -> Daqian Haojing -> Lantian Dadi -> International House -> Jiangpo Huacheng Ａ -> Jiangpo Huacheng Ｃ -> Daqian Riverview sentry -> Daqian Haojing -> Daqian Riverview sentry -> Jiangpo Huacheng Ｃ -> Hua Jiang Bo City Area A -> International House -> Wufeng Junior High School -> Zhongzheng Rd -> Qizhang(Beixin Rd) -> Beixin Apartment -> Baoqiao & Zhongxing Intersection[^tdx-bus]

**G9Beixin (20 stops):** Zhongxing&Zhongzheng Rd Intersection -> Wufeng Junior High School -> International House -> Jiangpo Huacheng Ａ -> Jiangpo Huacheng Ｃ -> Daqian Riverview sentry -> Daqian Haojing -> Daqian Riverview sentry -> Jiangpo Huacheng Ｃ -> Hua Jiang Bo City Area A -> International House -> Lantian Dadi -> Daqian Haojing -> Changchun Rd -> Dadi Shiji -> Mingren Village -> Mingren Park -> Songlan Grange -> Daxiang mountain Trailhead -> Great Xiangshan[^tdx-bus]

**G9Beixin1 Daqian Haojing (10 stops):** Daqian Haojing -> Daqian Riverview sentry -> Jiangpo Huacheng Ｃ -> Hua Jiang Bo City Area A -> International House -> Wufeng Junior High School -> Zhongzheng Rd -> Qizhang(Beixin Rd) -> Beixin Apartment -> Baoqiao & Zhongxing Intersection[^tdx-bus]

**G9Beixin1 Daqian Haojing (7 stops):** Zhongxing&Zhongzheng Rd Intersection -> Wufeng Junior High School -> International House -> Jiangpo Huacheng Ａ -> Jiangpo Huacheng Ｃ -> Daqian Riverview sentry -> Daqian Haojing[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to the other 綠9 records remain TBC.[^tdx-bus]
