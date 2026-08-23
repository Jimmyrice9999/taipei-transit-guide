---
title: Neihu Metro Bus / 內湖幹線
summary: Trunk route 內湖幹線 (Neihu Metro Bus).
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
    note: Lists 內湖幹線 under 幹線專車.
  - id: ebus-neihu
    title: Neihu Metro Bus route schedule
    titleOriginal: 內湖幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 東湖–衡陽路 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 內湖幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 東湖 - 衡陽路, weekday service 0445–0000, holiday service 0500–0000, a two-section fare and 大都會客運東湖站 as the service contact.[^ebus-neihu]

The confirmed stop sequence threads nearly the entire Neihu stretch of the
Wenhu Line by road before crossing into central Taipei: from 南寮 in outer
Neihu, past 大湖公園 and the district centre, through 西湖/港墘/文德/劍南路
and 大直, then down 中山北路 through 圓山 and Datong to end near 衡陽路,
Taipei's historic downtown shopping street just west of 臺北車站.[^tdx-bus]
Nine confirmed interchanges are named directly in the stop sequence,
covering eight consecutive Wenhu Line stations end to end — 捷運葫洲站
(Huzhou, BR21), 捷運大湖公園站 (Dahu Park, BR20), 捷運內湖站 (Neihu, BR19),
捷運文德站 (Wende, BR18), 捷運港墘站 (Gangqian, BR17), 捷運西湖站 (Xihu,
BR16), 捷運劍南路站 (Jiannan Rd., BR15) and 捷運大直站 (Dazhi, BR14) — plus
臺北車站 (Taipei Main Station, a Bannan–Tamsui/Xinyi interchange, BL12/R10)
at the western end.[^tdx-bus] A handful of further curated codes on the
return leg resolve to the same stations without repeating their names in
the stop text (大直國小 for Dazhi, 麗山國中 and 恕德家商 near Gangqian and
Xihu), which this project's sourcing discipline records as confirmed by
stop-ID rather than by name.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Neihu Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Neihu Metro Bus (51 stops):** Nanliao(Zhong 3rd St Entrance) -> Kanghu Tunnel Entrance(Baima Shanzhuang) -> Wufenpi -> Donghu Junior High School -> Kangle St -> Donghu Community -> Donghu Elementary School -> Wufen Community -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> Kangning Hospital -> Huangshigong Temple -> Dahu Park -> MRT Dahu Park Sta -> Dahu -> Jinlong Village -> MRT Neihu Sta -> Huguang Market -> Chenggong Rd Sec 3 -> Neihu High School -> MRT Wende Sta (Bihu Park) -> Huguang Public Housing -> Xihu Library (Huguang Church) -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Zihqiang Tunnel -> Zhifu Temple -> MRT Dazhi Station -> Dazhi High School -> Air Force Command Headquarters -> Martyr Shrine -> Radio Taiwan International -> The Grand Hotel -> Taipei Fine Arts Museum -> Tatung U -> Tatung Company (Qingguang Market) -> Taini Building (Mackay Memorial Hospital) -> The Ambassador Hotel -> Zhongshan Market -> Executive Yuan -> Taipei Main Sta (Zhongxiao) -> Chongqing S Road Sec 1 -> 2/28 Peace Park[^tdx-bus]

**Neihu Metro Bus (53 stops):** Boai Rd -> Taipei Post Office -> Taipei Main Sta (Zhongxiao) -> Executive Yuan -> Zhongshan Market -> The Ambassador Hotel -> Taini Building (Mackay Memorial Hospital) -> Tatung Company (Qingguang Market) -> Tatung U -> Taipei Fine Arts Museum -> The Grand Hotel -> Radio Taiwan International -> Martyr Shrine -> CHING-KUO Chihai Cultural Park -> Air Force Headquarters -> Dazhi High School -> Dazhi Elementary School -> MRT Dazhi Station -> Zhifu Temple -> Zihqiang Tunnel (Dazhi Church) -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> Chenggong Rd Sec 3 -> Huguang Market -> MRT Neihu Sta -> Xiuhu -> Dahu -> MRT Dahu Park Sta -> Dahu Park -> Huangshigong Temple -> Kangning Hospital -> Kangning Community -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Wufen Community -> Donghu Elementary School -> Donghu Community -> Kangle St -> Donghu Junior High School -> Wufenpi -> Kanghu Tunnel Entrance(Baima Shanzhuang) -> Nanliao(Zhong 3rd St Entrance)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
