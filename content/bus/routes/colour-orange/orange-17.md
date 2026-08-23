---
title: O17 / 橘17
summary: Orange-line feeder route O17 (橘17).
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
    note: Lists 橘17 under 捷運橘線接駁公車.
  - id: ebus-o17
    title: O17 route schedule
    titleOriginal: 橘17班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新莊中原路–捷運三民高中站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘17 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 新莊中原路 - 捷運三民高中站, weekday service 0540–2000, holiday service 0800–1900, one-section fare and 大都會客運新莊站 as the service contact.[^ebus-o17]

The confirmed stop sequence starts at 中央昌平街口 in Xinzhuang, runs through
新北產業園區 (the New Taipei Industrial Park) past its own MRT/light-rail
station, then continues into 蘆洲 to end at 捷運三民高中站.[^tdx-bus] Three
confirmed interchanges lie along the way: 捷運新北產業園區站 — genuinely served
by both the Airport MRT (A3) and the Circular Line (Y20) — and 捷運蘆洲站
(Luzhou, O54) and 捷運三民高中站 (Sanmin Senior High School, O53) toward the
end.[^tdx-bus] That A3/Y20 pairing is a real interchange between the Airport
MRT and the Circular Line — the same pairing this project's coverage also
confirms on 橘21, which passes through the same industrial park from the
迴龍 direction.[^tdx-bus] Weekday and holiday hours differ noticeably here,
0540–2000 against a shorter 0800–1900, unlike several routes in this group
that publish the same span both day types.[^ebus-o17] Its 大都會客運新莊站
contact is a different 大都會客運 dispatch point from the 大都會客運蘆洲站
contact 橘18 and 橘18福隆路 share, the same operator running separate feeders
from separate stations rather than one shared depot.[^ebus-o17]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for O17; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**O17 (44 stops):** Zhongyang & Changping Intersection -> Vision of Zhonggang Main Drainage -> MRT Xinzhuang Dubduxin Sta(Zhongyang Rd) -> Zhongping Rd 1 -> Zhongyuan Rd -> Zhongyuan Village -> Zhongyuan Rd 1 -> Touqian Junior High School(Zhongyuan Rd) -> Touqian Junior High School -> Siyuan Rd & New Taipei Blvd Intersection -> MRT New Taipei Industrial Park Sta -> Wugong and Fuhui Intersection -> Management Center -> Standard Factory -> Wuquan 3rd & Wugong Intersection -> Wuquan 3rd Rd -> Laborers Activity Center -> Bourgeois Exhibit Center -> Shixiang -> Wuquan & Wugong 3nd Intersection -> Jixiang Building -> Xinghua Elementary School -> Gengliao Elementary School -> Datong New Village -> Yongan Village -> Jiuqiong St Entrance -> Jiuqiong Temple -> Wanquan Market -> Changrong & Guanghua Intersection -> Changrong & Zhongyuan Intersection -> Changrong & Guangming Intersection -> Yongping Market -> Changrong Rd -> MRT Luzhou Sta -> Renai Elementary School -> Renai St Entrance -> Minzu & Minyi Intersection -> Shueihe Village -> Loucuo 1 -> Xinyi Village -> Yuqing Temple -> Daqing Community -> Lujiang Elementary School(Minzu Rd) -> MRT Sanmin Senior High School[^tdx-bus]

**O17 (43 stops):** MRTSanMin High School -> Daqing Community -> Yuqing Temple -> Xinyi Village -> Loucuo 1 -> Minzu & Minyi Intersection -> Renai St Entrance -> Renai Elementary School -> Minzu Rd Entrance -> MRT Luzhou Sta -> Changrong Rd -> Yongping Market -> Changrong & Guangming Intersection -> Changrong & Zhongyuan Rd -> Changrong & Guanghua Intersection -> Wanquan Market -> Jiuqiong Temple -> Jiuqiong St Intersection -> Yongan Village -> Datong New Village -> Gengliao Elementary School -> Xinghua Elementary School -> Jixiang Building -> Wuquan & Wugong 2nd Intersection -> Wuquan & Wugong 3nd Intersection -> Shixiang -> Industry and Commerce Exhibit Center -> Laborers Activity Center -> Wuquan 3rd Rd -> Wuquan 3rd & Wugong Intersection -> Standard Factory -> Management Center -> MRT New Taipei Industrial Park Sta -> Siyuan Rd & New Taipei Blvd Intersection -> Touqian Junior High School -> Touqian Junior High School(Zhongyuan Rd) -> Zhongyuan Rd 1 -> Zhongyuan Village -> Zhongyuan Rd -> Zhongyuan & Zhongping Intersection -> Xinzhuang Joint Office Tower Executive Yuan -> MRT Xinzhuang Dubduxin Sta(Zhongyang Rd) -> Vision of Zhonggang Main Drainage[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
