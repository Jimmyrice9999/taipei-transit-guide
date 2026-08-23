---
title: "CB21 / 通勤21"
summary: "Special shuttle route: CB21 (通勤21)."
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
  - id: ebus-route-21-rl8urw
    title: "CB21 route schedule"
    titleOriginal: "通勤21班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152004400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 通勤21 under 通勤公車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “富德站 - 草湳大榕樹”, the current head/last-departure field “[平日] 0710 - 1830 [假日] 0800 - 1830”, fare “一段票”.[^ebus-route-21-rl8urw]

The confirmed stop sequence runs from 富德, past 象頭埔/萬福橋, through
捷運動物園站/貓纜動物園站, along 萬壽橋頭(新光)/萬壽橋頭(秀明)/萬興國小/
政大(聯合醫院)/小坑口(北政國中)/北政國中(政大實小)/三角公園/政大威秀/水
鋼琴社區, ending at 草湳大榕樹, sharing its own opening stretch with the
Maokong Gondola feeder routes classified elsewhere in this batch.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Taipei Zoo (BR01), matching a stop early in the
route's own corridor.[^tdx-bus] The route runs a single subroute
under one operator, 欣欣客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for CB21; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**CB21 (15 stops):** Fude -> Xiangtoupu -> Wanfu Bridge -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Beizheng Jr High School (Experimental Elementary School of NCCU) -> Sanjiao Park -> National Chengchi U Vieshow -> Shuigangqin Community -> Caonan Banyan Tree[^tdx-bus]

**CB21 (17 stops):** Caonan Banyan Tree -> Qishan -> Maokong Gondola Zhinan Temple Station -> Shuigangqin Community -> Sanjiao Park -> Beizheng Jr High School (Experimental Elementary School of NCCU) -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Wanfu Bridge -> Xiangtoupu -> Fude[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for classifying this route as a commuter shuttle (通勤公車) rather than alongside the Maokong feeder routes it shares its own opening stretch with was found in this search.
