# Taichung Metro Green Line signalling — research findings, 29 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page or full article; no search snippet is used as evidence.

This is a one-subject report identifying the Green Line's signalling
vendor/product and its automation grade, supplementing the existing
content page, which previously established the CJ900/CJ907 contract and
consortium but named no specific signalling product.

## What is established

- **The CJ900/CJ907 contract, consortium, value and start date** (already
  on the content page, re-verified by an independent re-fetch this pass):
  Kawasaki Heavy Industries, Alstom Transport and 中鼎工程 (CTCI), ~NT$10.908
  billion, started 21 April 2011, six named subsystems (OCS/AFC/COM/DEQ/
  EMU/PWR), Beitun depot to G17. Source: Taichung City Government Rapid
  Transit Systems Bureau, `CJ900標/CJ907標`,
  `https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31`,
  PRIMARY, High confidence. No firm-to-subsystem assignment is stated on
  this page.
- **Alstom's own 2025 press release, on a separate Blue Line contract,
  names the Green Line's platform.** Source: Alstom, "Alstom wins
  contract to deliver high-capacity driverless signalling system for
  Taichung Blue Line metro in Taiwan," 15 April 2025,
  `https://www.alstom.com/press-releases-news/2025/4/alstom-wins-contract-deliver-high-capacity-driverless-signalling-system-taichung-blue-line-metro-taiwan`,
  PRIMARY (vendor's own statement), Medium-High confidence — content
  genuine and corroborated independently (below), but direct fetch of
  alstom.com returned HTTP 403 every attempt; retrieved via a read-proxy
  of the identical URL, so not independently re-verified by a second
  fetch method. Quotes: "Following the success of the Green Line, which
  began revenue service in 2021... Alstom will provide its Urbalis CBTC
  system... the same successful platform already in operation on
  Taichung's Green Line." Separately names "Urbalis Forward" only for a
  different set of Taipei lines (Wanda Phase 1/2, Circular Line Phase 2),
  not for Taichung's Green Line — so only the family name "Urbalis CBTC"
  is supported for the Green Line, not a specific generation.
- **Independent trade-press corroboration.** Source: EE Times Taiwan
  (電子工程專輯), `台中捷運藍線採用CBTC無人駕駛系統　阿爾斯通負責號誌建置`,
  2025-04-17, `https://www.eettaiwan.com/express/alstom_cbtc/`, SECONDARY,
  Medium confidence — directly attributed to Alstom's release and a named
  Alstom executive, checkable against and consistent with the primary
  above. States "Urbalis系統目前已應用於台中捷運綠線." No GoA number stated.
- **GoA4 is stated for the Blue Line specifically, not the Green Line.**
  Source: 自由時報, `中捷藍線採無人駕駛 尖峰最短班距90秒`, 2026-04-27,
  `https://news.ltn.com.tw/news/life/breakingnews/5417489`, SECONDARY,
  quoting 捷運工程局局長蘇瑞文 by name and title. States GoA4 for the Blue
  Line; separately notes the Green Line is driverless without repeating
  or extending the GoA4 label to it. Checked specifically because an
  earlier automated summary implied the two lines share a grade — that
  sentence appears in no source fetched in full and is not carried
  forward.
- **On-board attendants confirmed for the (driverless) Green Line.**
  Source: 中央社 (CNA), `乘客質疑吊臂掉落列車仍啟動 台中捷運：獲通報與撞擊時間太接近`,
  2023-05-10, `https://www.cna.com.tw/news/asoc/202305100384.aspx?topic=4206`,
  SECONDARY, quoting named TMRT spokesperson 許泰銘. States every
  driverless train carries an on-board attendant and that the train front
  carries a track-obstacle-detection system, in the context of a crane-arm
  collision. Circumstantial evidence against a GoA4/unattended
  classification, but no source draws that conclusion explicitly.
- **No formal GoA number for the Green Line was found in any source
  checked**: TMRT's own FAQ and Train Introduction pages (both re-checked
  in full this pass), 168.motc.gov.tw (2018, quoting the city
  transportation-bureau director), two 2018 news articles (自由時報,
  newtalk.tw) covering the CBTC system's trial run, and zh.wikipedia's
  raw wikitext for both the line and its EMU article. Confirmed absent
  from everything checked, not merely unsearched.

## Conflicts found

- **Product-generation naming precision**: Alstom's release supports
  "Urbalis CBTC" (family) for the Green Line but does not commit to a
  specific generation string; EE Times Taiwan's paraphrase compresses this
  to plain "Urbalis." Neither source names a generation for the Green
  Line specifically. Reported as a naming-precision gap, not a numeric
  conflict — "Urbalis CBTC" published, specific generation left TBC.
- **GoA level, stated for one line, silent for the other**: the Blue Line
  is explicitly GoA4 per the bureau's own director (2026); the Green Line
  has no GoA number in any source, and the on-board-attendant fact is
  circumstantial evidence the two lines may not share a grade. Not
  resolved — the Green Line's grade remains TBC on the content page.

## Checked and failed

- **`www.taichungmetro.gov.tw`, `www.taichungmetro.com.tw`,
  `www.mrt.taichung.gov.tw`** — checked 2026-08-29, all DNS resolution
  failures; not TMRT's or the bureau's actual domains (`tmrt.com.tw` and
  `tcrt.taichung.gov.tw` are correct).
- **CTCI's own Green Line contract page**
  (`https://ctci.com/www/ctci2022/page.aspx?L=CH&C=0104`) — checked
  2026-08-29, 302-redirected to an error page; CTCI's own confirmation of
  its consortium role beyond the bureau's page was not reachable.
- **A government official-travel report PDF** plausibly containing a
  subsystem-to-firm breakdown (hosted at data.taipei, found via a search
  snippet mentioning "驗證數位無線電系統之功能") — checked 2026-08-29,
  WebFetch's text extraction returned garbled/binary content, and the
  Read tool's page-image fallback failed with "pdftoppm is not
  installed"; this scout had no Bash tool to attempt the project's
  documented `pdftotext` workaround. Stated gap, not confirmed absent —
  this PDF may contain exactly the missing firm-to-subsystem detail.
- **A bureau FAQ entry titled "臺中捷運機電系統工程得標廠商為何？,"** found via
  a search snippet — checked 2026-08-29 at two guessed URL/parser-code
  variants, both returning the bureau's own "查無資料" (data not found)
  page. Correct URL not found.
- **`web.archive.org`** — checked 2026-08-29, refused categorically by
  the fetch tool in this environment.
- **General web search (Bing, DuckDuckGo, Marginalia)** — checked
  2026-08-29, unusable (mismatched cached content, CAPTCHA, unhelpful
  redirects); WebSearch tool budget was exhausted before this pass's
  first query. Only Brave's HTML results page returned genuine,
  checkable leads, used strictly to find URLs subsequently fetched in
  full.
- **A Brave search for a TMRT primary page describing the on-board
  attendant's role and authority** (`site:tmrt.com.tw 隨車站務員`) —
  checked 2026-08-29, HTTP 429 rate-limited before returning results.
  Not chased further.

## Stated gaps

- The specific Alstom Urbalis product generation for the Green Line (as
  opposed to the confirmed family name) — would be settled by a Green
  Line-specific Alstom technical/marketing page, if one exists, or the
  unread government travel-report PDF above.
- A formal GoA classification for the Green Line itself — would be
  settled by a bureau or TMRT primary source that states one directly,
  which none of the sources read for this or the prior research pass do.
- Whether the on-board attendant's role includes manual driving/braking
  authority (bearing on GoA3 vs. GoA4) — not stated by any primary TMRT
  source found; the only evidence is a CNA quote of a spokesperson
  responding to an incident, not a role-description page.

## Where the prior corpus held up

No prior `docs/research/` file existed for this subject. The existing
content page's own citations (`tmrt-faq`, `cj900-bureau-record`) were
re-verified by independent re-fetch and check out exactly as previously
stated — nothing in the existing page needed correction. The findings
above are additive (a signalling product name, GoA context, the
on-board-attendant fact), not corrective.
