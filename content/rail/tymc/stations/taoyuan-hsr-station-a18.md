---
title: "Taoyuan HSR Station — Taoyuan Airport MRT"
summary: "Taoyuan HSR Station (A18), stop 18 of 22 on the Taoyuan Airport MRT, in 中壢區."
order: 118
line: A
operator: TYMC
spine: A18
updated: 2026-08-28
facts:
  - label: Station code
    value: A18
    source: tdx-tymc-station
  - label: Traditional Chinese name
    value: 高鐵桃園站
    source: tdx-tymc-station
  - label: Administrative city
    value: 桃園市
    source: tdx-tymc-station
  - label: Administrative district
    value: 中壢區
    source: tdx-tymc-station
  - label: Sequence (Taipei Main to Laojie River)
    value: 18
    source: tdx-tymc-sor
  - label: Structure
    value: Above ground, side platform, 2 tracks; sources disagree on the exact level count — see below
    source: rb-airport-station-architecture
  - label: Service pattern
    value: Both express (直達車) and commuter (普通車)
    source: tymc-express-timetable
  - label: Exits
    value: 2; HSR North Road Section 1 at Taoyuan HSR Station and near Gloria Outlets
    source: tymc-a18-station
specs:
  - label: Cumulative distance from A1
    value: 44.57
    unit: km
    source: tdx-tymc-sor
  - label: Latitude
    value: 25.01374
    unit: degrees
    source: tdx-tymc-station
  - label: Longitude
    value: 121.21406
    unit: degrees
    source: tdx-tymc-station
sources:
  - id: tdx-tymc-station
    title: TDX Taoyuan Airport MRT station records
    titleOriginal: 桃園機場捷運車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/TYMC?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The committed 22-station snapshot supplies this station's code, Traditional Chinese and English names, address, administrative city/district and coordinates."
  - id: tdx-tymc-sor
    title: TDX Taoyuan Airport MRT station-of-route records
    titleOriginal: 桃園機場捷運路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TYMC?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Route A-1 (Taipei Main Station to Laojie River) gives this station's sequence position and cumulative distance from A1."
  - id: tymc-a18-station
    title: Taoyuan Airport MRT A18 station information
    titleOriginal: 桃園機場捷運高鐵桃園站車站資訊
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A18/A4
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own current station page, giving the address, exit table and accessible-lift information used on this page."
  - id: rb-airport-station-architecture
    title: Taoyuan Airport MRT station architecture report
    titleOriginal: 桃園國際機場聯外捷運系統車站建築設計報告
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/public/files/artsinfo/1500644721-0.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The Bureau's own full architecture report gives each station's structure, platform form, track count and design-contract package."
  - id: tymc-express-timetable
    title: Taoyuan Airport MRT route and stopping pattern
    titleOriginal: 桃園捷運機場線路線圖及停靠站
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/road.html
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own current page states the fixed express (直達車) stop list (A1, A3, A8, A12, A13), the peak-hour \"Huanbei Express\" addition of A18 and A21, and that the commuter (普通車) service calls at every station."
  - id: dorts-airport-a-table
    title: Airport MRT station table
    titleOriginal: 機場線車站一覽表
    publisher: Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23131
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Current station table giving each station's location, structure and any stated interchange."
  - id: tra-thsr-transfer
    title: TRA/THSR transfer information
    titleOriginal: 台鐵高鐵轉乘資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip117/queryTraTransferThsr
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "TRA's own page states Taoyuan is one of two stations nationwide where its station and THSR's are not co-structured or co-line."
  - id: tycg-tourism-airport-mrt
    title: Airport MRT travel guide
    titleOriginal: 機場捷運交通資訊
    publisher: Taoyuan Tourism (桃園觀光導覽網, Taoyuan City Government)
    url: https://travel.tycg.gov.tw/zh-tw/traffic/airportmrt
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The city government's current tourism page states express and commuter journey times between named stations."
---

Taoyuan HSR Station is the line's interchange with Taiwan High Speed Rail. TYMC's own station page states the connection directly: "via an underground connecting passage within the station; walking time is approximately 5 minutes."[^tymc-a18-station] Taoyuan City's own current Airport Line station table separately confirms the interchange, placing the station on the north side of the HSR complex.[^dorts-airport-a-table] Neither source states whether the connection stays within one paid area or requires passing through separate fare gates, which stays TBC rather than assumed.

**Taiwan Railways does not interchange at this station**, despite its name and the HSR pairing: TRA's own transfer-information page lists Taoyuan explicitly as one of two stations nationwide where its own station and THSR's are "not co-structured, not co-line" (兩鐵非共構共線車站), directing passengers instead to a city bus or THSR's free shuttle from the nearby TRA station.[^tra-thsr-transfer] TRA's own Taoyuan station is a separate facility elsewhere in the city; a planned Taoyuan railway-undergrounding project may eventually connect it with the Taoyuan Metro network, but that is a different, not-yet-built project at TRA's own station, not this one.[^tra-thsr-transfer]

Sources also disagree on the station's own level count: zh.wikipedia's own article states three above-ground levels in its body text but two above-ground levels in its infobox, an inconsistency within that single secondary source rather than a disagreement between two sources; this page does not attempt to resolve it.

TYMC's own timetable page lists A18 among the peak-hour "Huanbei Express" (環北直達車) stops — the base express pattern of A1, A3, A8, A12 and A13 with A18 and A21 added during peak hours — alongside the commuter (普通車) service that calls at every station.[^tymc-express-timetable] A Taoyuan tourism-portal page separately gives a commuter journey time of 19 minutes from this station to Airport Terminal 1.[^tycg-tourism-airport-mrt]
