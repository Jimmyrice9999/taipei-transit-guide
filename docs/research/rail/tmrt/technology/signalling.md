# Taichung Metro signalling, train control and automation — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. `docs/research/rail/tmrt/green-line.md` already records the operator FAQ's driverless claim (claim 3) in passing; this fills the gap of the actual system-equipment contract and consortium behind it, which the existing lead file does not cover.

This is a one-subject report on the Taichung Metro Green Line's train
control, automation grade and the CJ900/CJ907 system-equipment contract.
`content/rail/tmrt/` currently has no technology subdirectory.

## What is established

- **The Green Line's own operator FAQ, fetched and read directly (not from a search snippet), states the system uses "全自動無人駕駛" (full automatic driverless operation), with an average operating speed of 28.4 km/h and a maximum cruising speed of 75 km/h.** Source: Taichung Metro Corporation (臺中捷運股份有限公司), `常見問答` (Frequently Asked Questions), `https://www.tmrt.com.tw/our-services/faq`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly, not summarised). Original-language basis: `臺中捷運綠線電聯車，車輛型式為鋼軌鋼輪，車體材質為不銹鋼，營運速度平均為28.4公里/小時，巡航最大速度為75公里/小時，採全自動無人駕駛。` This is the operator's own plain-language claim of driverless operation; it is not accompanied anywhere on this page by a GoA (Grade of Automation) classification number, and none is published here as if it were.
- **The CJ900/CJ907 contract covers the Green Line's entire system-equipment scope from the Beitun depot to G17, split into six named subsystems: Operation Control System (行車監控系統, OCS), Automatic Fare Collection System (自動收費系統, AFC), Communication System (通訊系統, COM), Depot Equipment (機廠維修設備, DEQ), Electric Multiple Unit System (電聯車系統, EMU), and Power Supply System (供電系統, PWR).** Source: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局), `CJ900標/CJ907標` project record, `https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly). Original-language basis: `工程範圍自北屯機廠至G17，包括機廠、行控中心及相關捷運系統設施，包括電聯車、行車監控、供電、通訊、機廠維修設備及自動收費6個子系統`. The bureau's own subsystem list uses "行車監控系統" (Operation Control System) as the closest named equivalent to what other operators on this site call "signalling" — no subsystem here is separately labelled 號誌系統 (signalling system) by name.
- **The CJ900/CJ907 contract was won by a joint venture of three firms: Kawasaki Heavy Industries (Japan), Alstom Transport (France) and China Engineering Corporation (中鼎工程, domestic), for approximately NT$10.908 billion, starting 21 April 2011 (民國100年4月21日) with a duration of NTP+2,358 days.** Same source, PRIMARY, High confidence. Original-language basis: `得標廠商：由日商川崎重工業株式會社、法商阿爾斯通運股份有限公司及國內中鼎工程股份有限公司共同承攬` and `契約金額：約新臺幣109億800萬元` and `開工日期：100年4月21日開工`. The bureau's own project page does not state which of the three firms supplied which of the six subsystems — it names the consortium as a whole against the whole contract scope. This page does not infer that Alstom specifically supplied the Operation Control System, or that Kawasaki specifically supplied the EMU system, beyond what is separately established for rolling stock (see the companion rolling-stock research file).

## Conflicts

None found — no other source addressing this contract or the automation claim was located this session.

## Checked and failed

- **A specific product/brand name for the Operation Control System** — checked 2026-08-28; neither the operator FAQ nor the CJ900/CJ907 bureau project page names a signalling or train-control product (no "CBTC," no vendor-branded system name of the kind other operators' pages carry, e.g. WESTRACE or Innovia). The bureau's project page describes contract scope and consortium only.
- **A stated GoA (Grade of Automation) classification** — checked 2026-08-28; the operator's own "全自動無人駕駛" (full automatic driverless operation) wording is a plain-language claim, not accompanied by a GoA1–GoA4 number on the page that states it. This page does not translate the operator's own words into an industry GoA figure that the operator itself did not state.
- **Which of the three CJ900/CJ907 consortium members supplied the Operation Control System specifically** — checked 2026-08-28; the bureau's page names the consortium against the whole six-subsystem contract, not per-subsystem. Not stated by any source read.
- **Search-engine queries for a Taichung Metro OCS/signalling vendor name** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query. Findings rest on direct fetches of two URLs already in the existing corpus (the operator FAQ and the CJ900/CJ907 bureau page).

## Stated gaps

No source found gives a branded product name for the Green Line's train
control/signalling system, unlike this project's TRA, KRTC and TYMC
technology pages, each of which found at least one named product. Which
CJ900/CJ907 consortium member supplied which of the six subsystems is not
stated by the one primary source read. A formal GoA classification for the
driverless claim is TBC — the operator states driverless operation in plain
language but not as an industry grade number.
