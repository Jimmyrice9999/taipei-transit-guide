---
title: "S9(Shuttle) / 小9區"
summary: "Minibus and community route: S9(Shuttle) (小9區)."
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
  - id: ebus-route-minibus-9-a5p7i9
    title: "S9(Shuttle) route schedule"
    titleOriginal: "小9區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000920
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小9區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 陽明山”, the current head/last-departure field “[平日] 0840 - 1810 [假日] 0840 - 1810”, fare “一段票”.[^ebus-route-minibus-9-a5p7i9]

The confirmed stop sequence runs from 致遠新村, past 稻香圖書館/復興崗/文化
國小/幼華高中(大業), through 捷運北投站(北投)/北投國小/第一銀行/北投公園,
along 新北投/新民國中/國軍北投醫院/林泉里/新民路底/泉源別墅/彌陀寺(硫磺谷)/
大同之家/十八份福德宮/十八份/泉源國小/頂湖/陽明公園服務中心/陽明山立體停車
場, ending at 陽明山, a shorter run than the separate 小9, which
continues past the same stretch to 竹子湖.[^tdx-bus] Two confirmed
interchanges are recorded in the curated stop-ID join set: Beitou
(R22) and Xinbeitou (R22A), the same pair confirmed for 小9 itself.
[^tdx-bus] The route runs a single subroute under one operator, 大南
汽車, the same operator running 小9 over the longer corridor.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for publishing this shorter run as a separately numbered shuttle route rather than a subroute of 小9 itself was found in this search.
