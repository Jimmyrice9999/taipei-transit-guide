# For Jamie

Run 313 is complete through the permitted local checks; commits are on `main`.

Part 0 fixed the adversarial harness's stale unprefixed output path. `npm run adversarial` is 16/16; the full build is 6,002/6,002 in both locales with no silent page loss.

Part 1 fixed stale locale assumptions in six manual helpers. The screenshot fix is present in `fdbc10fa`; `npm run nav` passed 19/19. Workflow jobs have no explicit `timeout-minutes`.

Part 2 added sourced depth to KRTC Yellow (659->722 words, with an official stage-label conflict) and TMRT Green (753->851 words, including the 2025 inspection record). The corrected audit found 113 short data/exhausted pages; they remain short and TBC.

`npm run gate:full` passed: 6,002 routes, 2,632,852 links, 243 unit tests, 27,409 sourced claims, 4,653 TBC, zero asserted claims. `gate:fast` also passed before commits.

Bounded browser verification passed with one worker: 156/156 pages, zero axe findings, both locales/maps/fallbacks, 120 smoke screenshots and 7 PDFs. Forty-six expected clips were recorded at the 12,000 px Chromium limit.

The exhaustive browser sweep was deferred under the reduced-capacity requirement. Do not stage `probes/`, generated audit JSONs, screenshots or PDFs. CI could not be confirmed here; Actions was not polled and `gh` is unavailable. No push was performed.
