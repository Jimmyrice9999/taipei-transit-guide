# Handoff

Run 316 (5 September 2026) was a research, architecture and visual-design audit,
not implementation. No speculative production content or broad redesign was made.

Reports: `docs/taiwan-public-transport-coverage-audit.md` and
`docs/code-ui-architecture-audit.md`; detailed evidence and gates are in `docs/run-log.md`.

National headline: the 1,051 bus corpus is Taipei/New Taipei, not nationwide;
city buses, DRT, bike systems, ferries, domestic-air route families and terminals
are the main gaps. Alishan current status needs conflict-aware correction.

UI headline: keep the static Next.js/Markdown/TDX architecture and proven joins,
nav, locale and accessibility fixes; adopt an editorial wayfinding atlas direction.

Recommended next run: build the 22-jurisdiction source-backed registries first,
then bus/intercity/DRT/bike/ferry/air layers, followed by shared title/facts/table
and discovery improvements. Do not stage generated PDFs, screenshots, probes or `.unsnooze/`.

Baseline before this run: `HEAD=origin/main=7a53e39d`; final commit and clean-status
proof are in the closing log entry. CI remains unknown: `gh` is unavailable and
the direct GitHub Actions API is blocked. Exhaustive browser verification was not run.
