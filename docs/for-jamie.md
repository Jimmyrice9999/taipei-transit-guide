# Handoff

Run 315 — 5 September 2026. Part 0 reverified `02a94b74` and fresh
`npm run adversarial`: 16/16 cases behaved as specified.

Part 1 inventory: KRTC 88, TMRT 26, TYMC 52, TRA 269, THSR 19; 60 bus
routes, one bus operator and one bus model were under 400 words. Full queue
breakdown and checked/left-alone reasons are in `docs/run-log.md`.

Part 2 added sourced depth to 16 TYMC Green Line stations, all 22 Airport MRT
station pages, Shiding community-bus operations and the King Long model.
The 60 short bus routes were checked against their attached full primary
source sets and left unchanged where no new route-specific fact survived.

Local commits: `3e8c0ae3` contains the content/research batch; the gate and
handoff record is being committed next. Do not stage generated audits,
screenshots, PDFs, `.unsnooze/`, or `probes/`.

CI could not be confirmed from this machine: `gh` is unavailable and the
direct GitHub Actions API is blocked. No browser full verification was run.
