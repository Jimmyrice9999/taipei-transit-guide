---
title: Dunhua Metro Bus / 敦化幹線
summary: Trunk route 敦化幹線 (Dunhua Metro Bus).
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
    note: Lists 敦化幹線 under 幹線專車.
  - id: ebus-dunhua
    title: Dunhua Metro Bus route schedule
    titleOriginal: 敦化幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 麟光新村–榮總 corridor, service span, fare and operator contact.
  - id: zh-taipei-bus
    title: Taipei city buses
    titleOriginal: 臺北市市區公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市市區公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Secondary source naming 信義幹線 and 敦化幹線 as the trunk network's original two named corridors, assembled from existing joint-operation routes before the wider 2017-18 renaming programme this project's joint-operation network page records. No Public Transport Office publication found in this project's research states the 敦化幹線 name's own origin directly."
---

## Classification and corridor

The official catalogue lists 敦化幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 麟光新村 - 榮總, weekday and holiday service 0510–2230, a two-section fare and 大都會客運麟光站 as the service contact.[^ebus-dunhua]

A secondary source names 敦化幹線, alongside 信義幹線, as one of the trunk
network's original two named corridors — assembled from existing routes
before the wider 2017-18 renaming this project's joint-operation network
page documents, rather than a later conversion of a single numbered or
colour-prefixed route.[^zh-taipei-bus]

The confirmed stop sequence runs from 麟光站 in Wenshan, along 敦化南/北路
through Da'an and Songshan, then up 新生北路/中山北路 through Zhongshan into
Shilin and Beitou, ending near 榮總 (Taipei Veterans General
Hospital).[^tdx-bus] Five confirmed interchanges are named directly in the
stop sequence: 麟光站 (Linguang, BR06), 捷運六張犁站 (Liuzhangli, BR07), 捷運
忠孝敦化站 (Zhongxiao Dunhua, BL16), 中山國小(新生) (Zhongshan Elementary
School, O10) and, on the return working, 捷運劍潭站 (Jiantan, R15) and 捷運
士林站 (Shilin, R16).[^tdx-bus] A further curated code resolves to Zhongshan
Junior High School (BR12), not directly named in the stop sequence's own
text.[^tdx-bus] TDX records 敦化幹線 as a single subroute with no separate holiday,
half-working or detour variant, unlike several other trunk routes in this
project's coverage that carry two or more.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Dunhua Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Duhua Metro Bus (41 stops):** Linguang -> Lizhong Market -> Fuyang St Entrance -> MRT Liuzhangli Sta (Heping) -> Heping and Anhe intersection -> Chenggong Public Housing -> Daan Junior High School -> Xinyi & Dunhua Intersection -> Renai Junior High School(Institute of Diplomacy) -> Anhe-Dunhua Intersection -> MRT ZhongSiao-DunHua Station -> Civic Boulevard Entrance -> Municipal　gymnasiumn -> Taipei Arena -> Chang-Gung Memorial Hospital -> Fujin St Entrance -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> Zhongshan Elementary School -> Daojiang High School of Nursing and Home Economics -> Minzu E Rd Entrance -> Jiantan -> Mingchuan U -> Taiwan Power Company North Taipei District Office -> Chiang Kai-Shek Shilin Residence (Zhongshan) -> Fulin Bridge -> Zhongcheng park -> Yunong Elementary School -> Lanya New Village -> Lanya Junior High School -> Tianmu Baseball Stadium (Zhongcheng) -> Taipei Municipal School of Special Education -> Sanyu Temple -> Qifu Mansion -> QiSian Building -> Veterans General Hospital I -> Headquarters, First Constabulary[^tdx-bus]

**Duhua Metro Bus (45 stops):** Veterans General Hospital -> Cheng Hsin Park -> Qixian Mansion -> Qifu Mansion -> Sanyu Temple -> Taipei Municipal School of Special Education -> Tianmu Baseball Stadium (Zhongcheng) -> Lanya Junior High School -> Lanya New Village -> Yunong Elementary School -> Zhongcheng park -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> Fulin Bridge -> MRT Shilin Sta (Zhongshan ) -> Taiwan Power Company North Taipei District Office -> Mingchuan U -> MRT Jiantan Sta (Zhongshan) -> Jiantan -> Minzu E Rd Entrance -> Daojiang High School of Nursing and Home Economics -> Zhongshan Elementary School -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> Minquan and Fuxing Intersection -> Minquan and Dunhua Intersection -> Minquan E Rd Entrance -> Minsheng & Dunhua Intersection -> ChangChun-DunHua Intersection -> Taipei Arena -> Bade & Dunhua Intersection -> Civic Blvd and Dunhua Intersection -> ZhongSiao-DunHua Intersection -> Renai and Dunhua Intersection -> Dunhua & Xinyi Intersection -> Daan Junior High School -> Chenggong Public Housing -> Fengchu Park -> Heping and Anhe intersection -> MRT Liuzhangli Sta (Heping) -> Fuyang St Entrance -> Lizhong Market -> MRT Linguang Sta -> Linguang[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
