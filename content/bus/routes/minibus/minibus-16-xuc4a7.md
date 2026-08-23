---
title: "S16 / 小16"
summary: "Minibus and community route: S16 (小16)."
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
  - id: ebus-route-minibus-16-xuc4a7
    title: "S16 route schedule"
    titleOriginal: "小16班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小16 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 10 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 公館里”, the current head/last-departure field “[平日] 0550 - 2300 [假日] 0600 - 2300”, fare “一段票”.[^ebus-route-minibus-16-xuc4a7]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its climb through 士林 toward 陽明山.[^tdx-bus]
TDX records ten named direction/variant records for this service, the
richest subroute count of any minibus route in this batch, each keyed
to a specific departure time and a specific combination of detours via
永公路296、350 or 500巷 rather than to a named geographic branch as on
most other minibus routes.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 20 directional or variant stop sequences for S16; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S16 (31 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (36 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village Guan Gong Temple -> Shuangxizi -> Gongguan Village -> Xiyun Temple -> Xiajingxue -> Lianhua Shanzhuang[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (31 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village[^tdx-bus]

**S16 (20 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (32 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Guandiping -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (33 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village Guan Gong Temple -> Shuangxizi -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (26 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (32 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Guandiping -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (34 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Guandiping -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Gongguan Village Guan Gong Temple -> Shuangxizi -> Jiecui New Village -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (37 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Guandiping -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Gongguan Village Guan Gong Temple -> Shuangxizi -> Jiecui New Village -> Gongguan Village -> Xiyun Temple -> Xiajingxue -> Lianhua Shanzhuang[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S16 (33 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers' Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Yanshan Village -> Yanshan Village 1 -> Zhilan New Village -> Huaxing High School -> Lingtou -> Bazaipu -> Yongling -> Yongfu (The Lin Yutang House) -> Yang Ming Home for the Disabled -> Yonggong Bridge -> Yonggong Rd 1 -> Yonggong Rd 2 -> Green Garden Restaurant -> Yonggong Rd 3 -> Daxin Shanzhuang -> Dongfang Temple -> Ye Village -> Gongguan Di -> Dongfang Temple -> Daxin Shanzhuang -> Guanxing Temple -> Jiecui New Village -> Gongguan Village Guan Gong Temple -> Shuangxizi -> Gongguan Village[^tdx-bus]

**S16 (24 stops):** Gongguan Village -> Jiecui New Village -> Guanxing Temple -> Yonggong Rd 3 -> Green Garden Restaurant -> Yonggong Rd 2 -> Yonggong Rd 1 -> Yonggong Bridge -> Yang Ming Home for the Disabled -> Yongfu (The Lin Yutang House) -> Yongling -> Bazipu -> Lingtou -> Huaxing High School -> Zhilan New Village -> Yanshan Village 1 -> Yanshan Village -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> ShiLin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 10 direction/variant records, 1 operator record, and 10 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for keying this route's own subroutes to specific departure times, rather than to named branches as elsewhere in this batch, was found in this search.
