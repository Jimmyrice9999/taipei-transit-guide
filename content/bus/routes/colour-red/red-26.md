---
title: R26 / 紅26
summary: Red-line feeder route R26 (紅26).
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
    note: Lists 紅26 under 捷運紅線接駁公車.
  - id: ebus-r26
    title: R26 route schedule
    titleOriginal: 紅26班表
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002600
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 漁人碼頭–捷運淡水站 corridor, service span, one-section fare, 指南客運淡海站 contact and the no-fisherman-wharf short working before 08:00 and after 22:00.
---

## Classification and corridor

The official catalogue lists 紅26 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 漁人碼頭 - 捷運淡水站, weekday and holiday service 0600–0000, one-section fare and 指南客運淡海站 as the service contact. It also records the current working from 淡海 without entering 漁人碼頭 before 08:00 and after 22:00.[^ebus-r26]

The confirmed stop sequence runs from 情人橋 at 漁人碼頭, past 輕軌淡水漁人
碼頭站/淡海市民活動中心, along 油車口/滬尾藝文園區 past 紅毛城/淡水圖書館, ending
at 捷運淡水站.[^tdx-bus] Three confirmed interchanges are recorded in the
curated stop-ID join set: Tamsui (R28), Tamsui Fisherman's Wharf (V26) and
Shalun (V27).[^tdx-bus] TDX records six named subroutes, matching the
schedule page's own before-08:00/after-22:00 short-working note that skips
漁人碼頭 entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 8 directional or variant stop sequences for R26; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R26 (20 stops):** Lover's Bridge -> Fisherman's Wharf -> LRT Tamsui Fisherman's Wharf Station -> Red Cross -> Danhai & Zhongzheng Intersection -> Danhai -> DanHai Community Activity Center -> Tiansheng Elementary School -> Danjiang New Residentail Quarter -> Shijieguan -> Youchekou -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> VeterInary Research Institute -> Fort San Domingo(Aletheia University) -> Little White House (Danshui Precinct) -> Tamsui Liberry -> Chongjian St Intersection -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R26 (18 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> JhongJian St Entrance -> Tamsui Liberry -> Little White House (Danshui Precinct) -> Fort Santo Domingo (Aletheia U) -> VeterInary Research Institute -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> YouCheKou -> Danjiang New Residentail Quarter -> Tiansheng Elementary School -> DanHai Community Activity Center -> DanHai -> Danhai & Zhongzheng Intersection -> Red Cross -> LRT Tamsui Fisherman's Wharf Station -> Fisherman's Wharf -> Lover's Bridge[^tdx-bus]

**R26GO (20 stops):** Lover's Bridge -> Fisherman's Wharf -> LRT Tamsui Fisherman's Wharf Station -> Red Cross -> Danhai & Zhongzheng Intersection -> Danhai -> DanHai Community Activity Center -> Tiansheng Elementary School -> Danjiang New Residentail Quarter -> Shijieguan -> Youchekou -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> VeterInary Research Institute -> Fort San Domingo(Aletheia University) -> Little White House (Danshui Precinct) -> Tamsui Liberry -> Chongjian St Intersection -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R26Back (18 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> JhongJian St Entrance -> Tamsui Liberry -> Little White House (Danshui Precinct) -> Fort Santo Domingo (Aletheia U) -> VeterInary Research Institute -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> YouCheKou -> Danjiang New Residentail Quarter -> Tiansheng Elementary School -> DanHai Community Activity Center -> DanHai -> Danhai & Zhongzheng Intersection -> Red Cross -> LRT Tamsui Fisherman's Wharf Station -> Fisherman's Wharf -> Lover's Bridge[^tdx-bus]

**R26 (15 stops):** Danhai -> DanHai Community Activity Center -> Tiansheng Elementary School -> Danjiang New Residentail Quarter -> Shijieguan -> Youchekou -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> VeterInary Research Institute -> Fort San Domingo(Aletheia University) -> Little White House (Danshui Precinct) -> Tamsui Liberry -> Chongjian St Intersection -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R26 (13 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> JhongJian St Entrance -> Tamsui Liberry -> Little White House (Danshui Precinct) -> Fort Santo Domingo (Aletheia U) -> VeterInary Research Institute -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> YouCheKou -> Danjiang New Residentail Quarter -> Tiansheng Elementary School -> DanHai Community Activity Center -> DanHai[^tdx-bus]

**R26 (15 stops):** Danhai -> DanHai Community Activity Center -> Tiansheng Elementary School -> Danjiang New Residentail Quarter -> Shijieguan -> Youchekou -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> VeterInary Research Institute -> Fort San Domingo(Aletheia University) -> Little White House (Danshui Precinct) -> Tamsui Liberry -> Chongjian St Intersection -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R26 (13 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> JhongJian St Entrance -> Tamsui Liberry -> Little White House (Danshui Precinct) -> Fort Santo Domingo (Aletheia U) -> VeterInary Research Institute -> Huwei Cultural and Arts Park(Martyrs' Shrine) -> YouCheKou -> Danjiang New Residentail Quarter -> Tiansheng Elementary School -> DanHai Community Activity Center -> DanHai[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 6 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅26 was found in this search, nor a stated reason for
running six named subroutes rather than one route with a time-conditional
detour rule stated in prose. No predecessor-route or renumbering history
for 紅26 was located either, nor a stated reason for confirming Tamsui
Fisherman's Wharf as its own MRT-adjacent light-rail interchange rather
than a plain named destination.[^tdx-bus]
