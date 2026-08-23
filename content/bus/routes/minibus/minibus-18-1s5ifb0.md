---
title: "S18 / 小18"
summary: "Minibus and community route: S18 (小18)."
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
  - id: ebus-route-minibus-18-1s5ifb0
    title: "S18 route schedule"
    titleOriginal: "小18班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小18 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 聖人瀑布”, the current head/last-departure field “[平日] 0545 - 2240 [假日] 0550 - 2240”, fare “一段票”.[^ebus-route-minibus-18-1s5ifb0]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its own climb.[^tdx-bus] Past 故宮博物院 the
confirmed corridor diverges from the neighbouring 小1/小1區/小19 family,
running instead via 礁坑/溪山國小/溪山派出所/妙法寺/聖人橋, ending at 聖人
瀑布, distinct from both the 風櫃嘴 and 平菁街 corridors served by those
routes. The route runs a single subroute under one operator, 首都
客車.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S18; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S18 (37 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Xiaobei St -> Shilin Farmers Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin Xincun -> Soochow U (Chien Mu House) -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> ChinShan Junior High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Neishuangxi Bridge -> Lingjiao -> Shalun One -> Shalun -> Shuangxi Water Treatment Plant -> Zhishan Rd Sec 3 -> Bixi Bridge -> Jiaokeng -> Jiaokeng Bridge (Puyiyuan) -> Xishan Elementary School -> Dafeng -> Fenglin Bridge -> Xishan Police Substation -> Jiancuo -> Miaofa Temple -> Shenren Bridge -> Shengren Waterfall -> Pingdingguchaun Hiking Trail Entrance[^tdx-bus]

**S18 (36 stops):** Shengren Waterfall -> Shenren Bridge -> Miaofa Temple -> Jiancuo -> Xishan Police Substation -> Fenglin Bridge -> Dafeng -> Xishan Elementary School -> Jiaokeng Bridge (Puyiyuan) -> Jiaokeng -> Bixi Bridge -> Zhishan Rd Sec 3 -> Shuangxi Water Treatment Plant -> Shalun -> Shalun One -> Lingjiao -> Neishuangxi Bridge -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> ChinShan Junior High School -> Wesley Girls High School -> National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin Xincun -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Xiaobei St -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 捷運劍潭站 with 聖人瀑布 specifically as the route's own termini, rather than a nearer named stop, was found in this search.
