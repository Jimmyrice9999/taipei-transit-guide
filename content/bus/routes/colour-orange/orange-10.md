---
title: O10 / 橘10
summary: Orange-line feeder route O10 (橘10).
updated: 2026-08-19
line: O
facts:
  - label: Service class
    value: MRT orange-line feeder
    source: ebus-orange
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
  - id: ebus-orange
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 橘10 under 捷運橘線接駁公車.
  - id: ebus-o10
    title: O10 route schedule
    titleOriginal: 橘10班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 泰山–蘆洲 corridor, six weekday departures and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 橘10 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 泰山 - 蘆洲, weekday-only service 0600–1820 with six departures (0600, 0700, 0810, 1540, 1650, 1820), no holiday service, one-section fare and 指南客運泰山站 as the service contact.[^ebus-o10]

The confirmed stop sequence links two New Taipei districts that do not
otherwise share an obvious corridor: it starts near 泰山站 in Taishan, passes
黎明技術學院 (Lee-Ming Institute of Technology) and 泰山國中/泰山國小, crosses
into 五股 past 憲兵學校 and 五股國小, then continues into 蘆洲 to end near
民權路口.[^tdx-bus] Two confirmed interchanges lie toward the 蘆洲 end:
捷運三民高中站 (Sanmin Senior High School, O53) and 捷運蘆洲站 (Luzhou,
O54).[^tdx-bus] With only six weekday departures and no holiday service at
all, it reads as a commuter-hours-only connection rather than an all-day
feeder — the departures cluster at the start and end of a working day
(0600, 0700, 0810, then 1540, 1650, 1820), consistent with a route built
around shift patterns at 黎明技術學院 or the 五股/蘆洲 industrial
area.[^ebus-o10] Its 指南客運泰山站 operator contact is a Taishan dispatch
point distinct from every other named contact in this project's
colour-orange coverage, which otherwise cluster around Sanchong, Wugu and
Luzhou.[^ebus-o10]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O10; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O10 (37 stops):** Taishan  Sta(Taishan Rd) -> Leeming Institute Of Technology -> Shanjiao Bridge -> Taishan Jr High School -> Military Police Training Center -> Taishan Elementary School -> Taishan Post Office -> Mingzhi and Heping Intersection -> Dake Bridge -> Far Eastern Logistic Co -> Deyin Elementary School -> Mingde Rd Entrance -> Maoshang Public Housing -> Zhulin Road -> Zhushun General Temple -> Apartments for the Elderly -> Ziqiang Rd Entrance -> Ming Ri Shi Jie -> Military Police Academy -> Penglaikeng -> Wugu Elementary School -> Wugu Service Center -> Parking Lot(Wugu Market) -> Zhongyuan & Changan Intersection -> Zhengyi Park -> Changrong & Zhongyuan Intersection -> Changrong & Guangming Intersection -> Yongping Market -> Changrong Rd -> MRT Luzhou Sta -> Renai Elementary School -> Renai St Entrance -> Minzu & Minyi Intersection -> Shueihe Village -> EStopName -> EStopName -> Minquan Rd Entrance[^tdx-bus]

**O10 (33 stops):** EStopName -> EStopName -> National Open Univ(Sanmin Rd) -> Minzu Rd Entrance -> MRT Luzhou Sta -> Changrong Rd -> Yongping Market -> Changrong & Guangming Intersection -> Changrong & Zhongyuan Rd -> Changrong & Guangming Intersection -> Changrong & Zhongyuan Intersection -> Parking Lot(Wugu Market) -> Zhongyuan & Changan Intersection -> Wugu Elementary School -> Penglaikeng -> Wugu Elementary School -> Penglaikeng -> Ziqiang Rd Entrance -> Apartments for the Elderly -> Zhushun General Temple -> Zhulin Road -> Maoshang Public Housing -> Mingde Rd Entrance -> Deyin Elementary School -> Ming Ri Shi Jie -> Deyin Elementary School -> Mingzhi and Heping Intersection -> Taishan Post Office -> Taishan Station -> Taishan Post Office -> Taishan Elementary School -> Military Police Training Center -> Leeming Institute Of Technology[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
