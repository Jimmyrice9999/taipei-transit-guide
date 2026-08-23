---
title: "NH3 / 內科通勤專車3"
summary: "Special shuttle route: NH3 (內科通勤專車3)."
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
  - id: ebus-route-3-1uhn1kq
    title: "NH3 route schedule"
    titleOriginal: "內科通勤專車3班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152000300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車3 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “土城駕訓中心 - 內湖科技園區”, the current head/last-departure field “[平日] 0640 - 1820 [假日] 停駛”, fare “兩段票”.[^ebus-route-3-1uhn1kq] It currently lists weekday service and suspended holiday service.[^ebus-route-3-1uhn1kq]

The confirmed stop sequence runs from 駕訓中心, past 中和高中/連城路/連城
中正路口/連城錦和路口/台貿一村/中和國稅局/連城景平路/連城中和路口/廟美
里/南山高中(中山路)/佳和公園/保生路口/永平高中/中山路口, through 捷運頂
溪站/中正橋頭/重慶南路三段(中正橋)/和平西路一段/南福板溪(南昌公園)/捷運
古亭站(和平)/公企中心/捷運東門站(金山), along 仁愛路二段/金山泰安街口/
圓山大飯店/中央電台/忠烈祠/經國七海文化園區, ending at 基湖站/基湖路口/
瑞光路/公館山/麗寶大樓/時報廣場/民權大橋 in the Neihu Science Park, the
same corridor confirmed for the shorter 內科通勤專車2, extended here past
that route's own terminus.[^tdx-bus] Three confirmed interchanges are
recorded in the curated stop-ID join set: Guting (G09/O05), Dingxi
(O04) and Dongmen (O06/R07), the same three stations confirmed for
內科通勤專車2.[^tdx-bus] The route runs two named subroutes under two
operators, 大都會客運 and 臺北客運, on a two-stage fare, weekdays only
with holiday service suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for NH3; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**NH3 (39 stops):** Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Liancheng Zhongzheng Intersection -> Liancheng Jinhe Rd Intersection -> Taimao Village 1 -> National Taxation Bureau Jhonghe Office -> Liancheng Jingping Rd Intersection -> Liancheng Zhonghe Rd Intersection -> Miaomei Village -> Nanshan High School(Zhongshan Rd) -> Jiahe Park -> Baosheng Rd Entrance -> Yongping High School -> Zhongshan Rd Entrance -> MRT Dingxi Sta -> Zhongzheng Bridge Stop -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> Heping W Rd Sec 1 -> Nanfu Banxi (Nanchang Park) -> MRT Guting Sta (Heping) -> Jinshan Chaozhou St Intersection -> Center for Public & Business Administration Education -> MRT Dongmen Sta (Jinshan) -> Renai Rd Sec 2 -> Jinshan and Taian  Intersection -> The Grand Hotel -> Radio Taiwan International -> Martyr Shrine -> CHING-KUO Chihai Cultural Park -> Jihu Stop -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> China Times Daily News Square -> Minquan Bridge[^tdx-bus]

**NH3 (38 stops):** Minquan Bridge -> China Times Daily News Square -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop -> Martyr Shrine -> Radio Taiwan International -> The Grand Hotel -> Jinshan and Taian  Intersection -> Renai Rd Sec 2 -> MRT Dongmen Sta (Jinshan) -> Center for Public & Business Administration Education -> Jinshan Chaozhou St Intersection -> MRT Guting Sta (Heping) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> MRT Dingxi Sta -> Zhongxing St Entrance -> Zhongshan Rd Entrance -> Yongping High School -> Baosheng Rd Entrance -> Jiahe Park -> Nanshan High School(Zhongshan Rd) -> Miaomei Village -> Liancheng Zhonghe Rd Intersection -> Liancheng Jingping Rd Intersection -> National Taxation Bureau Jhonghe Office -> Taimao Village 1 -> Liancheng Jinhe Rd Intersection -> Liancheng Zhongzheng Intersection -> Liancheng Rd -> Zhonghe High School -> Drivers Training Center[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for running two separately numbered Zhonghe–Neihu Science Park shuttles, 內科2 and 內科3, over a largely overlapping corridor under different operators, was found in this search.
