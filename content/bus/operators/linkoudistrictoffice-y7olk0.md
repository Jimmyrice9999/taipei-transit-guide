---
title: "Linkou District Office — New Taipei TDX operator record"
summary: "TDX operator record for Linkou District Office (林口區公所) in NewTaipei, with the office's own current route list."
updated: 2026-08-29
facts:
  - label: English name
    value: "Linkou District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "林口區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-linkoudistrictoffice-y7olk0"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "LinkouDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0812"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "7"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2603-3111"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.linkou.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: linkou-office-buses
    title: "Linkou District Office — New Bus routes page"
    titleOriginal: "新北市新巴士-新北市林口區公所"
    publisher: "Linkou District Office, New Taipei City Government (新北市林口區公所)"
    url: https://www.linkou.ntpc.gov.tw/home.jsp?id=21109602ff92db93
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Names seven current routes (F233, F235, F236, F237, F238, F239, F250), each linked out to New Taipei's ebus.gov.taipei route-info system rather than described on the page itself; no operator or fare stated on the district-office page."
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
  - id: ntpc-new-bus-explainer
    title: New Taipei City New Bus (free community bus)
    titleOriginal: 免費新北市新巴士
    publisher: New Taipei City Government (新北市政府)
    url: https://www.ntpc.gov.tw/ch/home.jsp?id=259bb19174111891
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Fetched in full. Groups Linkou's routes under the F2 cluster with Xinzhuang, Taishan and Wugu: 「F2 新莊、泰山、五股、林口」. States the F-prefix stands for 'FREE' and that the system consolidates townships' individually-run community buses under one citywide free-fare programme, per the fuller quote recorded on this cluster's other district-office pages."
---

## What the record establishes

The committed TDX pull identifies this page as the Linkou District Office record (林口區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-linkoudistrictoffice-y7olk0, operator code LinkouDistrictOffice, operator number 0812, phone (02)2603-3111 and published URL http://www.linkou.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 7 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F233 [^tdx-bus-operator-pull]
- F235 [^tdx-bus-operator-pull]
- F236 [^tdx-bus-operator-pull]
- F237 [^tdx-bus-operator-pull]
- F238 [^tdx-bus-operator-pull]
- F239 [^tdx-bus-operator-pull]
- F250 [^tdx-bus-operator-pull]

## The office's own route list

Linkou District Office's own site confirms the same seven routes as the TDX pull — F233, F235, F236, F237, F238, F239 and F250 — but describes none of them directly, linking each out to New Taipei's ebus.gov.taipei route-information system and to a separate downloadable route/stop/timetable file[^linkou-office-buses]. No operator or fare is stated on the district-office page itself[^linkou-office-buses].

## The citywide consolidation this route family belongs to

New Taipei City Government's own New Bus explainer places Linkou's routes in the F2 cluster alongside Xinzhuang, Taishan and Wugu: 「F2 新莊、泰山、五股、林口」.[^ntpc-new-bus-explainer] As with every route family in this system, the F prefix stands for "FREE," and the programme consolidates what were once separate township-run community buses under one citywide free-fare service rather than a commercial contract.[^ntpc-new-bus-explainer]

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No named contractor has been confirmed for any of the seven routes despite a direct search; the linked ebus pages and timetable file were not opened in this research pass.
