---
title: O21 / 橘21
summary: Orange-line feeder route O21 (橘21).
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
    note: Lists 橘21 under 捷運橘線接駁公車.
  - id: ebus-o21
    title: O21 route schedule
    titleOriginal: 橘21班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 龍壽里–新北產業園區 corridor, service span, fare, departure counts and operator contact.
---

## Classification and corridor

The official catalogue lists 橘21 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 龍壽里 - 新北產業園區, weekday and holiday service 0530–2330, one-section fare and 三重客運迴龍站 as the service contact, with 32 weekday departures and 20 holiday departures at reduced mid-day frequency.[^ebus-o21]

The confirmed stop sequence starts at 龍壽里, runs through 迴龍 past 捷運迴龍站
and 龍華科技大學, continues through 新莊 past 捷運輔大站 and 捷運新莊站, then
into the 新北產業園區 (New Taipei Industrial Park) itself.[^tdx-bus] Four
confirmed interchanges lie along the way, including 捷運新北產業園區站 — served
by both the Airport MRT (A3) and the Circular Line (Y20), the same
cross-line pairing found on 橘17's corridor — plus 捷運新莊站 (Xinzhuang, O18)
and 捷運輔大站 (Fu Jen University, O19) partway along.[^tdx-bus] Its 32
weekday and 20 holiday departures make it one of the more frequently
scheduled routes in this project's colour-orange coverage.[^ebus-o21] Its
own reduced mid-day holiday frequency — 20 departures against 32 on
weekdays, spread across the same span rather than a shorter one — reads as
a thinner off-peak service rather than a shorter operating day.[^ebus-o21]
Both directions run 41 stops, an unusually long and symmetric pair for this
project's colour-orange coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O21; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O21 (41 stops):** Longshou Village -> Daqing Lianzhuang -> Lunghwa University of Science and Technology -> Huilong Market -> Huilong Police Station -> MRT Huilong Station -> Danfeng Elementary School(New Taipei Blvd) -> Fengshan St Entrance -> Qingshan Rd Entrance -> Shuangfeng Fude Temple -> Danfeng Police Station -> Fuguo Rd Entrance -> Fuying Junior High School -> Hougang Community -> Jianfu Rd Entrance -> Jianan St Entrance -> Hougang 1st Rd -> Jianguo 1st Rd -> MRT Fu Jen University Station(Jianguo 1st Rd) -> MRT Fu Jen University Station -> Institute for the Blind -> Haishan Village -> Xintai Rd Entrance -> MRT Xinzhuang Sta(Xinzhuang Post Office) -> Xinzhuang Elementary School -> Zhonggang Community Activity Center -> Caiyuan Square -> Zhonghua Rd -> Zhengbang Community -> Xingfu & Zhonghua Intersection -> Xingfu New Village -> Fushou Park -> Touqian Junior High School -> Siyuan Rd & New Taipei Blvd Intersection -> MRT New Taipei Industrial Park Sta -> Wugong and Fuhui Intersection -> Management Center -> Standard Factory -> Zhengchang Motors -> Shixiang -> Bourgeois Exhibit Center[^tdx-bus]

**O21 (41 stops):** Laborers Activity Center -> Wuquan 3rd Rd -> Wuquan 3rd & Wugong Intersection -> Standard Factory -> Management Center -> MRT New Taipei Industrial Park Sta -> Siyuan Rd & New Taipei Blvd Intersection -> Touqian Junior High School -> Fushou Park -> Xingfu & Siyuan Intersection -> Xingfu New Village -> Xingfu & Zhonghua Intersection -> Zhengbang Community -> Zhonghua Rd -> Caiyuan Square -> Zhonggang Community Activity Center -> Xinzhuang Elementary School -> MRT Xinzhuang Station -> MRT Xinzhuang Sta(Xinzhuang Post Office) -> Xintai Rd Entrance -> Haishan Village -> Institute for the Blind -> MRT Fu Jen University Station(Jianguo 1st Rd) -> Jianguo 1st Rd -> Hougang 1st Rd -> Jianan St Entrance -> Jianfu Rd Entrance -> Hougang Community -> Fuying Junior High School -> Fuguo Rd Entrance -> Danfeng Police Station -> Shuangfeng Fude Temple -> Qingshan Rd Entrance -> Fengshan St Entrance -> Danfeng Elementary School -> MRT Huilong Station -> Huilong Police Station -> Huilong Superstore -> Lunghwa University of Science and Technology -> Daqing Lianzhuang -> Longshou Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
