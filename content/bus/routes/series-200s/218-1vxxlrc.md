---
title: "218 / 218"
summary: "200-series route: 218 (218)."
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
  - id: ebus-route-218-1vxxlrc
    title: "218 route schedule"
    titleOriginal: "218班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100021800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 218 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “新北投 - 萬華”, the current head/last-departure field “[平日] 0500 - 2300 [假日] 0500 - 2300”, fare “兩段票”.[^ebus-route-218-1vxxlrc]

The confirmed stop sequence runs from 貴子坑水土保持園區, past 新北投/
北投公園/慈后宮/捷運奇岩站, through 士林's own 文林國小/中正高中/捷運芝山站/
劍潭, along 國賓飯店/行政院/臺北車站(忠孝), ending at 老松國小 in Wanhua —
a different intermediate routing through 士林 than its own express
sibling 218直, which instead runs directly via 承德路.[^tdx-bus] Eight
confirmed interchanges are recorded in the curated stop-ID join set:
Ximen, Taipei Main Station, Beimen, Jiantan, Zhishan, Qiyan, Beitou
and Xinbeitou.[^tdx-bus] The route runs a single subroute under one
operator, 大南汽車, on the full daily span shared by neither of its own
narrower siblings, 218直 and 218區.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 218; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**218 (40 stops):** Guizikeng Soil and Water Conservation Park -> Xiushan Li -> Cihang Temple -> Guotai New Village -> Zhonghe Village -> Fuxing High School -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Zhongyang S & Daxing St Intersection -> Cihou Temple -> MRT Qiyan -> Daye Rd (Nungchan monastery) -> Chengde and Gongguan Intresection -> Linong Elementary School -> Shijian St Entrance -> Chengde Rd Sec 7 -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Xiaobei St -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> Taipei Fine Arts Museum -> Tatung U -> Tatung Company (Qingguang Market) -> Taini Building (Mackay Memorial Hospital) -> Ambassador Hotel -> Zhongshan Market -> Executive Yuan -> Taipei Main Sta (Zhongxiao) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> Laosong Elementary School[^tdx-bus]

**218 (45 stops):** Zushi Temple (GuiYang) -> Guiyang St -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Taipei Main Sta (Zhengzhou) -> Zhongshan Market -> Ambassador Hotel -> Taini Building (Mackay Memorial Hospital) -> Tatung Company (Qingguang Market) -> Tatung U -> Taipei Fine Arts Museum -> Jiantan -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Chengde Rd Sec 7 -> Shijian St Entrance -> Lixian Chengde Rd -> Linong Elementary School -> Chengde and Gongguan Intresection -> Daye Rd (Nungchan monastery) -> Fengjia Arts Museum -> Daye Rd (Daxing St Entrance) -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Zhonghe St -> Fuxing High School -> Zhonghe Village -> Guotai New Village -> Cihang Temple -> Xiushan Li -> Guizikeng Soil and Water Conservation Park -> Beitou Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the two 218 workings taking different routes through 士林 was found in this search.
