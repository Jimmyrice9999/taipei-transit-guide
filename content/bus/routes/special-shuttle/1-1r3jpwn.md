---
title: "BS1 / 北士科1"
summary: "Special shuttle route: BS1 (北士科1)."
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
  - id: ebus-route-1-1r3jpwn
    title: "BS1 route schedule"
    titleOriginal: "北士科1班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 北士科1 under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 3 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “士東路 - 北士科”, the current head/last-departure field “[平日] 0600 - 2000 [假日] 0600 - 2000”, fare “一段票”.[^ebus-route-1-1r3jpwn]

The confirmed stop sequence runs from 職能發展學院一, past 士東路/天母棒球
場(士東)/蘭雅國中/德行忠誠路口/忠義新城/石油新村/士林電機, through 捷運芝
山站(福國), along 中鼎第二總部大樓/福美承平路口/三王宮, ending at 福美站
in the 北士科 (Beishike) technology district.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Zhishan
(R17), confirmed roughly midway along the route's own corridor.[^tdx-bus] TDX records three direction/variant records for this
service under two operators, 光華巴士 and 中興巴士.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BS1; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BS1 (13 stops):** Taipei Vocational Development Institute 2 -> Shidong Rd -> Tianmu Baseball Stadium -> Lanya Junior High School -> Dexing and Zhongcheng Intersection -> Zhongyi New Village -> Shiyou New Village -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> CTCI Second Headquarters -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop[^tdx-bus]

**BS1 (14 stops):** Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> CTCI Second Headquarters -> MRT Zhishan Sta (Fuhua) -> Zhongshan N Rd Entrance (Dexing) -> Shiyou New Village -> Zhongyi New Village -> Dexing and Zhongcheng Intersection -> Lanya Junior High School -> Tianmu Baseball Stadium -> Shidong Rd -> Taipei Vocational Development Institute 2[^tdx-bus]

**BS1 (13 stops):** Taipei Vocational Development Institute 2 -> Shidong Rd -> Tianmu Baseball Stadium -> Lanya Junior High School -> Dexing and Zhongcheng Intersection -> Zhongyi New Village -> Shiyou New Village -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> CTCI Second Headquarters -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop[^tdx-bus]

**BS1 (14 stops):** Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> CTCI Second Headquarters -> MRT Zhishan Sta (Fuhua) -> Zhongshan N Rd Entrance (Dexing) -> Shiyou New Village -> Zhongyi New Village -> Dexing and Zhongcheng Intersection -> Lanya Junior High School -> Tianmu Baseball Stadium -> Shidong Rd -> Taipei Vocational Development Institute 2[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 士東路 with 北士科 specifically as the route's own termini was found in this search, nor a stated reason for the route confirming only one interchange despite passing close to both Zhishan and Shilin on its own corridor.
