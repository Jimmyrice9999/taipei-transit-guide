---
title: BR22 / 棕22
summary: Brown-line feeder pilot route BR22 (棕22).
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
    note: Lists 棕22 under 捷運棕線接駁公車.
  - id: ebus-br22
    title: BR22 route information
    titleOriginal: 棕22路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?rid=16747&sec=0
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 景美–青年路 corridor, one-section fare, weekday/holiday service window and 欣欣客運景德站 contact.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕22 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 景福街, past 溪口國小/自來水處(辛亥)/青年社區, ending at 青年公園(青年).[^tdx-bus] Four confirmed interchanges are recorded in the curated stop-ID join set: Wanfang Hospital (BR04), Xinhai (BR05), Gongguan (G07) and Taipower Building (G08) — the same four stations confirmed for 棕12, which shares this route's 景福街 origin and Xinhai/Gongguan corridor before diverging.[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運景德站, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 45 stops; the return, starting from 青年公園(國興), covers 41.[^tdx-bus] Both termini, 景福街 and 青年公園, sit away from a curated MRT join; every confirmed interchange on this route falls mid-corridor near Wanfang and Xinhai.

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC.
- Corridor decision: TBC — the current 景美–青年路 corridor is published, but its original rationale was not.[^ebus-br22]
- Unusual branch or short working: TBC — no dated branch or short-working history was found.[^ebus-br22]
- Operator changes: TBC — the current page names 欣欣客運景德站, but no dated transfer record was found.[^ebus-br22]
