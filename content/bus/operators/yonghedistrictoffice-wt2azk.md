---
title: "Yonghe District Office — New Taipei TDX operator record"
summary: "TDX operator record for Yonghe District Office (永和區公所) in NewTaipei, with the office's own route list; an operator name circulating on an uncited wiki page could not be confirmed."
updated: 2026-08-29
facts:
  - label: English name
    value: "Yonghe District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "永和區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-yonghedistrictoffice-wt2azk"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "YongheDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0506"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "5"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2928-2828"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.yonghe.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: yonghe-office-buses
    title: "Yonghe District Office — New Bus service page"
    titleOriginal: "新巴士服務-新北市永和區公所"
    publisher: "Yonghe District Office, New Taipei City Government (新北市永和區公所)"
    url: https://www.yonghe.ntpc.gov.tw/home.jsp?id=9508c28441f2b240
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Names five current routes — F521, F522, F523, F525 and F526 — each looping from an MRT station or a district facility, with no operator or fare stated. New Taipei's own ebus.gov.taipei page for F521 (routeid=0454052100) was checked directly and shows only the district office's own phone number under 'operator service phone'."
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

The committed TDX pull identifies this page as the Yonghe District Office record (永和區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-yonghedistrictoffice-wt2azk, operator code YongheDistrictOffice, operator number 0506, phone (02)2928-2828 and published URL http://www.yonghe.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 5 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F521 [^tdx-bus-operator-pull]
- F522 [^tdx-bus-operator-pull]
- F523 [^tdx-bus-operator-pull]
- F525 [^tdx-bus-operator-pull]
- F526 [^tdx-bus-operator-pull]

## The office's own route list, and an unconfirmed operator claim

Yonghe District Office's own site names five current routes — F521 (頂溪捷運站-仁愛公園), F522 (捷運頂溪站-永和區公所), F523 (永平國小-保順保生路口), F525 (民權圖書館-捷運永安市場站) and F526 (民本里-捷運永安市場站) — with no operator or fare stated[^yonghe-office-buses]. New Taipei's own ebus.gov.taipei record for F521 was fetched directly and, as with Zhonghe's F512 above, carries no distinct operator field, only the district office's own phone number[^yonghe-office-buses].

A zh.wikiversity page on F521 states Taipei Bus (臺北客運) took over the route from 1 March 2025, but that page cites no source of its own, so the claim is unverified and not established here — a primary tender award, licence record or NTPC press notice would be needed to confirm it.

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No operator has been confirmed from a primary source for any of the five routes; fleet, depot and contract fields remain TBC.
