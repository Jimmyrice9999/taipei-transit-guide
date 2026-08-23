---
title: 88區 / 88Shuttle
summary: General-bus route 88區 (南港花園社區 - 臺北車站).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Operator history
    value: Run by 大有巴士 (Citiair Bus), the same operator as base route 88
    source: ebus-88qu
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday and holiday 0510–2200"
    source: ebus-88qu
  - label: Headway by day type
    value: "Peak 15–20 min, off-peak 15–20 min; fixed schedule after 1900 on weekdays"
    source: ebus-88qu
  - label: Fare / transfer
    value: Single-section fare (一段票), no buffer zone
    source: ebus-88qu
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute for this route, named "88Shuttle"/88區 (operator key 900 / 大有巴士). Its raw stop-name matching flags candidate proximity to Songshan Line R02/R06/R09, but none of these is in the site's separately curated stop-ID rail-join set, so no interchange is presented as confirmed. The operator id used in this project's data (bus-operator-citiairbus) resolves in data/tdx/bus/operators.json to English name "Citiair Bus Co., Ltd." and Chinese name 大有巴士, operator code CitiairBus — the same operator as base route 88.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 88區 under 一般公車, as a routeid entry separate from base route 88.
  - id: ebus-88qu
    title: 88區 route schedule
    titleOriginal: 88區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100008820
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official schedule page listing the current 南港花園社區–臺北車站 corridor, service span, fare, headway bands and 大有巴士興中站 (02-2653-4153) as the service contact. States: 收費方式：一段票、分段緩衝：無、〔平日〕尖峰:15分至20分；離峰:15分至20分, and notes a fixed schedule after 19:00 on weekdays (平日19:00後固定班次). Does not itself state a commencement date or cross-reference base route 88."
  - id: zhwikiversity-88
    title: Taipei joint-operation bus route 88
    titleOriginal: 台北聯營公車88路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A88%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Community-compiled operational history for base route 88, not independently verified against a primary PTO/operator announcement. States that a new shuttle service between 南港花園社區 and 臺北車站 was established on 14 February 2018 (2018年2月14日新闢南港花園社區至臺北車站區間車) — the same corridor as this route."
---

## Classification and corridor

The official catalogue lists 88區 under 一般公車, as a routeid entry separate
from base route 88.[^ebus-general] Its full schedule page gives 南港花園社區 -
臺北車站, weekday and holiday service both 0510–2200, a single-section fare
(一段票) with no buffer zone (分段緩衝：無), a stated peak and off-peak headway
both of 15–20 minutes, a fixed schedule after 19:00 on weekdays, and
大有巴士興中站 as the service contact — the same operator and dispatch station
as base route 88.[^ebus-88qu] The schedule page does not itself state a
commencement date or cross-reference base route 88.[^ebus-88qu]

## History

A Wikiversity community entry on base route 88 states that a new shuttle
service between 南港花園社區 and 臺北車站 — this route's own corridor — was
established on 14 February 2018; this has not been independently verified
against a primary PTO or operator announcement in this search, and the
Wikiversity source does not itself name 88區, so the identification of the
two is an inference from a matching corridor rather than a claim either
source states outright.[^zhwikiversity-88]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 88Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**88Shuttle (32 stops):** Nangang Garden Community 2 -> Nangang Garden Community 1 -> Nangang Garden Community 5 -> Nangang Garden Community 4 -> Nangang Garden Community 3 -> Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Li -> Dormitory of National Tax Administration of Taipei -> MRT Xianshan Sta -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (XinYi) -> Xinyi & Guangfu Intersection -> Xinyi & Tonghua Roads -> MRT XinYi-AnHe Sta (Xinyi) -> Xinyi & Dunhua Intersection -> Xinyi & Daan Intersection -> MRT Daan Sta (Xinyi) -> HSNU -> XinYi & JianGuo Intersection -> MRT Daan Park Sta -> Xinyi & Xinsheng Intersection -> XinYi-YongKang Intersection -> MRT Dongmen Sta -> Xinyi & Hangzhou Intersection -> CKS Memorial Hall -> MRT NTU Hospital Station -> Taipei Main Sta (Qingdao)[^tdx-bus]

**88Shuttle (25 stops):** NTU Hospital -> CKS Memorial Hall -> Xinyi & Hangzhou Intersection -> MRT Dongmen Sta -> Xinyi & Yongkang Intersection (MRT Dongmen Sta) -> Xinyi & Xinsheng Intersection -> MRT Daan Park Sta -> XinYi & JianGuo Intersection -> MRT Daan Sta (Xinyi) -> XinYi & DaAn Intersection -> Xinyi & Dunhua Intersection -> MRT XinYi-AnHe Sta (Xinyi) -> Xinyi & Tonghua Roads -> Xinyi & Guangfu Intersection -> MRT Taipei 101 / World Trade Center Sta (XinYi) -> Xinyi and Songren Intersection (Xinyi) -> MRT Xianshan Sta -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Chengfu Changchun Assembly -> Nangang Garden Community 2[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records and records
a single subroute for this route, named "88Shuttle"/88區; route length
remains TBC.[^tdx-bus] This route's own city-collision search is covered
under base route 88, since 88區 is a shuttle variant sharing the same route
number; a search for a directly comparable 88區-style shuttle route run by
another Taiwanese city bus operator was not found in this search.
