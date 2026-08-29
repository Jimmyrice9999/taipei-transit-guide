---
title: "Shenkeng District Office — New Taipei TDX operator record"
summary: "TDX operator record for Shenkeng District Office (深坑區公所) in NewTaipei, with the office's own published schedules for its three routes."
updated: 2026-08-29
facts:
  - label: English name
    value: "Shenkeng District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "深坑區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-shenkengdistrictoffice-ygzx5e"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "ShenkengDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1109"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "3"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2662-3116"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.shenkeng.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: shenkeng-office-buses
    title: "Shenkeng District Office — New Bus routes page"
    titleOriginal: "深坑區公所-新巴士"
    publisher: "Shenkeng District Office, New Taipei City Government (新北市深坑區公所)"
    url: https://www.shenkeng.ntpc.gov.tw/home.jsp?id=554fc298d2f50600
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Publishes on-page schedules for three routes: F711 土庫尖線 (District Office public market to Shenkeng Elementary, five daily departures, with a note that a Yunxiang community leg was added on a trial basis from November 2014), F712 大崙尾線 (two departures) and F713 大坑線 (five departures, not running on holidays or during typhoons)."
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator records, contact fields, source municipalities, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.
  - id: ebus-taipei-f711
    title: "Greater Taipei Bus (ebus) — route F711 stop and operator data"
    titleOriginal: 大臺北公車-F711路線資料
    publisher: Taipei City / New Taipei bus dynamic information platform (大臺北公車動態資訊系統)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0454071100
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: Lists route F711's full stop sequence and gives its operator field as 深坑區公所 (Shenkeng District Office itself, not a named private contractor), sharing the office's own phone number. Equivalent pages for F712 and F713 give the same operator field.
  - id: ntpc-newbus-shenkeng
    title: "New Taipei City New Bus (programme overview)"
    titleOriginal: 免費新北市新巴士
    publisher: New Taipei City Government (新北市政府)
    url: https://www.ntpc.gov.tw/ch/home.jsp?id=259bb19174111891
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: States New Bus continues the pre-2010 community-bus system's free-riding policy, describes the programme's 2010 origin as a post-merger consolidation of township-level community buses under one name, and places Shenkeng's F7xx routes in a Xindian-Shenkeng-Shiding-Pinglin-Wulai zone group.
  - id: shenkeng-geography-transport
    title: "Shenkeng District — geography and transport"
    titleOriginal: 地理和交通
    publisher: Shenkeng District Office, New Taipei City Government (新北市深坑區公所)
    url: https://www.shenkeng.ntpc.gov.tw/home.jsp?id=e32fc9bbd6f35420
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: States Shenkeng's long-term transport plan has sought an MRT line extension, confirming the district currently has no MRT station of its own; names four intercity bus companies serving the district separately from the community-bus routes.
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

The committed TDX pull identifies this page as the Shenkeng District Office record (深坑區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-shenkengdistrictoffice-ygzx5e, operator code ShenkengDistrictOffice, operator number 1109, phone (02)2662-3116 and published URL http://www.shenkeng.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 3 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F711 [^tdx-bus-operator-pull]
- F712 [^tdx-bus-operator-pull]
- F713 [^tdx-bus-operator-pull]

## The office's own route list

Shenkeng District Office's own site names three current routes with running schedules published directly on the page[^shenkeng-office-buses]. F711 土庫尖線 runs between the district's public market and Shenkeng Elementary School with five daily departures (07:00, 08:00, 10:00, 12:40, 17:20), and the page notes a Yunxiang community leg was added on a trial basis starting November 2014 ("自103年11月起，試營運新增雲鄉社區路線")[^shenkeng-office-buses]. F712 大崙尾線 runs two departures (07:50, 15:00), and F713 大坑線 runs five departures (07:00, 10:00, 12:40, 16:05, 17:20) but does not operate on public holidays or typhoon days ("例假日、颱風天不行駛")[^shenkeng-office-buses]. No operator or fare is stated for any of the three[^shenkeng-office-buses].

## The routes are self-operated, not contracted out

Taipei's Greater Taipei Bus dynamic-information platform, which also
carries New Taipei route data, gives an operator field for all three
routes naming 深坑區公所 (Shenkeng District Office) itself, sharing the
office's own published phone number.[^ebus-taipei-f711] That is data-system
evidence of self-operation rather than a prose policy statement — no
source checked states in so many words that the district office operates
these routes itself rather than contracting them out — but it is the
first source found to name any operator for these
routes.[^ebus-taipei-f711]

The routes sit inside New Taipei's citywide New Bus (新巴士) programme,
which continues the free-riding policy of the pre-2010 township-level
community buses it consolidated after New Taipei's 2010 upgrade to a
special municipality, with Shenkeng grouped alongside Xindian, Shiding,
Pinglin and Wulai in one zone.[^ntpc-newbus-shenkeng] No source checked
states a fare specifically for Shenkeng's three routes; the citywide
free-riding statement is not extended to Shenkeng by
inference.[^ntpc-newbus-shenkeng][^shenkeng-office-buses]

Every stop on all three routes is a residential hillside place name, the
district public market, the district office or Shenkeng Elementary
School — none is an MRT station or a named tourist "old street"
stop.[^ebus-taipei-f711] Shenkeng's own transport page confirms the
district currently has no MRT station, its long-term transport plan
having sought an extension rather than describing one already
built.[^shenkeng-geography-transport] The routes read, on this evidence,
as intra-district residential coverage rather than MRT feeders or old-street
tourist shuttles.[^ebus-taipei-f711][^shenkeng-geography-transport]

One detail conflicts between sources: the district office's own page
states the no-holiday/no-typhoon rule only for F713, while the ebus
platform states holiday suspension for all three
routes.[^shenkeng-office-buses][^ebus-taipei-f711] Both are published; this
page does not assume the office's page simply omitted the rule for F711
and F712.[^shenkeng-office-buses][^ebus-taipei-f711]

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No fare, fleet or depot record is published for the three routes, and no source states an original opening date for any of them beyond the November 2014 addition of F711's Yunxiang leg, which implies the route already existed by then.[^shenkeng-office-buses]
