---
title: "Taipei Sightseeing Bus Blue route / 臺北觀光巴士藍線"
summary: "Special shuttle route: Taipei Sightseeing Bus Blue route (臺北觀光巴士藍線)."
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
  - id: ebus-route-route-1ne4h5f
    title: "Taipei Sightseeing Bus Blue route route schedule"
    titleOriginal: "臺北觀光巴士藍線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162003500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 臺北觀光巴士藍線 under 觀光巴士 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “臺北車站 - 故宮博物院”, the current head/last-departure field “[平日] 0940 - 1630 [假日] 0940 - 1630”, fare “詳票價表” (see the operator's own separate fare table, not a plain per-stage figure).[^ebus-route-route-1ne4h5f]

The confirmed stop sequence runs from 臺北車站(忠孝), past 捷運北門站/延
平一站(南京)/圓環(鈕釦街)/圓環(南京)/捷運中山站(志仁高中)/晶華酒店/大同
公司(晴光市場)/臺北市立美術館/圓山飯店/銘傳大學/士林官邸(中山), ending
at 故宮博物院(正館), with one working omitting the museum's own main
building stop.[^tdx-bus] Five confirmed interchanges are recorded in
the curated stop-ID join set: Taipei Main Station (BL12/R10), Beimen
(G13), Zhongshan (G14/R11), Jiantan (R15) and Shilin (R16).[^tdx-bus]
The route runs two named subroutes under one operator, 三重客運, one of
two Taipei Sightseeing Bus lines classified together as 觀光巴士 in this
batch.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Taipei Sightseeing Bus Blue route; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Taipei Double Decker Bus (13 stops):** Taipei Main Sta (Zhongxiao) -> MRT Beimen Station -> Yanping Stop 1 (Nanjing) -> Taipei Circle -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Grand Formosa Regent Taipei -> Tatung Company (Qingguang Market) -> Taipei Fine Arts Museum -> Grand Hotel -> Mingchuan U -> Chiang Kai-Shek Shilin Residence (Zhongshan) -> National Palace Museum (I)[^tdx-bus]

**Taipei Double Decker Bus (6 stops):** MRT Shilin Sta (Zhongshan ) -> MRT Jiantan Sta (Zhongshan) -> Grand Hotel -> Taipei Fine Arts Museum -> Tatung Company (Qingguang Market) -> Taipei Main Sta (Zhongxiao)[^tdx-bus]

**Taipei Double Decker Bus (13 stops):** Taipei Main Sta (Zhongxiao) -> MRT Beimen Station -> Yanping Stop 1 (Nanjing) -> Taipei Circle -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Grand Formosa Regent Taipei -> Tatung Company (Qingguang Market) -> Taipei Fine Arts Museum -> Grand Hotel -> Mingchuan U -> Chiang Kai-Shek Shilin Residence (Zhongshan) -> National Palace Museum[^tdx-bus]

**Taipei Double Decker Bus (6 stops):** MRT Shilin Sta (Zhongshan ) -> MRT Jiantan Sta (Zhongshan) -> Grand Hotel -> Taipei Fine Arts Museum -> Tatung Company (Qingguang Market) -> Taipei Main Sta (Zhongxiao)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] The route's own actual fare figures stay TBC, since the catalogue points to a separate table rather than publishing a plain per-stage value, and no stated reason for one working omitting the museum's own main building was found in this search.
