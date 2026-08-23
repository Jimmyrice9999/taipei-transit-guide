---
title: "265Mingde Rd. / 265經明德路"
summary: "200-series route: 265Mingde Rd. (265經明德路)."
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
  - id: ebus-route-265-ifjaza
    title: "265Mingde Rd. route schedule"
    titleOriginal: "265經明德路班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100026590
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 265經明德路 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “土城 - 行政院”, the current head/last-departure field “[平日] 0530 - 2200 [假日] 0530 - 2200”, fare “兩段票”.[^ebus-route-265-ifjaza]

The confirmed stop sequence runs from 土城站, past 學士路口/捷運海山站/
明德路, through 中央路/南雅站/亞東科技大學, along 壽德新村/重慶國中/新北市
政府(新府路), through 捷運板新站/自來水公司/埔墘(三民路)/光復橋, past 捷運
龍山寺站/捷運西門站, ending at 臺北車站(忠孝)/立法院.[^tdx-bus] Seven
confirmed interchanges are recorded in the curated stop-ID join set,
the same list confirmed for its own sibling 265經中央路: Fuzhong,
Banqiao, Longshan Temple, Ximen, Taipei Main Station, Shandao Temple
and Banxin.[^tdx-bus] The route runs a single subroute under one
operator, 大南汽車, detouring via 明德路 and 捷運海山站 at the Tucheng end,
distinct from 265經中央路's own direct routing via 中央路.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 265Mingde Rd.; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**265Mingde (48 stops):** Tucheng Sta -> Xueshi Rd Entrance -> MRT Haishan Sta -> Mingde Rd Sec 2 -> Mingde Rd -> Rixin Village -> Huorao Village -> Zhongyang Rd -> Zhongyang 1st Stop -> Nanya Stop -> Oriental University of Science & Technology -> Xinyi Rd -> Post Office -> Shoude New Village -> Chongqing Junior High School -> Chongqing & Zhongxiao Rd Intersection -> Zhongxiao Rd -> Zhongxing Hospital -> Fuxing Village -> Xiangyun Village -> Old Banqiao Sta Shopping Circle -> Jieshou Park -> Minquan Rd Entrance -> New Taipei City Hall(Xinfu Rd) -> NTPC Banqiao Bus Station -> New Taipei City Hall(Zhongshan Rd) -> Zhongshan Hansheng Rd Intersection -> MRT Banxin Sta -> Zhongshan Rd Entrance -> Zhenglong Square(Banxin Rd) -> Taiwan Water Company -> Changshou Village -> Puqian(Sanmin Rd) -> Puqian Police Station -> Guangfu Bridge -> Xiyuan Rd Sec 2 -> Huajiang High School (Xiyuan) -> Fashion Institute of Taipei -> Dali Garments -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Zhonghua Rd N Stop -> Taipei Main Sta (Zhongxiao) -> MRT Shandao Temple Sta -> Chenggong High School (Linsen) -> Legislative Yuan[^tdx-bus]

**265Mingde (43 stops):** Taipei Main Sta (Zhongxiao) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> Guilin and Kunming Intersection -> Guilin Rd -> Longshan Temple (Xiyuan) -> Dali Garments -> Fashion Institute of Taipei -> Huajiang High School (Xiyuan) -> Xiyuan Rd Sec 2 -> Guangfu Bridge -> Puqian Police Station -> Puqian(Sanmin Rd) -> Changshou Village -> Taiwan Water Company -> Zhenglong Square(Banxin Rd) -> Zhongshan Rd Entrance -> Zhongshan Hansheng Rd Intersection -> New Taipei City Hall(Zhongshan Rd) -> NTPC Banqiao Bus Station -> New Taipei City Hall(Xinfu Rd) -> Minquan Rd Entrance -> Banqiao Bus Terminal Extension -> Old Banqiao Sta Shopping Circle -> Xiangyun Village -> Fuxing Village -> Zhongxing Hospital -> Zhongxiao Rd -> Chongqing & Zhongxiao Rd Intersection -> Chongqing Junior High School(Guoqing Rd) -> Post Office -> Xinyi Rd -> Oriental University of Science & Technology -> Nanya Stop -> Zhongyang Rd -> Huorao Village -> Rixin Village -> Mingde Rd -> Mingde Rd Sec 2 -> MRT Haishan Sta -> Xueshi Rd Entrance -> Tucheng Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for splitting these two near-identical corridors into separately labelled route numbers rather than named subroutes of one 265 was found in this search.
