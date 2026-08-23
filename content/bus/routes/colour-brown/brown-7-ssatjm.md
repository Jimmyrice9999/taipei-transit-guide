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
## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR7G; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR7G (55 stops):** Banshan Villa(1) -> Banshan Villa(2) -> Banshan Villa(3) -> Luyexiangpo -> ZaoJhen -> Green Villa Stage 2 -> Banwu Bieshu -> Caidie Bieshu -> Green Villa 1 -> Anxiang Rd Entrance -> Damaopu -> Kangle New Village -> Jen-Kang Hospital -> Yirenkeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Langmanguizu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anhua Rd Intersection -> Xiacheng Community -> Mansion of General Hu-Lien -> Dingcheng -> Dapingding -> Xitou -> MRT Xindian Station -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> Qizhang(Baoqiao Rd) -> Baoqiao and Zhongxing Intersection -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Intersection -> Wenshan Dist Admin Center (Muxin) -> Wanshou Bridge (Muzha) -> Wanfang Rd Entrance -> Muzha Vocational High School -> MRT Muzha Station -> Bojia Elementary School -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**BR7G (54 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Bojia Elementary School -> MRT Muzha -> Muzha Vocational High School -> Wanfang Rd Intersection -> Wanshou Bridge (Muzha) -> Wenshan Dist Admin Center (Muxin) -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park -> Gas Station -> Baoqiao and Zhongxing Intersection -> BeiXin Apartment -> Qizhang(Baoqiao Rd) -> Qizhang(Beixin Rd) -> MRT Xindian Dist Office(Beixin Rd) -> Binlang Rd -> Bitan Bridge -> MRT Xindian Station -> Xitou -> Dapingding -> Dingcheng -> Mansion of General Hu-Lien -> Xiacheng Community -> Anhua Rd Intersection -> Guanghua New Village -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Langmanguizu -> Taipei Tobacco Factory -> Chezi Rd -> Yirenkeng -> Jen-Kang Hospital -> Kangle New Village -> Damaopu -> Anxiang Rd Entrance -> Green Villa 1 -> Caidie Bieshu -> Banwu Bieshu -> Green Villa Stage 2 -> ZaoJhen -> Luyexiangpo -> Banshan Villa(3) -> Banshan Villa(2) -> Banshan Villa(1)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

