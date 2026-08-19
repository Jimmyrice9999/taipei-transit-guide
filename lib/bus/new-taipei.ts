import type { BusRoute } from './routes'

export type NewTaipeiRouteSubgroup = 'event' | 'lrt' | 'pioneer' | 'jumpfrog' | 'rapid' | 'newbus' | 'general' | 'unclassified'

/*
 * Declared order, and it is the browse order on /bus/routes/new-taipei/.
 *
 * Run 51: this used to run roughly smallest-first, which put Event shuttles —
 * four routes — at the top of a 562-route page, and made it the subgroup the
 * page opened by default. Largest first instead: the ordinary bus network is
 * what a reader arriving at "New Taipei bus routes" is looking for, and the
 * specialist categories are the ones you go looking for by name. Classification
 * TBC stays last because it is a gap, not a category.
 */
export const NEW_TAIPEI_SUBGROUPS: Array<{ key: NewTaipeiRouteSubgroup; title: string; description: string }> = [
  { key: 'general', title: 'General buses', description: 'Routes filed in the official general-bus dataset.' },
  { key: 'newbus', title: 'New Bus community services', description: 'New Bus records serving areas and corridors in the official dataset.' },
  { key: 'jumpfrog', title: 'Jump-frog commuter buses', description: 'Limited-stop, scheduled commuter services filed as 跳蛙公車.' },
  { key: 'rapid', title: 'Rapid buses', description: 'Routes filed in the official rapid-bus dataset.' },
  { key: 'lrt', title: 'Light-rail feeder routes', description: 'Routes filed in the official light-rail feeder dataset.' },
  { key: 'event', title: 'Event shuttles', description: 'New Taipei Department of Transportation activity-service records.' },
  { key: 'pioneer', title: 'MRT pioneer buses', description: 'Routes filed in the official MRT pioneer-bus dataset.' },
  { key: 'unclassified', title: 'Classification TBC', description: 'TDX identity records without a current New Taipei category match.' },
]

export function getNewTaipeiRouteSubgroup(route: BusRoute): NewTaipeiRouteSubgroup {
  if (route.group !== 'new-taipei') return 'unclassified'
  const key = route.service?.categoryKey as NewTaipeiRouteSubgroup | undefined
  return key && NEW_TAIPEI_SUBGROUPS.some((group) => group.key === key) ? key : 'unclassified'
}
