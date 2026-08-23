---
title: BR7 Jianye Rd. / 棕7建業路
summary: Brown-line feeder pilot route BR7 Jianye Rd. (棕7建業路).
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
    note: Supports normalized route and stop structure; route length and timetable fields are absent from the committed bus layer.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕7建業路 under 捷運棕線接駁公車.
  - id: ebus-br7-jianye
    title: BR7 Jianye Road route information
    titleOriginal: 棕7建業路路線資訊
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?rid=17940&sec=1
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 新店–臺北市政府 corridor, limited weekday/holiday departures, 建業路 stops and 臺北客運新店站 contact.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕7建業路 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 新店站, past 彩蝶別墅/大坪頂, ending at 市政府(市府)/捷運市政府站.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei City Hall (BL18) and Muzha (BR02) — the same pair confirmed for plain 棕7 and for 棕7綠野香坡, since all three share the 新店–市政府 corridor's Muzha and City Hall ends.[^tdx-bus] The route runs 2 subroutes under a single operator, 臺北客運新店站. The 建業路 (Jianye Road) suffix marks the stop pattern that routes via Jianye Road rather than the parent identity's own alignment through that section of Xindian.[^ebus-br7-jianye]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR7Jianye Rd.; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR7-2 (62 stops):** Xindian Station -> Caidie Bieshu -> Banwu Bieshu -> Green Villa Stage 2 -> ZaoJhen -> Luyexiangpo -> Banshan Villa(3) -> Banshan Villa(2) -> Banshan Villa(1) -> Tianyi -> JENG SHONG Company -> Jianye Rd -> Ercheng -> Central Engraving & Printing Plant -> Zhongyang New Village -> Toucheng -> Toucheng 1 -> Damaopu -> Kangle New Village -> Jen-Kang Hospital -> Yirenkeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Langmanguizu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anhua Rd Intersection -> Xiacheng Community -> Mansion of General Hu-Lien -> Dingcheng -> Dapingding -> Xitou -> MRT Xindian Station -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> Qizhang(Baoqiao Rd) -> Baoqiao and Zhongxing Intersection -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Intersection -> Wenshan Dist Admin Center (Muxin) -> Wanshou Bridge (Muzha) -> Wanfang Rd Entrance -> Muzha Vocational High School -> MRT Muzha Station -> Bojia Elementary School -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**BR7-2 (61 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Bojia Elementary School -> MRT Muzha -> Muzha Vocational High School -> Wanfang Rd Intersection -> Wanshou Bridge (Muzha) -> Wenshan Dist Admin Center (Muxin) -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park -> Gas Station -> Baoqiao and Zhongxing Intersection -> BeiXin Apartment -> Qizhang(Baoqiao Rd) -> Qizhang(Beixin Rd) -> MRT Xindian Dist Office(Beixin Rd) -> Binlang Rd -> Bitan Bridge -> MRT Xindian Station -> Xitou -> Dapingding -> Dingcheng -> Mansion of General Hu-Lien -> Xiacheng Community -> Anhua Rd Intersection -> Guanghua New Village(Ankang Rd) -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Langmanguizu -> Taipei Tobacco Factory -> Chezi Rd -> Yirenkeng -> Jen-Kang Hospital -> Kangle New Village -> Damaopu -> Toucheng 1 -> Toucheng -> Central Engraving & Printing Plant -> Ercheng -> Jianye Rd -> Ankang & Jianye Intersection -> JENG SHONG Company -> Tianyi -> Banshan Villa(1) -> Banshan Villa(2) -> Banshan Villa(3) -> Luyexiangpo -> ZaoJhen -> Green Villa Stage 2 -> Banwu Villa -> Caidie Villa -> Xindian Station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the structural fields shown above; route length remains TBC where that layer has no field.[^tdx-bus]

- Route history: TBC — the full current page does not establish an opening date, former alignment or renumbering.[^ebus-br7-jianye]
- Corridor decision: TBC — the current 新店–臺北市政府 corridor and 建業路 section are published, but the original rationale was not.[^ebus-br7-jianye]
- Unusual branch or short working: Partial — the page publishes limited weekday and holiday departures for this 建業路 variant, but not when it began or why.[^ebus-br7-jianye]
- Operator changes: TBC — the current page names 臺北客運新店站, but no dated transfer record was found.[^ebus-br7-jianye]
