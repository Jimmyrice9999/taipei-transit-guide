> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# New Taipei Event shuttles — research

**Run date: 2026-08-19.** This report covers 4 TDX route identities in the official 活動專車 category dataset.

## What is established

The full New Taipei Department of Transportation 活動專車 dataset was fetched and read. It files these exact route-name identities under 活動專車; TDX supplies the canonical route IDs, operators, stops, sequences, shapes and municipality metadata.[^ntpc-category-event][^tdx-bus]
The New Taipei route-service dataset was fetched in full and joined by exact route name. 4 of 4 records have a current service row; 0 do not and remain TBC.[^ntpc-bus-route-data]

## Current service records

- 漁人碼頭煙火專車 / Tamsui Fisherman's Wharf Fireworks Shuttle Bus: 淡水轉運站-捷運淡水站; 6.4 km; Weekdays: 去程： - ；返程： -; Holidays: 去程：1200-2200；返程：1200-2200; 一段票.
- 新九號停車場-黃金博物館 / NeｗNinth parkinglot-Gold Ecological Park: 新九號停車場-黃金博物館; 29.6 km; Weekdays: 去程： - ；返程： -; Holidays: 去程： - ；返程： -; 一段票.
- 新九號停車場-水湳洞停車場 / NeｗNinth parkinglot-Shuinandong Parking Lot: 新九號停車場-水湳洞停車場; 29.6 km; Weekdays: 去程： - ；返程： -; Holidays: 去程： - ；返程： -; 一段票.
- 新九號停車場-九份老街 / NeｗNinth parkinglot-Jioufen Old St.: 新九號停車場-九份老街; 29.6 km; Weekdays: 去程： - ；返程： -; Holidays: 去程： - ；返程： -; 一段票.

## MRT stop-ID joins

The geometry-only join run records 2 confirmed stop-ID joins for this category. Names were never used as confirmation; candidates outside the coordinate threshold or ambiguous same-line positions were rejected.[^tdx-bus]

## Numeric collisions

- No cross-municipality numeric identity collision was found for this category.

## Variants discovered

- No 區, 副, 繞, 延, 預, 直, 平日 or 假日 marker appeared in this category.

## Conflicts found

- The New Taipei category datasets and the TDX municipality/group metadata are different measurements: the former is the current city route-type filing, while the latter is the normalized transport-data identity. Both are published; neither is substituted for the other.

## Checked and failed

- **Exact current service row** — all 4 category identities had a matching row in the full route-service dataset fetched on 2026-08-19.

## Stated gaps

- Route opening dates, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary notice or operator record is found. Current route datasets do not establish those histories.
- The Taipei eBus catalogue was not treated as authoritative for New Taipei-specific category or service claims; New Taipei Department of Transportation datasets and pages are the source hierarchy for this group.
