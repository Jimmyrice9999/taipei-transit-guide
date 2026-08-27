# Taoyuan Airport MRT signalling, train control and automation grade — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. `docs/research/rail/lines/airport-mrt.md` already establishes the Marubeni signalling-subcontracting dispute (claim 8) but left the subcontractor unnamed and did not research signalling technology or automation grade — this fills that specific gap without contradicting the existing file.

This is a one-subject report on the Taoyuan Airport MRT's (機場捷運, TDX line
A) train-control systems, covering only the operating line, not the
under-construction Green Line project. `content/rail/tymc/` currently has no
technology subdirectory.

## What is established

- **Marubeni, whose contract required it to design the signalling system itself, illegally subcontracted that work to the British firm Invensys; the High Speed Rail Bureau withheld roughly NT$1.9 billion of the performance bond as a result.** Source: Central News Agency (中央社), `機捷算總帳 高鐵局將罰丸紅25億並求償`, `https://www.cna.com.tw/news/ahel/201701090048.aspx`, SECONDARY (contemporaneous wire report attributing its account to the High Speed Rail Bureau), High confidence, fetched and read in full, published 9 January 2017. Original-language basis: `丸紅必須自行設計的號誌系統，違約轉包給英商英維思公司，扣住部分履約保證金約19億多元`. This names the previously-unidentified British subcontractor from the existing research file's claim 8.
- **MOTC's own press release confirms, in its own words, that the line runs on two distinct signalling-system generations, requiring dual onboard signalling equipment on trains to bridge them, with high technical difficulty integrating the two and a correspondingly long testing schedule.** Source: Ministry of Transportation and Communications, `機場捷運延伸線A22老街溪站正式通車`, `https://www.motc.gov.tw/ch/app/data/view?module=news&id=14&serno=03fcdf67-3c92-46b9-b79b-cc98b983dc04`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `機場捷運延伸線採一車雙載號誌系統，面臨新舊系統整合技術難度高且測試期程較長等困難`. MOTC does not itself name either signalling product.
- **Correction to the above (2026-08-28): the original line's signalling product IS now confirmed by a genuine primary source — a real name, distinct from any of the Wikipedia-infobox labels this file previously treated as unconfirmed.** The High Speed Rail Bureau's own 2013 (民國102年) annual report, extracted in full with `pdftotext` after the fetch tooling used could not read the PDF directly, states the system comprises interlocking product **WESTRACE** and train-control system **CBTC-EP**, providing automatic train operation (ATO), automatic train protection (ATP) and automatic train supervision (ATS), with control signals delivered to trains via a radio transmission system (RTS). Source: 交通部高速鐵路工程局 (High Speed Rail Engineering Bureau, MOTC — predecessor of today's Railway Bureau), `高鐵局102年年報` (2013 Annual Report), `https://www.rb.gov.tw/public/files/artsinfo/1503058979-0.pdf`, PRIMARY, High confidence — full 83-page PDF, extracted with `pdftotext` (see AGENTS.md's PDF-extraction guidance). Original-language basis: `本系統係由號誌聯鎖(WESTRACE)及列車控制系統(CBTC-EP)所組成，包括列車自動操作(ATO)、列車自動防護(ATP)、列車自動監控(ATS)等，號誌系統之相關控制訊號，則透過無線電傳輸系統(RTS)傳送至列車`. **WESTRACE is a genuinely distinct product from any of "Siemens Trainguard MT," "DTG-R SCS," or "Rail9000"** — it does not confirm those Wikipedia labels, and this page does not treat it as doing so; it is reported as what the primary construction record actually names. WESTRACE was originally an Invensys Rail product family, later carried under Siemens branding after Siemens acquired Invensys Rail in 2013 — the same year as this report — which is at least consistent with (though not proof of) a connection to the Invensys signalling-subcontracting dispute above, still not stated explicitly by any source read.
- **The same 2013 report states the signalling system was, at that point in construction, incomplete: full stations A21 through A2 had signalling equipment and cabling installed, while A1 station and the Luzhu depot were still undergoing signalling layout, installation and cabling.** Same source, PRIMARY, High confidence. This is a 2013 construction-progress snapshot, not a claim about the currently completed and operating system.

## Reported but not established — a genuine sourcing gap, not a settled fact

Several specific technical labels appear in Wikipedia infoboxes but are
**not published as established facts** on the content page, because they
either lack their own citation within the article that carries them, or
cite a source this research could not reach:

- **"Siemens Trainguard MT CBTC"** appears in both English and Chinese Wikipedia's infoboxes for this line. English Wikipedia cites a named 2011 government report (`ME01號誌車載設備工廠測試出國報告`, 交通部高速鐵路工程局, hosted on `report.nat.gov.tw`); Chinese Wikipedia's infobox line for the same label carries no citation at all within that article. The cited government report could not be fetched — `report.nat.gov.tw` failed to resolve on every URL form tried.
- **"DTG-R SCS" (for the original A1–A21 section) and "Rail9000" (for the A21–A22 extension)** appear only in Chinese Wikipedia's infobox, both citing a named report (`交通部鐵道局北部工程分局 考察捷運列車雙號誌系統安裝測試實務`) with no URL given in the wikitext and not independently located.
- **GoA2 for the original line and GoA4 (commuter trains only) for the extension** appear in Chinese Wikipedia's infobox with **no citation attached to that line at all**. This is treated as the most important finding of this research: no primary TYMC, MOTC or DORTS source read anywhere in this project's research states an automation grade for this line, and no source read describes any driverless or unattended-operation capability — every rolling-stock source describes conventionally crewed trains with driving cabs. GoA4 specifically (full unattended operation) is inconsistent with everything else established about this line. **Automation grade is published as TBC, not as GoA2/GoA4**, on the strength of what this research found.
- Whether "Invensys" (the 2006-era subcontractor) and "Siemens Trainguard MT" (the label in later Wikipedia infoboxes) describe the same equipment under different corporate names — Siemens acquired Invensys Rail in 2013 — is a plausible connection no source read states explicitly. Not published as established.

## Conflicts

- **ME01 electromechanical contract's prime contractor: Marubeni versus Hitachi.** Chinese Wikipedia's body text and the existing research file both frame Marubeni as having won the ME01 bid. English Wikipedia, citing a 2006 Hitachi press release (title: "Hitachi Signed Contract for Airport Access MRT System in Taiwan"), frames Hitachi as the winner, with Marubeni and Kawasaki Heavy Industries as cooperating partners. Both describe the same January 2006 contract; no source read states explicitly whether these are compatible framings of one consortium with different lead roles for different scopes. The underlying Hitachi press release could not be independently read — see Checked and failed. Both framings are published; neither is picked.

## Checked and failed

- **`report.nat.gov.tw`** (the National Development Council's official overseas-report repository, cited as the source for both the "Siemens Trainguard MT" and "DTG-R SCS"/"Rail9000" infobox claims) — checked 2026-08-27, every URL form tried failed with a DNS resolution error (`getaddrinfo ENOTFOUND`), not a 403/404. Both of Wikipedia's most specific technical citations for this line's signalling sit behind this same unreachable domain.
- **A web.archive.org snapshot of Hitachi's 12 January 2006 press release** (dead at its original URL) — checked 2026-08-27; `web.archive.org` fetches are blocked in the tooling used.
- **`rb.gov.tw` (MOTC Railway Bureau) rolling-stock/signalling subsystem page** — checked 2026-08-27, loaded but returned empty/blank extractable content, consistent with a JavaScript-rendered page the fetch tooling cannot execute.
- **A Chinese Wikipedia article on Invensys itself**, sought to corroborate the 2013 Siemens acquisition — checked 2026-08-27, no such article exists at either title tried (HTTP 404).
- **Search engines (Google, Bing, DuckDuckGo), attempted by direct URL fetch after the session's search-tool budget was exhausted** — checked 2026-08-27; none returned usable results (an error page, unrelated cached results, and a bot-check CAPTCHA respectively). This limited corroboration of "DTG-R SCS," "Rail9000" and "Invensys" to what could be reached by direct URL and Wikipedia's own citations.

## Stated gaps

The line's automation grade is not established by any source this research
could verify — published as TBC. Which signalling product/vendor actually
equips the line is not settled to primary-source strength; all three labels
found trace only to Wikipedia infoboxes, and the citations that exist for
any of them point to the same unreachable government-report repository. The
ME01 contract's prime contractor (Marubeni versus Hitachi) is unresolved.
Whether the 2006 Invensys subcontracting dispute and the later
"Siemens Trainguard MT" label describe the same equipment is not stated by
any source read. A working fetch of `report.nat.gov.tw`, or a Railway
Bureau tender/contract document naming the ME01 signalling subcontractor
and product directly, would settle most of the above.
