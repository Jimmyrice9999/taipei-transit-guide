---
title: "S11 / 小11"
summary: "Minibus and community route: S11 (小11)."
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
  - id: ebus-route-minibus-11-qal1hk
    title: "S11 route schedule"
    titleOriginal: "小11班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小11 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 3 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “萬芳社區 - 大春山莊”, the current head/last-departure field “[平日] 0600 - 2310 [假日] 0600 - 2250”, fare “一段票”.[^ebus-route-minibus-11-qal1hk]

The confirmed stop sequence runs from 萬芳社區, past 萬芳活動中心/捷運萬芳
社區站/木柵高工, through 木柵市場/景文中學/司法新村, along 忠順廟/國泰新村/景美
女中, ending at 寶高產業園區/大春山莊, with one working extending further
past 捷運七張站/北新國小.[^tdx-bus] Two confirmed interchanges are recorded
in the curated stop-ID join set: Wanfang Community (BR03) and Qizhang
(G03).[^tdx-bus] TDX records three named subroutes distinguishing whether
a working detours via 救千宮 or 捷運七張站.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for S11; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S11 (23 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Elementary School -> Wanfang No6 Park -> MRT Wanfang Community Sta -> Muzha Vocational High School(Wanfang) -> Wanfang Rd Entrance -> Muzha Elementary School -> Huaxia Village 6 -> Jiukang St Entrance -> Muzha -> Muzha Market -> Jingwen High School (National Taiwan College of Performing Arts) -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baogao Rd) -> Lane 120 Baogao Rd Entrance -> Ciyin Shanzhuang -> Dachun Shanzhuang[^tdx-bus]

**S11 (22 stops):** Baogao Community -> Baogao Science and Intellectual Park(Baogao Rd) -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School (National Taiwan College of Performing Arts) -> Muzha Market -> Muzha -> Jiukang St Entrance -> Huaxia Village 6 -> Muzha Elementary School -> Wanfang Rd Entrance -> Muzha Vocational High School(Wanfang) -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

**S11 (23 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Elementary School -> Wanfang No6 Park -> MRT Wanfang Community Sta -> Muzha Vocational High School(Wanfang) -> Wanfang Rd Entrance -> Muzha Elementary School -> Huaxia Village 6 -> Jiukang St Entrance -> Muzha -> Muzha Market -> Jingwen High School (National Taiwan College of Performing Arts) -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baogao Rd) -> Lane 120 Baogao Rd Entrance -> Ciyin Shanzhuang -> Dachun Shanzhuang[^tdx-bus]

**S11 (23 stops):** Jiouqian Temple -> Baogao Community -> Baogao Science and Intellectual Park(Baogao Rd) -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School (National Taiwan College of Performing Arts) -> Muzha Market -> Muzha -> Jiukang St Entrance -> Huaxia Village 6 -> Muzha Elementary School -> Wanfang Rd Entrance -> Muzha Vocational High School(Wanfang) -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

**S11 (33 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Elementary School -> Wanfang No6 Park -> MRT Wanfang Community Sta -> Muzha Vocational High School(Wanfang) -> Wanfang Rd Entrance -> Muzha Elementary School -> Huaxia Village 6 -> Jiukang St Entrance -> Muzha -> Muzha Market -> Jingwen High School (National Taiwan College of Performing Arts) -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> Baoqiang Rd Entrance -> Xindian Post Office -> MRT Qizhang Sta -> Beixin Elementary School -> Baoqiao & Zhongxing Intersection -> Baoqiao & Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park(Baogao Rd) -> Lane 120 Baogao Rd Entrance -> Ciyin Shanzhuang -> Dachun Shanzhuang[^tdx-bus]

**S11 (32 stops):** Baogao Community -> Baogao Science and Intellectual Park(Baogao Rd) -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> Baoqiang Rd Entrance -> Xindian Post Office -> MRT Qizhang Sta -> Beixin Elementary School -> Baoqiao & Zhongxing Intersection -> Baoqiao & Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School (National Taiwan College of Performing Arts) -> Muzha Market -> Muzha -> Jiukang St Entrance -> Huaxia Village 6 -> Muzha Elementary School -> Wanfang Rd Entrance -> Muzha Vocational High School(Wanfang) -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 8 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for
pairing 萬芳社區 with 大春山莊 specifically as the route's own termini was
found in this search, nor a stated reason for its own near-24-hour weekday
0600–2310 span over such a residential corridor, one of the longer
published spans in this batch.
