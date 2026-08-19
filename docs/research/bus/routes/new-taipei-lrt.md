> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# New Taipei Light-rail feeder routes — research

**Run date: 2026-08-19.** This report covers 5 TDX route identities in the official 輕軌接駁路線 category dataset.

## What is established

The full New Taipei Department of Transportation 輕軌接駁路線 dataset was fetched and read. It files these exact route-name identities under 輕軌接駁路線; TDX supplies the canonical route IDs, operators, stops, sequences, shapes and municipality metadata.[^ntpc-category-lrt][^tdx-bus]
The New Taipei route-service dataset was fetched in full and joined by exact route name. 5 of 5 records have a current service row; 0 do not and remain TBC.[^ntpc-bus-route-data]

## Current service records

- 安坑1線 / K1: 二叭子植物園-台北小城; 12.3 km; Weekdays: 去程：0600-0000；返程：0600-0000; Holidays: 去程：0615-0000；返程：0615-0000; 一段票.
- 安坑2線 / K2: 黎明清境-玫瑰中國城; 7.5 km; Weekdays: 去程：0550-0000；返程：0550-0000; Holidays: 去程：0600-0000；返程：0600-0000; 一段票.
- 安坑3線 / K3: 綠野香坡-安忠路; 13.3 km; Weekdays: 去程：0605-0000；返程：0605-0000; Holidays: 去程：0615-0000；返程：0615-0000; 一段票.
- 安坑5線 / K5: 五城社區-耕莘安康院區; 16.8 km; Weekdays: 去程：0600-0000；返程：0600-0000; Holidays: 去程：0600-0000；返程：0600-0000; 一段票.
- 安坑6線 / K6: 安泰路-輕軌雙城站; 3.45 km; Weekdays: 去程：0630-2000；返程：0630-2000; Holidays: 去程：0700-1700；返程：0700-1700; 一段票.

## MRT stop-ID joins

The geometry-only join run records 6 confirmed stop-ID joins for this category. Names were never used as confirmation; candidates outside the coordinate threshold or ambiguous same-line positions were rejected.[^tdx-bus]

## Numeric collisions

- **Numeric identity 1:** NewTaipei 安坑1線 (new-taipei); NewTaipei 藍1 (colour-blue); Taipei 棕1 (colour-brown); NewTaipei 橘1 (colour-orange); Taipei 市民小巴1 (minibus); Taipei 小1區 (minibus); Taipei 小1 (minibus); NewTaipei 三鶯1線 (new-taipei); NewTaipei 淡水-國道1號-南港車站 (new-taipei); NewTaipei 新店北新路-政大一街 (new-taipei); Taipei 1 (series-0-99); Taipei 內科快線1 (special-shuttle); Taipei 北士科1 (special-shuttle); Taipei 兒樂1號線 (special-shuttle). The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.
- **Numeric identity 2:** NewTaipei 安坑2線 (new-taipei); NewTaipei 藍2 (colour-blue); NewTaipei 藍海2線先導公車 (new-taipei); Taipei 棕2 (colour-brown); NewTaipei 綠2左 (colour-green); NewTaipei 綠2右 (colour-green); NewTaipei 橘2 (colour-orange); Taipei 紅2 (colour-red); Taipei 小2 (minibus); Taipei 小2區 (minibus); Taipei 市民小巴2 (minibus); NewTaipei 三鶯2線(原812) (new-taipei); Taipei 2 (series-0-99); Taipei 內科快線2 (special-shuttle); Taipei 兒樂2號線 (special-shuttle); Taipei 內科通勤專車2 (special-shuttle). The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.
- **Numeric identity 3:** NewTaipei 安坑3線 (new-taipei); Taipei 棕3 (colour-brown); NewTaipei 綠3 (colour-green); NewTaipei 橘3 (colour-orange); Taipei 紅3 (colour-red); Taipei 紅3區 (colour-red); Taipei 小3 (minibus); Taipei 內科通勤專車3 (special-shuttle). The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.
- **Numeric identity 5:** NewTaipei 安坑5線 (new-taipei); Taipei 藍5 (colour-blue); Taipei 棕5 (colour-brown); NewTaipei 綠5 (colour-green); NewTaipei 橘5 (colour-orange); Taipei 紅5 (colour-red); Taipei 小5區 (minibus); Taipei 市民小巴5 (minibus); Taipei 小5 (minibus); Taipei 5 (series-0-99); Taipei 內科通勤專車5 (special-shuttle). The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.
- **Numeric identity 6:** NewTaipei 安坑6線 (new-taipei); Taipei 棕6 (colour-brown); NewTaipei 綠6 (colour-green); Taipei 小6 (minibus); Taipei 市民小巴6 (minibus); Taipei 內科通勤專車6 (special-shuttle). The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.

## Variants discovered

- No 區, 副, 繞, 延, 預, 直, 平日 or 假日 marker appeared in this category.

## Conflicts found

- The New Taipei category datasets and the TDX municipality/group metadata are different measurements: the former is the current city route-type filing, while the latter is the normalized transport-data identity. Both are published; neither is substituted for the other.

## Checked and failed

- **Exact current service row** — all 5 category identities had a matching row in the full route-service dataset fetched on 2026-08-19.

## Stated gaps

- Route opening dates, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary notice or operator record is found. Current route datasets do not establish those histories.
- The Taipei eBus catalogue was not treated as authoritative for New Taipei-specific category or service claims; New Taipei Department of Transportation datasets and pages are the source hierarchy for this group.
