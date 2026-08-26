---
title: The Taiwan Railways Tao-yuan Station Track-removal Record
summary: The operator's historical PDF records a 3.1 km Tao-yuan Station subject with 1969 and 1969 year fields and a May 2012 removal explanation for tracks 5–11, the loading line and the flour line.
order: 36
updated: 2026-08-26
aliases:
  - 桃園車站股道拆除
  - 桃園站側線拆除
  - Tao-yuan Station track removal
  - Taoyuan Station yard tracks
facts:
  - label: Operator row 100 distance
    value: 3.1
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 1969
    source: tra-construction-history
  - label: Operation-start year field
    value: 1969
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded removal month
    value: May 2012
    source: tra-construction-history
  - label: Current operator station
    value: Taoyuan (1080)
    source: tra-station-taoyuan
specs:
  - label: Historical removal explanation
    value: Tracks 5–11, loading line and flour line in Tao-yuan Station
    source: tra-construction-history
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Current TDX one-based position
    value: 21
    unit: position
    source: tdx-tra-line
  - label: Current TDX supplied travelled distance
    value: 57.6
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
    note: Full ten-page operator PDF. Row 100 records Tao-yuan Station at 3.1 km with TRA as constructor; its aligned chronology gives 1969 and 1969 and the May 2012 track-removal explanation.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Tao-yuan Station row or the row 100 removal explanation was found in the table checked for this subject.
  - id: tra-station-taoyuan
    title: Taoyuan Station information
    titleOriginal: 桃園車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1080
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 1080 as Taoyuan (桃園) and the page supplies the current address and passenger-service fields.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station record 1080 桃園 with its current name, address, administrative area, class, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Taoyuan at WL source sequence 20 with supplied travelled distance 57.6 km, between Fengming 1075 and Neili 1090; the guide presents that as one-based position 21.
---

## One historical station-yard row

Taiwan Railways' complete construction-history PDF records row 100 as
桃園車站, Tao-yuan Station, at 3.1 km.[^tra-construction-history] The same row
names 臺灣鐵路管理局, the Taiwan Railways Administration, as constructor.[^tra-construction-history]
The aligned chronology gives 1969 in the construction-year field and 1969 in
the operation-start year field.[^tra-construction-history] Those are the
operator's table fields; the checked row does not label them as a station
opening date or a yard-removal date.[^tra-construction-history]

The row's explanation records a removal in May 2012.[^tra-construction-history]
The Chinese text names <span lang="zh-Hant">側線5至11股、拖上線及麵粉線</span>, and the
operator's English column renders the scope as “No.5-No11 tracks on branch line,
loading line and flour line in Tao-yuan Station”.[^tra-construction-history] The
source therefore ties the month to the listed station assets, but it does not
give a day of the month, a contract number or a before-and-after yard plan.[^tra-construction-history]

The 3.1 km value is kept as the historical row's distance.[^tra-construction-history]
It is not converted into a claim that the removed tracks formed a 3.1 km
continuous yard, because the checked PDF does not define the measurement points
or say whether the value belongs to a line segment, station limits or another
railway accounting boundary.[^tra-construction-history]

## The current passenger station is a separate layer

The current operator page identifies station 1080 as Taoyuan (桃園) and supplies
the current address at 1 Zhongzheng Road in Taoyuan District.[^tra-station-taoyuan]
That page is used here for current station identity and live passenger-service
context; it does not provide the historic yard plan or the 2012 removal record.[^tra-station-taoyuan]

The committed TDX station pull likewise contains current station ID 1080,
including its current name, administrative area, station-class field,
coordinates and update time.[^tdx-tra-station] These fields describe the current
station record, not the extent or disposition of the assets named in row 100.[^tdx-tra-station][^tra-construction-history]

In the current TDX Western Main Line record, Taoyuan is source sequence 20 with
a supplied travelled distance of 57.6 km.[^tdx-tra-line] The preceding member is
Fengming (1075) and the following member is Neili (1090), so the guide presents
Taoyuan as one-based position 21 in that ordered dataset.[^tdx-tra-line] The
57.6 km value is a current line-position field from the WL data; it is not added
to or subtracted from the historical 3.1 km row.[^tdx-tra-line][^tra-construction-history]

## Source coverage and records still missing

The current operator's full route-construction HTML table does not contain a
matching 桃園車站 row or the row 100 removal explanation in the table checked for
this subject.[^tra-history-page] That is a source-presentation difference from
the complete construction-history PDF, not evidence that the PDF row did not
exist.[^tra-history-page][^tra-construction-history]

The checked primaries do not provide the exact day in May 2012, a surveyed
boundary for the 3.1 km value, the station-yard track diagram, the sequence of
removal work, the disposition of rails and facilities, or a source-defined
mapping between row 100's distance and the current TDX WL travelled-distance
field.[^tra-construction-history][^tdx-tra-line] Those details remain TBC rather
than being inferred from the shared station name.[^tra-construction-history][^tdx-tra-station]

The stable result is narrower: the operator records a 3.1 km Tao-yuan Station
subject with 1969/1969 year fields and a May 2012 removal explanation for tracks
5–11, the loading line and the flour line, while the current operator and TDX
records identify passenger station 1080 at current WL position 21 and 57.6 km.[^tra-construction-history][^tra-station-taoyuan][^tdx-tra-line]
