---
title: "Taoyuan Bus — New Taipei TDX operator record"
summary: "桃園汽車客運股份有限公司: its published history, current registration, electric-bus record, terminals and New Taipei route association."
updated: 2026-08-22
facts:
  - label: English name
    value: "TBC"
  - label: Chinese name
    value: "桃園客運"
    source: tdx-bus-operator-pull
  - label: Legal company name
    value: "桃園汽車客運股份有限公司"
    source: taoyuan-company-register
  - label: TDX operator record ID
    value: "bus-operator-taoyuanbus-2ov8j"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TaoyuanBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1002"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed TDX pull
    value: "1"
    source: tdx-bus-operator-pull
  - label: Registered status
    value: "核准設立"
    source: taoyuan-company-register
  - label: Registered address
    value: "桃園市桃園區延平路28號3樓"
    source: taoyuan-company-register
  - label: Registered capital
    value: "NT$977,138,520 total; NT$683,994,090 paid-in"
    source: taoyuan-company-register
  - label: TDX phone and service hotline
    value: "0800-053-808"
    source: tdx-bus-operator-pull
specs:
  - label: Registered business scope
    value: "Highway, urban and tour bus; vehicle repair; rental and advertising; property, parking, hotel, crop services and warehousing"
    source: taoyuan-company-register
  - label: Published electric-bus count (華德; Highway Bureau dataset updated 2025-05-29)
    value: "15"
    source: taoyuan-electric-data
  - label: Published company terminals
    value: "Taoyuan, Zhongli and Daxi terminals; public terminal locations, not a complete garage roster"
    source: taoyuan-terminals
  - label: Fleet models, chassis, bodies and capacities
    value: TBC
  - label: Depots or garages and route allocation
    value: TBC
  - label: Ownership or parent group
    value: TBC
  - label: Contract history and terms
    value: TBC
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator record, contact fields, source municipality, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.
  - id: taoyuan-company-register
    title: Company registration record for Taoyuan Bus Company, Ltd.
    titleOriginal: "桃園汽車客運股份有限公司 — 經濟部商工登記公示資料查詢"
    publisher: "Ministry of Economic Affairs, Department of Commercial Development (經濟部商業發展署)"
    url: https://findbiz.nat.gov.tw/fts/company/43266009
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Publishes the legal name, unified business number, registration status, capital, representative, registered address, approval/change dates, business items, board information and two registered factory records; its history view only supplies post-2011 public history.
  - id: taoyuan-museum-history
    title: 1970s Taoyuan Bus metal-body bus
    titleOriginal: "1970年代桃園客運金屬車體巴士"
    publisher: "Daxi Wood Art Ecomuseum, Taoyuan City (桃園市立大溪木藝生態博物館)"
    url: https://daxiculture.tycg.gov.tw/search/detail/O20220125002
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: A Taoyuan City cultural-resource record, credited to Taoyuan Bus, reproduces the company-internal chronology from the 1903 桃崁輕便鐵道會社 through the 1947 桃園汽車客運股份有限公司 name.
  - id: taoyuan-safety-profile
    title: Highway bus operator safety information
    titleOriginal: "公路汽車客運業安全資訊"
    publisher: "Hsinchu Motor Vehicles Office, Highway Bureau, Ministry of Transportation and Communications (交通部公路局新竹區監理所)"
    url: https://hmv.thb.gov.tw/cp.aspx?n=1317
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Lists Taoyuan Bus's public contact address, telephone, website, email and service hotline in the official highway-operator directory.
  - id: taoyuan-952-schedule
    title: Route 952 schedule — Banqiao–Nankan
    titleOriginal: "大臺北公車 952 板橋 — 南崁"
    publisher: "Taipei City Public Transportation Office (臺北市公共運輸處)"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0400095200
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: The full route page, viewed 2026-08-10, publishes the route endpoints, operating windows, segment fare, buffer locations, operator contacts and weekday/holiday headways.
  - id: taoyuan-terminals
    title: Xiaowulai line transport and ticket information
    titleOriginal: "小烏來線交通資訊"
    publisher: "Taoyuan City Government Tourism Bureau (桃園市政府觀光旅遊局)"
    url: https://travel.tycg.gov.tw/zh-tw/traffic/xiaowulai
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Publishes Taoyuan Bus Taoyuan, Zhongli and Daxi terminal names, addresses and telephone numbers, and describes the public-tourism routes using them.
  - id: taoyuan-electric-history
    title: Electric-bus operations observation event
    titleOriginal: "辦理電動公車觀摩 加速推動電動公車"
    publisher: "Environmental Protection Administration, Executive Yuan (行政院環境保護署; now Ministry of Environment)"
    url: https://enews.moenv.gov.tw/Page/3B3C62C78849F32F/c786de79-bdd3-43e7-ae4b-a23241d918a9
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: The 2014 official report identifies Taoyuan Bus's participation in the electric-bus demonstration, describes the Taoyuan station–county-government free service from 2012, and reports 45 electric buses and ten routes county-wide at that time.
  - id: taoyuan-electric-data
    title: National electric-bus operating vehicle count and manufacturer dataset
    titleOriginal: "全國電動公車運行車輛數與廠牌資料"
    publisher: "Highway Bureau, Ministry of Transportation and Communications (交通部公路局)"
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=734
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: The full data catalogue says the dataset was updated 2025-05-29 and lists Taoyuan Bus under code 68000000 with brand 華德 and quantity 15; it does not give models, chassis, body, capacity or route allocation.
---

## Legal identity and history

The committed TDX pull identifies 桃園客運 as the TaoyuanBus record with operator number 1002, source municipality NewTaipei and one associated route record [^tdx-bus-operator-pull]. TDX's record is a data association, not a complete list of every route operated by the legal company [^tdx-bus-operator-pull].

The Ministry of Economic Affairs register identifies the legal entity as 桃園汽車客運股份有限公司, unified business number 43266009, with status 核准設立, registered address 桃園市桃園區延平路28號3樓, total capital NT$977,138,520 and paid-in capital NT$683,994,090 [^taoyuan-company-register]. The current record names 邱政超 as representative and lists highway, urban and tour bus operations alongside vehicle repair, rental and advertising, property, parking, hotel, crop-service and warehousing activities [^taoyuan-company-register]. The registry lists several corporate representatives among the directors, including 臺北汽車客運股份有限公司 for one seat, but it does not identify a parent group; control or group ownership is therefore TBC rather than inferred from a board entry [^taoyuan-company-register].

The Highway Bureau's official highway-operator directory independently lists the same Yanping Road address, the company telephone 03-3753711, website `www.tybus.com.tw`, email `tybus@ms18.hinet.net` and service hotline 0800-053-808 [^taoyuan-safety-profile].

A Taoyuan City cultural-resource record credited to the company says its internal chronology began in 1903 with the 桃崁輕便鐵道會社, changed names in 1912 and 1920, expanded automobile passenger service during the 1920 桃園軌道株式會社 period, and passed through 桃園交通株式會社 in 1943 and 桃園交通有限公司 in 1946 before the 1947 桃園汽車客運股份有限公司 name [^taoyuan-museum-history]. The registry separately gives the present company an approval date of 7 January 1950 (ROC 39) [^taoyuan-company-register]. Those are retained as two dates for two source-defined things: a company-history chronology and a registration approval date [^taoyuan-museum-history][^taoyuan-company-register].

## Route 952 and the TDX boundary

The route list below is generated from the committed pull's `operatorIds` association, so it records the NewTaipei data snapshot rather than a hand-maintained company route roster [^tdx-bus-operator-pull].

- `952` [^tdx-bus-operator-pull]

The full Taipei bus page for route 952 describes a Banqiao–Nankan service with weekday departures from 05:40 to 23:00, holiday departures from 06:00 to 23:00, three fare segments, and published buffer locations at the Linkou interchange and the highway authority [^taoyuan-952-schedule]. It gives weekday peak headways of 10–12 minutes and off-peak headways of 15–20 minutes; the holiday figures are 15 minutes at peak and 20 minutes off peak [^taoyuan-952-schedule]. The page lists contacts at 首都客運板橋站 and 桃園客運桃園站, which documents the route's two operator contacts without proving that either company operates every trip or that this one association exhausts Taoyuan Bus's network [^taoyuan-952-schedule][^tdx-bus-operator-pull]. These fare and timetable values were retrieved on 22 August 2026 from a page showing 10 August 2026 as its view/update date [^taoyuan-952-schedule].

## Fleet record and electric-bus history

The 2014 Environmental Protection Administration report records a joint electric-bus observation event at Taoyuan Bus's Taoyuan terminal and says Taoyuan County had operated a free electric demonstration between Taoyuan railway station and the county government since 2012 [^taoyuan-electric-history]. That report says 45 electric buses and ten electric routes were operating county-wide at the time, including city routes and Daxi routes; it does not identify all 45 as Taoyuan Bus vehicles or provide a model roster [^taoyuan-electric-history].

The Highway Bureau's open-data catalogue is narrower and newer: its dataset was updated 29 May 2025 and lists 桃園客運 under local-government code 68000000 with brand 華德 and 15 licensed vehicles [^taoyuan-electric-data]. The 2014 county-wide total and the 2025 company/brand row are not added together: they have different dates, geography and units of measurement [^taoyuan-electric-history][^taoyuan-electric-data]. Neither fetched primary record names a chassis, body, capacity, specific model designation, hybrid vehicle, or complete current fleet, so those fields remain TBC [^taoyuan-electric-history][^taoyuan-electric-data][^tdx-bus-operator-pull].

## Terminals, workshops and research gaps

Taoyuan City's official Xiaowulai transport page lists the Taoyuan Bus Taoyuan terminal at 延平路28號, the Zhongli terminal at 中和路225號 and the Daxi terminal at 得勝路1號, with telephone numbers 03-375-3711, 03-422-2047 and 03-388-2002 respectively [^taoyuan-terminals]. These are published passenger-terminal locations; the page does not establish that they are all garages or that vehicles are allocated there [^taoyuan-terminals]. The company registry separately lists an active registered repair factory and a Taoyuan maintenance factory marked closed, but gives no route allocation or complete depot register [^taoyuan-company-register].

The fetched primary sources establish the legal company, a company-history chronology, the 2025 electric-bus data row, public terminals and the single NewTaipei TDX association [^tdx-bus-operator-pull][^taoyuan-company-register][^taoyuan-electric-data][^taoyuan-museum-history][^taoyuan-terminals]. They do not establish a parent group, current depot or garage allocation, vehicle models and technical specifications, current procurement contracts, contract terms, or a company-specific incident or regulatory-action history; those remain TBC [^tdx-bus-operator-pull][^taoyuan-company-register][^taoyuan-electric-data].
