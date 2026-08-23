---
title: "S19 / 小19"
summary: "Minibus and community route: S19 (小19)."
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
  - id: ebus-route-minibus-19
    title: "S19 route schedule"
    titleOriginal: "小19班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小19 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 平等里”, the current head/last-departure field “[平日] 0600 - 2210 [假日] 0600 - 2220”, fare “一段票”.[^ebus-route-minibus-19]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its own run.[^tdx-bus] Past 故宮博物院 the
confirmed corridor diverges toward 川瀨/前半嶺/半嶺/福德宮/大坪尾, ending
at 平等里's own 平菁街93巷二, distinct from the 菁山/擎天崗 and 風櫃嘴/聖人
瀑布 corridors served by the neighbouring minibus routes sharing the
same Jiantan/Shilin terminus pair.[^tdx-bus] TDX records two named
subroutes distinguishing whether a working detours via 合誠宮.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for S19; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S19 (41 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin Xincun -> Soochow U (Chien Mu House) -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> ChinShan Junior High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Neishuangxi Bridge -> Lingjiao -> Shalun One -> Shalun -> Chuanlai -> Qianbanling -> Banling 1 -> Banling -> Fude Temple -> Dapingwei 1 -> Dapingwei -> Pingjing St Lane 166 -> Family Garden Community -> Fude Temple -> Mt Erwei Trail Entrance -> Pingdeng Elementary School -> Pingdeng Village -> Neicuo -> Yuhuang Temple -> Pingjing St Lane93 1 -> Pingjing St Lane93 -> Pingjing St Lane93 2[^tdx-bus]

**S19 (38 stops):** Neiliao -> Pingjing St Lane93 2 -> Pingjing St Lane93 -> Yuhuang Temple -> Pingdeng Village -> Pingdeng Elementary School -> Fude Temple -> Family Garden Community -> Pingjing St Lane 166 -> Dapingwei -> Dapingwei 1 -> Fude Temple -> Banling -> Banling 1 -> Qianbanling -> Chuanlai -> Shalun One -> Lingjiao -> Neishuangxi Bridge -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> ChinShan Junior High School -> Wesley Girls High School -> National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin Xincun -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**S19-Hecheng Temple (41 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin Xincun -> Soochow U (Chien Mu House) -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> ChinShan Junior High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Neishuangxi Bridge -> Lingjiao -> Shalun One -> Shalun -> Chuanlai -> Qianbanling -> Banling 1 -> Banling -> Fude Temple -> Dapingwei 1 -> Dapingwei -> Pingjing St Lane 166 -> Family Garden Community -> Fude Temple -> Mt Erwei Trail Entrance -> Pingdeng Elementary School -> Pingdeng Village -> Neicuo -> Yuhuang Temple -> Pingjing St Lane93 1 -> Pingjing St Lane93 -> Pingjing St Lane93 2[^tdx-bus]

**S19-Hecheng Temple (39 stops):** Neiliao -> Pingjing St Lane93 2 -> Pingjing St Lane93 -> Yuhuang Temple -> Pingdeng Village -> Pingdeng Elementary School -> Hecheng Temple -> Fude Temple -> Family Garden Community -> Pingjing St Lane 166 -> Dapingwei -> Dapingwei 1 -> Fude Temple -> Banling -> Banling 1 -> Qianbanling -> Chuanlai -> Shalun One -> Lingjiao -> Neishuangxi Bridge -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> ChinShan Junior High School -> Wesley Girls High School -> National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin Xincun -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 捷運劍潭站 with 平等里 specifically as the route's own termini was found in this search, nor a stated reason for the specific 合誠宮 detour existing as a separately named subroute.
