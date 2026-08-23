---
title: BR6 / 棕6
summary: Brown-line feeder pilot route BR6 (棕6).
updated: 2026-08-17
line: BR
facts:
  - label: Service class
    value: MRT brown-line feeder
    source: ebus-brown
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
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕6 under 捷運棕線接駁公車.
  - id: ebus-br6
    title: BR6 route information
    titleOriginal: 棕6路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?gb=1&routeid=0114000600
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 捷運動物園站–捷運市政府站 corridor, timetable, dog-friendly trips, 貓空 event headway note and 欣欣客運木柵二站 contact.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕6 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 捷運動物園站, past 貓纜動物園站/靜心高中, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Five confirmed interchanges are recorded in the curated stop-ID join set, the widest interchange count in this group: Taipei City Hall (BL18), Taipei Zoo (BR01), Wanfang Community (BR03), Wanfang Hospital (BR04) and Wanlong (G06).[^tdx-bus] The route runs 4 subroutes under a single operator, 欣欣客運木柵二站: a standard working and a 狗狗公車 (dog-friendly) working carrying the same 54-stop 動物園–市政府 corridor, each with its own inbound and outbound trip.[^ebus-br6][^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BR6; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR6 (54 stops):** MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd -> Muzha Market -> Muzha -> Wenshan Police Sta 1 -> Zaixing High School -> Zhongxing Apartment -> Yongjian Elementary School -> Gouzikou -> Examination Yuan -> Fuxing Police Substation -> Shih Hsin University -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta 2 -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> Changan Elementary School (Xinglong) -> Jingming St Entrance -> Xianguang Apartment -> Chingshin Academy -> Xinglong Market -> Xingde Elementary School -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wen Shan Sports Center (Wanfang) -> Palm Spring Community -> Wanli St Entrance -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Police Substation -> Dept of Civil Servant Development -> Wanmei Community -> Wanfang Public Housing -> Wanning St -> WanNing Shanzhuang -> Mingmen Community -> Heping Rd -> Wanfang Community (Heping) -> Jungong New Village -> Bojia Elementary School -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**BR6 (54 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Bojia Elementary School -> Jungong New Village -> Wanfang Community (Heping) -> Heping Rd -> Mingmen Community -> WanNing Shanzhuang -> Wanning St -> Wanfang Public Housing -> Wanmei Community -> Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Elementary School -> Wanfang No6 Park -> Wanli St Entrance -> Palm Spring Community -> Wen Shan Sports Center (Wanfang) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Xingde Elementary School -> Xinglong Market -> Chingshin Academy -> Xianguang Apartment -> Jingming St Entrance -> Changan Elementary School (Xinglong) -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> Jingmei Junior High School -> Jingmei Elementary School (Jingxing) -> Shih Hsin University -> Fuxing Police Substation -> Examination Yuan -> Yongjian Elementary School -> Zhongxing Apartment -> Zaixing High School -> Wenshan Police Sta 1 -> Muzha -> Muzha Market -> Yongan St -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta[^tdx-bus]

**BR6 (54 stops):** MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd -> Muzha Market -> Muzha -> Wenshan Police Sta 1 -> Zaixing High School -> Zhongxing Apartment -> Yongjian Elementary School -> Gouzikou -> Examination Yuan -> Fuxing Police Substation -> Shih Hsin University -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta 2 -> Ministry of Finance Park -> Wanlong -> MRT Wanlong -> Wugong Elementary School (Roosevelt) -> Changan Elementary School (Xinglong) -> Jingming St Entrance -> Xianguang Apartment -> Chingshin Academy -> Xinglong Market -> Xingde Elementary School -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wen Shan Sports Center (Wanfang) -> Palm Spring Community -> Wanli St Entrance -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Police Substation -> Dept of Civil Servant Development -> Wanmei Community -> Wanfang Public Housing -> Wanning St -> WanNing Shanzhuang -> Mingmen Community -> Heping Rd -> Wanfang Community (Heping) -> Jungong New Village -> Bojia Elementary School -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**BR6 (54 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Bojia Elementary School -> Jungong New Village -> Wanfang Community (Heping) -> Heping Rd -> Mingmen Community -> WanNing Shanzhuang -> Wanning St -> Wanfang Public Housing -> Wanmei Community -> Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Elementary School -> Wanfang No6 Park -> Wanli St Entrance -> Palm Spring Community -> Wen Shan Sports Center (Wanfang) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Xingde Elementary School -> Xinglong Market -> Chingshin Academy -> Xianguang Apartment -> Jingming St Entrance -> Changan Elementary School (Xinglong) -> Wugong Elementary School (Roosevelt) -> MRT Wanlong -> Wanlong -> Ministry of Finance Park -> Jingmei Junior High School -> Jingmei Elementary School (Jingxing) -> Shih Hsin University -> Fuxing Police Substation -> Examination Yuan -> Yongjian Elementary School -> Zhongxing Apartment -> Zaixing High School -> Wenshan Police Sta 1 -> Muzha -> Muzha Market -> Yongan St -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC — the full current page does not establish an opening date, former alignment or renumbering.[^ebus-br6]
- Corridor decision: TBC — the current 捷運動物園站–捷運市政府站 corridor is published, but its original rationale was not.[^ebus-br6]
- Unusual branch or short working: Partial — the page records dog-friendly trips and a current 貓空 special-event headway adjustment, not a dated branch history.[^ebus-br6]
- Operator changes: TBC — the current page names 欣欣客運木柵二站, but no dated transfer record was found.[^ebus-br6]
