# For Jamie

Written 11 August 2026, after run 11.2. Scope was Parts 7 and 8 only, by
instruction. Assume you read this and nothing else.

## Green

`npm test` 183/183 (four new), `npm run verify` clean — 0 broken links, a11y 0
errors, 18/18 fact cross-checks, 0 contrast failures, claims steady at 32.
`npm run verify:browser` clean. Screenshot pass done at 375 / 768 / 1440 /
1920 / 2560; I looked at all of them.

## Part 7 — you were right and I was wrong about where

The principle I argued twice was fine. I was applying it to the wrong pages.
`/rail/lines/` — the index of the ten things on this site that most obviously
have a colour, sampled from government data, with their contrast working
published on their own page — was ten black headings on white. Same for
rolling stock, depots and `/rail/`. That is not restraint, it is a lookup
table the site refuses to use.

Every index row now carries a 5px rule in its line's official colour, a code
badge, and the line name in words. Strip the colour and the row still reads —
that is the actual test, and it passes. Also coloured: the nav dropdown's
Lines column, interchange badges on `/rail/stations/`, and the palette on the
`/data/` card that describes the palette.

**Two lines had a colour and weren't using it.** Danhai and Ankeng had no
`line:` in their frontmatter, so V and K accented nothing. Fixed.

## Part 8 — both diagrams now say what they are, above themselves

The elevation profile and the numbering ladder had the same bug: the picture
was correct, and every word explaining it was in a caption underneath. Nobody
scrolls past a picture they can't identify to find the legend. Both now open
with a heading and one plain sentence. The profile also draws the ground —
that single change is what makes a tunnel read as a tunnel rather than a
short bar floating in white space.

**Line icons exist now.** The front of each line's own train: tyres and guide
bars for Wenhu, a pantograph for the two tramways, a full-width front window
where the line is driverless. Attributes live in `lib/line-character.ts` with
the on-site source for each; the one inference (steel wheel as the heavy-metro
default) is written down in that file rather than hidden in the drawing.

## Three decisions I'd like you to know about

1. **The formation diagram is missing from five fleet pages because those
   fleets have no sourced formation.** C301/C321/C341/C371/C381 all say in
   their own prose "nothing numerical is asserted on this page". I made the
   drawing visible where it does exist (roof, bogies, rail) and left the five
   blank. Filling them is a Part 5 research job, not a design job.

2. **Sanying is now the only colourless row on `/rail/lines/`.** Its TDX file
   contains one record, the Circular Line — there is no LB colour to derive.
   That's Part 9. I didn't hand-add it, because that would change every line
   count and length bar as a side effect of a colour change.

3. **I found a false claim while auditing badges.** Six depot pages were
   printing "Joins the line at R02, R03, … R28, R22A" — twenty-seven junctions
   for one depot — because a depot with no declared `spine:` inherited the
   fleet default of "every station". Third time this class of bug has landed
   on the depot pages. Now reads "Junction with the line not recorded".

## Screenshots — three

1. `docs/screenshots/r11-rail-lines-1440.png` — the colour change. Compare
   with `b4-rail-lines-1440.png`, same page an hour earlier.
2. `docs/screenshots/d2-rail-lines-wenhu-line-2560.png` — the elevation
   profile with ground, labels and its explaining sentence.
3. `docs/screenshots/zoom-icons.png` — the line icons at 4×, so you can see
   what each one is claiming.
