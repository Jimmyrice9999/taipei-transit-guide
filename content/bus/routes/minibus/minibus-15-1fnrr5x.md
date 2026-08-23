---
title: "S15Shuttle / 小15區"
summary: "Minibus and community route: S15Shuttle (小15區)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-15-1fnrr5x
    title: "S15Shuttle route schedule"
    titleOriginal: "小15區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001520
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小15區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 3 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 菁山遊憩園區”, the current head/last-departure field “[平日] 0620 - 2230 [假日] 1930 - 2230”, fare “一段票”.[^ebus-route-minibus-15-1fnrr5x]

Two confirmed interchanges are recorded in the curated stop-ID join set:
Jiantan (R15) and Shilin (R16), matching the route's own Jiantan
terminus and a stop further along its climb through Shilin toward
陽明山.[^tdx-bus] TDX records three named subroutes distinguishing
whether a working detours via 菁山路99巷 or runs as a reservation-only
(預約) service, over the same corridor family shared with 小15區預 and
小15.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for S15Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S15(Shuttle) (38 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Jingshan Township 1 -> Jingshan Recreation Area[^tdx-bus]

**S15(Shuttle) (36 stops):** Jingshan Recreation Area -> Jingshan Township 1 -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Jingshan Stop 2 -> Jingshan Stop 1 -> Jingshan Villa -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S15(Shuttle) (38 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Jingshan Township 1 -> Jingshan Recreation Area[^tdx-bus]

**S15(Shuttle) (33 stops):** Jingshan Recreation Area -> Jingshan Township 1 -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S15(Shuttle) (38 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Jingshan Township 1 -> Jingshan Recreation Area[^tdx-bus]

**S15(Shuttle) (36 stops):** Jingshan Recreation Area -> Jingshan Township 1 -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Jingshan Stop 2 -> Jingshan Stop 1 -> Jingshan Villa -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for this route's own shorter 菁山遊憩園區 terminus, well short of 小15's own 擎天崗 terminus over what is largely the same climb, was found in this search, nor a stated reason for its own weekend-only 1930–2230 evening window sitting alongside a fuller weekday span in the same published schedule.
