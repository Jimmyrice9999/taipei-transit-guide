# 國內定期航線班機時刻表 — September 2026 research

**Corpus warning: `docs/research/` is leads only. Nothing here is citable until it has been checked against a primary source — see `.claude/skills/transit-research/SKILL.md`.**

**Version 1.0 — 7 September 2026. Status: verified against the full CAA index page and downloaded September XLSX.**

## What is established

- **The CAA publishes a September 2026 domestic scheduled-flight workbook.** Source: *Domestic scheduled-route flight timetable*, `https://www.caa.gov.tw/RegularFlight.aspx?a=268&lang=1`, and its full attachment `https://www.caa.gov.tw/FileAtt.ashx?id=41066&lang=1`, PRIMARY, High confidence because the index page was fetched and the binary XLSX was downloaded and parsed on 2026-09-07. Original-language basis: the page's `國內定期航線班機時刻表`, the file entry `1 - 2026年9月`, the workbook title `2026/09/01~2026/09/30` and the index warning `僅供參考，如有異動，正確時間仍以航空公司公告為準`.
- **The workbook contains 285 timetable rows after its title and header rows.** Source: the full XLSX above, PRIMARY, High confidence. Original-language basis: each row has the columns `航線`, `公司`, `班次`, `離場時間`, `到場時間`, `飛行日期`, `機型` and `備註`; 285 non-header rows were parsed.
- **The workbook contains 48 directional route labels and 24 normalized undirected airport-pair families.** Source: the same full XLSX, PRIMARY, High confidence. Method: retain every route label containing `→`, then normalize each pair by sorting its two endpoint names; this preserves directional row counts separately from the family count.
- **The three operator labels in the workbook are UNI Air / 立榮航空, Mandarin Airlines / 華信航空 and Daily Air / 德安航空.** Source: the full XLSX, PRIMARY, High confidence. Original-language basis: the `公司` cells `立榮航空`, `華信航空` and `德安航空`.
- **The 24 families include mainland–island pairs and island links.** Source: the full XLSX, PRIMARY, High confidence. The normalized pairs are Taipei–Kinmen, Taipei–Penghu, Taipei–Nangan, Taipei–Beigan, Taipei–Taitung, Taipei–Hualien, Taichung–Kinmen, Taichung–Penghu, Taichung–Nangan, Taichung–Hualien, Tainan–Kinmen, Tainan–Penghu, Chiayi–Kinmen, Chiayi–Penghu, Kaohsiung–Kinmen, Kaohsiung–Penghu, Kaohsiung–Nangan, Kaohsiung–Hualien, Kaohsiung–Qimei, Kaohsiung–Wang'an, Penghu–Kinmen, Penghu–Qimei, Taitung–Green Island and Taitung–Orchid Island.
- **Daily Air appears on the island records for Taitung–Green Island, Taitung–Orchid Island, Kaohsiung–Qimei, Kaohsiung–Wang'an and Penghu–Qimei.** Source: the full XLSX, PRIMARY, High confidence. Original-language basis: the `德安航空` operator cells on those route labels.

## Method and limits

The public CAA page is the current source boundary for the national timetable,
but its fetched HTML exposes the month selector and download link rather than a
stable route catalogue. The XLSX is therefore treated as a dated build-time
source, not as a live API. The route-family count is an explicitly derived
normalization of the workbook's route labels; it is not a count of flights,
seats, aircraft or guaranteed daily departures.

The workbook includes operating-day patterns, extra-flight notes, cancellations
and aircraft substitutions. Those fields are retained in the source download
and represented in the content model as a reason not to flatten the month into
a timeless frequency claim. A route family is published only when at least one
directional route label appears in this official September workbook.

## Conflicts

- The CAA index page warns that the timetable is for reference and that the
  airline's announcement controls after changes. This does not conflict with
  the workbook's September validity window; it limits how the snapshot may be
  described.
- The existing Hualien and Penghu airport pages expose station-specific
  timetable surfaces. Their route-family samples must not be added to the CAA
  workbook count as if they were independent national rows; the workbook is the
  current national snapshot and the airport pages remain detailed node sources.

## Checked and failed

- **Stable national live API** — checked 2026-09-07: the official CAA page's
  fetched HTML exposes a download and filters but not a machine-readable live
  national route API. The binary September workbook is usable for a dated static
  snapshot; a live continuously refreshed interface remains out of scope.
- **Permanent route-frequency total** — checked 2026-09-07: the workbook mixes
  daily patterns, extra flights and cancellations, so it does not support a
  timeless frequency total.
- **Domestic passenger service at every historically used airport** — checked
  2026-09-07: airports and pairs absent from the September workbook are not
  asserted as active merely because an older airport page or historical route
  mentions them.
- **Route-wide current fares** — checked 2026-09-07: the CAA timetable does not
  provide a fare matrix, so fares remain a separate operator/date-sensitive
  research seam.

## Stated gaps

The next aviation pass should join the 24-family snapshot to each airport node,
add official airline or airport ground-access evidence, and preserve the
workbook's per-row exceptions where a user needs a practical travel answer.
It should not promote the normalized family count into a permanent network
total after the September validity window expires.
