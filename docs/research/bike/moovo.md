# MOOVO 智慧公共自行車 — research

**Corpus warning: `docs/research/` is leads only. Nothing here is citable until it has been checked against a primary source — see `.claude/skills/transit-research/SKILL.md`.**

**Version 1.0 — 6 September 2026. Status: verified against the full official operator and government pages used by `content/bike/systems/moovo.md`.**

## What is established

- **MOOVO is operated by 運點科技股份有限公司 (Ride Point Technology Co., Ltd.) and offers standard smart bicycles and electric-assist bicycles.** Source: *MOOVO official operator homepage*, `https://www.ridemoovo.com/`, PRIMARY, High confidence because the full operator page was fetched on 2026-09-06. Original-language basis: the homepage's MOOVO service and operator identification, including `運點科技股份有限公司` and the standard/e-assist bicycle descriptions.
- **The Changhua operator map exposes 202 visible station rows across its listed area groups.** Source: *MOOVO Changhua city map*, `https://www.ridemoovo.com/city_map_Changhua`, PRIMARY, High confidence because the complete page was fetched on 2026-09-06 and the visible group totals were summed. Original-language basis: the map's listed groups for 彰化, 員林, 二林, 永靖, 埔心, 田尾, 鹿港, 和美, 溪湖, 溪州, 田中, 花壇, 社頭, 大村, 二水 and 北斗.
- **The Yunlin operator map exposes 263 visible station rows across eight listed area groups.** Source: *MOOVO Yunlin city map*, `https://www.ridemoovo.com/city_map_Yunlin`, PRIMARY, High confidence because the complete page was fetched on 2026-09-06 and the visible group totals were summed. Original-language basis: the map's 斗六, 虎尾, 西螺, 斗南, 北港, 土庫, 口湖 and 水林 groups.
- **Changhua County's 28 August 2026 notice says 13 stations were added, service covered 17 townships/cities and the total reached 202 stations.** Source: *MOOVO expands to 17 Changhua townships and cities*, `https://www.chcg.gov.tw/DTO/traffic/03bulletin/bulletin02_con.aspx?bull_id=437062`, PRIMARY, High confidence because the full county page was fetched. Original-language basis: the notice's dated 13-station, 17-township/city and 202-station statements.
- **The operator's operations feed records Changhua and Yunlin station additions on 24 August, 14 August, 5 August and 24 July 2026.** Source: *MOOVO official operations and news feed*, `https://www.ridemoovo.com/op`, PRIMARY, High confidence because the full feed was fetched on 2026-09-06. Original-language basis: the dated station-addition notices and named locations.

## Conflicts

- **Yunlin/Douliu count:** a Yunlin County Planning Office page published 6 August 2026 records 94 Douliu stations, while the later operator map accessed 6 September 2026 shows 97 visible Douliu rows and 263 across its eight displayed Yunlin groups. These are retained as dated snapshots with different scope/time; no average or silent replacement is made.

## Checked and failed

- **Documented station JSON endpoint** — checked 2026-09-06: the fetched operator map pages did not expose a documented endpoint that could be promoted as a reproducible station pull, so coordinates, live availability and capacity remain TBC.
- 2026-09-06: **A stable public machine-readable station feed was not promoted from the fetched operator maps.** The full Changhua and Yunlin map pages expose the station groups in their rendered HTML and declare an API host for the broader service, but the page fetch did not establish a documented station JSON endpoint suitable for a reproducible static pull. Coordinates, live availability and capacity are therefore TBC rather than inferred.
- 2026-09-06: **A nationwide non-YouBike system total was not asserted.** The Changhua and Yunlin evidence establishes MOOVO coverage there; absence of a committed system page for another jurisdiction is not evidence that no system exists.

## Stated gaps

- A documented MOOVO station API or downloadable official dataset would settle coordinates, capacity and live-state acquisition.
- Current jurisdiction-by-jurisdiction fare rules, including whether the Changhua subsidy is uniform across Yunlin and future MOOVO 3.0 areas, require matching dated primary fare notices.
