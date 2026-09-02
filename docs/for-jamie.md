# For Jamie

Run 312 completed on 2 September 2026 and is ready to push from `main`.

Run 310 precomputes locale-neutral aggregate data once for both locales, fixes context-aware station-code tokenisation, and sets the deployed metadata origin. The fresh export produced 6,002 routes in 352 seconds with no static-generation timeout, retry, or metadataBase warning.

The bounded harness regression sample passed with 143 tests, including route/model-code cases. Do not rerun the stopped full browser confirmation sweep; its measured memory evidence is recorded in the run log.

Run 311 diagnosed the three CI detached-image findings as hydration races: the image node was replaced after `load`, then stable. The image and map probes now settle hydration and re-resolve locators at use. Bounded browser verification passed 156 pages, 1,344 screenshots, 78 PDFs, zero axe findings, both map modes and both locale navigation probes.

Run 312 diagnosed five screenshot timeouts as environment-sensitive capture budget failures: the pages span distinct templates, with only `/data/sources/` being extreme. Screenshot capture is configurable (30s local, 120s in CI), tall pages clip before compositing, and pushes retain a seven-page smoke set while scheduled/manual sweeps retain the full matrix. The bounded run passed 156 pages, 120 screenshots, 7 PDFs and zero findings in 23m12s.

Part 1: static locale routing is `/en/...` and `/zh-Hant/...`; both locales prerender, have reciprocal hreflang, and use plain-link toggles in the header and rail. Chinese mode displays committed source-language fields and quotations; absent equivalents stay English. Han subsets were regenerated after build with zero mismatches across 5,257 pages.

Part 2: the browser harness now chooses workers from free memory, uses 25-page chunks, closes page/context state per chunk, and restarts the browser between chunks/phases. The pre-fix completed sweep was 306m57s with 6.99 MiB minimum free memory. The post-fix run held 8+ GiB at checkpoints through 2,600+ pages and never approached that minimum; reflow was 182m41s. The user stopped the second run during screenshots at 49/268 after all 4,172 reflow and axe pages passed.

The five Run 307–308 page types are in the full PAGE_TYPES inventory. The completed audit report had 4,557 screenshots/268 PDFs, zero axe findings, and clean navigation, map, no-JS, reduced-motion and image probes; the stopped run is not counted as a completed visual sweep.

Part 3: 73 current sub-400-word pages were checked against institutional, operator, TDX/municipal, DORTS, gazette, oversight, MOTC/運研所/Railway Bureau, VSCC, thesis, Judicial, history/archive and Japanese-era source families. They are exhausted/data-only; leave them short and TBC.

Next: use template/bounded (≤500-page) browser verification after harness changes. Do not stage `probes/`, generated audit JSONs, screenshots or PDFs. Run `gate:fast` before commit and `gate:full` before push/end.
