# Taiwan Railways operations and ridership — research report

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page or PDF.

**Checked:** 27 August 2026. **Subject:** TRA network passenger-performance statistics and the current timetable-family boundary.

## What is established

### June 2026 monthly statistical report

- **English title:** Monthly Statistical Report of Taiwan Railway — June 2026
- **Original title:** `臺灣鐵路統計月報`
- **Publisher:** National Taiwan Railways Corporation (`國營臺灣鐵路股份有限公司`)
- **URL:** https://www.railway.gov.tw/tra-tip-web/tip/file/7bf499cd-6c63-4277-ac88-7dc3807f8d87
- **Class:** PRIMARY
- **Confidence:** High for the report's stated measures and periods; it is the operator's full 45-page statistical report, not a station-level asset or ridership register.
- **Original-language basis:** `民國115年6月 客運業務 （1）客運人數：18,583,868人次。每日平均619,462人次...本年1至6月(119,278,790人次)較上年同期減少2.73%。`
- **Original-language basis:** `（2）延人公里：792,603,914人公里...本年1至6月(5,167,715,332人公里)較上年同期減少6.32%。`
- **Original-language basis:** `（7）客座利用率：49.62%...（8）客運列車準點率：93.00%。`
- **Original-language basis:** the annual comparison row `民國114年 2025 242,772,738 10,764,554,799 20,732,900,478 44.3` and the 2024 row `237,070,271 10,791,380,719 17,419,839,258 45.5`.

The full report was opened. Table 1 gives the June 2026 monthly and cumulative passenger results, Table 2 classifies passengers, Table 3 gives seat utilisation, Table 4 gives passenger revenues, Tables 5–11 cover freight and transportation, and Tables 12–16 cover finance, staffing, maintenance and rolling stock. The report therefore supports a dated network operating layer; it does not expose a transcribed current station-by-station ridership register in this pass.

### Current timetable-family index

- **English title:** Regular Taiwan Railway timetable downloads
- **Original title:** `定期行駛列車時刻表`
- **Publisher:** National Taiwan Railways Corporation (`國營臺灣鐵路股份有限公司`)
- **URL:** https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8
- **Class:** PRIMARY
- **Confidence:** High for the service-family names, directions and effective date printed on the operator index; the linked PDF/ODS files remain separate timetable artefacts.
- **Original-language basis:** `最後更新時間：2026/06/13` and `115年7月1日起實施`.
- **Original-language basis:** `對號快車` lists Western, Eastern and South Link directions; `西部區間列車（非對號快車）` lists ten directional groups; `東部區間列車（非對號快車）` lists four groups; and `支線（非對號快車）` lists `平溪/深澳線`, `內灣/六家線`, `集集線` and `沙崙線`.

The full operator page was opened through the current and preceding timetable sections. It links PDF and ODS downloads for each family and distinguishes the files effective from 1 July 2026 from those effective through 30 June 2026. The page is a service-family index, not a complete station-by-station stopping-pattern transcription.

### Public statistical-information index

- **English title:** Taiwan Railway statistical information
- **Original title:** `臺鐵統計資訊`
- **Publisher:** National Taiwan Railways Corporation (`國營臺灣鐵路股份有限公司`)
- **URL:** https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-3
- **Class:** PRIMARY
- **Confidence:** High for the publication categories visible on the current operator page.
- **Original-language basis:** the page separates `統計資料(月報)`, `統計資料(年報)` and `臺鐵公務統計報表`.

The full index was opened. It currently exposes 115-year monthly reports, a 114-year annual report and public statistical-table categories; this establishes the operator's publication structure, not a claim that every underlying table has been extracted into this project.

## Conflicts

No direct numeric conflict was found in the opened primary records. The 2025 annual comparison row in the June 2026 monthly report is retained as a historical annual series, while the June 2026 row is a month and year-to-date snapshot; neither is substituted for the other. The timetable index's family/direction labels are a service-publication layer and are not treated as competing line identities with the TDX snapshot.

## Checked and failed

- **Station-by-station ridership table** — checked 27 August 2026. The full June 2026 monthly report was opened, but its passenger tables are network and train-category tables; no current station-level ridership row was transcribed from this report. A separate station dataset is required.
- **Complete station-by-station timetable matrix** — checked 27 August 2026. The full timetable index lists linked PDF/ODS families but does not itself provide one joined matrix of station stops, service days, headways and first/last trains. Those values remain unestablished here rather than inferred from the TDX sequence.
- **114-year annual statistical-report PDF linked from the current index** — checked 27 August 2026. The linked file timed out during the full fetch attempt, so it was not used as evidence for this page; the June 2026 report was sufficient for the published annual comparison row used here.

## Stated gaps

- A current station-level ridership dataset with a defined passenger-counting method would settle station rankings and trends.
- The linked 1 July 2026 timetable PDF/ODS files, joined to a documented station identity key, would settle current stopping patterns, service days, headways and first/last-train values.
- A dated method note is still needed before comparing monthly passenger journeys to TDX line memberships, because the operator report's passenger count is not a line-allocation field.
