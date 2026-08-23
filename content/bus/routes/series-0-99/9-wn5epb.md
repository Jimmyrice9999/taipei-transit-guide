---
title: 9 / 9
summary: General-bus route 9 (社子國小 - 萬華).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "[平日] 0550–2300 [假日] 0550–2300"
    source: ebus-9
  - label: Headway by day type
    value: Peak 12–15 min, off-peak 15–20 min; fixed timetable after 2100
    source: ebus-9
  - label: Fare / transfer
    value: 一段票 (single-section fare)
    source: ebus-9
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute for 9, with no dog-friendly or split-working variant.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 9 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-9
    title: 9 route schedule
    titleOriginal: 9班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子國小–萬華 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 9 under 一般公車; it is also cross-listed under
低地板 (low-floor fleet).[^ebus-general] Its schedule page gives 社子國小 - 萬華
as the corridor, with weekday and holiday service both running 0550–2300 on a
single-section fare (一段票).[^ebus-9] Weekday peak interval is 12–15 minutes,
off-peak 15–20 minutes, and departures after 2100 run to a fixed timetable
rather than a frequency band; the page lists 36 numbered weekday trips.[^ebus-9]
The operator contact given is 大都會客運士林站, 02-2833-5706.[^ebus-9]

The confirmed stop sequence runs from 社子國小 on the Shezi peninsula,
south along 重慶北路 past stops literally named 捷運大橋頭站 and 捷運北門站,
then through 捷運西門站 and 小南門 to end at 龍山寺(康定) in Wanhua.[^tdx-bus]
None of these three literally-named MRT stops is in the curated stop-ID
join set as a confirmed interchange for this route.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 9; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**9 (28 stops):** Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Station -> Shezi Market2 -> Shezi Market -> Hulu Temple (Hulu Village) -> Huludu Market -> Haiguang New Village -> SheZi Fire Squad -> Sewage Treatment Plant -> Laoshi Village -> Jiuquan St -> Minzu and Chongqing Intersection -> Changji & Chongqing Intersection -> MRT Daqiaotou Sta -> Liangzhou and Chongqing Intersection -> Baoan St Entrance -> Minsheng W Rd Entrance (Dadaocheng Dock) -> Nanjing W Rd Entrance (Button St) -> Nanjing W Rd Entrance (Tacheng) -> TCUH Zhongxin Branch (Tacheng) -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> Kunming St Entrance -> Longshan Temple (Kangding)[^tdx-bus]

**9 (30 stops):** Zushi Temple (Kangding) -> Changsha St -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Nanjing W Rd Entrance (Tacheng) -> Nanjing W Rd Entrance (Button St) -> Minsheng W Rd Entrance (Dadaocheng Dock) -> Baoan St Entrance -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Lanzhou Junior High School -> Minzu and Chengde Intersection -> Kulun St Entrance -> Dalongtong Baoan Temple -> Jiuquan and Chongqing Intersection -> Jiuquan St -> Laoshi Village -> Sewage Treatment Plant -> SheZi Fire Squad -> Haiguang New Village -> Huludu Market -> Hulu Temple (Hulu Village) -> Shezi Market -> Sheyuan Village -> Shezi Police Station -> Yonoglun Village (south) -> Shezi Elementary School[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the stop and geometry records; route length and
full timetable detail beyond the departure count stay TBC.[^tdx-bus] A
community wiki (zh.wikiversity) lead states that 9 has run the 社子國小–萬華
corridor unchanged since before Taipei's joint-operation (聯營) bus system
began, that it was originally run by 臺北市公車管理處 before that agency's
reorganisation into 大都會客運, and gives further dated fleet and stop changes
including an 8-bus low-floor delivery on 2014-05-01 and a stop adjustment on
2016-12-17 tied to 忠孝西路 permanent-roadworks near 北門. The wikiversity page
carries no cited primary source for any of these dates; this could not be
corroborated against a primary source in this search, so none of it appears
above.[^tdx-bus]
