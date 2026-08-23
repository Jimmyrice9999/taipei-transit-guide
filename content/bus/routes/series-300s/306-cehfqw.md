---
title: 306區 / 306Shuttle
summary: General-bus shuttle route 306區 (舊莊 - 臺北橋).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0500–2230; holiday 0510–2230"
    source: ebus-306-shuttle
  - label: Headway by day type
    value: "Weekday peak 4–8 min, off-peak 10–15 min, after 2000 15–20 min; holiday 10–20 min"
    source: ebus-306-shuttle
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-306-shuttle
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
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 306區 under 一般公車, filed as its own routeid entry distinct from the plain 306 route.
  - id: ebus-306-shuttle
    title: 306區 route schedule
    titleOriginal: 306區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030620
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 舊莊–臺北橋 corridor, service span, fare and operator contact (大都會客運舊莊站 02-2651-2945).
---

## Classification and corridor

The official catalogue lists 306區 under 一般公車, filed as its own routeid
entry distinct from the plain 306 route.[^ebus-general] Its full schedule
page gives 舊莊 - 臺北橋, weekday service 0500–2230, holiday service
0510–2230, a single-section fare (一段票), and 大都會客運舊莊站 as the service
contact.[^ebus-306-shuttle] Weekday frequency is peak 4–8 minutes,
off-peak 10–15 minutes, and 15–20 minutes after 2000; holiday frequency runs
a consistent 10–20 minutes.[^ebus-306-shuttle]

The confirmed stop sequence covers only the Nangang-to-Nanjing-corridor
portion of parent route 306's alignment — from 舊莊 past 中研院 (Academia
Sinica) and along the same Nanjing corridor through 捷運中山站, 捷運松江南京站
and 捷運南京復興站 — stopping at 臺北橋 rather than continuing into 三重 and
蘆洲.[^tdx-bus] As on 306, none of the named MRT stations carries a confirmed
join in the curated set.[^tdx-bus] 306區's own 舊莊 terminus is the same one
306's 大都會客運 working reaches, rather than 306's 三重客運 working's separate
凌雲站 terminus — the shuttle shadows one of 306's two divergent operator
workings, not an average of both.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 306Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**306(Shuttle) (40 stops):** Jiuzhuang -> Jiuzhuang Elementary School -> Jiuzhuang 1st Stop -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Yucheng Elementary School -> Xixin Village (Xinxin Park) -> Nangang Rd Sec 3 -> Songshan Brick Factory -> Yucheng Village -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> Raohe St Night Market (Tayou) -> Nansongshan (Nanjing) -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> NanJing-SanMin Intersection -> Nanjing & Ningan Intersection -> Nanjing & Dunhua Intersection (Taipei Arena) -> MRT Nanjing Fuxing Station -> Nanjing & Longjiang Intersection -> Nanjing & Jianguo Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Taipei Circle (Nanjing) -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> Taipei Bridge[^tdx-bus]

**306(Shuttle) (40 stops):** Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jianguo Intersection -> Nanjing & Longjiang Intersection -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Nanjing & Ningan Intersection -> NanJing-SanMin Intersection -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Nansongshan (Nanjing) -> Raohe St Night Market (Tayou) -> Songshan Farmers Association -> Songshan Rail Sta (Bade) -> Yucheng Village -> Songshan Brick Factory -> Nangang Rd Sec 3 -> Xixin Village (Xinxin Park) -> Yucheng Elementary School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Jiuzhuang 1st Stop -> Jiuzhuang Elementary School -> Jiuzhuang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus] No
route-specific history distinct from the wider 306 family (see 306's page)
was found for the shuttle variant in this search.
