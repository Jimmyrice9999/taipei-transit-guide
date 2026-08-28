---
title: "Metropolitan Bus Co., Ltd. — New Taipei operator profile"
summary: "The privatized bus operator’s New Taipei TDX record, route associations, facilities, electric fleet evidence and service oversight."
updated: 2026-08-21
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "大都會客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-metropolitanbus-oercnr"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "MetropolitanBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0303"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "17"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-053-434"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.mtcbus.com.tw"
    source: tdx-bus-operator-pull
  - label: MOEA registration date
    value: "16 December 2003"
    source: moea-metropolitan
  - label: Registered legal name
    value: "大都會汽車客運股份有限公司"
    source: moea-metropolitan
  - label: Registered representative
    value: "李博文"
    source: moea-metropolitan
  - label: Published route-262 model
    value: "RAC-700-ELCB-2800; 25 seated and 30 standing"
    source: ttsb-metropolitan-vehicle
specs:
  - label: Fleet models
    value: "One documented electric model; complete roster and hybrid coverage TBC"
    source: ttsb-metropolitan-vehicle
  - label: Depots or garages
    value: "Named municipal sites; capacity and opening dates TBC"
    source: taipei-depot-budget
  - label: Contract history
    value: TBC
  - label: Parent or merger history
    value: TBC
  - label: 2025 route-262 incident
    value: "RAC-700-ELCB-2800 destroyed; no injuries; investigation opened"
    source: ttsb-metropolitan-incident
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
  - id: moea-metropolitan
    title: Metropolitan Transport Corporation company record
    titleOriginal: 大都會汽車客運股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: Ministry of Economic Affairs, Department of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/80653426?fhl=en
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the registered legal name, business number, representative, registered address, capital and 16 December 2003 registration date.
  - id: taipei-pto-history
    title: Taipei city-bus history
    titleOriginal: 公車簡介
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=AAEEE8A01971ECFB&s=FBAD7AB84D95E137&sms=D0111F238E458DC8
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the former Taipei Municipal Bus Administration’s 1 January 2004 privatization and renaming as Metropolitan Bus.
  - id: dot-metropolitan-privatization
    title: Taipei DOT clarification on Metropolitan Bus governance
    titleOriginal: 臺北市政府交通局針對部分媒體報導大都會客運公司車輛採購及董事有無善盡職責等相關問題，特別提出澄清
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://english.udd.gov.taipei/News_Content.aspx?n=DD9CEC17A97FBC64&s=A7B3D2A0C690E5F6&sms=72544237BBE4C5F6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 38% city contribution, 62% employee ownership at privatization and the governance response; it does not establish a current parent.
  - id: dot-metropolitan-procurement
    title: Explanation of Metropolitan Bus vehicle procurement
    titleOriginal: 大都會新車採購過程說明
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://english.udd.gov.taipei/News_Content.aspx?n=DD9CEC17A97FBC64&s=CEB655C5D7092259&sms=72544237BBE4C5F6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the early post-privatization vehicle procurement and city-share oversight context, not a current fleet roster.
  - id: thb-metropolitan-directory
    title: Intercity bus company directory
    titleOriginal: 查詢公路客運公司
    publisher: Highway Bureau, MOTC (交通部公路局)
    url: https://www.thb.gov.tw/cp.aspx?Create=1&n=292
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the active operator directory address and telephone for Metropolitan Bus.
  - id: taipei-depot-budget
    title: Taipei Public Transportation Office 2026 budget and municipal-property record
    titleOriginal: 臺北市公共運輸處歲入項目說明提要與預算明細表
    publisher: Taipei City Department of Finance (臺北市政府財政局)
    url: https://www-ws.gov.taipei/Download.ashx?icon=.pdf&n=5YWs6YGL6JmVMTE15bm05bqm5rOV5a6a6aCQ566X5pu4KFBERikucGRm&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMTAxMjMvOTU0Mjk1Ny84ZGIxYjAzNS1jMzAzLTRlMDctYTM2Ni1mMTRhYzI0YjRmY2MucGRm
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports named Metropolitan Bus sites and published municipal land areas or lease calculations; it does not provide depot opening dates or vehicle capacity.
  - id: dot-history
    title: Organisational history
    titleOriginal: 臺北市政府交通局-史沿革
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://www.dot.gov.taipei/cp.aspx?n=9CB8E3F779E6F103
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports, from a different city body and different wording than the PTO history above, that the former Bus Administration was abolished on 1 January 2004 to implement the privatisation policy, and that it already existed by May 1973.
  - id: ltn-2010-ownership
    title: Capital Bus takes over Metropolitan Bus, becoming the dominant group by scale
    titleOriginal: 首都入主大都會客運 集團規模稱霸
    publisher: Liberty Times (自由時報)
    url: https://news.ltn.com.tw/news/local/paper/454049
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports Capital Bus chairman 李博文 taking board control in December 2010 through combined shareholdings, and independently corroborates the city's 38% stake seven years after privatisation.
  - id: gvm-2004-privatization
    title: Metropolitan Bus drives out with new momentum for a "quiet revolution"
    titleOriginal: 大都會客運 駛出『寧靜革命』新動能
    publisher: Global Views Monthly (遠見雜誌), issue 219
    url: https://www.gvm.com.tw/article/9690
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports pre-privatisation loss figures, the early-retirement cost, and post-privatisation revenue/profit change; a single-outlet magazine account, not cross-checked against a primary financial audit.
  - id: ttsb-metropolitan-incident
    title: Metropolitan electric-bus fire incident record
    titleOriginal: 1140616大都會客運電動公車於臺北市松山區敦化北路往北起火事故
    publisher: Taiwan Transportation Safety Board (國家運輸安全調查委員會)
    url: https://www.ttsb.gov.tw/1243/22385/46186/post
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 16 June 2025 Route 262 fire, location, vehicle destruction, evacuation and no-injury record.
  - id: ttsb-metropolitan-vehicle
    title: Preliminary report and vehicle facts for the Metropolitan electric-bus occurrence
    titleOriginal: 重大公路事故調查初步報告；1140616大都會客運電動公車於臺北市松山區敦化北路往北起火事故事實資料報告
    publisher: Taiwan Transportation Safety Board (國家運輸安全調查委員會)
    url: https://www.ttsb.gov.tw/media/8715/highway-occurrence-preliminary-report-metropolitan-electric-bus.pdf
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports manufacturer/model RAC-700-ELCB-2800, electric propulsion, 25 seated and 30 standing passengers, and the operator record for the vehicle.
  - id: pto-metropolitan-battery
    title: Taipei electric-bus battery-system inspections
    titleOriginal: 臺北市電動公車已完成電池系統檢測
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=24DBB67D31F7DFD6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 20-bus same-batch inspection and the investigation-status statement after the Route 262 fire.
  - id: ntpc-metropolitan-eval-2025
    title: New Taipei bus evaluation — five operators rated excellent
    titleOriginal: 新北市公車評鑑出爐 5家業者榮獲優等
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=202502110020&id=28
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Metropolitan Bus’s 優等 result in the 113 first-period New Taipei evaluation.
  - id: ntpc-metropolitan-eval-2026
    title: New Taipei Department of Transportation evaluation notice
    titleOriginal: 新聞稿-新北市政府交通局
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068f3e583e627082e56b46875&id=54fa46e9e522dde4&mserno=39e5192ff77897e0ae099c1886ca9b09
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Metropolitan Bus’s 優等 result in the 114 second-period evaluation and the five evaluation categories and 26 indicators.
---

## TDX record

The committed TDX pull identifies this page as the operator record for MetropolitanBus (大都會客運), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-metropolitanbus-oercnr, operator code MetropolitanBus, operator number 0303, phone 0800-053-434 and URL http://www.mtcbus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## New Taipei record in context

This page is the NewTaipei member of the committed MetropolitanBus TDX records and currently has 17 associated route records; the route list below is generated from those relationships rather than typed into the page [^tdx-bus-operator-pull]. That municipality scope is a property of the data record, not evidence that the legal company has a separate New Taipei subsidiary [^tdx-bus-operator-pull].

## Company history and ownership evidence

The underlying legal company is 大都會汽車客運股份有限公司. MOEA records registration on 16 December 2003 at 港墘路3號1樓 with 李博文 as representative [^moea-metropolitan]. Taipei PTO dates the former Taipei Municipal Bus Administration’s privatization and renaming as Metropolitan Bus to 1 January 2004 [^taipei-pto-history]. Taipei DOT’s transition account says the city’s vehicle contribution represented 38% of shares and former employees held the other 62% [^dot-metropolitan-privatization]. These records establish the handover mechanism, but the checked primary material does not publish a current statutory parent, merger chronology or route-contract history [^moea-metropolitan][^dot-metropolitan-privatization].

A separate Department of Transportation institutional-history page independently corroborates the 1 January 2004 date, in different terms and from a different city body: it records the Bus Administration abolished on that date "為提升公車營運效率及執行民營化政策" (to improve bus operating efficiency and implement the privatisation policy), and establishes the Bus Administration already existed by May 1973 [^dot-history]. Ownership changed hands within the private company afterward: in December 2010, Capital Bus (首都客運) chairman 李博文 took board control of Metropolitan Bus through combined shareholdings, with contemporary reporting stating the city still held 38% at that point [^ltn-2010-ownership]. A September 2004 magazine feature gives financial background not found in any government primary checked — a pre-privatisation daily operating loss of roughly NT$5 million, cumulative losses exceeding NT$13.8 billion, and a roughly 35% post-privatisation rise in monthly revenue — resting on a single magazine account, not a primary financial audit [^gvm-2004-privatization].

## New Taipei service, facilities and fleet evidence

The 17-route New Taipei record sits alongside a separate Taipei record with 70 associations; both use operator code MetropolitanBus and operator number 0303 in the committed TDX pull [^tdx-bus-operator-pull]. The route associations are kept as generated structured links so that changes in the data snapshot do not become hand-listed claims [^tdx-bus-operator-pull].

The company’s physical operating evidence is split across municipal records. The Taipei municipal property budget names Metropolitan sites at Rongzong, Jiuzhuang, Lingyun, Wanfang, Zhonghe, New Shilin, the Neihu repair shop, Jianbei and Songde, with land areas or lease calculations for several [^taipei-depot-budget]. The same record does not give opening dates or vehicle capacities, and no New Taipei depot allocation table was found in the checked sources, so those details remain TBC [^taipei-depot-budget]. The Highway Bureau directory independently lists the active operator at 港墘路3號1樓 and gives telephone 02-87920358 [^thb-metropolitan-directory].

The fleet record is similarly specific rather than complete. The Safety Board identifies the Metropolitan Route 262 vehicle as a RAC-700-ELBC-2800 made by RAC Electric Vehicles Inc.; its vehicle facts record electric propulsion and 25 seated plus 30 standing passengers [^ttsb-metropolitan-vehicle]. Taipei DOT’s older procurement notice records a 318-bus purchase in three body types during the early privatization period, but it is not a current fleet roster and does not prove that those bodies remain in New Taipei service [^dot-metropolitan-procurement]. No hybrid model was established in the full pages checked [^ttsb-metropolitan-vehicle].

New Taipei’s 2025 evaluation notice lists Metropolitan Bus among five 優等 operators [^ntpc-metropolitan-eval-2025]. A later 2026 notice again lists it among the 優等 operators and says the assessment covered facilities, vehicles and safety, passenger service and driver management, accessibility, and company management [^ntpc-metropolitan-eval-2026]. These are authority-issued evaluation results, not a claim that every route or site was identical in performance [^ntpc-metropolitan-eval-2026].

The company’s documented safety record includes the 16 June 2025 fire on Route 262 in Taipei [^ttsb-metropolitan-incident]. The Safety Board records the bus burning at the Chang Gung Memorial Hospital stop, complete vehicle destruction, and timely evacuation of the driver and about seven passengers without injury [^ttsb-metropolitan-incident]. Taipei PTO says the same-batch 20 buses were stopped for inspection and that the Safety Board investigation had been opened; the checked material does not publish a final cause [^pto-metropolitan-battery].

The list below is generated from the NewTaipei TDX operator association, not hand-listed [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `K1` / 安坑1線 [^tdx-bus-operator-pull]
- `K2` / 安坑2線 [^tdx-bus-operator-pull]
- `K3` / 安坑3線 [^tdx-bus-operator-pull]
- `K5` / 安坑5線 [^tdx-bus-operator-pull]
- `823` [^tdx-bus-operator-pull]
- `937` [^tdx-bus-operator-pull]
- `937Sub` / 937副 [^tdx-bus-operator-pull]
- `937A` [^tdx-bus-operator-pull]
- `982` [^tdx-bus-operator-pull]
- `982Express` / 982直達 [^tdx-bus-operator-pull]
- `982Shuttle` / 982區 [^tdx-bus-operator-pull]
- `982Exp.S` / 982直達新埔線 [^tdx-bus-operator-pull]
- `O17` / 橘17 [^tdx-bus-operator-pull]
- `O18fu` / 橘18福隆路 [^tdx-bus-operator-pull]
- `O18` / 橘18 [^tdx-bus-operator-pull]
- `Linkou-MRT Yuanshan Sta.` / 林口(文化三路)-捷運圓山站 [^tdx-bus-operator-pull]
- `MRT Luzhou Sta.-Neihu Tech. Park` / 捷運蘆洲站-內湖科技園區 [^tdx-bus-operator-pull]

## Research gaps

The committed TDX operator record contains no founding history, ownership structure, fleet-model roster, depot or garage field, or contract-history field; each remains TBC here [^tdx-bus-operator-pull].

The record’s URL is reproduced as TDX metadata, but a company-history, ownership, fleet, depot or dated contract claim requires a full page from the operator or responsible government authority [^tdx-bus-operator-pull].
