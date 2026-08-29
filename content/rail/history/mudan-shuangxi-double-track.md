---
title: The Taiwan Railways Mudan–Shuangxi Double Track
summary: A 3.1 km TRA construction-history segment recorded in the operator's records as built in 1974 and opened in 1978 with an added second track, while current TDX data gives a separate 3.4 km endpoint-distance interval.
order: 24
updated: 2026-08-26
aliases:
  - 牡丹–雙溪(雙線)
  - Mudan–Shuangxi
  - Mudan–Shuangxi double track
facts:
  - label: Operator construction-history segment length
    value: 3.1
    unit: km
    source: tra-construction-history
  - label: Construction year in the operator records
    value: 1974
    source: tra-construction-history
  - label: Operation-start year in the operator records
    value: 1978
    source: tra-construction-history
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current operator Mudan station record
    value: Mudan (7320)
    source: tra-station-mudan
  - label: Current operator Shuangxi station record
    value: Shuangxi (7310)
    source: tra-station-shuangxi
specs:
  - label: Construction-table explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current TDX line membership
    value: Eastern Main Line (EL)
    source: tdx-tra-line
  - label: Current TDX ordered positions
    value: Mudan 7; Shuangxi 8
    source: tdx-tra-line
  - label: Current TDX endpoint distance difference
    value: 3.4
    unit: km
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
    note: Full ten-page operator PDF. Row 53 lists Mudan–Shuangxi (double track) as 3.1 km with TRA as constructor; the aligned chronology gives 1974 construction, 1978 operation start and 添築雙線.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML page, marked last updated 2026-04-27. Row 30 lists Mudan–Shuangxi (double track) at 3.1 km, with 1974 construction, 1978 operation start and 添築雙線.
  - id: tra-station-mudan
    title: Mudan Station information
    titleOriginal: 牡丹車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7320
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 7320 as Mudan and supplies its current station information.
  - id: tra-station-shuangxi
    title: Shuangxi Station information
    titleOriginal: 雙溪車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7310
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 7310 as Shuangxi and supplies its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Mudan 7320 and Shuangxi 7310.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Mudan at source sequence 6 and 19.5 km, and Shuangxi at source sequence 7 and 22.9 km on EL; the content layer presents these as one-based positions 7 and 8.
  - id: wiki-yilan-expansion
    title: Yilan Line railway expansion project
    titleOriginal: 宜蘭線鐵路擴建工程
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/宜蘭線鐵路擴建工程
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Fetched and re-verified directly. Places this segment in the same 1974/1-1978/2 'Seven Bottleneck Sections Double-Track Improvement Project' (改善瓶頸七區間雙軌工程) as the neighbouring Sijiaoting-Ruifang segment: 「牡丹=雙溪間3.0公里：此區間增建上行線『五份隧道』、『第三武丹坑橋』、『宜蘭街道陸橋』、『第二武丹坑橋』、改建牡丹站站房等等，因沿線土質鬆軟，工程期間適逢雨季，遲至1978年2月14日始完成雙線工程。本區間擴建雙線時並未改線，沿線彎道半徑及坡度維持原狀」— giving a 3.0 km scope (see Conflicts against the operator's own 3.1 km), a new up-line tunnel (五份隧道) and three named bridges/overpasses, a rebuilt Mudan station building, soft-soil and rainy-season delay, completion 1978-02-14, and an explicit statement that curve radii and grades were not altered during doubling. The article cites 交通年鑑 volumes and a 1979 中國時報 article for this passage, neither independently fetched — reported as a lead consistent with the operator's own years, not independently primary-confirmed for the engineering detail."
---

## One historical double-track record

The full operator construction-history PDF identifies row 53 as 牡丹–雙溪(雙線),
Mudan–Shuangxi (double track), at 3.1 km, with Taiwan Railways Administration
as constructor.[^tra-construction-history] Its aligned chronology gives 1974 as
the construction year and 1978 as the operation-start year.[^tra-construction-history]
The explanation is 添築雙線, rendered by the operator as “Extended to be
double-tracked.”[^tra-construction-history]

The current operator HTML independently preserves the same record. Its row 30
lists Mudan–Shuangxi (double track) at 3.1 km, with 1974 construction, 1978
operation start and the same 添築雙線 explanation.[^tra-history-page] The two
operator presentations agree on the historical values even though their row
numbers differ.[^tra-history-page][^tra-construction-history] The table supplies
years and a construction explanation, not exact day-level milestones or a
current as-built track-count survey.[^tra-history-page][^tra-construction-history]

## Current station and TDX records are a separate layer

The current operator station pages identify Mudan as station 7320 and Shuangxi
as station 7310.[^tra-station-mudan][^tra-station-shuangxi] The committed TDX
station pull contains the same two current station identities.[^tdx-tra-station]

TDX places both stations on the Eastern Main Line (EL).[^tdx-tra-line] In its
source sequence Mudan is position 6 with a supplied travelled distance of 19.5
km, and Shuangxi is position 7 at 22.9 km.[^tdx-tra-line] The guide presents
those as one-based positions 7 and 8.[^tdx-tra-line] Subtracting the supplied
endpoint fields gives 3.4 km. That is a current distance-field measure, not a
replacement for the operator's 3.1 km historical construction-table scope.[^tdx-tra-line][^tra-construction-history]

The current ordered TDX records make Mudan and Shuangxi adjacent in the EL
snapshot.[^tdx-tra-line] The current operator station pages also show the
neighbouring station relationship in their live arrival information, with
Shuangxi shown after Mudan in the relevant direction.[^tra-station-mudan] This
current ordering locates the station records, but it does not prove that the
operator's historical 3.1 km construction boundary is identical to the current
3.4 km endpoint interval.[^tdx-tra-line][^tra-construction-history]

## Part of a named national programme

Secondary reporting places this segment inside the same named seven-segment national double-tracking programme as the neighbouring Sijiaoting-Ruifang segment, the 改善瓶頸七區間雙軌工程 ("Seven Bottleneck Sections Double-Track Improvement Project"), running January 1974 to February 1978.[^wiki-yilan-expansion] That account gives this segment's scope as 3.0 km — a conflict against the operator's own 3.1 km construction-table figure, published here as an open conflict rather than resolved — and describes a new up-line tunnel (五份隧道, Wufen Tunnel), three named bridges and overpasses (第三武丹坑橋, 宜蘭街道陸橋, 第二武丹坑橋), and a rebuilt Mudan station building.[^wiki-yilan-expansion][^tra-construction-history] It attributes construction delay to soft soil and rainy-season conditions, and dates completion of the double-track work to 14 February 1978.[^wiki-yilan-expansion] Notably, it states the doubling work did not realign the route: curve radii and grades were kept as they were, 「沿線彎道半徑及坡度維持原狀」.[^wiki-yilan-expansion]

## Records still missing

The checked operator records provide the historical distance, constructor, years
and double-track explanation, but not the day and month of either milestone, the
contract or completion certificate, a surveyed centreline, the historical
boundary's engineering chainage or a current as-built track-count survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC. The current TDX 3.4 km endpoint-field difference is
reported alongside, rather than substituted for, the operator's 3.1 km
construction scope.[^tdx-tra-line][^tra-construction-history]
