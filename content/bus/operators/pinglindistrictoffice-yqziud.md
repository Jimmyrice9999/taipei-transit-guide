---
title: "Pinglin District Office — New Taipei TDX operator record"
summary: "TDX operator record for Pinglin District Office (坪林區公所) in NewTaipei, with the office's own route list and its published storm-suspension policy."
updated: 2026-08-29
facts:
  - label: English name
    value: "Pinglin District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "坪林區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-pinglindistrictoffice-yqziud"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "PinglinDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0811"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "6"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2665-7251"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.pinglin.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: pinglin-office-buses
    title: "Pinglin District Office — free bus routes page"
    titleOriginal: "坪林區公所-免費巴士"
    publisher: "Pinglin District Office, New Taipei City Government (新北市坪林區公所)"
    url: https://www.pinglin.ntpc.gov.tw/home.jsp?id=d974860923cf5c2f
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Lists four current routes — F721 南山寺路線, F722 金瓜寮路線, F723 大林路線 (with 上石曹/下石曹 branches) and F724 水德路線 — and states that district free buses stop running whenever New Taipei City Government declares a work/school closure: 如遇新北市政府發布停班停課本區免費巴士將停班停駛."
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
    note: "Fetched in full. Explains the citywide consolidation this route family belongs to: pre-merger townships and cities each ran their own community bus, later consolidated and formally named 新北市新巴士 while keeping the prior free-fare policy: 「整合未升格前各鄉鎮市自行開辦的社區巴士，除延續免費搭乘的服務外，並正式定名整合後的社區巴士為『新北市新巴士』」. States the F-prefix stands for 'FREE': 「一方面強調『免費FREE』的服務」. Groups Pinglin's routes under the F7 cluster with Xindian, Shenkeng, Shiding and Wulai: 「F7 新店、深坑、石碇、坪林、烏來」."
---

## What the record establishes

The committed TDX pull identifies this page as the Pinglin District Office record (坪林區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-pinglindistrictoffice-yqziud, operator code PinglinDistrictOffice, operator number 0811, phone (02)2665-7251 and published URL http://www.pinglin.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 6 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F721 [^tdx-bus-operator-pull]
- F722 [^tdx-bus-operator-pull]
- F723D / F723下石嘈 [^tdx-bus-operator-pull]
- F723 [^tdx-bus-operator-pull]
- F723U / F723上石嘈 [^tdx-bus-operator-pull]
- F724 [^tdx-bus-operator-pull]

## The office's own route list, and its storm policy

Pinglin District Office's own site names four current free routes — F721 南山寺路線, F722 金瓜寮路線, F723 大林路線 (with separate 上石曹 and 下石曹 branch workings) and F724 水德路線 — with no operator or fare stated for any of them[^pinglin-office-buses]. The same page states a standing suspension rule tying the district's free buses to New Taipei City Government's own work/school closure declarations: "如遇新北市政府發布停班停課本區免費巴士將停班停駛"[^pinglin-office-buses].

## The citywide consolidation this route family belongs to

New Taipei City Government's own explainer for the "New Bus" (新巴士) system describes how these routes came to exist: before New Taipei's 2010 upgrade to a special municipality, individual townships and county-administered cities each ran their own community bus service, later consolidated under one citywide programme that kept the original free-fare policy and adopted the name 新北市新巴士.[^ntpc-new-bus-explainer] The "F" prefix on the route numbers stands for "FREE": 「一方面強調『免費FREE』的服務」.[^ntpc-new-bus-explainer] Pinglin's routes sit in the F7 group alongside Xindian, Shenkeng, Shiding and Wulai: 「F7 新店、深坑、石碇、坪林、烏來」.[^ntpc-new-bus-explainer] This citywide page corroborates the free-fare status Pinglin's own site already states, but names the district office itself as the historical operator rather than a separate contracted company.[^ntpc-new-bus-explainer]

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No named contractor has been confirmed for any of the four routes despite a direct search of the district office's own site and of likely regional operators; fleet, depot and contract fields remain TBC.
