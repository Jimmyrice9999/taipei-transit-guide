> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. This corpus has been wrong before — a miscounted exit total, a wrong
> URL, a misread tunnel description, an inverted arithmetic hypothesis, a
> feeder-colour table missing a row. Verify against primary sources.

# 大都會客運 / Metropolitan Bus — operator research

**Researched 21 August 2026.** The content pages are two municipality-scoped
TDX operator records for one legal company, not two companies. Their route
lists are generated from the committed route pull.

## What is established

### 1. Legal identity and the 2003/2004 transition

- **Claim.** The Ministry of Economic Affairs company record identifies 大都會汽車客運股份有限公司, English charter name Metropolitan Transport Corporation, unified business number 80653426, representative 李博文, registered address 臺北市內湖區港墘路3號1樓, paid-in capital NT$740 million, and registration date 16 December 2003.
- **Source.** Metropolitan Transport Corporation company record / `titleOriginal`: 大都會汽車客運股份有限公司 - 經濟部商工登記公示資料查詢
- **Publisher.** Ministry of Economic Affairs, Department of Commerce / 經濟部商業發展署
- **URL.** https://findbiz.nat.gov.tw/fts/company/80653426?fhl=en
- **Kind.** PRIMARY — statutory company-registration data.
- **Confidence.** High — full record fetched and read on 21 August 2026.
- **Original-language sentence.** 「公司名稱｜大都會汽車客運股份有限公司」; 「統一編號｜80653426」; 「公司所在地｜臺北市內湖區港墘路3號1樓」; 「公司設立日期｜2003/12/16」

- **Claim.** Taipei PTO’s transport history says the former Taipei Municipal Bus Administration became a private company organization and was renamed Metropolitan Bus on 1 January 2004. Taipei DOT’s contemporary explanation says the city contributed former bus-division vehicles for 38% of shares and former employees collectively held the remaining 62%.
- **Source.** Taipei city-bus history / `titleOriginal`: 公車簡介
- **Publisher.** Taipei City Public Transportation Office / 臺北市公共運輸處
- **URL.** https://pto.gov.taipei/News_Content.aspx?n=AAEEE8A01971ECFB&s=FBAD7AB84D95E137&sms=D0111F238E458DC8
- **Kind.** PRIMARY — responsible transport authority history.
- **Confidence.** High — full HTML page fetched and read on 21 August 2026.
- **Original-language sentence.** 「臺北市公共汽車管理處自2004年1月1日起轉型民營化公司組織並改名為大都會汽車客運公司」

- **Claim.** The company-registration date and the service transition date are different dated events: 16 December 2003 is the registered-company date in MOEA’s record, while 1 January 2004 is the municipal authority’s stated privatization/operation date. They are published together rather than collapsed into one founding date.
- **Source.** MOEA company record and Taipei PTO history above.
- **Kind.** PRIMARY.
- **Confidence.** High — the two dates describe different records and were read from full pages.

### 2. Operating network, depot evidence, and fleet character

- **Claim.** The committed TDX snapshot has two MetropolitanBus records: 70 Taipei route associations and 17 New Taipei route associations. TDX supplies the record identity and associations but no fleet, depot-capacity, opening-date, ownership or contract-history fields.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **Publisher.** Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind.** PRIMARY — structured government transport data.
- **Confidence.** High — the committed JSON pull was inspected; the route lists are generated from its `operatorIds` relationships.
- **Original-language sentence.** The committed `data/tdx/bus/operators.json` records carry `operatorCode: MetropolitanBus`, `operatorNo: 0303`, and the Taipei/NewTaipei municipality records; the route association is carried by the committed `routes.json` pull.

- **Claim.** The Highway Bureau directory lists 大都會客運 as an active intercity-bus company at 臺北市內湖區港墘路3號1樓 with telephone 02-87920358. The address differs from the 民權東路六段11巷6號 address shown in the employment portal and older Taipei evaluation material; this report retains both as an address conflict rather than choosing one.
- **Source.** Highway Bureau intercity-bus company directory / `titleOriginal`: 查詢公路客運公司
- **Publisher.** Highway Bureau, Ministry of Transportation and Communications / 交通部公路局
- **URL.** https://www.thb.gov.tw/cp.aspx?Create=1&n=292
- **Kind.** PRIMARY — regulator directory.
- **Confidence.** High — full directory page fetched and read on 21 August 2026.
- **Original-language sentence.** 「大都會客運｜臺北市內湖區港墘路３號１樓｜02-87920358」

- **Claim.** Taipei’s 2026 public-asset budget records sites used by Metropolitan Bus at 榮總站, 舊庄站, 凌雲站, 萬芳站, 中和站, 新士林站, 內湖修理廠, 建北站 and 松德站; the same records publish land areas or lease calculations for several sites. They do not publish a vehicle-capacity field or opening date for these sites.
- **Source.** Taipei Public Transportation Office 2026 budget / `titleOriginal`: 臺北市公共運輸處歲入項目說明提要與預算明細表
- **Publisher.** Taipei City Department of Finance / 臺北市政府財政局
- **URL.** https://www-ws.gov.taipei/Download.ashx?icon=.pdf&n=5YWs6YGL6JmVMTE15bm05bqm5rOV5a6a6aCQ566X5pu4KFBERikucGRm&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMTAxMjMvOTU0Mjk1Ny84ZGIxYjAzNS1jMzAzLTRlMDctYTM2Ni1mMTRhYzI0YjRmY2MucGRm
- **Kind.** PRIMARY — municipal property and budget record.
- **Confidence.** High for the named sites and areas in the record; Low for completeness because it is not an operator depot register.
- **Original-language sentence.** 「南港區中南段四小段9筆（舊庄站）、南港區中南段五小段3筆土地（凌雲站）租予大都會汽車客運股份有限公司」; 「內湖區文德段五小段2筆土地（內湖修理廠）：租予大都會汽車客運股份有限公司」

- **Claim.** The Transportation Safety Board’s preliminary report identifies one Metropolitan electric bus involved in the 16 June 2025 Route 262 fire as a RAC-700-ELBC-2800 made by RAC Electric Vehicles Inc. The separate vehicle data report records 25 seated and 30 standing passengers and electric propulsion; it does not establish the company’s complete model roster or a hybrid fleet.
- **Source.** Preliminary report and vehicle facts for the Metropolitan electric-bus occurrence / `titleOriginal`: 重大公路事故調查初步報告; 1140616大都會客運電動公車於臺北市松山區敦化北路往北起火事故事實資料報告
- **Publisher.** Taiwan Transportation Safety Board / 國家運輸安全調查委員會
- **URL.** https://www.ttsb.gov.tw/media/8715/highway-occurrence-preliminary-report-metropolitan-electric-bus.pdf
- **Kind.** PRIMARY — safety investigator vehicle records.
- **Confidence.** High for the identified vehicle; not evidence of a complete fleet.
- **Original-language sentence.** 「製造廠/型號｜華德動能科技股份有限公司｜RAC-700-ELCB-2800」; 「載運人數｜座25人，立30人」; 「能源種類｜電能」

### 3. Quality oversight and the documented incident

- **Claim.** New Taipei’s 2025 evaluation announcement lists Metropolitan Bus among the five operators rated 優等 in the 113 first-period evaluation. The 2026 second-period announcement again lists it among the 優等 operators and describes evaluation across facilities, vehicles and safety, passenger service and driver management, accessibility, and company management.
- **Source.** New Taipei bus service-quality announcements / `titleOriginal`: 新北市公車評鑑出爐 5家業者榮獲優等; 新聞稿-新北市政府交通局
- **Publisher.** New Taipei City Department of Transportation / 新北市政府交通局
- **URL.** https://www.ntpc.gov.tw/ch/home.jsp?dataserno=202502110020&id=28 ; https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=dbe681f08df3e583e627082e56b46875&id=54fa46e9e522dde4&mserno=39e5192ff77897e0ae099c1886ca9b09
- **Kind.** PRIMARY — municipal evaluation notices.
- **Confidence.** High — both full HTML notices were fetched and read.
- **Original-language sentence.** 「113年第1期由臺北客運、大都會客運、首都客運、三重客運及桃園客運等5家客運公司」; 「114年第2期評鑑優等的大都會客運、三重客運、首都客運、臺北客運及大南汽車」

- **Claim.** On 16 June 2025, a Metropolitan electric bus operating Route 262 caught fire at the Chang Gung Memorial Hospital stop on northbound Dunhua North Road; the vehicle was destroyed and the driver and about seven passengers escaped without injury. Taipei PTO then required the same-batch 20 Route 262 buses to stop for inspection, and the Safety Board opened an investigation; the cause was not established in the material read.
- **Source.** Taiwan Transportation Safety Board incident page and Taipei PTO battery-inspection notice / `titleOriginal`: 1140616大都會客運電動公車於臺北市松山區敦化北路往北起火事故; 臺北市電動公車已完成電池系統檢測
- **Publisher.** Taiwan Transportation Safety Board; Taipei City Public Transportation Office / 國家運輸安全調查委員會; 臺北市公共運輸處
- **URL.** https://www.ttsb.gov.tw/1243/22385/46186/post ; https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=24DBB67D31F7DFD6
- **Kind.** PRIMARY — investigator and regulator incident records.
- **Confidence.** High for the event and response; no causal conclusion is asserted.
- **Original-language sentence.** 「1輛大都會汽車客運股份有限公司所屬電動公車執行262路線載客任務」; 「大都會客運該路線同批20輛電動公車已於114年6月17日停派進行逐車檢查」

## Conflicts

1. **Date of establishment versus service transition.** MOEA records company registration on 16 December 2003; Taipei PTO records privatization and renaming on 1 January 2004. These are different events and both remain on the pages.
2. **Address.** MOEA and the Highway Bureau directory publish 港墘路3號1樓; Taipei evaluation material and the employment-directory record publish 民權東路六段11巷6號. The page reports both address variants and does not infer that one is a depot, headquarters or obsolete record.
3. **Route count.** TDX has 70 Taipei and 17 New Taipei route associations for the two records. The values are municipality-scoped data records, not a claim that the legal company operates only 87 routes or that they are unique legal contracts.

## Checked and failed

- **Complete fleet/model roster** — Checked the TDX operator records, Taipei and New Taipei evaluation material, the Safety Board reports, Taipei electric-bus notices and the checked government procurement material on 21 August 2026. These establish one RAC-700-ELCB-2800 vehicle and a 20-bus same-batch inspection, but not all manufacturers, chassis/body combinations, capacities, propulsion types or hybrid vehicles. No complete roster is asserted.
- **Depot capacity and opening dates** — Checked the full Taipei municipal budget/property record and public eBus route pages on 21 August 2026. Named sites and some land areas are published, but no depot opening dates or vehicle capacities were found. They remain TBC.
- **Legal parent, merger history and ownership after privatization** — Checked the full MOEA record, Taipei PTO history and Taipei DOT privatization notices on 21 August 2026. They establish the 38/62 transition arrangement but do not establish a current statutory parent or later merger chronology.
- **Final fire cause** — Checked the full TTSB incident record, preliminary report and Taipei PTO response on 21 August 2026. The source says the investigation was opened and the cause would be published after completion; no final cause is asserted here.
- **TaiwanJobs employer page** — The search result exposed a 2003-12-16 date and 民權東路 address, but a direct full-page fetch timed out on 21 August 2026. It was not used as evidence; the same registration date is supported by the readable MOEA record.

## Stated gaps

The pages still cannot give a complete current fleet/model inventory, hybrid-bus evidence, depot opening dates or capacities, a statutory parent/merger chronology, or route contract awards and renewals. A readable company registry history, procurement/subsidy award table, operator fleet register, and completed TTSB report would settle those gaps.
