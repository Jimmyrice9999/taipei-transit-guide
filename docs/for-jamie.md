# For Jamie

## Active handoff - Run 286 - 27 August 2026

Run 286 opens KRTC's TOD/joint-development coverage — the brief's TOD
subject had only a Taipei-only page before this. Legal basis (Mass Rapid
Transit Act Art. 7, Land Development Regulations), a stated
"合建分坪、利潤共享" three-party philosophy, and a 3-stage/7-step process
are all sourced from the bureau's own page. The bureau's own case-list
page ("土地開發案件基本資料") was located but is JavaScript-rendered — a
confirmed, not unsearched, gap, so this page documents the mechanism only,
no concrete example project.

Full local validation across Runs 279-286 (KRTC/TYMC depots, TMRT
tech+rolling-stock, TMRT facilities+operations, KRTC Yellow Line, TYMC/
KRTC/TMRT fares, KRTC joint development): `gate:fast` clean every time,
`gate:full` clean against a fresh build every time — 8 commits, all
pushed, none reverted.

CI status (checked once this run, not polled further): the earlier stuck
run on faa1ade1 (Run 278) resolved itself — eventually completed with
"success" after being stuck 1.5+ hours. A new stuck run appeared on
3c842f2b (Run 283) around the same check, not yet resolved as of the
check. This looks like a recurring but self-resolving GitHub Actions
infrastructure hiccup rather than a code problem, given faa1ade1's outcome
— worth a manual glance at the Actions tab but not urgent.

Next: TYMC or TMRT's own TOD/joint-development pages (parallel to KRTC's,
following the same pattern), or continuing the brief's remaining
interactive-features Part, or deeper KRTC Yellow Line gaps (depot name,
opening date) as sources surface.
