---
title: BL26 / 藍26
summary: Blue-line feeder route BL26 (藍26).
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
    note: Lists 藍26 under 捷運藍線接駁公車.
  - id: ebus-bl26
    title: BL26 route schedule
    titleOriginal: 藍26班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 舊宗路–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍26 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 舊宗路 - 捷運市政府站, weekday and holiday service 0600–2320, one-section fare and 三重客運南港站 as the service contact.[^ebus-bl26]

The confirmed stop sequence runs from 精技大樓 near 新湖舊宗路口 in Neihu's
office-park corridor, past 大直's 明水路/自強隧道, through 劍南路/西湖/港墘, then
along 民權大橋 into 三民/南京三民, ending at 捷運市政府站.[^tdx-bus] Five
confirmed interchanges are recorded in the curated stop-ID join set: Taipei
City Hall (BL18), Jiannan Rd. (BR15), Xihu (BR16), Gangqian (BR17) and
Nanjing Sanmin (G18).[^tdx-bus] TDX records four named subroutes — 藍26,
藍26往捷運市政府, 藍26往舊宗路 and 藍26繞駛台北花市 — among the richer variant
structures in this batch.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for BL26; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B26 (38 stops):** Unitech Building -> SoutheastBusParkingLot -> Xinhu and Jiuzong Intersection -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Neihu Recreational Sports Park -> Yangguang Pumping Sta -> Jintai Park -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Dazhi Meiti Garden 3 -> Mingshui Rd Entrance -> Mingshui Rd 1 -> Dazhi Gas Sta -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Gangqian Police Station -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Sanmin Elementary School -> Guanghe New Village -> Sanmin Rd -> Sanmin and Jiankang Intersection (Xisong High School) -> Xisong Elementary School -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Dongxing Rd 1 -> Dongxing Rd -> Songshan High School (Keelung Rd) -> MRT Taipei City Hall Sta[^tdx-bus]

**B26 (35 stops):** Songshan High School (Keelung Rd) -> Civic Blvd and Keelung Intersection -> Dongxing Rd -> Dongxing Rd 1 -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Xisong Elementary School -> Sanmin and Jiankang Intersection (Xisong High School) -> Sanmin Rd -> Guanghe New Village -> Sanmin Elementary School -> Minquan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Neihu Sports Center -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Mingshui Rd 1 -> Mingshui Rd Entrance -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Jintai Park -> Neihu Recreational Sports Park -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Xinhu and Jiuzong Intersection -> Unitech Building[^tdx-bus]

**BL26 (37 stops):** Unitech Building -> SoutheastBusParkingLot -> Xinhu and Jiuzong Intersection -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Neihu Recreational Sports Park -> Yangguang Pumping Sta -> Jintai Park -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Dazhi Meiti Garden 3 -> Mingshui Rd Entrance -> Mingshui Rd 1 -> Dazhi Gas Sta -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Gangqian Police Station -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Sanmin Elementary School -> Guanghe New Village -> Sanmin Rd -> Sanmin and Jiankang Intersection (Xisong High School) -> Xisong Elementary School -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Dongxing Rd 1 -> Dongxing Rd -> Songshan High School (Keelung Rd)[^tdx-bus]

**BL26 (35 stops):** Songshan High School (Keelung Rd) -> Civic Blvd and Keelung Intersection -> Dongxing Rd -> Dongxing Rd 1 -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Xisong Elementary School -> Sanmin and Jiankang Intersection (Xisong High School) -> Sanmin Rd -> Guanghe New Village -> Sanmin Elementary School -> Minquan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Neihu Sports Center -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Mingshui Rd 1 -> Mingshui Rd Entrance -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Jintai Park -> Neihu Recreational Sports Park -> Xinhu 3rd Rd Entrance (Taipei Flower Market) -> Xinhu and Jiuzong Intersection -> Unitech Building[^tdx-bus]

**BL26 (36 stops):** Unitech Building -> SoutheastBusParkingLot -> Neihu Recreational Sports Park -> Yangguang Pumping Sta -> Jintai Park -> Binjiang Jr High School -> Dazhi Meiti Garden 2 -> Dazhi Meiti Garden 3 -> Mingshui Rd Entrance -> Mingshui Rd 1 -> Dazhi Gas Sta -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Gangqian Police Station -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge -> Sanmin Elementary School -> Guanghe New Village -> Sanmin Rd -> Sanmin and Jiankang Intersection (Xisong High School) -> Xisong Elementary School -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Dongxing Rd 1 -> Dongxing Rd -> Songshan High School (Keelung Rd) -> MRT Taipei City Hall Sta[^tdx-bus]

**BL26 (34 stops):** Songshan High School (Keelung Rd) -> Civic Blvd and Keelung Intersection -> Dongxing Rd -> Dongxing Rd 1 -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Xisong Elementary School -> Sanmin and Jiankang Intersection (Xisong High School) -> Sanmin Rd -> Guanghe New Village -> Sanmin Elementary School -> Minquan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Neihu Sports Center -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Mingshui Rd 1 -> Mingshui Rd Entrance -> Dazhi Meiti Garden 3 -> Keelung River 2nd Term Public Housing 1 -> Binjiang Jr High School -> Jintai Park -> Neihu Recreational Sports Park -> Xinhu and Jiuzong Intersection -> Unitech Building[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] What distinguishes the four named subroutes operationally — whether they
represent different scheduled departures, a detour condition, or a
historical succession — was not found in this search beyond what their own
names describe. The route length and a headway-by-day-type figure also
remain TBC, and no dated history for the route, its four subroutes, or the
operator's own naming convention behind 繞駛/往 was found in this search,
nor a stated reason for the operator, 三重客運, running a route so far from
its own namesake district.
