# Corpus warning

`docs/research/` is a lead file, not an authority. Every claim below was checked
against a cited full official page. Search results and the older systems draft
were leads only.

**Checked:** 27 August 2026. **Subject:** Taipei-region metro automation grades.

## What is established

- **GoA is a five-level operating-function scale.** DORTS's full CBTC manual page reproduces an IEC 62290-1 comparison for GoA0, GoA1, GoA2, GoA3 and GoA4, with the related operating labels SCO, STO, DTO and UTO. Source: Taipei City Government Department of Rapid Transit Systems, *Practical CBTC train-control technology — IEC 62290-1 automation-level comparison*, titleOriginal `捷運行車監控系統通訊式列車控制技術`, `https://ebook.dorts.gov.taipei/ebook/no23/files/basic-html/page29.html`, PRIMARY, High confidence because the entire page was fetched. Original-language basis: `表 1-3-2 IEC62290-1 系統自動化程度差異表`, `半自動列車操作 GoA2`, `全自動列車操作 GoA3` and `無人之列車操作 GoA4`; the notes define `STO`, `DTO` and `UTO`.
- **The grades are not interchangeable with a signalling block label.** DORTS's full summary says Taipei automation evolved from early high-capacity GoA2 trains with ATC (ATO/ATP) to fully automatic CBTC GoA4, and separately describes train-control-system and operations-control layers. Source: DORTS, *Practical signalling systems for Taipei Metro — summary*, titleOriginal `捷運號誌系統實務`, `https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page341.html`, PRIMARY, High confidence. Original-language basis: `臺北捷運自動化由早期高運量系統 GOA2 列車具有 ATC（ATO/ATP）控制至全自動無人駕駛系統（CBTC）GOA4`.
- **Wenhu is documented as fully automatic GoA4.** DORTS's full vehicle-systems page says the Wenhu Line was planned from its 1996 opening as a fully automatic unattended system and describes the transition from staffed GoA2 to GoA4. Source: DORTS, *Practical metro train-car systems — unattended train-control and management*, titleOriginal `捷運電聯車實務`, `https://ebook.dorts.gov.taipei/ebook/no21/files/basic-html/page202.html`, PRIMARY, High confidence. Original-language basis: `本局自 1996 年通車營運之文湖線，設計之初即以全自動無人駕駛系統規劃設計` and `從有人駕駛（GoA-2）轉換到現今全自動無人駕駛系統 ... GoA-4`.
- **Circular Line first phase is CBTC GoA4.** The full DORTS technical-journal abstract says the project began revenue service on 31 January 2020 with CBTC at GoA4, and calls it Taiwan's second CBTC GoA4 system after Wenhu. Source: DORTS Electromechanical Systems Engineering Office, *Fully automatic CBTC — the Taipei Circular Line example*, titleOriginal `全自動通訊式列車控制（Communication-Based Train Control）如何實現—以臺北捷運環狀線為例`, `https://ebook.dorts.gov.taipei/JRTST/ebook/no56/files/basic-html/page47.html`, PRIMARY, High confidence. Original-language basis: `此段工程採用通訊式列車控制（CBTC）系統，自動化程度皆屬全世界最高等級 GoA4（Grade of Automation 4）系統` and `為臺灣於臺北市文湖線後第 2 套採用 CBTC 無人駕駛 GoA4 系統`.
- **New Taipei's current explainer assigns GoA1, GoA2 and GoA4 by named line examples.** The full New Taipei DORTS article says GoA1 examples are Danhai and Ankeng, GoA2 examples are Tamsui-Xinyi and Bannan, and GoA4 examples are Circular and Sanying. It describes GoA4 as normal unattended CBTC operation. Source: New Taipei City Government Department of Rapid Transit Systems, *How smart is the metro? Understanding GOA automation levels*, titleOriginal `捷運有多聰明？認識GOA自動駕駛等級`, `https://www.dorts.ntpc.gov.tw/documentary/articleInfo/0g4d6N1Dd5Db?page=1`, PRIMARY, High confidence because the full page was fetched on 2026-08-27. Original-language basis: `如:淡海輕軌、安坑輕軌`, `如:淡水信義線、板南線`, `如:環狀線、三鶯線`, and `環狀線與三鶯線為GOA4無人駕駛系統`.
- **The Airport MRT source checked here documents fallback manual operation but no formal grade.** Taoyuan Metro's full 6 May 2026 notice says drivers switched to manual driving through a signalling-side fault and that automatic driving resumed after repairs. Source: Taoyuan Metro Corporation, *A14 signalling-side equipment temporary fault notice*, titleOriginal `5月6日機場捷運A14站號誌道旁設備短暫異常情形`, `https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/show-2322-1.html`, PRIMARY, High confidence. Original-language basis: `司機員改採手動駕駛模式慢速通過該區間` and `列車恢復自動駕駛模式運行`. This does not name a formal GoA grade.

The sources therefore support a named-grade table, but not a blanket inference from CBTC, driverless wording, or a manual fallback event to a formal grade for every route.[^dorts-goa-table]

## Conflicts

- **Named examples versus system-wide shorthand.** The DORTS summary describes early high-capacity systems generally as GoA2 with ATO/ATP and a driver. The New Taipei explainer names Tamsui-Xinyi and Bannan as GoA2 examples but does not separately name Songshan-Xindian or Zhonghe-Xinlu. The research keeps the explicitly named examples and does not promote the shorthand into a complete line register.
- **CBTC/driverless wording versus a formal GoA label.** The current NTMC Sanying train page says the train has a two-car unattended design and CBTC, while the New Taipei DORTS explainer explicitly calls Sanying GoA4. The former is kept as a train/system description and the latter as the formal government grade assignment; they are compatible but not treated as the same kind of evidence.
- **Fallback driving versus nominal automation.** Taoyuan Metro's 2026 notice records manual driving during a signalling fault and automatic driving after repair. That operating event does not contradict the absence of a formal Airport MRT GoA grade in the checked sources; it is a failure-mode record, not a grade declaration.

## Checked and failed

- **Complete current GoA register for every Taipei-region line and branch** — checked 27 August 2026 against the full DORTS automation table and summary, the New Taipei DORTS explainer, the current NTMC Sanying train page, the Circular Line technical article and the Taoyuan Metro notice. Named assignments were found for Wenhu, Circular, Sanying, Danhai, Ankeng, Tamsui-Xinyi and Bannan, but no complete single official route-by-route register was found.
- **Formal current Airport MRT GoA grade** — checked 27 August 2026 in the full Taoyuan Metro operating notice and the DORTS GoA references. The notice confirms manual fallback and automatic restoration but does not assign GoA2, GoA3 or GoA4; no formal grade is promoted.
- **Formal GoA3 route in the current Taipei-region network** — checked 27 August 2026 in the full DORTS IEC comparison, DORTS summary, New Taipei explainer and operator pages opened for Sanying and Airport MRT. GoA3 is defined, but no current route was identified as a named GoA3 example.

## Stated gaps

- A current operator or government route-by-route automation register would settle the formal grade of Airport MRT and any lines not named in the New Taipei explainer.
- A dated acceptance or operating record for each route would settle whether the published grade describes design intent, current nominal operation or a particular section/fleet.
- The public sources do not provide one cross-operator register joining GoA grade, CBTC generation, fallback modes, staffing and current fleet. Those fields remain separate until such a record is fetched and read.
