---
title: "Capital Bus Co., Ltd. — New Taipei operator profile"
summary: "A sourced profile of Capital Bus’s legal record, operating sites and Taipei-region network."
updated: 2026-08-21
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "首都客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-capitalbus-1mju8h7"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "CapitalBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0913"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "22"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-000-866"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.capital-bus.com.tw"
    source: tdx-bus-operator-pull
  - label: MOEA registration date
    value: "1975-08-14"
    source: moea-capital
  - label: Registered address
    value: "新北市三重區重新路二段78號8樓"
    source: moea-capital
  - label: Operator-stated founding date
    value: "1976-07-01"
    source: capital-about
specs:
  - label: Fleet model and propulsion roster
    value: TBC
  - label: Operating sites
    value: "21"
    unit: "sites plus maintenance teams"
    source: capital-about
  - label: Site opening dates and capacities
    value: TBC
  - label: Contract history
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
    note: Supports the committed operator records, contact fields, source municipalities, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.
  - id: moea-capital
    title: Capital Bus company record
    titleOriginal: 首都客運股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: Ministry of Economic Affairs, Administration of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/34049262
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the statutory company name, English name, registration number, capital, representative, registered address, registration date and approved business categories.
  - id: capital-about
    title: Capital Bus company profile
    titleOriginal: 公司簡介
    publisher: Capital Bus (首都客運股份有限公司)
    url: https://www.capitalbusgroup.com.tw/cpbus/co_about.html
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the operator-stated founding date, business scope, operating region, named operating sites, maintenance teams and service-quality statement.
  - id: pto-bus-history
    title: Taipei city-bus history
    titleOriginal: 公車簡介
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=AAEEE8A01971ECFB&s=FBAD7AB84D95E137&sms=D0111F238E458DC8
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 1977 Taipei joint-operation entry of the predecessor identified by the authority as today’s Capital Bus.
  - id: ntpc-capital-eval
    title: 111 New Taipei bus service-quality evaluation
    titleOriginal: 111年度新北市公車營運服務品質評鑑第二期評鑑成果報告
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/uploaddowndoc?dis=download&file=download%2F202306271121000.pdf&filedisplay=111%E5%B9%B4%E5%BA%A6%E6%96%B0%E5%8C%97%E5%B8%82%E5%85%AC%E8%BB%8A%E7%87%9F%E9%81%8B%E6%9C%8D%E5%8B%99%E5%93%81%E8%B3%AA%E8%A9%95%E9%91%91%E7%AC%AC2%E6%9C%9F%E8%A9%95%E9%91%91%E6%88%90%E6%9E%9C%E5%A0%B1%E5%91%8A.pdf&flag=doc
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Capital Bus’s 111(2) score, grade and ranking, plus the two preceding comparison periods.
---

## Company history and legal identity

The MOEA record identifies Capital Bus as 首都客運股份有限公司, with the English charter name CAPITAL BUS TRANSPORTATION Co., LTD. It gives unified business number 34049262, registered address in Sanchong, paid-in capital of NT$530 million, representative 李博文 and a registration date of 14 August 1975 [^moea-capital]. The same record lists city bus, intercity bus, tour-bus, vehicle-repair and related activities among the approved business categories [^moea-capital].

The operator’s own company profile gives a different dated milestone: it says the company was founded on 1 July 1976 [^capital-about]. Taipei PTO’s history places the predecessor called San Chung City Bus among the five private operators entering the city’s joint-operation system on 30 April 1977, and labels that predecessor as today’s Capital Bus [^pto-bus-history]. Those dates are kept as separate registration, founding and network-transition events rather than silently chosen as one origin date.

## Operating sites and network

The current TDX snapshot associates 22 routes with this New Taipei CapitalBus record [^tdx-bus-operator-pull]. The route section below is generated from those associations, so it can change with the committed data pull without turning this profile into a hand-maintained route list [^tdx-bus-operator-pull].

Capital’s profile names 21 operating sites, including Sanchong, Erchong, two Xinzhuang sites, Sanxia, Neihu, Dongyuan, Shilin, Nangang, Jingmao, two Xizhi sites, Shezi, Luodong, Ankeng, a second Sanchong site, Minsheng, Banqiao Front, Badouzi, Hualien and Banqiao [^capital-about]. It separately lists a maintenance plant and inspection teams at Sanchong, Erchong, both Xinzhuang sites, Neihu, Shilin, Xizhi, Ankeng and Wujie [^capital-about]. The source does not state opening dates, vehicle capacity or route allocation by site, so those fields remain TBC [^capital-about].

## Fleet and oversight

Neither the operator profile nor the readable MOEA record publishes a current manufacturer/model roster, chassis and body combinations, passenger capacities, or electric and hybrid counts [^capital-about] [^moea-capital]. The page therefore reports the fleet-model and propulsion roster as TBC; route count is not a fleet proxy [^tdx-bus-operator-pull].

New Taipei’s 111 second-period evaluation report records Capital Bus at 94.01 points, grade 優等 and second place in that period; its comparison table also records 優等 for 110 second period and 111 first period [^ntpc-capital-eval]. That result is dated public oversight, not evidence that every route, site or vehicle had the same result [^ntpc-capital-eval].

## TDX record

The committed TDX pull identifies this page as the operator record for CapitalBus (首都客運), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-capitalbus-1mju8h7, operator code CapitalBus, operator number 0913, phone 0800-000-866 and URL http://www.capital-bus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `62` [^tdx-bus-operator-pull]
- `802Shuttle` / 802區 [^tdx-bus-operator-pull]
- `802` [^tdx-bus-operator-pull]
- `842` [^tdx-bus-operator-pull]
- `845` [^tdx-bus-operator-pull]
- `885` [^tdx-bus-operator-pull]
- `916` [^tdx-bus-operator-pull]
- `927taipei` / 927經台北港 [^tdx-bus-operator-pull]
- `927` [^tdx-bus-operator-pull]
- `952` [^tdx-bus-operator-pull]
- `982` [^tdx-bus-operator-pull]
- `982Express` / 982直達 [^tdx-bus-operator-pull]
- `982Shuttle` / 982區 [^tdx-bus-operator-pull]
- `982Exp.S` / 982直達新埔線 [^tdx-bus-operator-pull]
- `99` [^tdx-bus-operator-pull]
- `BL18` / 藍18 [^tdx-bus-operator-pull]
- `BL2` / 藍2 [^tdx-bus-operator-pull]
- `O12` / 橘12 [^tdx-bus-operator-pull]
- `O13` / 橘13 [^tdx-bus-operator-pull]
- `Shulin Train Station Rear-Ocean Park` / 樹林後火車站-海洋公園 [^tdx-bus-operator-pull]
- `Sanxia-Yongning MRT station` / 三峽-捷運永寧站 [^tdx-bus-operator-pull]
- `Zhonghe(Zili road)-Xindian` / 中和自立路-新店 [^tdx-bus-operator-pull]

## Research gaps

The current sources establish separate statutory, operator and 1977 network-transition dates, the operator’s 21-site profile, and a dated New Taipei evaluation result, but not a current manufacturer/model roster, depot opening dates or capacities, route allocations by site, or complete contract and ownership history [^moea-capital] [^capital-about] [^pto-bus-history] [^ntpc-capital-eval].

The route list remains a New Taipei-scoped TDX association snapshot. A current fleet register, procurement records with model fields, a depot register and route-award documents would settle the remaining gaps [^tdx-bus-operator-pull].
