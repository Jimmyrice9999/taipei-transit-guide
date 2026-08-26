---
title: The Shen'ao–Liandong Line
summary: A former 6.0 km Taiwan Railways alignment whose southern section was dismantled in 1977 while the northern route later returned to passenger service.
order: 6
updated: 2026-08-26
aliases:
  - 深澳線
  - 深澳─濂洞線
  - Shen'ao Line
facts:
  - label: Historical route length
    value: 6.0
    unit: km
    source: tra-construction-history
  - label: Construction year
    value: 1966
    source: tra-construction-history
  - label: Historical operation start
    value: 1967
    source: tra-construction-history
  - label: Haipin–Liandong section dismantled
    value: December 1977
    source: tra-construction-history
  - label: Shen'ao–Haipin stopped operating
    value: August 1990
    source: tra-construction-history
  - label: Current TDX station members
    value: 3
    source: tdx-tra-line
specs:
  - label: Restored passenger section in 2014
    value: approximately 4.2
    unit: km
    source: tra-revival-note
  - label: 2014 reopening
    value: 2014-01-09
    unit: date
    source: tra-timeline-103
  - label: Extended passenger route in 2016
    value: 4.7
    unit: km
    source: tra-timeline-105
  - label: Current TDX final travelled distance
    value: 4.7
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
    note: Full ten-page operator PDF. Its Shen'ao–Liandong row gives 6.0 km, construction in 1966, operation in 1967, the 3.7 km Haipin–Liandong dismantling in December 1977 and the August 1990 Shen'ao–Haipin stoppage.
  - id: tra-revival-note
    title: Railway access for the National Museum of Marine Science and Technology
    titleOriginal: 為因應海科館開館營運之聯外運輸需求
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/9a3ddb1f-e02e-407e-b618-12fe08554783
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full one-page operator PDF. It records the 2014 restoration from Ruifang to Haikeguan, approximately 4.2 km and ten daily round trips.
  - id: tra-timeline-103
    title: Taiwan Railways chronology — 103
    titleOriginal: 臺鐵大事紀
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=12
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full operator chronology. The 103.01.09 entry records the Shen'ao Line reopening ceremony.
  - id: tra-timeline-105
    title: Taiwan Railways chronology — 105
    titleOriginal: 臺鐵大事紀
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=10
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full operator chronology. The 105.12.28 entry records Badouzi's reopening and the 4.7 km Haikeguan–Badouzi extension.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains the current SA sequence of three members and a final supplied travelled distance of 4.7 km.
  - id: nmmst-badouzi
    title: Badouzi Station — a beautiful railway full of stories on the North Coast
    titleOriginal: 八斗子車站－北海岸充滿故事的的美麗鐵道
    publisher: National Museum of Marine Science and Technology (國立海洋科技博物館)
    url: https://www.nmmst.gov.tw/chhtml/publication_detail/519/3/8
    accessed: 2026-08-26
    kind: secondary
    lang: zh-Hant
    note: Full institutional history article. It describes the 21 August 1989 passenger/freight stoppage and continued coal operation; it is secondary evidence about the operator's history.
---

## One alignment, two operating histories

The operator's construction-history table names Shen'ao–Liandong (深澳─濂洞) as
a 6.0 km route, constructed in 1966 with operation starting in 1967.[^tra-construction-history]
The current data layer uses the same railway's SA identity for a much shorter
present-day member list: TDX supplies three ordered stations and a final
travelled distance of 4.7 km in the 2026-08-24 snapshot.[^tdx-tra-line] These
are not two interchangeable measurements of one unchanged route; the former is
the historical construction-table entry, while the latter is a current dataset
boundary.[^tra-construction-history][^tdx-tra-line]

## The southern section was lost first

The operator's explanation records the 3.7 km Haipin–Liandong section as
dismantled in December 1977.[^tra-construction-history] It separately records
Shen'ao–Haipin as stopped in August 1990.[^tra-construction-history] The source
therefore describes a staged break: the southern section disappeared from the
construction-history account before the northern section's later operating
stop.[^tra-construction-history]

A later museum history gives a different passenger-era milestone, saying that
on 21 August 1989 the line's passenger and freight operation stopped while coal
trains continued.[^nmmst-badouzi] That article is secondary evidence and does
not replace the operator's 1990 construction-history field.[^nmmst-badouzi][^tra-construction-history]
The two dates may describe different traffic scopes, but the fetched sources do
not establish the legal distinction, so both remain visible here.[^nmmst-badouzi][^tra-construction-history]

## Passenger service returned on the northern route

The operator's restoration note says passenger service returned on 9 January
2014 between Ruifang and Haikeguan, approximately 4.2 km, initially with ten
round trips per day.[^tra-revival-note] The operator's chronology records a
formal reopening ceremony on the same date.[^tra-timeline-103] This was a
restoration of the surviving northern route, not evidence that the dismantled
Haipin–Liandong section had been rebuilt.[^tra-revival-note][^tra-construction-history]

On 28 December 2016, the operator recorded Badouzi station's new opening and
described the Shenao branch as 4.7 km from Haikeguan to Badouzi.[^tra-timeline-105]
The 4.7 km figure is consequently a later passenger-route measurement than the
2014 approximately 4.2 km Ruifang–Haikeguan figure.[^tra-timeline-105][^tra-revival-note]
The current TDX sequence ends at Badouzi and supplies 4.7 km as its final
travelled-distance field.[^tdx-tra-line]

## Remaining records

The fetched primary set does not provide one complete historical station
register, an exact legal closure instrument, a full track-removal chronology or
a segment-level gauge and geometry record for the former 6.0 km alignment.[^tra-construction-history][^tra-revival-note][^tdx-tra-line]
Those fields remain TBC; the page does not turn the current three-member TDX
record into a claim that the former southern structures have disappeared.[^tdx-tra-line][^tra-construction-history]
