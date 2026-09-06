# 小三通客運 — research

**Corpus warning: `docs/research/` is leads only. Nothing here is citable until it has been checked against a primary source — see `.claude/skills/transit-research/SKILL.md`.**

**Version 1.0 — 6 September 2026. Status: verified against full Maritime and Port Bureau pages.**

## What is established

- **The official sailing page identifies Kinmen Shuitou–Xiamen Wutong and Kinmen Shuitou–Quanzhou Shijing.** Source: *Small Three Links sailing table*, `https://www.motcmpb.gov.tw/BoatSchedule?nodeId=380&siteId=1`, PRIMARY, High confidence because the full page was fetched on 2026-09-06. Original-language basis: the page's `金門廈門(五通)` and `金門泉州(石井)` route entries.
- **The same page identifies Nangan Fuao–Fuzhou Langqi and Beigan Baisha–Fuzhou Huangqi.** Source: the same full official page. Original-language basis: `南竿福澳—福州琅岐` and `北竿白沙—福州黃岐` route entries.
- **The official page gives approximate route times of 30, 60, 90 and 30 minutes for those four route families respectively.** Source: the same full official page. Original-language basis: the four `航程時間約` statements.
- **The Bureau publishes a fixed Matsu schedule titled for December 2025 through November 2026.** Source: *Matsu Small Three Links fixed passenger schedule, December 2025–November 2026*, `https://www.motcmpb.gov.tw/Information/Detail/aa288da0-6019-46ef-b0d6-bad719614b95?NodeId=543&SiteId=1`, PRIMARY, High confidence because the full information page and attachment link were fetched on 2026-09-06. Original-language basis: the page title `馬祖小三通客運固定航班表(2025年12月至2026年11月)`.
- **The Bureau maintains a separate current cross-strait operations page for Kinmen.** Source: *Cross-strait shipping operations*, `https://www.motcmpb.gov.tw/Information/Detail/68173c5b-6b25-401f-ab32-62a7d902bd95?NodeId=334&SiteId=1`, PRIMARY, High confidence because the full page was fetched and showed its current check/modify metadata. Original-language basis: the page title `兩岸航運業務` and its Kinmen route notices.

## Conflicts

- No incompatible route pair or crossing-time value was found between the fetched official sailing page and the Matsu fixed-schedule page. The schedule page is older publication material with a stated validity period; it is not treated as a live daily guarantee.

## Checked and failed

- **September 2026 Kinmen monthly timetable** — checked 2026-09-06: the full official information/index material available during this pass did not expose a September file that could be fetched and read as the current Kinmen monthly schedule. Older month-specific material remains date-limited and is not silently relabelled as September.
- **Current operator/vessel assignments, fares and a complete booking/check-in procedure** — checked 2026-09-06: the route-family sailing page alone did not support these fields, so they remain TBC pending dated terminal, operator or ticketing records for each route.
- **General international shipping** — checked 2026-09-06: excluded from this route-family layer because it covers scheduled Small Three Links passenger services only, not cargo, charter or sightseeing cruises.

## Stated gaps

- The next source pass should fetch the latest Kinmen monthly schedule attachment when the Bureau exposes it, then add dated fares, operator/vessel assignments and terminal procedures.
- Terminal-specific immigration and check-in instructions should be linked from official port/terminal notices rather than inferred from route names.
