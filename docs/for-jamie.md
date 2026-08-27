# For Jamie

## Active handoff - Run 284 - 27 August 2026

Run 284 adds KRTC fare history, the parallel to Run 283's TYMC page. Nine
KRTC ticketing pages fetched directly (site redirects to a different URL
pattern than guessed). Concessions: social-welfare 50%, group (10+) 80%,
school groups (20+) 50% weekdays-only, bicycle NT$100/80. Time passes with
real dated NT$ figures: 24h/48h unlimited NT$180/280; QR day passes
NT$150-325 effective from 1 January 2024; MeN Go multi-modal pass
NT$299-499 (physical) / NT$199-399 (QR) for 24/48/72h, operated by a
separate company KRTC sells on commission. TPASS x MeN Go has no price on
KRTC's own page.

Same confirmed gap as TYMC: KRTC's own single-ticket page states price
follows a chart posted physically at station machines — not reproduced as
text anywhere on the site. Both operators now carry this as a specific,
source-confirmed gap rather than an unexplored one.

Full local validation across Runs 279-284 (KRTC/TYMC depots, TMRT
tech+rolling-stock, TMRT facilities+operations, KRTC Yellow Line, TYMC
fares, KRTC fares): `gate:fast` clean every time, `gate:full` clean
against a fresh build every time. Audit JSONs restored each time, not
committed. `probes/` remains untracked.

CI note from Run 282 (last checked, not polled since): commit faa1ade1's
(Run 278) "Tests" job was stuck in_progress well past normal duration and
wasn't auto-cancelled by later pushes unlike other commits — unresolved,
outside what's fixable from this session.

Next: TMRT fare history (the third parallel), or continuing the brief's
remaining Parts (TOD, interactive features) across any operator.
