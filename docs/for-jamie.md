# For Jamie

## Active handoff - 25 August 2026

Run 167 adds the national 國道客運 data layer and a 968-word sourced index page.
The full Highway Bureau timetable export has 132,398 rows, grouped into 1,837
route variants and 44 operator labels; JSON is in data/intercity-bus/ and
public/data/. The page derives ordered first/last stops and first-stop departure
summaries, and deliberately keeps fares TBC rather than creating route stubs.
Conflicts retained: 1,837 current timetable variants versus 173 May-2022
planning routes; 44 timetable labels versus 57 supervised operators; fare rule
versus no current route-level values. TBC: fares, live service, statistics,
ridership, history, fleet and terminal facilities. Fare page fetch failed;
statistics download returned HTTP 500/unsafe; TDX credentials returned 400/401.
Gates: cite 7,129; research 148/620; claims 0 ASSERTED; build 2,760 pages;
unit 234/234; check 440,731 links; a11y/facts/geometry/search clean.
Browser: zero axe across 1,862 pages, 743 screenshots and 105 print PDFs;
new page inspected at 320/375/1440. Generated audit artifacts restored;
`probes/` remains untracked.
Next: continue Part 13 with the smallest regional bus network, then Taichung,
Tainan and Kaohsiung one city at a time.
