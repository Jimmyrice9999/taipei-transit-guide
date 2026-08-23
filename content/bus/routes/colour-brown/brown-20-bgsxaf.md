---
title: BR20B / 棕20預
summary: Brown-line feeder pilot route BR20B (棕20預), the reserved variant in the TDX snapshot.
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
    note: Supports the normalized 棕20預 route identity and structural fields.
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
    title: BR20 route schedule and reserved detours
    titleOriginal: 棕20路線資訊
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114002000
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports reservation-only 美堤碼頭 detours, not a separate 棕20預 identity.
---

## Classification and conflict

The official catalogue places 棕20 under 捷運棕線接駁公車.[^ebus-brown] TDX has a separate normalized record 棕20預, while the full official page describes reservation-only 美堤碼頭 detours without publishing that separate label.[^ebus-br20] The two values are retained.[^tdx-bus]

The confirmed outbound stop sequence in this separate TDX record runs from 行善行愛路口, past 新湖行善路口/濱江國中/外雙溪(至善), ending at 故宮博物院(正館); the return working ends at 行善石潭路口 rather than the outbound origin.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID join set: Jiannan Rd. (BR15), the same single station confirmed for plain 棕20.[^tdx-bus] This record carries 2 subroutes under a single operator, 大南汽車, distinct from plain 棕20's own 4-subroute TDX record.[^tdx-bus] The outbound working covers 19 stops and the return, ending at 行善石潭路口 rather than the outbound origin, also covers 19 — an asymmetric loop rather than a there-and-back working over the same stop set.[^tdx-bus] Whether this separately filed record represents a distinct scheduled service or is simply TDX's own alternate encoding of plain 棕20's reservation-only detour was not established by any source checked for this entry.[^tdx-bus][^ebus-br20] Both endpoints, 行善行愛路口 and 故宮博物院(正館), match plain 棕20's own published outbound termini exactly.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR20B; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR20B (19 stops):** Xingshan & Xingai Intersection -> Xinhu and Xingshan Intersection -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Binjiang Jr High School -> Keelung River 2nd Term Public Housing 1 -> Dazhi Meiti Garden 2 -> Meiti Wharf -> Jingye 3rd Rd 2 -> Jingye 3rd Rd 1 -> MRT Jiannan Rd Station -> Waishuangxi -> Waishuangxi -> National Palace Museum[^tdx-bus]

**BR20B (19 stops):** National Palace Museum -> Waishuangxi -> Zihqiang Tunnel -> Miramar (Zhifu) -> Miramar (Lequing) -> Jingye 3rd Rd 2 -> Meiti Wharf -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Zhipan New Village -> Neihu and Jihu Intersection -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> Xingshan and Shitan Intersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 0 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

- Route history: TBC.
- Corridor decision: TBC.
- Operator changes: TBC.
