---
title: BR11 / 棕11
summary: Brown-line feeder pilot route BR11 (棕11).
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
    note: Supports normalized route and stop structure; route length and timetable fields are absent from the committed bus layer.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕11 under 捷運棕線接駁公車.
  - id: ebus-br11
    title: BR11 route and stop information
    titleOriginal: 棕11路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114001100
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 富德–捷運公館站 corridor, timetable, stop sequence and 欣欣客運富德站 contact.
  - id: pto-102-br11-stops
    title: November 2013 supplementary approved bus operating-plan adjustments
    titleOriginal: 102年11月份營運計畫調整(補充)
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/public/Attachment/412316222945.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording that 棕11(含副) cancelled the 萬壽橋頭(木柵) stop effective 31 December 2013.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕11 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 富德, past 象頭埔/文山一分局/臺大, ending at 捷運公館站.[^tdx-bus] Three confirmed interchanges are recorded in the curated stop-ID join set: Taipei Zoo (BR01), Wanfang Hospital (BR04) and Gongguan (G07).[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運富德站.[^tdx-bus] Plain 棕11 is the parent identity; 棕11副 (brown-11-16hwwho) branches from the same 富德 origin to a shorter 興旺公園 working.[^ebus-br11] The outbound working covers 46 stops; the return, starting from 師大分部 rather than the full outbound corridor, covers 40.[^tdx-bus] The shorter return stop count matches a route that begins its inbound trip partway along the outbound alignment rather than retracing it end to end.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR11; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR11 (46 stops):** Fude -> Xiangtoupu -> Wanfu Bridge -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Zhinan Shanzhuang -> The Institute of International Relations -> Maokong Gondola Taipei Zoo Station -> National Chengchi U Qingjing Community -> Greenfield Shanzhuang -> Affiliated High School of NCU -> Zhengda 2nd St -> National Chengchi U Heshu Community -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University -> Xinguang Rd Entrance -> Wenshan Dist Admin Center (Muxin) -> Muzha Elementary School -> Huaxia Village 6 -> Jiukang St Entrance -> Wenshan Police Sta 1 -> Mamingtan (Zaixing High School) -> Xinglong Shanzhuang -> Coast Guard Administration 1 -> Coast Guard Administration -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Xingde Elementary School -> Xinglong Market -> Chingshin Academy -> Xianguang Apartment -> Jingming St Entrance -> Changan Elementary School (Xinglong) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> Wenzhou St Entrance -> NTU Sports Center -> NTU -> MRT Gongguan Sta[^tdx-bus]

**BR11 (40 stops):** National Taiwan Normal University Branch -> Changan Elementary School (Xinglong) -> Jingming St Entrance -> Xianguang Apartment -> Chingshin Academy -> Xinglong Market -> Xingde Elementary School -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Coast Guard Administration 1 -> Xinglong Shanzhuang -> Mamingtan (Zaixing High School) -> Wenshan Police Sta 1 -> Jiukang St Entrance -> Huaxia Village 6 -> Muzha Elementary School -> Wanshou Bridge (Muzha) -> Wenshan Dist Admin Center (Muxin) -> National Chengchi University -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Zhengda Center -> Zhengda 2nd St -> Affiliated High School of NCU -> Greenfield Shanzhuang -> National Chengchi U Qingjing Community -> The Institute of International Relations -> Zhinan Shanzhuang -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Wanfu Bridge -> Xiangtoupu -> Fude[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the structural fields shown above; route length remains TBC where that layer has no field.[^tdx-bus]

- Route history: Partial — the PTO records cancellation of the 萬壽橋頭(木柵) stop for 棕11 and its sub-line effective 31 December 2013; the opening and earlier alignment remain TBC.[^pto-102-br11-stops]
- Corridor decision: TBC — the current 富德–捷運公館站 corridor is published, but its original rationale was not.[^ebus-br11]
- Unusual branch or short working: TBC.
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br11]
