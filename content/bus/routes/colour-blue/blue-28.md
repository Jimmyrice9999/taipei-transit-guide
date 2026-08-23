---
title: BL28 / 藍28
summary: Blue-line feeder route BL28 (藍28).
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
    note: Lists 藍28 under 捷運藍線接駁公車.
  - id: ebus-bl28
    title: BL28 route schedule
    titleOriginal: 藍28班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 景明街口–東園 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍28 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 景明街口 - 東園, weekday and holiday service 0550–0000, one-section fare and 欣欣客運景德站 as the service contact.[^ebus-bl28]

The confirmed stop sequence runs from 景明街口 near 興隆路, past 師大分部/捷運
公館站/台電大樓/捷運古亭站, through 南福板溪/植物園/三元街, then along 和平中華路/
昆明街 past a stop literally named 捷運龍山寺站, before ending in Wanhua at
東園 near 果菜市場.[^tdx-bus] Four
confirmed interchanges are recorded in the curated stop-ID join set:
Longshan Temple (BL10), Gongguan (G07), Taipower Building (G08) and
Guting, a Songshan–Xindian/Zhonghe–Xinlu interchange (G09/O05).[^tdx-bus]
TDX records a second subroute, 藍28經環南市場, detouring via 環南市場.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BL28; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B28 (27 stops):** Jingming St Entrance -> Changan Elementary School (Xinglong) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> MRT Taipower Building Sta -> Roosevelt and Pucheng Intersection -> Roosevelt and Kinmen St Intersection -> MRT Guting Sta (Roosevelt) -> MRT Guting Sta (Hangzhou) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Sanyuan St -> Longxing Temple -> Sanyuan and Nanhai Intersection -> Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> Dali Fushih -> Fashion Institute of Taipei -> Huajiang High School (Xiyuan) -> Jufu Temple -> Baode Village -> Dongyuan Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

**B28 (25 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Wanda Elementary School -> Dechang St Entrance -> Wanhua Junior High School -> Huajiang High School (Xizang) -> Huajiang High School (Xiyuan) -> Fashion Institute of Taipei -> Dali Fushih -> MRT Longshan Temple Sta -> Kunming St Entrance -> Heping & Zhonghua Intersection -> Sanyuan and Nanhai Intersection -> Longxing Temple -> Sanyuan St -> Heping W Rd Sec 1 -> Nanfu Banxi (Nanchang Park) -> Roosevelt and hfu Kinmen Lukou -> Roosevelt and Pucheng Intersection -> MRT Taipower Building Sta -> Taipower Building -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Changan Elementary School (Xinglong) -> Jingming St Entrance[^tdx-bus]

**B28 (30 stops):** Jingming St Entrance -> Changan Elementary School (Xinglong) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> Taipower Building -> MRT Taipower Building Sta -> Roosevelt and Pucheng Intersection -> Roosevelt and Kinmen St Intersection -> MRT Guting Sta (Roosevelt) -> MRT Guting Sta (Hangzhou) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Sanyuan St -> Longxing Temple -> Sanyuan and Nanhai Intersection -> Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> Dali Fushih -> Fashion Institute of Taipei -> Huajiang High School (Xiyuan) -> Xiyuan Rd Sec 2 -> Huannan Market -> Huannan Market (Xizang) -> Jufu Temple -> Baode Village -> Dongyuan Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

**B28 (25 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Wanda Elementary School -> Dechang St Entrance -> Wanhua Junior High School -> Huajiang High School (Xizang) -> Huajiang High School (Xiyuan) -> Fashion Institute of Taipei -> Dali Fushih -> MRT Longshan Temple Sta -> Kunming St Entrance -> Heping & Zhonghua Intersection -> Sanyuan and Nanhai Intersection -> Longxing Temple -> Sanyuan St -> Heping W Rd Sec 1 -> Nanfu Banxi (Nanchang Park) -> Roosevelt and hfu Kinmen Lukou -> Roosevelt and Pucheng Intersection -> MRT Taipower Building Sta -> Taipower Building -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Changan Elementary School (Xinglong) -> Jingming St Entrance[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍28 or its 環南市場 detour was found in this search, nor
any stated rule for which departures take the detour and which run the
plain 藍28 subroute. Whether the 環南市場 detour predates or postdates the
plain routing, and what prompted adding a second subroute rather than
simply rerouting the whole line, is likewise unstated on the primary
schedule page and was not otherwise found in this search.
