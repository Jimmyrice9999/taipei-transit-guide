# For Jamie

## Active handoff - Run 287 - 27 August 2026

Run 287 adds TYMC's TOD/joint-development page, the second of a planned
set alongside Run 286's KRTC page. Genuine cross-city finding: Taoyuan's
programme is now called "捷運土地開發" but was formerly "聯合開發" — the
exact term Kaohsiung's programme still uses as its current name. Same
central legal basis both cities cite (Mass Rapid Transit Act + Land
Development Regulations), plus nine Taoyuan-specific implementing
instruments.

Both KRTC's and TYMC's case-list pages (the actual project examples)
remain unread, for two different reasons: KRTC's is JavaScript-rendered,
TYMC's DORTS site genuinely timed out across three attempts (60s/90s/150s)
— a real fetch failure, not a tooling gap on a working page. Both pages
document the mechanism only, no concrete project example yet.

Full local validation across Runs 279-287 (9 commits this continuation):
`gate:fast` clean every time, `gate:full` clean against a fresh build
every time. Audit JSONs restored each time, not committed. `probes/`
remains untracked.

CI status unchanged since Run 286's check — not re-polled this run per the
no-looping rule.

Next: TMRT's own TOD page (completing the three-operator set, matching
the fare-history pattern), or continuing other Parts of the brief.
