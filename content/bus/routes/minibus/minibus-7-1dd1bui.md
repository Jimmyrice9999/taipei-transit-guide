---
title: "S7 / 小7"
summary: "Minibus and community route: S7 (小7)."
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
  - id: ebus-route-minibus-7-1dd1bui
    title: "S7 route schedule"
    titleOriginal: "小7班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小7 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 嶺頭”, the current head/last-departure field “[平日] 0540 - 2300 [假日] 0540 - 2300”, fare “一段票”.[^ebus-route-minibus-7-1dd1bui]

The confirmed stop sequence runs from 致遠新村, past 集應廟/大華柏園/稻香圖
書館/復興崗/文化國小/幼華高中, through 捷運北投站(北投)/北投國小/第一銀行/
北投公園, along 新北投/華僑會館/雅敘園/源之鄉/郵政訓練所/八勝園/上北投/泉源
別墅/彌陀寺(硫磺谷)/大同之家/十八份福德宮/泉源3號橋/中正山登山口/十八份埔/
張公聖君廟, ending at 嶺頭.[^tdx-bus] Two confirmed interchanges are
recorded in the curated stop-ID join set: Beitou (R22) and Xinbeitou
(R22A), both confirmed along the route's own starting stretch, the
same pair confirmed for the neighbouring 小6, 小9 and 小26 family.[^tdx-bus] TDX records four named direction/variant records
distinguishing detours via 嶺腳珠海路, 新民路 or 惇敘工商.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 8 directional or variant stop sequences for S7; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S7-Lingjiao (31 stops):** Zhiyuan New Village -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Overseas Chinese Hotel -> Yaxuyuan -> Yuanzhixiang -> Postal Service Training Center -> Bashengyuan -> Shangbeitou -> Quanyuan Bieshu -> Mituo Temple (Sulfur Valley) -> Datong House -> Shibafeng Fude Temple -> Quanyuan 3rd Bridge -> Zhongzhengshan Hiking Trail -> Shibafenpu -> Zhanggongshengjun Temple -> Lingtou[^tdx-bus]

**S7-Lingjiao (23 stops):** ScenicOverlook -> Lingjiao -> Shuiyuan Di -> Quanyuan Park -> Changshou Rd Entrance -> Jinxian Rd Entrance -> Fuxing 1st Rd Entrance -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Zhiyuan New Village[^tdx-bus]

**S7 (31 stops):** Zhiyuan New Village -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Overseas Chinese Hotel -> Yaxuyuan -> Yuanzhixiang -> Postal Service Training Center -> Bashengyuan -> Shangbeitou -> Quanyuan Bieshu -> Mituo Temple (Sulfur Valley) -> Datong House -> Shibafeng Fude Temple -> Quanyuan 3rd Bridge -> Zhongzhengshan Hiking Trail -> Shibafenpu -> Zhanggongshengjun Temple -> Lingtou[^tdx-bus]

**S7 (30 stops):** Lingtou -> Zhanggongshengjun Temple -> Shibafenpu -> Zhongzhengshan Hiking Trail -> Quanyuan 3rd Bridge -> Shibafeng Fude Temple -> Datong House -> Mituo Temple (Sulfur Valley) -> Quanyuan Bieshu -> Shangbeitou -> Bashengyuan -> Postal Service Training Center -> Yuanzhixiang -> Yaxuyuan -> Overseas Chinese Hotel -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Zhiyuan New Village[^tdx-bus]

**S7 (31 stops):** Zhiyuan New Village -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Overseas Chinese Hotel -> Yaxuyuan -> Yuanzhixiang -> Postal Service Training Center -> Bashengyuan -> Shangbeitou -> Quanyuan Bieshu -> Mituo Temple (Sulfur Valley) -> Datong House -> Shibafeng Fude Temple -> Quanyuan 3rd Bridge -> Zhongzhengshan Hiking Trail -> Shibafenpu -> Zhanggongshengjun Temple -> Lingtou[^tdx-bus]

**S7 (25 stops):** ScenicOverlook -> No40 Dengshan Rd -> Zhanggongshengjun Temple -> Shibafenpu -> Zhongzhengshan Hiking Trail -> Quanyuan 3rd Bridge -> Shibafeng Fude Temple -> Datong House -> Mituo Temple (Sulfur Valley) -> Quanyuan Bieshu -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Zhiyuan New Village[^tdx-bus]

**S7 (32 stops):** Zhiyuan New Village -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Daoxiang Library -> Fuxinggang -> Wenhua Elementary School -> Youhua High School (Daye) -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Overseas Chinese Hotel -> Yaxuyuan -> Yuanzhixiang -> Postal Service Training Center -> Bashengyuan -> Shangbeitou -> Quanyuan Bieshu -> Mituo Temple (Sulfur Valley) -> Dunxu High School of Industry and Commerce -> Datong House -> Shibafeng Fude Temple -> Quanyuan 3rd Bridge -> Zhongzhengshan Hiking Trail -> Shibafenpu -> Zhanggongshengjun Temple -> Lingtou[^tdx-bus]

**S7 (23 stops):** ScenicOverlook -> Lingjiao -> Shuiyuan Di -> Quanyuan Park -> Changshou Rd Entrance -> Jinxian Rd Entrance -> Fuxing 1st Rd Entrance -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Zhongyang S Rd -> Daxing St Entrance -> MRT Beitou Sta (Beitou) -> YouHua Vocational High School (Beitou) -> Wenhua Elementary School -> Fuxinggang -> Daoxiang Library -> Jiying Temple -> Dahua Boyuan -> Dahua Boyuan -> Jiying Temple -> Zhiyuan New Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 8 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 北投 with 嶺頭 specifically as the route's own termini was found in this search, nor a stated reason for concentrating four separate named detours onto one route number.
