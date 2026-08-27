# For Jamie

## Active handoff - Run 280 - 27 August 2026

Run 280 opens TMRT (Taichung Metro) technology and rolling-stock coverage —
it had only lines+stations before this, the state TRA/KRTC/TYMC were all in
before this session's expansion work.

Both pages rest on two operator/bureau URLs already in the existing corpus,
fetched as raw HTML and parsed directly (not summarised): the operator's
own FAQ confirms "fully automatic driverless operation" (28.4 km/h average,
75 km/h max) but attaches no GoA number, so automation grade stays TBC; and
the Taichung City Rapid Transit Systems Bureau's CJ900/CJ907 project record
names the three-firm consortium (Kawasaki Heavy Industries, Alstom
Transport, China Engineering Corp) and six subsystems behind the whole
system-equipment contract, but never splits which firm supplied which
subsystem, and names no branded signalling product or EMU model/series —
a genuine gap, not an oversight, published as TBC rather than guessed from
each firm's general reputation.

Fleet: 18 two-car trainsets, dimensioned precisely by the operator (22.17m
car length, 44.34m full train, ~536 capacity).

Full local validation both this run and Run 279 (KRTC/TYMC depots, pushed
earlier this session): `gate:fast` clean, `gate:full` clean against a fresh
build (234/234 tests, facts, research, geometry:audit, a11y). Audit JSONs
restored each time, not committed. `probes/` remains untracked.

Next: TMRT facilities/operations (accessibility, ridership) would complete
the same four-section structure the other three operators now have, or
continue toward the brief's remaining Parts 2-8 (fare history, TOD,
interactive features) across any operator.
