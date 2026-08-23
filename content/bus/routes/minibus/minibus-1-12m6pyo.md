---
title: "M1 / 市民小巴1"
summary: "Minibus and community route: M1 (市民小巴1)."
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
  - id: ebus-route-minibus-1-12m6pyo
    title: "M1 route schedule"
    titleOriginal: "市民小巴1班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴1 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 3 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運劍潭站 - 風櫃嘴”, the current head/last-departure field “[平日] 0610 - 1730 [假日] 0610 - 1730”, fare “一段票”.[^ebus-route-minibus-1-12m6pyo]

Two confirmed interchanges are recorded in the curated stop-ID join
set: Jiantan (R15) and Shilin (R16), matching the route's own terminus
and a stop further along its own climb toward 內湖／風櫃嘴, the same pair
confirmed for the separate 小15 corridor family further along
Yangmingshan.[^tdx-bus] TDX records three named direction/variant
records for this service, including a pair distinguished only by
whether the working detours via 溪山 on the outbound or return
leg.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for M1; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M1 (35 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow University -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> Zhishan Jr High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Neishuangxi Bridge -> Lingjiao -> Shalun One -> Shalun -> Shuangxi Water Treatment Plant -> Zhishan Rd Sec 3 -> Bixi Bridge -> Qiaozitou -> Qiaozitou 1 -> Neishuangxi Nature Center -> Lincuo -> Fenglin Bridge -> Pamir Park -> Fengguizui -> Jincheng Chicken Restarant -> Dingshan[^tdx-bus]

**M1 (35 stops):** Dingshan -> Jincheng Chicken Restarant -> Fengguizui -> Pamir Park -> Fenglin Bridge -> Lincuo -> Neishuangxi Nature Center -> Qiaozitou 1 -> Qiaozitou -> Bixi Bridge -> Zhishan Rd Sec 3 -> Shuangxi Water Treatment Plant -> Shalun -> Shalun One -> Lingjiao -> Neishuangxi Bridge -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> Zhishan Jr High School -> Wesley Girls High School -> National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow University -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**M1 (35 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow University -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> Zhishan Jr High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Neishuangxi Bridge -> Lingjiao -> Shalun One -> Shalun -> Shuangxi Water Treatment Plant -> Zhishan Rd Sec 3 -> Bixi Bridge -> Qiaozitou -> Qiaozitou 1 -> Neishuangxi Nature Center -> Lincuo -> Fenglin Bridge -> Pamir Park -> Fengguizui -> Jincheng Chicken Restarant -> Dingshan[^tdx-bus]

**M1 (36 stops):** Dingshan -> Jincheng Chicken Restarant -> Fengguizui -> Pamir Park -> Fenglin Bridge -> Lincuo -> Neishuangxi Nature Center -> Qiaozitou 1 -> Qiaozitou -> Xishan Elementary School -> Bixi Bridge -> Zhishan Rd Sec 3 -> Shuangxi Water Treatment Plant -> Shalun -> Shalun One -> Lingjiao -> Neishuangxi Bridge -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> Zhishan Jr High School -> Wesley Girls High School -> National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow University -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**M1 (36 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Shilin Police Precinct -> Shilin Farmers Assn -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow University -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> Zhishan Jr High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Neishuangxi Bridge -> Lingjiao -> Shalun One -> Shalun -> Shuangxi Water Treatment Plant -> Zhishan Rd Sec 3 -> Bixi Bridge -> Xishan Elementary School -> Qiaozitou -> Qiaozitou 1 -> Neishuangxi Nature Center -> Lincuo -> Fenglin Bridge -> Pamir Park -> Fengguizui -> Jincheng Chicken Restarant -> Dingshan[^tdx-bus]

**M1 (35 stops):** Dingshan -> Jincheng Chicken Restarant -> Fengguizui -> Pamir Park -> Fenglin Bridge -> Lincuo -> Neishuangxi Nature Center -> Qiaozitou 1 -> Qiaozitou -> Bixi Bridge -> Zhishan Rd Sec 3 -> Shuangxi Water Treatment Plant -> Shalun -> Shalun One -> Lingjiao -> Neishuangxi Bridge -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> Zhishan Jr High School -> Wesley Girls High School -> National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow University -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Elementary School -> Shilin Police Precinct -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for routing the 溪山 detour on only one leg of the round trip rather than both was found in this search.
