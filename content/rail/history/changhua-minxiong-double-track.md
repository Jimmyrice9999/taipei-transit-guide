---
title: The Taiwan Railways Changhua–Minxiong Double Track
summary: A 71.7 km TRA construction-history segment recorded as built in 1957 and opened in 1970 with a double-track extension, kept separate from the current Western Main Line data layer.
order: 15
updated: 2026-08-26
aliases:
  - 彰化—民雄(雙線)
  - 彰化─民雄(雙線)
  - Changhua–Minxiong
  - Changhua–Minxiong double track
facts:
  - label: Operator-listed construction segment length
    value: 71.7
    unit: km
    source: tra-history-page
  - label: Construction year
    value: 1957
    source: tra-history-page
  - label: Operation-start year
    value: 1970
    source: tra-history-page
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-history-page
  - label: Current western station record
    value: Changhua (3360)
    source: tra-station-changhua
  - label: Current eastern station record
    value: Minxiong (4060)
    source: tra-station-minxiong
specs:
  - label: Historical construction-table explanation
    value: Extended to be double-tracked
    source: tra-history-page
  - label: Current TDX line membership at Changhua
    value: Western Main Line; Western Main Line (Coast Line)
    source: tdx-tra-line
  - label: Current TDX line membership at Minxiong
    value: Western Main Line
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
    note: Full operator HTML page. Its construction table lists Changhua–Minxiong (double track) at 71.7 km, built in 1957, opened in 1970, with TRA as constructor and the explanation that it was extended to double track.
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Its row 43 repeats the Changhua–Minxiong double-track segment as 71.7 km, with 1957 construction and 1970 operation-start fields.
  - id: tra-station-changhua
    title: Changhua Station information
    titleOriginal: 彰化車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/3360
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 3360 as Changhua and shows current service entries and route status.
  - id: tra-station-minxiong
    title: Minxiong Station information
    titleOriginal: 民雄車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4060
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 4060 as Minxiong and shows current service entries and route status.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current ordered station memberships, including Changhua and Minxiong on the Western Main Line families.
---

## One historical double-track record

Taiwan Railways' full construction-history table lists Changhua–Minxiong as a
71.7 km double-track segment.[^tra-history-page] The table gives 1957 as the
construction year and 1970 as the operation-start year, with Taiwan Railways
Administration listed as the constructor.[^tra-history-page] Its explanation is
添築雙線, rendered by the operator as “Extended to be double-tracked.”[^tra-history-page]

The full operator PDF repeats the same segment and values in its row 43, so the
HTML table and PDF are two presentations of the same primary construction
record, not two different measurements.[^tra-construction-history] This page
therefore treats 71.7 km as the operator's historical construction-table scope.
It does not turn the row into a separate present-day line, and it does not infer
that the table's operation-start field supplies an exact commissioning date.[^tra-history-page][^tra-construction-history]

## Current endpoints are a separate data layer

The current operator station page identifies Changhua as station 3360 and
displays current service entries at that station.[^tra-station-changhua] The
current Minxiong page identifies station 4060 and likewise displays current
service entries.[^tra-station-minxiong] These pages establish the current
station records named by the historical segment; they do not provide the
historical construction contract, intermediate station register or track plan.

The committed TDX StationOfLine snapshot places Changhua in the Western Main
Line and Western Main Line (Coast Line) families, while Minxiong is in the
Western Main Line.[^tdx-tra-line] That current membership is useful for locating
the two anchors in today's data model. It is not a claim that the 71.7 km
construction-table entry maps one-to-one onto one current TDX route record, or
that every current service uses the same stopping pattern.[^tdx-tra-line][^tra-history-page]

The table's phrase “double-tracked” is retained as a construction explanation,
not silently upgraded into a current track-count survey.[^tra-history-page] A
historical construction record, a current line-membership dataset and a live
station information page answer different questions. Keeping them separate
avoids adding the segment length to a current travelled-distance field or
inventing a second Western Main Line identity.[^tra-history-page][^tdx-tra-line]

## Records still missing

The checked operator records provide years, the 71.7 km table distance and the
double-track explanation, but not the day and month of construction or opening,
the contract and completion certificate, a surveyed boundary, an intermediate
station list for the historical segment, or a current track-count/as-built
survey.[^tra-history-page][^tra-construction-history] Those fields remain TBC.
The current station and TDX records confirm the live anchors and memberships;
they do not fill the historical engineering gaps.[^tra-station-changhua][^tra-station-minxiong][^tdx-tra-line]
