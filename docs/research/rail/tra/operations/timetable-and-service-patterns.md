# Taiwan Railways timetable and service patterns — research report

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page or PDF.

**Checked:** 27 August 2026. **Subject:** TRA regular timetable families, sample service tables and the machine-readable archive boundary.

## What is established

### Regular timetable index

- **English title:** Regular Taiwan Railway timetable downloads
- **Original title:** `定期行駛列車時刻表`
- **Publisher:** National Taiwan Railways Corporation (`國營臺灣鐵路股份有限公司`)
- **URL:** https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8
- **Class:** PRIMARY
- **Confidence:** High for the families, effective date and file links printed on the full index; the index is not itself a station-by-station operating matrix.
- **Original-language basis:** `最後更新時間：2026/06/13`; `115年7月1日起實施`; `對號快車`; `西部區間列車（非對號快車）`; `東部區間列車（非對號快車）`; `支線（非對號快車）`.

The full index lists six reserved-express directions, ten Western local directional groups, four Eastern local groups and four branch groups: Pingxi/Shen'ao, Neiwan/Liujia, Jiji and Shalun. It links PDF and ODS files for each current family.

### Sample timetable files

- **Western Main Line:** `臺灣鐵路西部幹線對號快車時刻表（基隆→潮州）`, https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/R/KeelungToChaozhou20260701.pdf?version=115.04.09, PRIMARY, High for the table fields and notes in the full two-page PDF. Original-language basis: `車次`, `站名`, `時刻表所列各次列車之起站及中間站為開車時刻，終點站時刻為到達時刻。`
- **Pingxi–Shen'ao:** `平溪／深澳線時刻表`, https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/PingxiToShenao20260701.pdf?version=115.04.09, PRIMARY, High for the dated station columns, train rows and directions. Original-language basis: `區間車 4704 瑞芳－菁桐`; `區間車 4807 菁桐－八斗子`.
- **Neiwan–Liujia:** `內灣／六家線時刻表`, https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/Neiwan20260701.pdf?version=115.04.09, PRIMARY, High for the distinct 內灣 and 六家 rows and their printed station times. Original-language basis: `區間車 1802 新竹－內灣`; `區間車 1702 新竹－六家`; `區間車 1808 竹中－內灣`.
- **Shalun:** `沙崙線時刻表`, https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/Shalun2026070.pdf?version=115.04.09, PRIMARY, High for the multiple origins/destinations and times in the full one-page PDF. Original-language basis: `區間車 3701 臺南－沙崙`; `區間車 3705 嘉義－沙崙`; `區間車 3722 沙崙－永康`.

Together the opened PDFs establish that the regular timetable files expose train numbers, service types, endpoints, station columns, times and symbols, and that branch files can contain multiple operating patterns rather than one uniform shuttle.

### Query and XML layers

- **Train-time query:** `列車時刻／車次查詢`, https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime?lang=zh_TW, PRIMARY, High for the full page's query modes and operator warning. Original-language basis: `依時刻 依車站 依車次`; `臺鐵公司不定期微調列車班次，若您欲規劃行程，建議於出發前一週再次查詢時刻表資訊`.
- **XML archive:** `鐵路時刻表-XML`, https://ods.railway.gov.tw/tra-ods-web/ods/download/dataResource/railway_schedule/XML/list, PRIMARY, High for the dated file listing; no confidence is assigned to the XML payload because the linked octet-stream response was not parsed. Original-language basis: `鐵路時刻表-XML`; the opened listing displayed dated files from `20260827.xml` through `20261025.xml`.

## Conflicts

No direct numeric conflict was found among the opened primary records. The regular index, sample PDFs, live query page and XML archive are different publication layers. A listed family, a dated PDF row and a query result must not be treated as interchangeable evidence for a current network-wide service matrix.

## Checked and failed

- **Current first/last train register by station** — checked 27 August 2026. The index and opened examples contain dated times, but no joined network-wide first/last table was published in the material used here.
- **Current headway register by route, direction and time band** — checked 27 August 2026. The PDFs contain individual train rows, but no operator-produced headway table was opened and no headways were calculated into the page.
- **Complete train-to-station stop matrix and day-type calendar** — checked 27 August 2026. The sample PDFs provide selected dated families, not a joined all-family matrix and exception calendar.
- **XML payload and schema** — checked 27 August 2026. The archive page was fetched in full, but the linked XML response returned `application/octet-stream`, which the full-fetch tool rejected; it was not used as parsed evidence.

## Stated gaps

- A successfully fetched and versioned XML/ODS dataset would settle machine-readable train, stop, calendar and exception fields.
- A station-identity join across every family and direction would settle a current stop matrix and first/last-train derivation.
- A dated operator service plan or a defined computation from the full schedule would settle headways without mixing service types or directions.
