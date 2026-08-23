---
title: "295 / 295"
summary: "200-series route: 295 (295)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "200-series numbered service (一般公車)"
    source: ebus-general
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
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
  - id: ebus-route-295-1fbwwzi
    title: "295 route schedule"
    titleOriginal: "295班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100029500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 295 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “富德 - 臺北車站”, the current head/last-departure field “[平日] 0520 - 2300 [假日] 0530 - 2300”, fare “兩段票”.[^ebus-route-295-1fbwwzi]

The confirmed stop sequence runs from 富德, past 象頭埔/萬福橋/捷運動物
園站, through 景美女中/實踐國中/中港抽水站, along 懷恩隧道/中國科技大學
(辛亥)/捷運辛亥站, through 大安森林公園/師大/捷運古亭站(和平), ending at
南門/一女中(公園)/捷運台大醫院站/臺北車站(青島).[^tdx-bus] Seven confirmed
interchanges are recorded in the curated stop-ID join set, the same
list confirmed for its own sibling 295副: Taipei Main Station,
Shandao Temple, Taipei Zoo, Xinhai, Technology Building, Guting and
NTU Hospital.[^tdx-bus] The route runs a single subroute under one
operator, 欣欣客運, with a slightly earlier weekday start than its own
holiday span.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 295; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**295 (47 stops):** Fude -> Xiangtoupu -> Wanfu Bridge -> MRT Taipei Zoo Sta -> Taipei Zoo -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Xinguang Rd Entrance -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Muxin Rd Entrance -> Shijian Junior High School -> Zhonggang Pumping Sta -> Gouzikou (Xingfu huaxing) -> Xinhai Rd, Sec 6, Ln 21 -> Huaien Tunnel -> China University of Technology (Xinhai) -> Xinglong Rd Entrance (Xinhai) -> MRT Xinhai Sta -> Xinhai Elementary School -> Qingfeng Activity Center -> Taipei Water Department (Xinhai) -> Daan Sports Center -> Daan Dist Health Center -> Fuxing S Rd Entrance -> National Taipei University of Education Experiment Elementary School -> Longmen Jr High School (Heping) -> Daan Park -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Nanchang Rd Furniture Market -> TCUH Branch of Women and Children 1 -> Nanchang Rd -> Nanmen -> Taipei First Girls High School (Gongyuan) -> MRT NTU Hospital Station -> Taipei Main Sta (Qingdao)[^tdx-bus]

**295 (46 stops):** Qingdao & Linsen Intersection -> Chenggong High School (Linsen) -> Taipei Kainan High School -> Renai and Linsen Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> Nanchang Rd Furniture Market -> MRT Guting Sta (Heping) -> National Taiwan Normal U -> NTNU Union Building 1 -> Wenzhou St Entrance -> Daan Park -> Longmen Jr High School (Heping) -> Fuxing S Rd Entrance -> National Taipei University of Education -> Daan Dist Health Center -> NTU Guo-Ching Blidg -> Taipei Water Department (Xinhai) -> Qingfeng Activity Center -> Xinhai Elementary School -> MRT Xinhai Sta -> MRT Xinhai 1 -> Xinglong Rd Entrance (Xinhai) -> China University of Technology (Xinhai) -> Huaien Tunnel -> Gouzikou (Xingfu huaxing) -> Zhonggang Pumping Sta -> Shijian Junior High School -> Muxin Activity Center -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Entrance -> National Chengchi University -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Taipei Zoo -> MRT Taipei Zoo Sta -> Wanfu Bridge -> Xiangtoupu -> Fude[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 富德 with 臺北車站 specifically as the route's own termini, over a corridor that overlaps several other Wenshan-area routes in this batch, was found in this search.
