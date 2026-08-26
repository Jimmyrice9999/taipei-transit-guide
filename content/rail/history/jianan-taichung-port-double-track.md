---
title: The Taiwan Railways Jianan–Taichung Port Construction Record
summary: A 7.8 km TRA construction-history record for Jianan–Taichung Port, recorded in the operator PDF as constructed in 1973 and opened in 1974, while the current HTML history table omits the row.
order: 17
updated: 2026-08-26
aliases:
  - 甲南—臺中港
  - 甲南─臺中港
  - Jianan–Taichung Port
facts:
  - label: Operator-PDF construction segment length
    value: 7.8
    unit: km
    source: tra-construction-history
  - label: Construction year in the operator PDF
    value: 1973
    source: tra-construction-history
  - label: Operation-start year in the operator PDF
    value: 1974
    source: tra-construction-history
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current operator station record at the Taichung Port end
    value: Taichung Port (2210)
    source: tra-station-taichung-port
specs:
  - label: Historical construction-table explanation for row 45
    value: TBC
  - label: Current TDX line membership at Taichung Port
    value: Western Main Line (Coast Line)
    source: tdx-tra-line
  - label: Current TDX station record for the historical Jianan name
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
    note: Full ten-page operator PDF. Its row 45 lists Jianan–Taichung Port as 7.8 km with TRA as constructor; the aligned chronology gives 1973 construction and 1974 operation start, with no explanation in that row.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML page, marked last updated 2026-04-27. It includes the Changhua–Minxiong and Chiayi–Xinshi entries but its current numbered table does not contain Jianan–Taichung Port.
  - id: tra-station-taichung-port
    title: Taichung Port Station information
    titleOriginal: 臺中港車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2210
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 2210 as Taichung Port, gives the address on 甲南路 and shows current service entries and route status.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains the current station identity, address and coordinates for station 2210; it contains no separate current station record named Jianan or 甲南.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places current station 2210 Taichung Port at sequence 11 of WL-C, with a supplied travelled distance of 59.3 km.
---

## The PDF record

The full operator construction-history PDF identifies row 45 as 甲南─臺中港,
Jianan–Taichung Port, and gives the segment 7.8 km with Taiwan Railways
Administration as constructor.[^tra-construction-history] In the aligned
chronology, the record carries 1973 as the construction year and 1974 as the
operation-start year.[^tra-construction-history] Row 45 is not marked with an
explanation in the PDF's aligned row.[^tra-construction-history] The following
rows contain separate 添築雙線 (“Extended to be double-tracked”) entries, but
their explanations are not transferred to Jianan–Taichung Port.[^tra-construction-history]

This page calls it a PDF-recorded construction subject because the source
provides a historical record, not a current route identity. The 7.8 km value is
therefore retained as the PDF's construction-table scope.[^tra-construction-history]
The operation-start field supplies a year, not an exact commissioning date, and
the absence of a row-45 explanation is not converted into a claim about the
current track count.[^tra-construction-history]

## Two operator presentations, not one merged table

The current operator HTML history page is a different presentation boundary. It
is marked last updated 2026-04-27, contains the Changhua–Minxiong and
Chiayi–Xinshi records as its rows 23 and 24, and then proceeds to a row 25
Xinpu–Tongxiao entry.[^tra-history-page] A full read of that current table found
no Jianan–Taichung Port row.[^tra-history-page] The PDF still contains the
subject as row 45, so this page preserves the discrepancy rather than deleting
the PDF record or pretending that the current HTML and PDF have identical row
coverage.[^tra-history-page][^tra-construction-history]

## What the current data can and cannot identify

The current operator station page identifies Taichung Port as station 2210.[^tra-station-taichung-port] It
also gives a current address on 甲南路 and displays current service entries at
that station.[^tra-station-taichung-port] That address keeps the historical
Jianan wording visible as a research lead, but it does not establish that the
historical PDF place name is a current station identity or that the 7.8 km scope
has a one-to-one present-day boundary.[^tra-station-taichung-port][^tra-construction-history]

The committed TDX StationOfLine snapshot places current station 2210 at
sequence 11 of the Western Main Line (Coast Line), with a supplied travelled
distance of 59.3 km.[^tdx-tra-line] The current station snapshot has no separate
station record named Jianan or 甲南.[^tdx-tra-station] These are current data
observations, not evidence that the historical name should be renamed to
Taichung Port or that a current track count can be inferred.[^tdx-tra-station][^tdx-tra-line]

## Records still missing

The checked primary records provide the PDF's 7.8 km subject, constructor, 1973
construction year and 1974 operation-start year, but not a row-45 explanation,
the day and month of either milestone, the contract or completion
certificate, a surveyed historical boundary, an intermediate station register,
or a current as-built track-count survey.[^tra-construction-history] They also do
not supply a verified current station ID for the historical Jianan name; that
mapping remains TBC rather than being inferred from a street address.[^tra-history-page][^tdx-tra-station]
