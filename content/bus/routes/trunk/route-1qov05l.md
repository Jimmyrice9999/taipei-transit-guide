---
title: Chongqing Metro Bus / 重慶幹線
summary: Trunk route 重慶幹線 (Chongqing Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 重慶幹線 under 幹線專車.
  - id: ebus-chongqing
    title: Chongqing Metro Bus route schedule
    titleOriginal: 重慶幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 天母–東園 corridor, service span, fare and operator contact.
  - id: zhwikiversity-300
    title: Taipei joint-operation bus route 300
    titleOriginal: 台北聯營公車300路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A300%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Same source as route 300's own page for its 重慶幹線-to-300 renaming claim, reused here to support this route's side of the published naming conflict. Not independently verified against a primary PTO announcement in this search."
---

## Classification and corridor

The official catalogue lists 重慶幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 天母 - 東園, weekday and holiday service 0510–2230, a two-section fare and 大都會客運榮總站 as the service contact.[^ebus-chongqing]

**A naming conflict, published rather than resolved.** This project's own
page for route 300 states that 300 was itself originally named 重慶幹線
before being renamed on 1 June 2017.[^zhwikiversity-300] This currently-
active route also carries the name 重慶幹線, on an entirely different
corridor (天母–東園, not 300's 故宮博物院–小南門). Both identities were
fetched from the same live catalogue in the same run. Whether this is a
name reused for a second,
unrelated trunk corridor after 300's 2017 renaming, or a sign one of the
two sourcing chains is wrong, is not established here — both are published
as found.[^ebus-trunk][^ebus-chongqing]

The confirmed stop sequence runs from 天母 in Beitou, through 石牌/北投 past
榮總, down 重慶北路 through Shilin and Datong, then continues past 西門/北門
into Wanhua, ending near 東園 (Dongyuan).[^tdx-bus] Five confirmed
interchanges are named directly in the stop sequence: 捷運石牌站 (Shipai,
R19), 捷運大橋頭站 (Daqiaotou, O12), 捷運西門站 (served by both the Bannan
Line as BL11 and the Songshan–Xindian Line as G12), 捷運北門站 (Beimen, G13)
and, on a different working, 捷運芝山站 (Zhishan, R17).[^tdx-bus] A further
curated code resolves to Longshan Temple (BL10), consistent with the stop
named 龍山寺(康定) on the return working rather than the station's full
"捷運" form.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Chongqing Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Chongqing Metro Bus (67 stops):** MRT Shipai Sta (Xi’an) -> MRT Shipai Sta (Donghua) -> General Market (MRT Shipai Sta) -> Yongming Police Station -> Veterans General Hospital -> Rongguan New Village (Eastern District of VGH) -> Yongxin Village -> Wufu Temple (Shipai Rd) -> Tianbei Stop -> Tianyu Village -> Tianmu Elementary School -> chifu china -> Tianmu Square -> Tianmu New Village -> Tianmu -> Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> chifu china -> Tianmu Elementary School -> Tianyu Village -> Tianbei Stop -> Wufu Temple (Shipai Rd) -> Yongxin Village -> Rongguan New Village (Eastern District of VGH) -> Taipei Veterans General Hospital (I) -> Veterans General Hospital -> Yongming Police Substation -> General Market (MRT Shipai Sta) -> Shipai Elementary School -> Shipai Rd -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Hudong & Chongqing Intersection -> Shilin Small Claims Court -> Taipei School for the Hearing Impaired -> Jiuquan and Chongqing Intersection -> Minzu and Chongqing Intersection -> Changji & Chongqing Intersection -> MRT Daqiaotou Sta -> Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Chongqing) -> Old Taipei Railway Sta -> Taipei Main Station (Chongqing) -> Taipei Post Office (Futai Street Mansion) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> Wanhua Station -> Juguang Rd Entrance -> Wanda Rd -> Xizang Rd Entrance -> Dechang St Entrance -> Wanda Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

**Chongqing Metro Bus (50 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Wanda Elementary School -> Dechang St Entrance -> Xizang Rd Entrance -> Wanda Rd -> Juguang Rd Entrance -> Wanhua Station -> Longshan Temple (Kangding) -> Zushi Temple (GuiYang) -> Guiyang St -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Sta -> Yanping and Zhengzhou Intersection -> Yanping and Changan Intersection -> Taipei Circle(Niukou St) -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Jiuquan and Chongqing Intersection -> Taipei School for the Hearing Impaired -> Shilin Small Claims Court -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Shipai Rd -> Shipai Elementary School -> General Market (MRT Shipai Sta) -> Yongming Police Station -> Veterans General Hospital -> Rongguan New Village (Eastern District of VGH) -> Yongxin Village -> Wufu Temple (Shipai Rd) -> Tianbei Stop -> Tianyu Village -> Tianmu Elementary School -> chifu china -> Tianmu Square -> Tianmu New Village -> Terminal Station TianMu[^tdx-bus]

**Chongqing Metro Bus (67 stops):** MRT Shipai Sta (Xi’an) -> MRT Shipai Sta (Donghua) -> General Market (MRT Shipai Sta) -> Yongming Police Station -> Veterans General Hospital -> Rongguan New Village (Eastern District of VGH) -> Yongxin Village -> Wufu Temple (Shipai Rd) -> Tianbei Stop -> Tianyu Village -> Tianmu Elementary School -> chifu china -> Tianmu Square -> Tianmu New Village -> Tianmu -> Tianmu -> National Training Institute of Farmers' Organizations -> Tianmu New Village -> Tianmu Square -> chifu china -> Tianmu Elementary School -> Tianyu Village -> Tianbei Stop -> Wufu Temple (Shipai Rd) -> Yongxin Village -> Rongguan New Village (Eastern District of VGH) -> Taipei Veterans General Hospital (I) -> Veterans General Hospital -> Yongming Police Substation -> General Market (MRT Shipai Sta) -> Shipai Elementary School -> Shipai Rd -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Hudong & Chongqing Intersection -> Shilin Small Claims Court -> Taipei School for the Hearing Impaired -> Jiuquan and Chongqing Intersection -> Minzu and Chongqing Intersection -> Changji & Chongqing Intersection -> MRT Daqiaotou Sta -> Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Chongqing) -> Old Taipei Railway Sta -> Taipei Main Station (Chongqing) -> Taipei Post Office (Futai Street Mansion) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> Wanhua Station -> Juguang Rd Entrance -> Wanda Rd -> Xizang Rd Entrance -> Dechang St Entrance -> Wanda Elementary School -> Wholesale Fruit and Vegetable Market -> Huazhong Riverside Park[^tdx-bus]

**Chongqing Metro Bus (50 stops):** Huazhong Riverside Park -> Wholesale Fruit and Vegetable Market -> Wanda Elementary School -> Dechang St Entrance -> Xizang Rd Entrance -> Wanda Rd -> Juguang Rd Entrance -> Wanhua Station -> Longshan Temple (Kangding) -> Zushi Temple (GuiYang) -> Guiyang St -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Sta -> Yanping and Zhengzhou Intersection -> Yanping and Changan Intersection -> Taipei Circle(Niukou St) -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Jiuquan and Chongqing Intersection -> Taipei School for the Hearing Impaired -> Shilin Small Claims Court -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Shipai Rd -> Shipai Elementary School -> General Market (MRT Shipai Sta) -> Yongming Police Station -> Veterans General Hospital -> Rongguan New Village (Eastern District of VGH) -> Yongxin Village -> Wufu Temple (Shipai Rd) -> Tianbei Stop -> Tianyu Village -> Tianmu Elementary School -> chifu china -> Tianmu Square -> Tianmu New Village -> Terminal Station TianMu[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The two 重慶幹線 identities' relationship — successive uses of one name, or a coincidence between two unrelated route pages — is not established in this search and is recorded above as an open conflict.
