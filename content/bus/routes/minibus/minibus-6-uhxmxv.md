---
title: "S6 / 小6"
summary: "Minibus and community route: S6 (小6)."
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
  - id: ebus-route-minibus-6-uhxmxv
    title: "S6 route schedule"
    titleOriginal: "小6班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小6 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 清天宮”, the current head/last-departure field “[平日] 0540 - 2300 [假日] 0540 - 2300”, fare “一段票”.[^ebus-route-minibus-6-uhxmxv]

The confirmed stop sequence runs from 致遠新村, past 稻香圖書館/復興崗/文化
國小/幼華高中(大業), through 捷運北投站(北投)/北投國小/第一銀行/北投公園,
along 新北投/中和街/復興中學/浸信會真理堂/復興四路100號/溫莎堡/安國寺/鳳梨
宅/白宮山莊/水汴頭福德宮/粗坑/大屯國小/吳氏宗祠/復興三路355巷口/觀聖宮/大
彎/頭前崙/復興三路463號/安溪寮, ending at 清天宮.[^tdx-bus] Two confirmed
interchanges are recorded in the curated stop-ID join set: Beitou
(R22) and Xinbeitou (R22A), both confirmed along the route's own
starting stretch, the same pair confirmed for the neighbouring 小7,
小9 and 小26 family over an overlapping Beitou-area corridor.[^tdx-bus]
TDX records two named subroutes distinguishing whether a working
detours via 永春橋/茄苳樹下 on its return leg.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for S6; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S6 (32 stops):** Zhiyuan New Village -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Zhonghe St -> Fuxing High School -> Trust Baptist Church -> Fuxing High School -> No 100 Fuxing 4rd Rd -> Windsor Castle -> Anguo Temple -> Pineapple House -> Little White House Village -> Shuibiantou Fude Temple -> Cukeng -> Datun Elementary School -> Wu Family Shrine -> Fuxing 3rd Rd Lane 355 Entrance -> GuanSheng Temple -> Dawan -> Touqianlun -> No 463 Fuxing 3rd Rd -> AnXiLiao -> Qingtian Temple[^tdx-bus]

**S6 (31 stops):** Qingtian Temple -> AnXiLiao -> No 463 Fuxing 3rd Rd -> Touqianlun -> Dawan -> GuanSheng Temple -> Fuxing 3rd Rd Lane 355 Entrance -> Wu Family Shrine -> Datun Elementary School -> Cukeng -> Shuibiantou Fude Temple -> Little White House Village -> Pineapple House -> Anguo Temple -> Windsor Castle -> No 100 Fuxing 4rd Rd -> Fuxing High School -> Trust Baptist Church -> Fuxing High School -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Zhiyuan New Village[^tdx-bus]

**S6 (32 stops):** Zhiyuan New Village -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Zhonghe St -> Fuxing High School -> Trust Baptist Church -> Fuxing High School -> No 100 Fuxing 4rd Rd -> Windsor Castle -> Anguo Temple -> Pineapple House -> Little White House Village -> Shuibiantou Fude Temple -> Cukeng -> Datun Elementary School -> Wu Family Shrine -> Fuxing 3rd Rd Lane 355 Entrance -> GuanSheng Temple -> Dawan -> Touqianlun -> No 463 Fuxing 3rd Rd -> AnXiLiao -> Qingtian Temple[^tdx-bus]

**S6 (33 stops):** Qingtian Temple -> AnXiLiao -> No 463 Fuxing 3rd Rd -> Touqianlun -> Dawan -> GuanSheng Temple -> Fuxing 3rd Rd Lane 355 Entrance -> Wu Family Shrine -> Datun Elementary School -> Cukeng -> Yongchun Bridge -> Bischofia Javanica -> Shuibiantou Fude Temple -> Little White House Village -> Pineapple House -> Anguo Temple -> Windsor Castle -> No 100 Fuxing 4rd Rd -> Fuxing High School -> Trust Baptist Church -> Fuxing High School -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Zhiyuan New Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 北投 with 清天宮 specifically as the route's own termini was found in this search, nor a stated reason for the specific 永春橋/茄苳樹下 detour existing on only one leg of the round trip.
