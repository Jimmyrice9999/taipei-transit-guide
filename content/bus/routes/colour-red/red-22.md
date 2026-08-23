---
title: R22 / 紅22
summary: Red-line feeder route R22 (紅22).
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
    note: Lists 紅22 under 捷運紅線接駁公車.
  - id: ebus-r22
    title: R22 route schedule
    titleOriginal: 紅22班表
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 八里–捷運關渡站 corridor, service spans, one-section fare, timetable variants and 淡水客運八里站 contact.
---

## Classification and corridor

The official catalogue lists 紅22 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 八里 - 捷運關渡站, weekday service 0530–2330, holiday service 0545–2330, one-section fare and 淡水客運八里站 as the service contact. The page also publishes the current 07:03 return, 17:19 outbound and post-22:00 timetable variants.[^ebus-r22]

The confirmed stop sequence runs from 淡水客運八里站, past 幸福花園社區/龍井
天朗社區/春城台北港, through 八里's 舊城里/八里區農會/十三行博物館, then along
關渡自然保護區's 大崁/西門/水雲山莊, crosses 關渡大橋, ending at 捷運關渡站.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID
join set: Guandu (R25), matching the route's own terminus.[^tdx-bus] TDX
records five named subroutes distinguishing the 台北港 detour and
車機-triggered short workings.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 8 directional or variant stop sequences for R22; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R22 (44 stops):** Tamsui Bus Bali Station -> Xinfu Garden Community -> Longingtianlang Community -> Taibeixueli -> Chunchengtaibeigang -> Tudigong Temple -> Bali -> JiouCheng Village -> Bali District Farmers' Association -> Bali Service Sta -> Bali Elementary School -> Broadcasting Corporation of China -> Shanhaiguan -> Bali District Administration Center(Shisanhung Museum) -> Tianxin -> Gongtian -> Pitou Village -> Waziwei -> Dazhuwei -> Dakan Elementary School -> Senior Citizens Home -> Dakan Village -> Yitian Temple -> Ximen -> Siajiezih -> Ferryboats’Dock -> Shuiyun Shanzhuang -> Micang Village -> Guanyin Rd Entrance -> Micang Elementary School -> Micang Elementary School 1 -> Shengxin Villa -> Wushantou -> Zhangcuo -> Sacred Heart Girls High School -> Longxing -> Dafu Community -> Bangka Bridge -> Bangka Bridge -> Guandu Bridge -> Guandu -> Guandu Nature Building -> Guandu Village -> MRT Guandu Sta[^tdx-bus]

**R22 (42 stops):** Beitou District Office(Guandu) -> Ligong & Lide Intersection -> Da Ai Television -> Guandu -> Guandu Bridge -> Bangka Bridge -> Dafu Community -> Longxing -> Sacred Heart Girls High School -> Zhangcuo -> Wushantou -> Shengxin Villa -> Micang Elementary School I -> Micang Elementary School -> Guanyin Rd Entrance -> Micang Village -> Shuiyun Shanzhuang -> Ferryboats' Dock -> Xiajie Zai -> Ximen -> Yitian Temple -> Dakan Village -> Senior Citizens Home -> Dakan Elementary School -> Dazhuwei -> Waziwei -> Pitou Village -> Gongtian -> Tianxin(Shihsanhang Museum) -> Bali District Administration Center(Shisanhung Museum) -> Shanhaiguan -> Broadcasting Corporation of China -> Bali Elementary School -> Bali Service Sta -> Bali District Farmers' Association -> JiouCheng Village -> Bali -> Tudigong Temple -> Taibeixueli -> Longingtianlang Community -> Xinfu Garden Community -> Tamsui Bus Bali Station[^tdx-bus]

**R22 (44 stops):** Tamsui Bus Bali Station -> Xinfu Garden Community -> Longingtianlang Community -> Taibeixueli -> Chunchengtaibeigang -> Tudigong Temple -> Bali -> JiouCheng Village -> Bali District Farmers' Association -> Bali Service Sta -> Bali Elementary School -> Broadcasting Corporation of China -> Shanhaiguan -> Bali District Administration Center(Shisanhung Museum) -> Tianxin -> Gongtian -> Pitou Village -> Waziwei -> Dazhuwei -> Dakan Elementary School -> Senior Citizens Home -> Dakan Village -> Yitian Temple -> Ximen -> Siajiezih -> Ferryboats’Dock -> Shuiyun Shanzhuang -> Micang Village -> Guanyin Rd Entrance -> Micang Elementary School -> Micang Elementary School 1 -> Shengxin Villa -> Wushantou -> Zhangcuo -> Sacred Heart Girls High School -> Longxing -> Dafu Community -> Bangka Bridge -> Bangka Bridge -> Guandu Bridge -> Guandu -> Guandu Nature Building -> Guandu Village -> MRT Guandu Sta[^tdx-bus]

**R22 back (42 stops):** Beitou District Office(Guandu) -> Ligong & Lide Intersection -> Da Ai Television -> Guandu -> Guandu Bridge -> Bangka Bridge -> Dafu Community -> Longxing -> Sacred Heart Girls High School -> Zhangcuo -> Wushantou -> Shengxin Villa -> Micang Elementary School I -> Micang Elementary School -> Guanyin Rd Entrance -> Micang Village -> Shuiyun Shanzhuang -> Ferryboats' Dock -> Xiajie Zai -> Ximen -> Yitian Temple -> Dakan Village -> Senior Citizens Home -> Dakan Elementary School -> Dazhuwei -> Waziwei -> Pitou Village -> Gongtian -> Tianxin(Shihsanhang Museum) -> Bali District Administration Center(Shisanhung Museum) -> Shanhaiguan -> Broadcasting Corporation of China -> Bali Elementary School -> Bali Service Sta -> Bali District Farmers' Association -> JiouCheng Village -> Bali -> Tudigong Temple -> Taibeixueli -> Longingtianlang Community -> Xinfu Garden Community -> Tamsui Bus Bali Station[^tdx-bus]

**R22 Taipei port Go (45 stops):** Tamsui Bus Bali Station -> Xinfu Garden Community -> Longingtianlang Community -> Taibeixueli -> Chunchengtaibeigang -> Taipei Port Administration Building -> Tudigong Temple -> Bali -> JiouCheng Village -> Bali District Farmers' Association -> Bali Service Sta -> Bali Elementary School -> Broadcasting Corporation of China -> Shanhaiguan -> Bali District Administration Center(Shisanhung Museum) -> Tianxin -> Gongtian -> Pitou Village -> Waziwei -> Dazhuwei -> Dakan Elementary School -> Senior Citizens Home -> Dakan Village -> Yitian Temple -> Ximen -> Siajiezih -> Ferryboats’Dock -> Shuiyun Shanzhuang -> Micang Village -> Guanyin Rd Entrance -> Micang Elementary School -> Micang Elementary School 1 -> Shengxin Villa -> Wushantou -> Zhangcuo -> Sacred Heart Girls High School -> Longxing -> Dafu Community -> Bangka Bridge -> Bangka Bridge -> Guandu Bridge -> Guandu -> Guandu Nature Building -> Guandu Village -> MRT Guandu Sta[^tdx-bus]

**R22 Taipei port Go (42 stops):** Beitou District Office(Guandu) -> Ligong & Lide Intersection -> Da Ai Television -> Guandu -> Guandu Bridge -> Bangka Bridge -> Dafu Community -> Longxing -> Sacred Heart Girls High School -> Zhangcuo -> Wushantou -> Shengxin Villa -> Micang Elementary School I -> Micang Elementary School -> Guanyin Rd Entrance -> Micang Village -> Shuiyun Shanzhuang -> Ferryboats' Dock -> Xiajie Zai -> Ximen -> Yitian Temple -> Dakan Village -> Senior Citizens Home -> Dakan Elementary School -> Dazhuwei -> Waziwei -> Pitou Village -> Gongtian -> Tianxin(Shihsanhang Museum) -> Bali District Administration Center(Shisanhung Museum) -> Shanhaiguan -> Broadcasting Corporation of China -> Bali Elementary School -> Bali Service Sta -> Bali District Farmers' Association -> JiouCheng Village -> Bali -> Tudigong Temple -> Taibeixueli -> Longingtianlang Community -> Xinfu Garden Community -> Tamsui Bus Bali Station[^tdx-bus]

**R22 Taipei port Back (44 stops):** Tamsui Bus Bali Station -> Xinfu Garden Community -> Longingtianlang Community -> Taibeixueli -> Chunchengtaibeigang -> Tudigong Temple -> Bali -> JiouCheng Village -> Bali District Farmers' Association -> Bali Service Sta -> Bali Elementary School -> Broadcasting Corporation of China -> Shanhaiguan -> Bali District Administration Center(Shisanhung Museum) -> Tianxin -> Gongtian -> Pitou Village -> Waziwei -> Dazhuwei -> Dakan Elementary School -> Senior Citizens Home -> Dakan Village -> Yitian Temple -> Ximen -> Siajiezih -> Ferryboats’Dock -> Shuiyun Shanzhuang -> Micang Village -> Guanyin Rd Entrance -> Micang Elementary School -> Micang Elementary School 1 -> Shengxin Villa -> Wushantou -> Zhangcuo -> Sacred Heart Girls High School -> Longxing -> Dafu Community -> Bangka Bridge -> Bangka Bridge -> Guandu Bridge -> Guandu -> Guandu Nature Building -> Guandu Village -> MRT Guandu Sta[^tdx-bus]

**R22 Taipei port Back (43 stops):** Beitou District Office(Guandu) -> Ligong & Lide Intersection -> Da Ai Television -> Guandu -> Guandu Bridge -> Bangka Bridge -> Dafu Community -> Longxing -> Sacred Heart Girls High School -> Zhangcuo -> Wushantou -> Shengxin Villa -> Micang Elementary School I -> Micang Elementary School -> Guanyin Rd Entrance -> Micang Village -> Shuiyun Shanzhuang -> Ferryboats' Dock -> Xiajie Zai -> Ximen -> Yitian Temple -> Dakan Village -> Senior Citizens Home -> Dakan Elementary School -> Dazhuwei -> Waziwei -> Pitou Village -> Gongtian -> Tianxin(Shihsanhang Museum) -> Bali District Administration Center(Shisanhung Museum) -> Shanhaiguan -> Broadcasting Corporation of China -> Bali Elementary School -> Bali Service Sta -> Bali District Farmers' Association -> JiouCheng Village -> Bali -> Tudigong Temple -> Taipei Port Administration Building -> Taibeixueli -> Longingtianlang Community -> Xinfu Garden Community -> Tamsui Bus Bali Station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 5 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅22 or its
relationship to sibling route 紅13, run by the same operator, 淡水客運, over
a similar 八里–關渡 corridor, was found in this search. A headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own timetable-variant listing.
No predecessor-route or renumbering history for 紅22 was located either,
nor a stated reason for confirming only one interchange along a 44-stop
corridor covering nearly all of 八里.[^tdx-bus]
