---
title: "Sanchong District Office — New Taipei TDX operator record"
summary: "TDX operator record for Sanchong District Office (三重區公所) in NewTaipei, with the office's own current route list and a leads-only note on how they are run."
updated: 2026-08-29
facts:
  - label: English name
    value: "Sanchong District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "三重區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-sanchongdistrictoffice-z1nemx"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "SanchongDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0305"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "4"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2986-2345"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.sanchong.ntpc.gov.tw/"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: sanchong-office-buses
    title: "Sanchong District Office — free bus routes page"
    titleOriginal: "三重區公所-免費巴士"
    publisher: "Sanchong District Office, New Taipei City Government (新北市三重區公所)"
    url: https://www.sanchong.ntpc.gov.tw/home.jsp?id=9fc8d54f24b47dc5
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Names three current district free routes (二重線, 永福線, 龍濱線); the index page itself carries no operator or contractor detail for any of them."
  - id: ntpc-district-bus-structure
    title: "New Taipei City Government — New Bus (新巴士) programme page"
    titleOriginal: "新北市政府-新巴士"
    publisher: "New Taipei City Government (新北市政府)"
    url: https://www.ntpc.gov.tw/ch/home.jsp?id=259bb19174111891
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "States that New Bus routes are managed separately by each township/city district office (分由各鄉鎮市公所管理), corroborating from the government side that district offices, not the city Traffic Bureau, administer these routes."
  - id: ptt-sanchong-routes
    title: "PTT BusTimes board post on Sanchong district routes"
    titleOriginal: "PTT BusTimes 板 — 三重區免費巴士整理"
    publisher: "PTT Bulletin Board System (批踢踢實業坊)"
    url: https://www.ptt.cc/bbs/BusTimes/
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Enthusiast lead, not corroborated against a primary: states F301/F302/F303 are self-operated by the district office (公所自營) and names a fourth route, F304 水岸線, as outsourced from 18 March 2026. A named contractor for F304 appeared in the post but could not be corroborated against any primary procurement or district-office record, so it is not published here."
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
---

## What the record establishes

The committed TDX pull identifies this page as the Sanchong District Office record (三重區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-sanchongdistrictoffice-z1nemx, operator code SanchongDistrictOffice, operator number 0305, phone (02)2986-2345 and published URL http://www.sanchong.ntpc.gov.tw/ [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 4 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F301 [^tdx-bus-operator-pull]
- F302 [^tdx-bus-operator-pull]
- F303 [^tdx-bus-operator-pull]
- F304 [^tdx-bus-operator-pull]

## The office's own route list

Sanchong District Office's own website names three current free routes under its 免費巴士 page: 二重線 (Erchong Line), 永福線 (Yongfu Line) and 龍濱線 (Longbin Line)[^sanchong-office-buses]. The office's page gives no operator or contractor for any of them[^sanchong-office-buses].

A PTT enthusiast post gives fuller operational detail, and is published here as a lead rather than a confirmed fact: it states the three routes above are self-operated by the district office (公所自營, i.e. run with the office's own arrangement rather than contracted out), and names a fourth, newer route, F304 水岸線, launched 18 March 2026 and outsourced (委外營運)[^ptt-sanchong-routes]. A contractor name for F304 appeared in that post but a search of Taiwan's government procurement records for this district office turned up no corroborating tender record, so no contractor is published here for it[^ptt-sanchong-routes].

New Taipei's own city government page corroborates the general pattern at the administrative level rather than for Sanchong specifically: district-scale routes are "分由各鄉鎮市公所管理" (managed separately by each township/city district office), with the city Traffic Bureau doing only dynamic system-wide management[^ntpc-district-bus-structure].

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. A fourth route's contractor, and any fleet, depot or contract-value figures for the three self-operated routes, remain TBC pending a primary source.
