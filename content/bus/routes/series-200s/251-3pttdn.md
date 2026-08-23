---
title: "251 / 251"
summary: "200-series route: 251 (251)."
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
  - id: ebus-route-251-3pttdn
    title: "251 route schedule"
    titleOriginal: "251班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100025100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 251 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “深坑 - 臺北車站”, the current head/last-departure field “[平日] 0520 - 2300 [假日] 0520 - 2300”, fare “兩段票”.[^ebus-route-251-3pttdn]

The confirmed stop sequence runs from 福安居 in Shenkeng, past 阿柔洋/
台新工廠/東南科技大學, through 富德/象頭埔/萬福橋, along 捷運木柵站/木柵
高工/木柵市場, through 忠順廟/興隆路口(忠順)/世新大學, past 財政園區/萬隆/
捷運萬隆站, ending at 一女中(公園)/捷運台大醫院站/臺北車站(開封).[^tdx-bus] Eight confirmed interchanges are recorded in the curated
stop-ID join set: Muzha, Jingmei, Wanlong, Gongguan, Taipower
Building, Guting, Chiang Kai-Shek Memorial Hall and NTU Hospital.[^tdx-bus] The route runs a single subroute under one operator, 欣欣
客運, continuing past the terminus published for its own shorter
sibling 251區 to central Taipei.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 251; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**251 (55 stops):** Fuan House -> Arouyang -> Wenshan Rd Sec3 -> Taixin Factory -> Tungnan U -> Wanshunliao -> Caodiwei -> Fude Village -> Wenhe Bridge -> Fude -> Xiangtoupu -> Wanfu Bridge -> Shibikeng -> Fengdongshi -> Bojia Elementary School -> MRT Muzha -> Muzha Vocational High School -> Wanfang Rd Entrance -> Wanshou Bridge (Muzha) -> Wenshan Dist Admin Center -> Muzha Market -> Yongan St -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> Guotai New Village (Xinglong) -> Xinglong Rd Entrance (Zhongshun) -> Zhongshun St -> Shijian Elementary School -> Shijian Junior High School -> Zhonggang Pumping Sta -> Examination Yuan -> Fuxing Police Substation -> Shih Hsin University -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta 2 -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> MRT Taipower Building Sta -> Roosevelt and Pucheng Intersection -> Roosevelt and Kinmen St Intersection -> MRT Guting Sta (Roosevelt) -> Roosevelt and Chaozhou Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> Taipei First Girls High School (Gongyuan) -> MRT NTU Hospital Station -> Taiwan Museum (Guanqian) -> Taipei Main Sta (Kaifeng)[^tdx-bus]

**251 (55 stops):** Chongqing S Road Sec 1 -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Taipei First Girls High School (Gongyuan) -> Affiliated Experimental Elementary School of University of Taipei -> MRT Chiang Kai-Shek Memorial Hall -> Roosevelt and Chaozhou Intersection -> MRT Guting Sta (Roosevelt) -> Roosevelt and Kinmen St Intersection -> Roosevelt and Pucheng Intersection -> MRT Taipower Building Sta -> Taipower Building -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> Jingmei Junior High School -> Jingmei Elementary School (Jingxing) -> Shih Hsin University -> Fuxing Police Substation -> Examination Yuan -> Zhonggang Pumping Sta -> Shijian Junior High School -> Shijian Elementary School -> Zhongshun St -> Xinglong Rd Entrance (Zhongshun) -> Guotai New Village (Xinglong) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Yongan St -> Muzha Market -> Wenshan Dist Admin Center -> Wanshou Bridge (Muzha) -> Wanfang Rd Entrance -> Muzha Vocational High School -> MRT Muzha -> Bojia Elementary School -> Fengdongshi -> Shibikeng -> Wanfu Bridge -> Xiangtoupu -> Fude -> Wenhe Bridge -> Fude Village -> Caodiwei -> Wanshunliao -> Tungnan U -> Taixin Factory -> Wenshan Rd Sec3 -> Arouyang -> Fuan House 1[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 深坑 with 臺北車站 specifically as the route's own termini was found in this search, nor for the route continuing past 251區's own terminus rather than stopping there.
