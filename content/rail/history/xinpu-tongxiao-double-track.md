---
title: The Taiwan Railways Xinpu–Tongxiao Double Track
summary: A 5.8 km TRA construction-history segment recorded as built and opened in 1974 with an added second track, kept separate from the current Western Main Line data layer.
order: 18
updated: 2026-08-26
aliases:
  - 新埔—通霄(雙線)
  - 新埔─通霄(雙線)
  - Xinpu–Tongxiao
  - Xinpu–Tongxiao double track
facts:
  - label: Operator-listed construction segment length
    value: 5.8
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
  - label: Current Xinpu station record
    value: Xinpu (2160)
    source: tra-station-xinpu
  - label: Current Tongxiao station record
    value: Tongxiao (2170)
    source: tra-station-tongxiao
specs:
  - label: Historical construction-table explanation
    value: Extended to be double-tracked
    source: tra-history-page
  - label: Current TDX line membership
    value: Western Main Line (Coast Line)
    source: tdx-tra-line
  - label: Current TDX sequence
    value: Xinpu 6; Tongxiao 7
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
    note: Full current operator HTML page. Row 25 lists Xinpu–Tongxiao (double track) at 5.8 km, built in 1974, opened in 1974, with TRA as constructor and the explanation 添築雙線.
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 46 repeats Xinpu–Tongxiao (double track) at 5.8 km; the aligned chronology gives 1974 construction, 1974 operation start and 添築雙線.
  - id: tra-station-xinpu
    title: Xinpu Station information
    titleOriginal: 新埔車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2160
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2160 as Xinpu, gives the station address and shows current service entries and route status.
  - id: tra-station-tongxiao
    title: Tongxiao Station information
    titleOriginal: 通霄車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2170
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2170 as Tongxiao, gives the station address and shows current service entries and route status.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Xinpu at sequence 6 with travelled distance 29.8 km and Tongxiao at sequence 7 with travelled distance 35.6 km on WL-C.
---

## One historical double-track record

Taiwan Railways' full current construction-history table lists row 25 as
新埔–通霄(雙線), Xinpu–Tongxiao, at 5.8 km.[^tra-history-page] The row gives
1974 as both the construction year and the operation-start year, with Taiwan
Railways Administration listed as the constructor.[^tra-history-page] Its
explanation is 添築雙線, rendered by the operator as “Extended to be
double-tracked.”[^tra-history-page]

The full operator PDF repeats the same subject as row 46, with the same 5.8 km
distance and 1974/1974 chronology.[^tra-construction-history] The HTML and PDF
are two presentations of the same operator construction record, not two
independent route measurements.[^tra-history-page][^tra-construction-history]
The 5.8 km value is therefore retained as the historical construction-table
scope, not converted into a current track-count or a separate present-day line
identity.[^tra-history-page][^tra-construction-history]

## Current station records are a separate layer

The current operator station page identifies Xinpu as station 2160 and supplies
its current address and service information.[^tra-station-xinpu] The corresponding
Tongxiao page identifies station 2170 and supplies its current address and
service information.[^tra-station-tongxiao] These pages establish the current
station records named by the historical segment; they do not provide its
construction contract, intermediate station register or surveyed boundary.[^tra-station-xinpu][^tra-station-tongxiao]

The committed TDX StationOfLine snapshot places Xinpu at sequence 6 on WL-C with
a travelled distance of 29.8 km and Tongxiao at sequence 7 with 35.6 km.[^tdx-tra-line]
The difference between those supplied current distances is 5.8 km, but that
arithmetic does not prove that the live travelled-distance interval is identical
to the historical construction-table boundary.[^tdx-tra-line][^tra-history-page]
The guide therefore keeps the historical segment, the current station pages and
the current line-membership data as separate records.[^tra-history-page][^tdx-tra-line]

## Records still missing

The checked operator records provide the distance, years, constructor and
double-track explanation, but not the day and month of either milestone, the
contract and completion certificate, a surveyed boundary, an intermediate
historical station list or a current track-count/as-built survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC rather than being inferred from the current 5.8 km
distance between the two TDX records.[^tdx-tra-line]
