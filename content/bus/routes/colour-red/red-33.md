---
title: R33 / 紅33
summary: Red-line feeder route R33 (紅33).
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
    note: Lists 紅33 under 捷運紅線接駁公車.
  - id: ebus-r33
    title: R33 route and stop information
    titleOriginal: 紅33路線資訊
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111003300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 葫蘆里–聯合醫院中興院區(西寧) corridor, weekday/holiday timetable variants, one-section fare and 首都客運士林站 contact.
---

## Classification and corridor

The official catalogue lists 紅33 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 葫蘆里 - 聯合醫院中興院區(西寧), weekday and holiday service 0900–1900, one-section fare and 首都客運士林站 as the service contact. The page lists weekday departures at 0900, 1100, 1300, 1500, 1700 and 1900, and holiday departures at 0900, 1300, 1500, 1700 and 1900.[^ebus-r33]

The confirmed stop sequence runs from 葫蘆寺(葫蘆里) on the Shezi peninsula,
past 葫蘆堵市場/海光新村/社子消防分隊, through 大龍峒保安宮/庫倫街, into 捷運圓山站/
花博公園/大同大學, then along 中山北路 past 景福宮/中山國小/新興國中, ending at
聯合醫院中興院區(西寧) near 迪化街.[^tdx-bus] Three confirmed interchanges are
recorded in the curated stop-ID join set: Zhongshan Elementary School
(O10), Shuanglian (R12) and Yuanshan (R14).[^tdx-bus] The route runs a
single subroute under one operator, 首都客運, with fixed two-hourly
departures rather than a continuous headway.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R33; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R33 (23 stops):** Hulu Temple (Hulu Village) -> Huludu Market -> Haiguang New Village -> Shezi Fire Squad -> Sewage Treatment Plant -> Laoshi Village -> JiuQuan-ChongQing Intersection -> Dalongtong Baoan Temple -> Kulun St -> MRT Yuanshan Sta -> Taipei Expo Park -> Tatung U -> Jingfu Temple -> Zhongshan Elementary School -> Xinxing Junior High School -> Jusheng village -> Gloria Hotel -> Mackay Memorial Hospital -> MRT Shuanglian Sta -> Blessed Imelda's school -> Dihua St -> Dadaocheng Dock -> YanPing Temple[^tdx-bus]

**R33 (26 stops):** TCUH Zhongxin Branch (Xining) -> Nanjing & Xining Intersection -> Minsheng and Xining Intersection -> Dihua St -> Blessed Imelda's school -> Shuanglian Market -> MRT Shuanglian Sta -> Mackay Memorial Hospital -> Gloria Hotel -> Jusheng village -> Xinxing Junior High School -> Zhongshan Elementary School -> Jingfu Temple -> Tatung U -> Taipei Expo Park -> MRT Yuanshan Sta -> Kulun St -> Dalongtong Baoan Temple -> Jiuquan and Chongqing Intersection -> Jiuquan St -> Laoshi Village -> Sewage Treatment Plant -> Shezi Fire Squad -> Haiguang New Village -> Huludu Market -> Hulu Temple (Hulu Village)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅33 was found
in this search, nor a stated reason for the fixed two-hourly schedule
rather than a continuous headway band as most other routes in this batch
publish. No predecessor-route or renumbering history for 紅33 was located
either, nor a stated reason for pairing 葫蘆里 with 聯合醫院中興院區
specifically as the route's own termini.[^tdx-bus]
