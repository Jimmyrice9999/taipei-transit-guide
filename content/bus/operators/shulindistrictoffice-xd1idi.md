---
title: "Shulin District Office — New Taipei TDX operator record"
summary: "TDX operator record for Shulin District Office (樹林區公所) in NewTaipei, with the office's own schedule for its one free medical shuttle route."
updated: 2026-08-29
facts:
  - label: English name
    value: "Shulin District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "樹林區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-shulindistrictoffice-xd1idi"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "ShulinDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1603"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "1"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2681-2106"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.shulin.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: shulin-office-buses
    title: "Shulin District Office — F611 free medical shuttle page"
    titleOriginal: "免費醫療專車/便民服務-F611新巴士"
    publisher: "Shulin District Office, New Taipei City Government (新北市樹林區公所)"
    url: https://www.shulin.ntpc.gov.tw/home.jsp?id=6824dd712b8a168d
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Describes F611 as a free medical shuttle between Shulin and Linkou, with two round trips daily (08:00 outbound/11:30 return, 13:00 outbound/17:00 return, both terminating at Linkou Chang Gung Memorial Hospital) and no service on Saturdays, Sundays or public holidays. States passengers may only board on the outbound leg and only alight on the return leg at the two named hospital stops. No operator named."
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

The committed TDX pull identifies this page as the Shulin District Office record (樹林區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-shulindistrictoffice-xd1idi, operator code ShulinDistrictOffice, operator number 1603, phone (02)2681-2106 and published URL http://www.shulin.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 1 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F611 [^tdx-bus-operator-pull]

## The office's own route detail

Shulin District Office's own site describes F611 as a free medical shuttle running between Shulin and Linkou, with two round trips daily terminating at Linkou Chang Gung Memorial Hospital (08:00 outbound/11:30 return, 13:00 outbound/17:00 return) and no service on Saturdays, Sundays or public holidays: "週六(日)及國定假日停駛"[^shulin-office-buses]. The page states passengers may only board on the outbound leg and only alight on the return leg at the two named hospital stops: "去程下車服務站為桃園分院及林口長庚，沿線各站僅供乘客上車。回程上車服務站為桃園分院及林口長庚，沿線各站僅供乘客下車"[^shulin-office-buses]. No operator is named[^shulin-office-buses]. One intermediate stop name on the fetched page rendered as "大學風呂" (literally "university bathhouse"), which reads as an OCR or rendering artifact rather than a plausible Taiwan place name; it is recorded here as an unresolved gap rather than corrected by guesswork.

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No operator has been confirmed for F611; the garbled intermediate stop name remains unresolved; fleet, depot and contract fields remain TBC.
