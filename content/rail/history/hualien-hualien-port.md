---
title: The Taiwan Railways Hualien–Hualien Port Records
summary: The operator records two Hualien–Hualien Port entries—4.0 km before Retrocession and 5.8 km for the later TRA construction completed in 1979—while a 2005 operating table retains the 5.8 km section.
order: 25
updated: 2026-08-26
aliases:
  - 花蓮–花蓮港
  - 花蓮–花蓮港線
  - Hualien–Hualien Port
  - Hualien–Hualien Port railway
facts:
  - label: Earlier operator-record Hualien–Hualien Port entry
    value: 4.0
    unit: km
    source: tra-construction-history
  - label: Later operator-record Hualien–Hualien Port entry
    value: 5.8
    unit: km
    source: tra-construction-history
  - label: Later construction year
    value: 1975
    source: tra-construction-history
  - label: Later operation-start year
    value: 1979
    source: tra-construction-history
  - label: Current operator Hualien station record
    value: Hualien (7000)
    source: tra-station-hualien
specs:
  - label: Earlier-record constructor
    value: Taiwan Railway Bureau, before Retrocession
    source: tra-construction-history
  - label: Later-record constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: 2005 operating-section value
    value: 5.8
    unit: km
    source: tra-statistical-report-2005
  - label: 2005 operating-line table
    value: Huatung Line
    source: tra-statistical-report-2005
  - label: Hualien position in current TDX EL data
    value: 38
    unit: position
    source: tdx-tra-line
  - label: Hualien Port electrification milestone
    value: 2012-06-22
    source: tra-timeline-hualien-port
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. It lists an earlier 4.0 km Hualien–Hualien Port entry before Retrocession and row 54 as a later 5.8 km TRA entry; the aligned chronology gives the later entry 1975 construction and 1979 operation start.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. It includes Xincheng–Hualien Port and later Hualien-area records but does not repeat a Hualien–Hualien Port row.
  - id: tra-statistical-report-2005
    title: Statistical Report of Taiwan Railways Administration 2005
    titleOriginal: 臺灣鐵路統計年報
    publisher: Taiwan Railways Administration, Ministry of Transportation and Communications (交通部臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/67277957-973c-428a-a4a4-e803baadb956
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full 2005 operator statistical report. Table 2, Operating Kilometers—by Section, records Hualien–Hualien Port as a 5.8 km section of the Huatung Line at the end of 2005.
  - id: tra-timeline-hualien-port
    title: Taiwan Railways chronology, 2012
    titleOriginal: 101年大事紀要表
    publisher: Taiwan Railways Administration (臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=14
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full operator chronology. The 22 June 2012 entry says Hualien Port station and the Hualien Port branch were fully electrified from 00:00.
  - id: tra-station-hualien
    title: Hualien Station information
    titleOriginal: 花蓮車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies the current passenger station as 7000 花蓮 and supplies its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains the current Hualien 7000 passenger-station record; it does not contain a named Hualien Port station record.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Hualien 7000 at source sequence 37, presented as one-based position 38, with a supplied travelled distance of 169.7 km on EL; it contains no Hualien Port endpoint record.
---

## Two operator records share the endpoint name

Taiwan Railways' complete construction-history PDF contains an earlier
Hualien–Hualien Port entry of 4.0 km, attributed to the Taiwan Railway Bureau
before Retrocession.[^tra-construction-history] The same PDF later contains row
54, again named Hualien–Hualien Port, at 5.8 km with Taiwan Railways
Administration as constructor.[^tra-construction-history] The aligned chronology
for row 54 gives 1975 as the construction year and 1979 as the operation-start
year.[^tra-construction-history]

These are two operator records, not a reason to average 4.0 and 5.8 km into a
new figure.[^tra-construction-history] The PDF does not explain in the row itself whether the later entry
is a rebuilt, widened, relocated or otherwise redefined scope of the earlier
one.[^tra-construction-history] The page therefore keeps the earlier
pre-Retrocession value and the later TRA value as separate historical
measurements.[^tra-construction-history]

## The current operator table has a different coverage boundary

The current operator HTML history table does not repeat a Hualien–Hualien Port
row. It does list Xincheng–Hualien Port as a 19.2 km entry, and separately lists
Hualien–Heping and Heping–Su'aoxin Station in the later Hualien-area records.[^tra-history-page]
Those rows are not substituted for either of the PDF's Hualien–Hualien Port
values.[^tra-history-page][^tra-construction-history]

The operator's 2005 statistical report supplies a different but related
evidence layer.[^tra-statistical-report-2005] Its Table 2 records Hualien–Hualien Port as a 5.8 km operating
section of the Huatung Line at the end of 2005.[^tra-statistical-report-2005]
That dated operating-section table agrees numerically with the later 5.8 km
construction-history entry, but it does not by itself prove that its section
boundary is identical to the historical construction boundary.[^tra-statistical-report-2005][^tra-construction-history]

## Current station data does not supply a port endpoint code

The current operator station page identifies Hualien as station 7000.[^tra-station-hualien]
The committed TDX station pull contains that current Hualien record, but no
named Hualien Port passenger-station record; the page therefore does not assign
an invented station ID to the port endpoint.[^tdx-tra-station] TDX places Hualien
at one-based position 38 on the Eastern Main Line, with a supplied travelled
distance of 169.7 km.[^tdx-tra-line] This current passenger-data placement is a
reference point, not proof of the historical port boundary.[^tdx-tra-line][^tra-construction-history]

The operator's own chronology records that Hualien Port station and the Hualien
Port branch were fully electrified from 22 June 2012.[^tra-timeline-hualien-port]
That milestone establishes an operator-record electrification event; it does
not, without a current service or track-status record, establish passenger
service, current track count or the exact surviving physical extent.[^tra-timeline-hualien-port]

## Records still missing

The checked primary sources do not provide the former station sequence, a
surveyed endpoint at Hualien Port, the relationship between the 4.0 km and 5.8
km records, a construction or relocation contract, or a current passenger and
freight service boundary.[^tra-construction-history][^tra-history-page][^tra-statistical-report-2005][^tdx-tra-station]
Those fields remain TBC. The two historical values, the dated 2005 operating
section and the 2012 electrification milestone are retained as separate
records until an operator engineering, station or service file connects them.[^tra-construction-history][^tra-statistical-report-2005][^tra-timeline-hualien-port]
