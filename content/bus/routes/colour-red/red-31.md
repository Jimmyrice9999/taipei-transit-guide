---
title: R31 / 紅31
summary: Red-line feeder route R31 (紅31).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅31 under 捷運紅線接駁公車.
  - id: ebus-r31
    title: R31 route schedule
    titleOriginal: 紅31班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003100
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運大湖公園站–捷運民權西路站 corridor, weekday/holiday service spans, one-section fare, weekday peak headway note and 三重客運南港站 contact.
---

## Classification and corridor

The official catalogue lists 紅31 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 捷運大湖公園站 - 捷運民權西路站, weekday and holiday service 0600–2300, one-section fare and 三重客運南港站 as the service contact. It records a weekday peak headway of 15–20 minutes.[^ebus-r31]

The confirmed stop sequence runs from 捷運大湖公園站, past 金龍里/金龍路口/貿商
三村, through 碧湖山莊/西湖園/環山路, into Neihu's 基湖路口/瑞光路, along 民權大橋,
then the length of 民權東路 past 民權龍江路口/民權建國路口, ending at 捷運民權西路
站.[^tdx-bus] Seven confirmed interchanges are recorded in the curated
stop-ID join set: Zhongshan Junior High School (BR12), Songshan Airport
(BR13), Xihu (BR16), Neihu (BR19), Dahu Park (BR20), Zhongshan Elementary
School (O10) and Minquan W. Rd. (O11/R13).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅31 was found
in this search, nor a stated reason for confirming seven interchanges
along a corridor that shares much of its Neihu stretch with sibling 紅29.
No predecessor-route or renumbering history for 紅31 was located either,
nor a stated reason for the operator, 三重客運, running this route so far
from its own namesake district in Sanchong, over a corridor entirely
within Neihu, Songshan and Zhongshan.[^tdx-bus]
