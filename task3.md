Read docs/framework.md and docs/run-log.md first.

This is direct user feedback from browsing the deployed site. Fix it, then build
the autonomous research machinery so content stops being the bottleneck.

Priority order if you run short: Part 1, Part 5, Part 6, then the rest.

════════════════════════════════════════
PART 0 — METHOD
════════════════════════════════════════

1. Verify visual work by rendering and LOOKING at screenshots. You have been
   wrong about rendered output repeatedly in this project — the wordmark, the
   interchange pills, the spine on article pages, BR24 falling off the rail at
   375px. Every visual claim needs a screenshot you actually examined.

2. The screenshot set has been 375 / 768 / 1440. That is why the bugs in Part 1
   were never caught. Add 1920 and 2560 permanently.

3. Run the full suite after each part. Push nothing broken.

4. Where you disagree, say so and do what's right. I would rather read your
   reasoning than get compliance.

5. Keep docs/for-jamie.md SHORT. I am low on credits and need decisions, not
   prose.

════════════════════════════════════════
PART 1 — CRITICAL LAYOUT BUGS
════════════════════════════════════════

Reported on a laptop at full screen. Reproduce at 1920px AND 2560px before
fixing — these may not appear at 1440px, which is all you have been testing.

1. Prose occupies roughly 40% of the page width at full screen. The float fix
   worked at 1440 and does not hold at larger viewports.

2. Visual artifacts around the top of line pages, near the "THE LINE" strip map.
   Specifically: a long brown line spanning the entire page width that should
   not be there.

3. The lead figure sits too close to the elevation profile.

Screenshot at 1440, 1920 and 2560 and look at all three.

════════════════════════════════════════
PART 2 — KILL THE SCOPE STATEMENTS
════════════════════════════════════════

"Planned for v2" and "0 pages" on a live site read as abandonment. The user's
reaction was blunt and correct.

Options, your judgement:
- Remove empty sections from the nav until they have content
- Replace the copy entirely with something that does not advertise absence
- Populate them (Part 5)

What must go: any page whose only content is a statement about what is not there
yet, and any "0 pages" counter.

════════════════════════════════════════
PART 3 — NAVIGATION
════════════════════════════════════════

1. NO BACK BUTTON anywhere. Reported as a top complaint. Fix site-wide.

2. Build a proper dropdown nav, like ltg.sg. Their top bar has nested dropdowns
   mirroring the site hierarchy, not flat links. Rail → Lines → each line;
   Rail → Rolling Stock → each fleet; and so on. Keyboard accessible, works on
   touch, and it must not depend on hover alone.

3. Index page descriptions are too long — the user had to scroll a full page to
   reach the links on /rail/. Nobody reads them. Cut to one or two sentences and
   put the links above the fold.

════════════════════════════════════════
PART 4 — LINK EVERYTHING
════════════════════════════════════════

The single most repeated complaint: too few links.

1. Build operator pages: TRTC, NTMC, TYMC. These do not exist and they are
   important — every fleet, line, depot and station page names an operator and
   none of them link anywhere.

2. Station pages: link the operator, the line, the depot serving that stretch,
   and any interchange lines.

3. On the network page, clicking "BR" must go to the Wenhu Line page. Every line
   code, everywhere, links to its line.

4. Audit every named entity site-wide against the link registry and report what
   is still unlinked.

════════════════════════════════════════
PART 5 — AUTONOMOUS RESEARCH: BUILD THE MACHINERY
════════════════════════════════════════

The most important part of this run. The user is out of patience with hand-fed
research files, and rightly.

BUILD:

1. A SKILL at .claude/skills/transit-research/SKILL.md encoding this project's
   sourcing discipline:
   - Mandarin sources first: zh.wikipedia, PTT, Mobile01, official
     TRTC / NTMC / TYMC / DORTS / MOTC / Taipei PTO sites, Taiwanese news
     archives, railfan wikis, academic papers
   - Every claim states its source, original-language title, URL, whether it is
     PRIMARY or SECONDARY, and a confidence level
   - Where sources conflict, publish ALL values. Never pick.
   - TBC beats a plausible number, always
   - Verify every secondary citation against the primary it claims to cite
   - FETCH FULL PAGES rather than relying on search snippets. Snippets have been
     the weak point throughout this project; the single DORTS page fetch produced
     more usable material than several rounds of searching
   - Synthesise, never translate wholesale

2. A SUBAGENT at .claude/agents/line-researcher.md that takes one subject and
   produces BOTH a research file under docs/research/ AND a content page under
   content/. Fresh context per subject, so drift does not accumulate.

3. A slash command /research-line that invokes it.

4. RUN THE SUBAGENTS IN PARALLEL, not sequentially. Spawn a batch, let them work
   concurrently, collect the results. That is the entire reason for using
   subagents — each gets a clean context window, so drift across ten subjects
   does not compound the way it does in one long session. Batch them if rate
   limits require it, but do not serialise the whole set.

5. Each subagent's brief must carry the SKILL plus these hard rules:
   - Fetch full pages, not search snippets
   - Verify every secondary citation against the primary it claims
   - Report conflicts, never resolve them by picking
   - Write BOTH the research file and the content page
   - Return a short report: what it sourced, what stayed TBC, and what
     contradicted the existing corpus

6. After all subagents return, RECONCILE. If two subjects' research disagrees on
   a shared fact — a depot, a fleet, an interchange, a date — that is a finding.
   Report it rather than silently preferring one. Ten independent researchers
   hitting the same primary sources will disagree somewhere, and those
   disagreements are exactly where the errors are.

7. Do NOT install third-party skills from any marketplace during this run. Write
   the skill yourself, from this project's own rules.

THEN RUN IT on every subject that currently lacks a real page:

  Tamsui–Xinyi Line          Songshan–Xindian Line
  Zhonghe–Xinlu Line         Bannan Line
  Circular Line              Danhai LRT
  Ankeng LRT                 Taoyuan Airport MRT
  YouBike                    Maokong Gondola
  Joint bus network          Ticketing (EasyCard / iPass / TPASS)

Use docs/research/ as LEADS ONLY. It has been wrong repeatedly — a miscounted
exit total, a wrong URL, a misread tunnel description, an inverted arithmetic
hypothesis, a feeder-colour table missing 橘 = O. Verify everything against
primary sources.

Add a warning header to every existing research file saying exactly that.

════════════════════════════════════════
PART 6 — PHOTOGRAPHS. THE BIGGEST PROBLEM.
════════════════════════════════════════

"We NEEEED photos" — said three separate times in one feedback pass.

1. Every page that can have one gets one. Not just heroes: inline photographs
   through the body of long pages.

2. Work the reviewed shortlist at docs/commons-candidates.txt for the ten
   remaining Wenhu stations.

3. Then go wide on Commons: every other line, every fleet, every depot, stations
   on other lines, the gondola, YouBike, buses, ferries. Categories exist for
   most of these.

4. Line pages need multiple images — exterior, interior, station, guideway.

5. Same licence gate, no exceptions. Pace requests; Commons rate-limits hard.

Report how many pages carry images before and after.

════════════════════════════════════════
PART 7 — MORE COLOUR, AND THE RULE HAS CHANGED
════════════════════════════════════════

The user has now said three times that there is not enough colour, most recently
"not enough by a long shot." You have argued it down twice on the grounds that
colour without meaning is decoration. That argument was right and it has now
lost.

Find places where colour carries meaning and use it:
- Line colours anywhere a line is named, not only inside badges
- Section markers on line pages keyed to that line
- Index pages coloured by their subject
- Interchange stations showing every serving line
- The data pages, which are literally about colour

Hard limits that still hold: AA contrast, the 4.6 derivation margin, no colour as
the sole carrier of information, no gradients, no decoration for its own sake.

════════════════════════════════════════
PART 8 — DIAGRAMS AND ICONS
════════════════════════════════════════

1. The elevation profile is not understood. The user said "idk what the elevation
   profile is." A diagram nobody can read is decoration. Add a plain-language
   explainer beside it, or redesign it.

2. The numbering ladder is not understood either — "idk what you're even talking
   abt." Same problem. Either it explains itself or it goes.

3. The formation diagram is not visible on fleet pages. Find out why.

4. Line icons. The user wants actual icons for lines, not only coloured badges.
   Propose something derived from each line's own character — rubber-tyred versus
   steel wheel, light rail versus heavy metro, driverless versus crewed.

5. Station badges are rarely visible and some stations show no line at all. Audit
   and fix.

════════════════════════════════════════
PART 9 — THE NETWORK PAGE
════════════════════════════════════════

1. Branch lines are missing. Xinbeitou (R22A) and Xiaobitan (G03A) should render
   in a LIGHTER HUE of their parent line colour — the user notes Xinbeitou reads
   as pinkish in official material. Derive the tint properly and check contrast.

2. Light rail is missing from the map and from the length bars. Danhai and Ankeng
   both need to appear.

3. A line is missing entirely — the user described it as "the light blue one,"
   which is Sanying (PANTONE 637C). Find out why it is not there.

4. Include all modes in the length comparison, light rail included.

════════════════════════════════════════
PART 10 — STATION PAGES
════════════════════════════════════════

1. District shows in Chinese only. Add English alongside. Applies anywhere the
   site prints a district.

2. Interchange status is only visible in the facts box. Make it obvious on the
   page itself and in the /rail/stations index listing.

3. Adjacent-station navigation is not recognisable as navigation. Redesign it.

4. Pages read thin. What would make a station page worth visiting? Photograph,
   exits, position on the line, structure, run times to adjacent stations, first
   and last train, interchanges, the depot serving that stretch, public art.
   Propose and build.

5. Only Wenhu has station pages. After Part 5, generate them for the other lines
   from TDX data.

════════════════════════════════════════
PART 11 — THE /rail INDEX IS OVERLOADED
════════════════════════════════════════

The user's own proposal, and it is a good one: do not list all rolling stock on
/rail. Use cards leading to a rolling-stock index page, WITH PHOTOGRAPHS, each
linking to its fleet page and to the lines it serves.

Apply the same pattern to depots and stations. /rail becomes a hub of
photographed cards, not a wall of links.

════════════════════════════════════════
PART 12 — PERFORMANCE
════════════════════════════════════════

Six seconds to load — most content in 2–3, then images, then fonts arriving late.
The font-swap flash is visible and needs fixing.

More images are coming from Part 6, so this gets worse before it gets better.
Report a weight and timing table, and fix the font loading order.

════════════════════════════════════════
PART 13 — FIND THE REST YOURSELF
════════════════════════════════════════

The user says there are many more bugs and that hunting them is not a good use of
their time. Agreed.

Full pass at 375, 768, 1440, 1920 and 2560. Screenshot every page type. Look at
every screenshot. Report everything wrong.

Also: some descriptions render in a different font. Find and fix.

════════════════════════════════════════
PART 14 — CONSTRAINTS
════════════════════════════════════════

- Static export only. No runtime fetching.
- The research corpus is leads, not sources. Cite the underlying material.
- Only CC or public-domain images, attribution build-enforced.
- Do not relax the claims ratchet to make a number look better.
- AA contrast and the 4.6 derivation margin hold.
- prefers-reduced-motion respected. No decorative animation.
- Mobile first. Every new device needs a mobile answer that is not "hide it".
- No third-party skills or plugins installed during this run.

════════════════════════════════════════
PART 15 — REPORTING
════════════════════════════════════════

Append to docs/run-log.md:
1. Bugs fixed, with before/after screenshots
2. Pages populated, and by which subagent
3. Reconciliation findings — where subagents disagreed with each other or with
   the corpus
4. Images added, before and after counts
5. Links added, and what remains unlinked
6. What you built for autonomous research, and how I invoke it next time
7. What you cut, and why
8. Weight and timing deltas

Then update docs/for-jamie.md. Keep it short. Point me at three screenshots
maximum.
