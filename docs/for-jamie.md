# For Jamie

Written 7 August 2026, after runs 7.1–7.3. Assume you read this and nothing else.

**CI run #10 is fixed, and the cause is worse than a broken build: the
unsourced-claim count was platform-dependent and always had been.** The same
commit measured **31 on Windows and 34 on Linux**. Every baseline this project
has recorded — 34 → 33 → 32 → 31 — was a Windows-only number, and CI has been
comparing a Linux measurement against it the whole time, passing because the
margin was wide. Run 7.2 tightened the baseline to 31 and closed it. Full
account in run-log §75.

The honest count is **32**, recorded with the reason in the baseline file. It did
not go up because the site got worse; it went up because the counter started
working. Two of the three claims the bug was hiding were citable and are cited.

## Where I have to correct you

**Decision 1, the tunnel. Your conclusion is right and both your reasons are
wrong.** The two sources do not use the same 北側 construction — DORTS says
「穿越**辛亥隧道北側**接和平東路」, zh.wikipedia says 「穿越福州山隧道**後**」,
*after passing through*. And 麟光站 does not mention 福州山隧道 at all; the string
is not on the page. (富陽自然生態公園 is, in Exit 1's list — a different landmark.
There is no 福州山隧道 article either; the URL 404s.) You told me to verify that
listing before publishing, which is exactly why I found it.

The conclusion survives on something better: **DORTS says the Muzha section is
「全線以高架方式興建」, built entirely on viaduct.** Primary, unambiguous, and about
structure rather than about what the line passes near. A viaduct does not run
through a hill. The drawing is unchanged; the caption now makes that argument
instead of yours.

**Decision 2, the fleet arithmetic. Your hypothesis argues against its own
conclusion.** Moving a pair from Bombardier to Matra gives 52/100, which is
worse. Getting to 25 and 51 trains needs a pair moved the *other* way — out of
the Matra fleet and into a Bombardier train — which is a mixed train, the thing
the hypothesis was meant to rule out.

But the search turned up something that does rescue it: **zh.wikipedia says the
VAL256 runs 「非固定編組」, a non-fixed formation.** If pairs are re-formed in
maintenance, the two counts are just two things measured on different days and
there is no discrepancy at all. Not confirmed, so — as you instructed — the
arithmetic is now published openly on the line page with all three readings and a
note saying which one would make the page wrong.

Side effect worth knowing: 非固定編組 contradicts "permanently coupled pairs",
which the site said in three places. All three are fixed — see *the formation
claim* below.

## What confirmed, and what changed because of it

**Decision 3, two fires — confirmed verbatim**, including 「發生**第二次**火燒車
事件」. Both dates and the numbering are now on the Matra article and the line
page, framed as you put it: one fire is an accident, two is a pattern, and the
pattern is what makes the impeachments and the eight-year council refusal
explicable. It also closes the flag I raised last run — the September entry was
on 〈麟光站〉, not 〈木柵線〉, one article away from where I looked.

**Decision 9, both 麟光 details — confirmed and published.** First station
completed with two exits, fewest ticket machines on the network. They sit in the
exits section where they earn their place.

**Decision 9, the 1986 plan — half confirmed.** 八德路, 慶城街, 木柵公園 and
木柵國小 do not appear in 〈木柵線〉; I checked each string individually. What does
is better than nothing and is now a short section on the line page: a 13 km
scheme was already settled, **Muzha residents objected, and on 4 May the northern
section was moved onto Fuxing South and North Roads**. The earliest instance of
the pattern the site records twice more. The station cancellations may well be
real; they are not confirmed and are not published.

## The bus page, and what it cost

`/bus/network/joint-operation/` is written. **Four claims from the research died
on first contact**, including the two the corpus calls its best content:

- The number bands are **not geographic** — the better-sourced reading is fare
  segments and service type. Published as an unresolved disagreement, with the
  geographic bands deliberately *not* tabulated, because a table is an assertion.
- The feeder-colour table was **missing a line**: 橘 = O = Zhonghe–Xinlu. Five
  prefixes, not four.
- The trunk network is **八橫八縱, eight and eight**, not 19 routes.
- **The revenue-pooling model — the whole point of the page — is not described by
  the Public Transport Office.** It is in a "what this page does not yet say"
  section rather than published on a paraphrase.

The colour collision you and I both wanted is unsourced on two attempts and is
recorded as a gap. What is published is what survived, and the page says so.

## Decisions with nothing to argue about

**4** — eight dead references rewritten to point at the file and section each
claim now lives in. Nothing restored. **5** — noted, thank you. **6** —
framework at Version 1.1 with a standing staleness note, the ferry file
reclassified, the count corrected to 21, the queue rewritten. **7** — bus to
second, C341 off with the reason written into the framework rather than left in a
run log. **8** — `## Checked and failed` on four research files, nine claims
recorded, and `npm run research` enforcing a date, a reason, and that a dead
claim is not still asserted earlier in the same file. It found a bug in itself on
its first run, which is in the script's comments.

## Done since: the formation claim

It was in **three** places, not two — the third was the formation diagram's own
key, which printed "permanently coupled" on both fleet pages. An unsourced
assertion inside an illustration. The key now says "one unit", which is what the
notation actually encodes; the spec rows went from "Married pairs" to "Pairs" and
are re-sourced to DORTS.

**VAL256** now carries the non-fixed formation as the sourced position, marked
Medium, with the sentence that matters: it is the reading that rescues the
line-level arithmetic, *which is a reason to want it to be true and therefore a
reason to mark it carefully.*

**Innovia**: checked, and nothing says either way — 2M+2M and silence on
permanence. The page's old line ("nothing sourced indicates the two fleets
differ") was an argument from silence carrying an assertion nobody had made.
Both gone.

One thing worth knowing: `npm run facts` **refused my first draft** of that
paragraph, because I wrote "TRTC does not publish it" and the absence-register
rule requires naming the field looked for. Registering one would have been
nonsense — it is not a dataset field. The sentence was wrong in a subtler way,
and now says nothing searched *here* has answered it, which is a claim about this
site rather than about the operator.

Ratchet **tightened to 31**, one below baseline, with two new sections added.

## What still needs you

1. **What the Innovia's formation actually is.** Two fleets on one line, one
   described as non-fixed, the other described not at all. A TRTC maintenance
   document or an Alstom product sheet would settle it — and would settle the
   line-level arithmetic that depends on it.
2. **The trunk-bus colour claim** — best unwritten thing on the bus page,
   unsourced twice.
3. **How the bus revenue pool works** — the structural claim the section was
   built on.
4. **Read 〈木柵線〉 in full.** Two things this run wanted were in it or not, and a
   summarising read could not tell: the 1986 station cancellations, and whether
   the September fire is there at all.
5. archive.today still refuses automation (six URLs). Ten station pages still
   bare, shortlist at `docs/commons-candidates.txt`.

## Screenshots

`bus-1440-r71.png` is the new page. The five from last run still stand — the
section drawing, the numbering X, the station page, the lines index, and the
profile on a phone.
