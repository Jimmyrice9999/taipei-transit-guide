Read docs/run-log.md and docs/research-findings.md first. Append a new 
dated section to the run log.

Priority order: fix what's factually wrong, then deepen research, then 
harden. Do not add features.

════════════════════════════════════════
PART 0 — METHOD
════════════════════════════════════════

1. The site currently publishes at least one false claim. That is the 
   most serious problem in this project and it takes precedence over 
   everything else.

2. Never write an unsourced fact. TBC always beats a plausible number.

3. Where sources conflict, publish the conflict rather than picking.

4. Distinguish primary sources (TRTC, manufacturers, government, court 
   records) from secondary (Wikipedia, news, forums, enthusiast wikis). 
   Say which you used.

5. Verify by rendering, not by reading code.

6. Run the full suite after each part.

7. Disagree with me in the log where you think I'm wrong.

════════════════════════════════════════
PART 1 — THE FALSE CLAIMS
════════════════════════════════════════

Three items flagged in §17:

1. innovia-apm-256-c370.md attributes the Adtranz acquisition to 
   Bombardier. It was Siemens, to 100% in 2001. This is unambiguous 
   corporate history — research it properly and correct it with a 
   citation. The actual lineage from Matra through GEC-Alsthom, Adtranz, 
   Bombardier and now Alstom is genuinely tangled and worth getting 
   exactly right, because the whole VAL-to-Innovia story depends on it.

2. The VAL256 re-signalling described as coinciding with the Neihu 
   extension when it began the day the line opened. Establish the actual 
   timeline with sources.

3. VAL guidance described as a central rail. VAL uses side guidance — 
   verify this properly, since it's a defining technical characteristic 
   of the system and getting it wrong undermines every other 
   engineering claim on the site.

For each: correct with a citation, or replace with TBC and say what 
would settle it. A visible gap is better than a false statement.

Then audit every other engineering and historical claim in all content 
files for the same class of error. Anything asserted without a source 
gets listed.

════════════════════════════════════════
PART 2 — DEEP RESEARCH: THE MATRA DISPUTE
════════════════════════════════════════

This is the richest story on the line and thin in English. Research it 
properly.

Cover: the original contract, the technical and commercial failures, the 
arbitration, the financial settlement, the political fallout in Taipei, 
the effect on later procurement decisions, and why the Innovia was 
chosen for the Neihu extension.

Mandarin sources expected and preferred. Cite in the original language 
with titles. Synthesise; never translate wholesale.

Produce this as a draft page at docs/drafts/matra-dispute.md — do not 
publish it. Mark confidence per claim. Flag anything where sources 
disagree, and there will be disagreement, since this was politically 
contested.

════════════════════════════════════════
PART 3 — DEEP RESEARCH: ROLLING STOCK
════════════════════════════════════════

For VAL256 and Innovia APM 256 / C370:

Fleet sizes, delivery dates and batches, car dimensions, capacity 
(seated and crush), maximum and operating speed, formation, traction, 
guidance system, propulsion, braking, doors, tyre specification and 
replacement interval, and the automation grade (GoA level).

Also: why the two fleets are incompatible, what that means 
operationally, and how they're kept separated.

Append to docs/research-findings.md. Do not publish.

════════════════════════════════════════
PART 4 — DEEP RESEARCH: DEPOTS
════════════════════════════════════════

Muzha and Neihu: site area, stabling capacity, workshop facilities, 
which fleet each maintains, connection point to the running line, 
opening date, and heavy overhaul arrangements.

Note explicitly what isn't publicly documented. Depot data is often only 
in EIA reports and construction records — say if that's where it lives 
and whether it's accessible.

════════════════════════════════════════
PART 5 — DEEP RESEARCH: INFRASTRUCTURE
════════════════════════════════════════

Track gauge, guideway construction, electrification (voltage, system, 
collection method), signalling and its generations, control centre 
arrangements, headways by time of day, and the elevated/underground 
breakdown now that BR13/BR14 are confirmed.

Also the 25.7 km figure. You established 25.17 km as operating length 
from CumulativeDistance and 25.04 km measured station-to-station. Find 
what 25.7 actually measures. It appears on zh.wikipedia as 路線長度 
against 營運長度 25.18, so it measures something real — identify it.

════════════════════════════════════════
PART 6 — DEEP RESEARCH: CURRENT DEVELOPMENTS
════════════════════════════════════════

The seat removal programme and the fleet renewal plan targeting the 
2040s. Both are recent and both are live changes to the line.

Scope, rationale, timeline, current status, public reaction, and 
official justification. Mark the renewal figures provisional — they are.

════════════════════════════════════════
PART 7 — SOURCE QUALITY AUDIT
════════════════════════════════════════

For every claim now in docs/research-findings.md, assess:
- Primary or secondary
- If secondary, does it cite a primary source, and did you check that 
  the citation is accurate — the line-colour episode proved citations 
  to official sources can be wrong
- Whether the source is likely to persist, and whether it should be 
  archived
- Confidence, stated as a level not a vibe

Produce a summary: how much of the research rests on primary sources, 
how much on Wikipedia, and where the weakest links are.

════════════════════════════════════════
PART 8 — CITATION INFRASTRUCTURE
════════════════════════════════════════

The site has no way to cite anything. Build it:

- Frontmatter source list per page: title, original-language title, 
  author or publisher, URL, date accessed, primary or secondary
- Inline citation markers in Markdown that render as footnotes
- A references section per page
- A build check that every citation marker resolves to a source entry, 
  and warns on unused entries
- A site-wide bibliography page

Design this to make the sourcing visible rather than buried. Citation 
discipline is this site's actual product.

════════════════════════════════════════
PART 9 — UNSOURCED CLAIM TRACKING
════════════════════════════════════════

Build a mechanism that distinguishes three states per factual claim: 
sourced, TBC, and asserted-without-source. Surface the third in the 
build output so it can't quietly accumulate.

Report the current count. It'll be high. That's the point.

════════════════════════════════════════
PART 10 — THE OUTSTANDING FIXES
════════════════════════════════════════

1. Make the mobile spine sticky. SpineSync currently runs where it 
   can't be seen.
2. Implement the CJK subset split — /data/stations separate from 
   everything else, ~40 KB saved on 45 of 46 pages.
3. Fix the six harness bugs in §16 if any remain. A verification tool 
   with false negatives is worse than none.

════════════════════════════════════════
PART 11 — REGRESSION HARDENING
════════════════════════════════════════

1. Point the contrast machinery at every colour in the system, not just 
   line colours. The --text-3 failure existed because the greys were 
   never checked. Find any remaining unchecked colour.
2. Add a test that fails if any content file contains a factual 
   assertion without a citation, once Part 8 exists.
3. Add a test for the claim-about-data-sources class of error — the site 
   asserted TDX doesn't publish route length while the data sat in the 
   repo.
4. Verify build determinism again after this run's changes.

════════════════════════════════════════
PART 12 — WHAT I MIGHT BE GETTING WRONG
════════════════════════════════════════

Write a section in the log arguing against the current direction. 
Specifically:

- Is the infrastructure now disproportionate to five stub content pages?
- Is anything built so far unnecessary?
- What would you cut if this were your project?
- What's the single highest-value thing not yet done?

Be blunt. Four consecutive runs have been infrastructure and the content 
is still thin. If that's the wrong priority, say so plainly.

════════════════════════════════════════
PART 13 — REPORTING
════════════════════════════════════════

Append to docs/run-log.md:
1. The three false claims — corrected, or TBC with what would settle 
   them
2. Every other unsourced assertion found
3. Research findings by topic, with source quality
4. The primary-vs-secondary summary
5. Unsourced claim count
6. What you couldn't find and why
7. Your Part 12 argument
8. Priority order for what's next

Then write docs/for-jamie.md: a short plain-language summary of what I 
need to decide. Not a status report — a list of decisions only I can 
make, each with the options and what you'd recommend. Assume I'll read 
that file and nothing else.