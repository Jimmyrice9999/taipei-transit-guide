---
title: BR7G / 棕7綠野香坡
summary: Brown-line feeder pilot route BR7G (棕7綠野香坡).
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
    note: Supports the current normalized route identity and structural fields.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕7綠野香坡 under 捷運棕線接駁公車.
  - id: pda-br7g
    title: BR7 Green Field route information
    titleOriginal: 棕7綠野香坡公車動態資訊
    publisher: Taipei City Government, 臺北市政府公車動態資訊系統
    url: https://pda5284.gov.taipei/MQS/route.jsp?rid=17466
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Publishes the current Green Field stop listing and the 812-to-三鶯2 notice.
---

## Classification and conflict

The official 大臺北公車 catalogue lists 棕7綠野香坡 under 捷運棕線接駁公車.[^ebus-brown] The TDX snapshot still identifies this record as 棕7綠野香坡.[^tdx-bus] The full PDA page states: 「原〖812〗路線自115年6月30日起，縮駛至『捷運橫溪站』並調整路線番號為〖三鶯2線〗」.[^pda-br7g] Both values are retained; the identity is unresolved.

- Corridor decision: TBC.
- Unusual branch or short working: TBC.
- Operator changes: TBC.
