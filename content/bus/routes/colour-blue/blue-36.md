---
title: BL36 / 藍36
summary: Blue-line feeder route BL36 (藍36).
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
    note: Lists 藍36 under 捷運藍線接駁公車.
  - id: ebus-bl36
    title: BL36 route schedule
    titleOriginal: 藍36班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112003600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–捷運昆陽站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍36 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止社后 - 捷運昆陽站, weekday service 0520–2330, holiday service 0530–2330, one-section fare and 首都客運汐止一站 as the service contact.[^ebus-bl36]

The confirmed stop sequence runs from 環河市民活動中心 in Xizhi, past 理明
社區/台北奇蹟/大汐止百貨, through 北峰里/金龍國小/木南煤礦/經貿園區, into 東湖/明湖
past 捷運葫洲站(康寧大學), then along 民權隧道/國防醫學大學/福華商場, ending at 捷運
昆陽站.[^tdx-bus] Two confirmed interchanges are recorded in the curated
stop-ID join set: Kunyang (BL21) and Huzhou (BR21).[^tdx-bus] TDX records
three named subroutes — 藍36, 藍36去程半 and 藍36返程半 — the outbound and
return half-workings sharing the same stop counts as the full route in
this snapshot.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BL36; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B36 (36 stops):** Huanhe Community Center -> Huanhe Village -> Pandisk Technology Co -> Dashu Wood Co -> Beifeng Elementary School -> LiMing Community -> Taipei Miracle -> Bokeli Day Care Center -> Shenghuo Daguo Community -> Renchingwei Xiaozhen Community -> Kangfu Village -> FuDe Borough -> Daxizhi Department Stores -> Shidian Community -> Beifeng Village(Kangning St) -> Jinlong Elementary School(Kangning St) -> Munan Coal Mine -> Economic & Trade Park -> Beishan Village -> Donghu Elementary School -> Wufen Community -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> Minquan Tunnel -> Minquan Tunnel 2 -> Minquan E Rd Sec 6 (Minquan Dunpin) -> National Defense Medical University -> Fuhua Market -> Huxing -> Shangwanzi -> Chenggong Rd Sec 2(Interchange) -> Shitan Park (Chenggong) -> Nangang Police Dist (Xiangyang) -> Nangang High School -> MRT Kunyang[^tdx-bus]

**B36 (34 stops):** MRT Kunyang -> Nangang High School -> Nangang Police Dist (Xiangyang) -> Shitan Park (Chenggong) -> Chenggong Rd Sec 2(Interchange) -> Shangwanzi -> Huxing -> Fuhua Market -> Taipei Tennis Center -> Minquan E Rd Sec 6 (Minquan Dunpin) -> Minquan Tunnel 2 -> Minquan Tunnel -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Wufen Community -> Donghu Elementary School -> Beishan Village -> Economic & Trade Park -> Munan Coal Mine -> Jinlong Elementary School(Kangning St) -> Beifeng Village(Kangning St) -> Shidian Community -> Daxizhi Department Stores -> FuDe Borough -> Kangfu Village -> Shenghuo Daguo Community -> Bokeli Day Care Center -> Taipei Miracle -> Liming Community -> Beifeng Elementary School -> Dashu Wood Co -> Pandisk Technology Co -> Huanhe Village -> Huanhe Community Center[^tdx-bus]

**B36 (36 stops):** Huanhe Community Center -> Huanhe Village -> Pandisk Technology Co -> Dashu Wood Co -> Beifeng Elementary School -> LiMing Community -> Taipei Miracle -> Bokeli Day Care Center -> Shenghuo Daguo Community -> Renchingwei Xiaozhen Community -> Kangfu Village -> FuDe Borough -> Daxizhi Department Stores -> Shidian Community -> Beifeng Village(Kangning St) -> Jinlong Elementary School(Kangning St) -> Munan Coal Mine -> Economic & Trade Park -> Beishan Village -> Donghu Elementary School -> Wufen Community -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> Minquan Tunnel -> Minquan Tunnel 2 -> Minquan E Rd Sec 6 (Minquan Dunpin) -> National Defense Medical University -> Fuhua Market -> Huxing -> Shangwanzi -> Chenggong Rd Sec 2(Interchange) -> Shitan Park (Chenggong) -> Nangang Police Dist (Xiangyang) -> Nangang High School -> MRT Kunyang[^tdx-bus]

**B36 (34 stops):** MRT Kunyang -> Nangang High School -> Nangang Police Dist (Xiangyang) -> Shitan Park (Chenggong) -> Chenggong Rd Sec 2(Interchange) -> Shangwanzi -> Huxing -> Fuhua Market -> Taipei Tennis Center -> Minquan E Rd Sec 6 (Minquan Dunpin) -> Minquan Tunnel 2 -> Minquan Tunnel -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Wufen Community -> Donghu Elementary School -> Beishan Village -> Economic & Trade Park -> Munan Coal Mine -> Jinlong Elementary School(Kangning St) -> Beifeng Village(Kangning St) -> Shidian Community -> Daxizhi Department Stores -> FuDe Borough -> Kangfu Village -> Shenghuo Daguo Community -> Bokeli Day Care Center -> Taipei Miracle -> Liming Community -> Beifeng Elementary School -> Dashu Wood Co -> Pandisk Technology Co -> Huanhe Village -> Huanhe Community Center[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍36 or its
half-working subroutes was found in this search. Whether the half-workings
actually turn back partway, or are simply duplicate records for the full
route, could not be determined from the stop-sequence data alone, since
both list the same stop counts as the full working — the same open
question this project's trunk-route coverage found for 民生幹線's own half-
working subroutes.
