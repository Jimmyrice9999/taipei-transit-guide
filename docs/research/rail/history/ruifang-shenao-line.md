# Taiwan Railways Ruifang–Shen'ao Line — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page or full PDF; no search snippet is used as evidence.

This is a one-subject report on the Ruifang–Shen'ao route, its later passenger
restoration and its distinction from the adjacent Shen'ao–Liandong entry. The
operator table, a museum history and current operator/data records describe
different boundaries; those differences remain explicit.

## What is established

- **The TRA construction-history table lists Ruifang–Shen'ao as 6.3 km, constructed in 1959 and operated from 1961, with TRA as constructor.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher 國營臺灣鐵路股份有限公司／臺灣鐵路管理局, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete operator PDF was fetched and read. Original-language basis: the row `38.瑞芳─深澳 Ruifang-Shen'ao 6.3 臺灣鐵路管理局 TRA` and aligned fields `民國48年 1959` and `民國50年 1961`.
- **The National Museum of Marine Science and Technology's full history gives an alternate 1965 opening for the Ruifang–Shen'ao section.** Source: National Museum of Marine Science and Technology, *Taiwan Railways Haikeguan Station*, titleOriginal `臺鐵海科館站`, publisher 國立海洋科技博物館, `https://www.nmmst.gov.tw/chhtml/content/232`, SECONDARY, Medium confidence because it is a later institutional history rather than the operator's construction register. Original-language basis: `台灣鐵路局於1965年開通瑞芳至深澳段線路，使得本支線可以連接至北部鐵路主幹線，以做為客貨運之延伸`.
- **The museum history dates passenger and freight stoppage to 21 August 1989, says the Ruifang–Shen'ao Power Plant section remained for coal trains, and dates full line suspension to 2007 when the plant stopped.** Source: the same full museum history page, SECONDARY, Medium confidence as a retrospective account. Original-language basis: `深澳線最後於1989年停止辦理客貨運，僅保留瑞芳站至深澳火力發電廠的區間，供運煤列車行駛。2007年深澳火力發電廠停止運轉，深澳線也全線停駛`.
- **The operator restored passenger service between Ruifang and Haikeguan on 9 January 2014, approximately 4.2 km with ten daily round trips.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Railway access for the National Museum of Marine Science and Technology*, titleOriginal `為因應海科館開館營運之聯外運輸需求`, publisher 國營臺灣鐵路股份有限公司／臺灣鐵路管理局, `https://www.railway.gov.tw/tra-tip-web/tip/file/9a3ddb1f-e02e-407e-b618-12fe08554783`, PRIMARY, High confidence because the complete one-page operator PDF was fetched and read. Original-language basis: `深澳支線已配合提前於同年1月9日恢復客運` and `瑞芳站-海科館站間共10往返車次`.
- **The operator chronology records the Shen'ao Line reopening ceremony on 9 January 2014.** Source: National Taiwan Railways Corporation, *Taiwan Railways chronology — 103*, titleOriginal `臺鐵大事紀`, publisher 國營臺灣鐵路股份有限公司, `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=12`, PRIMARY, High confidence because the full HTML chronology was fetched and read. Original-language basis: `103.01.09 | 深澳線復駛通車典禮`.
- **The operator extended the passenger route to Badouzi on 28 December 2016 and described the Haikeguan–Badouzi extension as 4.7 km.** Source: National Taiwan Railways Corporation, *Taiwan Railways chronology — 105*, titleOriginal `臺鐵大事紀`, publisher 國營臺灣鐵路股份有限公司, `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=10`, PRIMARY, High confidence because the full HTML chronology was fetched and read. Original-language basis: `105.12.28 八斗子車站新站正式啟用 ... 深澳支線全長4.7公里，由海科館站延長至八斗子站`.
- **The committed TDX snapshot currently contains three ordered SA station members and a final travelled distance of 4.7 km.** Source: TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺), `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full 2026-08-24 pull was parsed and committed. Original fields: `LineID: SA`, three ordered station members and `TravelledDistance: 4.7`.

## Conflicts and measurement boundaries

- **Opening year:** the operator table gives construction in 1959 and operation starting in 1961. The museum history says the TRA opened the Ruifang–Shen'ao section in 1965. The records do not prove whether these describe construction/start-up versus a public-service or through-connection milestone, so neither value is removed.
- **Historical route versus restored passenger route:** the operator table gives 6.3 km; the 2014 operator restoration note gives approximately 4.2 km for Ruifang–Haikeguan; the 2016 operator chronology and current TDX snapshot give 4.7 km for the later passenger branch. They are retained as different route/service boundaries.
- **Traffic stoppage versus full suspension:** the museum history gives 21 August 1989 for passenger/freight stoppage and 2007 for full suspension after coal service ended. No checked operator closure instrument reconciles those traffic milestones.
- **Ruifang–Shen'ao versus Shen'ao–Liandong:** the operator construction table lists separate 6.3 km and 6.0 km rows. The current SA passenger route and the later restoration records do not establish a legal identity merger with the separate historical Shen'ao–Liandong entry.

## Checked and failed

- **2014 Taiwan Railways annual report PDF** — checked 2026-08-26 at `https://www.railway.gov.tw/tra-tip-web/tip/file/6f5427dc-3c99-418d-bb99-b298b8dead23`. The full fetch returned a cache-miss error, so it was not used; the operator's full restoration note and chronology were fetched instead.
- **Complete historical station register** — checked 2026-08-26 in the full operator construction-history PDF, the full museum history page, the operator restoration note and chronology pages, and the committed TDX pull. These identify the route endpoints, current members and one service section but do not provide a complete historical station register.
- **Legal closure and transfer instruments** — checked 2026-08-26 in the same full official and institutional sources. They establish traffic stoppage, full suspension and restoration milestones but no legal closure or transfer document was found.
- **Track-removal chronology and 6.3-to-4.7 km boundary** — checked 2026-08-26 in the same sources. The pages provide route/service lengths and staged history but no segment-level removal or surveyed centreline comparison.

## Stated gaps

An operator timetable archive, closure or traffic-order records, engineering and
right-of-way inventories, and a centreline survey would settle the opening-year
conflict, the 1989/2007 closure boundaries, the historical station sequence,
track-removal chronology and the relationship between the 6.3 km construction
entry and the later 4.2/4.7 km passenger route. Until those records are found,
the operator table, museum history and current passenger/data boundaries remain
separate.

## Update, 29 August 2026 — a 2024-2025 closure, and a mid-2014 through-running extension not previously recorded

- **TRA's own restoration-note PDF, re-read in full this pass**: beyond the
  9 January 2014 Ruifang-Haikeguan reopening already cited, the same PDF
  states infrastructure/tourism-facility preparation was already complete
  by end of 2010 (diesel railcars reassigned from other branch lines), and
  that from mid-July 2014 TRA extended the restored passenger service
  through to Jingtong (菁桐) on the Pingxi Line — Jingtong-Haikeguan, still
  10 daily round trips, extra carriages added on holidays. Not currently
  reflected on the content page; worth adding in a future pass alongside a
  citation check of exactly which PDF passage this comes from.
- **Newtalk 新聞, 2024-03-15**, `https://newtalk.tw/news/view/2024-03-15/912388`.
  SECONDARY. Reports slope-reinforcement work closing Haikeguan-Badouzi
  from 9 April 2024, 20 services shortened.
- **中華日報, 2025-02-25**, `https://www.cdns.com.tw/articles/1173872`.
  SECONDARY. Reports the same closure completed 15 January 2025, full
  service resumed 26 February 2025; cause given as poor lower-slope
  stability. Several other outlets (Yahoo奇摩新聞, 青年日報, 屏東時報,
  LTVNews) carried the same headline for the same date but were not all
  independently fetched — only these two were read in full.
- No TRA primary announcement for either the 2024 closure or the 2025
  reopening was found.

### Checked and failed (this pass)

- Taipower primary source for the coal-rail connection — blank/JS-rendered
  page, no Taipower primary reached.
- 青年日報 (ydn.com.tw) full-page fetch for the 2025 reopening — HTTP 403.
- UDN article on the same reopening, cited elsewhere — no working URL
  located.
- General web search — Google/Bing/DuckDuckGo all unusable (error pages,
  irrelevant cached content, CAPTCHA); WebSearch budget exhausted before
  this pass began.
