---
title: BL20 Shuttle / 藍20
summary: Blue-line feeder route BL20 Shuttle (藍20).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍20 under 捷運藍線接駁公車.
  - id: ebus-bl20
    title: BL20 Shuttle route schedule
    titleOriginal: 藍20班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002020
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港車站–捷運劍南路站 corridor, service span, fare, the 三軍總醫院內湖 bypass note and operator contact.
---

## Classification and corridor

The official catalogue lists 藍20 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 南港車站 - 捷運劍南路站, weekday service 0600–2200, holiday service 0630–2200, one-section fare and 光華巴士東湖站 as the service contact. It records that some departures bypass 三軍總醫院內湖.[^ebus-bl20]

The confirmed stop sequence runs from 南港車站, past 捷運昆陽站 and 南港高中,
through Neihu's 西湖/港墘/環山 area, ending near 大直's 美堤花園 at 捷運劍南路
站.[^tdx-bus] Three confirmed interchanges are recorded in the curated
stop-ID join set: Kunyang (BL21), Nangang (BL22) and Wende (BR18).[^tdx-bus]
TDX records two subroutes, 藍20經三總 and 藍20不經三總, matching the schedule
page's bypass note for 三軍總醫院內湖.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BL20 Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B20 Shuttle (32 stops):** Nangang Vocational High School 1 -> Nangang Rail Sta -> Nangang Depot -> MRT Kunyang -> MRT Kunyang -> Nangang High School -> Nangang Police Dist (Xiangyang) -> Shitan Park (Chenggong) -> Chenggong Rd Sec 2(Interchange) -> Shangwanzi -> Huxing -> National Defense Medical Center -> Tri-Service General Hospital -> Jiangjun Ling -> St Francis High School -> Neihu High School -> MRT Wende Sta (Bihu Park) -> Huguang Public Housing -> Xihu Library (Huguang Church) -> Kangqian -> Lishan High School (Gangqian) -> Lishan High School (Huanshan) -> Lishan New Village -> Huanshan Rd -> Takming U of Science and Technology (Huanshan Rd) -> Xihu Junior High School -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> Jingye 4th Rd -> Dazhi Meiti Garden 2 -> Dazhi Meiti Garden 3[^tdx-bus]

**B20 Shuttle (34 stops):** Jingye 3rd Rd 1 -> Dazhi Meiti Garden 3 -> Jingye 4th Rd -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> Xihu Junior High School -> TakMing Collage (HuanShan) -> Huanshan Rd -> Lishan New Village -> Lishan High School (Huanshan) -> Lishan High School (Gangqian) -> Kangqian -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> St Francis High School -> Jiangjun Ling -> Tri-Service General Hospital -> National Defense Medical Center -> Huxing -> Shangwanzi -> Chenggong Rd Sec 2(Interchange) -> Shitan Park (Chenggong) -> Nangang Police Dist (Xiangyang) -> Nangang High School -> MRT Kunyang -> MRT Kunyang -> Ministry of Health and Welfare -> Nangang Depot -> Nangang Rail Sta -> Nangang Vocational High School 1 -> Nangang Vocational High School (Chongyang)[^tdx-bus]

**B20 Shuttle (31 stops):** Nangang Vocational High School 1 -> Nangang Rail Sta -> Nangang Depot -> MRT Kunyang -> MRT Kunyang -> Nangang High School -> Nangang Police Dist (Xiangyang) -> Shitan Park (Chenggong) -> Chenggong Rd Sec 2(Interchange) -> Shangwanzi -> Huxing -> National Defense Medical Center -> Jiangjun Ling -> St Francis High School -> Neihu High School -> MRT Wende Sta (Bihu Park) -> Huguang Public Housing -> Xihu Library (Huguang Church) -> Kangqian -> Lishan High School (Gangqian) -> Lishan High School (Huanshan) -> Lishan New Village -> Huanshan Rd -> Takming U of Science and Technology (Huanshan Rd) -> Xihu Junior High School -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> Jingye 4th Rd -> Dazhi Meiti Garden 2 -> Dazhi Meiti Garden 3[^tdx-bus]

**B20 Shuttle (33 stops):** Jingye 3rd Rd 1 -> Dazhi Meiti Garden 3 -> Jingye 4th Rd -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> Xihu Junior High School -> TakMing Collage (HuanShan) -> Huanshan Rd -> Lishan New Village -> Lishan High School (Huanshan) -> Lishan High School (Gangqian) -> Kangqian -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> St Francis High School -> Jiangjun Ling -> National Defense Medical Center -> Huxing -> Shangwanzi -> Chenggong Rd Sec 2(Interchange) -> Shitan Park (Chenggong) -> Nangang Police Dist (Xiangyang) -> Nangang High School -> MRT Kunyang -> MRT Kunyang -> Ministry of Health and Welfare -> Nangang Depot -> Nangang Rail Sta -> Nangang Vocational High School 1 -> Nangang Vocational High School (Chongyang)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the bypass's creation date and rationale remain TBC.[^tdx-bus] Which of the two subroutes runs more frequently, and whether the bypass
choice is fixed by time of day or left to the driver, was not found in
this search. The full route length and a headway-by-day-type figure
likewise stay TBC pending a source beyond the schedule page's own
departure listing, and no dated history for the route or its predecessor, if any, was found
in this search, nor a stated reason for 南港車站 rather than one of its own
confirmed MRT interchanges serving as the route's Nangang terminus.
