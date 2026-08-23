---
title: "NK(Zhonghe-NK Science-Based Park) / 南軟通勤專車中和線"
summary: "Special shuttle route: NK(Zhonghe-NK Science-Based Park) (南軟通勤專車中和線)."
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
  - id: ebus-route-route-8dkx0
    title: "NK(Zhonghe-NK Science-Based Park) route schedule"
    titleOriginal: "南軟通勤專車中和線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 南軟通勤專車中和線 under 南軟專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中和 - 南港軟體園區”, the current head/last-departure field “[平日] 0650 - 1800 [假日] 停駛”, fare “兩段票”.[^ebus-route-route-8dkx0] It currently lists weekday service and suspended holiday service.[^ebus-route-route-8dkx0]

The confirmed stop sequence runs from 駕訓中心, past 中和高中/連城路/連
城中正路口/連城錦和路口/台貿一村/中和國稅局/連城景平路/連城中和路口/中
和廟口/中和派出所/南山高中/雙和里/華泰新城(宜安路)/宜安路/中興二村/中興
新村/得和路口/永和國小/金銀大廈/永利路/福和國中/福和橋(永元路), through
捷運六張犁站(基隆路), ending at 喬治商職/三興國小/吳興街口/園區街/南港
軟體園區(一期大門), a shorter run than the separate 南軟通勤專車雙和線,
which continues past a similar Zhonghe stretch through 公館 and further
Nangang stops.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Liuzhangli (BR07), the same single station
confirmed for 南軟通勤專車雙和線.[^tdx-bus] The route runs two named
subroutes under one operator, 中興巴士, on a two-stage fare, weekdays
only with holiday service suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for NK(Zhonghe-NK Science-Based Park); each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**NK Zhonghe-NK Science-Based Park (29 stops):** Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Liancheng Zhongzheng Intersection -> Liancheng Jinhe Rd Intersection -> Taimao Village 1 -> National Taxation Bureau Jhonghe Office -> Liancheng Jingping Rd -> Liancheng Zhonghe Rd Intersection -> Zhonghe Temple -> Zhonghe Police Station -> Nanshan High School -> Shuanghe Village -> Huatai New Village(Yian Rd) -> Yian Road -> Zhongxing Village 2 -> Zhongxing New Village -> Dehe Rd Entrance -> Yonghe Elementary School -> Jinyin Building -> Yongli Rd -> Fuhe Junior High School -> Fuhe Bridge(Yongyuan Rd) -> MRT Liuzhangli (Keelung Rd) -> George Vocational High School of Taipei -> Sanxing Elementary School (Linjiang St Night Market) -> Wuxing St Entrance -> Park St -> Nangang Software Park (Gate 1)[^tdx-bus]

**NK Science-Based Park-NK Zhonghe (29 stops):** Park St -> Nangang Software Park (Gate 1) -> Wuxing St Entrance -> Sanxing Elementary School (Linjiang St Night Market) -> George Vocational High School of Taipei -> MRT Liuzhangli (Keelung Rd) -> Fuhe Bridge(Linsen Rd) -> Fuhe Junior High School -> Yongli Rd -> Jinyin Building -> Yonghe Elementary School -> Dehe Rd Entrance -> Zhongxing New Village -> Zhongxing Village 2 -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Yian Road -> Huatai New Village(Yian Rd) -> Shuanghe Village -> Nanshan High School -> Zhonghe Police Station -> Zhonghe Temple Entrance -> Liancheng Zhonghe Rd Intersection -> Liancheng Jingping Rd -> National Taxation Bureau Jhonghe Office -> Taimao Village 1 -> Liancheng Jinhe Rd Intersection -> Liancheng Zhongzheng Intersection -> Liancheng Rd -> Zhonghe High School[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for running two separately numbered Zhonghe–Nangang Software Park shuttles, this route and 南軟通勤專車雙和線, over a largely overlapping opening stretch under different operators, was found in this search.
