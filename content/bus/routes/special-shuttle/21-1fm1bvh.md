---
title: "NH21 / 內科通勤專車21"
summary: "Special shuttle route: NH21 (內科通勤專車21)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Special shuttle / commuter service (通勤／專車)"
    source: ebus-special
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
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
  - id: ebus-route-21-1fm1bvh
    title: "NH21 route schedule"
    titleOriginal: "內科通勤專車21班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車21 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “板橋 - 內科”, the current head/last-departure field “[平日] 0650 - 1830 [假日] 停駛”.[^ebus-route-21-1fm1bvh] It currently lists weekday service and suspended holiday service.[^ebus-route-21-1fm1bvh]

The confirmed stop sequence runs from 歡仔園, past 僑中一街/大觀路一段28
巷/接雲寺/林家花園/北門街(黃石市場)/捷運府中站(府中路)/萬坪公園/新北板橋
公車站/中山國中(縣民大道)/華翠大橋, through 雙園街口/時報大樓/萬華車站/
艋舺大道/聯合醫院和平院區/捷運西門站/中華路北站/捷運北門站, along 潭美國
小(舊宗)/潭美國小(行善)/行善行愛路口/行善石潭路口, ending at 麗寶大樓/公
館山/瑞光路/瑞光港墘路口/仁寶大樓/基湖路口/基湖站/內湖基湖路口 in the
Neihu Science Park.[^tdx-bus] Four confirmed interchanges are recorded
in the curated stop-ID join set: Fuzhong (BL06), Banqiao (BL07), Ximen
(BL11/G12) and Beimen (G13), all confirmed along the route's own
Banqiao-Ximen stretch.[^tdx-bus] The route runs two named subroutes
under one operator, 臺北客運, weekdays only with holiday service
suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for NH21; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**MH21 (32 stops):** Huanziyuan -> Qiaozhong 1st St -> Daguan Rd Lane 28 -> Jieyun Temple -> Lin Family Garden -> Beimen St(Huangshi Market) -> MRT Fuzhong Station(Fuzhong Rd) -> Zhuifeng Square -> NTPC Banqiao Bus Station -> Zhongshan Junior High School(Xian min Blvd) -> Huacui Bridge -> Shuangyuan St Entrance -> Chian Times Building -> Wanhua Station -> Bangka Blvd -> TCUH, Heping Branch -> MRT Ximen Sta -> Zhonghua Rd North Stop -> MRT Beimen Station -> Tanmei Elementary School (Jiuzong) -> Tanmei Elementary School (Xingshan) -> Xingshan & Xingai Intersection -> Xingshan & Shitan Roads -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Zhipan New Village -> Neihu and Jihu Intersection[^tdx-bus]

**MH21 (34 stops):** Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> Xingshan and Shitan Intersection -> Xingshan & Xingai Intersection -> Tanmei Elementary School (Xingshan) -> Tanmei Elementary School (Jiuzong) -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen -> TCUH Heping Branch -> Bangka Blvd -> Wanhua Station -> Chian Times Building -> Shuangyuan St Entrance -> Huacui Bridge -> Zhongshan Junior High School(Xian min Blvd) -> NTPC Banqiao Bus Station -> Zhuifeng Square -> Beimen St(Huangshi Market) -> Lin Family Garden -> Jieyun Temple -> Daguan Elementary School -> National Taiwan U of Arts -> Fuhuayuanmei Park -> Qiaozhong 3rd St -> Lantian Shijicheng -> Qiaozhong 2nd St -> Daguan Village -> Qiaozhong 1st St[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure and a fare figure both stay TBC, and no stated reason for pairing 板橋 with the Neihu Science Park specifically over this long a corridor was found in this search.
