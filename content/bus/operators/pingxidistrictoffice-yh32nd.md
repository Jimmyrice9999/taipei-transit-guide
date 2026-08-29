---
title: "Pingxi District Office — New Taipei TDX operator record"
summary: "TDX operator record for Pingxi District Office (平溪區公所) in NewTaipei, with the office's own route list — one route shared jointly with Shuangxi District."
updated: 2026-08-29
facts:
  - label: English name
    value: "Pingxi District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "平溪區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-pingxidistrictoffice-yh32nd"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "PingxiDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0505"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "5"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2495-1520"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.pingxi.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: pingxi-office-buses
    title: "Pingxi District Office — New Bus routes page"
    titleOriginal: "平溪區公所-新北市新巴士"
    publisher: "Pingxi District Office, New Taipei City Government (新北市平溪區公所)"
    url: https://www.pingxi.ntpc.gov.tw/home.jsp?id=0c69de209c17e5c4
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Lists the district's current 新北市新巴士 routes: F821 新寮線, F822 東勢線, F823 平溪雙溪福隆線 (with a further sectioned F823區) and F825 平溪雙溪基隆線. No fare or operator stated; timetables exist only as linked files not opened in this research pass."
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

The committed TDX pull identifies this page as the Pingxi District Office record (平溪區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-pingxidistrictoffice-yh32nd, operator code PingxiDistrictOffice, operator number 0505, phone (02)2495-1520 and published URL http://www.pingxi.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 5 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F821 [^tdx-bus-operator-pull]
- F822 [^tdx-bus-operator-pull]
- F823Shuttle / F823區 [^tdx-bus-operator-pull]
- F823 [^tdx-bus-operator-pull]
- F825 [^tdx-bus-operator-pull]

## The office's own route list

Pingxi District Office's own site identifies its current routes collectively as "新北市新巴士": F821 新寮線, F822 東勢線, F823 平溪雙溪福隆線 (with a further sectioned F823區 working) and F825 平溪雙溪基隆線[^pingxi-office-buses]. F823's name shows the route already crosses into neighbouring Shuangxi District, consistent with F823 also appearing on Shuangxi District Office's own route list. No fare or operator is stated on the Pingxi page, and its timetables exist only as linked files not opened in this research pass[^pingxi-office-buses].

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No operator has been confirmed for any of the four routes; the linked timetable files were not opened, so schedules remain unread; fleet, depot and contract fields remain TBC.
