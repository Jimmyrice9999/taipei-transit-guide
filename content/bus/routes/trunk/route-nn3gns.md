---
title: Xinyi Metro Bus / 信義幹線
summary: Trunk route 信義幹線 (Xinyi Metro Bus).
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
    note: Lists 信義幹線 under 幹線專車.
  - id: ebus-xinyi
    title: Xinyi Metro Bus route schedule
    titleOriginal: 信義幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運昆陽站–臺北車站 corridor, service span, fare and operator contact.
  - id: zh-taipei-bus
    title: Taipei city buses
    titleOriginal: 臺北市市區公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市市區公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Secondary source naming 信義幹線 and 敦化幹線 as the trunk network's original two named corridors, assembled from existing joint-operation routes before the wider 2017-18 renaming programme this project's joint-operation network page records. No Public Transport Office publication found in this project's research states the 信義幹線 name's own origin directly."
---

## Classification and corridor

The official catalogue lists 信義幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 捷運昆陽站 - 臺北車站, weekday service 0530–2230, holiday service 0540–2230, one-section fare and 首都客運安康站 as the service contact.[^ebus-xinyi]

A secondary source names 信義幹線, alongside 敦化幹線, as one of the trunk
network's original two named corridors, assembled from existing routes
before the wider 2017-18 renaming this project's joint-operation network
page documents.[^zh-taipei-bus]

The confirmed stop sequence is the most MRT-connected route in this
project's entire trunk-route coverage, running the length of 信義路 through
Nangang, Xinyi and central Taipei to 臺北車站.[^tdx-bus] Ten confirmed
interchange points are named directly in the stop sequence, among them
捷運昆陽站 (Kunyang, BL21), 捷運後山埤站 (Houshanpi, BL20), 捷運象山站
(Xiangshan, R02), 捷運台北101/世貿站 (Taipei 101/World Trade Center, R03),
捷運信義安和站 (Xinyi Anhe, R04), 捷運大安站 (served by both the Wenhu Line as
BR09 and the Tamsui–Xinyi Line as R05), 捷運大安森林公園站 (Daan Park, R06)
and 捷運東門站 (served by both the Zhonghe–Xinlu Line as O06 and the
Tamsui–Xinyi Line as R07).[^tdx-bus] Three further curated codes resolve to
Taipei Main Station (BL12/R10) and Dongmen again, not all directly named in
the stop sequence's own abbreviated text.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Xinyi Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Xinyi Metro Bus (35 stops):** ADATA Technology Headquarters Building -> Changshou Pumping Station -> Tanmei Green -> Nangang Police Dist (Xiangyang) -> Nangang High School -> MRT Kunyang -> Army Logistics Command -> Guohua New Village -> TCUH, Zhongxiao Branch -> Hexing Circle -> Xiehe Youde High School -> Yucheng Park -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> GuoYe Li -> Dormitory of National Tax Administration of Taipei -> MRT Xianshan Sta -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (XinYi) -> Xinyi & Guangfu Intersection -> Xinyi & Tonghua Roads -> MRT XinYi-AnHe Sta (Xinyi) -> XinYi & Dunhua Intersection -> XinYi & Daan Intersection -> MRT Daan Sta (Xinyi) -> HSNU -> XinYi & JianGuo Intersection -> MRT Daan Park Sta -> Xinyi & Xinsheng Intersection -> XinYi-YongKang Intersection -> MRT Dongmen Sta -> Xinyi & Hangzhou Intersection -> CKS Memorial Hall -> MRT NTU Hospital Station[^tdx-bus]

**Xinyi Metro Bus (37 stops):** Taipei Main Sta (Qingdao) -> NTU Hospital -> CKS Memorial Hall -> Xinyi & Hangzhou Intersection -> MRT Dongmen Sta -> Xinyi & Yongkang Intersection (MRT Dongmen Sta) -> Xinyi & Xinsheng Intersection -> MRT Daan Park Sta -> XinYi & JianGuo Intersection -> MRT Daan Sta (Xinyi) -> XinYi & DaAn Intersection -> Xinyi & Dunhua Intersection -> MRT XinYi-AnHe Sta (Xinyi) -> Xinyi & Tonghua Roads -> Xinyi & Guangfu Intersection -> MRT Taipei 101 / World Trade Center Sta (XinYi) -> Xinyi and Songren Intersection (Xinyi) -> MRT Xianshan Sta -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Xinyi) -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Zhongxing Village -> Yucheng Park -> Xiehe Youde High School -> MRT Houshanpi Sta(Zhongxiao) -> TCUH, Zhongxiao Branch -> Guohua New Village -> Army Logistics Command -> MRT Kunyang -> Nangang High School -> Nangang Police Dist (Xiangyang) -> Shitan Park -> Tanmei Green -> Changshou Pumping Station -> ADATA Technology Headquarters Building[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
