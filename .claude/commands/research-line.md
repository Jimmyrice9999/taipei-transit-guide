---
description: Research one Taipei-region transport subject from primary Mandarin sources and write both its research file and its content page.
argument-hint: <subject> [more subjects…]
allowed-tools: Agent, Read, Bash
---

Research the following subject(s) and write both the research file under
`docs/research/` and the content page under `content/`:

**$ARGUMENTS**

For each subject named, spawn one `line-researcher` subagent. **If more than one
subject is given, spawn them all in a single message so they run concurrently** —
one fresh context per subject is the entire reason this is a subagent and not an
inline task, and serialising them throws that away.

Each subagent's brief must carry, verbatim:

- Read `.claude/skills/transit-research/SKILL.md` first.
- Fetch full pages, not search snippets.
- Verify every secondary citation against the primary it claims to cite.
- Report conflicts; never resolve them by picking.
- TBC beats a plausible number.
- `docs/research/` is leads only — verify everything against primary sources.
- Write BOTH the research file and the content page.
- Return a short report: what was sourced, what stayed TBC, what contradicted
  the existing corpus, and every conflict found between sources.

When they all return, **reconcile**. If two subjects disagree on a shared fact —
a depot, a fleet, an interchange, a date, a length — that is a finding. Report
it; do not silently prefer one. Then run `npm run cite && npm test` and report
what changed.
