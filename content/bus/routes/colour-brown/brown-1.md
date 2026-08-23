---
title: BR1 / 棕1
summary: Brown-line feeder pilot route BR1 (棕1).
updated: 2026-08-17
line: BR
facts:
  - label: Service class
    value: MRT brown-line feeder
    source: ebus-brown
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
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕1 under 捷運棕線接駁公車.
  - id: ebus-br1
    title: BR1 route schedule
    titleOriginal: 棕1班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114000100
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 松山車站–松山機場 corridor, service pattern and 首都客運內湖站 contact.
  - id: dot-br1-shortening
    title: Minibus 10 scheduled to start service in Neihu
    titleOriginal: 市民小巴10路公車訂於98年8月3日通車營運，提供內湖地區市民便捷之大眾運輸服務
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://dot.gov.taipei/News_Content.aspx?n=230A79C0F27D6B8F&s=4232D242EAA4B05A
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official 2009 announcement saying Minibus 10 was created after 棕1 was shortened, to serve short trips for Mackay New Town and Xinming Road-area residents; it does not publish the prior 棕1 termini or a transfer record.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕1 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed stop sequence runs from 潭美國小(行善), past 潭美國小(舊宗)/新東街口/民權敦化路口, ending at 松山機場.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID join set: Zhongshan Junior High School (BR12).[^tdx-bus] The route runs 2 subroutes under a single operator, 首都客運內湖站.[^tdx-bus] Neither subroute carries a variant suffix in the current TDX record; the 2009 shortening recorded above is the only documented change to this identity.[^dot-br1-shortening] The outbound working covers 21 stops from 潭美國小(行善) to 松山機場; the return working, starting from 民權敦化路口, covers 20.[^tdx-bus] Both endpoints sit near Songshan Airport rather than at a station confirmed in the curated join set.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR1; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR1 (21 stops):** Tanmei Elementary School (Xingshan) -> Tanmei Elementary School (Jiuzong) -> Zhoumei Village 1 -> Yucheng Village -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> Raohe St Night Market (Tayou) -> Nansongshan (Tayou) -> Power Sta (Xisong High School) -> Xindong Village -> Xindong St Entrance -> Minsheng Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Minsheng & Dunhua Intersection -> Minsheng & Fuxing Intersection -> Minsheng E Rd Entrance -> MRT Zhongshan Junior High School Sta -> Minquan and Dunhua Intersection -> Songshan Airport[^tdx-bus]

**BR1 (20 stops):** Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> MRT Zhongshan Junior High School Sta -> Minsheng & Fuxing Intersection -> Minsheng & Dunhua Intersection -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Minsheng Activity Center -> Xindong St Entrance -> Xindong Village -> Power Sta (Xisong High School) -> Nansongshan (Tayou) -> Raohe St Night Market (Tayou) -> Songshan Farmers Association -> Songshan Rail Sta (Bade) -> Yucheng Village -> Zhoumei Village 1 -> Tanmei Elementary School (Jiuzong) -> Tanmei Elementary School (Xingshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the 2009 announcement records that 棕1 had been shortened before 市民小巴10 began, but the earlier route shape and shortening decision are TBC.[^dot-br1-shortening]
- Corridor decision: TBC for the original 棕1 decision; the replacement minibus announcement gives the short-trip needs it was intended to serve.[^dot-br1-shortening]
- Unusual branch or short working: TBC.
- Operator changes: TBC — the current schedule names 首都客運內湖站, but no dated operator-transfer record was found.[^ebus-br1]
