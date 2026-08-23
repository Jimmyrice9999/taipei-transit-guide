---
title: Minquan Metro Bus / 民權幹線
summary: Trunk route 民權幹線 (Minquan Metro Bus).
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
    note: Lists 民權幹線 under 幹線專車.
  - id: ebus-minquan
    title: Minquan Metro Bus route schedule
    titleOriginal: 民權幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港–臺北橋 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 民權幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 民權幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 南港 - 臺北橋, weekday and holiday service 0540–2340, one-section fare and 首都客運南港站 as the service contact.[^ebus-minquan]

A community wiki lists 民權幹線 as the renamed form of a former MRT feeder,
紅32 — a Tamsui–Xinyi Line feeder losing its colour prefix and gaining a
street name, one of eight such conversions this project's joint-operation
network page records.[^zh-trunk-bus]

The confirmed stop sequence runs from 南港, past a run of Neihu software-park
stops, through 民權東路 the length of Neihu and into central Taipei, ending
at 臺北橋 in Datong.[^tdx-bus] Four confirmed interchanges are named directly
in the stop sequence: 捷運東湖站 (Donghu, BR22), 捷運葫洲站 (Huzhou, BR21),
捷運中山國小站 (Zhongshan Elementary School, O10) and 捷運民權西路站, served by
both the Zhonghe–Xinlu Line (O11) and the Tamsui–Xinyi Line (R13).[^tdx-bus]
The curated join set adds three further confirmed codes — resolving to
Zhongshan Junior High School (BR12), Songshan Airport (BR13) and Nangang
Software Park (BR23) — at points the stop sequence's own names do not
directly repeat.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Minquan Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Minquan Metro Bus (35 stops):** Xiangyang　Park -> Nangang Police Dist (Chongyang) -> China Television Company -> Dongxin Elementary School -> Xinghua Rd -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang Software Park S -> Nangang Software Park N -> MRT Donghu Sta (Nanhu High School) -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> MinQuan Tunnel -> MinQuan Tunnel 2 -> Minquan E Rd Sec 6 (Minquan Dunpin) -> National Defense Medical University -> Fuhua Market -> Neihu Admin Building -> Sanmin Junior High School -> China Times Daily News Square -> Minquan Bridge -> Sanmin Elementary School -> MinQuan Elementary School -> China Airlines -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> MinQuan & Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station -> Chengyuan High School[^tdx-bus]

**Minquan Metro Bus (38 stops):** Datong Police Sta -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> Minquan and Fuxing Intersection -> Minquan and Dunhua Intersection -> Minquan E Rd Entrance -> China Airlines -> Minquan Park -> Minquan Elementary School -> Sanmin Elementary School -> MinQuan Bridge -> China Times Daily News Square -> Sanmin Junior High School -> Neihu Admin Building -> Fuhua Market -> Taipei Tennis Center -> Minquan E Rd Sec 6 (Minquan Dunpin) -> MinQuan Tunnel 2 -> MinQuan Tunnel -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Minghu Junior High School -> MRT Donghu Sta (Nanhu High School) -> Nangang Software Park N -> Nangang Software Park S -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Xinghua Rd -> Dongxin Elementary School -> China Television Company -> Nangang Police Dist (Chongyang) -> Nangang Police Dist (Xiangyang)[^tdx-bus]

**Minquan Metro Bus (35 stops):** Xiangyang　Park -> Nangang Police Dist (Chongyang) -> China Television Company -> Dongxin Elementary School -> Xinghua Rd -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang Software Park S -> Nangang Software Park N -> MRT Donghu Sta (Nanhu High School) -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> MinQuan Tunnel -> MinQuan Tunnel 2 -> Minquan E Rd Sec 6 (Minquan Dunpin) -> National Defense Medical University -> Fuhua Market -> Neihu Admin Building -> Sanmin Junior High School -> China Times Daily News Square -> Minquan Bridge -> Sanmin Elementary School -> MinQuan Elementary School -> China Airlines -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> MinQuan & Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station -> Chengyuan High School[^tdx-bus]

**Minquan Metro Bus (38 stops):** Datong Police Sta -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> Minquan and Fuxing Intersection -> Minquan and Dunhua Intersection -> Minquan E Rd Entrance -> China Airlines -> Minquan Park -> Minquan Elementary School -> Sanmin Elementary School -> MinQuan Bridge -> China Times Daily News Square -> Sanmin Junior High School -> Neihu Admin Building -> Fuhua Market -> Taipei Tennis Center -> Minquan E Rd Sec 6 (Minquan Dunpin) -> MinQuan Tunnel 2 -> MinQuan Tunnel -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Minghu Junior High School -> MRT Donghu Sta (Nanhu High School) -> Nangang Software Park N -> Nangang Software Park S -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Xinghua Rd -> Dongxin Elementary School -> China Television Company -> Nangang Police Dist (Chongyang) -> Nangang Police Dist (Xiangyang)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 紅32 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 首都客運 announcement in this search.
