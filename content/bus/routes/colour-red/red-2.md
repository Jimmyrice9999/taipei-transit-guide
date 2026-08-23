---
title: R2 / 紅2
summary: Red-line feeder route R2 (紅2).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅2 under 捷運紅線接駁公車.
  - id: ebus-r2
    title: R2 route schedule
    titleOriginal: 紅2班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止社后–捷運圓山站 corridor, service span, one-section fare and 光華巴士北峰站 contact.
---

## Classification and corridor

The official catalogue lists 紅2 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 汐止社后 - 捷運圓山站, weekday and holiday service 0600–2300, one-section fare and 光華巴士北峰站 as the service contact.[^ebus-r2]

At 44-45 stops each way, the confirmed stop sequence is one of the longest
in this batch: from 社后消防隊 in Xizhi, through 東湖/明湖 past a stop
literally named 捷運內湖站, along the whole 西湖/港墘/劍南路 stretch of Neihu,
across 自強隧道 into 大直, then down 中山北路 past 圓山大飯店, ending at 捷運
圓山站.[^tdx-bus] Nine confirmed interchanges are recorded in the curated
stop-ID join set — Dazhi (BR14), Jiannan Rd. (BR15), Xihu (BR16), Gangqian
(BR17), Wende (BR18), Neihu (BR19), Dahu Park (BR20), Huzhou (BR21) and
Yuanshan (R14) — effectively threading eight consecutive Wenhu Line
stations by road alongside a ninth on the Tamsui–Xinyi Line.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R2; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R2 (44 stops):** Shehou Fire Brigade -> Shidian Community -> Beifeng Village(Kangning St) -> Jinlong Elementary School(Kangning St) -> Munan Coal Mine -> Economic & Trade Park -> Beishan Village -> Donghu Elementary School -> Wufen Community -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> Kangning Hospital -> Huangshigong Temple -> Dahu Park -> MRT Dahu Park Sta -> Dahu -> Jinlong Village -> MRT Neihu Sta -> Huguang Market -> Chenggong Rd Sec 3 -> Neihu High School -> MRT Wende Sta (Bihu Park) -> Huguang Public Housing -> Xihu Library (Huguang Church) -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Zihqiang Tunnel -> Zhifu Temple -> MRT Dazhi Station -> Dazhi High School -> Air Force Command Headquarters -> Martyr Shrine -> Radio Taiwan International -> The Grand Hotel -> Taipei Municipal Meishu Hall -> MRT Yuanshan Sta[^tdx-bus]

**R2 (45 stops):** Taipei Municipal Meishu Hall -> The Grand Hotel -> Radio Taiwan International -> Martyr Shrine -> CHING-KUO Chihai Cultural Park -> Air Force Command Headquarters -> Dazhi High School -> Dazhi Elementary School -> MRT Dazhi Station -> Zhifu Temple -> Zihqiang Tunnel (Dazhi Church) -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> Chenggong Rd Sec 3 -> Huguang Market -> MRT Neihu Sta -> Xiuhu -> Dahu -> MRT Dahu Park Sta -> Dahu Park -> Huangshigong Temple -> Kangning Hospital -> Kangning Community -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Wufen Community -> Donghu Elementary School -> Beishan Village -> Economic & Trade Park -> Munan Coal Mine -> Jinlong Elementary School(Kangning St) -> Beifeng Village(Kangning St) -> Shidian Community -> Shehou Fire Brigade[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅2 was found in
this search. A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own weekday and holiday span statement.
No predecessor-route or renumbering history for 紅2 was located either.
