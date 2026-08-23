---
title: R29 / 紅29
summary: Red-line feeder route R29 (紅29).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅29 under 捷運紅線接駁公車.
  - id: ebus-r29
    title: R29 route schedule
    titleOriginal: 紅29班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111002900
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 內湖(新湖二路)–捷運民權西路站 corridor, weekday/holiday service spans, one-section fare, 東南客運內湖站 contact and the current 三軍總醫院內湖院區 working.
---

## Classification and corridor

The official catalogue lists 紅29 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 內湖(新湖二路) - 捷運民權西路站, weekday and holiday service 0600–2340, one-section fare and 東南客運內湖站 as the service contact. It records that 0800–2130 trips serve 三軍總醫院內湖院區, with 2130, 2230 and 2340 departures after 2130 on both day types.[^ebus-r29]

At 41-45 stops each way, the confirmed stop sequence is one of the longer
routes in this batch: from 東南客運停車場 in Neihu, past 三總內湖站/將軍嶺, along
成功路三段 past a stop literally named 捷運內湖站, through 瑞光/民權大橋, then
the length of 民權東路 past 民權龍江路口/民權建國路口, ending at 捷運民權西路站.[^tdx-bus] Five confirmed interchanges are recorded in the curated stop-ID
join set: Zhongshan Junior High School (BR12), Songshan Airport (BR13),
Neihu (BR19), Zhongshan Elementary School (O10) and Minquan W. Rd.
(O11/R13).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R29; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R29 (41 stops):** SoutheastBusParkingLot -> Xingai Rd Lane 77 Entrance -> Xingshan & Xingai Intersection -> Xingshan & Shitan Roads -> Sanmin Junior High School -> Neihu Admin Building -> National Defense Medical Center -> Tri-Service General Hospital -> Jiangjun Ling -> St Francis High School -> Xingyun St -> Jingzhi New Village -> Neihu New Village -> Kangning AIT Community -> American Institute in Taiwan -> Kangning Police Substation -> Qingbai Village -> MRT Neihu Sta -> Huguang Market -> Chenggong Rd Sec 3 -> Neihu Jr High School -> Ziyang -> Ruiyang　Park No 3 -> Yangguang St -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Sanmin Elementary School -> MinQuan Elementary School -> China Airlines -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> MinQuan-Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station[^tdx-bus]

**R29 (45 stops):** Chengyuan High School -> Datong Police Sta -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> Minquan and Fuxing Intersection -> Minquan and Dunhua Intersection -> Minquan E Rd Entrance -> China Airlines -> Minquan Park -> Minquan Elementary School -> Sanmin Elementary School -> MinQuan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Yangguang St -> Wende Police Substation -> Ziyang -> Neihu Jr High School -> Chenggong Rd Sec 3 -> Huguang Market -> MRT Neihu Sta -> Qingbai Village -> Kangning Police Substation -> American Institute in Taiwan -> Kangning AIT Community -> Neihu New Village -> Jingzhi New Village -> Xingyun St -> St Francis High School -> Jiangjun Ling -> Tri-Service General Hospital -> National Defense Medical Center -> Neihu Admin Building -> Ln 56, Sec 6, Minquan E Rd -> Xingshan and Shitan Intersection -> Xingshan & Xingai Intersection -> Xingai Rd Lane 77 Entrance -> Unitech Building[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅29 was found
in this search, nor a stated reason for the 三軍總醫院內湖院區 detour's own
0800–2130 window rather than running it all day.[^tdx-bus] A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
departures listed after 2130.[^ebus-r29]
