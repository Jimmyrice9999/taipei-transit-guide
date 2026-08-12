# For Jamie

Written 12 August 2026, after run 12.1. Scope was Part 9 only, by instruction.
Assume you read this and nothing else.

## Green

`npm test` 184/184, `npm run facts` 19/19, `npm run verify` clean, `npm run
verify:browser` clean. Screenshots at 375 / 768 / 1440 / 1920 / 2560; I looked
at all of them.

## The three things

**Branch lines.** `branchTint()` had been sitting in `lib/lines.ts` since run
11, documented, and called from nowhere. Xinbeitou, Xiaobitan, Luzhou and
Danhai's Kanding branch now draw as a pale core of the parent colour inside a
hairline of it. Finding the branch inside the geometry was the actual work —
TDX gives one alignment per line and never says which part is the branch — so
it's derived from which stations the branch route reaches that the trunk
route doesn't. The cut lengths come out at 1.13 / 1.97 / 6.34 / 1.40 km, which
match the real spurs.

**Light rail was already done** — run 10 put Danhai and Ankeng on the map and
in the length bars. I verified rather than rebuilt.

**Sanying's colour: `#48B6D2`, and it isn't PANTONE 637C.** See below.

## Three decisions I'd like you to know about

1. **I could not confirm PANTONE 637C anywhere.** Not the operator's site, not
   the New Taipei rapid transit bureau's Sanying page or its CIS page, not
   either Wikipedia — all of them say only 淺藍色, light blue. And the
   third-party PANTONE→sRGB converters disagree with each other (`#4EC3E0`,
   `#4DC5E2`, `#42BFDF`, `#48A8D0`), so even trusting the designation would
   mean picking one of four. What I used instead is the operator's own LB line
   mark: a lossless PNG on their own Sanying station page, whose ring is a
   third of the image and one exact value. That's the same kind of thing a
   `LineColor` field is. The conflict is published on `/data/line-colours`
   rather than resolved by me choosing.

2. **A derived tint cannot clear contrast on this network, and I stopped
   pretending otherwise.** Every branch tint lands under 3:1 on the map's
   paper, and no tint amount fixes it, because Zhonghe–Xinlu's *own* colour is
   1.90. The trunk stroke keeps the "essential presentation" exception — it's
   the operator's published colour and changing it would misreport the source.
   A tint we invented gets no such exception, so it carries its own ink
   hairline. That distinction is the whole design.

3. **`needsHairline` has been computed since run 5 and drawn by nothing.** A
   test asserts it, `npm run palette` prints it, no component reads it. So the
   Circular Line's length bar has been shipping at 1.19:1 against white. Fixed
   while I was in there; three bars change, seven don't.

Also: adding a tenth line moved counts on `/about`, `/data`, `/data/stations`,
`/data/line-colours`, `/rail` and the 404. All handled, all now derived rather
than typed, and two new build-time guards stop the Sanying figures and the
"not on TDX" claim from going stale silently. `/data/stations` turned out to
have been saying "seven lines and three operators" since run 10.

## Screenshots — three

1. `docs/screenshots/lineb-rail-lines-tamsui-xinyi-line-1440.png` — the
   Xinbeitou branch. This is the picture the whole of Part 9's first item was
   about.
2. `docs/screenshots/p9tab-rail-network-1440.png` — the lines table, with
   Sanying's row, its daggered operator figures and its length bar, and the
   Circular Line's bar now visible.
3. `docs/screenshots/p9-rail-network-1440.png` — the page as a whole, so you
   can read what the summary now claims and what it no longer claims.
