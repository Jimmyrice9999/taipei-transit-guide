---
title: 12 / 12
summary: General-bus route 12 (東園 - 民生社區).
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
    value: "[平日] 0530–2230 [假日] 0530–2230"
    source: ebus-12
  - label: Headway by day type
    value: Weekday peak 12–15 min
    source: ebus-12
  - label: Fare / transfer
    value: 一段票 (single-section fare)
    source: ebus-12
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records four subroutes for 12 — the plain working, a 12狗狗公車 (dog-friendly) working, and outbound/inbound half-route (去程半/返程半) workings.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 12 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-12
    title: 12 route schedule
    titleOriginal: 12班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100001200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 東園–民生社區 corridor, service span, fare, dog-friendly departures and operator contact.
---

## Classification and corridor

The official catalogue lists 12 under 一般公車; it is also cross-listed under
低地板 (low-floor fleet).[^ebus-general] Its schedule page gives 東園 - 民生社區
as the corridor, with weekday and holiday service both running 0530–2230 on a
single-section fare (一段票), 30 scheduled departures a day in each
direction.[^ebus-12] Weekday peak interval is 12–15 minutes.[^ebus-12] Two
weekday departures (0900, 1500) and four holiday departures (0730, 1230,
1630, 1930) are marked as 狗狗友善公車 (dog-friendly bus) workings, consistent
with the TDX snapshot's separate 12狗狗公車 subroute record.[^ebus-12] The
operator contact given is 大都會客運東園站, 02-2303-1862.[^ebus-12]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for 12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**12 (38 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Guangren Elementary School -> Qingnian Rd Police Substation -> Qingnian Rd -> Zhongzheng New Village -> Qingnian Community -> Youth Park (Qingnian) -> Youth Park (Guoxing) -> Guoxing Rd 1 -> Guoxing Rd Entrance -> Zhonghua and Nanhai Intersection -> Nanjichang Apartment -> Shaan Village -> Dapu St -> TCUH, Heping Branch -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Yanping Stop 1 -> Taipei Circle (Chongqing) -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Changchun Elementary School -> Nat'I Taipei U(Taipei Campus) -> Changchun Market -> Qingcheng St Entrance -> Chang-Gung Memorial Hospital -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Minsheng Activity Center -> Guanghe New Village -> Sanmin Elementary School -> Xinyi Village[^tdx-bus]

**12 (40 stops):** Minsheng Junior High School -> Xindong St Entrance -> Minsheng Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Minsheng & Dunhua Intersection -> Xingan Huacheng -> Changchun Market -> Nat'I Taipei U(Taipei Campus) -> Changchun Elementary School -> Songjiang and Changchun Intersection -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Old Taipei Railway Sta -> Yanping Stop 1 -> TCUH Zhongxin Branch (Tacheng) -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> TCUH, Heping Branch -> Dapu St -> Shaan Village -> Nanjichang Apartment -> Zhonghua and Nanhai Intersection -> Guoxing Rd Entrance -> Guting Junior High School -> Wanhua Hospital -> Guoxing Community -> Youth Park (Guoxing) -> Youth Park (Qingnian) -> Qingnian Community -> Zhongzheng New Village -> Qingnian Rd -> Qingnian Rd Police Substation -> Guangren Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

**12 (38 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Guangren Elementary School -> Qingnian Rd Police Substation -> Qingnian Rd -> Zhongzheng New Village -> Qingnian Community -> Youth Park (Qingnian) -> Youth Park (Guoxing) -> Guoxing Rd 1 -> Guoxing Rd Entrance -> Zhonghua and Nanhai Intersection -> Nanjichang Apartment -> Shaan Village -> Dapu St -> TCUH, Heping Branch -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Yanping Stop 1 -> Taipei Circle (Chongqing) -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Changchun Elementary School -> Nat'I Taipei U(Taipei Campus) -> Changchun Market -> Qingcheng St Entrance -> Chang-Gung Memorial Hospital -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Minsheng Activity Center -> Guanghe New Village -> Sanmin Elementary School -> Xinyi Village[^tdx-bus]

**12 (40 stops):** Minsheng Junior High School -> Xindong St Entrance -> Minsheng Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Minsheng & Dunhua Intersection -> Xingan Huacheng -> Changchun Market -> Nat'I Taipei U(Taipei Campus) -> Changchun Elementary School -> Songjiang and Changchun Intersection -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Old Taipei Railway Sta -> Yanping Stop 1 -> TCUH Zhongxin Branch (Tacheng) -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> TCUH, Heping Branch -> Dapu St -> Shaan Village -> Nanjichang Apartment -> Zhonghua and Nanhai Intersection -> Guoxing Rd Entrance -> Guting Junior High School -> Wanhua Hospital -> Guoxing Community -> Youth Park (Guoxing) -> Youth Park (Qingnian) -> Qingnian Community -> Zhongzheng New Village -> Qingnian Rd -> Qingnian Rd Police Substation -> Guangren Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

**12 (38 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Guangren Elementary School -> Qingnian Rd Police Substation -> Qingnian Rd -> Zhongzheng New Village -> Qingnian Community -> Youth Park (Qingnian) -> Youth Park (Guoxing) -> Guoxing Rd 1 -> Guoxing Rd Entrance -> Zhonghua and Nanhai Intersection -> Nanjichang Apartment -> Shaan Village -> Dapu St -> TCUH, Heping Branch -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Yanping Stop 1 -> Taipei Circle (Chongqing) -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Changchun Elementary School -> Nat'I Taipei U(Taipei Campus) -> Changchun Market -> Qingcheng St Entrance -> Chang-Gung Memorial Hospital -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Minsheng Activity Center -> Guanghe New Village -> Sanmin Elementary School -> Xinyi Village[^tdx-bus]

**12 (40 stops):** Minsheng Junior High School -> Xindong St Entrance -> Minsheng Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Minsheng & Dunhua Intersection -> Xingan Huacheng -> Changchun Market -> Nat'I Taipei U(Taipei Campus) -> Changchun Elementary School -> Songjiang and Changchun Intersection -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Old Taipei Railway Sta -> Yanping Stop 1 -> TCUH Zhongxin Branch (Tacheng) -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> TCUH, Heping Branch -> Dapu St -> Shaan Village -> Nanjichang Apartment -> Zhonghua and Nanhai Intersection -> Guoxing Rd Entrance -> Guting Junior High School -> Wanhua Hospital -> Guoxing Community -> Youth Park (Guoxing) -> Youth Park (Qingnian) -> Qingnian Community -> Zhongzheng New Village -> Qingnian Rd -> Qingnian Rd Police Substation -> Guangren Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the stop and geometry records, and separately
carries outbound/inbound half-route (去程半/返程半) subroutes alongside the
dog-friendly working; route length and full timetable detail beyond the
departure count stay TBC.[^tdx-bus] A community wiki (zh.wikiversity) lead
states that from 2017-07-27 route 12 was adjusted jointly with route 46 so
that the return working no longer calls at 圓環(南京)站, running via 承德路
一段 instead, and attributes this to 大都會客運's own website; a direct fetch
of the operator's route pages in this search returned only a site index with
no route-46/12 detail, so this could not be corroborated against a primary
source and is left unconfirmed and does not appear above.[^tdx-bus] The same
wiki lead also gives a 2022-10-30 trial of three holiday dog-friendly
departures, which is smaller than the four holiday departures the current
schedule page lists; this earlier figure is likewise uncorroborated against a
primary source and is not asserted above.[^ebus-12]
