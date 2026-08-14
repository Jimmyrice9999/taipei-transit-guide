# For Jamie

Written 13 August 2026, after run 21. Five commits, CI confirmed green on
GitHub — the failure was Adversarial fixtures, not test:unit; fixed, plus
6 Actions off Node 20. Station pages: 24 → 180, all 9 lines. Interchange
now shows under the title; adjacent nav redesigned to look clickable.
Widening surfaced and fixed 5 real bugs, incl. a footer claiming
"operator TRTC" everywhere and a contrast fail axe missed until light
rail lacked an address. Fixed the auto-linker's cross-line collision bug
(could've mislinked "Daan"); link audit now 179 unlinked, mostly
citation titles, logged not chased. Station pages: 394 KB vs our 200 KB
target, worse and expected — bigger font subset, not images. Sweep
fixed one bug: map labels clipping at the edge, even on Wenhu's own
BR24. Nothing needs your call. Screenshots: `station-br10-1440.png`,
`rail-stations-2560.png`, `r21-fix-br24-map-1440.png`.

Run 22 Part 1: audit found 20 missing TDX postal addresses, not 8 whole lines;
all districts and coordinates were already present. Added cited NTMC station
positions for 23 V/K pages, kept the 20 addresses TBC, and mapped Taoyuan
districts to English. Full gates green: 185/185 tests.
