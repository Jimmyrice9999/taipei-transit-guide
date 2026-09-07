---
title: Pingtung regional buses
description: A dated Pingtung bus discovery layer joined to Pingtung Bus's current route, accessibility, fare-zone and southern-corridor material.
summary: The 7 September 2026 TDX snapshot contains 123 Pingtung County route records and 333 supplied variants; Pingtung Bus's own pages add dated examples from the county network, the Pingtung–Donggang corridor and the Hengchun tourist/accessibility network.
updated: 2026-09-07
facts:
  - label: TDX route records
    value: "123"
    source: pingtung-route-tdx
  - label: TDX source variants
    value: "333"
    source: pingtung-route-tdx
  - label: TDX operator labels attached to routes
    value: "20"
    source: pingtung-route-tdx
  - label: Pingtung Bus operator overview
    value: "63 routes"
    source: pingtung-operator-overview
  - label: County-wide permanent route total across publication layers
    value: TBC
  - label: Complete county fare matrix
    value: TBC
  - label: Latest county service-evaluation status
    value: 112 and 113年度 city-bus evaluations completed June 2026; scores not published here
    source: pingtung-service-evaluation-audit
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-07
    source: pingtung-route-tdx
  - label: Structured data definition
    value: TDX Route/City/PingtungCounty records; variants are supplied SubRoutes records, not timeless unique routes
    source: pingtung-route-tdx
  - label: Pingtung Bus timetable pages updated
    value: 2026-08-26
    source: pingtung-schedule-513
  - label: Representative accessible circular route
    value: Route 513, Pingtung railway-station circular service
    source: pingtung-schedule-513
  - label: Representative southern/eastern corridor
    value: Route 101, Xiaowan–National Museum of Marine Biology and Aquarium
    source: pingtung-schedule-101
sources:
  - id: pingtung-route-tdx
    title: Pingtung County city-bus route snapshot
    titleOriginal: 屏東縣公車路線資料（TDX Route/City/PingtungCounty）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/PingtungCounty?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The national dated pull records Pingtung RouteUID-oriented records, supplied SubRoutes variants, route endpoints, operator labels and source update time.
  - id: pingtung-schedule-513
    title: Pingtung railway-station circular route timetable and fare zones
    titleOriginal: 屏東火車站環繞線
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/product_info/0/1/513
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page gives the 2026-08-26 timetable update, route 513 departures in both directions, accessibility markings, stop-zone names and electronic/cash fare tables.
  - id: pingtung-schedule-8227
    title: Pingtung–Sandimen Township Office timetable and fare zones
    titleOriginal: 屏東－三地鄉公所(經崙上、振興)
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/product_info/0/1/8227
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page gives the updated timetable, holiday/summer-vacation exceptions, accessible departures, route-zone names and electronic/cash fare tables.
  - id: pingtung-schedule-8203
    title: Pingtung–Donggang timetable and fare zones
    titleOriginal: 屏東－東港(經社皮、五房)
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/product_info/16/1/8203?num=8203
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page gives the updated timetable, accessible markings, named zone/stop groupings and a fare table reaching Donggang transfer-station stops.
  - id: pingtung-schedule-101
    title: Xiaowan–National Museum of Marine Biology and Aquarium timetable
    titleOriginal: 小灣－海生館[經海生館]
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/product_info/0/1/101
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page gives the 2026-08-26 schedule update, September route notices, electric-accessible-bus markings and the route's coastal/Hengchun stop columns.
  - id: pingtung-operator-overview
    title: Pingtung Bus current overview and history
    titleOriginal: 屏客故事
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/intro/197/1
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The operator’s full overview states its own 38 highway-route, 25 Pingtung-county-route and 263-commercial-vehicle figures, plus the 10-electric-bus Hengchun deployment from 10 February 2026 and QR-equipment history.
  - id: pingtung-stations
    title: Pingtung Bus service locations
    titleOriginal: 服務據點
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/intro/0/0?status=12
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator directory gives the Pingtung, Chaozhou, Donggang, Fangliao and Hengchun counters, addresses, hours and high-speed/airport sales points.
  - id: pingtung-service-evaluation-audit
    title: "Audit follow-up: Pingtung city-bus service evaluation"
    titleOriginal: 屏東縣市區汽車客運業營運與服務評鑑執行要點改善情形
    publisher: National Audit Office / Pingtung County Audit Office (審計部 / 屏東縣審計室)
    url: https://www.audit.gov.tw/p/406-1000-11766,r12.php?Lang=zh-tw
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The official audit follow-up says Pingtung adopted its evaluation execution rules on 18 November 2025 and completed the 112 and 113年度 city-bus service evaluations in June 2026; it does not publish the scores on this page.
---

Pingtung’s regional bus layer is split between a broad structured discovery response and operator-specific timetable pages. The 7 September 2026 TDX pull contains 123 Pingtung County route records and 333 records in the supplied `SubRoutes` arrays.[^pingtung-route-tdx] Those figures describe one source response and its variants; they are not a permanent county-wide route total.[^pingtung-route-tdx]

The same response attaches 20 distinct operator labels, including bus companies, township offices, cooperatives and community organisations.[^pingtung-route-tdx] That mixed label set is why this page does not flatten every TDX operator field into a conventional commercial-company list. The [Pingtung Bus operator profile](/bus/operators/pingtung-bus/) is the first editorial operator overlay for the county.[^pingtung-operator-overview]

## What the operator publishes

Pingtung Bus’s route pages display a timetable update date of 26 August 2026 and distinguish weekday from holiday/summer-vacation service.[^pingtung-schedule-513][^pingtung-schedule-8227] Route 513 is a railway-station circular service: the page publishes eight outward and eight return departures, with accessibility markings on all but one displayed departure in each direction.[^pingtung-schedule-513] Its zone table names Pingtung Transfer Station, Pingtung Railway Station, the markets and parks on the circuit, and the operator’s electronic-versus-cash fare table.[^pingtung-schedule-513]

The route 8227 page shows how an eastern foothill service needs more than a route number: its stop-zone table separates Pingtung, Changzhi, Lunshang, Fan-hua, Zhenxing, Shuimen and Sandimen Township Office, and identifies holiday/summer-vacation exceptions and accessible trips.[^pingtung-schedule-8227] The route 8203 page similarly publishes the Pingtung–Donggang corridor through Wandan, Xinpi and Wufang, with Donggang Transfer Station named in the terminal stop group and an explicit fare table.[^pingtung-schedule-8203]

The southern tourism/ordinary-service boundary is kept visible. Route 101 is published as the Xiaowan–National Museum of Marine Biology and Aquarium service; its September notice area includes a 1 September diversion/closure notice, while the timetable marks displayed trips as electric accessible buses.[^pingtung-schedule-101] That is current operator evidence for this route page, not a claim that every Pingtung tourist service is ordinary daily transit.[^pingtung-schedule-101]

## Payment, hubs and gaps

Pingtung Bus says its city-bus vehicles received QR scanning equipment in 2024 and that its highway-bus vehicles had received QR-capable equipment in 2022; it separately records a 2021 trial using iPASS MONEY, EasyWallet and icash Pay on route 9189.[^pingtung-operator-overview] These are operator-reported deployment milestones, not proof that every county service has identical QR products or concessions. Current route pages retain their own electronic and cash fare tables instead of being generalised into a Taiwan-wide acceptance claim.[^pingtung-schedule-513][^pingtung-schedule-8203]

## Service-quality evaluation

Pingtung's official audit follow-up says the county adopted 屏東縣市區汽車客運業營運與服務評鑑執行要點 on 18 November 2025 and completed the 112 and 113年度 city-bus service-quality evaluations in June 2026.[^pingtung-service-evaluation-audit] This establishes the evaluation process and completion status, not the operators' scores: the audit page says the results were to be posted, so this page does not manufacture a ranking or grade.[^pingtung-service-evaluation-audit]

The operator directory lists staffed points at Pingtung, Chaozhou, Donggang, Fangliao and Hengchun, along with a high-speed rail/墾丁快線 counter at Zuoying and an airport counter.[^pingtung-stations] Pingtung Bus’s own overview says it operates 38 highway routes and 25 Pingtung-county bus routes, while the national TDX response has a different scope; both are retained as source-defined measurements.[^pingtung-operator-overview][^pingtung-route-tdx]

The page does not assert a complete county operator roster, one unified fare matrix, vehicle allocation by route, current DRT coverage or an official interchange graph. Those remain TBC until each source and mode boundary is fetched separately.
