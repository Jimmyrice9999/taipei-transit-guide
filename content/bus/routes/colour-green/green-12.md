---
title: G12 / 綠12
summary: Green-line feeder route G12 (綠12).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠12 under 捷運綠線接駁公車.
  - id: ebus-g12
    title: G12 route schedule
    titleOriginal: 綠12班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 坪林–捷運新店站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠12 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 坪林 - 捷運新店站, weekday and holiday service 0600–1915, a two-section fare and 新店客運碧潭站 as the service contact.[^ebus-g12]

The confirmed stop sequence is the longest and most rural in this project's
colour-green coverage: it starts at 坪林站, the tea-growing township deep in
New Taipei's mountains, calling at 坪林遊客中心 (the Pinglin Tea Museum visitor
centre) before threading nearly sixty stops of mountain hamlets — 石空里,
棲霞山, 十股寮, 銀河洞 among them — down through 青潭 to 新店 (Xindian), ending
at 捷運新店站.[^tdx-bus] Despite that length, only the Xindian terminus itself
is a confirmed MRT interchange (G01) — every intermediate stop is outside
the curated join set.[^tdx-bus] The two-section fare marks it as covering a
genuinely longer distance than the flat one-section feeders that dominate
this project's colour-green coverage, consistent with a route running the
full distance from a mountain township to the metro rather than a short
last-mile connection.[^ebus-g12] The route's own stop sequence names 銀河洞
(Yinhe Cave, a waterfall and temple site) and 國史館 (the Academia Historica's
branch archive) along its return leg — landmarks that appear on no other
route in this project's colour-green coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G12 Pinglin station (58 stops):** Pinglin station -> Pengtai Tea merchant -> Pinglin Visitor Center -> Shuiliujiao -> Sewage Treatment Plant -> Lingjiaokeng -> Huangjupiliao -> Wantan Rd -> Cuku Rd -> Cujuekeng -> Shikong Village -> Pinglin Visitor Center -> Shikongzi -> Temporary Stop 1 -> Daan -> Yongan Elementary School -> Shuidiliao -> Dagemen Hiking Trail Entrance -> Qixia Mountain -> Patrol Station -> Xiaojingualiao -> Shisangu -> Fenglouzui -> Shiguliao -> Yunhai Elementary school -> Xiaogetou -> Tea Research and Extension Station -> Tianming temple -> Erge Park -> Fudi Village -> Ganyuan -> Nanbangliao -> Taiqing Temple -> Xiandi Temple -> Fanshuliao -> Shiliufenzi -> Fuxing Temple -> Shifenzi -> Wanshan Temple -> Liufenzi -> Temporary Stop -> Shuangkeng -> Shuangfong Elementary school -> Beiyi Rd Sec 3 -> Yinhedong -> Zhongshen Bridge -> Daqijiao -> Qingtan Maintenance Plant -> Youzheng Bridge -> Qingtan Elementary School -> Qingtan New Village -> Training Center of Land Bank -> Qingtan -> Qingtan (I) -> Xindian Elementary School -> Wenshan Junior High School -> Bitan -> MRT Xindian Station[^tdx-bus]

**G12 	 MRT Xindian Sta(Xindian Rd) (59 stops):** MRT Xindian Station -> Bitan -> Wenshan Junior High School -> Xindian Elementary School -> Qingtan(I) -> Nanqing Temple -> Qingtan( Beiyi Rd) -> Training Center of Land Bank -> Qingtan New Village -> Qingtan Elementary School -> Qingtan Elementary School -> Youzheng Bridge -> Qingtan Maintenance Plant -> Daqijiao -> Academia Historica -> Yinhedong -> Beiyi Rd Sec 3 -> Shuangfong Elementary school -> Shuangkeng -> Temporary Stop -> Liufenzi -> Wanshan Temple -> Shifenzi -> Fuxing Temple -> Shiliufenzi -> Fanshuliao -> Xiandi Temple -> Taiqing Temple -> Nanbangliao -> Ganyuan -> Fudi Village -> Laoliao -> Tianming temple -> Tea Research and Extension Station -> Xiaogetou -> Yunhai Elementary school -> Shiguliao -> Fenglouzui -> Shisangu -> Xiao Jingualiao -> Patrol Station -> Qixia Mountain -> Dagemen Hiking Trail Entrance -> Shuidiliao -> Yongan Elementary School -> Daan -> Temporary Stop 1 -> Shikongzi -> Shikong Village -> Cujuekeng -> Cuku Rd -> Tam Bay -> Huangjupiliao -> Lingjiaokeng -> Sewage treatment plant -> Shuiliujiao -> Pinglin Visitor Center -> Pengtai Tea merchant -> Pinglin station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
