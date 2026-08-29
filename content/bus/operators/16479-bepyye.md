---
title: "Wulai District Office — New Taipei TDX operator record"
summary: "TDX operator record for Wulai District Office (烏來區公所) in NewTaipei, with the office's own seasonal community-bus timetable for its Wulai-Xiaoyi line."
updated: 2026-08-29
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "烏來區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-16479-bepyye"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "0"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "TBC"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: wulai-office-bus
    title: "Wulai District community bus timetable — Wulai-Xiaoyi line"
    titleOriginal: "新北市烏來區社區巴士行駛班次時刻表－烏來、孝義線"
    publisher: "Wulai District Office, Social and Cultural Affairs Section (新北市烏來區公所社會文化課)"
    url: https://www.wulai.ntpc.gov.tw/userfiles/9530329/files/115寒暑假-新北市烏來區社區巴士行駛班次時刻表(圖說).pdf
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "A summer-holiday timetable stated to apply 1 July-31 August 2026 (適用期間:115年7月1日至8月31日止). Gives two weekday round trips (07:00 and 15:00 departures) between 堰堤(土地公廟) and 孝義 via 加九寮. No operator or fare stated. The office's page also links a second file, 114年社區巴士烏來、信賢、福山線 (Wulai-Xinxian-Fushan lines), confirmed to exist by its filename but not readable in this research pass (an .odt file, not extractable with the tools available)."
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

The committed TDX pull identifies this page as the 烏來區公所 record (烏來區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-16479-bepyye, operator code TBC, operator number TBC, phone TBC and published URL TBC [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with no route records, so there is no generated route roster to display [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

No route record in the committed TDX route pull currently references this operator record [^tdx-bus-operator-pull].

## The office's own route, and a second route not yet read

Wulai District Office's own site publishes a seasonal timetable for a Wulai-Xiaoyi (烏來、孝義) community-bus line, stated to apply from 1 July to 31 August 2026, with two weekday round trips departing the 堰堤(土地公廟) terminus at 07:00 and 15:00 via 加九寮[^wulai-office-bus]. A representative line reads "起站:堰堤(土地公廟)07:00→加九寮7:10→堰堤(土地公廟)07:15→孝義7:30"[^wulai-office-bus]. No operator or fare is stated[^wulai-office-bus]. The same page links a second route document covering Wulai-Xinxian-Fushan (烏來、信賢、福山線), confirming the district runs more than this one line, but that file is an .odt format this research pass could not extract, so its route detail remains unread rather than absent[^wulai-office-bus]. This is a genuinely distinct subject from the separate Wulai Trolley (烏來台車) tourist tramway, which does not appear on either bus-schedule page and is not conflated with these routes here.

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No operator or fare has been confirmed for the Wulai-Xiaoyi line; the Wulai-Xinxian-Fushan document remains unread.
