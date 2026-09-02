# For Jamie

Run 309 completed on 2 September 2026 and is pushed to `main`.

Part 1: static locale routing is `/en/...` and `/zh-Hant/...`; both locales prerender, have reciprocal hreflang, and use plain-link toggles in the header and rail. Chinese mode displays committed source-language fields and quotations; absent equivalents stay English. Han subsets were regenerated after build with zero mismatches across 5,257 pages.

Part 2: the browser harness now chooses workers from free memory, uses 25-page chunks, closes page/context state per chunk, and restarts the browser between chunks/phases. The pre-fix completed sweep was 306m57s with 6.99 MiB minimum free memory. The post-fix run held 8+ GiB at checkpoints through 2,600+ pages and never approached that minimum; reflow was 182m41s. The user stopped the second run during screenshots at 49/268 after all 4,172 reflow and axe pages passed.

The five Run 307–308 page types are in the full PAGE_TYPES inventory. The completed audit report had 4,557 screenshots/268 PDFs, zero axe findings, and clean navigation, map, no-JS, reduced-motion and image probes; the stopped run is not counted as a completed visual sweep.

Part 3: 73 current sub-400-word pages were checked against institutional, operator, TDX/municipal, DORTS, gazette, oversight, MOTC/運研所/Railway Bureau, VSCC, thesis, Judicial, history/archive and Japanese-era source families. They are exhausted/data-only; leave them short and TBC.

Next: use template/bounded (≤500-page) browser verification after harness changes. Do not stage `probes/`, generated audit JSONs, screenshots or PDFs. Run `gate:fast` before commit and `gate:full` before push/end.
