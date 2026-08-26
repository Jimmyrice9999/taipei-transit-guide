---
title: The Taiwan Railways Jianan–Qingshui Double Track
summary: A 6.0 km TRA construction-history segment recorded as built and opened in 1974 with an added second track, kept separate from the current Western Main Line data layer.
order: 20
updated: 2026-08-26
aliases:
  - 甲南–清水(雙線)
  - 甲南─清水(雙線)
  - Jianan–Qingshui
  - Jianan–Qingshui double track
facts:
  - label: Operator-listed construction segment length
    value: 6.0
    unit: km
    source: tra-history-page
  - label: Construction year
    value: 1974
    source: tra-history-page
  - label: Operation-start year
    value: 1974
    source: tra-history-page
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-history-page
  - label: Current Taichung Port station record
    value: Taichung Port (2210)
    source: tra-station-taichung-port
  - label: Current Qingshui station record
    value: Qingshui (2220)
    source: tra-station-qingshui
specs:
  - label: Historical construction-table explanation
    value: Extended to be double-tracked
    source: tra-history-page
  - label: Current TDX line membership
    value: Western Main Line (Coast Line)
    source: tdx-tra-line
  - label: Current TDX sequence
    value: Taichung Port 12; Qingshui 13
    source: tdx-tra-line
sources:
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML page. Row 27 lists Jianan–Qingshui (double track) at 6.0 km, built in 1974, opened in 1974, with TRA as constructor and the explanation 添築雙線.
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 48 repeats Jianan–Qingshui (double track) at 6.0 km; the aligned chronology gives 1974 construction, 1974 operation start and 添築雙線.
  - id: tra-station-taichung-port
    title: Taichung Port Station information
    titleOriginal: 臺中港車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2210
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2210 as Taichung Port and supplies its current address and service information.
  - id: tra-station-qingshui
    title: Qingshui Station information
    titleOriginal: 清水車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2220
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2220 as Qingshui and supplies its current address and service information.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Taichung Port at source sequence 11 with travelled distance 59.3 km and Qingshui at source sequence 12 with 65.3 km on WL-C; the content layer presents these ordered positions as 12 and 13.
---

## One historical double-track record

Taiwan Railways' full current construction-history table lists row 27 as
甲南–清水(雙線), Jianan–Qingshui, at 6.0 km.[^tra-history-page] The row gives
1974 as both the construction year and the operation-start year, with Taiwan
Railways Administration listed as the constructor.[^tra-history-page] Its
explanation is 添築雙線, rendered by the operator as “Extended to be
double-tracked.”[^tra-history-page]

The full operator PDF repeats the same subject as row 48, with the same 6.0 km
distance and 1974/1974 chronology.[^tra-construction-history] The HTML and PDF
are two presentations of the same operator construction record, not two
independent route measurements.[^tra-history-page][^tra-construction-history]
The 6.0 km value is therefore retained as the historical construction-table
scope, not converted into a current track-count or a separate present-day line
identity.[^tra-history-page][^tra-construction-history]

## Current station records are a separate layer

The current operator station page identifies Taichung Port as station 2210 and
supplies its current address and service information.[^tra-station-taichung-port]
The corresponding Qingshui page identifies station 2220 and supplies its
current address and service information.[^tra-station-qingshui] These pages
establish the current station records named by the historical segment; they do
not provide its construction contract, intermediate station register or
surveyed boundary.

The committed TDX StationOfLine snapshot places Taichung Port at sequence 12 on
WL-C with a travelled distance of 59.3 km and Qingshui at sequence 13 with
65.3 km.[^tdx-tra-line] The difference between those supplied current distances
is 6.0 km, the same rounded value as the operator's historical construction
table. That numerical agreement is retained without inferring that the live
interval and historical construction boundary are surveyed equivalents, and
neither value is treated as proof of current track count.[^tdx-tra-line][^tra-history-page]
The guide therefore keeps the historical segment, the current station pages
and the current line-membership data as separate records.[^tra-history-page][^tdx-tra-line]

## Records still missing

The checked operator records provide the distance, years, constructor and
double-track explanation, but not the day and month of either milestone, the
contract and completion certificate, a surveyed historical boundary, an
intermediate station register or a current track-count/as-built survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC rather than being inferred from the current 6.0 km
difference between the two TDX records.[^tdx-tra-line]
