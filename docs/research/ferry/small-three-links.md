# 小三通客運 — research

**Corpus warning: `docs/research/` is leads only. Nothing here is citable until it has been checked against a primary source — see `.claude/skills/transit-research/SKILL.md`.**

**Version 1.1 — 7 September 2026. Status: verified against full Maritime and Port Bureau pages and attached September 2026 PDFs.**

## What is established

- **The official sailing page identifies Kinmen Shuitou–Xiamen Wutong and Kinmen Shuitou–Quanzhou Shijing.** Source: *Small Three Links sailing table*, `https://www.motcmpb.gov.tw/BoatSchedule?nodeId=380&siteId=1`, PRIMARY, High confidence because the full page was fetched on 2026-09-06. Original-language basis: the page's `金門廈門(五通)` and `金門泉州(石井)` route entries.
- **The same page identifies Nangan Fuao–Fuzhou Langqi and Beigan Baisha–Fuzhou Huangqi.** Source: the same full official page. Original-language basis: `南竿福澳—福州琅岐` and `北竿白沙—福州黃岐` route entries.
- **The official page gives approximate route times of 30, 60, 90 and 30 minutes for those four route families respectively.** Source: the same full official page. Original-language basis: the four `航程時間約` statements.
- **The Bureau publishes a fixed Matsu schedule titled for December 2025 through November 2026.** Source: *Matsu Small Three Links fixed passenger schedule, December 2025–November 2026*, `https://www.motcmpb.gov.tw/Information/Detail/aa288da0-6019-46ef-b0d6-bad719614b95?NodeId=543&SiteId=1`, PRIMARY, High confidence because the full information page and attachment link were fetched on 2026-09-06. Original-language basis: the page title `馬祖小三通客運固定航班表(2025年12月至2026年11月)`.
- **The Bureau maintains a separate current cross-strait operations page for Kinmen.** Source: *Cross-strait shipping operations*, `https://www.motcmpb.gov.tw/Information/Detail/68173c5b-6b25-401f-ab32-62a7d902bd95?NodeId=334&SiteId=1`, PRIMARY, High confidence because the full page was fetched and showed its current check/modify metadata. Original-language basis: the page title `兩岸航運業務` and its Kinmen route notices.
- **The Bureau's September 2026 notice links two full Kinmen monthly timetable attachments.** Source: *September 2026 Kinmen Small Three Links timetable notice*, `https://www.motcmpb.gov.tw/Information/Detail/b1e673f0-4ce4-4ea8-bc0b-fb48b8082ad8?NodeId=543&SiteId=1`, PRIMARY, High confidence because the full information page was fetched and its attachment links were followed on 2026-09-07. Original-language basis: `115年9月金門小三通航班表`, published 2026-08-17, checked 2026-09-01.
- **The September Kinmen–Xiamen attachment covers 1–30 September and publishes 12 departure slots in each direction.** Source: *September 2026 Kinmen–Xiamen Small Three Links timetable*, `https://www.motcmpb.gov.tw/ServerFile/Get/15997edb-bc1b-435d-a5fe-5213683037ec?DLCount=1`, PRIMARY, High confidence because the complete PDF was fetched and extracted. Original-language basis: `115年金廈小三通9月份航班表`, its 08:30–17:30 departure columns and date rows.
- **The September Kinmen–Xiamen table assigns vessels by date and names ten vessels in the monthly roster.** Source: the same full official PDF, PRIMARY, High confidence. Original-language basis: the vessel cells containing `馬可波羅1號`, `金星6號`, `迅安`, `新東方`, `新捷安`, `金瑞龍`, `新五緣`, `新武夷`, `新金祥龍` and `和平新星`.
- **The September Kinmen–Quanzhou attachment publishes four slots on 15 even-numbered dates and identifies 八方輪 on those service rows.** Source: *September 2026 Kinmen–Quanzhou Small Three Links timetable*, `https://www.motcmpb.gov.tw/ServerFile/Get/31506ab1-ccba-4352-beb7-8c047765edfd?DLCount=1`, PRIMARY, High confidence because the complete PDF was fetched and extracted. Original-language basis: the date rows 9/2 through 9/30, times `09:50`, `16:35`, `08:30`, `11:10` and vessel cell `八方輪`.
- **The September Kinmen attachments publish booking contacts, including a one-hour-before-departure terminal-purchase instruction for the Kinmen Quanzhou service.** Source: the two full official PDF attachments above, PRIMARY, High confidence. Original-language basis: `請於開航前1小時至現場購票` and the operator telephone blocks.
- **The Matsu fixed schedule identifies the Baisha–Huangqi and Fuao–Langqi vessel rosters and remains valid through 30 November 2026.** Source: *Matsu Small Three Links fixed passenger schedule, December 2025–November 2026*, attachment `https://www.motcmpb.gov.tw/ServerFile/Get/3f1deeb8-8af2-4522-be49-286164b95568?DLCount=1`, PRIMARY, High confidence because the complete PDF was fetched and extracted on 2026-09-07. Original-language basis: the validity line `2025年12月1日至2026年11月30日`, vessel names `吉順10號`, `安麒2號`, `金安輪`, `安麒6號` and the printed Fuao booking numbers.

## Conflicts

- No incompatible route pair or crossing-time value was found between the fetched official sailing page and the Matsu fixed-schedule page. The schedule page is older publication material with a stated validity period; it is not treated as a live daily guarantee.

## Checked and failed

- **Current fares and a complete border/check-in procedure** — checked 2026-09-07: the September timetable attachments publish booking contacts and one terminal-purchase instruction, but do not by themselves establish a complete current fare matrix or end-to-end border procedure for every route and passenger category.
- **A permanent active-fleet total** — checked 2026-09-07: the monthly attachments provide a dated roster and date-specific assignments, not a national vessel-registry extract or a guarantee that every named vessel remains assigned after September.
- **General international shipping** — checked 2026-09-06: excluded from this route-family layer because it covers scheduled Small Three Links passenger services only, not cargo, charter or sightseeing cruises.

## Stated gaps

- Dated official fare sources should be joined to the September snapshot, keeping one-way, concession and terminal-charge components separate where the sources distinguish them.
- Terminal-specific immigration and check-in instructions should be linked from official port/terminal notices rather than inferred from route names.
