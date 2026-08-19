---
title: "Taipei Sightseeing Bus Red route / 臺北觀光巴士紅線"
summary: "Special shuttle route: Taipei Sightseeing Bus Red route (臺北觀光巴士紅線)."
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
  - id: ebus-route-route-q03sgr
    title: "Taipei Sightseeing Bus Red route route schedule"
    titleOriginal: "臺北觀光巴士紅線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162003400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 臺北觀光巴士紅線 under 觀光巴士 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “臺北車站 - 台北101”, the current head/last-departure field “[平日] 0910 - 1850 [假日] 0910 - 1850”, fare “詳票價表” (see the operator's own separate fare table, not a plain per-stage figure).[^ebus-route-route-q03sgr]

The confirmed stop sequence is a single loop of 21 stops, running from
臺北車站(忠孝), past 捷運西門站/小南門/萬華車站/捷運龍山寺站/中正紀念堂/
信義永康街口(捷運東門站)/捷運大安森林公園站/捷運大安站(信義)/信義敦化
路口/信義通化街口/101國際購物中心/松壽路口/捷運市政府站/捷運國父紀念
館站(忠孝)/捷運忠孝敦化站/頂好市場/捷運忠孝復興站/華山文創園區, and back
to 臺北車站(忠孝).[^tdx-bus] Eleven confirmed interchanges are recorded
in the curated stop-ID join set — Longshan Temple (BL10), Ximen
(BL11/G12), Taipei Main Station (BL12/R10), Zhongxiao Fuxing
(BL15/BR10), Zhongxiao Dunhua (BL16), Sun Yat-Sen Memorial Hall
(BL17), Taipei City Hall (BL18), Daan (BR09/R05), Dongmen (O06/R07),
Xinyi Anhe (R04) and Daan Park (R06) — the widest confirmed spread of
any route in this entire batch.[^tdx-bus] The route runs a single
subroute under one operator, 三重客運, one of two Taipei Sightseeing Bus
lines classified together as 觀光巴士.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] The route's own actual fare figures stay TBC, since the catalogue points to a separate table rather than publishing a plain per-stage value.
