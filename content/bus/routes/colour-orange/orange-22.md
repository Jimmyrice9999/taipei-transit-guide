---
title: O22 / 橘22
summary: Orange-line feeder route O22 (橘22).
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
    note: Lists 橘22 under 捷運橘線接駁公車.
  - id: ebus-o22
    title: O22 route schedule
    titleOriginal: 橘22班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 瓊林–捷運新莊站 corridor, service span and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 橘22 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 瓊林 - 捷運新莊站, weekday-only service 0630–1830 with no holiday service, one-section fare and 三重客運新莊站 as the service contact.[^ebus-o22]

The confirmed stop sequence runs from 新樹民安路口 through 西盛, threading a
run of five consecutively numbered 瓊林南路 stops, then into 新莊 past 豐年
國小 to end at 保元宮.[^tdx-bus] The one confirmed interchange, 捷運新莊站
(Xinzhuang, O18), sits partway along both directions rather than at either
published terminus.[^tdx-bus] Weekday-only hours with no holiday service at
all put it among the more limited routes in this project's colour-orange
coverage.[^ebus-o22] Its 瓊林 origin sits close enough to 新莊 that the whole
route runs within a single district rather than crossing into a
neighbouring one, unlike most other routes in this batch.[^tdx-bus] The five
consecutively numbered 瓊林南路 stops (一 through 五) suggest a single long
residential street served at regular intervals rather than five distinct
neighbourhoods, though the schedule page does not describe the street
itself.[^tdx-bus] Its 三重客運新莊站 operator contact is a New Taipei dispatch
point distinct from the several other 三重客運 stations named across this
project's colour-orange coverage.[^ebus-o22]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O22; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O22 (20 stops):** Xinshu & Minan Intersection(Xintai Hospital) -> Xisheng -> Dongfangzhixing -> Xishengguan -> Jiaqixintiandi -> Zhengfeng -> Qionglin S Rd 1 -> Qionglin S Rd 2 -> Qionglin S Rd 3 -> Qionglin S Rd 4 -> Qionglin S Rd 5 -> Qiongying Lane Intersection -> Xinzhuang Farmers Association -> Fengnian Elementary School -> Institute for the Blind -> Haishan Village -> Xintai Rd Entrance -> MRT Xinzhuang Sta(Xinzhuang Post Office) -> Xinzhuang Elementary School -> Baoyuan Temple[^tdx-bus]

**O22 (23 stops):** Dazhong Temple -> MRT Xinzhuang Station -> MRT Xinzhuang Sta(Xinzhuang Post Office) -> Xintai Rd Entrance -> Haishan Village -> Jingde Rd Entrance -> Fengnian Elementary School -> Qiongtai Activity Center -> Xinzhuang Farmers Association Qionglin Branch -> Qiongying Lane Intersection -> Zhangcuo -> Qionglin S Rd 5 -> Qionglin S Rd 4 -> Qionglin S Rd 3 -> Qionglin S Rd 2 -> Qionglin S Rd 1 -> Zhengfeng -> Xisheng 1 -> Jiaqixintiandi -> Xishengguan -> Dongfangzhixing -> Xisheng -> Xinshu & Minan Intersection(Xintai Hospital)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
