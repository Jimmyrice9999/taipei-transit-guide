---
description: Research one or more Taipei-region transport subjects from primary Mandarin sources and write both the research file and the content page for each.
argument-hint: <subject> [more subjects…]
allowed-tools: Agent, Read, Write, Edit, Bash
---

Research the following subject(s) and write both the research file under
`docs/research/` and the content page under `content/`:

**$ARGUMENTS**

## One subject

Spawn a single `line-researcher` subagent with the subject. It fetches,
verifies, and writes both files itself. When it returns, run
`npm run cite && npm test` and report what changed.

## More than one subject

Do **not** spawn more than one `line-researcher` at a time — it writes to the
repo and to git, and two of them running concurrently is the exact failure
mode that once destroyed roughly 570 files when two agents each ran a
directory-wide `git checkout --`. Read-only fetching is safe to parallelise;
writing is not.

Instead:

1. **Spawn one `line-scout` per subject, all in a single message so they run
   concurrently.** Each subagent's brief must carry, verbatim:
   - Read `.claude/skills/transit-research/SKILL.md` first.
   - Fetch full pages, not search snippets.
   - Verify every secondary citation against the primary it claims to cite.
   - Report conflicts; never resolve them by picking.
   - TBC beats a plausible number.
   - `docs/research/` is leads only — verify everything against primary
     sources.
   - Return your findings as a structured brief (established claims with
     source/URL/kind/confidence/original-language sentence; conflicts;
     checked-and-failed; stated gaps) — you do not write any files.
2. **When they all return, write the files yourself, one subject at a time.**
   For each subject: write `docs/research/<path>/<subject>.md` and
   `content/<section>/<type>/<slug>.md` from that subject's scout brief,
   following the output contract in the skill (frontmatter, `sources`,
   `[^id]` citations, `value: TBC` for anything unsourced). Do this
   sequentially — one file pair, then the next — never in parallel, since you
   are now the one writer touching the working tree.
3. **Reconcile across subjects as you go.** If two subjects' findings disagree
   on a shared fact — a depot, a fleet, an interchange, a date, a length —
   that is a finding. Report it; do not silently prefer one.
4. When every subject is written, run `npm run cite && npm test` once and
   report what changed.
