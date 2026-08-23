---
title: "M5 / 市民小巴5"
summary: "Minibus and community route: M5 (市民小巴5)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-5-mubk47
    title: "M5 route schedule"
    titleOriginal: "市民小巴5班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴5 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “興得閱覽室 - 捷運景美站”, the current head/last-departure field “[平日] 0600 - 1900 [假日] 0600 - 1900”, fare “一段票”.[^ebus-route-minibus-5-mubk47]

The confirmed stop sequence runs from 興得閱覽室, past 仙跡岩海巡署登山口/
海巡署/文山運動中心/臺灣警察專科學校, through 捷運萬芳醫院站, along 中國科
技大學/興隆國小/福興路口/敦南美景/興旺公園/敦南大地/敦南如意/敦南203巷/興
隆市場後站/景華街/景華街一/景華公園/景美國小(景興)/景美國小(景文), ending
at 文山二分局.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set, on two different rail lines: Wanfang
Hospital (BR04) and Jingmei (G05), matching a stop roughly midway
along the corridor and the route's own eastern terminus.[^tdx-bus]
TDX records two named subroutes distinguishing whether a working
detours via 仙岩公園/興安宮/麥田紫藤/興業里/興隆公園.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for M5; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M5 (21 stops):** Xingde Reading room -> Xianjiyan CGA Trailhead -> Coast Guard Administration1 -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Fuxing Rd Entrance -> Dunnan Meijin Community -> xingwang Park -> Dunnan Dadi Community (Wenshan Forest Park) -> Dunnan Ruyi -> Dunnan Lane 203 -> Xinglong Market Postern -> Jinghua St -> Jinghua St1 -> Jinhua Park -> Jingmei Elementary School (Jingxing) -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta 2[^tdx-bus]

**M5 (19 stops):** Jingmei Junior High School -> Jinhua Park -> Jinghua St1 -> Jinghua St -> Xinglong Market Postern -> Dunnan Lane 203 -> Dunnan Ruyi -> Dunnan Meijin Community -> xingwang Park -> Dunnan Dadi Community (Wenshan Forest Park) -> DunnanMeijinCommunity -> Fuxing Rd Entrance -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Xianjiyan CGA Trailhead -> Xingde Reading room[^tdx-bus]

**M5 (26 stops):** Xingde Reading room -> Xianjiyan CGA Trailhead -> Coast Guard Administration1 -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Fuxing Rd Entrance -> Dunnan Meijin Community -> xingwang Park -> Dunnan Dadi Community (Wenshan Forest Park) -> Dunnan Ruyi -> Dunnan Lane 203 -> Xinglong Market Postern -> Xianyan Park -> Xingan Temple -> Maitian Ziteng -> xingye Village -> Xinglong Park -> Jinghua St -> Jinghua St1 -> Jinhua Park -> Jingmei Elementary School (Jingxing) -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta 2[^tdx-bus]

**M5 (24 stops):** Jingmei Junior High School -> Jinhua Park -> Jinghua St1 -> Jinghua St -> Xianyan Park -> Xingan Temple -> Maitian Ziteng -> xingye Village -> Xinglong Park -> Xinglong Market Postern -> Dunnan Lane 203 -> Dunnan Ruyi -> Dunnan Meijin Community -> xingwang Park -> Dunnan Dadi Community (Wenshan Forest Park) -> DunnanMeijinCommunity -> Fuxing Rd Entrance -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Xianjiyan CGA Trailhead -> Xingde Reading room[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 興得閱覽室 with 捷運景美站 specifically as the route's own termini was found in this search, nor a stated reason for the identical weekday and holiday schedule window unlike several other routes in this batch.
