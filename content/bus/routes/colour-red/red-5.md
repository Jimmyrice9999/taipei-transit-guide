---
title: R5 / 紅5
summary: Red-line feeder route R5 (紅5).
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
    note: Lists 紅5 under 捷運紅線接駁公車.
  - id: ebus-r5
    title: R5 route and stop information
    titleOriginal: 紅5路線資訊
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111000500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 陽明山–捷運劍潭站 corridor, weekday/holiday service spans, headway notes, one-section fare, 大都會客運陽明山站 contact and current 文化大學 workings.
---

## Classification and corridor

The official catalogue lists 紅5 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 陽明山 - 捷運劍潭站, weekday and holiday service 0530–2330, one-section fare and 大都會客運陽明山站 as the service contact.[^ebus-r5] It records weekday peak/off-peak headways of 4–8/12–15 minutes and holiday peak/off-peak headways of 12–15/12–15 minutes.[^ebus-r5] The page also records culture-university detours for specified weekday trips, with those detours excluded on holidays and during winter and summer vacations.[^ebus-r5]

At 33-36 stops each way, the confirmed stop sequence climbs from 陽明山
總站, past 中山樓/教師中心/文化大學/山仔后派出所, through 明德新村/陽明山國小/陽明
教養院, along 永福(林語堂故居)/嶺頭/華興中學/岩山里, then descends past 泰北中學/
士林官邸, ending near 捷運劍潭站.[^tdx-bus] Two confirmed interchanges are
recorded in the curated stop-ID join set: Jiantan (R15) and Shilin
(R16).[^tdx-bus] TDX records five named subroutes distinguishing the
文化大學-detour and 陽明山/劍潭-direction workings.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for R5; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R5 (35 stops):** Yangmingshan Bus Terminal -> Yangmingshan -> Zhongshan Hall -> Teachers' Center -> CSF Yangmingshan Hostel -> Fushou Bridge -> Gezhi & Daheng Intersection -> Huangxidi -> Chinese Culture U 1 -> Yangming Catholic Church -> Chinese Culture U -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**R5 (36 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin Farmers&apos; Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Taipei GeZhi Junior High School -> Shanzihou Police Substation -> Chinese Culture U -> Chinese Culture U 1 -> Yangming Catholic Church -> Huangxidi -> Gezhi & Daheng Intersection -> Fushou Bridge -> CSF Yangmingshan Hostel -> Zion Church -> Teachers' Center -> ZhongshanHall -> Yangmingshan -> Yangmingshan Bus Terminal[^tdx-bus]

**R5 (35 stops):** Yangmingshan Bus Terminal -> Yangmingshan -> Zhongshan Hall -> Teachers' Center -> CSF Yangmingshan Hostel -> Fushou Bridge -> Gezhi & Daheng Intersection -> Huangxidi -> Chinese Culture U 1 -> Yangming Catholic Church -> Chinese Culture U -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**R5 (36 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin Farmers&apos; Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Taipei GeZhi Junior High School -> Shanzihou Police Substation -> Chinese Culture U -> Chinese Culture U 1 -> Yangming Catholic Church -> Huangxidi -> Gezhi & Daheng Intersection -> Fushou Bridge -> CSF Yangmingshan Hostel -> Zion Church -> Teachers' Center -> ZhongshanHall -> Yangmingshan -> Yangmingshan Bus Terminal[^tdx-bus]

**R5 (34 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin Farmers&apos; Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Taipei GeZhi Junior High School -> Shanzihou Police Substation -> Chinese Culture U -> Huangxidi -> Gezhi & Daheng Intersection -> Fushou Bridge -> CSF Yangmingshan Hostel -> Zion Church -> Teachers' Center -> ZhongshanHall -> Yangmingshan -> Yangmingshan Bus Terminal[^tdx-bus]

**R5 (33 stops):** Yangmingshan Bus Terminal -> Yangmingshan -> Zhongshan Hall -> Teachers' Center -> CSF Yangmingshan Hostel -> Fushou Bridge -> Gezhi & Daheng Intersection -> Huangxidi -> Chinese Culture U -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 5 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅5 was found in
this search, nor a stated reason for confirming only two interchanges
despite the corridor's long climb through 陽明山's own network of hillside
communities. No predecessor-route or renumbering history for 紅5 was
located either, nor a stated reason for the 陽明山總站 terminus rather than
one of its own confirmed MRT interchanges.
