---
title: "NK(BeiTou) / 南軟通勤專車北投線"
summary: "Special shuttle route: NK(BeiTou) (南軟通勤專車北投線)."
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
  - id: ebus-route-route-174oym7
    title: "NK(BeiTou) route schedule"
    titleOriginal: "南軟通勤專車北投線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 南軟通勤專車北投線 under 南軟專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “新北投 - 南港軟體園區”, the current head/last-departure field “[平日] 0648 - 1820 [假日] 停駛”, fare “兩段票”.[^ebus-route-route-174oym7] It currently lists weekday service and suspended holiday service.[^ebus-route-route-174oym7]

The confirmed stop sequence runs from 貴子坑水土保持園區, past 秀山里/
慈航寺/國泰新村/中和里/復興中學/中和街/新北投/北投公園/第一銀行/中央南
路, through 捷運奇岩站/大業路(農禪寺)/承德公舘路口/立農國小/實踐街口/承
德路七段/石牌福星宮/文林國小/中正高中/捷運芝山站(戲曲中心)/士林/小北
街/捷運劍潭站(中山)/劍潭/圓山大飯店/中央電台/忠烈祠/經國七海文化園區/
空軍司令部/大直高中/大直國小/捷運大直站/植福宮/自強隧道/捷運劍南路站/
美麗華, ending at 園區街/南港軟體園區(一期大門).[^tdx-bus] Seven
confirmed interchanges are recorded in the curated stop-ID join set:
Dazhi (BR14), Jiannan Rd. (BR15), Jiantan (R15), Zhishan (R17), Qiyan
(R21), Beitou (R22) and Xinbeitou (R22A), tied for the second-widest
confirmed spread of any route in this batch alongside the separate
內科通勤專車16.[^tdx-bus] The route runs two named subroutes under one
operator, 大南汽車, on a two-stage fare, weekdays only with holiday
service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 新北投 with the Nangang Software Park specifically as the route's own termini over this long a corridor was found in this search.
