---
title: The Taiwan Railways Dongshan–Su'aoxin Double Track
summary: A 5.4 km TRA construction-history segment recorded in both operator presentations as built in 1974 and opened in 1977 with an added second track, while current TDX data places Xinma between its named endpoints.
order: 22
updated: 2026-08-26
aliases:
  - 冬山─蘇澳新站(雙線)
  - Dongshan–Su'aoxin Station
  - Dongshan–Su'aoxin double track
facts:
  - label: Operator construction-history segment length
    value: 5.4
    unit: km
    source: tra-construction-history
  - label: Construction year in the operator records
    value: 1974
    source: tra-construction-history
  - label: Operation-start year in the operator records
    value: 1977
    source: tra-construction-history
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current operator Dongshan station record
    value: Dongshan (7150)
    source: tra-station-dongshan
  - label: Current operator Su'aoxin station record
    value: Su'aoxin (7130)
    source: tra-station-su-aoxin
specs:
  - label: Construction-table explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current TDX line membership
    value: Eastern Main Line (EL)
    source: tdx-tra-line
  - label: Current TDX ordered positions
    value: Dongshan 24; Xinma 25; Su'aoxin 26
    source: tdx-tra-line
  - label: Current TDX endpoint distance difference
    value: 5.1
    unit: km
    source: tdx-tra-line
  - label: Current TDX intermediate station
    value: Xinma (7140)
    source: tdx-tra-line
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 51 lists Dongshan–Su'aoxin Station (double track) as 5.4 km with TRA as constructor; the aligned chronology gives 1974 construction, 1977 operation start and 添築雙線.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML page, marked last updated 2026-04-27. Its row 28 lists Dongshan–Su'aoxin Station (double track) at 5.4 km, with 1974 construction, 1977 operation start and 添築雙線.
  - id: tra-station-dongshan
    title: Dongshan Station information
    titleOriginal: 冬山車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7150
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 7150 as Dongshan and supplies its current station information.
  - id: tra-station-su-aoxin
    title: Su'aoxin Station information
    titleOriginal: 蘇澳新車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7130
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 7130 as Su'aoxin and supplies its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Dongshan 7150, Xinma 7140 and Su'aoxin 7130.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Dongshan at source sequence 23 and 85.1 km, Xinma at 24 and 89.3 km, and Su'aoxin at 25 and 90.2 km on EL; the content layer presents these ordered positions as 24, 25 and 26.
---

## One historical double-track record

The full operator construction-history PDF identifies row 51 as
冬山─蘇澳新站(雙線), Dongshan–Su'aoxin Station, at 5.4 km, with Taiwan
Railways Administration as constructor.[^tra-construction-history] Its aligned
chronology gives 1974 as the construction year and 1977 as the operation-start
year.[^tra-construction-history] The explanation is 添築雙線, rendered by the
operator as “Extended to be double-tracked.”[^tra-construction-history]

The current operator HTML is not silent about the same subject. Its row 28
lists Dongshan–Su'aoxin Station (double track) at 5.4 km, with 1974 construction,
1977 operation start and the same 添築雙線 explanation.[^tra-history-page] The
two operator presentations agree on the reported historical values, while
using different row numbering and presentation boundaries.[^tra-history-page][^tra-construction-history]
This page retains the 5.4 km value as the operator construction-table scope;
the year fields do not establish exact day-level milestones or a current
track-count survey.[^tra-construction-history]

## Current station and TDX records are a separate layer

The current operator station pages identify Dongshan as station 7150 and
Su'aoxin as station 7130.[^tra-station-dongshan][^tra-station-su-aoxin] The
committed TDX station pull also contains Xinma 7140, so the current data layer
has a named station between the historical segment's endpoints.[^tdx-tra-station]

TDX places these stations on the Eastern Main Line (EL).[^tdx-tra-line] In its
source sequence Dongshan is 23 with a supplied travelled distance of 85.1 km,
Xinma is 24 at 89.3 km, and Su'aoxin is 25 at 90.2 km.[^tdx-tra-line] The guide
presents those as ordered positions 24, 25 and 26, because its displayed
positions are one-based.[^tdx-tra-line] Subtracting the supplied endpoint
fields gives 5.1 km, while the two adjacent differences are 4.2 km and 0.9 km.
That is a current distance-field measure, not a replacement for the operator's
5.4 km historical construction scope.[^tdx-tra-line][^tra-construction-history]

The current Su'aoxin page also reports a station notice that Xinma is
temporarily out of service and directs passengers to transfer at Su'aoxin.[^tra-station-su-aoxin]
That live service notice does not change Xinma's membership in the committed
TDX station sequence or establish the historical construction boundary.[^tra-station-su-aoxin][^tdx-tra-line]

## Records still missing

The checked operator records provide the historical distance, constructor, years
and double-track explanation, but not the day and month of either milestone, the
contract or completion certificate, a surveyed centreline, the historical
boundary's engineering chainage or a current as-built track-count survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC. The presence of Xinma in current TDX data is reported
as a current ordered-station fact, not used to rewrite the historical segment
name or its rounded construction-table distance.[^tdx-tra-line]
