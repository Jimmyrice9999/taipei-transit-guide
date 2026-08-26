---
title: The Taiwan Railways Dajia–Jianan Double Track
summary: A 5.3 km TRA construction-history segment recorded in the operator PDF as built in 1974 and opened in 1977 with an added second track, kept separate from the current station and line data.
order: 21
updated: 2026-08-26
aliases:
  - 大甲—甲南(雙線)
  - 大甲─甲南(雙線)
  - Dajia–Jianan
  - Dajia–Jianan double track
facts:
  - label: Operator-PDF construction segment length
    value: 5.3
    unit: km
    source: tra-construction-history
  - label: Construction year in the operator PDF
    value: 1974
    source: tra-construction-history
  - label: Operation-start year in the operator PDF
    value: 1977
    source: tra-construction-history
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current operator Dajia station record
    value: Dajia (2200)
    source: tra-station-dajia
specs:
  - label: Historical construction-table explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current TDX line membership at Dajia
    value: Western Main Line (Coast Line)
    source: tdx-tra-line
  - label: Current TDX ordered positions
    value: Dajia 11; Taichung Port 12
    source: tdx-tra-line
  - label: Current TDX interval from Dajia to the next station
    value: 5.2
    unit: km
    source: tdx-tra-line
  - label: Current TDX station record for historical Jianan
    value: TBC
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 50 lists Dajia–Jianan (double track) as 5.3 km with TRA as constructor; the aligned chronology gives 1974 construction, 1977 operation start and 添築雙線.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML page, marked last updated 2026-04-27. Its current numbered table does not contain Dajia–Jianan; rows 27 and 28 are Xincheng–Hualien Port and Dongshan–Su'aoxin Station.
  - id: tra-station-dajia
    title: Dajia Station information
    titleOriginal: 大甲車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2200
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2200 as Dajia and supplies its current station information.
  - id: tra-station-taichung-port
    title: Taichung Port Station information
    titleOriginal: 臺中港車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2210
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2210 as Taichung Port and gives the current address on 甲南路.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 2200 as Dajia and has no separate current station record named Jianan or 甲南.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Dajia at source sequence 10 with travelled distance 54.1 km and Taichung Port at source sequence 11 with 59.3 km on WL-C; the content layer presents these ordered positions as 11 and 12, and the current difference is 5.2 km.
---

## One historical double-track record

The full operator construction-history PDF identifies row 50 as
大甲─甲南(雙線), Dajia–Jianan, at 5.3 km, with Taiwan Railways
Administration as constructor.[^tra-construction-history] Its aligned
chronology gives 1974 as the construction year and 1977 as the
operation-start year.[^tra-construction-history] The row's explanation is
添築雙線, rendered by the operator as “Extended to be double-tracked.”[^tra-construction-history]

The 5.3 km value is retained as the PDF's historical construction-table scope.[^tra-construction-history]
It is not silently replaced with a present-day station interval, and the 1977
operation-start field is a year rather than an exact commissioning date.[^tra-construction-history]
This page therefore records a historical construction subject, not a claim that
Jianan is a current station or that the source establishes today's track count.[^tra-construction-history][^tdx-tra-station]

## The current operator table has a different boundary

The current operator HTML history page is a separate presentation. It is marked
last updated 2026-04-27; its row 27 is Xincheng–Hualien Port and row 28 is
Dongshan–Su'aoxin Station.[^tra-history-page] A complete read of that table found
no Dajia–Jianan row.[^tra-history-page] The PDF still contains row 50, so the
different coverage is published as a discrepancy rather than merged into a
single chronology.[^tra-history-page][^tra-construction-history]

## Current station and TDX records are separate

The current operator station page identifies Dajia as station 2200.[^tra-station-dajia]
The committed TDX StationOfLine snapshot places Dajia at ordered position 11 on
the Western Main Line (Coast Line), with a supplied travelled distance of 54.1
km.[^tdx-tra-line] The next ordered station is Taichung Port, presented as
position 12 with a supplied distance of 59.3 km.[^tdx-tra-line] Their current
data-layer difference is therefore 5.2 km, but that arithmetic does not prove
that the current Dajia–Taichung Port interval is the historical Dajia–Jianan
boundary.[^tdx-tra-line][^tra-construction-history]

The current Taichung Port station page gives an address on 甲南路.[^tra-station-taichung-port]
That present address keeps the historical Jianan name visible as a lead, but it
does not establish a one-to-one historical-to-current endpoint mapping.[^tra-station-taichung-port][^tra-construction-history]
The committed TDX station snapshot has no separate current station record named
Jianan or 甲南.[^tdx-tra-station] The guide therefore keeps the PDF segment,
current station records and current line membership as distinct evidence layers.

## Records still missing

The checked operator records provide the historical distance, constructor, years
and double-track explanation, but not the day and month of either milestone, the
contract or completion certificate, a surveyed historical boundary, an
intermediate station register, a verified mapping for Jianan or a current
track-count/as-built survey.[^tra-construction-history][^tra-history-page][^tdx-tra-station]
Those fields remain TBC rather than being inferred from the rounded 5.2 km
current interval.[^tdx-tra-line]
