---
title: G18 / 綠18
summary: Green-line feeder route G18 (綠18).
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
    note: Lists 綠18 under 捷運綠線接駁公車.
  - id: ebus-g18
    title: G18 route schedule
    titleOriginal: 綠18班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運大坪林站–捷運萬芳醫院站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠18 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 捷運大坪林站 - 捷運萬芳醫院站, weekday service 0630–1830 with no holiday service, one-section fare and 欣欣客運中興站 as the service contact — the only green route whose published termini are both named MRT stations.[^ebus-g18]

The confirmed stop sequence is short — under ten stops outbound — running
from 捷運大坪林站 through 木新路 in Wenshan past 中國科技大學 and 懷恩隧道 to end
at 捷運萬芳醫院站.[^tdx-bus] Its two named-MRT termini are both confirmed
interchanges, but on two different lines: 捷運大坪林站 is Dapinglin on the
Songshan–Xindian Line (G04, also Circular Line Y07), while 捷運萬芳醫院站 is
Wanfang Hospital on the Wenhu Line (BR04) — making G18, despite its own
green-line classification, a genuine cross-line connector between the green
and brown lines rather than a feeder serving only one.[^tdx-bus] Running
under ten stops each way at a flat one-section fare, G18 reads as a short,
purpose-built shuttle between two metro lines rather than a route serving
any substantial catchment of its own along 木新路.[^ebus-g18] Its 欣欣客運
operator is also confirmed operating 綠2左/綠2右 in this project's coverage,
running a substantially longer loop through the same general Wenshan
area.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G18; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G18 (9 stops):** MRT Dapinglin Sta(Minquan Rd) -> Muxin Rd Entrance -> Shijian Junior High School -> Zhonggang Pumping Sta -> Gouzikou (Xingfu huaxing) -> Xinhai Rd Sec6 Lane21 Entrance -> Huaien Tunnel -> China University of Technology (Xinhai) -> MRT Wanfang Hospital Sta[^tdx-bus]

**G18 (15 stops):** Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Coast Guard Administration 1 -> Xinglong Shanzhuang -> Mamingtan (Zaixing High School) -> Muzha Park -> Zhongshun St Entrance -> Guotai New Village (Xinglong) -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Dapinglin -> MRT Dapinglin Sta(Minquan Rd)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
