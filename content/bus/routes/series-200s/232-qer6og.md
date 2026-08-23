---
title: "232Express / 232快"
summary: "200-series route: 232Express (232快)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "200-series numbered service (一般公車)"
    source: ebus-general
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
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
  - id: ebus-route-232-qer6og
    title: "232Express route schedule"
    titleOriginal: "232快班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100023250
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 232快 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “蘆洲 - 松山車站”, the current head/last-departure field “[平日] 0715 - 0715 [假日] 停駛”, fare “兩段票”.[^ebus-route-232-qer6og] It currently lists weekday service and suspended holiday service.[^ebus-route-232-qer6og]

The confirmed stop sequence runs from 蘆洲總站, past 王爺廟口/蘆洲監理站/
溪墘, through 捷運徐匯中學站/捷運三和國中站/正義郵局/頂好市場, along 捷運
忠孝敦化站/阿波羅大廈/國父紀念館, through 捷運市政府站/市立工農/捷運永春站,
ending at 松山車站.[^tdx-bus] Seven confirmed interchanges are recorded
in the curated stop-ID join set: Zhongxiao Fuxing, Zhongxiao Dunhua,
Sun Yat-Sen Memorial Hall, Taipei City Hall, Yongchun, Sanhe Junior
High School and St. Ignatius High School.[^tdx-bus] The route runs a
single subroute under one operator, 三重客運, with an identical head
and last-departure time, “0715 - 0715”, the same unusual pattern seen
on the separate 218直 and 225區, weekdays only with holiday service
suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 232Express; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**232(Fast) (30 stops):** Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Zhengyi Post Office -> Huaisheng Junior High School -> Dinghao Market -> MRT Zhongxiao Dunhua Sta -> Apollo Building -> Tourism Administration, MOTC -> MRT Sun Yat-sen Memorial Hall Sta (Zhongxiao) -> United Daily News -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Li (Songshan) -> Shuangyong Elementary School -> Yongji and Songshan Intersection -> Songshan Rail Sta (Songshan)[^tdx-bus]

**232(Fast) (29 stops):** Songshan Rail Sta (Songshan) -> Hulin St Entrance -> Yongji Junior High School -> Songlong Rd Entrance -> Songshan High School (Songlong) -> United Daily News -> MRT Sun Yat-sen Memorial Hall Sta (Zhongxiao) -> Tourism Administration, MOTC -> Apollo Building -> MRT Zhongxiao Dunhua Sta -> Dinghao Market -> MRT Zhongxiao Fuxing Sta -> Zhengyi Post Office -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the identical head and last-departure time was found in this search — whether this reflects a single daily trip or a data-entry artefact in the source schedule is not settled by the data pulled for this page.
