# Taoyuan Airport MRT rolling stock — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. `docs/research/rail/rolling-stock/rolling-stock.md` marked "Airport MRT manufacturer" as TBC as of its most recent version; this fills part of that gap and states clearly which part remains open.

This is a one-subject report on the Taoyuan Airport MRT's (機場捷運, TDX line
A) two train fleets — express (直達車) and commuter (普通車). It also
records a genuine cross-check catch: two independently-read primary sources
disagree with a Wikipedia seat-count table, and the Wikipedia figure appears
to be the one that is wrong.

## What is established

- **The operator's own current page confirms two distinct fleets: a 5-car express type (4 passenger cars + 1 luggage car, ~102 m total) and a 4-car commuter type (all passenger cars, ~82 m total, longitudinal seating, 188 seats, ~1,000 passengers crush-loaded including standing).** Source: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司), `列車介紹` (Train Introduction), `https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/introduce.html`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `直達車由五節車廂所構成，其中四節車廂為旅客車廂，一節車廂為行李車廂，總長約為102公尺`; `普通車由四節車廂所構成，全部車廂皆為旅客車廂，總長約為82公尺，座位採用縱向式設計，共有188個座位數`. This page does not name a manufacturer, fleet size, or maximum speed for either type.
- **Taiwan Rolling Stock Co. (台灣車輛股份有限公司), a manufacturer, states on its own product page that it built commuter trainsets numbered 102–117 (64 cars), completed and delivered December 2012.** Source: Taiwan Rolling Stock Co., `桃園機場捷運普通車 規格表`, `http://www.trsc.com.tw/train/tran-58acf47251060`, PRIMARY (a manufacturer, about its own product), High confidence, fetched and read in full. Original-language basis: `台灣車輛參與其普通車第102~117號之產製共64輛，於2012年12月完工交車`. This is a more precise delivery date than the "2011–2012" range previously available.
- **The same manufacturer page's per-car seat breakdown for the commuter set (DMC1 44, MC1 50, MC2 50, DMC2 44) sums to 188 — matching the operator's own whole-train figure exactly — and conflicts with zh.wikipedia's own composition table for the same fleet (DMC1 44, MC1 47, MC2 50, DMC2 44), which sums to 185.** Same manufacturer source, PRIMARY, High confidence; cross-checked directly against zh.wikipedia's `桃園捷運1000型電聯車` article, re-fetched in full for this comparison. This is a genuine sourcing catch: two primaries (operator total, manufacturer per-car breakdown) agree exactly; the secondary source's own table does not match either of them, and does not even sum to its own stated total — consistent with a transcription error in the Wikipedia table (MC1 likely mistyped as 47 rather than 50), not corrected here per the discipline against silently fixing a source, but published as a conflict.
- **A national news report from just after the line's opening independently corroborates an 11-trainset express fleet, and describes a seat-reduction modification (28 seats removed to add luggage space) then underway.** Source: Liberty Times (自由時報), `機捷直達車拆28座位 增加行李空間`, `https://news.ltn.com.tw/news/life/breakingnews/1942044`, SECONDARY, Medium-High confidence (contemporaneous national newspaper, independent of Wikipedia), fetched and read in full, published 9 January 2017. Original-language basis: `若以目前桃捷共11列直達車來計算，總計可以放1342個28吋行李`; `總共拆除28個座位（第一節拆4個，其他三節拆8個）`.
- **Zh.wikipedia's two model-specific articles give further technical detail for both fleets, not independently verified against a primary source beyond the cross-checks above.** Express (2000-series): 11 trainsets (201–211), 55 cars, all-powered 5M formation, 855 passengers per set, 206 seats plus 8 wheelchair spaces, third-rail DC 750 V, 1,435 mm gauge, 100 km/h operating (110 km/h design maximum), length 102.31 m, delivery from August 2011, entered service 2 March 2017, manufactured by Kawasaki Heavy Industries. Commuter (1000-series): 20 trainsets, 80 cars, all-powered 4M formation, built 2011–2012 and again 2015, entered service 2 March 2017, third-rail DC 750 V, 1,435 mm gauge, 100 km/h operating (110 km/h design maximum), length 82.06 m; manufacturer split by trainset number: Kawasaki built 101 and 118–120 (121–124 reserved, not built), Taiwan Rolling Stock built 102–117. SECONDARY, Medium confidence — the length figures for both types (102.31 m, 82.06 m) closely match the operator's own "~102 m" and "~82 m" figures, which is corroborating detail, but **no Kawasaki corporate source, TYMC primary page, or Railway Bureau document naming Kawasaki as a manufacturer for any part of either fleet was found or read in this research.** The Kawasaki attribution rests on zh.wikipedia alone.

## Conflicts

- **Commuter-fleet per-car seat composition: zh.wikipedia's table (44+47+50+44=185) versus the manufacturer's own spec page and the operator's own total (44+50+50+44=188).** Both primaries agree with each other exactly; the secondary source's table does not match either and does not even sum to its own headline "188" figure elsewhere in the same article. Published as a conflict per the discipline against silently correcting a source; the manufacturer/operator figure is the one this page's content treats as more reliable, without erasing the Wikipedia value from the record.
- **ME01/rolling-stock manufacturer sourcing strength is genuinely uneven, not a factual disagreement but worth stating plainly:** Taiwan Rolling Stock's role in commuter sets 102–117 is confirmed by the manufacturer's own page; Kawasaki's role in the express fleet and in commuter sets 101/118–120 rests on zh.wikipedia alone, with no primary corroboration found. A content page should not present these two manufacturer attributions at equal confidence.

## Checked and failed

- **An archived (2017) snapshot of Taiwan Rolling Stock's spec page** — checked 2026-08-27; `web.archive.org` fetches are blocked in the tooling used. Not needed in the end: the live page was still reachable and was fetched directly instead.
- **TYMC's own 2010–2011 annual report PDF** (`https://www.tymetro.com.tw/tymetro-new/upload/file/20171115041746_0.pdf`, cited by zh.wikipedia's own footnote for the 2000-series article) — checked 2026-08-27; the file downloaded successfully (3.7 MB) but the fetch tool's text extraction returned only PDF structural metadata, no readable body text, and this pass did not have Bash access to retry via the `pdftotext` fallback documented in AGENTS.md. A genuine, specific, still-open lead for a follow-up pass with that tool available.
- **A Chinese Institute of Engineers journal retrospective article on the Airport MRT's first operating year** (`http://www.cie.org.tw/cms/JournalFiles/10708_chapter13.pdf`, both http and https forms) — checked 2026-08-27, both returned HTTP 301 redirects the fetch tool would not follow.
- **Two government business-travel report URLs on `report.nat.gov.tw`** (cited by zh.wikipedia's footnotes for ME01 electromechanical quality inspection and signal onboard-equipment testing) — checked 2026-08-27, both failed with `getaddrinfo ENOTFOUND` — the domain did not resolve.
- **`hsr.gov.tw` (the pre-2018 High Speed Rail Engineering Bureau, predecessor of today's Railway Bureau)**, for a cited 2011 press release on the first delivered trainset — checked 2026-08-27, connection refused; consistent with the agency's 2018 merger into 鐵道局 (rb.gov.tw) and domain retirement.

## Stated gaps

No manufacturer is named anywhere on TYMC's own current public travel-guide
page for either fleet. Kawasaki's role (the entire express fleet, plus
commuter sets 101 and 118–120) is not confirmed by any primary source
found — settling it would need a Kawasaki corporate archive page, a
Railway Bureau tender/award record, or a successful read of TYMC's own
2010–2011 annual report PDF, which downloaded but could not be extracted
this pass. No primary source states a combined total fleet size (11 express
+ 20 commuter = 31, by simple addition of two separately-sourced counts);
this page does not publish that sum as an operator-stated figure. Whether
the four "reserved" commuter trainset numbers (121–124) have since been
built is unaddressed by anything read this pass.
