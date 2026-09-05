# For Jamie

Run 314 — 5 September 2026. Part 0 is pushed through `8fce448e`.

The fresh `npm run adversarial` run was 16/16, with the full output recorded in
the run log. Part 1 is pushed through `fa6207b0`: CI jobs now have explicit
timeouts, the screenshot fix is confirmed on `origin/main`, and the exhaustive
locale/URL audit found no sibling assumption.

Part 2 added sourced depth to TYMC's operator page (+67 body words) and the
Taoyuan Green Line page (+25). It added a new TYMC research file and retained
the DORTS progress conflict rather than resolving it. The full corpus audit
left structured/TBC pages alone where no new primary fact survived checking.

Part 2 commit `b1e68ab3` is pushed and matches `origin/main`. The full gate
passed: 6,002 routes, 2,636,862 links, 243 tests, 27,413 sourced claims,
4,653 TBC, zero asserted claims, and zero genuine contrast failures.

Do not stage `probes/`, generated audit JSONs, screenshots or PDFs. CI cannot be
confirmed from this machine: `gh` is unavailable, Actions was not polled, and
the direct Actions API is blocked.
