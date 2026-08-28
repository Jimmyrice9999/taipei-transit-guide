# THSR technology, engineering and the BOT financial restructuring — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes,
> not sources. `docs/research/rail/thsr.md` was checked first — it already
> records the European-reference-vs-Japanese-switch signalling conflict, the
> 73%/18%/9% structure split, 25kV/60Hz power, and a first-pass BOT/financing
> summary (35→70 year concession, NT$30bn government investment, the
> Control Yuan's 37.42% public-investment criticism). This file goes deeper
> on the BOT financial crisis mechanics and adds the 2026 Yilan extension,
> which the existing file does not cover; nothing here contradicts it.

## What is established

### Signalling

- **THSR's ATC continuously calculates permitted speed from the preceding train's position, control-centre authority and route conditions, brakes automatically on overspeed, and stops automatically on earthquake, rockfall, slope failure or trackway intrusion.** Source: THSRC, 路線安全, `https://www.thsrc.com.tw/ArticleContent/69240266-e341-490d-bed8-f495280731d6`, PRIMARY, High confidence. Describes function, not the system's name or supplier.
- **The ATC is a digital system modelled on the Tokaido/Kyushu Shinkansen's ATC, with cruise control and station-stop control added, plus single-track bidirectional running support to meet European operating requirements — a Taiwan-specific derivative, not an export of any one system.** Source: zh.wikipedia, 700T article, SECONDARY, Medium confidence, corroborating the primary functional description above.
- **Signalling-system supplier: unconfirmed.** A claim that Mitsubishi and Hitachi are the prime contractors, based on Kyushu Shinkansen digital D-ATC, appeared only in a WebSearch-tool paraphrase (attributed to a Zhihu article and a 海峽評論 article); both underlying URLs failed to fetch (DNS failure; HTTP 404). **TBC — not published.**

### Track, civil engineering, electrification

- **Standard gauge, 1,435mm**, distinct from TRA's 1,067mm. Source: 報導者 (The Reporter), `https://www.twreporter.org/a/mini-reporter-taiwan-railway-gauge-difference`, SECONDARY, High confidence (uncontroversial, widely corroborated). Corroborated by zh.wikipedia's 700T infobox, SECONDARY, Medium confidence. No primary THSR/Railway Bureau page was independently fetched stating the gauge directly (attempts on rb.gov.tw returned empty content).
- **Changhua–Kaohsiung Viaduct: ~157.39 km, structurally completed 2004, opened with THSR service 2007; world's longest bridge on completion, second-longest globally after China's Danyang–Kunshan Grand Bridge from 2010.** Source: zh.wikipedia, 彰化—高雄高架橋, SECONDARY, Medium confidence — the figure is itself cited by Wikipedia to two news outlets (東森財經新聞, 今周刊) not independently fetched, one level removed from primary.
- **Route length ~350 km, 12 stations, Nangang to Zuoying.** Source: 行政院 (Executive Yuan), `https://www.ey.gov.tw/state/A44E5E33CDA7E738/5930b373-fd7d-4d8f-87e8-7f6ff15c67a7`, PRIMARY, High confidence.
- **Electrification: 25kV AC, 60Hz, from Taipower's 161kV three-phase 60Hz grid, stepped down at substations with SCADA monitoring and redundant primary/backup paths.** Source: 交通部鐵道局 (MOTC Railway Bureau) Facebook post, 15 October 2020, PRIMARY, High confidence: "台灣高鐵供電系統之電力供應係由台電變電所161kV三相60Hz交流電送至各變電站，並降壓轉換為兩單相25kV、60Hz之系統電力". Corroborated by zh.wikipedia's 700T infobox, SECONDARY, Medium confidence.
- **Substation count: not established.** A widely repeated "30 substations (BSS/SP/SSP/ATP)" figure, attributed by a WebSearch paraphrase to the same Railway Bureau Facebook post above, does **not** appear anywhere in that post's actual fetched content when read directly — a claimed citation that does not check out, per this project's own Rule 4. **TBC — not published.**

### Speed — a genuine, unresolved conflict

- **zh.wikipedia's general THSR article** gives design maximum 350 km/h, commercial operating maximum 300 km/h, with a 315 km/h figure described as contractual/test speed.
- **zh.wikipedia's 700T-specific article** gives a different pair: design maximum 315 km/h, commercial operating maximum 300 km/h — no mention of 350 km/h anywhere.
- **The Executive Yuan primary page** states only the 300 km/h commercial figure, with no separate design-speed figure at all.
- Neither a THSR nor Railway Bureau primary source distinguishing "design" from "commercial" speed was fetched. **Publish both 350 km/h and 315 km/h as reported design-speed figures, unresolved, not one picked.**
- **Historical note**: commercial speed was raised from the Japanese 700-series Shinkansen's original 285 km/h to 300 km/h for the Taiwan-specific 700T. Source: zh.wikipedia THSR article, SECONDARY, Medium confidence. No primary confirmation found.

### BOT concession structure and the 2009–2015 financial restructuring

- **Original BOT structure**: THSR Consortium selected as preferred bidder 25 September 1997; contracts signed with MOTC 23 July 1998 — a 35-year Construction and Operation Contract and a separate 50-year Station Area Development Contract. Source: 立法院全球資訊網 (Legislative Yuan), "一、台灣高鐵之籌建及營運歷程", `https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=10077&pid=139606`, PRIMARY, High confidence.
- **Project cost**: original 1997 estimate NT$407.6 billion (excluding a further NT$105.7 billion of government obligations for land acquisition, the Taipei underground co-construction section, and supervision); actual cost by June 2009 approximately NT$449.7 billion, a NT$42.1 billion (10.33%) overrun. Same Legislative Yuan source, PRIMARY, High confidence.
- **Opening dates**: Executive Yuan states formal revenue service began 5 January 2007; the Legislative Yuan source separately states full-line service (all stations) began March 2007, 50 daily round trips. Neither source explicitly states the relationship between the two dates (a partial vs. full-line distinction is plausible but not confirmed by either primary).
- **Financial crisis**: Control Yuan (監察院) investigation report, "「高鐵BOT策略與執行成效」專案調查研究報告", `https://www.cy.gov.tw/News_Content.aspx?n=124&s=4894`, PRIMARY, High confidence, approved 9 June 2010 [note: ROC-year conversion inferred from context, not independently verified against raw page text]: accumulated losses reached over NT$70.2 billion by mid-2009, exceeding 66.72% of total capital (NT$105.3 billion+): "高鐵公司98年上半年累積虧損已達702億餘元，超過普通股股本，總資本額1,053億餘元之66.72﹪". Financing was NT$223.4 billion via postal savings (80.07% of domestic financing) plus NT$308.3 billion in government guarantees, against only NT$55.6 billion (19.93%) from ordinary banks; the report calls the structure "台灣自創之奇特、山寨版BOT" (a Taiwan-invented, "knock-off" BOT variant) in which government bore all execution risk despite an original "zero government investment" promise.
- **A later, different-dated loss figure**: a Legislative Yuan motion (`ppg.ly.gov.tw/ppg/bills/1001025089900500/details`, PRIMARY, High confidence) records accumulated losses of NT$73.5 billion as of end-2010, and that THSR turned profitable (before interest/depreciation) for the first time in H1 2011, after 4 years 8 months of operation. Not contradictory with the Control Yuan's mid-2009 figure — different dates on a worsening-then-recovering trajectory; both published, not averaged.
- **2008 interest relief**: government negotiated the first syndicate bank consortium to cut the rate on ~NT$39.1 billion of the company's own-funds loan portion from 8% to near-market 2.7–4%, December 2008. Same Legislative Yuan motion, PRIMARY, High confidence.
- **The depreciation dispute**: depreciation method changed in 2009 from straight-line to usage/volume-based to reduce annual charges (zh.wikipedia, 台灣高鐵財務改革, SECONDARY, Medium confidence, citing 蘋果日報/自由時報/GVM not independently fetched). Under BOT, all fixed assets had to be depreciated to zero by concession end, so a short concession forced high annual depreciation — creating pressure to extend the concession itself. **This mechanism is independently confirmed by the Legislative Yuan motion's own words** (PRIMARY): "延長折舊攤提年限...是否為間接『延長台灣高鐵的特許營運期』之作法" — i.e., the legislature itself questioned whether a depreciation-period extension was a backdoor concession extension. Medium-high confidence overall.
- **2014–2015 restructuring**: a first reform plan (December 2014) proposed extending the concession from 35 to 75 years, rejected 18–0 by the Legislative Yuan Transportation Committee in January 2015, leading to Transport Minister 葉匡時's resignation (zh.wikipedia, SECONDARY, Medium confidence). A revised plan passed 21 May 2015 by conditional resolution, and the law was amended so the government/public-enterprise shareholding cap rose to "not exceeding 50%" (立法院, PRIMARY, High confidence: "將政府或公營事業投資高鐵總持股比例提高為不超過50％"). The amended Construction and Operation Contract was signed 27 July 2015, extending the concession from 35 to **70 years** (1998 contract date to 2068) — PRIMARY, Legislative Yuan, High confidence.
- **A soft conflict on the post-restructuring equity outcome**: the Legislative Yuan primary source states a cap of "not exceeding 50%" government/public shareholding; zh.wikipedia's own framing describes the post-2015 THSR as transformed into a state-owned-but-privately-operated enterprise with an "absolute majority" of government and pan-public-sector shares — a stronger claim than the primary's stated cap. Possibly reconciled by "pan-public" shares (beyond the government's own direct 50% cap) exceeding 50% in combination, but neither source states this reconciliation explicitly. Both formulations published, not resolved.

### Yilan extension (2020s infrastructure)

- **Executive Yuan approved the "高鐵延伸宜蘭計畫" (THSR Yilan Extension) at a cabinet meeting 23 July 2026**, under Premier 卓榮泰. Route: east from Nangang through New Taipei (Xizhi, Pingxi, Shuangxi, Gongliao) and Yilan County (Toucheng, Jiaoxi) to a single Yilan City station. Length 60.6 km. Budget approximately NT$352.175–352.18 billion (rounding-level variation across sources, not substantive). Construction estimated at 11 years after approval. Source: 自由時報, "政院拍板！高鐵延伸宜蘭只要20分鐘、核定後11年完工通車", `https://news.ltn.com.tw/news/politics/breakingnews/5514885`, SECONDARY, Medium-High confidence, fetched in full. No direct Executive Yuan primary press release was located for this decision — a stated gap.
- **Travel time conflict**: "about 20-odd minutes" per the fetched 自由時報 article, vs. "28 minutes" per other outlets found via search summary only (not independently fetched). Unresolved; both reported.

## Conflicts

- **Design maximum speed: 350 km/h (zh.wikipedia general THSR article) vs 315 km/h (zh.wikipedia 700T-specific article)** — no primary source distinguishing design from commercial speed was found. Both published.
- **Substation count**: a widely-cited "30 substations" figure does not appear in the primary source it is attributed to. Not published; TBC.
- **N700ST contract value: ¥129.091bn (primary THSR press release, see fleet-roster research) vs ¥124.091bn (secondary reporting)** — noted here for cross-reference; full detail in the fleet-roster file.
- **Yilan-extension travel time: ~20 minutes vs 28 minutes**, across different news outlets, neither fully reconciled.
- **Post-2015 government/public shareholding: "not exceeding 50%" (primary, statutory cap) vs "absolute majority" (secondary characterisation)** — not reconciled.

## Checked and failed

- **Two Railway Bureau (rb.gov.tw) technical pages** (電力系統, and the general THSR overview page) — both returned blank/empty content on repeated fetch attempts; possibly JS-rendered.
- **zhuanlan.zhihu.com and haixia-info.com** (claimed sources for the Mitsubishi/Hitachi signalling-supplier attribution) — DNS failure and HTTP 404 respectively.
- **cw.com.tw and thenewslens.com articles on the BOT near-bankruptcy** — both HTTP 403 Forbidden. Checked 2026-08-28.
- **A "73% of THSR's route is elevated" figure** — appeared only in a WebSearch-tool summary, not a fetched page. Not published. Checked 2026-08-28.
- **A "government profit exceeded NT$100 billion post-restructuring" claim (citing a 2020 UDN report)** — appeared only in a WebSearch-tool paraphrase of Wikipedia's own citation list, not independently fetched. Not published. Checked 2026-08-28.
- **A direct MOTC/Executive Yuan primary press release for the Yilan extension** — not located within the search budget available; current sourcing rests on one fully-fetched news article plus unfetched search-summarised coverage of others. Checked 2026-08-28.

## Stated gaps

- Signalling-system supplier/manufacturer: unconfirmed, TBC.
- Formal name of THSR's ATC variant, if one exists beyond "digital ATC": unconfirmed.
- Design speed (350 vs 315 km/h): unresolved.
- Substation count: TBC.
- Relationship between the 5 January 2007 and March 2007 opening dates (partial vs. full-line service): not confirmed by either primary source read.
- A primary Executive Yuan/MOTC press release for the Yilan extension: not located.
