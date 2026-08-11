# For Jamie

Written 11 August 2026, after run 10. Assume you read this and nothing else.

## Do not push yet — one test is failing, on purpose

`unsourced assertions have not increased`: **62 against a baseline of 32.**

All 30 new ones are on three pages written earlier in this session —
circular-line (19), bannan-line (10), tamsui-xinyi-line (1). Sourced statements
went 279 → 510 over the same change, so those pages are heavily cited; 30
sentences on them just are not.

**I did not raise `docs/claims-baseline.json`.** Doing that to make the suite
green is the one thing Part 14 rules out. Clearing it is half an hour of citing
or TBC-ing 30 sentences. Your call whether that happens before the push.

Everything else is green: build, links, a11y, citations (114, 57 primary), fact
cross-checks, palette, and the new nav check 9/9.

## The finding worth your time

**The light rail was never missing from TDX. We never asked for it.**

TDX does not file New Taipei's railways under one operator. `NTMC` returns
exactly one line — the Circular Line. Danhai is `NTDLRT`, Ankeng is `NTALRT`,
each with its own official colour. `scripts/fetch-tdx.mjs` had asked for three
operator codes since run 1.

The site is now **180 stations across 9 lines**, both new colours clearing AA.

**Sanying is a different case and is genuinely absent.** It opened 30 June 2026;
NTMC's TDX records were last updated at source on 23 May 2023. The network page
now says that rather than looking like an oversight.

Two consequences fell out:

- **R/V is the closest colour pair on the network in normal vision** (ΔE00
  12.5) — MOTC publishes two reds for two lines in the same region. Every line
  carries its code, so the mitigation holds, but you should know.
- **Ankeng broke the map's 12 m drawing tolerance** — K06 was displaced 83.7 m.
  Douglas–Peucker bounds how far *vertices* move, not how far a station beside
  a cut corner ends up. Simplification is now adaptive per line; the tolerance
  was not relaxed.

## Where I have to correct myself

I twice diagnosed a bug that did not exist, and both times the cause was
photographing something mid-animation or reading a URL mid-navigation. One
"fix" was reverted. `scripts/shots.mjs` now settles transitions before shooting
and `npm run nav` waits properly. Recorded because you have told me before that
I claim things about rendered output I have not actually looked at, and this is
the same failure wearing a different hat.

## Done

**Part 1** — all three layout bugs fixed and reproduced first at 1920/2560.
1920 and 2560 are permanent in the screenshot set now; the old 375/768/1440 set
could not have caught any of them, because 1440 is exactly where the 1140px
container still fills the screen.

**Part 3** — back control on all fourteen page types including the 404; nested
dropdown nav mirroring the hierarchy, opening on click/Enter/Space, working on
touch, never on hover alone; index prose moved below the links.

**Part 4** — line codes link everywhere (clicking "BR" on the network page goes
to the Wenhu Line), operators link from every facts panel, station pages link
line, interchanges, operator and depots. `npm run links` audits it: **85 → 4**,
and the 4 are correct as they are.

One thing it exposed: **38 station names are shared by more than one line**
("Daan" is BR09 *and* R05). The auto-linker resolves all of them to the Wenhu
page. The audit excludes them and prints the warning; I have not fixed the
linker.

## Not started

Parts 6 (photos beyond the 34 fetched), 7 (colour), 8 (diagrams/icons), 10
(station depth), 11 (photographed /rail index), 12 (performance), 13 (the
five-viewport sweep). Part 5's machinery is built — `/research-line`,
`.claude/skills/transit-research/`, `.claude/agents/line-researcher.md` — and 4
of 12 subjects are written. The other 8 died with the usage limit.

## Screenshots

1. `r10final-nav-rail-lines-wenhu-line-1440.png` — the dropdown, all seven
   groups reachable.
2. `r10e-rail-lines-wenhu-line-2560.png` — the line page at 2560: no stray
   brown rule, reading column centred, type scaled up.
3. `r10final-facts-rail-stations-br10-1440.png` — a station facts panel with
   line, interchange, operator and depots all live.
