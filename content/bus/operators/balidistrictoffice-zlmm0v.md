---
title: "Bali District Office — New Bus authority record"
summary: "The New Taipei district office record associated with Bali's 11 New Bus route records."
updated: 2026-08-22
facts:
  - label: English name
    value: "Bali District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "八里區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-balidistrictoffice-zlmm0v"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "BaliDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0201"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Route records in committed pull
    value: "11"
    source: tdx-bus-operator-pull
  - label: Current district-office schedule page
    value: "Timetable stated effective from 2026-01-01; page updated 2026-06-11"
    source: bali-newbus-index
  - label: Office telephone
    value: "(02)2610-2621"
    source: bali-newbus-index
  - label: New Bus liaison
    value: "Economic Development section, extension 261"
    source: bali-contact
specs:
  - label: Organizational status
    value: "New Taipei municipal district office, not a bus corporation"
    source: bali-newbus-index
  - label: Service office
    value: "Office address: 249201 New Taipei City, Bali District, Bali Boulevard 18"
    source: bali-newbus-index
  - label: New Bus governance
    value: "District offices plan routes, schedules, tenders and management under the unified New Bus budget"
    source: ntpc-newbus-governance
  - label: Capacity and weather rule
    value: "The district page says vehicles display a full sign at the passenger limit and suspend when the city announces a typhoon or heavy-rain work/school closure"
    source: bali-newbus-index
  - label: Fleet models, chassis and propulsion
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Current contractor and contract terms
    value: TBC
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator record, contact fields, source municipality, operator IDs, route associations and route names; it does not provide company, fleet, depot or contract fields.
  - id: bali-newbus-index
    title: Bali New Bus route and timetable page
    titleOriginal: 新巴士
    publisher: Bali District Office, New Taipei City (新北市八里區公所)
    url: https://www.bali.ntpc.gov.tw/home.jsp?id=4fae2e3470ce3aca
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Publishes the district's current New Bus timetable page, effective-date note, passenger-capacity and weather suspension notices, update date, address and switchboard.
  - id: bali-contact
    title: Bali District Office unit directory
    titleOriginal: 分機職掌表
    publisher: Bali District Office, New Taipei City (新北市八里區公所)
    url: https://www.bali.ntpc.gov.tw/home.jsp?id=8b767bd17dc29316
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Assigns New Bus work to the Economic Development section, extension 261.
  - id: bali-route-text
    title: Bali New Bus routes and timetables
    titleOriginal: 新巴士路線、時刻表
    publisher: Bali District Health Center, New Taipei City (新北市八里區衛生所)
    url: https://bali.health.ntpc.gov.tw/article/%E6%96%B0%E5%B7%B4%E5%A3%AB%E8%B7%AF%E7%B7%9A%E6%99%82%E5%88%BB%E8%A1%A8
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Publishes a full text route/timetable page for F121, F122, F123 and F126, including stops, departure times and F126's Jiangcuo variant.
  - id: bali-f123-news
    title: "Bali transport upgrade: three F123 New Bus branches"
    titleOriginal: 八里交通升級！F123新巴士增3支線，強化就醫與轉運接駁
    publisher: Bali District Office, New Taipei City Government (新北市八里區公所)
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=4ac4c63641a08ee607416da6dc649c9c&id=e8ca970cde5c00e1
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Dated 2026-01-09; records the F123 changes announced as effective 2026-01-01, three hospital-serving branches, main-line time changes and the service contact.
  - id: ntpc-newbus-governance
    title: New Taipei rural demand-responsive public transport feasibility analysis
    titleOriginal: 新北市偏遠地區需求反應式公共運輸服務實施可行性分析
    publisher: New Taipei City Research, Development and Evaluation Commission (新北市政府研究發展考核委員會)
    url: https://www.rde.ntpc.gov.tw/userfiles/1160700/files/%28%E4%BA%A4%E9%80%9A%E5%B1%80%29%E6%96%B0%E5%8C%97%E5%B8%82%E5%81%8F%E9%81%A0%E5%9C%B0%E5%8D%80%E9%9C%80%E6%B1%82%E5%8F%8D%E6%87%89%E5%BC%8F%E5%85%AC%E5%85%B1%E9%81%8B%E8%BC%B8%E6%9C%8D%E5%8B%99%E5%AF%A6%E6%96%BD%E5%8F%AF%E8%A1%8C%E6%80%A7%E5%88%86%E6%9E%90.pdf
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: States that after New Taipei's 2010 elevation the city unified budget and commissioned district offices to plan routes and schedules and tender and manage route operations; its older route table lists Bali F121, F122, F123, F125 and F126.
  - id: bali-electric-buses
    title: Bali low-carbon transport demonstration
    titleOriginal: 新聞稿
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=4b1fe313910568a491fe1d6685eeaff6&id=148
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Dated 2026-01-23; says 24 electric city buses were operating in Bali District. It does not identify those vehicles as Bali District Office New Bus vehicles.
  - id: bali-closure-2024
    title: Bali New Bus suspension during a typhoon closure
    titleOriginal: 新北市政府宣布7月24日停班停課，八里區新巴士同步停駛
    publisher: Bali District Office, New Taipei City (新北市八里區公所)
    url: https://www.bali.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=247fcaf4393449f4de0351fbf4dab816&id=21109602ff92db93
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Dated 2024-07-24; records the district New Bus suspension when New Taipei announced a work and school closure.
---

## Government-unit record

The committed TDX pull names Bali District Office (八里區公所) as a NewTaipei operator record, with operator code BaliDistrictOffice, number 0201 and 11 associated route records [^tdx-bus-operator-pull]. This page describes a municipal service authority, not a private bus company with a separately sourced founding date, parent group, shareholder structure or merger history [^bali-newbus-index].

The current district-office page gives the office address as 249201 New Taipei City, Bali District, Bali Boulevard 18, and the switchboard as (02)2610-2621 [^bali-newbus-index]. The unit directory assigns New Bus work to the Economic Development section, extension 261 [^bali-contact]. A New Taipei government transport report explains the institutional model: after the city's elevation, the unified budget commissioned district offices to plan routes and schedules and to tender and manage route operations [^ntpc-newbus-governance]. This establishes a public service authority and procurement responsibility, not a private-company ownership chain.

## Current service evidence

The Bali district-office New Bus page says its timetable is effective from 1 January 2026, warns that vehicles display a full sign when the passenger limit is reached, and says service suspends when New Taipei announces a typhoon or heavy-rain work and school closure [^bali-newbus-index]. The same page was updated 11 June 2026 and publishes timetable images rather than a text route table [^bali-newbus-index]. A full text page maintained by the Bali District Health Center lists F121 Downgu–Changkeng, F122 Laoqiankeng, F123 Huafushan–Mixie–Niuliaopu and F126 Bali–Chang Gung Hospital [^bali-route-text].

The health-center page gives F121 two departures, F122 separate weekday and holiday patterns, and F123 routes through Yitian Temple, the ferry pier, Niuliaopu, Mixie Elementary School, Bali Psychiatric Center and surrounding rural stops [^bali-route-text]. F126 connects Bali with Linkou District Office, Linkou High School, Chonglin Junior High School and Chang Gung Hospital; its 09:00 and 11:00 departures are described as passing through Jiangcuo [^bali-route-text]. These are route and timetable details from the fetched government text page, kept distinct from the TDX route-record snapshot below.

## F123 branch change and official conflict

The district office's 9 January 2026 news release says F123 was adjusted from 1 January, adding three branches: F123-Bali Psychiatric Center, F123-Xiagu via Bali Psychiatric Center and F123-Shihsanhang Culture Park via Bali Psychiatric Center [^bali-f123-news]. It says the main line was also adjusted to departures at 06:40 and 15:25 and frames the change around hospital access, commuting, schooling and future transfer at the Tamsui–Bali bridge [^bali-f123-news].

The full text health-center page publishes a different F123 set: weekday departures at 07:00, 12:05 and 15:50, with a holiday 06:40, 12:05 and 15:50 pattern [^bali-route-text]. Both are official government pages fetched for this record, so the values are preserved rather than averaged or silently replaced. The news release is dated and specifically describes the 2026 adjustment; the health-center page supplies the detailed text timetable but does not state a matching publication date [^bali-f123-news][^bali-route-text].

## Operating and fleet evidence

The district's current page publishes a capacity-full boarding rule but no seat count, model or propulsion field [^bali-newbus-index]. A separate New Taipei Transport Department notice says 24 electric city buses were operating in Bali District as of 23 January 2026, as part of a districtwide low-carbon transport demonstration [^bali-electric-buses]. That is not evidence that the electric city buses belong to the Bali District Office's F-route service, so it is recorded as context rather than assigned to this operator record [^bali-electric-buses]. No fetched primary identifies Bali New Bus manufacturers, chassis, bodies, propulsion, depots, current contractor or route-by-route fleet allocation.

The office's 24 July 2024 notice records that Bali New Bus service stopped when New Taipei declared a typhoon-related work and school closure [^bali-closure-2024]. This is a documented operating response, not a service cancellation or a transfer between operators [^bali-closure-2024].

## TDX route-record snapshot

The list below is generated from the committed TDX operatorIds associations. It records the current data snapshot rather than a hand-maintained route roster or a claim that Bali District Office owns 11 buses [^tdx-bus-operator-pull].

- F121 [^tdx-bus-operator-pull]
- F122 [^tdx-bus-operator-pull]
- F123-0640 [^tdx-bus-operator-pull]
- F123-1205 [^tdx-bus-operator-pull]
- F123-1525 [^tdx-bus-operator-pull]
- F123Bali Psychiatric Center / F123八療 [^tdx-bus-operator-pull]
- F123Shihsanhang Culture Park-Bali Sanatorium / F123十三行文化公園經八療 [^tdx-bus-operator-pull]
- F123Xiagu-Bali Sanatorium / F123下罟經八療 [^tdx-bus-operator-pull]
- F126BJS / F126經里中 [^tdx-bus-operator-pull]
- F126jiangcuo / F126江厝 [^tdx-bus-operator-pull]
- F126 [^tdx-bus-operator-pull]

## Research gaps

The fetched official pages do not publish vehicle models, manufacturers, chassis, body, propulsion, a depot or garage roster, opening dates, current route-by-route allocations, current contractor identity, tender numbers or contract terms. Those fields remain TBC; the 24 electric city buses reported for Bali District are not assigned to this district-office New Bus record [^tdx-bus-operator-pull][^bali-newbus-index][^bali-electric-buses].
