# Kaohsiung Metro signalling, train control and automation grade — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. `docs/research/rail/krtc.md` is the only prior KRTC lead file; it explicitly lists signalling as unaddressed TBC, so nothing here contradicts it.

This is a one-subject report on Kaohsiung Metro's train-control systems.
`content/rail/krtc/` currently has only `lines/` and `stations/`, so this and
its companion rolling-stock page are new ground, not duplicates.

## What is established

- **The original Red and Orange Lines (opened 2008) run with drivers: automatic running between stations, but the driver manually operates door closing and departure and can intervene or brake in an emergency; there is no trackside foreign-object-detection system because a driver is present to react.** Source: Kaohsiung Rapid Transit Corporation, `高雄捷運營運安全措施說明` (Kaohsiung Metro Operational Safety Measures Explanation), `https://www.krtc.com.tw/Information/news_more?id=a1e62008f2ba41828481b5fa9d7797e5`, PRIMARY, High confidence — full operator page, published 2023-05-12. Original-language basis: `站間行駛是採自動駕駛，但若遇軌道突發情況，司機員可以隨時手動介入或緊急停車`; `站間軌道及列車並無異物偵測裝置，主要因為有司機員，所以緊急狀況，都可以由司機員先緊急停車`. This description matches the standard industry definition of GoA2 (semi-automatic train operation), but no source read for this page uses the term "GoA" for the Red/Orange Line — that mapping is this page's own characterisation, not a quoted classification, and is stated as such.
- **The Gangshan–Luzhu Red Line extension's signalling is supplied by Siemens (Germany) and is track-circuit based specifically because it extends the existing Red Line — not a newer overlay technology.** Source: Kaohsiung City Government MRT Engineering Bureau, Systems Engineering Section, `岡山路竹延伸線號誌系統架構簡介`, `https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&id=34535d04-df4c-4b1f-a609-da31e86d91d0&PageType=1`, PRIMARY, High confidence — full page fetched, published 2023-04-26. Original-language basis: `岡山路竹延伸線號誌系統由德國西門子公司提供`; `鑑於是既有捷運紅線的延伸，故採軌道電路`. This is the clearest available evidence that the Red/Orange system itself is track-circuit/interlocking based, not CBTC.
- **The extension is built in three stages, each adding a signalling equipment room with a station-level interlocking system (at RK1, RK4, RK8), and the new wayside equipment between the existing terminus R24 and new station RK1 is added by expanding the existing R22 signalling equipment room's interlocking to also cover RK1 — i.e. by extending the existing Red Line's own interlocking architecture.** Same source, PRIMARY, High confidence. Original-language basis: `3個階段分別於RK1、RK4、RK8車站設置號誌設備室並配置聯鎖系統`; `R24到RK1的軌旁設備組件由R22號誌設備室聯鎖系統擴充並連接RK1的號誌設備室進行聯鎖控制`.
- **The under-construction Yellow Line will be Kaohsiung's first driverless metro, using Siemens Mobility's Trainguard MT CBTC signalling with GoA4 across the full 22.8 km route, 23 stations and 25 trains, plus the Airlink radio system for wayside/onboard communication.** Source: Siemens Mobility, press release, `https://press.siemens.com/global/en/pressrelease/siemens-mobility-provide-cbtc-signaling-first-driverless-metro-system-kaohsiung-taiwan`, PRIMARY (the equipment supplier, about its own contract), High confidence, full page fetched, published 2022-10-07. Original-language basis (English release): "CBTC signaling system and GoA4 operation to be implemented across a 22.8 km route, at 23 stations, and on 25 trains"; "GoA4 functionality will allow for full automated driverless train operations". A joint venture of Siemens Mobility, ST Engineering Electronics and Stadler Rail received the E&M turnkey contract (YM01).
- **A Kaohsiung MRT Engineering Bureau primary page separately confirms the Yellow Line's driverless operation directly, without using the "GoA4" numeral.** Source: `高雄黃線電聯車系統之機電設備簡介`, `https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&id=e7693a8c-cf09-4548-97bb-b2c4418e1be9&PageType=1`, PRIMARY, High confidence for the driverless-operation fact; the GoA4 numeral itself is not present on this specific page. Original-language basis: `可以無人化自動控制模式下自動駕駛`.
- **YM01's evaluation was reported completed 17 August 2022, budget approximately NT$43.499 billion, won by the Siemens/ST Engineering/Stadler joint venture, per an on-the-record quote from the Bureau's own director.** Source: 工商時報 (Commercial Times), republished via Yahoo, `https://tw.stock.yahoo.com/news/高捷黃線機電工程-德西門子等團隊得標-201000863.html`, SECONDARY (news, but carrying a direct named-official quote), Medium-High confidence, full page fetched.
- **Secondary reporting attributes the same claim ("all of Red/Orange, the light rail and both extensions are driver-operated systems") to the Bureau directly, though the Bureau's own original statement was not independently located and read.** Source: NOWnews, `高捷黃線也是無人駕駛 高市：僅1.15公里為高架段`, `https://www.nownews.com/news/6138063`, SECONDARY, Medium confidence, full page fetched.

## Conflicts

- **YM01's award/decision date:** 17 August 2022, "evaluation completed" (工商時報, quoting the Bureau director directly, fully fetched) versus 26 August 2022, "formal award decision" (found only in an unverified search summary, not independently fetched). These may describe two different procedural steps rather than a true contradiction; both are recorded, neither is picked.
- **Sourcing precision on the "GoA4" label for the Yellow Line:** confirmed directly by the equipment manufacturer (Siemens) and, via a two-step-removed chain (news, citing a Facebook repost, citing the Bureau), by 自由時報; the Kaohsiung MRT Engineering Bureau's own primary pages fetched for this report confirm driverless operation in prose but do not themselves use the string "GoA4." This is a sourcing-precision gap, not a substantive conflict — the fact (driverless) is well established; the specific classification numeral rests only on the manufacturer and indirectly-sourced press coverage.

## Checked and failed

- **Railway Gazette International, "Kaohsiung E&M contract signed" (2001-09-01)** — checked 2026-08-27, `https://www.railwaygazette.com/news/single-view/view/kaohsiung-eampm-contract-signed.html`, HTTP 403 Forbidden. This is zh.wikipedia's cited source for an original 2001 Siemens signalling/EMU/power contract; the claim could not be verified against it and is not published as established here.
- **工商時報, on the Gangshan–Luzhu extension's electromechanical-contract award (2021-12-09)** — checked 2026-08-27, `https://www.chinatimes.com/realtimenews/20211209004180-260410`, HTTP 403 Forbidden. Available only via an unverified search summary; not published as established.
- **Two Kaohsiung MRT Engineering Bureau Yellow Line route/progress pages** (`.../yellow01.html`, `.../yellow03.html`) — checked 2026-08-27, fetched successfully but contained no signalling, contractor or automation-grade content; ruled out as citations for this subject.
- **A web.archive.org snapshot attempted for a 自由時報 article** — checked 2026-08-27; `web.archive.org` fetches are blocked in the tooling used. The live news.ltn.com.tw URL was fetched successfully instead, so the underlying claim was still checked.
- **KRTC's corporate site (corp.krtc.com.tw)** — checked 2026-08-27, fetched; contains no direct technical/signalling content beyond a job listing confirming KRTC directly employs signalling-maintenance staff (`號誌維修技術員`), not itself a technical source.

## Stated gaps

The Red/Orange Line's signalling system has no confirmed product/model name
in any source read — only that it is Siemens-supplied, track-circuit based,
with at least one confirmed interlocking room (R22). Whether it formally
meets the GoA1 or GoA2 definition is not stated by any primary KRTC or
Bureau source; this page does not apply a GoA numeral to Red/Orange beyond
noting the operational description matches GoA2's usual definition. No
resignalling or upgrade history for the original Red/Orange system since
2008 was found — nothing indicates it has been replaced or upgraded to
CBTC, but this is recorded as "not found," not "confirmed absent," since a
targeted search of KRTC annual reports or audit records was not performed.
The original 2001 Siemens contract's exact scope and value rest only on an
unverified Wikipedia citation to a source (Railway Gazette) this page could
not fetch.

## Update, 29 August 2026 — vendor self-confirmation, extension subsystem detail, a dead citation

- **Siemens Mobility's own Yellow Line press release** (already cited)
  re-read closely: states directly that Siemens Mobility itself
  "previously delivered" Red/Orange, in service since 2008 — the
  manufacturer's own confirmation of the original-system vendor, not just
  an inference from the extension contract.
- **MTBU Gangshan-Luzhu signalling architecture page** (already cited),
  re-read for more depth: confirms wayside ATP data exchange with the
  interlocking, and states the extension updates named existing Red Line
  subsystems (OCC/local operation workstations, R22 interlocking,
  timetable-building system) rather than adding a standalone overlay — as
  of the page's 2023-04-26 publication, the project was at mid-stage
  detailed design.
- **MTBU Yellow Line EMU electromechanical page** (already cited), re-read:
  states each train's two motor-end cars carry a manual driving control
  area despite the fleet's stated unmanned-automatic capability. Does not
  say when the manual position is used.
- **zh.wikipedia, 高雄捷運紅線**, SECONDARY, lead only. Gives BOT-consortium
  narrative context (China Steel/Siemens-led team beat Alstom- and
  Bombardier-led rivals; contracts signed 12 January 2001) — not
  independently corroborated against a primary this pass.
- **The existing YM01 budget citation (Yahoo/Commercial Times) is now
  dead** — re-checked 2026-08-29, the URL returns HTTP 404. The figure is
  retained on the content page as previously sourced, flagged as
  citation-rot rather than silently dropped or silently re-verified. A
  second figure zh.wikipedia attributes to a 自由時報 article (NT$43.399bn,
  vs. the existing NT$43.499bn) also failed verification — the LTN URL
  fetched clean but contains no matching cost figure anywhere in its text.
  Neither figure should be treated as currently sourced; both are recorded
  as an open conflict, not resolved.

### Checked and failed (this pass)

- `https://corp.krtc.com.tw/About/history` — WAF/CDN access-denial page,
  not content.
- `https://mtbu.kcg.gov.tw/Home/gangshanluzhu` — guessed URL, HTTP 404.
- Railway Gazette International's 2001 contract report — still HTTP 403;
  retried via web.archive.org, which the fetch tool refuses entirely in
  this environment.
- `https://tw.stock.yahoo.com/news/高捷黃線機電工程-德西門子等團隊得標-201000863.html`
  (existing YM01 citation) — now HTTP 404, previously live.
- `https://news.ltn.com.tw/news/life/breakingnews/4028557` (zh.wikipedia's
  cited source for a second YM01 figure) — fetched clean but contains no
  cost figure anywhere in its text; a wiki-citation check that failed.
- WebSearch — exhausted before this pass's two queries could run.
