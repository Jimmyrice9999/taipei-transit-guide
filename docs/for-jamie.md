# For Jamie

Written 6 August 2026, updated after run 6.1 — your decisions on the run-6
items are executed. Assume you read this and nothing else.

The one-line version: **the site has photographs, working CI, an entity graph
with auto-linking, and one featured original article on the front page.**
Suite: 177 tests green, claims ratchet at 32, full verify passing.

## Your decisions, done

- **1 — the 57 KB stays.** Recorded in run-log §6.1. The Chinese quotations
  are the evidence; the weight is their cost. Closed.
- **2 — second archive (your call, overruling my recommendation).** The
  schema now carries `snapshotAlt:`, rendered as a "mirror" link beside
  "archived". You were right about the reasoning: 民報 died mid-run.
  **Caveat on execution:** archive.today rate-limits automation brutally,
  and the four blocked-origin captures may not all have landed this run —
  `npm run archive` is now a committed command that reports what is missing
  and retries both services with polite pacing. Run it occasionally; that is
  decision 2's "keep retrying" as a tool rather than a habit. If it keeps
  refusing, one manual visit to archive.today per URL settles it in a
  minute each.
- **3 — the judgment.** Corrected in the log: the 2005 Supreme Court civil
  judgment is retrievable FREE via 司法院法學資料檢索系統 — no purchase.
  The only actual purchase on the follow-up list is 商業周刊 445.
- **Home page** — the Matra article is featured: one card above the section
  listing, with its photo and CC credit. Not a redesign.

## Open items, in order of value

1. **Fetch the judgment** (yours, free, above) — it moves the article's
   whole litigation section to primary sourcing.
2. **Station photographs** — 3 of 24 station pages have them (BR10, BR13,
   BR24). The pipeline is one command per image: find a file on Commons,
   `npm run image -- "File:X.jpg" stations/br0N`. The licence gate and
   budgets do the rest.
3. **The entity backlog is generated, not maintained**: `npm run entities`
   currently lists Losheng Sanatorium, 三峽機廠, Lyon Metro, VAL206 as
   named-but-pageless. The Losheng history article is the strongest next
   piece of original work after the Sanying page.
4. **Sanying follow-up on 1 September** — the free trial ends 31 August;
   the page was written to be updated rather than rewritten when charging
   begins.

## Standing cautions

- The deployed site only catches up when you push — everything above is
  local until then, and the push should finally go green end-to-end after
  the run-5.1 CI fixes.
- The claims ratchet is at 32 and the baseline is committed; new prose with
  years/figures needs citations or TBC phrasing, which is now demonstrated
  across 23 scope pages if you want the pattern.
