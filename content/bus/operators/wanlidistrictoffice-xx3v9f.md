---
title: "Wanli District Office — New Taipei TDX operator record"
summary: "TDX operator record for Wanli District Office (萬里區公所) in NewTaipei, with the office's own published schedules for its three community routes."
updated: 2026-08-29
facts:
  - label: English name
    value: "Wanli District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "萬里區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-wanlidistrictoffice-xx3v9f"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "WanliDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1313"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "7"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2492-2064"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.wanli.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: wanli-office-buses
    title: "Wanli District Office — community bus routes page"
    titleOriginal: "萬里區公所-社區巴士"
    publisher: "Wanli District Office, New Taipei City Government (新北市萬里區公所)"
    url: https://www.wanli.ntpc.gov.tw/home.jsp?id=c8529e1525d82126
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Lists three current routes with on-page schedules: F921 山海線 (District Office-Shuangxing-Jinshan Hospital, first run 06:40, last 17:05), F922 山線 (District Office-Ruiquan junction/Xidi) and F923 海線 (District Office-Yehliu-Jinshan Hospital, first run 06:20, last 17:25). No operator name or fare stated."
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator records, contact fields, source municipalities, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.
  - id: ntpc-transport-management
    title: New Taipei Government Transport Management Division
    titleOriginal: 運輸管理科
    publisher: New Taipei City Government Traffic Bureau (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Supports the division's published transport-management service index and its links to TPASS, electric-bus replacement, low-floor bus, bus evaluation and bus-information services; it does not identify the contractor, fleet or depot for these district-office records.
  - id: wanli-traffic-info
    title: "Wanli District Office — transport information"
    titleOriginal: "萬里區公所-交通資訊"
    publisher: "Wanli District Office, New Taipei City Government (新北市萬里區公所)"
    url: https://www.wanli.ntpc.gov.tw/home.jsp?id=f579627a5f15ddf4
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Fetched in full. Names Keelung Bus (基隆客運) as the operator of F921, in the office's own access directions, twice: 「於淡水捷運站搭基隆客運862號公車，於『萬里區公所』站下車，轉乘基隆客運F921號公車」and an equivalent routing from Keelung Station via routes 790/862. States F921 is primarily a school-commute service for mountain-area children with low frequency: 「※F921公車主要供山區學童上下學通勤使用，班次較少，平日3班，假日2班」."
  - id: ctwant-wanli-complaints
    title: "Driver 'played blind,' missed runs repeatedly... Wanli New Bus draws public complaints, Traffic Bureau responds"
    titleOriginal: 司機裝瞎、脫班不斷...萬里新巴士惹民怨 交通局回應了
    publisher: CTWANT
    url: https://www.ctwant.com/article/398372
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "News report, fetched in full, naming Keelung Bus as operator of F921/F923: 「由基隆客運營運」. Reports 9 formal complaints in the prior year, including an April 2024 incident and three consecutive no-show days. Quotes New Taipei Traffic Bureau's Transport Management Section Chief 林詩欽 confirming violations were penalized and that a transfer of route management to the district office was still going through administrative procedure, not yet completed: 「還有相關的行政程序需要辦理」."
---

## What the record establishes

The committed TDX pull identifies this page as the Wanli District Office record (萬里區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-wanlidistrictoffice-xx3v9f, operator code WanliDistrictOffice, operator number 1313, phone (02)2492-2064 and published URL http://www.wanli.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 7 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F921Holiday / F921假日 [^tdx-bus-operator-pull]
- F921 [^tdx-bus-operator-pull]
- F922naikan / F922內崁 [^tdx-bus-operator-pull]
- F922Beiji / F922北基 [^tdx-bus-operator-pull]
- F922wututan / F922烏塗炭 [^tdx-bus-operator-pull]
- F923Holiday / F923假日 [^tdx-bus-operator-pull]
- F923 [^tdx-bus-operator-pull]

## The office's own route list

Wanli District Office's own site publishes three current community-bus routes with running schedules directly on the page[^wanli-office-buses]: F921 山海線, running the district office to Shuangxing and Jinshan Hospital, first departure 06:40 and last 17:05; F922 山線, to Ruiquan junction/Xidi; and F923 海線, to Yehliu and Jinshan Hospital, first departure 06:20 and last 17:25[^wanli-office-buses]. The page names no operating contractor and states no fare for any of the three[^wanli-office-buses].

## The operator, named on the office's own site

Unlike most of the district-office bus records in this cluster, Wanli's routes have a named operating contractor. The office's own transport-information page directs riders to "轉乘基隆客運F921號公車" (transfer to Keelung Bus route F921), naming Keelung Bus (基隆客運) as the operator in its own access instructions, given twice for two different starting points.[^wanli-traffic-info] The same page describes F921 specifically as a low-frequency service mainly for mountain-area schoolchildren's commute: 「※F921公車主要供山區學童上下學通勤使用，班次較少，平日3班，假日2班」— three weekday and two holiday round trips.[^wanli-traffic-info]

CTWANT news reporting corroborates Keelung Bus as operator of both F921 and F923 — 「由基隆客運營運」— and covers real service-quality complaints: nine formal complaints in the year before the report, including an April 2024 incident and three consecutive no-show days.[^ctwant-wanli-complaints] New Taipei's Traffic Bureau Transport Management Section Chief, quoted by name, confirmed violations had been penalized and that transferring route management from Keelung Bus to the district office itself was still going through administrative procedure at the time of the report, not yet completed.[^ctwant-wanli-complaints] A separate, unconfirmed claim — that operations transferred to a company named 甲天下通運 effective 1 January 2026 — was searched for directly and found no corroboration in any source; it is not published here, and the office's own transport-information page still names Keelung Bus as of this research.[^wanli-traffic-info]

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, or contract value for the Keelung Bus arrangement [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. F922's operator was not confirmed by any source checked and remains TBC.
