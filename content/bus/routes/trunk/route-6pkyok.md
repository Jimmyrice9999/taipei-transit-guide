---
title: Roosevelt Rd. Metro Bus / 羅斯福路幹線
summary: Trunk route 羅斯福路幹線 (Roosevelt Rd. Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 羅斯福路幹線 under 幹線專車.
  - id: ebus-roosevelt
    title: Roosevelt Rd. Metro Bus route schedule
    titleOriginal: 羅斯福路幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運動物園站–臺北車站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 羅斯福路幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 捷運動物園站 - 臺北車站, weekday and holiday service 0530–0030, a two-section fare and 欣欣客運木柵二站 as the service contact.[^ebus-roosevelt]

The confirmed stop sequence runs the full length of 羅斯福路 (Roosevelt
Road) it is named for, from 捷運動物園站 in Wenshan, through 木柵/興隆, past
NTU, then north to 臺北車站 (Taipei Main Station).[^tdx-bus] Seven confirmed
interchanges are named directly in the stop sequence: 捷運動物園站 (Taipei
Zoo, BR01), 捷運萬芳醫院站 (Wanfang Hospital, BR04), 捷運公館站 (Gongguan,
G07), 捷運台電大樓站 (Taipower Building, G08), 捷運古亭站 (served by both the
Songshan–Xindian Line as G09 and the Zhonghe–Xinlu Line as O05), 捷運中正
紀念堂站 (served by both the Songshan–Xindian Line as G10 and the Tamsui–
Xinyi Line as R08) and 捷運台大醫院站 (NTU Hospital, R09).[^tdx-bus] Its
nearly 19-hour weekday and holiday span, 0530 to 0030, is among the longest
published for any route in this project's trunk-route coverage.[^ebus-roosevelt]
TDX records it as a single subroute run by a single operator, 欣欣客運,
across its full 39-stop outbound and 41-stop return sequence, with no
recorded holiday-specific or half-working variant.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Roosevelt Rd. Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Roosevelt Rd Metro Bus (39 stops):** MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd -> Muzha Market -> Muzha -> Wenshan Police Sta 1 -> Mamingtan (Zaixing High School) -> Xinglong Shanzhuang -> Coast Guard Administration 1 -> Coast Guard Administration -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Xingde Elementary School -> Xinglong Market -> Chingshin Academy -> Xianguang Apartment -> Jingming St Entrance -> Changan Elementary School (Xinglong) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> MRT Taipower Building Sta -> Roosevelt and Pucheng Intersection -> Roosevelt and Kinmen St Intersection -> MRT Guting Sta (Roosevelt) -> Roosevelt and Chaozhou Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> Taipei First Girls High School (Gongyuan) -> MRT NTU Hospital Station -> Taiwan Museum (Guanqian) -> Taipei Main Sta (Kaifeng)[^tdx-bus]

**Roosevelt Rd Metro Bus (41 stops):** Chongqing S Road Sec 1 -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Taipei First Girls High School (Gongyuan) -> Affiliated Experimental Elementary School of University of Taipei -> MRT Chiang Kai-Shek Memorial Hall -> Roosevelt and Chaozhou Intersection -> MRT Guting Sta (Roosevelt) -> Roosevelt and Kinmen St Intersection -> Roosevelt and Pucheng Intersection -> MRT Taipower Building Sta -> Taipower Building -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Changan Elementary School (Xinglong) -> Jingming St Entrance -> Xianguang Apartment -> Chingshin Academy -> Xinglong Market -> Xingde Elementary School -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Coast Guard Administration 1 -> Xinglong Shanzhuang -> Mamingtan (Zaixing High School) -> Wenshan Police Sta 1 -> Muzha -> Muzha Market -> Yongan St -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
