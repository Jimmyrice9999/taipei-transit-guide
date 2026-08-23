---
title: "S23 / 小23"
summary: "Minibus and community route: S23 (小23)."
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
  - id: ebus-route-minibus-23
    title: "S23 route schedule"
    titleOriginal: "小23班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151002300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小23 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “關渡碼頭 - 北投國小”, the current head/last-departure field “[平日] 0600 - 2120 [假日] 0730 - 2030”, fare “一段票”.[^ebus-route-minibus-23]

The confirmed stop sequence runs from 關渡碼頭, past 關渡宮/敬老院/關渡自然
公園/關渡國中/關渡里, through 捷運關渡站, along 竹圍國小自強分校/淡水農會自
強分會/擎天大樓/新天母社區 and back, through 捷運忠義站/中央北路/桃源國中,
past 捷運復興崗站/製片廠/豐年郵局/復興崗/文化國小/大業中央北路口, ending at
北投國小.[^tdx-bus] Three confirmed interchanges are recorded in the
curated stop-ID join set, all on the same Tamsui-Xinyi Line stretch:
Fuxinggang (R23), Zhongyi (R24) and Guandu (R25).[^tdx-bus] TDX records
two named subroutes distinguishing a weekday working from a holiday
short-turn service running only between 關渡碼頭 and 捷運關渡站.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for S23; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S23 (38 stops):** Guandu Wharf -> Guandu Temple -> Senior Citizens Home -> Guandu Nature Park -> Guandu Junior High School (Guandu Hospital) -> Guandu Village -> MRT Guandu Sta -> Beitou District Office(Guandu) -> Ligong St -> Guandu -> Zhuwei Elementary School -> Ziqiang New Village -> Guanduwojia -> Laozhaung Building -> Taipei Christ College -> Qingtian Building -> XinTianmu Community -> Qingtian Building -> Taipei Christ College -> Laozhaung Building -> Fusheng Building -> Changhong Tianxia -> Liyang Art villa -> Guandu Elementary School (Taipei Chengshih University of Science & Technology) -> Yide St Entrance -> Hexin Hospital -> MRT Zhongyi -> Zhongyang N Rd -> TaoyuanJrHighSchool -> Xintian Temple Beitou Branch Zhongyi -> Zhongyang N Rd Sec 3 -> MRT Fuxinggang -> Movie Studio -> Fengnian Post Office -> Fuxinggang -> Wenhua Elementary School -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School[^tdx-bus]

**S23 (34 stops):** Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Wenhua Elementary School -> Fuxinggang -> Movie Studio -> MRT Fuxinggang -> Zhongyang N Rd Sec 3 -> Xintian Temple Beitou Branch Zhongyi -> TaoyuanJrHighSchool -> Zhongyang N Rd -> MRT Zhongyi -> Hexin Hospital -> Yide St Entrance -> Guandu Elementary School (Taipei Chengshih University of Science & Technology) -> Liyang Art villa -> Changhong Tianxia -> Fusheng Building -> Laozhaung Building -> Taipei Christ College -> Qingtian Building -> XinTianmu Community -> Qingtian Building -> Taipei Christ College -> Laozhaung Building -> Guanduwojia -> Ziqiang New Village -> Zhuwei Elementary School -> MRT Guandu Sta -> Guandu Village -> Guandu Junior High School (Guandu Hospital) -> Guandu Nature Park -> Senior Citizens Home -> Guandu Temple -> Guandu Wharf[^tdx-bus]

**S23 (2 stops):** Guandu Wharf -> MRT Guandu Sta[^tdx-bus]

**S23 (1 stops):** Guandu Wharf[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the holiday service shrinking to a two-stop shuttle rather than running the full weekday corridor was found in this search, nor a stated reason for the out-and-back detour past 新天母社區.
