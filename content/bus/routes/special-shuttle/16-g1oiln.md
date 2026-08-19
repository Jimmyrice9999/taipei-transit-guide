---
title: "NH16 / 內科通勤專車16"
summary: "Special shuttle route: NH16 (內科通勤專車16)."
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
  - id: ebus-route-16-g1oiln
    title: "NH16 route schedule"
    titleOriginal: "內科通勤專車16班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車16 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 內湖科技園區”, the current head/last-departure field “[平日] 0705 - 1810 [假日] 停駛”, fare “兩段票”.[^ebus-route-16-g1oiln] It currently lists weekday service and suspended holiday service.[^ebus-route-16-g1oiln]

At 45 stops each way, the confirmed stop sequence runs from 貴子坑水
土保持園區, past 秀山里/慈航寺/國泰新村/中和里/復興中學/中和街/新北投/北
投公園/第一銀行, through 捷運唭哩岸站/捷運石牌站/捷運明德站/捷運芝山站/
士林/捷運士林站(中正)/福林國小/士林官邸(中正)/泰北中學/東吳大學(錢穆
故居)/外雙溪(故宮), ending at 內湖基湖路口/基湖路口/仁寶大樓/瑞光港墘路
口/瑞光路/公館山/麗寶大樓/時報廣場/民權大橋 in the Neihu Science Park.[^tdx-bus]
Seven confirmed interchanges are recorded in the curated
stop-ID join set: Jiannan Rd. (BR15), Zhishan (R17), Mingde (R18),
Shipai (R19), Qilian (R20), Qiyan (R21) and Xinbeitou (R22A), tied for
the second-widest confirmed spread of any route in this batch, behind
only the tourist-oriented 臺北觀光巴士紅線.[^tdx-bus] The route runs two
named subroutes under one operator, 大南汽車, on a two-stage fare,
weekdays only with holiday service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension was found in this search, nor a stated reason for pairing 北投 with the Neihu Science Park specifically over such a long corridor, rather than a shorter feeder to a nearer station.
