---
title: "Kuang Hua Bus Co., Ltd. — New Taipei operator profile"
summary: "A sourced profile of Kuang Hua Bus’s New Taipei TDX record, company history, stations and dated evaluation."
updated: 2026-08-21
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "光華巴士"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-kuanghuabus-n0tc6w"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "KuangHuaBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0601"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "8"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-002-277"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.csgroup-bus.com.tw"
    source: tdx-bus-operator-pull
  - label: Operator-stated founding month
    value: "1969-10"
    source: kh-history
specs:
  - label: Published operating-site entries
    value: "10"
    unit: "stations on the operator-group directory"
    source: kh-stations
  - label: New Taipei route associations at Beifeng
    value: "4"
    unit: "routes listed on the station page"
    source: kh-stations
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
  - id: kh-history
    title: Zhongxing Group company history
    titleOriginal: 公司沿革
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?section=41
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Kuang Hua’s operator-stated 1969 founding, 1977 Taipei joint-operation entry and 1997 Shilin–Keelung highway application.
  - id: kh-stations
    title: Kuang Hua station directory
    titleOriginal: 光華巴士場站
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?section=52
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the ten named operating-site entries, their addresses and published route associations, including Beifeng’s New Taipei routes.
  - id: thb-kh-directory
    title: Highway Bureau operator directory entry for Kuang Hua Bus
    titleOriginal: 汽車運輸業業者資料
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=457
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the regulator directory name, registered business address and telephone number.
  - id: ntpc-kh-eval
    title: 111 New Taipei bus service-quality evaluation
    titleOriginal: 111年度新北市公車營運服務品質評鑑第二期評鑑成果報告
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/uploaddowndoc?dis=download&file=download%2F202306271121000.pdf&filedisplay=111%E5%B9%B4%E5%BA%A6%E6%96%B0%E5%8C%97%E5%B8%82%E5%85%AC%E8%BB%8A%E7%87%9F%E9%81%8B%E6%9C%8D%E5%8B%99%E5%93%81%E8%A9%95%E9%91%91%E7%AC%AC2%E6%9C%9F%E8%A9%95%E9%91%91%E6%88%90%E6%9E%9C%E5%A0%B1%E5%91%8A.pdf&flag=doc
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Kuang Hua’s 111(2) score, grade, ranking and comparison-period results.
---

## Company history and legal identity

The Zhongxing Group’s company-history page says Kuang Hua Bus was established in October 1969 by 沈水木, initially serving Tianmu, Shilin and Neihu [^kh-history]. The same history places the company’s entry into Taipei’s joint-operation bus system in April 1977 and records a 1997 application with Keelung Bus for the Shilin–Keelung freeway service [^kh-history]. These are operator-group milestones; a successful statutory company-registration fetch was not available for this record, so no capital, representative or legal registration date is inferred here.

The Highway Bureau directory independently lists 光華巴士股份有限公司 at 臺北市士林區中正路499號1樓 and gives 02-28826780 [^thb-kh-directory]. The directory entry supports the regulated operator identity and contact details, while the group history supplies the dated narrative [^thb-kh-directory][^kh-history].

## Network and stations

The committed New Taipei TDX snapshot associates eight routes with KuangHuaBus: `677`, `677Sub`, `813Shuttle`, `813`, `BL21Sub`, `BL21`, `BL23` and `BL39` [^tdx-bus-operator-pull]. That count is specific to this New Taipei record; it is not a count of every route appearing elsewhere on the group’s pages [^tdx-bus-operator-pull].

The operator-group station directory publishes ten named operating-site entries: Donghu, Beifeng, Tiandong, Haizhuan, Tianxi, Zhonghe, Beishike, Zhoumei, National Palace Museum and Linguang [^kh-stations]. For the New Taipei routes in this record, the Beifeng entry gives the address as 新北市汐止區福德二路170號 and lists `BL21`, `BL21Sub`, `BL23` and `BL39` [^kh-stations]. The page publishes addresses and route associations, but not station opening dates or capacities [^kh-stations].

## Evaluation and research gaps

New Taipei’s 111(2) service-quality evaluation records Kuang Hua at 84.01 points, grade 甲等 and ninth place; its comparison table shows 乙等 at 77.45 in 110(2) and 甲等 at 80.77 in 111(1) [^ntpc-kh-eval]. This gives the page a dated oversight record without treating the score as a fleet or ownership measure [^ntpc-kh-eval].

The checked group history, station directory, regulator directory, TDX data and evaluation report do not publish a current manufacturer/model, chassis/body, passenger-capacity or electric/hybrid roster for this New Taipei record [^kh-history][^kh-stations][^thb-kh-directory][^tdx-bus-operator-pull][^ntpc-kh-eval]. They also do not establish site opening dates, capacities or route-award and renewal history. Those fields remain TBC rather than being inferred from the eight-route association list.

## TDX record

The committed TDX pull identifies this page as the operator record for KuangHuaBus (光華巴士), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-kuanghuabus-n0tc6w, operator code KuangHuaBus, operator number 0601, phone 0800-002-277 and URL http://www.csgroup-bus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `677` [^tdx-bus-operator-pull]
- `677Sub` / 677副 [^tdx-bus-operator-pull]
- `813Shuttle` / 813區 [^tdx-bus-operator-pull]
- `813` [^tdx-bus-operator-pull]
- `BL21Sub` / 藍21副 [^tdx-bus-operator-pull]
- `BL21` / 藍21 [^tdx-bus-operator-pull]
- `BL23` / 藍23 [^tdx-bus-operator-pull]
- `BL39` / 藍39 [^tdx-bus-operator-pull]

## Research gaps

The committed TDX operator record contains no founding history, ownership structure, fleet-model roster, depot or garage field, or contract-history field; each remains TBC here [^tdx-bus-operator-pull].

The record’s URL is reproduced as TDX metadata, but a company-history, ownership, fleet, depot or dated contract claim requires a full page from the operator or responsible government authority [^tdx-bus-operator-pull].
