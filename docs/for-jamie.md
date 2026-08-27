# For Jamie

## Active handoff - Run 279 - 27 August 2026

Run 279 adds maintenance-depot pages for both KRTC and TYMC, completing the
same four-section (technology/rolling-stock/facilities/operations) structure
for both operators that TRA already has. Also lands a genuine new primary
finding for TYMC signalling: a 2013 High Speed Rail Bureau annual report
names the Airport MRT's original signalling system as WESTRACE (interlocking)
+ CBTC-EP (train control) — a real, checkable product name, distinct from
the three unconfirmed Wikipedia-infobox labels, which stay unconfirmed.

KRTC: three named depots (South 26ha/Level 3/HQ+OCC site, North 34ha/Level
3/RK1 power interconnect, Daliao 54ha/Level 5/main repair), plus the
Circular Light Rail's own depot (named only "輕軌機廠" by the government
primary source). Two conflicts published against zh.wikipedia (Daliao area,
North Depot district count).

TYMC: same 2013 report also covers Qingpu Depot (HQ + operations control
centre, 98.06% complete by end-2013, fleet-delivery point) and Luzhu Depot
(trailing on every 2013 measure, 82.36% complete). Neither depot's site
area in hectares was found anywhere, including TYMC's own site (404s).

Full local validation: `gate:fast` clean, `gate:full` clean against a fresh
build (234/234 tests, facts, research, geometry:audit, a11y) after fixing
two spec `unit:` formatting bugs the full suite caught and `gate:fast`
structurally can't. `probes/` remains untracked; audit JSONs restored.

Next: extend TMRT (Taichung Metro) with the same technology/rolling-stock/
facilities/operations structure — it currently has only lines+stations,
the state TRA/KRTC/TYMC were all in before this session's work.
