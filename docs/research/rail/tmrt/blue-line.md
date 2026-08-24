# Corpus warning

`docs/research/` is a lead file, not an authority. Every claim below was checked against the cited Taichung government page, procurement record, news release or live TDX response before the content page was written. Search results and the existing Green Line research were used only to locate the primary pages.

**Checked:** 25 August 2026. **Subject:** Taichung Metro Blue Line, including the approved main project and its first route-work packages.

## What is established

### Project scope and route

- The Taichung Rapid Transit Systems Bureau describes the Blue Line as Taichung's second metro route, following Taiwan Boulevard between the port, Shalu, the civic centre and Taichung Station, with an eastern end at the new Jianguo Market. It is intended to cross the operating Green Line and connect with TRA's mountain and coast lines. **PRIMARY, High confidence:** the bureau's full Blue Line project page, read in full. Original-language basis: `捷運藍線為臺中第二條捷運，沿著臺中交通最繁忙的臺灣大道串聯山海屯區` and the route description at the page's `計畫內容`. [tcrt-blue](https://tcrt.taichung.gov.tw/content/index?Parser=1%2C6%2C46)
- The same page gives a planned length of 24.78 km, eight elevated stations, 12 underground stations, 20 stations in total and one depot. **PRIMARY, High confidence:** current project summary, not a measurement reconstructed from the package lengths. Original-language basis: `全長24.78公里` and `規劃高架車站8座、地下車站12座，共設有20座車站以及1座機廠`. [tcrt-blue](https://tcrt.taichung.gov.tw/content/index?Parser=1%2C6%2C46)

### Approval and design chronology

- The bureau records Executive Yuan approval of the feasibility study on 3 October 2018, transport-ministry approval of the comprehensive plan on 20 February 2023, Executive Yuan approval of that comprehensive plan on 29 January 2024, and environmental-impact review approval on 7 September 2022. **PRIMARY, High confidence:** the project page's `辦理情形` chronology. Original-language basis: `可行性研究於107年10月3日奉行政院核定`, `綜合規劃報告書於112年2月20日由交通部審查通過`, `於113年1月29日獲行政院核定` and `於111年9月7日通過環境影響評估大會審查`. [tcrt-blue](https://tcrt.taichung.gov.tw/content/index?Parser=1%2C6%2C46)
- The basic design was submitted for review on 23 May 2024, and the Public Construction Commission approved it after its 25 September site review and deliberation on 29 October 2024. **PRIMARY, High confidence:** the same full project page. Original-language basis: `113年5月23日...提送必要圖說文件報請交通部審查` and `公共工程委員會...於10月29日審議通過`. [tcrt-blue](https://tcrt.taichung.gov.tw/content/index?Parser=1%2C6%2C46)
- The project page says the core electromechanical system, depot and main substation package BM01 was awarded on 2 April 2025, contracted on 14 May and marked by a commencement ceremony on 26 June 2025. It also says detailed-design and supervision packages BD01, BD02 and BD03 were awarded on 9, 16 and 20 May 2025. **PRIMARY, High confidence:** the page's current progress and procurement summary. Original-language basis: `核心機電系統暨機廠與主變電站統包工程(BM01標)已於114年4月2日決標、114年5月14日訂約並於114年6月26日舉行開工典禮` and the three BD award dates. [tcrt-blue](https://tcrt.taichung.gov.tw/content/index?Parser=1%2C6%2C46)

### Construction packages

- BC11 is the first Blue Line route section to reach contract signing. The bureau's 31 July 2026 release records a 14 July award to Yili Construction, a contract value of NT$11.95758 billion, and a 1,950-calendar-day term from notice to commence. It describes a 2.49 km elevated section from the port-side Lingang Road area through B01, B02 and B03 near Wuqi and Tong Hospital. **PRIMARY, High confidence:** official release read in full. Original-language basis: `BC11標於今（115）年7月14日完成決標`, `決標金額為新台幣119億5,758萬元`, `契約工期自通知開工日起計1,950日曆天` and `全長約2.49公里`. [tcrt-bc11](https://tcrt.taichung.gov.tw/latestevent/Details?Parser=9%2C4%2C160%2C%2C%2C%2C1593)
- BC12 was awarded on 10 August 2026, according to the bureau's 11 August release. The award is NT$22.63460 billion to Far Eastern Construction, for 7.86 km between the B03 tail track and the underground transition near Xitun Road, including elevated stations B04–B08 and civil, power, signalling and communications work. **PRIMARY, High confidence:** official release read in full. Original-language basis: `BC12標...正式決標，決標金額為226億3,460萬元` and `全長約7.86公里，設置B04至B08共5座高架車站`. [tcrt-bc12](https://tcrt.taichung.gov.tw/latestevent/Details?Parser=9%2C4%2C160%2C%2C%2C%2C1600)
- The bureau's procurement ledger records BC11 as the B01–B03 contract and BC12 as B04–B08. It shows BC11's repeated tenders culminating in a 14 July 2026 award, while BC12's second tender was the latest listed event on the page updated 21 July 2026; the later 11 August news release records BC12's award. **PRIMARY, High confidence:** full procurement ledger and later official release, retained as a dated sequence rather than treated as a contradiction. Original-language basis: `BC11標(B01~B03站)`, `BC12標(B04~B08站)` and the dated `決標公告`/`第二次招標公告` rows. [tcrt-procurement](https://tcrt.taichung.gov.tw/form/Details?Parser=28%2C12%2C203%2C201%2C%2C%2C376) [tcrt-bc12](https://tcrt.taichung.gov.tw/latestevent/Details?Parser=9%2C4%2C160%2C%2C%2C%2C1600)

### Data boundary and page decision

- A live authenticated TDX probe on 25 August 2026 returned the current TMRT Green Line records: 18 stations, two directional routes, one line and one shape. It did not return a Blue Line project or operating record. **PRIMARY, High confidence for this checked response boundary:** direct MOTC TDX pull, with no inference that a future Blue dataset cannot appear. [tdx-tmrt](https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/TMRT?$format=JSON&$top=1000&$skip=0)
- This unit therefore publishes one project page and does not fabricate 20 Blue station pages. The official project page gives the total and elevated/underground split, while the procurement pages name only B01–B08; the checked TDX data contains no Blue station coordinates, geometry, facilities, timetable, ridership or operating facts. A table/project page is evidence-led at this stage; station pages should wait for station-level primary records.

## Conflicts

There is no numerical conflict among the primary Blue Line pages read in this pass. The 24.78 km and 20-station figures are project-wide values; BC11's 2.49 km and BC12's 7.86 km are two elevated construction packages, not competing totals. The procurement ledger and the later BC12 news release show a dated status update: the ledger's 16 July 2026 second-tender entry was current when its page was last modified on 21 July, while the 11 August release records the subsequent award. Those values are not averaged or silently collapsed into one undated status.

## Checked and failed

- **Blue Line operating records in TDX** — checked 25 August 2026. The live TMRT probe returned the Green Line dataset only; no Blue Line line, station, route, shape, transfer or first/last timetable record was returned. Blue operating data remains TBC.
- **Station-level Blue Line inventory** — checked 25 August 2026. The full TCRT project page gives the project-wide count and station-form split; the procurement ledger and releases identify B01–B08 but do not provide a complete bilingual station-name, coordinate or facility table. Those fields remain TBC.
- **Blue Line opening date and current physical progress percentage** — checked 25 August 2026. The full project page records approvals, awarded packages and a commencement ceremony but does not publish a verified opening date or one programme-wide construction percentage. Both remain TBC.
- **Taichung Traffic Bureau basic-design announcement** — checked 25 August 2026. The linked page returned a navigation shell without the announcement body in the full fetch, so it was not used as evidence; the TCRT project page itself supplies the 29 October 2024 approval chronology.

## Stated gaps

The next primary records needed are the approved comprehensive-plan/design volumes, the Blue Line station design and land-use tables, a machine-readable geometry or station dataset, and later construction/progress reports. These would settle the station names, coordinates, interchange details, accessibility, fares, operating plan, ridership, opening date and current construction percentage. No station-specific page is warranted until those records are fetched and read.
