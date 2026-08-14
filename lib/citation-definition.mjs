/**
 * A GFM footnote definition, which would silently take over our citation
 * markers. Both the TypeScript renderer and the plain Node citation checker
 * import this expression so their definition-line validation cannot drift.
 */
export const CITE_DEFINITION_PATTERN = /^\s{0,3}\[\^([a-z0-9][a-z0-9-]*)\]:/m
