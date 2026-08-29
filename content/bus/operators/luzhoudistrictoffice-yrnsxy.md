---
title: "Luzhou District Office — New Taipei TDX operator record"
summary: "TDX operator record for Luzhou District Office (蘆洲區公所) in NewTaipei, with the office's own route list and schedules."
updated: 2026-08-29
facts:
  - label: English name
    value: "Luzhou District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "蘆洲區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-luzhoudistrictoffice-yrnsxy"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "LuzhouDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "2001"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "4"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "(02)2281-1484"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.luzhou.ntpc.gov.tw"
    source: tdx-bus-operator-pull
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
  - id: luzhou-office-buses
    title: "Luzhou District Office — New Bus routes page"
    titleOriginal: "新北市新巴士-新北市蘆洲區公所"
    publisher: "Luzhou District Office, New Taipei City Government (新北市蘆洲區公所)"
    url: https://www.luzhou.ntpc.gov.tw/home.jsp?id=0d3d21434cf9c0b1
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Names four current routes with weekday-only operating rules stated directly on the page: F312 水湳線, F319 長永線 and F320 民蘆線 run Monday-Friday only, suspended on public holidays, New Year's Day, Lunar New Year, election days and typhoon closures; F317 醫療線 runs three outbound departures Monday-Friday at 08:00, 10:00 and 13:00. No operator or fare stated. A linked route handbook PDF was checked but its text extracted only as garbled scanned-image content, with no operator name recoverable."
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
    note: "Fetched in full. Groups Luzhou's routes under the F3 cluster with Sanchong: 「F3 三重、蘆洲」."
  - id: luzhou-f312-f319-detail
    title: "New Bus: F312 Shuinan Line, F319 Changyong Line"
    titleOriginal: 新巴士：F312水湳線、F319長永線
    publisher: "Luzhou District Office, New Taipei City Government (新北市蘆洲區公所)"
    url: "https://www.luzhou.ntpc.gov.tw/home.jsp?id=274b37750a0ba621&act=be4f48068b2b0031&dataserno=84e225c24bb0e495084a10687dc1e592"
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Fetched in full. Records a June 2023 service reduction, explicitly attributed to a driver shortage: 「自112年6月起，新巴士：F312水湳線、F319長永線、F320民蘆線改為週一至週六行駛，週日全日停駛」(from June 2023, F312/F319/F320 changed from daily to Monday-Saturday, Sunday service fully suspended), 「因應駕駛人力不足」. Also records a stop consolidation effective 1 June 2023: 「『和平光華路口站』與『正和街口站』自112年6月1日起合併至市區公車『正和街口站』」. Gives specific departure times for F312 and F319 from named stops."
---

## What the record establishes

The committed TDX pull identifies this page as the Luzhou District Office record (蘆洲區公所) in the NewTaipei source set [^tdx-bus-operator-pull]. TDX gives the record ID bus-operator-luzhoudistrictoffice-yrnsxy, operator code LuzhouDistrictOffice, operator number 2001, phone (02)2281-1484 and published URL http://www.luzhou.ntpc.gov.tw [^tdx-bus-operator-pull]. Those are fields in a transport-data record; they are not, by themselves, a company-registration extract or proof that the district office owns vehicles [^tdx-bus-operator-pull].

The New Taipei Traffic Bureau's Transport Management Division page is the responsible authority's public service index for this subject area [^ntpc-transport-management]. Its links cover TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation [^ntpc-transport-management]. That index establishes the administrative context in which New Taipei's bus information is published, but the fetched page does not attach a fleet, garage or contract to this specific TDX record [^ntpc-transport-management].

## Routes associated with this record

The snapshot associates this record with 4 route records; the rows are shown below by their TDX route labels [^tdx-bus-operator-pull]. The list is generated from the repository's committed route operatorIds associations rather than hand-maintained prose, so it preserves the snapshot's distinction between a route family and a separate departure or branch row [^tdx-bus-operator-pull].

- F312 [^tdx-bus-operator-pull]
- F317 [^tdx-bus-operator-pull]
- F319 [^tdx-bus-operator-pull]
- F320 [^tdx-bus-operator-pull]

## The office's own route list

Luzhou District Office's own site names four current routes with operating rules stated directly on the page[^luzhou-office-buses]. F312 水湳線, F319 長永線 and F320 民蘆線 run Monday to Friday only, with the page stating suspension on public holidays, New Year's Day, Lunar New Year, election days and typhoon closures[^luzhou-office-buses]. F317 醫療線 runs three outbound departures on weekdays, at 08:00, 10:00 and 13:00[^luzhou-office-buses]. No operator or fare is named for any route; a linked handbook PDF was checked but its extracted text was garbled scanned-image content with no operator name recoverable[^luzhou-office-buses].

## A driver shortage, dated

New Taipei's New Bus explainer places Luzhou's routes in the F3 cluster with neighbouring Sanchong: 「F3 三重、蘆洲」.[^ntpc-new-bus-explainer] A separate page on the office's own site records a specific, dated service reduction: from June 2023, F312, F319 and F320 changed from daily to Monday-through-Saturday operation, with Sunday service suspended entirely, explicitly attributed to a driver shortage: 「自112年6月起，新巴士：F312水湳線、F319長永線、F320民蘆線改為週一至週六行駛，週日全日停駛」，「因應駕駛人力不足」.[^luzhou-f312-f319-detail] The same page records a stop consolidation effective 1 June 2023, merging two community-bus stops (和平光華路口站 and 正和街口站) into the existing city-bus stop of the latter name.[^luzhou-f312-f319-detail] It gives specific current departure times: F312 from MRT Sanmin Senior High School Station at 06:05, 06:40, 07:10, 09:05, 09:40, 10:10, 10:45, 11:15, 13:05, 13:40, 14:10, 14:40, 17:05, 17:40 and 18:15; F319 from Luzhou District Office at 07:05, 07:40, 08:45, 08:50, 11:05, 11:40, 12:15, 14:05, 14:40, 15:15, 17:05, 17:40, 18:15 and 18:50.[^luzhou-f312-f319-detail]

## What remains unestablished

The TDX pull has no founding date, shareholder or parent-group field, merger history, vehicle manufacturer, chassis/body, seating capacity, propulsion type, depot location, opening date, assigned-route garage record, contractor name or contract value [^tdx-bus-operator-pull]. The New Taipei authority index links to general policy and evaluation resources but does not provide those record-level details [^ntpc-transport-management]. No named contractor company has been confirmed for any of the four routes despite a direct search of the office's own site and likely regional operators; fleet, depot and contract fields remain TBC.
