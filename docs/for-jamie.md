# For Jamie

## Active handoff - Run 299 - 28 August 2026 - long autonomous brief in progress

Parts 1-2 done (290-291). Part 3's per-operator content-gap sweep: TYMC
(293), TRA entries (292, 297), ferries (294), THSR (295), Taipei Metro
(296), TMRT (298), Alishan Forest Railway (299) - rolling stock and a
full ridership decade, the last gap this pass's audit found. Cable/
Maokong checked too and found already well-covered inline.

Run 299 caught a Wikipedia citation that doesn't hold up (a train's
claimed launch date, sourced to a CNA article that on fetch doesn't
mention the train) and surfaced a real conflict with the site's own
earlier content - two operator pages giving different years for the
same repairs. Neither overwritten; both published as a stated conflict.

Now twice: a scout flags a primary PDF its own tools can't read;
fetching it directly with curl/pdftotext in the main session unlocks it
- this time, ten years of ridership no operator page states as one
number anywhere.

Process notes: a read-only fork once ignored "no write/commit/push".
`gate:full` runs every 10th commit (44% faster after a fix) - this is
commit 5 of 10 since the last one.

Detail in docs/run-log.md Runs 290-299.
