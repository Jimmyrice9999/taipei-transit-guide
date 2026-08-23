---
title: BL10 / 藍10
summary: Blue-line feeder route BL10 (藍10).
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
    note: Lists 藍10 under 捷運藍線接駁公車.
  - id: ebus-bl10
    title: BL10 route schedule
    titleOriginal: 藍10班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112001000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 民生社區–南港花園社區 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍10 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 民生社區 - 南港花園社區, weekday and holiday service 0540–2330, one-section fare and 首都客運內湖站 as the service contact.[^ebus-bl10]

The confirmed stop sequence runs from 莊敬里 in Minsheng Community, past
新益里/西松國小 and a stop literally named 南京公寓(捷運南京三民), along
基隆路 to 捷運市政府站, then south through Xinyi past 松仁路/象山 before
turning east into Nangang past 福德國小/南港花園社區 to end at 成福路口.[^tdx-bus]
Three confirmed interchanges are recorded in the curated stop-ID join set:
Taipei City Hall (BL18), Nanjing Sanmin (G18) and Xiangshan (R02).[^tdx-bus]
The route runs a single subroute under one operator, 首都客運, with no
recorded holiday variant or short working.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL10; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B10 (23 stops):** Zhuangjing Village -> Xinyi Village -> Minsheng Junior High School -> Xindong St Entrance -> Sanmin Rd -> Sanmin and Jiankang Intersection (Xisong High School) -> Xisong Elementary School -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Dongxing Rd 1 -> Dongxing Rd -> Songshan High School (Keelung Rd) -> MRT Taipei City Hall Sta -> City Fire Department (Songren) -> Taipei City Hall (Songzhi) -> Songshou Rd Entrance -> Xinyi and Songren Intersection (Songren) -> MRT Xianshan Sta -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance[^tdx-bus]

**B10 (27 stops):** Nangang Garden Community 2 -> Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Village -> Dormitory of National Tax Administration of Taipei -> MRT Xianshan Sta -> Xinyi and Songren Intersection (Songren) -> Songshou Rd Entrance -> Taipei City Hall (Songzhi) -> City Fire Department (Songren) -> MRT Taipei City Hall Sta -> Songshan High School (Keelung Rd) -> Civic Blvd and Keelung Intersection -> Dongxing Rd -> Dongxing Rd 1 -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Xisong Elementary School -> Sanmin and Jiankang Intersection (Xisong High School) -> Sanmin Rd -> Xindong St Entrance -> Minsheng Junior High School -> Xinyi Village -> Zhuangjing Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] Why the route is classified as a Blue-line feeder despite touching the
Bannan Line at only one of its three confirmed interchanges — the other two
being on the Songshan–Xindian and Tamsui–Xinyi lines — was not found in
this search. The route length and a headway-by-day-type figure also remain
TBC, and no dated history for the route, nor a stated reason for pairing
Minsheng Community with 南港花園社區 specifically, was found in this search.
