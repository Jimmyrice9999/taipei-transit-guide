---
title: "Taipei Bus Co., Ltd. — Taipei operator profile"
summary: "The operator history, facilities, electric-bus programme and safety record behind the Taipei Bus TDX records."
updated: 2026-08-21
facts:
  - label: English name
    value: "Taipei Bus Co., Ltd."
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "臺北客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-taipeibus-smuzdo"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TaipeiBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1407"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "Taipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "20"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-003-307"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.tpebus.com.tw"
    source: tdx-bus-operator-pull
  - label: Founded
    value: "1954"
    source: tpebus-home
  - label: Registered legal name
    value: "臺北汽車客運股份有限公司"
    source: company-registry
  - label: Registered representative
    value: "李博文"
    source: company-registry
  - label: Paid-in capital
    value: "NT$390,000,000"
    source: company-registry
  - label: Published vehicle snapshot
    value: "877 vehicles"
    source: tpebus-about
  - label: Route 656 electric-bus replacement
    value: "26 buses; NT$182 million subsidy (February 2023)"
    source: ntpc-electric-656
  - label: Published stations
    value: "18 station sites"
    source: tpebus-about
  - label: Published repair facilities
    value: "13 repair locations"
    source: tpebus-about
specs:
  - label: Fleet models
    value: TBC
  - label: Public group label
    value: "首都客運集團 (four companies named; legal parent TBC)"
    source: ntpc-police-group
  - label: Depots or garages
    value: "Published sites; capacity and opening dates TBC"
    source: tpebus-about
  - label: Contract history
    value: TBC
  - label: 2023 route-667 incident
    value: "Fatal pedestrian collision; NT$90,000 fine and plate suspension"
    source: ntpc-667-incident
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator records, contact fields, source municipalities, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.
  - id: tpebus-home
    title: Taipei Bus home page
    titleOriginal: 臺北客運
    publisher: 臺北汽車客運股份有限公司
    url: https://www.tpebus.com.tw/
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the operator’s own founding and name-change history, plus its published ISO certification statements.
  - id: tpebus-about
    title: Taipei Bus company profile
    titleOriginal: 公司簡介
    publisher: 臺北汽車客運股份有限公司
    url: https://www.tpebus.com.tw/co_about.php
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the operator’s stated business scope, service area, operating snapshot, station list, repair-facility list and service certifications.
  - id: tpebus-stations
    title: Taipei Bus station and facility information
    titleOriginal: 站場簡介
    publisher: 臺北汽車客運股份有限公司
    url: https://www.tpebus.com.tw/co_office.html
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports published station addresses, phone numbers and route allocations; it does not publish capacity or opening dates.
  - id: company-registry
    title: Taipei Bus company record
    titleOriginal: 臺北汽車客運股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: Ministry of Economic Affairs, Administration of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/35505603
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports legal identity, unified business number, registered address, representative, capital, shares, board and registered business categories.
  - id: ntpc-police-group
    title: New Taipei police and Capital Bus Group public-safety cooperation
    titleOriginal: 新北警與首都客運集團產官合作 公益推動交安宣導及道安講習
    publisher: New Taipei City Police Department Traffic Police Brigade (新北市政府警察局交通警察大隊)
    url: https://www.traffic.police.ntpc.gov.tw/cp-909-120378-27.html
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the public group’s stated four-company membership and 2024 traffic-safety cooperation; it does not establish a statutory parent relationship.
  - id: ntpc-electric-656
    title: Route 656 fully electrified
    titleOriginal: 656線公車全面電動化 新北市規模最大電動公車路線
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=b0cdda14cefa207e59d0e0a39c8a4d48&id=148
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports 26 electric buses on Taipei Bus route 656, the NT$182 million replacement subsidy and 2023 project context; it does not identify vehicle models.
  - id: ntpc-quality
    title: New Taipei bus service-quality evaluation
    titleOriginal: 新北市公車服務品質評鑑出爐 臺北、首都客運16連霸
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=202508200020&id=28
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the 2025 announcement that Taipei Bus and Capital Bus were rated 優等 and described as having 16 consecutive years at that level; citywide electric-bus totals are not attributed to Taipei Bus alone.
  - id: ntpc-667-incident
    title: Taipei Bus major-accident review
    titleOriginal: 臺北客運重大事故檢討會 新北交通局現場督導改善
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=24d56fe3a17a95d68572b2031a6b58ae&id=e8ca970cde5c00e1
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the 19 August 2023 route-667 fatal pedestrian collision, NT$90,000 fine, plate suspension, evaluation deduction and driver-licence action.
  - id: audit-bus-labour
    title: Traffic Bureau audit report
    titleOriginal: 拾柒、交通局主管
    publisher: Taipei City Audit Division (臺北市審計處)
    url: https://auditreport.audit.gov.tw/ServerFile/Get/63888887754419499129939d6eb2c74c5faf2727fa3e90cd8e
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the audit table recording three New Taipei labour-law penalties against Taipei Bus totalling NT$270,000 in ROC years 111–113.
---

## TDX record

The committed TDX pull identifies this page as the operator record for Taipei Bus Co., Ltd. (臺北客運), with source municipality Taipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-taipeibus-smuzdo, operator code TaipeiBus, operator number 1407, phone 0800-003-307 and URL http://www.tpebus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Company history and legal identity

臺北客運’s own website traces the business to 1954, when it was called 文山輕便客運社; it says the business was reorganised as 文山汽車客運股份有限公司 in 1956 and took the name 臺北汽車客運股份有限公司 in June 1962 [^tpebus-home].

The Ministry of Economic Affairs registry identifies 臺北汽車客運股份有限公司 under unified business number 35505603, with registered offices at 新北市三重區重新路2段78號8樓 and 李博文 as representative [^company-registry]. The same record gives paid-in capital of NT$390 million and 39 million issued shares, and lists urban and highway passenger transport and vehicle repair among the registered businesses [^company-registry]. The registry lists the board’s corporate representatives and share blocks, but it does not label a parent company [^company-registry].

The public label 首都客運集團 is narrower than a legal ownership chart. A 2024 New Taipei police release describes that group as 首都客運、臺北客運、大都會客運 and 三重客運 in the context of a traffic-safety publicity partnership [^ntpc-police-group]. That establishes the four-company membership stated by the government release; it does not establish a statutory parent relationship [^ntpc-police-group].

## Operating character and facilities

The operator describes its business as urban public-bus, highway-bus and national-route passenger transport serving Greater Taipei and parts of Keelung and Taoyuan [^tpebus-about]. Its company profile publishes an operating snapshot of 20 Taipei joint-operation routes, 63 New Taipei routes, four highway or road passenger routes, 877 vehicles and 1,381 employees [^tpebus-about]. The numbers are retained as the operator’s own snapshot because this Taipei page’s 20 records are generated from the structured pull rather than substituted with the website’s three-category count [^tdx-bus-operator-pull].

The profile names station sites including 板橋後站、四海站、三峽一站、三峽二站、南雅站、歡仔園站、樹林站、中和站、新店站、木柵站、中華站、五福站 and 三重二站, and names 冷水坑保養總廠 plus repair units at several operating sites [^tpebus-about]. The separate station page publishes addresses, phone numbers and route allocations for the facilities it details, including 四海站、南雅站、中和站、新店站、木柵站 and 三峽一站 [^tpebus-stations]. Neither page gives a depot capacity or opening date, so those remain TBC [^tpebus-about] [^tpebus-stations].

New Taipei’s February 2023 release records 26 electric buses entering service on Taipei Bus route 656 and says the operator received NT$182 million to replace those 26 vehicles [^ntpc-electric-656]. It does not identify their manufacturer, chassis, body or passenger capacity, and TDX has no model field for this operator record [^ntpc-electric-656] [^tdx-bus-operator-pull]. The page therefore records the electric transition without inventing a model roster.

## Service record and incidents

New Taipei’s 2025 service-quality announcement lists 臺北客運 among the 優等 operators for the 113 second-period evaluation and says Taipei Bus and Capital Bus had each reached 16 consecutive years at that level [^ntpc-quality]. This is an evaluation result, not a claim that every route or facility performed identically [^ntpc-quality].

New Taipei’s transport bureau says a Taipei Bus 667 bus failed to yield to a pedestrian at the 壽德街 and 民德路 intersection in Zhonghe on 19 August 2023, causing a fatality; the bureau says it imposed a NT$90,000 fine, suspended the vehicle plate and deducted service-evaluation points [^ntpc-667-incident]. The release says the driver lost the licence and quotes the general manager acknowledging that the driver had not followed the company’s stop-before-moving rule [^ntpc-667-incident]. Separately, a Taipei audit report records three labour-law penalties against Taipei Bus in ROC years 111–113, totalling NT$270,000 [^audit-bus-labour].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `NH Express 2` / 內科快線2 [^tdx-bus-operator-pull]
- `205` [^tdx-bus-operator-pull]
- `NH21` / 內科通勤專車21 [^tdx-bus-operator-pull]
- `234` [^tdx-bus-operator-pull]
- `NH3` / 內科通勤專車3 [^tdx-bus-operator-pull]
- `307Xizang Sanmin` / 307西藏三民 [^tdx-bus-operator-pull]
- `307` [^tdx-bus-operator-pull]
- `310` [^tdx-bus-operator-pull]
- `310Shuttle` / 310區 [^tdx-bus-operator-pull]
- `604` [^tdx-bus-operator-pull]
- `651` [^tdx-bus-operator-pull]
- `R57` / 紅57 [^tdx-bus-operator-pull]
- `NEIHU GREEN BUS` / 雙園巴士 [^tdx-bus-operator-pull]
- `Renai Metro Bus` / 仁愛幹線 [^tdx-bus-operator-pull]
- `Nanhuan Metro Bus` / 南環幹線 [^tdx-bus-operator-pull]
- `NS-Shuanghe` / 南軟通勤專車雙和線 [^tdx-bus-operator-pull]
- `S31` / 懷恩專車S31 [^tdx-bus-operator-pull]
- `S32` / 懷恩專車S32 [^tdx-bus-operator-pull]
- `S33` / 懷恩專車S33 [^tdx-bus-operator-pull]
- `S34` / 懷恩專車S34 [^tdx-bus-operator-pull]

## Research gaps

The current sources establish the public four-company group label, company history, facility snapshot, electric replacement and dated incident record, but not a statutory parent relationship, complete model/chassis/body/capacity roster, depot capacities or opening dates, or a dated route-contract chronology [^company-registry] [^ntpc-police-group] [^tpebus-about] [^tpebus-stations] [^tdx-bus-operator-pull].

The route list remains a Taipei-scoped TDX association snapshot. A current fleet register, procurement records with model fields, a depot register and route-award documents would settle the remaining gaps [^tdx-bus-operator-pull].
