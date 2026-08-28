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

- **Claim.** Taipei PTO’s transport history says the former Taipei Municipal Bus Administration became a private company organization and was renamed Metropolitan Bus on 1 January 2004.
- **Source.** Taipei city-bus history / `titleOriginal`: 公車簡介
- **Publisher.** Taipei City Public Transportation Office / 臺北市公共運輸處
- **URL.** https://pto.gov.taipei/News_Content.aspx?n=AAEEE8A01971ECFB&s=FBAD7AB84D95E137&sms=D0111F238E458DC8
- **Kind.** PRIMARY — responsible transport authority history.
- **Confidence.** High — full HTML page fetched and read on 21 August 2026, and independently re-fetched 28 August 2026 (see Checked and failed): confirms this specific sentence, no more.
- **Original-language sentence.** 「臺北市公共汽車管理處自2004年1月1日起轉型民營化公司組織並改名為大都會汽車客運公司」

- **Claim.** Taipei DOT’s contemporary clarification says the city contributed former bus-division vehicles for 38% of shares and former employees collectively held the remaining 62%.
- **Source.** Taipei DOT clarification on Metropolitan Bus governance / `titleOriginal`: 臺北市政府交通局針對部分媒體報導大都會客運公司車輛採購及董事有無善盡職責等相關問題，特別提出澄清
- **Publisher.** Taipei City Department of Transportation / 臺北市政府交通局
- **URL.** https://english.udd.gov.taipei/News_Content.aspx?n=DD9CEC17A97FBC64&s=A7B3D2A0C690E5F6&sms=72544237BBE4C5F6
- **Kind.** PRIMARY — the city transport bureau's own governance clarification.
- **Confidence.** Medium — this is the source the content pages (`metropolitanbus-h3iwov.md`, `metropolitanbus-oercnr.md`) already cite for this figure; it has not yet been independently re-fetched and re-read against this exact sentence in this research pass. **Correction, 28 August 2026:** this claim was previously miscited in this file to the PTO `公車簡介` page above, which does not contain a share-split sentence at all — see Checked and failed.

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

### 4. Institutional lineage and ownership history, 28 August 2026

- **Claim.** Taipei's Department of Transportation independently corroborates the 1 January 2004 privatisation date from its own institutional-history page, in different terms from the PTO's account above: "另為提升公車營運效率及執行民營化政策，93年1月1日裁撤臺北市公共汽車管理處" (the Bureau abolished the Bus Administration on that date to improve efficiency and implement the privatisation policy). The same page establishes the Bus Administration already existed by May 1973 (民國62年5月), transferred into the newly created Department of Transportation from the city's Construction Bureau at that time; it gives no founding date of its own for the Bus Administration.
- **Source.** Taipei City Department of Transportation, organisational history / `titleOriginal`: 臺北市政府交通局-史沿革
- **Publisher.** Taipei City Department of Transportation / 臺北市政府交通局
- **URL.** https://www.dot.gov.taipei/cp.aspx?n=9CB8E3F779E6F103
- **Kind.** PRIMARY — the transport bureau's own organisational history.
- **Confidence.** High — fetched and read in full. A second, independent primary confirmation of the 1 January 2004 date, from a different city body (DOT rather than PTO) and different wording (abolition rather than transformation/renaming).

- **Claim.** In December 2010, 首都客運 (Capital Bus) chairman 李博文 took board control of Metropolitan Bus through combined shareholdings via Capital Bus and Taipei Bus; the city still held 38% at that point, seven years after privatisation, and had held the chairmanship through government-appointed representatives up to then.
- **Source.** "首都入主大都會客運 集團規模稱霸" / Capital Bus takes over Metropolitan Bus, becoming the dominant group by scale
- **Publisher.** Liberty Times (自由時報), 22 December 2010
- **URL.** https://news.ltn.com.tw/news/local/paper/454049
- **Kind.** SECONDARY — news report.
- **Confidence.** Medium-High — fetched in full. Independently consistent with the 38% city-share figure discussed above (claim 2 in section 1), without itself stating the 62% employee figure.

- **Claim.** A September 2004 magazine feature gives financial background to the privatisation not found in any government primary checked this pass: pre-privatisation daily operating loss of roughly NT$5 million; a 2001 single-year loss of NT$1.95 billion; cumulative losses over NT$13.8 billion; a government-funded early-retirement cost of NT$4.5 billion; personnel cost equal to 1.2× total revenue; roughly 2,000 employees near retirement age at the transition; and, after privatisation, a roughly 35% rise in monthly revenue and a first-half pre-tax profit of about NT$13 million, plus roughly NT$80 million/year in depot-site rental income to the city. It separately gives an approximate, independent corroboration of the employee share figure: "2.5億元買下新公司62％的股權" (NT$250 million for 62% of the new company), close to but not identical to the NT$248,005,260 figure that circulates elsewhere in secondary material with no primary source found for it (see Stated gaps).
- **Source.** "大都會客運 駛出『寧靜革命』新動能" / Metropolitan Bus drives out with new momentum for a "quiet revolution"
- **Publisher.** Global Views Monthly (遠見雜誌), issue 219, 1 September 2004, author 張元祥
- **URL.** https://www.gvm.com.tw/article/9690
- **Kind.** SECONDARY — magazine feature, no primary financial-audit document found to cross-check its figures.
- **Confidence.** Medium — fetched in full; a contemporaneous, detailed account, but a single-outlet source for all figures given.

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
- **The PTO `公車簡介` page as the source for the 38%/62% share split** — Independently re-fetched in full twice on 28 August 2026 (per a separate research pass on the joint-operation network) and confirmed it contains only the renaming/dissolution sentence quoted above; no sentence about share percentages, capital amount or employee investment appears on that page at all. This file previously cited that page for the 38/62 claim; corrected above to cite the actual source the content pages already use, a separate Taipei DOT governance clarification, which itself has not yet been independently re-verified against this exact sentence.

## Stated gaps

The pages still cannot give a complete current fleet/model inventory, hybrid-bus evidence, depot opening dates or capacities, a statutory parent/merger chronology, or route contract awards and renewals. A readable company registry history, procurement/subsidy award table, operator fleet register, and completed TTSB report would settle those gaps.

The precise NT$248,005,260 employee-share figure and the exact 38%/62% capital breakdown (NT$600 million founding capital, NT$152 million municipal stake) that circulate identically across zh.wikipedia, several enthusiast wikis, twincn.com and a job portal have still not been traced to a primary government source as of 28 August 2026 — a DOT/PTO privatisation-era press release, a city council record, or the company's own founding filing would settle it. The Taipei DOT governance-clarification source now cited for the 38%/62% split above (see section 1) gives the percentages but its exact wording for the underlying capital amount has not yet been independently re-quoted in this file.
