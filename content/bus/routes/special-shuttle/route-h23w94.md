---
title: "NS-Shuanghe / 南軟通勤專車雙和線"
summary: "Special shuttle route: NS-Shuanghe (南軟通勤專車雙和線)."
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
  - id: ebus-route-route-h23w94
    title: "NS-Shuanghe route schedule"
    titleOriginal: "南軟通勤專車雙和線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 南軟通勤專車雙和線 under 南軟專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “土城駕訓中心 - 南港軟體園區”, the current head/last-departure field “[平日] 0640 - 1820 [假日] 停駛”, fare “兩段票”.[^ebus-route-route-h23w94] It currently lists weekday service and suspended holiday service.[^ebus-route-route-h23w94]

The confirmed stop sequence runs from 駕訓中心, past 中和高中/連城路/連
城中正路口/連城錦和路口/台貿一村/中和國稅局/連城景平路/連城中和路口/廟
美里/南山高中(中山路)/佳和公園/保生路口/永平高中/中山路口, through 福和
橋(永元路)/公館/臺灣科技大學/臺大癌醫(基隆路)/基隆長興街口/和平高中/捷
運六張犁站(基隆路), ending at 喬治商職/三興國小/吳興街口/世貿中心(基隆
路)/市政府(市府)/園區街/南港軟體園區北站/南港軟體園區南站, continuing
well past the terminus published for the shorter 南軟通勤專車中和線 over a
similar opening stretch.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Liuzhangli (BR07), the same
single station confirmed for 南軟通勤專車中和線.[^tdx-bus] TDX records
four named direction/variant records for this service under two
operators, 大都會客運 and 臺北客運, on a two-stage fare, weekdays only
with holiday service suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for NS-Shuanghe; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**NK Shuanghe (35 stops):** Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Liancheng Zhongzheng Intersection -> Liancheng Jinhe Rd Intersection -> Taimao Village 1 -> National Taxation Bureau Jhonghe Office -> Liancheng Jingping Rd Intersection -> Liancheng Zhonghe Rd Intersection -> Miaomei Village -> Nanshan High School(Zhongshan Rd) -> Jiahe Park -> Baosheng Rd Entrance -> Yongping Senior High School -> Zhongshan Rd Entrance -> Yuxi St Entrance(Zhongzheng Rd) -> Daxin St -> Fuhe Village -> Yongli Rd -> Fuhe Junior High School -> Fuhe Bridge(Yongyuan Rd) -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Heping High School -> MRT Liuzhangli (Keelung Rd) -> George Vocational High School of Taipei -> Sanxing Elementary School (Linjiang St Night Market) -> Wuxing St Entrance -> World Trade Center (Keelung Rd) -> Taipei City Hall -> Park St -> Nangang Software Park N -> Nangang Software Park S[^tdx-bus]

**NK Shuanghe(back) (34 stops):** Nangang Economic & Trade Park S Sta -> Park St -> Taipei City Hall (Songzhi) -> World Trade Center (Keelung Rd) -> Wuxing St Entrance -> Sanxing Elementary School (Linjiang St Night Market) -> George Vocational High School of Taipei -> MRT Liuzhangli (Keelung Rd) -> Heping High School -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> Fuhe Bridge(Linsen Rd) -> Fuhe Junior High School -> Yongli Rd -> Fuhe Village -> Daxin St -> Zhengxing Village -> Zhongshan Rd Entrance -> Yongping High School -> Baosheng Rd Entrance -> Jiahe Park -> Nanshan High School(Zhongshan Rd) -> Miaomei Village -> Liancheng Zhonghe Rd Intersection -> Liancheng Jingping Rd Intersection -> National Taxation Bureau Jhonghe Office -> Taimao Village 1 -> Liancheng Jinhe Rd Intersection -> Liancheng Zhongzheng Intersection -> Liancheng Rd -> Zhonghe High School -> Drivers Training Center[^tdx-bus]

**NK Shuanghe (35 stops):** Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Liancheng Zhongzheng Intersection -> Liancheng Jinhe Rd Intersection -> Taimao Village 1 -> National Taxation Bureau Jhonghe Office -> Liancheng Jingping Rd Intersection -> Liancheng Zhonghe Rd Intersection -> Miaomei Village -> Nanshan High School(Zhongshan Rd) -> Jiahe Park -> Baosheng Rd Entrance -> Yongping Senior High School -> Zhongshan Rd Entrance -> Yuxi St Entrance(Zhongzheng Rd) -> Daxin St -> Fuhe Village -> Yongli Rd -> Fuhe Junior High School -> Fuhe Bridge(Yongyuan Rd) -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Heping High School -> MRT Liuzhangli (Keelung Rd) -> George Vocational High School of Taipei -> Sanxing Elementary School (Linjiang St Night Market) -> Wuxing St Entrance -> World Trade Center (Keelung Rd) -> Taipei City Hall -> Park St -> Nangang Software Park N -> Nangang Software Park S[^tdx-bus]

**NK Shuanghe(back) (34 stops):** Nangang Economic & Trade Park S Sta -> Park St -> Taipei City Hall (Songzhi) -> World Trade Center (Keelung Rd) -> Wuxing St Entrance -> Sanxing Elementary School (Linjiang St Night Market) -> George Vocational High School of Taipei -> MRT Liuzhangli (Keelung Rd) -> Heping High School -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> Fuhe Bridge(Linsen Rd) -> Fuhe Junior High School -> Yongli Rd -> Fuhe Village -> Daxin St -> Zhengxing Village -> Zhongshan Rd Entrance -> Yongping High School -> Baosheng Rd Entrance -> Jiahe Park -> Nanshan High School(Zhongshan Rd) -> Miaomei Village -> Liancheng Zhonghe Rd Intersection -> Liancheng Jingping Rd Intersection -> National Taxation Bureau Jhonghe Office -> Taimao Village 1 -> Liancheng Jinhe Rd Intersection -> Liancheng Zhongzheng Intersection -> Liancheng Rd -> Zhonghe High School -> Drivers Training Center[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for running two separately numbered Zhonghe–Nangang Software Park shuttles, this route and 南軟通勤專車中和線, over a largely overlapping opening stretch under different operators, was found in this search.
