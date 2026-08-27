# For Jamie

## Active handoff - Run 288 - 27 August 2026

Run 288 completes a three-run TOD/joint-development sequence (KRTC 286,
TYMC 287, now TMRT) — all three non-Taipei operators covered. TMRT was
the standout: unlike KRTC (JS-rendered case page) and TYMC (case page
timed out 3x), every TCRT page worked, yielding a genuine seven-site case
list for the Green Line (G5, G6, G8, G8a, G9-1, G9-2, G11) with real
investors, site figures and dated timelines.

Highlights: G8 (Wenhua Senior High School) has a complete contract→
groundbreaking→handover record (2014→2017→2021), now marketed for sale —
the only finished lifecycle among the seven. G9-2 (City Hall south) has
no investor at all, still in pre-solicitation despite sitting next to
G9-1 which already has one. G6's ~4.5-year gap between signed contract
(Dec 2020) and reported construction start (Jun 2025) is recorded
unexplained, as the source states it. All three cities' programmes share
the same central legal basis (Mass Rapid Transit Act + Land Development
Regulations).

Full local validation across Runs 279-288 (10 commits this
continuation): `gate:fast` clean every time, `gate:full` clean against a
fresh build every time. Audit JSONs restored each time, not committed.
`probes/` remains untracked.

CI status unchanged since Run 286's check — not re-polled this run.

All four operators (TRA, KRTC, TYMC, TMRT) now share: technology,
rolling-stock, facilities, operations (ridership+fares) sections, and
KRTC/TYMC/TMRT now also share a projects/TOD section. Next: continuing
other Parts of the brief (interactive features), or deeper gaps within
any operator (KRTC Yellow Line depot name/opening date, TMRT accessibility
page 2, base single-fare figures if a browser-capable fetch becomes
available).
