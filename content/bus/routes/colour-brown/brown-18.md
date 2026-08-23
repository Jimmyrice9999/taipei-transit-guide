---
title: BR18 / 棕18
summary: Brown-line feeder pilot route BR18 (棕18).
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
    note: Lists 棕18 under 捷運棕線接駁公車.
  - id: ebus-br18
    title: BR18 route schedule and stop information
    titleOriginal: 棕18班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001800
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 政治大學–松山車站 corridor, service span, one-section fare, 欣欣客運富德站 contact and the standard/經松山車站 service variant.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕18 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 政大, past 政大(聯合醫院)/大誠高中, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei City Hall (BL18) and Taipei Zoo (BR01).[^tdx-bus] The route runs 4 subroutes under a single operator, 欣欣客運富德站: standard trips and a 經松山車站 (via Songshan Station) variant, each with its own inbound and outbound working, extending the standard 政大–市政府 corridor east to 松山車站.[^ebus-br18][^tdx-bus] The standard outbound working covers 22 stops; the 經松山車站 outbound working covers 29, the difference being the eastward extension past City Hall.[^tdx-bus] Both variants share the same 政大 origin and the same two confirmed interchanges.

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BR18; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Br18 (22 stops):** National Chengchi University -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Zhengda Center -> Zhengda 2nd St -> Affiliated High School of NCU -> Greenfield Shanzhuang -> National Chengchi U Qingjing Community -> The Institute of International Relations -> Zhinan Shanzhuang -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Br18 (20 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Zhinan Shanzhuang -> The Institute of International Relations -> Maokong Gondola Taipei Zoo South Station -> National Chengchi U Qingjing Community -> Greenfield Shanzhuang -> Affiliated High School of NCU -> Zhengda 2nd St -> National Chengchi U Heshu Community -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University[^tdx-bus]

**Br18 (29 stops):** National Chengchi University -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Zhengda Center -> Zhengda 2nd St -> Affiliated High School of NCU -> Greenfield Shanzhuang -> National Chengchi U Qingjing Community -> The Institute of International Relations -> Zhinan Shanzhuang -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Li (Songshan) -> Shuangyong Elementary School -> Yongji and Songshan Intersection -> Songshan Rail Sta (Songshan) -> Songshan Rail Sta[^tdx-bus]

**Br18 (26 stops):** Songshan Rail Sta (Songlong) -> Songshan Rail Sta (Songshan) -> Yongji and Songshan Intersection -> Yongchun Li (Songshan) -> MRT Yongchun Sta (Zhongxiao) -> Songshan High School of Agriculture and Industry -> City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Zhinan Shanzhuang -> The Institute of International Relations -> Maokong Gondola Taipei Zoo South Station -> National Chengchi U Qingjing Community -> Greenfield Shanzhuang -> Affiliated High School of NCU -> Zhengda 2nd St -> National Chengchi U Heshu Community -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC.
- Corridor decision: TBC — the current 政治大學–松山車站 corridor is published, but its original rationale was not.[^ebus-br18]
- Unusual branch or short working: Partial — the page distinguishes standard trips from 棕18經松山車站 trips, but gives no creation date or rationale for the variant.[^ebus-br18]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br18]
