---
title: "M6 / 市民小巴6"
summary: "Minibus and community route: M6 (市民小巴6)."
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
  - id: ebus-route-minibus-6-waev30
    title: "M6 route schedule"
    titleOriginal: "市民小巴6班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴6 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “舊莊 - 捷運南港站”, the current head/last-departure field “[平日] 0720 - 2000 [假日] 0720 - 2000”, fare “一段票”.[^ebus-route-minibus-6-waev30]

The confirmed stop sequence runs from 舊莊站, past 舊莊公園/金德橋頭/胡適國
小/福山抽水站/六福公園/誠正國中/國家文官學院/台北生技園區, through 捷運南港
站, ending at 南港車站, with one working detouring via 坑口運動公園/山豬窟
游泳池.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Nangang (BL22), matching a stop partway along the
route's own corridor.[^tdx-bus] TDX records four named direction/variant
records for this service, distinguishing the 山豬窟 detour from the
direct working and, unusually for this batch, published under two
separate operator names, 大南汽車 and 大都會客運, for what the stop
sequences show as the same physical corridor.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 8 directional or variant stop sequences for M6; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M6 (11 stops):** Jiuzhang Stop -> Jiuzhuang Park -> Jinde Bridge -> Hushi Elementary School -> Fushan Pumping Station -> Liufu Park -> Chengzheng Junior High School -> Nat'l Civil Service Institute -> Taipei Bioinnovation Park -> MRT Nangang Sta -> Nangang Rail Sta[^tdx-bus]

**M6 (10 stops):** Taipei Bioinnovation Park -> National Academy of Civil Service -> Chengzheng Junior High School -> Nangang Water Plant -> Liufu Park -> Fushan Pumping Station -> Hushi Elementary School -> Jinde Bridge -> Jiuzhuang Park -> Jiuzhang Stop[^tdx-bus]

**M6(Shanzhu) (17 stops):** Jiuzhang Stop -> Jiuzhuang -> Kengkou Sports Park -> Shanzhuku Swimming Pool -> Kengkou Sports Park -> Jiuzhuang -> Jiuzhang Stop -> Jiuzhuang Park -> Jinde Bridge -> Hushi Elementary School -> Fushan Pumping Station -> Liufu Park -> Chengzheng Junior High School -> Nat'l Civil Service Institute -> Taipei Bioinnovation Park -> MRT Nangang Sta -> Nangang Rail Sta[^tdx-bus]

**M6(Shanzhu) (16 stops):** Taipei Bioinnovation Park -> National Academy of Civil Service -> Chengzheng Junior High School -> Nangang Water Plant -> Liufu Park -> Fushan Pumping Station -> Hushi Elementary School -> Jinde Bridge -> Jiuzhuang Park -> Jiuzhang Stop -> Jiuzhuang -> Kengkou Sports Park -> Shanzhuku Swimming Pool -> Kengkou Sports Park -> Jiuzhuang -> Jiuzhang Stop[^tdx-bus]

**M6 (11 stops):** Jiuzhang Stop -> Jiuzhuang Park -> Jinde Bridge -> Hushi Elementary School -> Fushan Pumping Station -> Liufu Park -> Chengzheng Junior High School -> Nat'l Civil Service Institute -> Taipei Bioinnovation Park -> MRT Nangang Sta -> Nangang Rail Sta[^tdx-bus]

**M6 (10 stops):** Taipei Bioinnovation Park -> National Academy of Civil Service -> Chengzheng Junior High School -> Nangang Water Plant -> Liufu Park -> Fushan Pumping Station -> Hushi Elementary School -> Jinde Bridge -> Jiuzhuang Park -> Jiuzhang Stop[^tdx-bus]

**M6(Shanzhu) (17 stops):** Jiuzhang Stop -> Jiuzhuang -> Kengkou Sports Park -> Shanzhuku Swimming Pool -> Kengkou Sports Park -> Jiuzhuang -> Jiuzhang Stop -> Jiuzhuang Park -> Jinde Bridge -> Hushi Elementary School -> Fushan Pumping Station -> Liufu Park -> Chengzheng Junior High School -> Nat'l Civil Service Institute -> Taipei Bioinnovation Park -> MRT Nangang Sta -> Nangang Rail Sta[^tdx-bus]

**M6(Shanzhu) (16 stops):** Taipei Bioinnovation Park -> National Academy of Civil Service -> Chengzheng Junior High School -> Nangang Water Plant -> Liufu Park -> Fushan Pumping Station -> Hushi Elementary School -> Jinde Bridge -> Jiuzhuang Park -> Jiuzhang Stop -> Jiuzhuang -> Kengkou Sports Park -> Shanzhuku Swimming Pool -> Kengkou Sports Park -> Jiuzhuang -> Jiuzhang Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the same route being filed under two operator names rather than one shared operation was found in this search.
