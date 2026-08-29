---
title: "Shuangxi District Office — New Taipei TDX operator record"
summary: "TDX operator record for Shuangxi District Office (雙溪區公所) in NewTaipei — the office's own New Bus route list, plus a second, separate reservation-based Happy Bus programme run with the national highway authority."
updated: 2026-08-29
facts:
  - label: English name
    value: "Shuangxi District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "雙溪區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-shuangxidistrictoffice-zayq8b"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "ShuangxiDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1803"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "6"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2493-1111"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.shuangxi.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: shuangxi-office-buses
    title: "Shuangxi District Office — New Bus routes page"
    titleOriginal: "雙溪區公所-新巴士"
    publisher: "Shuangxi District Office, New Taipei City Government (新北市雙溪區公所)"
    url: https://www.shuangxi.ntpc.gov.tw/home.jsp?id=6002ee7aa741d9a3
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Lists the district's current New Bus routes: F811 澳底-八股線, F812 牡丹-柑腳線 (effective 1 January 2026), F813 雙瑞線, F815 雙溪-灣潭線 (with weekday and holiday schedules), F816 貢寮-雙溪-基隆線, and F823 平溪、雙溪、福隆線 (deferring to Pingxi District Office's own announcement for that shared route)."
  - id: pingxi-office-buses
    title: "Pingxi District Office — New Bus routes page"
    titleOriginal: "平溪區公所-新北市新巴士"
    publisher: "Pingxi District Office, New Taipei City Government (新北市平溪區公所)"
    url: https://www.pingxi.ntpc.gov.tw/home.jsp?id=0c69de209c17e5c4
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Names F823 平溪雙溪福隆線 as one of Pingxi's own routes, corroborating that F823 is shared between Pingxi and Shuangxi districts."
  - id: epoch-times-shuangxi-happy-bus
    title: "Report on Shuangxi's Happy Bus / Happy Taxi 2.0 launch"
    titleOriginal: "雙溪幸福巴士、幸福小黃2.0上路"
    publisher: "The Epoch Times (大紀元)"
    url: https://www.epochtimes.com/b5/21/9/15/n13236015.htm
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Reports that the Directorate General of Highways (交通部公路總局) guided the district office to launch a reservation-based flexible-route scheme, Happy Bus/Happy Taxi, on 15 September 2021, distinct from the F-series New Bus routes; gives fares of NT$15 for the first 5 km plus NT$5 per 500 m for Happy Taxi, and a flat NT$15 zone fare for Happy Bus. Not independently fetched from the Directorate General of Highways or the district office directly."
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

The committed TDX pull identifies this page as the Shuangxi District Office record (雙溪區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-shuangxidistrictoffice-zayq8b, operator code ShuangxiDistrictOffice, operator number 1803, phone (02)2493-1111 and published URL http://www.shuangxi.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 6 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F811 [^tdx-bus-operator-pull]
- F812 [^tdx-bus-operator-pull]
- F813 [^tdx-bus-operator-pull]
- F815 / F815嶺頭觀目 [^tdx-bus-operator-pull]
- F815 [^tdx-bus-operator-pull]
- F816 [^tdx-bus-operator-pull]

## The office's own route list, and a second, separate programme

Shuangxi District Office's own site names six current New Bus routes: F811 澳底-八股線, F812 牡丹-柑腳線 (effective 1 January 2026), F813 雙瑞線, F815 雙溪-灣潭線 (with separate weekday and holiday schedules), F816 貢寮-雙溪-基隆線, and F823 平溪、雙溪、福隆線, for which the page defers to Pingxi District Office's own announcement since that route is shared between the two districts[^shuangxi-office-buses][^pingxi-office-buses]. No operator or fare is stated for any of the six[^shuangxi-office-buses].

Separately from the F-series New Bus programme, a news report describes a second, reservation-based scheme launched 15 September 2021: "交通部公路總局輔導雙溪區公所規劃以幸福巴士/幸福小黃提供預約制全區彈性路線" — the Directorate General of Highways guided the district office to set up a flexible, reservation-based Happy Bus/Happy Taxi service covering the whole district[^epoch-times-shuangxi-happy-bus]. The same report gives fares of NT$15 for the first 5 km plus NT$5 per additional 500 m for Happy Taxi, and a flat NT$15 zone fare for Happy Bus ("里程計費，5公里以下15元，超過5公里每500公尺5元"; "採段次計費，一段票15元")[^epoch-times-shuangxi-happy-bus]. This is a secondary source, not independently re-fetched from the Directorate General of Highways or the district office directly, and no operating contractor is named in it[^epoch-times-shuangxi-happy-bus].

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No operator has been confirmed for any of the six New Bus routes or for the Happy Bus/Happy Taxi scheme; fleet, depot and contract fields remain TBC.
