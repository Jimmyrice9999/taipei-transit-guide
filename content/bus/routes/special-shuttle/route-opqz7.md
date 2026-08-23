---
title: "Maokong Left (Zoo) / 貓空左線(動物園)"
summary: "Special shuttle route: Maokong Left (Zoo) (貓空左線(動物園))."
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
  - id: ebus-route-route-opqz7
    title: "Maokong Left (Zoo) route schedule"
    titleOriginal: "貓空左線(動物園)班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162002200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 貓空左線(動物園) under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “富德 - 貓空纜車站”, the current head/last-departure field “[平日] 0650 - 2000 [假日] 0700 - 2330”, fare “一段票”.[^ebus-route-route-opqz7]

The confirmed stop sequence runs from 富德, past 象頭埔/萬福橋, through
捷運動物園站/貓纜動物園站, along 萬壽橋頭(新光)/萬壽橋頭(秀明)/萬興國小/
政大(聯合醫院)/小坑口(北政國中)/北政國中(政大實小)/三角公園/政大威秀/
水鋼琴社區/指南實小/石獅腳/樟樹步道北口/田寮橋/石坡坑, ending at 貓空纜
車站, with the return leg looping further via 天恩宮/茶推廣中心/貓空壺
穴站/貓空站(小天空步道)/涼亭站/圓山/草湳/岐山.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Taipei Zoo
(BR01), matching a stop early in the route's own corridor.[^tdx-bus]
The route runs two named subroutes under one operator, 欣欣客運, with
its own holiday service running later than its own weekday hours.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Maokong Left (Zoo); each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Maokong Left (Zhinan Temple) (20 stops):** Fude -> Xiangtoupu -> Wanfu Bridge -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Beizheng Jr High School (Experimental Elementary School of NCCU) -> Sanjiao Park -> National Chengchi U Vieshow -> Shuigangqin Community -> Zhinan Experimental Elementary School -> Shishijiao -> North Entrance of Camphor Tree Trail -> Tianliao Bridge -> Shipokeng -> Maokong Gondola Stop[^tdx-bus]

**Maokong Left (Zhinan Temple) (23 stops):** Tianen Temple -> Tea Promotion Center -> Maokong Pothole Sta -> Maokong Sta (Mini Skywalk) -> Pavilion Stop -> Yuanshan -> Yuanshan 1 -> Caonan -> Qishan -> Shuigangqin Community -> Sanjiao Park -> Beizheng Jr High School (Experimental Elementary School of NCCU) -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Wanfu Bridge -> Xiangtoupu -> Fude[^tdx-bus]

**Maokong Left (Zhinan Temple) (1 stops):** Maokong Gondola Stop[^tdx-bus]

**Maokong Left (Zhinan Temple) (2 stops):** Tianen Temple -> MRT Taipei Zoo Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the outbound and return legs following such different paths, or for the route's own later holiday closing time, was found in this search.
