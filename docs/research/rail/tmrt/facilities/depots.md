# TMRT maintenance depot — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes,
> not sources. `docs/research/rail/tmrt/green-line.md` already correctly
> states CJ910 contains G0, the Beitun depot, and the northern track/system
> civil work — this was the key lead that overturned this task's own
> starting hypothesis of a "Wuri Depot" near G17, which does not exist.

## What is established

- **The depot is 北屯機廠 (Beitun Depot), at the line's northern terminus, beside G0 Beitun Main Station — not at the southern (Wuri/HSR) end as initially hypothesised.** Source: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局), CJ910 project record, `https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C30`, PRIMARY, High confidence, fetched directly and reproduced identically across two independent fetches. Quoted: 「本標計畫之主維修基地(北屯機廠)設置於松竹路以北，東側沿旱溪，西側鄰舊社巷，面積約20公頃，基地西側設置G0車站，為營運初期之起始站。」 Independently corroborated by the CJ900/CJ907 system-equipment contract page: 「工程範圍自北屯機廠至G17，包括機廠、行控中心及相關捷運系統設施」 — confirming the depot sits at the G0 end, opposite G17.
- **Site area: approximately 20 hectares.** Same source, PRIMARY, High confidence.
- **Precise street address: 臺中市北屯區松竹路一段1000號.** Source: Taichung Metro Corporation, Major Events page (大事紀), `https://www.tmrt.com.tw/about/major-events`, PRIMARY, High confidence, dated entry 31 May 2017: 「台中捷運公司人員進駐臺中市北屯區松竹路一段1000號北屯機廠行政大樓辦公。」
- **Maintenance tier: Beitun Depot is TMRT's only Level 5 (五級維修) maintenance facility, and its main depot.** Same CJ910 source, PRIMARY, High confidence. Quoted (reproduced identically across two fetches, including an apparent typo genuinely present on the source page): 「北屯機廠是臺中捷運系統唯一具五級維修能功能的主機廠」. No second, lower-tier depot is named anywhere in the material read — every civil/system contract page and the Green Line project overview names only Beitun Depot.
- **Facilities on site, per the bureau's own description**: a main maintenance workshop (主維修工廠), an inspection/repair workshop (檢修工廠), maintenance/inspection stabling-track groups (維修及檢修股道群), a parking/stabling yard and track group (駐車廠及股道群), a car-wash facility (洗車廠), an administration building housing the operations control centre (行控中心), a training centre (訓練中心) and offices, plus substations (變電站). Same CJ910 source, PRIMARY, High confidence.
- **Construction contract**: civil contract CJ910, awarded to 大陸工程股份有限公司 (Continental Engineering Corporation), value approximately NT$5.3745 billion, started 31 December 2012, completed 18 February 2019. Same CJ910 source, PRIMARY, High confidence.
- **Construction/handover timeline, from TMRT's own Major Events page, all PRIMARY, High confidence**: whole-line groundbreaking 8 October 2009 (naming Taipei City Government's own MRT Engineering Bureau, DORTS, as responsible for construction oversight at this early stage — see Conflicts); first Kawasaki-built trainset arrived at Taichung Port 5 February 2017; first assembled trainset arrived at the depot 30 June 2017; Taichung Metro Corporation took over management of the depot and its 18 trainsets 16 December 2019 (「台中捷運公司接管北屯機廠及18輛列車，並完成臺中捷運標章註冊及公告」); operations control centre handover and start of full 18-station trial running 3 February 2020; formal Green Line opening 25 April 2021 (already established elsewhere in the corpus, not re-verified this run).
- **Rooftop/site solar power installation**, projected (as of a 30 June 2021 entry) to add roughly NT$7.5 million/year in electricity-sale revenue once complete. Same Major Events page, PRIMARY, High confidence. A facility/energy development, distinct from real-estate joint development.
- **No depot-specific joint-development (TOD) plan was found.** The bureau's own concrete Green Line land-development case list (`docs/research/rail/tmrt/projects/joint-development.md`, already verified) names exactly seven station sites — G5, G6, G8, G8a, G9-1, G9-2, G11 — and does not include G0/the depot. Reported as not found, not confirmed absent — no depot-specific search beyond this existing case list and the depot's own pages was exhaustive.
- **Attempted main-session follow-up**: fetched and read a 2021 route/organisation PDF (`https://www.tmrt.com.tw/Content/Uploads/PublicClassArticle/9ad3a311-c8e4-4bb8-883a-d36d756eeeae.pdf`, 24MB, too large for the scout's WebFetch tool) directly with `curl`/`pdftotext`. It gives maintenance-staff headcounts by department (e.g. 機廠設備維修人員(10), depot-equipment maintenance staff) but contains no train-storage capacity, stabling-track count, or maintenance-bay figures — confirming the capacity gap is real, not merely an unfetched source.

## Conflicts

- **Construction-oversight attribution**: TMRT's own Major Events page names Taipei City Government's MRT Engineering Bureau (DORTS) as responsible for construction at the October 2009 whole-line groundbreaking, while every other primary source used in this research (CJ910, CJ900/CJ907, the Green Line overview) is published by Taichung's own bureau (TCRT). Not necessarily contradictory — DORTS is known to have provided early technical assistance to other cities' metro projects before those cities built their own bureaus — but not independently verified against a DORTS-side primary source. Reported as stated, not resolved.
- **zh.wikipedia (臺中捷運綠線, checked as a lead only, its own underlying citation not independently opened)** describes depot construction beginning October 2009 as "plant relocation work" and gives a differently-worded site boundary ("松竹路一段北側、旱溪西路三段西側") than the bureau's own "松竹路以北，東側沿旱溪，西側鄰舊社巷". Not published as established; the bureau's own primary wording is used on the content page.

## Checked and failed

- **`維護管理個別設施彙整表.pdf`**, linked from TMRT's own train-info page as the likely source for maintenance-tier specifics — the URL returned a 404 HTML page when fetched directly with `curl` in the main session (confirming the scout's earlier WebFetch failure was a dead link, not a tool limitation).
- **The 2021 route/organisation PDF** — successfully fetched and read directly in the main session (`curl` + `pdftotext`) after exceeding the scout's WebFetch size limit; contains maintenance-staff headcounts but no capacity figures — see above.
- **A specific train-storage/stabling-track capacity figure for Beitun Depot** — not found in any source read, including the two PDFs specifically checked for it. Genuinely TBC, not an artifact of a fetch failure.
- **Independent news coverage of the depot's construction or an environmental-impact-statement page** — not located; the scout's WebSearch budget was exhausted before this could be pursued further.

## Stated gaps

- Train-storage or service capacity of Beitun Depot (number of trainsets, stabling tracks, or maintenance bays): not found anywhere checked, including two directly-read PDFs. TBC.
- A precise definition of what "五級維修" (Level 5 maintenance) specifically comprises: not stated by any TMRT/TCRT source read — the same undefined term appears in KRTC's own depot research.
- Whether the depot has spare capacity for the Green Line's planned extensions: not researched, out of this task's scope.
- Wikipedia's October 2009 "plant relocation" claim and its differently-worded site boundary: unverified against its own cited source.
