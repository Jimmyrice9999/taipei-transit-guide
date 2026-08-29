---
title: "Tucheng District Office — New Taipei TDX operator record"
summary: "TDX operator record for Tucheng District Office (土城區公所) in NewTaipei — the office's own site documents its free routes converting to paid city bus service in 2020, unlike most other New Taipei district offices."
updated: 2026-08-29
facts:
  - label: English name
    value: "Tucheng District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "土城區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-tuchengdistrictoffice-x31woj"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TuchengDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0306"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "0"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2273-2000"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.tucheng.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: tucheng-office-conversion
    title: "Tucheng District Office — Nantianmu holiday bus conversion notice"
    titleOriginal: "假日往南天母公車"
    publisher: "Tucheng District Office, New Taipei City Government (新北市土城區公所)"
    url: https://www.tucheng.ntpc.gov.tw/home.jsp?id=18002f51f0be4ec9
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "States that former free holiday shuttle routes F601-F607 converted to paid regular New Taipei city bus routes effective 1 January 2020, with route paths and stops unchanged: 既有路線及站牌位置均不變，僅路線名稱變更. Gives the conversion table F601→570, F602→571, F603→572, F605→573, F606→574, F607→575, a NT$1,280 monthly pass and a senior discount card, but no single-trip fare figure or operator name."
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

The committed TDX pull identifies this page as the Tucheng District Office record (土城區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-tuchengdistrictoffice-x31woj, operator code TuchengDistrictOffice, operator number 0306, phone (02)2273-2000 and published URL http://www.tucheng.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with no route records, so there is no generated route roster to display [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

No route record in the committed TDX route pull currently references this operator record [^tdx-bus-operator-pull].

## Why the route count is zero: a 2020 conversion, and no surviving free network found

Unlike most other New Taipei district offices researched for this record, Tucheng does not appear to still run a free district-administered shuttle network. The district office's own site states that its former free holiday routes to the Nantianmu (南天母) recreation area, F601 through F607, converted to paid regular city bus routes effective 1 January 2020, with the physical routes and stops kept unchanged and only the route names/numbers changed: "既有路線及站牌位置均不變，僅路線名稱變更"[^tucheng-office-conversion]. The published conversion table is F601→570, F602→571, F603→572, F605→573, F606→574 and F607→575[^tucheng-office-conversion]. The same page names a NT$1,280 monthly pass and a senior discount card but gives no single-trip fare figure and no operator name[^tucheng-office-conversion]. A search for other Tucheng free-bus route codes (such as F640 or F650) found nothing on the district office's own site.

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. Which operator now runs routes 570-575 remains TBC pending a primary source.
