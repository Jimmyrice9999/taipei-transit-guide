---
title: BR21 / 棕21
summary: Brown-line feeder pilot route BR21 (棕21).
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
    note: Lists 棕21 under 捷運棕線接駁公車.
  - id: ebus-br21
    title: BR21 route and stop information
    titleOriginal: 棕21路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114002100
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 政大里–捷運市政府站 corridor, weekday-only service, the 不經政大御花園/經政大御花園 variants, the 兆如安養中心 short working and 欣欣客運富德站 contact.
  - id: pto-101-br21
    title: Taipei Public Transportation Office 2012 chronology
    titleOriginal: 臺北市公共運輸處大事紀要(101 年)
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/Download.ashx?n=MzQxNTE1MzUxMzcxLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1OTAvMzUwMjkxMi8zNDE1MTUzNTEzNzEucGRm
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official chronology recording the new 棕21 service between 政大里 and 捷運市政府站 on 16 July 2012.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕21 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence for the 經政大御花園 working runs from 兆如安養中心, past 普羅旺世/指南山莊, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei City Hall (BL18) and Taipei Zoo (BR01).[^tdx-bus] The route runs 4 subroutes under a single operator, 欣欣客運富德站: 經政大御花園 (via Zhengda Garden) and 不經政大御花園 (not via Zhengda Garden) each with their own inbound and outbound working, plus the 兆如安養中心 short working recorded on the source page.[^ebus-br21][^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BR21; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR21 (26 stops):** Zhaoru Nursing Center -> Provence -> Zhengda 3rd St -> Zhengda Center -> Zhengda 2nd St -> Affiliated High School of NCU -> Qixia Shanzhuang -> Zhengda Yuhuayuan -> Zhengda Yuhuayuan -> Qixia Shanzhuang -> Greenfield Shanzhuang -> National Chengchi U Qingjing Community -> The Institute of International Relations -> Zhinan Shanzhuang -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong  Gondoa Taipei Zoo station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**BR21 (24 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong  Gondoa Taipei Zoo station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Zhinan Shanzhuang -> The Institute of International Relations -> Maokong Gondola Taipei Zoo Station -> National Chengchi U Qingjing Community -> Greenfield Shanzhuang -> Qixia Shanzhuang -> Zhengda Yuhuayuan -> Zhengda Yuhuayuan -> Qixia Shanzhuang -> Affiliated High School of NCU -> Zhengda 2nd St -> Zhengda 3rd St -> Provence -> Zhaoru Nursing Center[^tdx-bus]

**BR21 (22 stops):** National Chengchi U 1 -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Zhengda Center -> Zhengda 2nd St -> Affiliated High School of NCU -> Greenfield Shanzhuang -> National Chengchi U Qingjing Community -> The Institute of International Relations -> Zhinan Shanzhuang -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong  Gondoa Taipei Zoo station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**BR21 (20 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong  Gondoa Taipei Zoo station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Zhinan Shanzhuang -> The Institute of International Relations -> Maokong Gondola Taipei Zoo Station -> National Chengchi U Qingjing Community -> Greenfield Shanzhuang -> Affiliated High School of NCU -> Zhengda 2nd St -> Xiaokengkou -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO chronology records the new service as 7月 16日 新闢棕 21 路(政大里─捷運市政府站) in 2012; an earlier opening record and the decision behind it remain TBC.[^pto-101-br21]
- Corridor decision: TBC — the chronology establishes the 2012 corridor, but not why it was selected.[^pto-101-br21]
- Unusual branch or short working: Partial — the current page records 不經政大御花園 and 經政大御花園 variants, including two departures beginning/ending at 兆如安養中心; no creation date or rationale for these workings was found.[^ebus-br21]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br21]
