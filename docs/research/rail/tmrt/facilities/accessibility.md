# Taichung Metro station accessibility — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. No existing research file for TMRT addressed station accessibility before this report.

This is a one-subject report on the Taichung Metro Green Line's station
accessibility facilities. `content/rail/tmrt/` currently has no facilities
subdirectory.

## What is established

- **The operator publishes a dedicated "車站服務設施" (Station Service Facilities) page listing ten named accessibility facilities, each with its own description.** Source: Taichung Metro Corporation (臺中捷運股份有限公司), `車站服務設施` (Station Service Facilities), `https://www.tmrt.com.tw/our-services/accessibility-service`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly, not a search snippet). The ten facilities, with their original-language descriptions:
  - **無障礙坡道 (accessible ramps)** — installed at station entrances/exits wherever there is a level difference between the inside and outside ground level, to help those with large luggage, strollers, wheelchairs and other mobility-limited passengers. Original-language basis: `設於車站出入口處，站內與站外地坪有高低差處，皆設置無障礙坡道，以利攜帶大型行李者、嬰兒車、輪椅旅客等行動不便者進出車站`.
  - **無障礙停車格 (accessible parking spaces)** — at stations that have them, positioned near the station entrance/exit for a shorter distance to the station. Original-language basis: `設有無障礙停車位之車站，其停車位鄰近車站出入口處，行動不便旅客可就近停車於此`.
  - **無障礙引導標誌 (accessible guide signage)** — every station has a planned accessible route with guide signage directing mobility-limited passengers to accessible ramps, stairs, entrances/exits and elevators. Original-language basis: `車站皆規劃有無障礙動線，設有無障礙引導標誌，指引行動不便者使用無障礙坡道及無障礙樓梯，至車站出入口或無障礙電梯等設施`.
  - **無障礙警示地磚 (tactile warning tiles)** — dot-pattern warning tiles at stair top/bottom points and in front of important facilities, to help visually impaired passengers identify transitions safely. Original-language basis: `針對樓梯起訖端等危險區域或重要設施設備前，鋪設點狀警示地磚...讓視障旅客能辨識周邊環境或設施的轉換，安全的上下樓層或使用設施`.
  - **無障礙加值售票機 (accessible add-value ticket machines)** — present at every station, lower than a standard machine, for wheelchair users to buy single tickets, add value, and check transaction records. Original-language basis: `車站皆設有無障礙加值售票機，其高度低於一般加值售票機，方便輪椅旅客購票使用`.
  - **無障礙自動閘門 (accessible automatic gates)** — present at every station, usually beside the information desk, for wheelchairs, strollers, large luggage and mobility-limited passengers, with a call button linking to station staff. Original-language basis: `車站皆設有無障礙自動閘門...閘門上設有服務鈴，便於旅客即時聯繫站務人員提供協助`.
  - **無障礙電梯 (accessible elevators)** — every station elevator is accessible-designed: extended door-closing time, braille control panel, voice system, side handrails and an intercom for emergencies. Original-language basis: `車站電梯皆為無障礙設計，除延長關門時間方便輪椅、年長者、孕婦、嬰兒車、攜帶大型行李及行動不便旅客搭乘，另設有操作盤點字設施、語音系統、側牆扶手，並備有對講機`.
  - **無障礙候車區 (accessible platform waiting areas)** — a dedicated wheelchair waiting zone on the platform, aligned with the first door of the train's head/tail car, with its own signage. Original-language basis: `於月台上候車區域，對應列車車頭及車尾第1扇門之位置，安排輪椅旅客專屬的候車區`.
  - **緊急求助鈴 (emergency call buttons)** — installed in men's, women's, family and accessible restrooms and nursing rooms. Original-language basis: `於男、女廁、親子廁所、無障礙廁所、哺集乳室內皆有設置緊急求助鈴`.
  - **車站對講機 (station intercoms)** — at station entrances/exits, outside accessible/family restrooms, on platforms, at nursing rooms, beside every train door and at accessible boarding points. Original-language basis: `車站出入口處、無障礙廁所或親子廁所外、月台上、哺給乳室等處，及列車各車門旁、無障礙乘車處皆設置旅客對講機`.
- **The page is explicitly paginated (a "1 2" page-number control appears at the bottom of the fetched content), indicating at least one further page of facilities beyond the ten read for this report.**

## Conflicts

None found — no other source addressing TMRT station accessibility was located this session.

## Checked and failed

- **Page 2 of the accessibility-service listing** — checked 2026-08-28; the page's pagination is client-side (a `?page=2` query-string fetch returned byte-identical content to page 1), so whatever facilities are listed on the second page could not be retrieved by a non-browser fetch this session. This report is explicitly a partial listing, not the complete set the operator publishes.
- **A numeric accessibility-completion figure or a named regulatory basis (e.g. Taiwan's accessible-facilities design standard) for TMRT** — checked 2026-08-28; not present anywhere on the fetched accessibility-service page.
- **Search-engine queries for TMRT accessibility statistics or a named regulation** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.

## Stated gaps

The operator's accessibility-service page is confirmed to have at least a
second page not retrieved this session — its contents are genuinely
unknown, not merely unpublished here. No numeric completion figure and no
named regulatory standard were found on the page that was read. Whether the
ten facilities described are present at literally every one of the 18
stations, or vary by station, is stated in universal terms ("車站皆設有" /
"every station has") for several individual facilities but not summarised
as a single system-wide completion statement anywhere on the page read.
