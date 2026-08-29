---
title: "Wugu District Office — New Taipei TDX operator record"
summary: "TDX operator record for Wugu District Office (五股區公所) in NewTaipei — the office's own site records its free shuttles converting to paid city bus routes in 2020, which is why the current TDX pull shows zero routes."
updated: 2026-08-29
facts:
  - label: English name
    value: "Wugu District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "五股區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-wugudistrictoffice-yho78z"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "WuguDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0411"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "0"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2291-6051 ~ 5"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.wugu.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: wugu-office-conversion
    title: "Wugu District Office — New Bus conversion notice"
    titleOriginal: "五股區公所-新巴士轉型市區公車公告"
    publisher: "Wugu District Office, New Taipei City Government (新北市五股區公所)"
    url: https://www.wugu.ntpc.gov.tw/home.jsp?id=274b37750a0ba621
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "States its New Bus shuttles converted to paid city bus routes from 1 July 2020 (109年7月1日): F221 to route 580, F222 to 581, F223 to 582, F225 to 583. This is the reason the committed TDX pull, taken at the operator level, currently shows zero routes for this record."
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

The committed TDX pull identifies this page as the Wugu District Office record (五股區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-wugudistrictoffice-yho78z, operator code WuguDistrictOffice, operator number 0411, phone (02)2291-6051 ~ 5 and published URL http://www.wugu.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with no route records, so there is no generated route roster to display [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

No route record in the committed TDX route pull currently references this operator record [^tdx-bus-operator-pull].

## Why the route count is zero: a 2020 conversion, not an absent service

The district office's own site states that its New Bus free shuttles converted to paid city bus routes from 1 July 2020: "五股區新巴士於109年7月1日起轉型為市區付費公車"[^wugu-office-conversion]. Four named conversions are given: F221 (大窠橋-馬偕醫院) became route 580, F222 (五股站-御史路) became 581, F223 (立體停車場-台北車站) became 582, and F225 (五股站-榮總) became 583[^wugu-office-conversion]. This is the reason the committed TDX operator-level pull shows no routes for Wugu District Office today — the routes still run, but as paid city bus services no longer associated with the district-office operator record[^tdx-bus-operator-pull][^wugu-office-conversion]. The conversion notice names no operator or fare for the successor routes[^wugu-office-conversion].

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. Which operator now runs routes 580-583 remains TBC pending a primary source.
