---
title: BR20B / 棕20預
summary: Brown-line feeder pilot route BR20B (棕20預), the reserved variant in the TDX snapshot.
updated: 2026-08-15
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
    note: Supports the normalized 棕20預 route identity and structural fields.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕20 under 捷運棕線接駁公車.
  - id: ebus-br20
    title: BR20 route schedule and reserved detours
    titleOriginal: 棕20路線資訊
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114002000
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports reservation-only 美堤碼頭 detours, not a separate 棕20預 identity.
---

## Classification and conflict

The official catalogue places 棕20 under 捷運棕線接駁公車.[^ebus-brown] TDX has a separate normalized record 棕20預, while the full official page describes reservation-only 美堤碼頭 detours without publishing that separate label.[^ebus-br20] The two values are retained.[^tdx-bus]

- Route history: TBC.
- Corridor decision: TBC.
- Operator changes: TBC.
