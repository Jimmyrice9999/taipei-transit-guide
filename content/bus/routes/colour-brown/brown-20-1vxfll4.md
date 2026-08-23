---
title: BR20 / 棕20
summary: Brown-line feeder pilot route BR20 (棕20).
updated: 2026-08-15
line: BR
facts:
  - label: Service class
    value: MRT brown-line feeder
    source: ebus-brown
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
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕20 under 捷運棕線接駁公車.
  - id: ebus-br20
    title: BR20 route schedule and stop sequence
    titleOriginal: 棕20路線資訊
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114002000
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the BR20 schedule, fare, operator, reservation-only detours and published stop order.
---

## Classification and unusual working

The official catalogue lists 棕20 under 捷運棕線接駁公車.[^ebus-brown] Its full route page gives 「內科 - 故宮博物院」, 0630–2120 on weekdays and holidays, one-section fare, 大南汽車 as the service contact, and reservation-only 美堤碼頭 detours.[^ebus-br20]

The official stop page and TDX sequence retain the more specific first and last stop names; both endpoint abstractions are published and remain visible.[^tdx-bus]

The confirmed outbound stop sequence runs from 行善行愛路口, past 行善石潭路口/基湖站/外雙溪(至善), ending at 故宮博物院(正館).[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID join set: Jiannan Rd. (BR15).[^tdx-bus] The route runs 4 subroutes under a single operator, 大南汽車: a standard working and a separately filed 棕20預約公車 (reservation) working, each with its own inbound and outbound trip, alongside the reservation-only 美堤碼頭 detour recorded on the schedule page.[^ebus-br20][^tdx-bus] The standard outbound working covers 17 stops and the standard return 18; the 預約公車 (reservation bus) outbound and return workings run one stop longer each, at 18 and 19, reflecting the reservation-only detour.[^tdx-bus] No dated history establishes when the reservation working was added or why it is filed as a separate TDX subroute rather than a footnote on the standard one.[^ebus-br20]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BR20; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR20 (17 stops):** Xingshan & Xingai Intersection -> Xingshan and Shitan Intersection -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Jingye 3rd Rd 2 -> Jingye 3rd Rd 1 -> MRT Jiannan Rd Station -> Waishuangxi -> Waishuangxi -> National Palace Museum[^tdx-bus]

**BR20 (18 stops):** National Palace Museum (I) -> Waishuangxi -> Zihqiang Tunnel -> Miramar (Zhifu) -> Miramar (Lequing) -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Zhipan New Village -> Neihu and Jihu Intersection -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> Xingshan and Shitan Intersection -> Xingshan & Xingai Intersection[^tdx-bus]

**BR20 (18 stops):** Xingshan & Xingai Intersection -> Xingshan and Shitan Intersection -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Meiti Wharf -> Jingye 3rd Rd 2 -> Jingye 3rd Rd 1 -> MRT Jiannan Rd Station -> Waishuangxi -> Waishuangxi -> National Palace Museum[^tdx-bus]

**BR20 (19 stops):** National Palace Museum (I) -> Waishuangxi -> Zihqiang Tunnel -> Miramar (Zhifu) -> Miramar (Lequing) -> Meiti Wharf -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Zhipan New Village -> Neihu and Jihu Intersection -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> Xingshan and Shitan Intersection -> Xingshan & Xingai Intersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

- Route history: TBC.
- Corridor decision: TBC.
- Operator changes: TBC.
