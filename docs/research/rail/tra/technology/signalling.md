# Taiwan Railways train control and signalling — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. No prior `docs/research/rail/tra/technology/` file on this subject existed to check against.

This is a one-subject report on Taiwan Railways' train-protection and
dispatch-control systems. Three genuinely distinct layers are kept separate
throughout, because Mandarin sources keep them separate: (1) **ATP**
(Automatic Train Protection, the train-borne overspeed/collision-protection
system), (2) **CTC** (行車控制, the dispatching/route-setting system in the
operations control centre, currently mid-upgrade as "CTC 3.0"), and (3) a
homegrown R&D programme, "行控4.0"/"列控4.0", that has not entered service and
is a separate thing from both.

## What is established

### Predecessor system and current ATP

- **TRA phased in an ATS/ATW (Automatic Train Stop/Warning) system from 1978, developed by Sweden's Ericsson, decommissioned once the current ATP system was completed in 2007.** Source: zh.wikipedia, [列車自動停車系統](https://zh.wikipedia.org/zh-tw/列車自動停車系統), SECONDARY (lead index only — the article's own two footnoted sources, an Ericsson Signalling company history and a 1981 *L.M. Ericsson Review* article, were not independently fetched here). Confidence: Low-Medium. Original-language basis: `於1978年開始分階段及區段於所屬線路裝設ATW/ATS系統`... `於2007年ATP系統完成安裝後停用拆除`.
- **The operator's own achievement page confirms full-line ATP on-board system testing and activation completed in August ROC96 (2007), stating that from that point TRA's signalling and train-protection system reached ERTMS/ETCS Level 1 standard.** Source: National Taiwan Railways Corporation / former Taiwan Railway Administration, *Railway electrification chronology and achievements*, titleOriginal `臺鐵電務發展沿革及歷年建設`, `https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1`, PRIMARY, High confidence — full page fetched. Original-language basis: `民國96年8月完成全線ATP車上系統測試及啟用。至此，本公司號誌與列車安全防護系統等級邁入ERTMS/ETCS LEVEL 1標準。`
- **The same page dates dual-redundant train-occupancy detection (track circuit plus axle counter) to December ROC96 (2007), and earlier signalling milestones: first electrical signals ROC39 (1950); relay interlocking at 5 stations ROC42 (1953); CTC signalling Changhua–Tainan ROC50 (1961); first electronic interlocking, Shulin yard, March ROC86 (1997).** Same source, PRIMARY, High confidence.
- **A 2001 ATP procurement contract went to Bombardier; reliability-verification testing recorded 178 faults, leading to a dispute TRA ultimately lost in the High Court (ordered to repay approximately NT$64.8 million plus interest).** Source: Liberty Times, `ATP瑕疵 台鐵罰龐巴迪1億敗訴`, `https://news.ltn.com.tw/news/life/paper/1581652`, SECONDARY (court reporting; the judgment itself was not fetched), Confidence Medium. Original-language basis: testing recorded `故障有一七八件`; the court ordered repayment of `六四八○萬多元` plus 5% annual interest from February 2020.
- **An investigative account states TRA spent nearly 30 years and roughly NT$3–4 billion progressively upgrading train protection, with the 2007 ATP system itself costing NT$3.9 billion.** Source: *The Reporter* (報導者), `【運安篇】安全黑洞迴圈：台鐵軌道愈修愈不平、30年只建了半套ATP`, `https://www.twreporter.org/a/taiwan-railway-examination-report-transportation-safety`, SECONDARY (investigative journalism, sourced to named railway expert 廖慶隆), Confidence Medium.

### The 2018 Puyuma derailment and its ATP findings

- **The Taiwan Transportation Safety Board's own investigation found ATP had been illegally isolated and the train was over the applicable speed, attributing part of the root cause to TRA's failure to enforce its own existing rules against unauthorised ATP isolation; the report issued 27 recommendations.** Source: Taiwan Transportation Safety Board (國家運輸安全調查委員會), announcement of the completed Puyuma investigation report, `https://www.ttsb.gov.tw/1133/1178/1179/27718/post`, PRIMARY, High confidence — full announcement fetched. Original-language basis: `ATP有被違規隔離及列車有超速行為`; `臺鐵局未落實已訂定規範之管理`. The fetched announcement groups the 27 recommendations by domain (organisation, maintenance, operations, train-system design) but does not itemise which specifically concern ATP/signalling design — see Stated gaps.
- **In response, TRA developed an "ATP isolation speed-limit system" (ATP隔離限速系統) forcing a speed cap even when ATP is switched off.** Corroborated by two independently fetched news articles, with a genuine conflict on both budget and speed cap (see Conflicts).
- **Post-Puyuma operating rules require drivers to check ATP at both cab ends before departure and require a faulty-ATP train be swapped rather than dispatched.** Source: Epoch Times (大紀元), `https://www.epochtimes.com/b5/23/5/2/n13986638.htm`, SECONDARY, Confidence Medium — full article fetched, quoting Transport Minister 王國材 commending a driver's 2023 refusal to depart with a faulty ATP.

### CTC 3.0 — the current, funded dispatch-control modernisation

- **TRA formally launched its "third-generation Central Traffic Control System" (第三代中央行車監控系統, CTC 3.0) on 29 April 2026, jointly with Japan Signal Company and Taiwanese partners 亞力電機 and 華電聯網, targeting completion in ROC118 (2029).** Source: Ministry of Transportation and Communications, press release on the CTC 3.0 launch, `https://www.motc.gov.tw/ch/app/news_list/view?module=news&id=14&serno=6383c5e6-c5ea-40aa-8e74-58fa6bf9390f`, PRIMARY, High confidence for what it states — full page fetched; it does not state a budget figure. Original-language basis on the system being replaced: `現行系統已服役超過20年，設備老舊且功能逐漸不敷現代化調度需求`.
- **Scope, per the same primary release: intelligent automatic route-setting based on schedule, train priority, route occupation and power-supply status; integration of slope, rockfall, level-crossing and platform-monitoring alerts via TRA's cloud platform; a geographically separate backup control centre at the Fugang base in Taoyuan.** PRIMARY, High confidence. Original-language basis: `導入智慧化自動進路設定，可依據列車時刻表、列車優先等級、路線占用情況及電力供應情形，自動規劃最佳進路`.
- **The NT$3.95 billion budget figure comes only from secondary press, not the primary release**, corroborated across two independently fetched articles: ettoday, `https://www.ettoday.net/news/20260429/3157343.htm`, and a CNA-wire republication via CTS, `https://news.cts.com.tw/cna/life/202604/202604293025417.html`, both SECONDARY, Confidence Medium-High.
- **The predecessor CTC system's establishment date is a conflict between two CNA-lineage reports two and a half years apart**: a September 2023 CNA article gives 2001 and states the original manufacturer, Japan Signal, no longer produces spare parts; the April 2026 CTS/CNA-sourced article gives ROC93 (2004). Sources: CNA, `台鐵第三代行車控制系統強化資安防駭 另建備援`, `https://www.cna.com.tw/news/ahel/202309100062.aspx`; CTS (as above). Both SECONDARY, Confidence Medium-High, both fully fetched.

### 行控4.0 / 列控4.0 — a separate, unproven R&D programme

- **After the Puyuma accident, TRA launched a domestically-engineered active train-control R&D programme (行車控制4.0系統 / 列控4.0), targeting functional elements of ETCS Level 2 and CBTC (real-time two-way train-to-ground communication, continuous monitoring, precise positioning, onboard cab signalling) rather than buying an existing foreign system.** Corroborated across six independently fetched news sources (CNA, ettoday, Storm Media, Liberty Times, 商業周刊/今周刊 ×2); the technical ETCS-Level-2/CBTC-equivalence framing traces only to a PTT enthusiast analysis post (SECONDARY, treated as a lead, Low-Medium confidence) rather than a primary TRA specification document. Two of the PDFs most likely to confirm or refute this technical framing directly (`https://www.railway.gov.tw/tra-tip-web/tip/file/a9fe611c-99bb-442b-bb4d-3913f38fdb6c` and `https://www.railway.gov.tw/tra-tip-web/tip/file/e6ea89b2-b949-4141-8a61-c621a1c83383`) returned as scanned images with no extractable text — see Checked and failed.
- **The programme's National Science and Technology Council subsidy budget is a three-way conflict across fully fetched sources**: CNA and Storm Media give NT$60.67 million; ettoday (an earlier, 2021 article) gives NT$69.46 million for a December 2020 approval. A separate figure, the NT$56.4 million contract awarded to winning bidder 理立系統公司 (Leeli Systems) via public tender among 3 bidding teams, is reported by Liberty Times and is a different quantity (contract value, not total subsidy) from either budget figure.
- **The programme completed a "proof of concept" acceptance in December 2022 but had not progressed past that stage as of an April 2024 legislative hearing, where TTSB chairman 林信得 called the system "根本不能用" (fundamentally unusable) and legislator 黃國昌 alleged the winning contractor's claimed reference project in Jacksonville, Florida was denied by the Jacksonville Transportation Authority.** Sources: CNA, `https://www.cna.com.tw/news/ahel/202404220113.aspx`; Storm Media, `https://www.storm.mg/article/5096811`. Both SECONDARY, Confidence Medium-High, fully fetched.
- **A test line for the programme is reported as the Neiwan/Liujia branch (11 km, 6 stations).** Source: PTT enthusiast analysis post, SECONDARY, treated as a lead only, Low-Medium confidence — not independently corroborated against a primary TRA test report.
- **If successful, a political appointee's quote puts nationwide full deployment at an estimated NT$20 billion.** Source: 商業周刊/今周刊 (businesstoday.com.tw), SECONDARY, Confidence Medium, quoting 政務委員張景森: `如果系統成功，初估只要兩百億元，就能把台鐵列車控制系統建置完成`.
- **Whether the programme was formally discontinued by a "safety committee" decision in December 2024 could not be confirmed.** This appeared only in a search-tool summary apparently referencing a legislator's Facebook post; no page (primary or secondary) stating this was located or fetched — not published on the content page.

## Conflicts

- **ATP-isolation speed-limit system budget:** NT$245 million (Liberty Times, fully fetched, `https://news.ltn.com.tw/news/life/breakingnews/3321111`) versus NT$270 million (*The Reporter*, fully fetched). Not resolved; both published.
- **ATP-isolation speed cap:** 65 km/h, described explicitly as an initial October 2018 ministerial directive "not excluding" a lower final figure (Liberty Times, `https://news.ltn.com.tw/news/life/breakingnews/2594116`), versus 60 km/h as actually rolled out per the other Liberty Times article above. These may be an initial ask versus a final implemented figure, but no source states that explicitly, so both are published rather than merged.
- **行控4.0/列控4.0 subsidy budget:** NT$60.67 million (CNA and Storm Media) versus NT$69.46 million (ettoday, an earlier 2021 article) versus a separately-scoped NT$56.4 million contract value to the winning bidder (Liberty Times). Three genuinely different figures from three independently fetched sources; not averaged or picked.
- **行控4.0/列控4.0 trigger accident:** every fully fetched source (CNA, Storm Media, both quoting legislator 黃國昌 directly) attributes the programme's origin to the 2018 Puyuma accident. A search-tool auto-summary, not independently fetched and therefore not trusted as a source, suggested the 2021 Taroko accident instead — not published as a competing value, flagged here only as an unconfirmed lead.
- **CTC predecessor system's establishment date:** 2001 (CNA, September 2023) versus ROC93/2004 (CTS/CNA-sourced, April 2026) — both trace to CNA reporting at different times and are not reconciled by either source.

## Checked and failed

- **Railway Bureau's own 號誌系統 (signalling systems) technical page**, `https://www.rb.gov.tw/showpage.php?lmenuid=4&smenuid=86&tmenuid=164` — checked 2026-08-27, attempted twice, returned no extractable content both times.
- **TRA PDF, "ATP - 列車自動防護"**, `https://www.railway.gov.tw/tra-tip-web/tip/file/a2ba07b3-8e49-411c-b073-f48d00375b7b` — checked 2026-08-27, fetched (200 OK, 1.9 MB) but content is scanned images with no extractable text.
- **TRA PDF, "臺鐵電務智慧化提升計畫"**, `https://www.railway.gov.tw/tra-tip-web/tip/file/a9fe611c-99bb-442b-bb4d-3913f38fdb6c` — checked 2026-08-27, same scanned-image problem. Its title suggests it directly covers the CTC 3.0 procurement and would likely resolve the budget-figure and predecessor-system-date conflicts above.
- **TRA PDF, 臺鐵資料季刊 (quarterly technical journal)**, `https://www.railway.gov.tw/tra-tip-web/tip/file/e6ea89b2-b949-4141-8a61-c621a1c83383` — checked 2026-08-27, same scanned-image problem; could not verify the ETCS Level 1/balise-spacing technical claims seen only in the PTT enthusiast post.
- **China Times article on the ATP-isolation speed-limit system**, `https://www.chinatimes.com/realtimenews/20190709002572-260405` — checked 2026-08-27, returned HTTP 403 Forbidden; not used (the same budget claim was independently confirmed via *The Reporter* instead).
- **Two UDN articles on 行控4.0 criticism** (`https://udn.com/news/story/7266/7916442`, `https://udn.com/news/story/7266/7915120`) — checked 2026-08-27, both returned HTTP 404; equivalent content obtained from CNA and Storm Media instead.
- **World Journal article on 行控4.0 criticism**, `https://www.worldjournal.com/wj/story/121221/7917261` — checked 2026-08-27, returned HTTP 404; not used.
- **A claimed December 2024 "safety committee" decision to discontinue 行控4.0/列控4.0** — checked 2026-08-27 via search; only a search-tool auto-summary referencing a Facebook post was found, no fetchable primary or secondary page. Not published.

## Stated gaps

Whether current ATP covers 100% of TRA mainline and branch trackage, as
opposed to the vehicle-side on-board rollout the operator's achievement page
describes, is unresolved — the Railway Bureau's own signalling page and two
relevant TRA PDFs could not be read (see Checked and failed). Which of the
TTSB's 27 Puyuma recommendations specifically concern ATP/signalling design,
as opposed to management or procedure, is unresolved without the full TTSB
report. CTC 3.0's actual contract/budget figure from a primary source is
unresolved; a Railway Bureau procurement-briefing PDF for this exact project
was found via search (`https://www.railway.gov.tw/tra-tip-web/tip/file/dd260941-cc3c-44f8-abf9-381b189676f8`)
but not fetched in this round — the strongest lead for a follow-up check.
行控4.0/列控4.0's current (2026) status — active, paused or terminated — is
unresolved. Whether the ATP unit examined in the 2001 Bombardier procurement
dispute is the same configuration implicated in the 2018 Puyuma accident is
not stated by any source found.
