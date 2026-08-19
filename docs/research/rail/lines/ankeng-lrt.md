# Ankeng LRT 安坑輕軌 (K) — research

**Corpus warning: `docs/research/` is leads only. It has been wrong repeatedly.
Nothing here is citable until it has been checked against a primary source —
see `.claude/skills/transit-research/SKILL.md`.**

**Version 2.0 — 12 August 2026.**
**Status: verified against primary sources this run. Supersedes the version
headed "Version 1.0 — 6 August 2026, Status: research. Not published." That
earlier version was a to-do list — one URL per source in a closing paragraph,
no per-claim citation, no primary/secondary marking, no confidence — and is
preserved in git history. This file replaces it as the working research
record. Differences from it are logged under "Where the lead file was wrong"
below.** This file mirrors the content page at
`content/rail/metro/lines/ankeng-lrt.md`.

---

## What is established

### The line, as built

- **Line code K, operated by New Taipei Metro Corporation (新北大眾捷運股份有限公司,
  NTMC).** Source: Taiwan MOTC TDX platform, `data/tdx/NTALRT/line.json`
  (government open data, committed to this repo). PRIMARY. High confidence.
  `"LineID": "K", "LineName": {"Zh_tw": "安坑輕軌"}, "LineColor": "#9E925E"`
  — TDX carries the line under operator code `NTALRT`, filed separately from
  NTMC's other TDX records, the same pattern as the Danhai LRT under `NTDLRT`
  (see `lib/lines.ts`'s own note on this).
- **Opened 10 February 2023**, first train departing 13:00, with a one-month
  free trial to 12 March 2023 for anyone tapping in with an accepted
  e-ticket. Source: NTMC, ["Ankeng LRT opens 10 February — one month free
  trial"](https://www.ntmetro.com.tw/basic/?mode=detail&node=544) (安坑輕軌2月10日通車
  試營運期1個月享免費搭乘). PRIMARY, operator's own announcement. High confidence.
  「安坑輕軌將於2月10日正式通車...新北大眾捷運股份有限公司於當日下午1點正式發出首班車」;
  「自2月10日通車日起至3月12日止，凡持電子票證可免費搭乘」.
  Corroborated by New Taipei City Government's own approval notice, issued
  two days before opening: 「捷運安坑輕軌於今(2)日獲得交通部核發營運許可函...將於2月10日
  上午舉辦通車典禮，並於當日下午正式展開試營運」. Source: New Taipei City
  Government, [市政新聞](https://www.ntpc.gov.tw/ch/home.jsp?id=e8ca970cde5c00e1&dataserno=471c4aecd1fe681460bc91c9f77f27a4).
  PRIMARY.
- **Trial-period operating hours were 10:00–18:00**, narrower than the
  06:00–24:00 that applies once the trial ended. Source: same NTMC opening
  release. PRIMARY. 「試營運營業時間為上午10點至下午18點」.
- **Post-opening operating hours are 06:00–24:00.** Source: NTMC,
  ["Ankeng LRT opens 10 February — headways and fares at a
  glance"](https://www.ntmetro.com.tw/basic/?mode=detail&node=578) (安坑輕軌2月10日正式通車
  班距票價懶人組一次看). PRIMARY.
- **9 stations, K01–K09, plus Ankeng Depot (安坑機廠).** Source: NTMC station
  list, [安坑輕軌車站](https://www.ntmetro.com.tw/basic/?node=10137). PRIMARY.
  Full list, code and Chinese name: K01 雙城, K02 玫瑰中國城, K03 台北小城, K04
  耕莘安康院區, K05 景文科大, K06 安康, K07 陽光運動公園, K08 新和國小, K09 十四張. Matches
  TDX `data/tdx/NTALRT/station.json` exactly, including English romanisations.
- **K09 十四張 is the interchange with the Circular Line.** Source: NTMC
  opening release (node=578) and TDX (station carries no formal `interchange`
  tag in this site's extract, but both operators' own material state the
  transfer). PRIMARY.
- **9 stations split 5 elevated, 4 at grade.** DORTS's own account of the
  route: at grade along Anyi Road (安一路) from the depot, transitioning onto
  Anhe Road (安和路) "以高架方式" (in elevated form) from around K06 Ankang.
  Source: New Taipei DORTS, [安坑線](https://www.dorts.ntpc.gov.tw/about/route/jW0OdPGn2nbJ)
  route page, fetched directly. PRIMARY. Confidence: Medium-High — the page's
  prose gives the at-grade-to-elevated transition but this site's own fetch
  did not return a full structure table by station code.
  **K02 玫瑰中國城 is confirmed independently as elevated**, ahead of that
  general transition point, by DORTS's own public-art page for the station:
  「玫瑰中國城站位於...安一路高架橋上」("on the Anyi Road viaduct"). Source: New
  Taipei DORTS, [安坑輕軌玫瑰中國城站](https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/Pxe2kNxkmEgL).
  PRIMARY. This makes the elevated set K02, K06, K07, K08, K09 (five) and the
  at-grade set K01, K03, K04, K05 (four) — consistent with the widely
  repeated "5 elevated, 4 at grade" figure, though this site did not find a
  single primary source stating the full per-station table in one place.
- **Depot: Ankeng Depot (安坑機廠).** Three functional areas: a 9-track
  stabling yard (駐車廠), a 5-track maintenance shop (維修廠), and an
  administration building housing train control, dispatch and staff
  training. Source: DORTS, [安坑機廠知多少！](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/0V4drGelZqEN)
  (dated 18 May 2020). PRIMARY.
  「駐車廠...提供列車進行停駐儲存及相關整備，規劃有9股道」;「維修廠...主要進行列車檢修、
  檢測、測試、保養、清潔等作業，規劃有5股道」.

### Length — three figures, and what each measures

- **7.5 km, NTMC's own headline figure**, matching **TDX's `RouteLength`
  field exactly** for route K-1 (Shuangcheng–Shisizhang).
  Sources: NTMC opening releases (node=544, node=578) — 「安坑輕軌全線7.5公里，
  設有9座車站」 — and `data/tdx/NTALRT/route.json`, `"RouteLength": 7.5` for
  `"RouteID": "K-1"`. Both PRIMARY. High confidence.
- **7.1 km, TDX's `CumulativeDistance` to the last station.** Source:
  `data/tdx/NTALRT/station-of-route.json`, K01 `CumulativeDistance: 0` to
  K09 `CumulativeDistance: 7.1`. PRIMARY (TDX open data). This is the
  station-to-station chainage — the distance a passenger's journey actually
  covers between K01 and K09.
- **7.67 km, zh.wikipedia's `路線長度` (route length) figure**, distinct in
  the same infobox from its own `營運長度` (operating length) of **7.5 km** —
  which matches NTMC's figure exactly. Source: 維基百科, [安坑輕軌](https://zh.wikipedia.org/zh-tw/安坑輕軌).
  SECONDARY. Its route-description sentence gives the reason for the larger
  figure: the line is described as running **「起自安坑機廠，迄於...十四張站，
  全長7.67公里」** — starting at Ankeng Depot itself, not at K01. That is the
  same distinction this site's Wenhu Line page already draws between an
  operating length (station to station) and a total project/alignment length
  (depot lead included) — see `content/rail/metro/lines/wenhu-line.md`, "How long
  the line is". No single source states the arithmetic explicitly, but the
  three figures are consistent with that reading: 7.5 km NTMC/TDX operating
  length (K01–K09, or possibly depot to K09 — see Conflicts), 7.1 km TDX
  station chainage (K01–K09 only), 7.67 km zh.wikipedia's total from the
  depot. The extra ~0.17 km between 7.5 and 7.67 is not accounted for by any
  source found here.

### Underground/portal section and the 雙安隧道 tunnel

- **Neither DORTS's nor NTMC's own route or operating-pattern pages mention
  an underground section on the K01–K09 passenger route.** Both describe the
  line's construction as elevated/at-grade only. Sources: DORTS 安坑線 route
  page (as above) and DORTS, [安坑輕軌營運模式](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/O6Jma074Zqya)
  — 「安坑線...採用高架、平面混合型式建置」("built using a mixed elevated and
  at-grade form"). Both PRIMARY.
- **zh.wikipedia's structure breakdown gives 2.8 km at grade + 4.3 km
  elevated + 0.4 km underground (含出土, "including the portal") = 7.5 km**,
  i.e. the 0.4 km is inside the 7.5 km operating figure in its own accounting,
  not outside it. Source: zh.wikipedia (as above). SECONDARY.
- **A tunnel does exist on the alignment: 雙安隧道 (Shuang'an Tunnel), described
  as Taiwan's first road-and-light-rail co-built tunnel** (國內首座道路與輕軌共構的
  雙安隧道), with road tunnel bores either side and a light rail tunnel in the
  middle, and containing an unusual at-grade track crossover
  (交叉橫渡線) inside it. **DORTS's own account places it between K01 station
  and Ankeng Depot** — i.e., on the depot lead, before the passenger route's
  first station, not between two passenger stations. Source: DORTS,
  [安坑輕軌軌道新亮點！雙安隧道交叉橫渡線！](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/pRG2lD792b5z).
  PRIMARY. No source found gives the tunnel's own length. TBC.
- **These do not fully reconcile.** DORTS's own placement of the tunnel
  (between the depot and K01, i.e. outside the K01–K09 route) is in tension
  with zh.wikipedia's structure breakdown (which puts the 0.4 km underground
  section inside the 7.5 km operating total that DORTS elsewhere gives as
  elevated/at-grade only). It is possible NTMC's and TDX's "7.5 km" is itself
  measured from the depot rather than from K01 — consistent with NTMC's own
  prose describing the route as starting "由...機廠起" (from the depot) before
  reaching K01 — in which case the tunnel would sit inside the 7.5 km figure
  after all and DORTS's structure-type pages would simply be omitting a
  short section rather than contradicting themselves. **This site cannot
  settle it from the sources found and publishes both accounts rather than
  picking one.**

### K04's name

- **The station's name, settled by New Taipei's station-naming process in
  December 2017 — years before the line opened — is 耕莘安康院區
  (Cardinal Tien Hospital Ankang Branch), not 耕莘醫院.** Source:
  自由時報, ["Ankeng LRT station names announced, expected completion end of
  2021"](https://news.ltn.com.tw/news/local/paper/1158040) (安坑輕軌站名出爐 預計110年底完工),
  7 December 2017. SECONDARY, but a contemporaneous news report of a
  government committee decision, quoting the finalised list verbatim:
  「分別為K1「雙城」站、K2「玫瑰中國城」站、K3「台北小城」站、K4「耕莘安康院區」站、K5「景文
  科大」站、K6「安康」站、K7「陽光運動公園」站、K8「新和國小」站及K9「十四張」站」. The
  article also gives the naming process itself: names proposed by district
  offices in consultation with local wardens (里長), historians and elected
  representatives, then decided by the city's own 「捷運車站命名、更名或名稱加註
  評審小組」 (metro station naming/renaming review panel).
- **Confirmed independently by three further primary sources**: NTMC's own
  station page, [K04耕莘安康院區](https://www.ntmetro.com.tw/basic/?mode=detail&node=607)
  — the page's own title and its stated location, 「安一路與車子路路口」; NTMC's
  full station list (node=10137, as above); and Taiwan MOTC's TDX platform,
  `data/tdx/NTALRT/station.json`, `"StationID": "K04", "StationName":
  {"Zh_tw": "耕莘安康院區", "En": "Cardinal Tien Hospital An Kang Branch"}`.
  All PRIMARY. High confidence — four independent primary records agree.
- **"耕莘醫院" does appear as a shorthand in some secondary round-ups**
  (found in AI-summarised search results drawing on general real-estate and
  news round-up sites), most plausibly because 耕莘安康院區 is a branch campus
  of the larger 耕莘醫院 (Cardinal Tien Hospital) group and some secondary
  writers drop the qualifier. No primary source found here uses "耕莘醫院"
  alone as the station name. This resolves the lead file's open question:
  the official/signage name is 耕莘安康院區.

### Service pattern

- **Two patterns**: full-line 全程車 (K01–K09, about 21 minutes) and
  short-working 區間車 (K06–K09, about 9 minutes). Source: DORTS,
  [安坑輕軌營運模式](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/O6Jma074Zqya).
  PRIMARY. 「全程車從K1雙城站到K9十四張站，行駛時間約21分鐘；區間車則從K6安康站到K9
  十四張站，行駛時間約9分鐘」. Matches TDX `route.json`: route K-1 (K01–K09)
  `TravelTime: 21`; route K-2 (K06–K09) `TravelTime: 9`.
- **Headways (pre-anniversary-change baseline)**: overlap section K06–K09,
  about 7.5 min peak / 15 min off-peak; non-overlap section K01–K05, about
  10–15 min peak / 15 min off-peak. Source: same DORTS page. PRIMARY.
- **The doors do not open automatically — passengers must press a button.**
  Source: same DORTS page. PRIMARY. 「上下車也要注意按下車門按鈕列車門才會打開」.
- **At K09 十四張, both side platforms can be used for boarding.** Source:
  same DORTS page. PRIMARY. 「特別注意2側月台皆可搭乘」.

### The first-anniversary service change

- **After a year of operation, NTMC reported cumulative ridership of 2
  million and a daily average of 5,600, with growth concentrated on the
  non-short-working section (K05 Jingwen University of Science and
  Technology to K01 Shuangcheng)**, and converted the peak-hour short
  workings to full-line running with tighter headways from 26 February
  2024. Source: NTMC, ["Ankeng LRT commuter ridership growing steadily —
  peak short-working converted to full-line running, headway to 6
  minutes"](https://www.ntmetro.com.tw/basic/?mode=detail&node=712)
  (安坑輕軌通勤運量穩定增長 尖峰時段區間車將改為全線行駛 縮短班距可達6分鐘一班), 20
  February 2024. PRIMARY, the operator's own press release. High confidence.
  「112年今累積運量已達200萬人次，目前日均運量為5600人次」. Morning peak
  (06:30–08:30) short-workings became full-line with headway tightened to
  6–8 minutes; evening peak (17:00–20:00) similarly, tightened to 8–10
  minutes. Off-peak sections (06:00–06:30, 09:00–17:00, 20:00–24:00, and
  weekends/holidays) were left at their existing roughly 15-minute headway
  to keep pace with Circular Line transfers, and were **not** part of this
  change. This corrects the lead file's flat "tightened to 6 minutes":
  the operator's own release gives 6–8 minutes for the morning peak and
  8–10 for the evening peak, not a single figure.

### Rolling stock

- **Built by Taiwan Rolling Stock Company (台灣車輛股份有限公司), in partnership
  with Germany's Voith Engineering Services.** Source: NTMC,
  [輕軌列車](https://www.ntmetro.com.tw/basic/?mode=detail&node=19). PRIMARY.
  「台灣車輛股份有限公司與德國福依特公司(Voith Engineering Services)跨國合作」.
  This is the operator's own page describing both New Taipei light rail
  lines' rolling stock together — the design is shared, not merely assumed
  to match Danhai's.
- **30 trains built to this design in total, split 15 for Danhai and 15 for
  Ankeng.** Source: same NTMC page. PRIMARY. 「輕軌列車共30列車(淡海15列車+安坑
  15列車)」.
- **5 cars per train; capacity 265 (62 seated, 203 standing).** Source: same
  NTMC page. PRIMARY.
- **Maximum speed 70 km/h under overhead wire, 50 km/h on
  battery/wire-free sections.** Source: same NTMC page. PRIMARY.
  「有架空線路段 70km/h；無架空線路段 50km/h」.
- **Livery: 光耀金 (Radiant Gold), chosen by public vote.** Source: same NTMC
  page. PRIMARY. 「由民眾所票選」. NTMC's page does not itself list the losing
  options; the four-way shortlist (光耀金, 祥紅金, 高雅紫, 青翠綠) appears in
  zh.wikipedia (SECONDARY) and is treated here as a lead rather than
  independently confirmed — the vote itself and the winning colour are
  primary-sourced, the full shortlist is not.

### 安心橋 An-Xin Bridge

- **502 m, three-span continuous asymmetric cable-stayed bridge, 130 m
  pylon, crossing a 400 m-wide reach of the Xindian River, between K08 新和
  國小 and K09 十四張.** Source: DORTS,
  [安坑輕軌最困難的工程—安心橋](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/oa1ZKpQXmB9V)
  (18 September 2020). PRIMARY. 「全長502公尺的安心橋，採三跨連續不對稱斜張橋設計，跨越
  寬度400公尺的河川地...塔高130公尺」. Called by DORTS itself 「安坑輕軌難度最高的
  工程」 (the line's most difficult engineering work), not a route
  superlative.
- **The specific superlative — "Taiwan's first single-pylon cable-stayed
  rail composite bridge, maximum span 225 m, currently the longest span in
  Taiwan's rail transport system"** — is DORTS's own claim, from a
  bridge-comparison article, and is about the **longest span**, not
  outright "longest bridge". Source: DORTS,
  [臺灣輕軌特色橋梁 ── 淡海藍海橋・安坑安心橋・高雄愛河橋](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/r6421Qxv29nR).
  PRIMARY. 「臺灣首座單塔斜張橋型軌道複合式橋梁，最大跨度達225公尺，為目前國內鐵路運輸
  系統中最長跨度」. Comparators in the same article: Danhai's 藍海橋 at 120.7 m,
  Kaohsiung's 愛河橋 at roughly 96 m — both much shorter overall bridges, so
  the comparison is of a different order to a 502 m structure regardless of
  which superlative is used.
- **A broader claim — "currently Taiwan's longest rail bridge" (國內最長軌道橋)
  — is attributed to 方一昇, a Sinyi Construction Development project
  director, not to DORTS itself**, plus a pylon weight of about 3,450
  tonnes. Source: 中央社 (CNA),
  [安坑輕軌2／502公尺安心橋 安坑輕軌跨新店溪銜接環狀線](https://www.cna.com.tw/news/aloc/202109250028.aspx),
  25 September 2021. SECONDARY, but a named, attributed on-record quote from
  a named engineer, not an anonymous claim. **This is a genuine conflict of
  scope, not of fact**: DORTS's own material claims the longest *span*
  (225 m) among domestic rail bridges; the contractor's project director,
  quoted by CNA, claims the longest rail bridge outright. Both are published
  here rather than one being picked.

### The depot platform trial

- **From 1 July to 31 December 2024, Ankeng Depot's boarding platform opened
  for weekday-morning passenger service at 06:28 and 07:16**, explicitly as
  an evaluation of whether the platform should become a full station.
  Source: zh.wikipedia (secondary, but the date range matches primary
  reporting below) and, independently, New Taipei City Government's own
  press release extending the trial:
  [市政新聞－安坑輕軌機廠試辦搭乘踴躍 再延長至12月底](https://www.ntpc.gov.tw/ch/home.jsp?id=28&dataserno=202408300041).
  PRIMARY. 「經檢視近8週搭乘情形平均每日兩班車共約有50人次」("about 50 riders a day
  across the two trips, over the past 8 weeks")；「長期持續觀察在地民眾搭乘輕軌成效」
  (to keep observing local ridership over the longer term). Fares on the
  extra trips were calculated as though boarding from K01 雙城, i.e. the
  depot-to-K01 leg was not itself charged.
- **The trial was extended twice from an initial, narrower window**: it
  began as a 1–26 July 2024 pilot of two peak extra trips, was extended to
  30 August, then to 31 December 2024, each time citing strong uptake.
  Source: 聯合新聞網 (UDN) reporting, cross-referenced against the New Taipei
  government release above for the final extension. SECONDARY for the
  chronology of extensions, PRIMARY for the final one.
- **No source found states what happened after 31 December 2024** — whether
  the trial lapsed, was made permanent, or the platform became a numbered
  station. Searches in both English and Chinese for a 2025 follow-up
  returned nothing on this specific question. TBC — settled by a New Taipei
  DORTS or NTMC announcement post-dating December 2024, not yet found.

### Fares and the loyalty rebate

- **Base fare NT$20, maximum NT$25, stepped by distance — matching Danhai
  LRT's fare structure.** Source: NTMC opening release (node=578, node=544).
  PRIMARY. 「票價比照淡海輕軌採階梯費率制，一段票價為20元，最高25元」.
- **常客回饋金 (frequent-rider rebate): every NT$200 accumulated on an
  e-ticket returns NT$50.** Source: same NTMC release. PRIMARY. 「搭乘每滿200元
  即可回饋50元」. This is stated in the operator's own Ankeng-specific
  announcement, not merely inferred from a general New Taipei light rail
  scheme (a wider New Taipei light-rail rebate scheme covering both Danhai
  and Ankeng from 2020 is also reported in secondary round-ups, but the
  Ankeng-specific figure is independently confirmed here).
- **TPASS 基北北桃1200 monthly pass covers Ankeng LRT rides.** This is widely
  reported in secondary sources and consistent with the pass's general
  scope (all rail, light rail, and bus services across the four
  municipalities). **However, NTMC's own page listing where the pass can be
  bought does not list K09 or any Ankeng LRT station as a sales point** —
  only Circular Line stations and two Danhai LRT stations. Source: NTMC,
  [｢TPASS行政院通勤月票(基北北桃)｣悠遊卡在新北捷運哪裡可以購卡？](https://www.ntmetro.com.tw/basic/?mode=detail&node=659).
  PRIMARY. 「可於下列新北捷運有詢問處車站購買：(1)環狀線各車站。(2)淡海輕軌紅樹林站(V01)與
  淡水漁人碼頭站(V26)」. This directly **contradicts** secondary claims (found
  in search-engine summaries, not independently verified against their own
  primary sources) that K09 sells the pass. Published as a conflict: the
  pass is usable for riding, but this site cannot confirm it is sold at any
  Ankeng LRT station.

### The 3 April 2024 earthquake

- **The line was affected by the 3 April 2024 Hualien earthquake and
  resumed normal service at 16:30 the same day, at a 15-minute headway.**
  Source: NTMC, [新北捷運兩線輕軌恢復正常營運](https://www.ntmetro.com.tw/basic/?mode=detail&node=719).
  PRIMARY. 「安坑輕軌已於16：30恢復正常營運，班距為15分鐘」.
- **Immediately after the quake, K09–K06 ran single-track bidirectional and
  K06–K01 ran a partial service**, before full restoration. Source: NTMC,
  [0403地震說明](https://www.ntmetro.com.tw/basic/?mode=detail&node=716). PRIMARY.
  「安坑輕軌k9至K6以單線雙向營運，K6至K1局部營運」.

### Ridership since

- **2025 full-year ridership reached about 2.03 million, but only 65.38% of
  NTMC's own budgeted target** (ticket revenue 70.02% of budget), while the
  three New Taipei light-rail/circular lines together reached 93.5% of
  their combined annual target, the company's best year yet on that
  combined measure. Source: 聯合新聞網 (UDN),
  [安坑輕軌運量僅達標65% 新北捷運：整體路網達成率93.5%](https://udn.com/news/story/7323/9655456).
  SECONDARY, reporting the operator's own figures; not independently checked
  against an NTMC or DORTS primary release, which was not found in this
  search. Confidence: Medium.

### Place name

- **安坑's old name was 暗坑 (Hokkien Àm-kheⁿ), and the area was renamed in
  1801 by Lin Deng-xuan (林登炫), grandson of the pioneer Lin Tian-cheng
  (林天成), because the old name "sounded unpleasant."** Source: DORTS,
  [為什麼叫做「安坑」輕軌呢?](https://www.dorts.ntpc.gov.tw/documentary/articleInfo/vKR2L3J9mJGp).
  PRIMARY. 「安坑的舊名為暗坑（閩南語：Àm-kheⁿ），原意林木蓊鬱的山谷...兩側均為地勢較高之
  山區，中間下凹地形謂之坑」. This corrects the lead file, which gave only the
  bare translation "dark valley" with no source and no date for the
  renaming.

---

## Conflicts

Published side by side, not resolved:

1. **Route length**: 7.5 km (NTMC, and TDX's `RouteLength` field) vs 7.1 km
   (TDX's own `CumulativeDistance` chainage between K01 and K09) vs 7.67 km
   (zh.wikipedia's `路線長度`, describing a route that starts at the depot
   rather than at K01). All three are printed on the content page with what
   each measures, following this site's Wenhu Line precedent — but unlike
   Wenhu, no source here does the arithmetic explicitly, so the reconciliation
   offered above is this site's own reading, flagged as such.
2. **Whether the 0.4 km underground/portal section is inside or outside the
   K01–K09 passenger route.** DORTS's own structure-type language for the
   route (elevated/at-grade mixed) and its own placement of 雙安隧道 (between
   the depot and K01) both suggest the tunnel is outside the passenger
   route; zh.wikipedia's structure breakdown sums the 0.4 km underground
   figure into the 7.5 km operating total, implying it is inside. Not
   settled here.
3. **The An-Xin Bridge superlative.** DORTS's own material claims the
   longest **span** (225 m) among Taiwan's rail bridges; a named contractor
   engineer, quoted by CNA, claims the longest rail **bridge** outright.
   Both published; not the same claim.
4. **TPASS purchase location.** Secondary round-ups describe K09 as a TPASS
   sales point; NTMC's own page listing sales points for that pass does not
   include any Ankeng LRT station. Published as a conflict.
5. **The first-anniversary headway change.** The lead file said flatly
   "tightened to 6 minutes." NTMC's own release gives 6–8 minutes for the
   morning peak and 8–10 minutes for the evening peak — narrower ranges, not
   one figure.

---

## Checked and failed

- **DORTS's station-naming completion article** — tried to fetch
  `dorts.ntpc.gov.tw/news/indexInfo/pRG2l4la2b5z` (surfaced by search as
  "安坑輕軌車站命名完成"). The URL returned a current news index page with no
  article matching that title or date — the article this site wanted has
  apparently rotted or the URL from search was wrong. Used the
  self-consistent 自由時報 report of the same naming decision instead (7
  December 2017), which quotes the finalised list verbatim and is treated
  as secondary rather than primary as a result. Checked 12 August 2026.
- **New Taipei government's 2017 station-name/location table PDF** — tried
  to fetch `ntpc.gov.tw/uploaddowndoc?...`. The fetch tool returned no
  readable content (PDF not parsed). Not used; superseded by the 自由時報
  article's verbatim quote of the same list. Checked 12 August 2026.
- **What happened to the Ankeng Depot platform trial after 31 December
  2024** — searched repeatedly (English and Chinese) for whether it became
  a permanent station, was discontinued, or continued informally. Nothing
  found. Recorded as a stated gap, not asserted either way. Checked
  12 August 2026.
- **The 雙安隧道 tunnel's own length** — searched; found only that it exists,
  its type (three-bore, road either side, light rail centre), and its
  location (between K01 and the depot). No figure found. Checked
  12 August 2026.
- **A primary source for the four-option 2018 livery public vote** (光耀金 /
  祥紅金 / 高雅紫 / 青翠綠) — looked for one at NTMC or DORTS. NTMC's own
  rolling-stock page confirms the winning colour was chosen by public vote
  but does not list the losing options; only zh.wikipedia does. Kept as a
  secondary-sourced detail, not elevated to primary. Checked 12 August 2026.
- **The lead file's NT$350 opening-day goody bag and foldable DIY guide
  booklet** — tried to corroborate at the K09 passenger service centre.
  Cool3c's opening-week round-up instead reports first-numbered-ticket
  passengers received a commemorative postcard, a one-day pass, and a
  NT$100 market voucher — a different set of items at a different value.
  The NT$350 bag and DIY booklet are not repeated here. Checked
  12 August 2026.

---

## Stated gaps

- **The 雙安隧道 tunnel's own length** is not established. Would be settled by
  a DORTS engineering-progress page giving its own chainage, which was
  searched for and not found.
- **The exact 0.17 km gap between zh.wikipedia's 7.67 km and 7.5 km figures**
  is not accounted for by any source found here.
- **The depot platform trial's outcome after 31 December 2024** is not
  established.
- **Per-station structure (elevated/at-grade) for K01, K03, K05, K06–K09**
  individually is inferred from the DORTS route page's general
  at-grade-to-elevated transition and one directly confirmed case (K02),
  not from a single primary table listing all nine. High confidence given
  two independent corroborating sources, but not the same standard of proof
  as (for example) Wenhu Line's two-source arithmetic identification of its
  underground pair.
- **Official English station names beyond TDX's own romanisations** are not
  separately verified against NTMC signage photographs.
