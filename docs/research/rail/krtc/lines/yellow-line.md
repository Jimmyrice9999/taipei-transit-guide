# Kaohsiung Metro Yellow Line — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. `docs/research/rail/krtc.md` and this session's KRTC technology/rolling-stock research files (signalling.md, fleet-roster.md) already mention the Yellow Line in passing (fully driverless CBTC signalling, Stadler rolling stock); this is the first dedicated report on the line itself — route, stations, cost and construction status.

This is a one-subject report on Kaohsiung Metro's under-construction Yellow
Line (捷運黃線), covering route, stations, approvals, cost and current
construction progress. `content/rail/krtc/lines/` currently has Red,
Orange and Circular Light Rail only.

## What is established

- **The Yellow Line runs from Niaosong's Shennong Road, via Dabei Road, Chengqing Road, Benguan Road, Jiangong Road, Minzu Road and Minquan Road to Sanduo 5th Road; a second branch runs from Chengqing Road via Guotai Road, Nanjing Road and Wujia Road to Zhenzhong Road in front of Qianzhen Senior High School. Total route length is 22.91 km, with 1 elevated station, 22 underground stations and 1 depot.** Source: Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局), `捷運黃線路線說明` (Yellow Line Route Description), `https://mtbu.kcg.gov.tw/KaohsiungMetro/ApprovedRoutes/yellow/yellow01.html`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly). Original-language basis: `黃線起於鳥松神農路...路線總長度為22.91公里` and `設置1座高架車站、22座地下車站與1座機廠`.
- **The line crosses six districts: Niaosong, Xinxing, Lingya, Qianzhen, Fengshan and Sanmin.** Same source, PRIMARY, High confidence. Original-language basis: `區域：鳥松、新興、苓雅、前鎮、鳳山、三民`.
- **The route table lists 23 stations, Y1 through Y23, each with a platform type and an approximate location; four are named as interchange points with other systems.** Same source, PRIMARY, High confidence, full station table read directly:
  - Y1 (elevated island platform) — near Shennong Rd/Datong Rd
  - Y2, Y3 (underground) — near Shennong Rd/drainage channel
  - Y4 — near Chang Gung Hospital on Dabei Rd
  - Y5 — near Chengqing Rd/Yuanshan Rd
  - Y6 — near Benguan Rd/Fenyang Rd
  - Y7 — near Benguan Rd/Qiuchang Rd
  - Y8 — near Jiangong Rd/Xinmin Rd
  - Y9 — near Minzu 1st Rd/Shiquan 1st Rd
  - Y10 — near Minzu 1st Rd/Jiuru 2nd Rd; interchange with TRA Minzu Station
  - Y11 — near Minzu 2nd Rd/Zhongzheng 3rd Rd; interchange with Orange Line Xinyi Elementary School (O6)
  - Y12 — near Minquan 1st Rd/Lingya 1st Rd
  - Y13 — near Sanduo 3rd Rd/Fuxing 3rd Rd
  - Y14 — near Sanduo 3rd Rd/Zhongshan 2nd Rd; interchange with Red Line Sanduo Shopping District (R8)
  - Y15 — north side of Haibian Rd, opposite the Travel Service Center; interchange with the Circular Light Rail's Travel Service Center (C9)
  - Y16 — near Chengqing Rd/Baoyang East St
  - Y17 — near Chengqing Rd at Fengshan Administrative Center; interchange with TRA Zhengyi-Chengqing Station
  - Y18 — near Chengqing Rd/Jianjun Rd; interchange with Orange Line Weiwuying (O10)
  - Y19 — near Nanjing Rd/Ziqi Rd
  - Y20 — near Nanjing Rd/Ruilong Rd
  - Y21 (underground stacked platform) — near Wujia 2nd Rd/Fengnan Rd
  - Y22 — near Wujia 2nd Rd/Ziqiang 1st Rd
  - Y23 (underground island platform) — near Zhenzhong Rd/Shuren Rd; interchange with Red Line Qianzhen Senior High School (R5)
  
  The page explicitly states station names are provisional and subject to change through later design and operational stages. Original-language basis: `車站名稱為暫定，未來依設計及營運等不同階段調整`.
- **The Executive Yuan approved the comprehensive planning report on 21 March 2022 (民國111年3月21日), with a total construction budget of NT$144.237 billion (NT$83.384 billion central-government subsidy, NT$60.853 billion city-government share); the Executive Yuan then approved a revised plan on 21 October 2025 (民國114年10月21日) that raised the total construction budget to NT$236.858 billion.** Source: Kaohsiung City Government Mass Rapid Transit Bureau, `規劃說明` (Planning Description), `https://mtbu.kcg.gov.tw/KaohsiungMetro/ApprovedRoutes/yellow/yellow02.html`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `111年3月21日行政院核定都會線（黃線）綜合規劃報告：總建設經費：1,442.37億元` and `114年10月21日行政院核定黃線修正計畫：總建設經費修正為2,368.58億元`. The revised total is roughly 64% higher than the original comprehensive-planning figure; the page does not itself explain the cause of the increase.
- **The feasibility study was approved by the Executive Yuan on 24 May 2019 (民國108年5月24日).** Same source, PRIMARY, High confidence. Original-language basis: `可行性研究報告：108年5月24日行政院核定都會線(黃線)可行性研究報告`.
- **Construction is split across at least six named contract packages, each with its own scope and current status as of the page's last update (dated 115-08-27, i.e. 27 August 2026 on the page footer):**
  - **YM01** (electromechanical systems + depot + substations, design-build): covers system electromechanical works for all 23 stations, 1 maintenance depot and 3 energy dispatch centres. Current work: depot foundation beams and column-head formwork, reinforced retaining wall culvert base and formwork, administrative building raft foundation and ground beams, and a temporary detention/sedimentation pond (T3).
  - **YT01** (track works, design-build): bid evaluation held 12 January 2023 (112年1月12日); contract award announced 2 March 2023, won by Senye Construction (森業營造公司); contract signed 24 April 2023; currently in detailed design.
  - **YC01** (civil + facilities electromechanical, Y1 elevated station to Y5 exclusive): awarded to a joint venture of a Malaysian firm ("馬來西亞商金務大工程股份有限公司") and 世久營造探勘工程股份有限公司. Current work at Y1 (rainwater/sewer culverts, utility relocation), Y2 (mixing-pile work, pressure-relief boring, utility relocation), Y3 (diaphragm wall at entrance A, retaining structure at entrance C), and Y4 (utility trial digging and relocation, temporary facilities at entrance C).
  - **YC02** (civil + facilities electromechanical, Y5 exclusive to Y8): awarded to 工信工程股份有限公司. Current work at Y6 (Benguan Rd), Y7 (Qiuchang Rd) and Y8 (Jiangong Rd) — utility relocations and traffic-diversion staging, with entrance B at Y8 undergoing diaphragm-wall and Taipower utility relocation work.
  - **YC03** (civil + facilities electromechanical, Y5 inclusive through Y16–Y18): also awarded to 工信工程股份有限公司. Current work at Y5 (traffic-diversion micropiles), Y16 (ground improvement piling, Chunghwa Telecom and gas utility relocation), Y17 (entrance A trial-trench paving, water/sewer relocation, demolition of an old bridge foundation) and Y18 (petrochemical pipeline group removal, utility relocation, entrance B building demolition).
  - **YD01** (detailed-design technical-services contract): awarded to a three-firm consortium (中興顧問工程公司/亞新工程顧問公司/萬鼎工程服務公司). Its first design segment, covering YC04 (from Y8 station body exclusive to Y10), had its design results placed for public review on 2 October 2025 (114/10/2), re-announced for tender a second time on 22 June 2026 (115/6/22), but the 21 July 2026 (115/7/21) bid opening failed with no bidders; the bureau states it is under review and plans to re-announce the tender by the end of August 2026 (115年8月底前).
  
  Source: Kaohsiung City Government Mass Rapid Transit Bureau, `工程進度` (Construction Progress), `https://mtbu.kcg.gov.tw/KaohsiungMetro/ApprovedRoutes/yellow/yellow03.html`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly).

## Conflicts

None found — no second source addressing route length, station count, cost or construction status was located this session.

## Checked and failed

- **A confirmed opening date** — checked 2026-08-28; neither the route-description, planning-description nor construction-progress pages state a target or expected opening date for any part of the Yellow Line. Not found on any page read.
- **A depot name** — checked 2026-08-28; the pages read confirm the line has one depot (機廠) as part of the YM01 contract scope, but do not give it a name of the kind this session's separate KRTC depots research found for the Red/Orange system's three depots (North, South, Daliao). TBC.
- **The cause of the 64% construction-budget increase between the 2022 comprehensive plan and the 2025 revised plan** — checked 2026-08-28; the planning-description page states both figures but does not explain the increase. Not found on any page read.
- **Search-engine queries for Yellow Line news coverage of the cost revision or bid failures** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.

## Stated gaps

No opening date, confirmed depot name, or explanation for the construction-
budget revision was found in any source read for this page. Whether the
line's signalling (already recorded elsewhere in this project's research as
Siemens CBTC, fully driverless) and rolling stock (Stadler Rail car bodies)
findings from this session's earlier technology/rolling-stock research
apply to the whole line as now scoped, including the YT01 track-work and
YC01–YC03 civil packages described here, is consistent with but not
independently re-confirmed against those two earlier findings in this
report. Station names are explicitly stated by the operator as provisional;
this report does not treat any of the Y1–Y23 location descriptions as final
names.
