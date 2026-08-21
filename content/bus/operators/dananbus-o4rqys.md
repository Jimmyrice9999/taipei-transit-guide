---
title: "Danan Bus Co., Ltd. — New Taipei operator profile"
summary: "A sourced profile of Danan Bus’s legal record, operating sites, fleet transition and Taipei-region network."
updated: 2026-08-21
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "大南汽車"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-dananbus-o4rqys"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "DananBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0307"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "7"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-089-456"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.dnbus.com.tw/"
    source: tdx-bus-operator-pull
  - label: MOEA registration date
    value: "1969-04-24"
    source: moea-danan
  - label: Registered address
    value: "臺北市士林區承德路四段274號"
    source: moea-danan
  - label: Operator-stated founding month
    value: "1969-08"
    source: danan-about
specs:
  - label: Dated combined fleet total
    value: "260"
    unit: "vehicles in the Taipei/New Taipei table as of 2025-10-01"
    source: danan-fleet-2025
  - label: Dated combined electric low-floor total
    value: "69"
    unit: "vehicles in the same 2025-10-01 table"
    source: danan-fleet-2025
  - label: Published operating-site entries
    value: "5"
    unit: "sites, excluding headquarters"
    source: danan-sites
  - label: Guandu charging procurement scope
    value: "74"
    unit: "bus parking spaces in the procurement specification"
    source: danan-guandu-tender
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
  - id: danan-about
    title: Danan Bus company profile
    titleOriginal: 公司簡介
    publisher: Danan Bus Co., Ltd. (大南汽車股份有限公司)
    url: https://www.dnbus.com.tw/about2.html
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the operator-stated founding month, early investors, 1977 Veterans Affairs Council takeover, wider service focus and mission.
  - id: moea-danan
    title: Danan Bus company record
    titleOriginal: 大南汽車股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: Ministry of Economic Affairs, Administration of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/11011623
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the statutory company number, capital, representative, registered address, registration date, director representation and approved business categories.
  - id: danan-sites
    title: Danan Bus contact and station directory
    titleOriginal: 聯絡我們
    publisher: Danan Bus Co., Ltd. (大南汽車股份有限公司)
    url: https://www.dnbus.com.tw/contact2.html
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the published Beitou, Beitou mountain, Guandu, Neihu and Tucheng operating-site entries and addresses; it does not publish opening dates or capacities.
  - id: danan-fleet-2025
    title: Danan fleet-age table to 1 October 2025
    titleOriginal: 臺北市聯營公車車輛數及車齡統計表／新北市公車車輛數及車齡統計表（資料至114年10月1日止）
    publisher: Danan Bus Co., Ltd. (大南汽車股份有限公司)
    url: https://www.dnbus.com.tw/News/2025/20251029/5.pdf
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the dated combined vehicle total and electric low-floor count; it is not a current manufacturer/model roster.
  - id: danan-guandu-tender
    title: Guandu electric-bus depot charging procurement specification
    titleOriginal: 大南汽車關渡站電動大客車停車場充電設備採購規範
    publisher: Danan Bus Co., Ltd. (大南汽車股份有限公司)
    url: https://www.dnbus.com.tw/News/2025/20251222-1.pdf
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the planned charging-space, battery-class and completion-deadline requirements; it does not verify completion.
  - id: pto-danan-2024
    title: 2024 Taipei joint-operation bus service-quality evaluation
    titleOriginal: 臺北市聯營公車營運服務品質評鑑113年第1期評鑑結果
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=86B7001D1FAC5ABA
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Danan’s 113(1) evaluation group.
  - id: pto-danan-2025
    title: 2025 Taipei joint-operation bus service-quality evaluation
    titleOriginal: 臺北市聯營公車營運服務品質評鑑114年第2期評鑑結果
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=F636618749F230FA&sms=72544237BBE4C5F6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Danan’s 114(2) evaluation group.
  - id: pto-danan-alcohol
    title: Taipei PTO Danan alcohol-testing incident notice
    titleOriginal: 臺北市聯營公車駕駛酒後肇事及管理缺失
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=CAFEAFA82281FD8D&sms=72544237BBE4C5F6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the authority’s account of the 小6 driver alcohol-testing and vehicle-control management incident.
---

## Company history and legal identity

Danan’s own profile says it was established in August 1969 by Yulon Motor and the Veterans Affairs Council, with early investment vehicles including Rongqiao and Xufa; it says the Veterans Affairs Council took over in February 1977 and that Danan and Shin-Shin jointly operated intercity services afterward [^danan-about]. The MOEA record gives a different date for the legal entity: 24 April 1969, unified business number 11011623, registered address 臺北市士林區承德路四段274號, representative 張捷, total capital NT$350 million and paid-in capital NT$308,652,850 [^moea-danan]. These are retained as separate operator-stated and statutory dates rather than collapsed into one founding claim [^danan-about] [^moea-danan].

The current MOEA director table records the Veterans Affairs Council as the represented entity for three directors, alongside corporate representations for 欣湖天然氣, 欣泉投資 and 欣欣客運 [^moea-danan]. That is evidence of the current registered board representation shown by the record; it does not establish a complete parent-group or merger chronology [^moea-danan].

## Network, operating sites and fleet

The New Taipei TDX snapshot associates seven routes with DananBus [^tdx-bus-operator-pull]. Danan’s own profile describes a wider service focus around Taipei’s Shilin and Beitou districts and New Taipei’s Banqiao, Zhonghe, Yingge, Tucheng, Xizhi and Xindian areas, so the TDX count should be read as this record’s municipality-scoped association set rather than the company’s entire network [^tdx-bus-operator-pull] [^danan-about].

The company’s contact page publishes five operating-site entries outside headquarters: Beitou, Beitou mountain, Guandu, Neihu and Tucheng [^danan-sites]. It gives the Neihu address as Xingshan Road 268 B1 and the Tucheng address as Shimen Road 15, while the Beitou and Beitou mountain entries share Xiushan Road 36 and Guandu is described at a road intersection [^danan-sites]. The checked page does not state opening dates or capacities for these sites, so those fields remain TBC [^danan-sites].

Danan’s fleet-age table dated 1 October 2025 reports a combined Taipei/New Taipei total of 260 vehicles, including 69 electric low-floor vehicles [^danan-fleet-2025]. This is useful dated fleet evidence, but it is a vehicle-class and age table rather than a manufacturer, chassis, body or passenger-capacity roster [^danan-fleet-2025].

## Procurement and oversight

The Guandu electric-bus depot procurement specification describes charging provision for 74 bus parking spaces, split into 42 Class A and 32 Class B spaces, with 350-kWh and 200-kWh battery assumptions respectively; it gives a completion deadline of 15 July 2026 [^danan-guandu-tender]. The document establishes a planned or procured scope, not verified completion, so the current operating status of that project remains TBC [^danan-guandu-tender].

Taipei PTO’s 2024 first-period evaluation places Danan in the 優等 group, while its 2025 second-period notice places Danan in the 甲等 group [^pto-danan-2024] [^pto-danan-2025]. A separate PTO incident notice records an 小6 driver who did not report for an alcohol test after driving from a parking area and says Danan’s vehicle-control and pre-departure breath-test management was inadequate [^pto-danan-alcohol]. This is the authority’s documented oversight account, not a generalized claim about the operator [^pto-danan-alcohol].

## TDX record

The committed TDX pull identifies this page as the operator record for DananBus (大南汽車), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-dananbus-o4rqys, operator code DananBus, operator number 0307, phone 0800-089-456 and URL http://www.dnbus.com.tw/ for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `Sanying 1` / 三鶯1線 [^tdx-bus-operator-pull]
- `731` [^tdx-bus-operator-pull]
- `839` [^tdx-bus-operator-pull]
- `839Gengxin` / 839耕莘 [^tdx-bus-operator-pull]
- `G9Gengxin` / 綠9耕莘 [^tdx-bus-operator-pull]
- `G9` / 綠9 [^tdx-bus-operator-pull]
- `G9Beixin` / 綠9北新國小 [^tdx-bus-operator-pull]

## Research gaps

The current sources establish separate statutory and operator-stated dates, board representation, five named operating-site entries, dated fleet totals, a charging procurement and dated oversight records, but not a current model-level fleet roster, site capacities or opening dates, Guandu completion, or complete route-contract history [^moea-danan] [^danan-about] [^danan-sites] [^danan-fleet-2025] [^danan-guandu-tender].

The route list remains a New Taipei-scoped TDX association snapshot. A current fleet register, depot register and route-award documents would settle the remaining gaps [^tdx-bus-operator-pull].
