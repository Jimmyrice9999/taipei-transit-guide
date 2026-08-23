---
title: BL23 / 藍23
summary: Blue-line feeder route BL23 (藍23).
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
    note: Lists 藍23 under 捷運藍線接駁公車.
  - id: ebus-bl23
    title: BL23 route schedule
    titleOriginal: 藍23班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–捷運昆陽站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍23 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止社后 - 捷運昆陽站, weekday service 0550–2330, holiday service 0600–2330, one-section fare and 光華巴士北峰站 as the service contact.[^ebus-bl23]

The confirmed stop sequence runs from 福德二路 in Xizhi, through 理明社區/
台北奇蹟/生活大國社區, then via 樟江大橋/半島花園/樟樹國小 — a third distinct
street path through the 社后/樟樹 area, alongside 藍21 and 藍21副's own two
paths — before joining the same 橫科/南港展覽館 corridor and continuing past
南港 into 昆陽.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Kunyang (BL21) and Taipei Nangang Exhibition
Center, a Bannan–Wenhu interchange (BL23/BR24).[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL23; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL23 (34 stops):** Fude 2nd Rd -> Pandisk Technology Co -> Dashu Wood Co -> Beifeng Elementary School -> LiMing Community -> Taipei Miracle -> Bokeli Day Care Center -> Shenghuo Daguo Community -> Renchingwei Xiaozhen Community -> Fude 1st Rd Entrance -> Bojue Village -> Zhangjiang Bridge -> Zhangjiang Bridge 2 -> Fuan Temple -> Houde Village -> Zhangshu Elementary School -> Zhongxiao Village -> Zhangshu 1st Rd Intersection -> United Daily News Group -> Zhang Shu Wan -> South Zhang Shu River Band -> TIEN LIANG SATELLITE TV -> Hengke -> MRT Nangang Exhibition Hall (Nangang Rd) -> Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Nangang Senior High School -> MRT Kunyang[^tdx-bus]

**BL23 (32 stops):** MRT Kunyang -> Nangang Senior High School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> MRT Nangang Exhibition Hall (Nangang Rd) -> Hengke -> Fusin Hotel -> South Zhang Shu River Band -> Zhang Shu Wan -> Zhangshu 1st Rd Intersection -> Zhongxiao Village -> Zhangshu Elementary School -> Houde Village -> Fuan Temple -> Zhangjiang Bridge 2 -> Zhangjiang Bridge -> Bojue Village -> Fude 1st Rd Entrance -> Kangfu Village -> Shenghuo Daguo Community -> Bokeli Day Care Center -> Taipei Miracle -> Liming Community -> Beifeng Elementary School -> Dashu Muye -> Pandisk Technology Co -> Fude 2nd Rd[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] With 藍21, 藍21副 and 藍23 all sharing the same 汐止社后 origin area and the
same 光華巴士 operator but three distinct street paths through it, why the
company runs three separate routes rather than one with variants was not
found in this search. The route length and a headway-by-day-type figure
also remain TBC, and no dated history for the route or its relationship to
its two siblings was found in this search, including which of the three
routes, if any, was the original before the others were added.
