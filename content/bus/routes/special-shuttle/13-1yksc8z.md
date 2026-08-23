---
title: "CB13 / 通勤13"
summary: "Special shuttle route: CB13 (通勤13)."
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
  - id: ebus-route-13-1yksc8z
    title: "CB13 route schedule"
    titleOriginal: "通勤13班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 通勤13 under 通勤公車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “新店(民族路) - 臺北市政府”, the current head/last-departure field “[平日] 0650 - 1700 [假日] 停駛”, fare “兩段票”.[^ebus-route-13-1yksc8z] It currently lists weekday service and suspended holiday service.[^ebus-route-13-1yksc8z]

The confirmed stop sequence runs from 大豐國小, past 耕莘醫院(民族路)/耕
莘醫院(三民路)/公園新村/三民路/中正國小(三民路)/調查局/瑠公公園, through
捷運新店區公所站(中華)/七張(北新路)/捷運七張站/新店郵局/大坪林/捷運大坪
林站/滬江中學/捷運景美站/財政園區/萬隆/捷運萬隆站/武功國小(羅斯福)/師大
分部/公館, along 臺灣科技大學/臺大癌醫(基隆路)/基隆長興街口/和平高中,
through 捷運六張犁站(基隆路), ending at 三興國小/吳興街口/世貿中心(基隆
路)/市政府(市府).[^tdx-bus] Six confirmed interchanges are recorded in
the curated stop-ID join set: Liuzhangli (BR07), Xindian District
Office (G02), Qizhang (G03), Dapinglin (G04/Y07), Jingmei (G05) and
Wanlong (G06), all along the Songshan-Xindian Line stretch the route
parallels for most of its own run.[^tdx-bus] The route runs two
half-trip subroutes under one operator, 欣欣客運, on a two-stage fare,
weekdays only with holiday service suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for CB13; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**CB13 (34 stops):** Dafeng Elementary School -> Cardinal Tien Hospital(Minzu Rd) -> Cardinal Tien Hospital(Sanmin Rd) -> Gongyuan New Village -> Sanmin Rd -> Zhongzheng Elementary School(Sanmin Rd) -> Investigation Bureau -> Zhonghua Market -> MRT Xindian District Office Sta(Zhonghua) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Dapinglin -> MRT Ta Pinglin Station -> Hujiang High School -> MRT Jingmei -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> National Taiwan Normal University Branch -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Heping High School -> MRT Liuzhangli (Keelung Rd) -> George Vocational High School of Taipei -> Sanxing Elementary School (Linjiang St Night Market) -> Wuxing St Entrance -> World Trade Center (Keelung Rd) -> Taipei City Hall -> City Fire Department (Songren) -> Songshan High School of Agriculture and Industry[^tdx-bus]

**CB13 (34 stops):** Songshan High School of Agriculture and Industry -> Petroleum Building -> Taipei City Hall (Songzhi) -> Taipei City Hall (SongShou) -> World Trade Center (Keelung Rd) -> Wuxing St Entrance -> Sanxing Elementary School (Linjiang St Night Market) -> George Vocational High School of Taipei -> MRT Liuzhangli (Keelung Rd) -> Heping High School -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> National Taiwan Normal University Branch -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> MRT Jingmei -> Hujiang High School -> MRT Ta Pinglin Station -> Dapinglin -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Xindian District Office Sta(Zhonghua) -> Zhonghua Market -> Zhongzheng Elementary School(Sanmin Rd) -> Sanmin Rd -> Gongyuan New Village -> Cardinal Tien Hospital(Sanmin Rd) -> Cardinal Tien Hospital(Minzu Rd) -> Dafeng Elementary School[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension was found in this search, nor a stated reason for pairing 新店(民族路) with 臺北市政府 specifically as the route's own termini.
