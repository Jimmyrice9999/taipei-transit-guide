---
title: O13 / 橘13
summary: Orange-line feeder route O13 (橘13).
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
    note: Lists 橘13 under 捷運橘線接駁公車.
  - id: ebus-o13
    title: O13 route schedule
    titleOriginal: 橘13班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 三重–五股 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘13 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 三重 - 五股, weekday service 0530–2200, holiday service 0600–2200, one-section fare and 首都客運三重一站 as the service contact.[^ebus-o13]

The confirmed stop sequence runs from 吉祥街口 in Sanchong, past 捷運徐匯中學站
and through 蘆洲's 溪墘/蘆洲監理站 area, then into 五股 to end at 五福路.[^tdx-bus] The one confirmed interchange is 捷運徐匯中學站 (St. Ignatius High
School, O52), reached partway along rather than at either
terminus.[^tdx-bus] Both directions run the same all-day span, weekday and
holiday alike, unlike several shorter commuter-hours routes elsewhere in
this project's colour-orange coverage.[^ebus-o13] Its return working also
adds a short loop through 五股服務社 and 五股區公所 near the 五福路 terminus
that the outbound working does not serve.[^tdx-bus] Its 首都客運三重一站
contact distinguishes it from 橘12's 首都客運二重站 — the same operator
running two separate Sanchong-area feeders from two named dispatch
points.[^ebus-o13] Its 21-stop outbound and 22-stop return workings differ
by only one stop count, but the actual detour above means the two are not
simple mirror images of the same road.[^tdx-bus] Its single subroute
contrasts with 橘20's two named variants and 橘19/橘19副's separate route
records, a simpler structure than several sibling feeders in this
batch.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O13; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O13 (21 stops):** Jixiang St Entrance -> New Taipei Senior High School -> Fenziwei -> Jixian Rd -> Nijialagua Park -> MRT St Ignatius High School Station (Jixian Rd) -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Station -> Heping Rd Entrance -> Zhenghe St Entrance -> Changrong & Guanghua Intersection -> Zhengyi Park -> Zhongyuan & Changan Intersection -> Zhongxing Rd Sec 3 -> Parking Lot(Wugu Market) -> Bank SinoPac -> Community Activity Center -> Daoyi Bridge -> Wufu Rd[^tdx-bus]

**O13 (22 stops):** Wufu Rd Ring -> Wufu Rd -> Daoyi Bridge -> Community Activity Center -> Bank SinoPac -> Wugu Services Society -> Wugu District Office(Wugu Market) -> Zhongyuan & Changan Intersection -> Zhengyi Park -> Changrong & Guanghua Intersection -> Zhenghe St Entrance -> Heping Rd Entrance -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> NiJiaLaGua Park -> Jixian Rd -> Wuhua St Entrance -> Carrefour -> New Taipei Senior High School -> Jixiang Rd Intersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
