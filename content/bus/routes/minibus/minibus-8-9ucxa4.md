---
title: "S8Shuttle / 小8區"
summary: "Minibus and community route: S8Shuttle (小8區)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-8-9ucxa4
    title: "S8Shuttle route schedule"
    titleOriginal: "小8區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000820
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小8區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運石牌站 - 陽明山”, the current head/last-departure field “[平日] 0900 - 1740 [假日] 0930 - 1650”, fare “一段票”.[^ebus-route-minibus-8-9ucxa4]

The confirmed stop sequence runs from 捷運石牌站(東華), past 榮總/五福宮/磺
溪/明山宮/永和里/行義路154巷至402巷/惇敘工商(行義), through a loop past 十
八份福德宮/中正山登山口/十八份埔/張公聖君廟/嶺頭 and back, continuing to 泉
源國小/頂湖/陽明公園服務中心/陽明山立體停車場, ending at 陽明山, a shorter
run than the separate 小8, which continues past the same stretch to 竹
子湖.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Shipai (R19), the same station confirmed for 小8
itself.[^tdx-bus] The route runs a single subroute under one operator,
大南汽車, the same operator running 小8 over the longer corridor.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S8Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S8Shuttle (47 stops):** MRT Shipai Sta (Donghua) -> General Market (MRT Shipai Sta) -> Yongming Police Substation -> Veterans General Hospital -> Rongguan New Village (Eastern District of VGH) -> Yongxin Village -> Wufu Temple (Shipai Rd) -> Wufu Temple (Xingyi Rd) -> Huangxi -> Mingshan Temple -> Yonghe Village -> Lane 154 Xingyi Rd -> Lane 186 Xingyi Rd -> Lane 260 Xingyi Rd -> Xingyi Rd hot spring area -> Lane 402 Xingyi Rd -> Dunxu High School of Industry and Commerce -> Datong House -> Shibafeng Fude Temple -> Quanyuan 3rd Bridge -> Zhongzhengshan Hiking Trail -> Shibafenpu -> Zhanggongshengjun Temple -> Lingtou -> Zhanggongshengjun Temple -> Shibafenpu -> Zhongzhengshan Hiking Trail -> Shibafen -> Quanyuan Elementary School -> Dormitory of Quanyuan Elementary School -> Hongshixia -> Wuweilun -> Fengwei -> Dinghu Activity Center -> Dinghu -> Neipu -> Zhounei -> Yangming Park 1 -> Yangming Park -> Yangming Waterfall -> Dakeng Temple -> Hushan Rd Sec 2 -> Yangmingshan Park Visitor Center -> Yangmingshan Car Park (Grass Mountain Residence) -> Dingping -> Hengling Historic Trail -> Second Contiunation Well[^tdx-bus]

**S8Shuttle (48 stops):** Yangmingshan -> Dingping -> Yangmingshan Car Park (Grass Mountain Residence) -> Yangmingshan Park Visitor Center -> Hushan Rd Sec 2 -> Dakeng Temple -> Yangming Waterfall -> Yangming Park -> Yangming Park 1 -> Zhounei -> Neipu -> Dinghu -> Dinghu Activity Center -> Fengwei -> Wuweilun -> Hongshixia -> Dormitory of Quanyuan Elementary School -> Quanyuan Elementary School -> Shibafen -> Quanyuan 3rd Bridge -> Zhongzhengshan Hiking Trail -> Shibafenpu -> Zhanggongshengjun Temple -> Lingtou -> Zhanggongshengjun Temple -> Shibafenpu -> Zhongzhengshan Hiking Trail -> Quanyuan 3rd Bridge -> Shibafeng Fude Temple -> Datong House -> Dunxu High School of Industry and Commerce -> Lane 402 Xingyi Rd -> Xingyi Rd hot spring area -> Lane 260 Xingyi Rd -> Lane 186 Xingyi Rd -> Lane 154 Xingyi Rd -> Yonghe Village -> Mingshan Temple -> Huangxi -> Wufu Temple (Xingyi Rd) -> Wufu Temple (Shipai Rd) -> Yongxin Village -> Rongguan New Village (Eastern District of VGH) -> Veterans General Hospital I -> Veterans General Hospital -> Yongming Police Substation -> General Market (MRT Shipai Sta) -> MRT Shipai Sta (Xi’an)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the out-and-back loop past 嶺頭 rather than a direct pass was found in this search.
