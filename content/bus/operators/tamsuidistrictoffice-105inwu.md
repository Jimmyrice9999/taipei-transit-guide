---
title: "Tamsui District Office — New Taipei TDX operator record"
summary: "TDX operator record for Tamsui District Office (淡水區公所) in NewTaipei, with the office's own current free-route list."
updated: 2026-08-29
facts:
  - label: English name
    value: "Tamsui District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "淡水區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-tamsuidistrictoffice-105inwu"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TamsuiDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1108"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "8"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2622-1020"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.tamsui.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: tamsui-office-buses
    title: "Tamsui District Office — New Bus route page"
    titleOriginal: "淡水區公所-新巴士"
    publisher: "Tamsui District Office, New Taipei City Government (新北市淡水區公所)"
    url: https://www.tamsui.ntpc.gov.tw/home.jsp?id=b9bc7443e132f143
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Lists the office's current free routes (F101 Pingding and Shuxing branches, F102, F103, F105 and its reverse working, F106, F109), mostly running between MRT Tamsui Station and outlying villages. No operator or fare stated on this page."
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

The committed TDX pull identifies this page as the Tamsui District Office record (淡水區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-tamsuidistrictoffice-105inwu, operator code TamsuiDistrictOffice, operator number 1108, phone (02)2622-1020 and published URL http://www.tamsui.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 8 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F101Pingding / F101坪頂 [^tdx-bus-operator-pull]
- F101shuxing / F101樹興 [^tdx-bus-operator-pull]
- F102 [^tdx-bus-operator-pull]
- F103 [^tdx-bus-operator-pull]
- F105back / F105反 [^tdx-bus-operator-pull]
- F105 [^tdx-bus-operator-pull]
- F106 [^tdx-bus-operator-pull]
- F109 [^tdx-bus-operator-pull]

## The office's own route list

Tamsui District Office's own site lists its current free routes as F101 (with separate Pingding 坪頂 and Shuxing 樹興 branches), F102, F103, F105 and a reverse F105反 working, F106 and F109, the majority running the "MRT Tamsui Station-華南銀行" pattern between the metro terminus and outlying villages[^tamsui-office-buses]. The page states no operator or fare for any route[^tamsui-office-buses]. A separate New Taipei eBus record for a differently-numbered route in the area (894) names an operator, 淡水客運 (Tamsui Bus Co.)[^tdx-bus-operator-pull]; because that route number does not appear in the district office's own F10x list, it is not published here as evidence for who runs the F-series shuttles.

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No operator has been confirmed for any of the seven F10x routes; fleet, depot and contract fields remain TBC.
