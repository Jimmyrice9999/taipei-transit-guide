---
title: "S15 / 小15"
summary: "Minibus and community route: S15 (小15)."
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
  - id: ebus-route-minibus-15-44eull
    title: "S15 route schedule"
    titleOriginal: "小15班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小15 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 7 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 擎天崗”, the current head/last-departure field “[平日] 0540 - 1620 [假日] 0540 - 1730”, fare “一段票”.[^ebus-route-minibus-15-44eull]

Two confirmed interchanges are recorded in the curated stop-ID join set:
Jiantan (R15) and Shilin (R16), matching the route's own terminus and a
stop further along its climb.[^tdx-bus] TDX records seven named
direction/variant records for this service, the richest subroute count
of any minibus route in this batch, distinguishing workings that stop
short at 冷水坑, that detour via 松園/田尾湖, or that run the full climb
to 擎天崗 itself past 天寶聖道宮, well beyond the terminus published for
its own sibling routes 小15區 and 小15區預 over the same corridor
family.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 10 directional or variant stop sequences for S15; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S15 (42 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Songyuan -> Tianweihu -> Lengshuikeng Service Center -> Lengshuikeng -> Tianbaoshengdao Shrine -> Qingtiangang[^tdx-bus]

**S15 (39 stops):** Tianbaoshengdao Shrine -> Lengshuikeng -> Lengshuikeng Service Center -> Tianweihu -> Songyuan -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Jingshan Stop 2 -> Jingshan Stop 1 -> Jingshan Villa -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S15 (44 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Jingshan Township 1 -> Jingshan Recreation Area -> Songyuan -> Tianweihu -> Lengshuikeng Service Center -> Lengshuikeng -> Tianbaoshengdao Shrine -> Qingtiangang[^tdx-bus]

**S15 (41 stops):** Tianbaoshengdao Shrine -> Lengshuikeng -> Lengshuikeng Service Center -> Tianweihu -> Songyuan -> Jingshan Recreation Area -> Jingshan Township 1 -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Jingshan Stop 2 -> Jingshan Stop 1 -> Jingshan Villa -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S15 (39 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Songyuan -> Tianweihu -> Lengshuikeng Service Center[^tdx-bus]

**S15 (3 stops):** Lengshuikeng -> Tianbaoshengdao Shrine -> Qingtiangang[^tdx-bus]

**S15 (2 stops):** Tianbaoshengdao Shrine -> Lengshuikeng[^tdx-bus]

**S15 (37 stops):** Lengshuikeng Service Center -> Tianweihu -> Songyuan -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Jingshan Stop 2 -> Jingshan Stop 1 -> Jingshan Villa -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S15 (44 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Fuyin -> Yangmingshan Elementary School -> Mingde New Village -> Baiyun Shanzhuang -> Xinan -> Xiazhulin -> Gezhi Junior High School -> Shanzihou Police Substation -> Shanzaihou -> Water Purification Plant -> Yangmingshan Spring -> Shanzhuhu -> Jingshan Villa -> Jingshan Stop 1 -> Jingshan Stop 2 -> Jingshan Stop 3 -> Jingshan Stop 5 -> Tudigong Temple -> Juansi Waterfall -> Jingshan Township 1 -> Jingshan Recreation Area -> Songyuan -> Tianweihu -> Lengshuikeng Service Center -> Lengshuikeng -> Tianbaoshengdao Shrine -> Qingtiangang[^tdx-bus]

**S15 (41 stops):** Tianbaoshengdao Shrine -> Lengshuikeng -> Lengshuikeng Service Center -> Tianweihu -> Songyuan -> Jingshan Recreation Area -> Jingshan Township 1 -> Juansi Waterfall -> Tudigong Temple -> Jingshan Stop 5 -> Jingshan Stop 3 -> Jingshan Stop 2 -> Jingshan Stop 1 -> Jingshan Villa -> Shanzhuhu -> Water Purification Plant -> Shanzaihou -> Shanzihou Police Substation -> Gezhi Junior High School -> Xiazhulin -> Xinan -> Baiyun Shanzhuang -> Mingde New Village -> Yangmingshan Elementary School -> Fuyin -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 7 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for concentrating seven separate named workings on one corridor, rather than publishing them as a single route with branching stops, was found in this search.
