---
title: "Xindian District Office — New Taipei TDX operator record"
summary: "TDX operator record for Xindian District Office (新店區公所) in NewTaipei, with the named contractor and schedule the office's own site publishes for one of its five routes."
updated: 2026-08-29
facts:
  - label: English name
    value: "Xindian District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "新店區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-xindiandistrictoffice-y70bgf"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "XindianDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1311"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "5"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2911-2281"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.xindian.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: xindian-office-buses
    title: "Xindian District Office — New Bus / Happy Bus routes page"
    titleOriginal: "新店區公所-新巴士/幸福巴士"
    publisher: "Xindian District Office, New Taipei City Government (新北市新店區公所)"
    url: https://www.xindian.ntpc.gov.tw/home.jsp?id=f5283933ad7f4729
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Lists nine named district routes, including 直潭線, F703安康山區線, 塗潭平日/假日線, 龜山線, 廣興線 (平日/假日), 屈尺里線 and 華城線 — a fuller route set than the four/five TDX records this page otherwise carries."
  - id: xindian-zhitan-route
    title: "Xindian District Office — Zhitan Village Line detail page"
    titleOriginal: "新店區公所-直潭里線"
    publisher: "Xindian District Office, New Taipei City Government (新北市新店區公所)"
    url: https://www.xindian.ntpc.gov.tw/home.jsp?id=97e0fd65d395d7af
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Names the operating contractor directly (營運單位：京華通運有限公司), states the route is free (收費方式：免費), and gives first/last departure times (頭班06:20發車，末班19:05發車)."
  - id: ntpc-district-bus-structure
    title: "New Taipei City Government — New Bus (新巴士) programme page"
    titleOriginal: "新北市政府-新巴士"
    publisher: "New Taipei City Government (新北市政府)"
    url: https://www.ntpc.gov.tw/ch/home.jsp?id=259bb19174111891
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "States that New Bus routes are managed separately by each township/city district office (分由各鄉鎮市公所管理), corroborating from the government side that district offices, not the city Traffic Bureau, administer these routes."
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

The committed TDX pull identifies this page as the Xindian District Office record (新店區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-xindiandistrictoffice-y70bgf, operator code XindianDistrictOffice, operator number 1311, phone (02)2911-2281 and published URL http://www.xindian.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 5 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F703 [^tdx-bus-operator-pull]
- F703sweet / F703前三班 [^tdx-bus-operator-pull]
- Zhitan Village / 直潭里線 [^tdx-bus-operator-pull]
- Tutan Holidays / 塗潭假日線 [^tdx-bus-operator-pull]
- Tutan Weekdays / 塗潭平日線 [^tdx-bus-operator-pull]

## The office's own route list, and a named contractor

Xindian District Office's own site lists nine named routes under its 新巴士/幸福巴士 programme — more than the four or five carried in the committed TDX pull above: 直潭線, F703安康山區線, 塗潭平日線, 塗潭假日線, 龜山線, 廣興線 (平日and假日 variants), 屈尺里線 and 華城線[^xindian-office-buses]. This is a district-run programme distinct from, and broader than, what TDX's operator-record pull currently reflects.

The office's own detail page for the Zhitan Village line (直潭里線) names its operating contractor directly: "營運單位：京華通運有限公司" (operating unit: Jinghua Tongyun Co., Ltd.), states the route is free ("收費方式：免費"), and gives its first and last departures as 06:20 and 19:05[^xindian-zhitan-route]. This is the office naming its own contractor on its own site, not a secondary characterisation of one.

New Taipei's own city government page corroborates the general administrative pattern: district-scale routes are "分由各鄉鎮市公所管理" (managed separately by each township/city district office)[^ntpc-district-bus-structure].

## What remains unestablished

Only the Zhitan Village line's contractor, fare and schedule have been confirmed from a primary source; the other eight routes named on the office's own index page have not each been checked for their own operator, fare and schedule[^xindian-office-buses]. The TDX pull carries no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location or contract value for any route[^tdx-bus-operator-pull]. The New Taipei Traffic Bureau's own domain (traffic.ntpc.gov.tw) failed to resolve on two fetch attempts during this research pass and was not used as a source.
