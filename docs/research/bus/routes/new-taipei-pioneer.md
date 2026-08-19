> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# New Taipei MRT pioneer buses — research

**Run date: 2026-08-19.** This report covers 2 TDX route identities in the official 捷運先導公車 category dataset.

## What is established

The full New Taipei Department of Transportation 捷運先導公車 dataset was fetched and read. It files these exact route-name identities under 捷運先導公車; TDX supplies the canonical route IDs, operators, stops, sequences, shapes and municipality metadata.[^ntpc-category-pioneer][^tdx-bus]
The New Taipei route-service dataset was fetched in full and joined by exact route name. 2 of 2 records have a current service row; 0 do not and remain TBC.[^ntpc-bus-route-data]

## Current service records

- 藍海2線先導公車 / Lan Hai2: 淡海新市鎮-捷運淡水站; 15.8 km; Weekdays: 去程：0752-1750；返程：0752-1750; Holidays: 去程：0752-1750；返程：0752-1750; 一段票.
- 985萬大樹林先導公車 / 985: 新莊-捷運龍山寺站; 62.15 km; Weekdays: 去程：0515-2200；返程：0515-2200; Holidays: 去程：0600-2200；返程：0600-2200; 二段票.

## MRT stop-ID joins

The geometry-only join run records 21 confirmed stop-ID joins for this category. Names were never used as confirmation; candidates outside the coordinate threshold or ambiguous same-line positions were rejected.[^tdx-bus]

## Numeric collisions

- **Numeric identity 2:** NewTaipei 藍海2線先導公車 (new-taipei); NewTaipei 藍2 (colour-blue); Taipei 棕2 (colour-brown); NewTaipei 綠2左 (colour-green); NewTaipei 綠2右 (colour-green); NewTaipei 橘2 (colour-orange); Taipei 紅2 (colour-red); Taipei 小2 (minibus); Taipei 小2區 (minibus); Taipei 市民小巴2 (minibus); NewTaipei 三鶯2線(原812) (new-taipei); NewTaipei 安坑2線 (new-taipei); Taipei 2 (series-0-99); Taipei 內科快線2 (special-shuttle); Taipei 兒樂2號線 (special-shuttle); Taipei 內科通勤專車2 (special-shuttle). The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.

## Variants discovered

- No 區, 副, 繞, 延, 預, 直, 平日 or 假日 marker appeared in this category.

## Conflicts found

- The New Taipei category datasets and the TDX municipality/group metadata are different measurements: the former is the current city route-type filing, while the latter is the normalized transport-data identity. Both are published; neither is substituted for the other.

## Checked and failed

- **Exact current service row** — all 2 category identities had a matching row in the full route-service dataset fetched on 2026-08-19.

## Stated gaps

- Route opening dates, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary notice or operator record is found. Current route datasets do not establish those histories.
- The Taipei eBus catalogue was not treated as authoritative for New Taipei-specific category or service claims; New Taipei Department of Transportation datasets and pages are the source hierarchy for this group.
