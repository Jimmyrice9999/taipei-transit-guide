---
title: "Tamshui Bus Co., Ltd. — Taipei operator profile"
summary: "A sourced profile of Tamshui Bus’s legal record, operating sites, route history and Taipei network."
updated: 2026-08-21
facts:
  - label: English name
    value: "Tamshui Bus Co., Ltd."
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "淡水客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-tamshuibus-zflu9i"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TamshuiBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1104"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "Taipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "2"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-002-279"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.csgroup-bus.com.tw"
    source: tdx-bus-operator-pull
  - label: MOEA registration date
    value: "1978-12-11"
    source: moea-tamshui
  - label: Registered address
    value: "New Taipei City, Tamsui District, Zhongzheng East Road Section 2, Lane 27, No. 8, 3F"
    source: moea-tamshui
  - label: Paid-in capital
    value: "300000000"
    unit: "NTD"
    source: moea-tamshui
specs:
  - label: Published operating-site entries
    value: "4"
    unit: "stations on the operator-group directory"
    source: tamshui-sites
  - label: Fleet model roster
    value: TBC
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
  - id: moea-tamshui
    title: Tamshui Bus company record
    titleOriginal: "淡水汽車客運股份有限公司 - 經濟部商工登記公示資料查詢"
    publisher: Ministry of Economic Affairs, Administration of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/33785185
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the statutory company number, capital, representative, registered address, registration date, represented corporate directors and approved business categories.
  - id: tamshui-history
    title: Zhongxing Group company history
    titleOriginal: "公司沿革"
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?section=41
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Tamshui Bus’s predecessor, 1974 cooperative reorganization and 1977 company reorganization milestones.
  - id: tamshui-sites
    title: Tamshui Bus station directory
    titleOriginal: "淡水客運場站訊息"
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?section=55
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the four named operating-site entries, addresses and contact numbers; it does not publish opening dates or capacities.
  - id: tamshui-route-launch-2026
    title: Tamshui Bus 2026 route launch notice
    titleOriginal: "115、988、989、990及115平日線正式實施"
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?func=_detail&id=2490&module=news
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the operator’s 11 June 2026 launch announcement for routes 115, 988, 989, 990 and weekday 115 service.
  - id: ntpc-tamshui-eval
    title: 111 New Taipei bus service-quality evaluation
    titleOriginal: "111年度新北市公車營運服務品質評鑑第二期評鑑成果報告"
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/uploaddowndoc?dis=download&file=download%2F202306271121000.pdf&filedisplay=111%E5%B9%B4%E5%BA%A6%E6%96%B0%E5%8C%97%E5%B8%82%E5%85%AC%E8%BB%8A%E7%87%9F%E9%81%8B%E6%9C%8D%E5%8B%99%E5%93%81%E8%B3%AA%E8%A9%95%E9%91%91%E7%AC%AC2%E6%9C%9F%E8%A9%95%E9%91%91%E6%88%90%E6%9E%9C%E5%A0%B1%E5%91%8A.pdf&flag=doc
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Tamshui Bus’s 111(2) score, grade, ranking and indicator tables.
---

## Company history and legal identity

The MOEA record identifies Tamshui Bus as unified business number 33785185, with representative Lu Qifeng, a registered address in New Taipei City’s Tamsui District, total and paid-in capital of NT$300 million and statutory registration date 11 December 1978 [^moea-tamshui]. It lists city bus operation and vehicle repair among the approved business categories [^moea-tamshui].

The Zhongxing Group history gives an earlier operating chronology: the predecessor was Sanxia Automobile Transport Cooperative, it reorganized as Tamshui Automobile Transport Cooperative on 1 August 1974, and it reorganized as Tamshui Bus Co., Ltd. on 1 March 1977 [^tamshui-history]. Those operator-history milestones are retained alongside, rather than substituted for, the later MOEA statutory registration date [^tamshui-history][^moea-tamshui]. The current MOEA director table records corporate representation by Dunfeng Automobile Industry, Taipei Navigation, Red Forest Advertising and Jinlong Automobile Manufacturing [^moea-tamshui].

## Network and operating sites

The committed Taipei TDX snapshot associates two routes with TamshuiBus: 682 and 957 [^tdx-bus-operator-pull]. This municipality-scoped record is therefore a data snapshot, not a hand-maintained claim about every route the company has ever operated [^tdx-bus-operator-pull].

The operator-group station directory publishes four Tamshui Bus site entries: Tamsui, Sanzhi, Bali and New City [^tamshui-sites]. The directory gives addresses and contact numbers for each site, but does not state opening dates, vehicle capacities or route allocations by site [^tamshui-sites]. Those published sites are evidence of the operating footprint; they are not treated as a complete depot register.

## Route history and public evaluation

An operator bulletin dated 11 June 2026 announces new services 115, 988, 989 and 990, plus weekday service on 115 [^tamshui-route-launch-2026]. The committed Taipei TDX record contains only 682 and 957, so the bulletin and this municipality-specific data record describe different snapshots and are not silently merged [^tdx-bus-operator-pull][^tamshui-route-launch-2026].

New Taipei’s 111(2) service-quality report records Tamshui Bus at 90.41 points, grade 優等 and sixth place [^ntpc-tamshui-eval]. That evaluation is a New Taipei oversight record, not a Taipei-specific score for the two-route TDX record [^ntpc-tamshui-eval]. The checked sources do not publish a current manufacturer/model roster, propulsion split, site opening dates or capacities, or a complete route-contract history; those fields remain TBC.

## TDX record

The committed TDX pull identifies this page as the operator record for Tamshui Bus Co., Ltd. (淡水客運), with source municipality Taipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-tamshuibus-zflu9i, operator code TamshuiBus, operator number 1104, phone 0800-002-279 and URL http://www.csgroup-bus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `682` [^tdx-bus-operator-pull]
- `957` [^tdx-bus-operator-pull]

## Research gaps

The TDX record itself contains no history, ownership, fleet-model, site-capacity or contract fields [^tdx-bus-operator-pull]. The operator-group, MOEA and evaluation pages above establish selected legal, historical, site and oversight facts, but the checked sources do not establish a current model-level fleet roster, propulsion split, site opening dates or capacities, or a complete contract chronology; those fields remain TBC [^moea-tamshui][^tamshui-history][^tamshui-sites].
