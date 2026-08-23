---
title: 18 / 18
summary: General-bus route 18 (萬華 - 捷運麟光站).
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
    value: "[平日] 0525–2300 [假日] 0525–2300"
    source: ebus-18
  - label: Headway by day type
    value: Peak 12–15 min, off-peak 30–40 min
    source: ebus-18
  - label: Fare / transfer
    value: 一段票 (single-section fare)
    source: ebus-18
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute for 18.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 18 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-18
    title: 18 route schedule
    titleOriginal: 18班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬華–捷運麟光站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 18 under 一般公車; it is also cross-listed under
低地板 (low-floor fleet).[^ebus-general] Its schedule page gives 萬華 - 捷運麟光站
as the corridor, with weekday and holiday service both running 0525–2300 on a
single-section fare (一段票), 35 scheduled departures a day.[^ebus-18] Weekday
peak interval is 12–15 minutes, off-peak 30–40 minutes.[^ebus-18] The operator
contact given is 欣欣客運華江站, 02-2308-9487, naming a different depot from
the 萬華 terminus in the route name.[^ebus-18] Route 18 is one of two routes in
this group's four operated by 欣欣客運 (Shin-Shin Bus) rather than 大都會客運
(Metropolitan Bus).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 18; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**18 (34 stops):** Huajiang Stop -> Renshou Village 1 -> Dali High School -> Huajiang Police Station -> Longshan Elementary School -> Wanhua Police Sta -> Guilin Rd -> Kunming Activity Center -> Neijiang St -> Ximen Market (Hanzhong) -> Baoqing Rd -> Boai Rd -> Taipei Post Office -> Taipei Main Sta (Zhongxiao) -> NTU Hospital -> MRT Chiang Kai-shek Memorial Hall Sta (Zhongshan ) -> MRT Chiang Kai-shek Memorial Hall Sta (Bureau of Labor Insurance) -> Taipei Water Dept West District Business Office (Ningbo) -> TCUH Branch of Women and Children 1 -> Nanchang Rd Furniture Market -> MRT Guting Sta (Heping) -> National Taiwan Normal U -> NTNU Union Building 1 -> Wenzhou St Entrance -> Daan Park -> Longmen Jr High School (Heping) -> Fuxing S Rd Entrance -> National Taipei University of Education -> Wolong St -> Heping and Anhe intersection -> MRT Liuzhangli Sta (Heping) -> Fuyang St Entrance -> Lizhong Market -> MRT Linguang Sta[^tdx-bus]

**18 (32 stops):** Lizhong Market -> Fuyang St Entrance -> MRT Liuzhangli Sta (Heping) -> Heping and Anhe intersection -> Wolong St -> National Taipei University of Education -> Fuxing S Rd Entrance -> NTUEEES -> Longmen Jr High School (Heping) -> Daan Park -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Roosevelt and Chaozhou Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> Taipei First Girls High School (Gongyuan) -> MRT NTU Hospital Station -> Taiwan Museum (Guanqian) -> Taipei Main Sta (Kaifeng) -> Chongqing S Road Sec 1 -> 2/28 Peace Park -> Hengyang Rd -> Ximen Market (Chengdu) -> Xining S Rd -> Guilin and Kunming Intersection -> Guilin Rd -> Wanhua Police Sta -> Longshan Elementary School -> Huajiang Police Station -> Liba Community -> Huajiang Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the stop and geometry records; route length and
full timetable detail stay TBC.[^tdx-bus] A community wiki (zh.wikiversity)
lead states that 18's predecessor was 欣欣客運's own self-operated Route 2,
running 華江大橋 - 六張犁 from its opening day, 1969-08-02; that the route was
rerouted in 1970 to dispatch from 人壽一村 via 和平東路; that on 1977-06-12 it
was brought into the joint-operation (聯營) bus system and renamed 18; and
that it was adjusted again on 2006-05-10 for the opening of the 羅斯福路 bus
lane. The wikiversity page carries no cited primary source for any of these
dates; this could not be corroborated against a primary source in this
search, so none of this appears above.[^tdx-bus] The same lead also names a
2026-07 to 2026-10 stop suspension tied to 師大人行地下道 works, which — if
real — would fall inside this route's current service period; this too is
uncorroborated against a primary announcement in this search and does not
appear above.[^tdx-bus]
