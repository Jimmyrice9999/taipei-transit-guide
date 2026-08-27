# For Jamie

## Active handoff - Run 285 - 27 August 2026

Run 285 completes a three-run fare-history sequence (TYMC, KRTC, now
TMRT) — all three non-Taipei Taiwan metro operators now have a fare page.
TMRT's was the richest: concessions (senior/disability 50%, group 80%,
bicycle/double-bass NT$70 each), day/hour passes (NT$120-380 across
several tiers), and a genuine standout — Taichung's senior card carries a
monthly points subsidy (NT$1,000, NT$1,500 for Indigenous cardholders)
stacked on top of its 50% concession, and a four-tier regional 30-day
season pass spans Taichung/Changhua/Nantou/Miaoli with real
residency-based pricing (NT$299-999).

The headline cross-operator finding, now confirmed three separate times:
none of TYMC, KRTC or TMRT publish a base single-fare figure as static
text anywhere on their own sites — all three defer to either a physical
chart or a JavaScript-rendered fare-query tool. This is reported
explicitly on all three fare pages as a shared structural pattern, not
three unrelated gaps.

Full local validation across Runs 279-285 (KRTC/TYMC depots, TMRT
tech+rolling-stock, TMRT facilities+operations, KRTC Yellow Line, TYMC
fares, KRTC fares, TMRT fares): `gate:fast` clean every time, `gate:full`
clean against a fresh build every time. Audit JSONs restored each time,
not committed. `probes/` remains untracked.

CI note from Run 282 (last checked, not polled since): commit faa1ade1's
(Run 278) "Tests" job was stuck in_progress well past normal duration and
wasn't auto-cancelled by later pushes unlike other commits — unresolved,
outside what's fixable from this session. Worth a manual look at the
Actions tab.

Next: continuing the brief's remaining Parts (TOD, interactive features)
across any operator, or returning to remaining gaps within any of the
four operators now covered (KRTC Yellow Line depot name/opening date,
TMRT accessibility page 2, TYMC/KRTC base fare figures if a browser-
capable fetch becomes available).
