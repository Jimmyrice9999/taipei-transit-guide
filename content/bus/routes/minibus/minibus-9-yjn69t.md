---
title: "S9 / 小9(台灣好行-北投竹子湖)"
summary: "Minibus and community route: S9 (小9(台灣好行-北投竹子湖))."
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
  - id: ebus-route-minibus-9-yjn69t
    title: "S9 route schedule"
    titleOriginal: "小9(台灣好行-北投竹子湖)班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小9(台灣好行-北投竹子湖) under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 竹子湖”, the current head/last-departure field “[平日] 0520 - 2250 [假日] 0520 - 2250”, fare “兩段票”.[^ebus-route-minibus-9-yjn69t]

At 55 stops outbound and 48 back, the confirmed stop sequence is the
second-longest of any minibus route in this batch, after only the
separate 小8, running from 致遠新村, past 捷運北投站(北投)/新北投/新民國
中/國軍北投醫院/彌陀寺(硫磺谷)/大同之家/十八份福德宮/十八份/泉源國小/頂
湖, up into Yangmingshan itself past 陽明公園服務中心/陽明山立體停車場/陽
明山/陽明山國家公園管理處/氣象台/陽明書屋, ending at 竹子湖.[^tdx-bus] Two
confirmed interchanges are recorded in the curated stop-ID join set:
Beitou (R22) and Xinbeitou (R22A), the same pair confirmed for the
shorter shuttle sibling 小9區.[^tdx-bus] The route runs a single
subroute under one operator, 大南汽車, branded as a 台灣好行 (Taiwan
Tourist Shuttle) service on a two-stage fare.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S9; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S9 (55 stops):** Zhiyuan New Village -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Xinmin Junior High School -> Beitou Armed Forces Hospital -> Linquan Village -> Xinmin Rd (End) -> Quanyuan Bieshu -> Mituo Temple (Sulfur Valley) -> Datong House -> Shibafeng Fude Temple -> Shibafen -> Quanyuan Elementary School -> Dormitory of Quanyuan Elementary School -> Hongshixia -> Wuweilun -> Fengwei -> Dinghu Activity Center -> Dinghu -> Neipu -> Zhounei -> Yangming Park 1 -> Yangming Park -> Yangming Waterfall -> Dakeng Temple -> Hushan Rd Sec 2 -> Yangmingshan Park Visitor Center -> Yangmingshan Car Park (Grass Mountain Residence) -> Dingping -> Hengling Historic Trail -> Second Contiunation Well -> Yangmingshan -> Yangmingshan National Park Headquarters -> Boy Scouts Stop -> Huangziwai -> Central Weather Bureau -> Yangming Academy House -> Zhuzihu Rd No4-1 -> Zhuzihu Rd No2-2 -> Zhuzihu Rd No7 -> Zhuza Police Substation -> Hutian Bridge -> Zhuzihu -> Hutian Community Center -> Fengjikou -> Dinghu Entrance (Zhuzihu)[^tdx-bus]

**S9 (48 stops):** Hutian Bridge -> Zhuza Police Substation -> Zhuzihu Rd No7 -> Shuiyunjian -> Yangming Academy House -> Central Weather Bureau -> Huangziwai -> Boy Scouts Stop -> Yangmingshan National Park Headquarters -> Yangmingshan -> Dingping -> Yangmingshan Car Park (Grass Mountain Residence) -> Yangmingshan Park Visitor Center -> Hushan Rd Sec 2 -> Dakeng Temple -> Yangming Waterfall -> Yangming Park -> Yangming Park 1 -> Zhounei -> Neipu -> Dinghu -> Dinghu Activity Center -> Fengwei -> Wuweilun -> Hongshixia -> Dormitory of Quanyuan Elementary School -> Quanyuan Elementary School -> Shibafen -> Quanyuan 3rd Bridge -> Shibafeng Fude Temple -> Datong House -> Mituo Temple (Sulfur Valley) -> Quanyuan Bieshu -> Xinmin Rd (End) -> Linquan Village -> Beitou Armed Forces Hospital -> Xinmin Junior High School -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Zhiyuan New Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for this route's own two-stage fare and Taiwan Tourist Shuttle branding, distinct from the plain minibus classification and one-stage fare of most routes in this batch, was found in this search.
