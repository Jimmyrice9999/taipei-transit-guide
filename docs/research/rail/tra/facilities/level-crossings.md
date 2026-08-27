# Taiwan Railways level crossings — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. No prior `docs/research/` file on this subject existed to check against.

This is a one-subject report on TRA's level crossings (平交道): current
inventory, the statutory safety-classification system, a 2026 draft
regulation amendment, an accident with a documented policy consequence, and
the separate grade-separation programme that is eliminating crossings city by
city. Several Railway Bureau (rb.gov.tw) pages — the natural primary source
for most of the grade-separation programme — returned empty content on every
fetch attempted in this research; that limits confidence on several
grade-separation details below, flagged explicitly where it applies.

## What is established

- **News reporting in June 2026 gives TRA's current level-crossing count as 415 nationwide, of which roughly 350 are on main lines.** Corroborated across three independently fetched outlets: ETtoday, `台鐵3年27起事故 交通部擬修法「禁設新平交道」`, `https://www.ettoday.net/news/20260613/3182640.htm`; Liberty Times, `交部將修法 鐵路不再新增平交道`, `https://news.ltn.com.tw/news/life/breakingnews/5471008`; CNA, `https://www.cna.com.tw/news/ahel/202606130076.aspx`. All SECONDARY, Medium confidence — the 415 figure appears in each as unattributed running text, not as a quoted TRA/Railway Bureau document.
- **TRA's own open dataset of level crossings exists and is live, but does not itself surface a total-record count.** Source: 政府資料開放平臺 (data.gov.tw), `平交道公開資料`, `https://data.gov.tw/dataset/11970`, PRIMARY, High confidence for existence and fields (name, line, crossing type, county/city, coordinates); metadata last updated 2024-08-26, stated update cadence "irregular." A live per-record lookup at `https://tip.railway.gov.tw/tra-tip-web/adr/about-public-info-6-detail`, PRIMARY, was fetched and shows a current update timestamp, but pagination was not exhausted to derive an independent total.
- **TRA's own attributed statement, per Liberty Times, gives 313 level crossings currently fitted with obstacle-detection systems, with full coverage targeted before 2031 at an estimated cost of roughly NT$400 million; a Railway Bureau statement to the same outlet gives 11, 9 and 7 main-line crossing accidents for 2023, 2024 and 2025 respectively.** Source: Liberty Times (as above), SECONDARY, Medium confidence — explicitly attributed to TRA/the Railway Bureau by the reporter, but not independently checked against a TRA or Railway Bureau press release.
- **The current statutory safety-classification regulation, in force since 15 June 1996 (民國85年) without revision since, sets four crossing types: Type 1 (gates + warning devices, staffed 24 hours), Type 2 (gates + warning devices, staffed during specified hours), Type 3 (automatic warning + automatic gates, unstaffed), Type 4 (warning signs only, unstaffed).** Source: 全國法規資料庫, `鐵路立體交叉及平交道防護設施設置標準與費用分擔規則`, `https://law.moj.gov.tw/LawClass/LawAll.aspx?PCODE=K0030009`, PRIMARY, High confidence — full regulation text fetched. Original-language basis (Article 14): `第一種：設遮斷器及警報裝置，並應晝夜派看柵工駐守`; `第三種：設自動警報裝置及自動遮斷器，不派看柵工駐守`.
- **A June 2026 MOTC draft amendment (pre-announced for a two-month comment period) would rename the regulation, establish a principle that existing lines will in principle not have new level crossings built, add finer Type 3 subcategories including one specifically narrowing passage width to 1.5–1.7 m with rail-stake posts to block four-wheeled vehicles, mandate barrier coverage across both lane directions plus shoulder and sidewalk, and mandate obstacle-detection-equipment evaluation.** Corroborated across three independently fetched outlets: CNA, `交通部擬修法 現有鐵路原則不再新增平交道`, `https://www.cna.com.tw/news/ahel/202606130076.aspx`; PTS, `交通部將修法不再增設平交道 新增「第三乙種」禁四輪車通行`, `https://news.pts.org.tw/article/812879`; Liberty Times (as above). All SECONDARY, High confidence for the draft's content (three independent, detailed, mutually consistent accounts). The stated rationale is regulatory age (over 30 years unrevised) plus general risk, not one named triggering accident — none was found in any of the three articles.
- **A documented historical accident with a stated policy consequence: the 8 March 1981 Touqian Creek Bridge derailment**, in which a sand-and-gravel truck illegally entered an unguarded crossing near Hsinchu–Zhubei and was pushed onto the bridge by a northbound EMU100 自強號 express, killing the truck driver and 30 train passengers and injuring 130. Source: zh.wikipedia, `頭前溪橋列車出軌事故`, `https://zh.wikipedia.org/zh-tw/頭前溪橋列車出軌事故`, SECONDARY, Medium confidence — the article cites two named historical/railfan books (蔡仁輝《閒話臺鐵五十年》1996; 蘇昭旭《台灣鐵路火車百科》2009), not independently checked here. Stated consequences: `自強號` EMUs were thereafter painted with orange-red warning livery (popularly "owl stripes"), and unguarded Type 4 crossings near bridges were abolished, with remaining ones upgraded with gates, lights and bells.
- **A weaker-sourced second historical accident, 20 December 1990, at a crossing near Daren Road**, in which a tour bus reversed into a crossing and was struck by a northbound EMU300 自強號, catching fire and killing 25 bus passengers (7 train passengers injured). Source: zh.wikipedia, `臺鐵重大死傷事故列表`, SECONDARY, Low confidence — the entry's own footnote is a 2017 blog post; no stated policy consequence was found for this one.
- **Grade-separation projects, reported with varying confidence because rb.gov.tw could not be fetched directly (see Checked and failed):** Taipei's underground project completed with full through-running from 24 October 2011 (22.672 km); Kaohsiung's underground project's Phase 1 eliminated seven named surface crossings with the last surface-running train departing 13 October 2018 (15.37 km, NT$99.869 billion); Hualien's elevation project (Hualien–Ji'an, 7 named crossings) remains at feasibility/planning stage, corroborated by Legislative Yuan primary records rather than rb.gov.tw. Sources: zh.wikipedia, `臺鐵立體化`; 今周刊 (Business Today) on Kaohsiung; 立法院 (Legislative Yuan) records on Hualien, `https://www.ly.gov.tw/EngPages/Detail.aspx?nodeid=38514&pid=193040` and `...&pid=227478`, PRIMARY. Confidence Medium for Taipei/Kaohsiung dates (secondary, cross-corroborated in part); Medium-High for Hualien's planning-stage status specifically (a genuine primary source).

## Conflicts

- **415 (2026 news reporting) versus 435 (a zh.wikipedia table dated January 2017, which sums 6+1+381+28+11+8=435 by this page's own addition)** for the total level-crossing count. Both measure the same thing roughly nine years apart, consistent with an active elimination programme, but neither has been independently verified against a primary document. A third figure, 456, appeared only in an unfetched search-tool snippet and does not appear anywhere in the fetched zh.wikipedia page — rejected per the no-snippet rule, not published.
- **Kaohsiung underground Phase 2 completion year: 2023, per a 2018-era projection in 今周刊, versus 2025, per zh.wikipedia's current text.** Not resolved; may reflect an early projection versus the actual later completion, but no source states that explicitly.
- **Hualien elevation project cost estimate: "at least roughly NT$17+ billion" versus NT$26.5 billion**, both appearing in the same search-summarized coverage without clearly separating whether these are two different estimates at two different planning stages (an earlier MOTC assessment versus a later county feasibility submission). Not resolved; flagged pending a full fetch of the underlying article.

## Checked and failed

- **Railway Bureau (rb.gov.tw) project pages for the Taichung and Kaohsiung grade-separation programmes** — checked 2026-08-27, both the `showpage.php` and newer `main_28` URL schemes returned empty content, consistent with a JavaScript-rendered page the fetch tooling used cannot execute. None of the grade-separation project details attributed to rb.gov.tw in this report rest on a direct fetch of that primary source; they rest on zh.wikipedia and search-tool summaries of rb.gov.tw content, which are treated here as unverified leads, not citations.
- **MOTC's draft-regulation listing page** (`motclaw.motc.gov.tw/webMotcLaw2018/Draft/List`) — checked 2026-08-27, failed with a TLS certificate error. The 2026 draft amendment is therefore reported from news coverage only, not from MOTC's own announcement text.
- **"456 level crossings, January 2017"** — checked 2026-08-27 via a search-tool snippet; the underlying zh.wikipedia page, fetched in full, does not contain this figure (its table sums to 435). Rejected.
- **"42.7 km, Sanyi–Xinwuri" as the Taichung elevation project's scope** — checked 2026-08-27 via an initial, unfetched search summary; a follow-up targeted search could not corroborate this and instead consistently returned a 21.7 km, Fengyuan–Daqing scope. Not published; flagged as likely erroneous but not disproven.
- **TRA's open-data crossing database, paginated to page 42** — checked 2026-08-27; pagination continued past page 42 with no visible total-count indicator, so an independent exact current total could not be derived this way.

## Stated gaps

No primary TRA or Railway Bureau document was found stating "415 level
crossings" as of a specific date; a TRA monthly statistical report or the
MOTC draft amendment's own explanatory document would settle this, as would
exhausting the open-data database's pagination. No specific accident
triggering the 2026 regulation amendment was found in any source read; all
three news accounts cite general regulatory age and risk. The mapping
between the four statutory crossing types and the finer categories used in
the 2017 zh.wikipedia count table (Type 3A, "semi-enclosed," "manual
control," "specialized") is unresolved. Individual grade-separation project
scopes, dates and crossing-elimination counts for Taichung, Chiayi,
Pingtung/Chaozhou, Tainan, Yilan and Taoyuan all rest on unverified leads
pending a working fetch of rb.gov.tw.
