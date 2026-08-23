---
title: "NK-TianMu / 南軟通勤專車天母線"
summary: "Special shuttle route: NK-TianMu (南軟通勤專車天母線)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Special shuttle / commuter service (通勤／專車)"
    source: ebus-special
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
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
  - id: ebus-route-route-1sgvobx
    title: "NK-TianMu route schedule"
    titleOriginal: "南軟通勤專車天母線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 南軟通勤專車天母線 under 南軟專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “天母 - 南港軟體園區”, the current head/last-departure field “[平日] 0730 - 1810 [假日] 停駛”, fare “兩段票”.[^ebus-route-route-1sgvobx] It currently lists weekday service and suspended holiday service.[^ebus-route-route-1sgvobx]

The confirmed stop sequence runs from 天母, past 農訓協會/天母新村/天母
廣場/齊福華廈/齊賢華廈/榮總一/榮總/永明派出所/綜合市場(捷運石牌站)/石牌
國小/石牌路/石牌福星宮/文林國小/中正高中, through 捷運芝山站(福國)/福林
橋/捷運士林站(中山)/台電台北北區營業處/銘傳大學/捷運劍潭站(中山)/劍潭/
圓山大飯店/中央電台/忠烈祠/經國七海文化園區/空軍司令部/大直高中/大直
國小/捷運大直站/植福宮/自強隧道/捷運劍南路站, ending at 園區街/南港軟體
園區(一期大門), converging with the separate 南軟通勤專車北投線 over the
Dazhi-to-Nangang stretch.[^tdx-bus] Six confirmed interchanges are
recorded in the curated stop-ID join set: Dazhi (BR14), Jiannan Rd.
(BR15), Jiantan (R15), Shilin (R16), Zhishan (R17) and Shipai (R19),
one fewer than the seven confirmed for the 北投線 sharing this route's
own final stretch.[^tdx-bus] The route runs two named subroutes under
one operator, 光華巴士, on a two-stage fare, weekdays only with holiday
service suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for NK-TianMu; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**NK TianMu (36 stops):** Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> Qifu Mansion -> Qixian Mansion -> Veterans General Hospital I -> Veterans General Hospital -> Yongming Police Substation -> General Market (MRT Shipai Sta) -> Shipai Elementary School -> Shipai Rd -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Fuguo) -> Fulin Bridge -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> The Grand Hotel -> Radio Taiwan International -> Martyr Shrine -> CHING-KUO Chihai Cultural Park -> Air Force Command Headquarters -> Dazhi High School -> Dazhi Elementary School -> MRT Dazhi Station -> Zhifu Temple -> Zihqiang Tunnel (Dazhi Church) -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Park St -> Nangang Software Park (Gate 1)[^tdx-bus]

**NK TianMu (31 stops):** Park St -> Nangang Software Park (Gate 1) -> Miramar -> MRT Jiannan Rd Station -> Zihqiang Tunnel -> Zhifu Temple -> MRT Dazhi Station -> Dazhi High School -> Air Force Command Headquarters -> Martyr Shrine -> Radio Taiwan International -> The Grand Hotel -> Jiantan -> Mingchuan U -> Taiwan Power Company North Taipei District Office -> Chiang Kai-Shek Shilin Residence (Zhongshan) -> Fulin Bridge -> MRT Zhishan Sta (Fuguo) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Shipai Rd -> Shipai Elementary School -> General Market (MRT Shipai Sta) -> Yongming Police Substation -> Veterans General Hospital -> Qixian Mansion -> Qifu Mansion -> Tianmu Square -> Tianmu New Village -> Tianmu[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 天母 with the Nangang Software Park specifically as the route's own termini, distinct from the parallel 北投線 converging on the same final stretch, was found in this search.
