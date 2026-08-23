---
title: R3 / 紅3
summary: Red-line feeder route R3 (紅3).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅3 under 捷運紅線接駁公車.
  - id: ebus-r3
    title: R3 route schedule
    titleOriginal: 紅3班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子–台北花市 corridor, weekday suspension, the single 10:30 Saturday service, two-section fare, 陽明高中–劍潭 buffer and 光華巴士洲美站 contact.
---

## Classification and corridor

The official catalogue lists 紅3 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 社子 - 台北花市, weekdays suspended, a single 10:30 Saturday service, two-section fare, the 陽明高中–劍潭 buffer and 光華巴士洲美站 as the service contact. The page also says Sundays, national holidays, make-up days and typhoon closure days are suspended.[^ebus-r3]

The confirmed stop sequence runs from 社子, through 士林 past a stop
literally named 捷運士林站(中山), along 中山北路 past 圓山大飯店/忠烈祠, into 大直
past 捷運大直站/捷運劍南路站, then through Neihu's 瑞光/公館山, ending at 台北
花市 near 新湖三路口.[^tdx-bus] Five confirmed interchanges are recorded in
the curated stop-ID join set: Dazhi (BR14), Jiannan Rd. (BR15), Gangqian
(BR17), Jiantan (R15) and Shilin (R16).[^tdx-bus] The route's single
Saturday-only 10:30 departure — with weekdays, Sundays, national holidays
and typhoon days all suspended — is the narrowest schedule in this
batch.[^ebus-r3]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R3; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R3 (47 stops):** Shezi Elementary School2 -> Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Substation -> Shezi Market2 -> Shezi Market -> Hulu Temple (Hulu Village) -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> The Grand Hotel -> Radio Taiwan International -> Martyr Shrine -> CHING-KUO Chihai Cultural Park -> Air Force Command Headquarters -> Dazhi High School -> Dazhi Elementary School -> MRT Dazhi Station -> Zhifu Temple -> Zihqiang Tunnel (Dazhi Church) -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Jingye 3rd Rd 1 -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Zhipan New Village -> Neihu and Jihu Intersection -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Xingai Rd Lane 77 Entrance -> Xingai Rd -> Xingzhong & Renai Intersection[^tdx-bus]

**R3 (39 stops):** Xingzhong & Renai Roads -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Wende Police Substation -> Wende Park No2 -> Huguang Public Housing -> Xihu Library (Huguang Church) -> Gangqian Police Station -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Jingye 3rd Rd 2 -> Jingye 3rd Rd 1 -> MRT Jiannan Rd Station -> Zihqiang Tunnel -> Zhifu Temple -> MRT Dazhi Station -> Dazhi High School -> Air Force Command Headquarters -> Martyr Shrine -> Radio Taiwan International -> The Grand Hotel -> Jiantan -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shihlin Farmers Association -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Sheyuan Village -> Shezi Police Substation -> Yonoglun Village (south) -> Shezi Elementary School -> Yonglun Village (Yanping)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅3 or a
stated reason for its own single-weekly-departure pattern was found in
this search. Nor was any explanation found for why this exists as a
separate route from 紅3區, which runs a similar opening corridor on a much
fuller schedule.
