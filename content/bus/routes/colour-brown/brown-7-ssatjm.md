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

The official 大臺北公車 catalogue lists 棕7綠野香坡 under 捷運棕線接駁公車.[^ebus-brown] The TDX snapshot still identifies this record as 棕7綠野香坡.[^tdx-bus] The full PDA page states: 「原〖812〗路線自115年6月30日起，縮駛至『捷運橫溪站』並調整路線番號為〖三鶯2線〗」.[^pda-br7g] Both values are retained; the identity is unresolved — the PDA statement describes route 812 being shortened and renumbered to 三鶯2線, a different identity from 棕7綠野香坡, and this search found no primary source connecting that 812 renumbering to this specific 棕7 stop-pattern record.

The confirmed outbound stop sequence in the current TDX record runs from 伴山別墅(一), past 伴山別墅(二)/碧潭橋頭, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei City Hall (BL18) and Muzha (BR02), the same pair confirmed for plain 棕7.[^tdx-bus] The route runs 2 subroutes under a single operator, 臺北客運, matching plain 棕7's own operator despite the unresolved identity conflict above.[^tdx-bus] The outbound working covers 55 stops, longer than either plain 棕7 (47) or 棕7建業路; the return, starting from 消防局(松仁), covers 54.[^tdx-bus] Whether that longer stop count reflects the 綠野香坡 (Green Fields) residential detour named in the identity, or the possible 812/三鶯2 renumbering above, was not established by any source checked for this entry.

- Corridor decision: TBC.
- Unusual branch or short working: TBC.
- Operator changes: TBC.
