---
title: The Taiwan Railways Yuanli–Rinan Double Track
summary: A 7.8 km TRA construction-history segment recorded as built and opened in 1974 with an added second track, kept separate from the current Western Main Line data layer.
order: 19
updated: 2026-08-26
aliases:
  - 苑裡–日南(雙線)
  - 苑裡─日南(雙線)
  - Yuanli–Rinan
  - Yuanli–Rinan double track
facts:
  - label: Operator-listed construction segment length
    value: 7.8
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
  - label: Current Yuanli station record
    value: Yuanli (2180)
    source: tra-station-yuanli
  - label: Current Rinan station record
    value: Rinan (2190)
    source: tra-station-rinan
specs:
  - label: Historical construction-table explanation
    value: Extended to be double-tracked
    source: tra-history-page
  - label: Current TDX line membership
    value: Western Main Line (Coast Line)
    source: tdx-tra-line
  - label: Current TDX sequence
    value: Yuanli 9; Rinan 10
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
    note: Full current operator HTML page. Row 26 lists Yuanli–Rinan (double track) at 7.8 km, built in 1974, opened in 1974, with TRA as constructor and the explanation 添築雙線.
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 47 repeats Yuanli–Rinan (double track) at 7.8 km; the aligned chronology gives 1974 construction, 1974 operation start and 添築雙線.
  - id: tra-station-yuanli
    title: Yuanli Station information
    titleOriginal: 苑裡車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2180
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2180 as Yuanli, gives the station address and shows current service entries and route status.
  - id: tra-station-rinan
    title: Rinan Station information
    titleOriginal: 日南車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2190
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2190 as Rinan, gives the station address and shows current service entries and route status.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Yuanli at sequence 9 with travelled distance 41.7 km and Rinan at sequence 10 with travelled distance 49.4 km on WL-C.
---

## One historical double-track record

Taiwan Railways' full current construction-history table lists row 26 as
苑裡–日南(雙線), Yuanli–Rinan, at 7.8 km.[^tra-history-page] The row gives
1974 as both the construction year and the operation-start year, with Taiwan
Railways Administration listed as the constructor.[^tra-history-page] Its
explanation is 添築雙線, rendered by the operator as “Extended to be
double-tracked.”[^tra-history-page]

The full operator PDF repeats the same subject as row 47, with the same 7.8 km
distance and 1974/1974 chronology.[^tra-construction-history] The HTML and PDF
are two presentations of the same operator construction record, not two
independent route measurements.[^tra-history-page][^tra-construction-history]
The 7.8 km value is therefore retained as the historical construction-table
scope, not converted into a current track-count or a separate present-day line
identity.[^tra-history-page][^tra-construction-history]

## Current station records are a separate layer

The current operator station page identifies Yuanli as station 2180 and supplies
its current address and service information.[^tra-station-yuanli] The
corresponding Rinan page identifies station 2190 and supplies its current
address and service information.[^tra-station-rinan] These pages establish the
current station records named by the historical segment; they do not provide its
construction contract, intermediate station register or surveyed boundary.

The committed TDX StationOfLine snapshot places Yuanli at sequence 9 on WL-C
with a travelled distance of 41.7 km and Rinan at sequence 10 with 49.4 km.[^tdx-tra-line]
The difference between those supplied current distances is 7.7 km, while the
operator's historical construction table gives 7.8 km. That one-decimal
difference is retained rather than silently reconciled, and neither value is
treated as proof of a surveyed historical boundary.[^tdx-tra-line][^tra-history-page]
The guide therefore keeps the historical segment, the current station pages and
the current line-membership data as separate records.[^tra-history-page][^tdx-tra-line]

## Records still missing

The checked operator records provide the distance, years, constructor and
double-track explanation, but not the day and month of either milestone, the
contract and completion certificate, a surveyed boundary, an intermediate
historical station list or a current track-count/as-built survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC rather than being inferred from the current 7.7 km
distance between the two TDX records.[^tdx-tra-line]

This page's own research searched the Mandarin secondary corpus specifically for engineering detail beyond the operator's own construction table — zh.wikipedia's 苑裡車站, 日南車站, 海岸線(臺鐵), 臺灣鐵路, 縱貫線(鐵路) and 縱貫線(北段) articles were each fetched and checked directly by this research — and none carries a dedicated double-tracking chronology entry for this segment; the station articles cover only later service-pattern changes, not the doubling work itself. The same fabricated 1974 milestone claim this project checked and rejected on the Xinpu–Tongxiao page (see that page's "Records still missing" section) also named this segment and was rejected here for the same reason: this research did not find it stated in any of the Wikipedia articles it was checked against.
