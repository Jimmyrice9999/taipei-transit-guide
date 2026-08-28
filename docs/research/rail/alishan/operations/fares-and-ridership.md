# Alishan Forest Railway fares and ridership — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes,
> not sources. `docs/research/rail/alishan/alishan-forest-railway.md` was
> checked; its own "Stated gaps" section already names ridership as
> unaddressed, consistent with what's found here — not a correction.

## What is established

### Fares

- **Main-line full fares: NT$600 for 阿里山號 (air-con reserved) and 檜木列車 (Hinoki Train); NT$540 for 中興號 (air-con local).** Source: 阿里山林業鐵路及文化資產管理處, 票價資訊, `https://afrch.forest.gov.tw/0000119`, PRIMARY, High confidence. Quoted: 「阿里山號冷氣對號車(全票) 600元」; 「檜木列車(全票) 600元」; 「中興號冷氣區間車(全票) 540元」. Independently corroborated by the reopening announcement: 「票價未調整，嘉義至阿里山單趟全票票價為600元」 (Forestry and Nature Conservation Agency, `https://www.forest.gov.tw/news/0073945`, PRIMARY, High confidence).
- **The main-line fare is distance-based**: 阿里山號/區間車 NT$8.33/km, 中興號-class local NT$7.50/km, both with a 6km minimum-distance floor. Source: 阿里山林業鐵路及文化資產管理處, 售票說明, `https://afrch.forest.gov.tw/0000270`, PRIMARY, High confidence. Quoted: 「阿里山號冷氣對號車：8.33元/每公里，起碼里程6公里。」; 「區間車：7.50元/每公里，起碼里程6公里。」 Arithmetic check: 71.6km × 8.33 ≈ NT$596–600 (matches); 71.6km × 7.50 ≈ NT$537 (close to the published NT$540).
- **A ticket to Alishan Station bundles admission to Alishan National Forest Recreation Area at no separate listed price.** Same reopening announcement, PRIMARY, High confidence.
- **Intermediate segment fares are unresolved.** Two separate fetches of the fare-matrix table returned different figures for the Chiayi–Fenqihu segment (NT$384 vs NT$225) — a wide multi-column table exactly matching the kind this project's own sourcing rules warn is prone to scrambled extraction. Not published; only the corroborated endpoint fares are used.
- **Branch-line flat fares**: Zhushan Line NT$150 full/NT$75 half; Shenmu Line NT$100 full/NT$50 half; Zhaoping (沼平) Line NT$100 full/NT$50 half. Same fare-information page, PRIMARY, High confidence, verbatim table cells confirmed on a second, targeted fetch.
- **Branch-line day/two-day passes**: one-day NT$400 full/NT$200 half; two-day NT$500 full/NT$250 half, covering all three branches, unlimited rides within the stated dates, non-refundable once used, excludes the special New Year Zhushan sunrise train. Source: 阿里山林業鐵路及文化資產管理處, 支線周遊券, `https://afrch.forest.gov.tw/0000441`, PRIMARY, High confidence.
- **Concession fares, all half-price**: seniors 65+ with ROC ID; disability-certificate holders plus one necessary companion; children aged 6–11 or height 115–149cm. Under-6 or under-115cm children ride free without a seat, capped at 2 per fare-paying adult; licensed tour guides (valid MOTC card) ride free. Source: same fare page, PRIMARY, High confidence, quoted verbatim.
- **Booking windows**: station-counter sales open 12 days before travel (inclusive); online booking opens on a rolling 1–14-day window. The Zhushan sunrise line's online booking for next-day travel closes at noon the day before. Per-ID cap: 6 tickets per travel date, 12 for a same-transaction round trip. First itinerary change free; second change and cancellations cost 10% of the fare. Full fee-free refund within one year for tickets bought during an announced typhoon warning. Source: 阿里山林業鐵路及文化資產管理處, 售票說明 and 常見問答 (`https://afrch.forest.gov.tw/faqs`), both PRIMARY, High confidence, quoted verbatim.
- **Zhushan same-day capacity is explicitly limited but not quantified**: sales open 30 minutes before the first published departure, with "a limited number of tickets" per day — no specific number stated anywhere found. Stated gap.
- **No lottery/ballot booking system was found.** Not confirmed as absent, only as not found in the pages checked.
- **No fare-structure change was found other than the negative confirmation that fares were unchanged at the July 2024 reopening.** No historical fare table or chronology entry for prior increases exists on the operator's own chronology page (`https://afrch.forest.gov.tw/0000642`) or on zh.wikipedia.
- **TPASS coverage is unconfirmed either way.** `tpass.motc.gov.tw` failed to resolve (DNS failure, not an HTTP error) in the scout's environment. An Executive Yuan page on the TPASS 2.0 plus rebate scheme describes it as targeting 91 intercity bus routes and does not mention rail or the Alishan Forest Railway at all. The operator's own FAQ and fare pages never mention TPASS. Report as "nothing found answers this," not as a confirmed exclusion.
- **A stale FAQ entry was found and should not be treated as current**: the operator's own FAQ (`https://afrch.forest.gov.tw/faqs`) still answers a booking question by stating the line has not yet fully reopened and runs only Chiayi–Shizilu — directly contradicted by the operator's own 6 July 2024 reopening announcement and current 16-station timetable. Recorded so this stale page isn't mistaken for current service status in future research.

### Ridership

- **A monthly operations-statistics PDF, January 2014 – December 2023, was fetched and text-extracted directly by the main session** (the scout that researched this could not extract it — no Bash/pdftotext access). Source: 阿里山林業鐵路及文化資產管理處, 林鐵103年1月至112年12月營運資訊, `https://afrch.forest.gov.tw/File.aspx?fno=85892` (linked from `https://afrch.forest.gov.tw/0000392`), PRIMARY, High confidence — fetched with `curl`, extracted with `pdftotext`, and parsed programmatically (not by hand) to avoid transcription error; positional alignment between month labels and values was verified against a `pdftotext -layout` rendering of the first data row before trusting the full parse. The table gives monthly passenger counts (旅客人數), passenger-km (延人公里數), seat-km (座位公里數) and load factor (承載率), each split into 本線 (main line) and 支線 (branch lines: Zhushan/Shenmu/Zhaoping combined).
- **Annual passenger totals, computed by this project from the raw monthly figures** (main line / branch lines combined):
  | Year | Main line | Branch lines |
  |---|---|---|
  | 2014 | 149,920 | 1,831,147 |
  | 2015 | 161,527 | 1,783,861 |
  | 2016 | 172,987 | 1,465,152 |
  | 2017 | 185,313 | 1,178,869 |
  | 2018 | 113,773 | 992,560 |
  | 2019 | 202,248 | 1,027,941 |
  | 2020 | 201,746 | 801,441 |
  | 2021 | 130,306 | 519,645 |
  | 2022 | 195,947 | 735,507 |
  | 2023 | 248,395 | 960,834 |

  These are **derived figures**, computed by summing the operator's own published monthly numbers — not a total the operator itself states in one place — and are presented as such. Branch-line ridership consistently runs 5–10x main-line ridership throughout the decade, reflecting the branches' much shorter length and status as popular short excursions (notably the Zhushan sunrise line) versus the long main-line journey to Alishan.
- **A data anomaly in the source, published as found, not explained away**: three consecutive months in mid-2019 (July–September, ROC 108年7-9月) show negative or zero main-line passenger and passenger-km figures in the operator's own PDF (e.g. -1,505 passengers in one month, -47 in the next, 0 in the third, with seat-km also reading 0 for the same months). This coincides with a period the main line was known to be affected by service disruption, but no source read explains the negative figures specifically — they may represent an accounting correction rather than literal negative ridership. Reported as it appears in the primary source, not smoothed over.
- **This series ends in December 2023, seven months before the July 2024 full-line reopening** — it therefore cannot show current or post-reopening ridership, and does not reach back to a pre-2009 (pre-Typhoon-Morakot) baseline, since it only starts in 2014.
- **No annual ridership figure, COVID-era figure, or post-reopening recovery figure was found published anywhere as a stated total** — the operator's own news archive was checked specifically around the plausible 6 July 2025 one-year-anniversary window (afrch.forest.gov.tw/AllNews and forest.gov.tw/news, paginated manually) and no retrospective article with ridership numbers was found in that window. zh.wikipedia's article contains no ridership figures at all — checked directly, confirmed absent, not merely unsearched.

## Conflicts

- **Chiayi–Fenqihu segment fare: NT$384 vs NT$225**, from two different fetches of the same fare-matrix page. Not resolved; neither published.
- **The July 2024 reopening's restoration cost/duration** (a NT$2.3 billion / 15-year figure seen only in an early, broad paraphrase) is unconfirmed on a targeted re-fetch and not published here.

## Checked and failed

- **DuckDuckGo, Bing, Google as WebSearch substitutes** once the scout's search budget was exhausted — all failed (CAPTCHA, irrelevant cached results, or error pages respectively).
- **data.gov.tw** search for an Alishan ridership open dataset — returned "無資料" (no data).
- **One-year-anniversary retrospective ridership article** — searched across both the operator's own news archive and the parent agency's press feed around the plausible July 2025 window; not found.

## Stated gaps

- Exact intermediate main-line segment fares beyond the two corroborated endpoints (NT$600/540 full line, ~NT$50 six-km floor): unresolved between conflicting extractions.
- Effective date of the current fare table: not stated anywhere found.
- Round-trip ticket pricing (as a distinct product from doubling the one-way fare): not found.
- Numeric daily ticket cap for the Zhushan sunrise line: a cap is confirmed to exist, but no number is published.
- TPASS coverage: unconfirmed either way, blocked by a DNS failure on the one domain most likely to answer it definitively.
- Post-July-2024 ridership recovery, in actual figures: not found anywhere searched.
- Explanation for the mid-2019 negative/zero main-line figures in the operator's own monthly data: not found; reported as it appears in the source.
