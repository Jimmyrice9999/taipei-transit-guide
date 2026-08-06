/**
 * schema.org structured data, emitted as JSON-LD.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS AND IS NOT MARKED UP, AND WHY
 *
 * schema.org's public-transport vocabulary is thin. It has station types —
 * `SubwayStation`, `TrainStation`, `BusStation`, `BusStop`, all under
 * Thing → Place → CivicStructure — and it has `TrainTrip` for a journey. It has
 * **no type for a transit line or route**; extending the vocabulary in that
 * direction has been an open request against the schema.org repository for
 * years (schemaorg/schemaorg#985) and has not landed.
 *
 * So:
 *
 *   Station pages      `SubwayStation`. A genuine fit — a real place with
 *                      coordinates, an address and a name, which is exactly
 *                      what the type describes.
 *   /data pages        `Dataset` with a `DataDownload` distribution. Also a
 *                      genuine fit, and the type search engines actually use
 *                      for dataset discovery.
 *   Content pages      `Article`. They are written articles about a subject;
 *                      claiming they are Places or Products would not be.
 *   Line pages         NOT given a transit-specific type, because none exists.
 *                      Inventing one, or stretching `Place` over a 25 km
 *                      railway, would produce markup that validates and means
 *                      nothing.
 *
 * Everywhere: `BreadcrumbList`, which is well supported and genuinely describes
 * this site's structure.
 *
 * The rule applied throughout is that structured data is a claim about what a
 * page *is*. A wrong claim that happens to validate is worse than no claim,
 * for the same reason a plausible unsourced figure is worse than a TBC.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapes nothing that matters here — the input is our own
      // build-time data, never user input — but `<` is escaped anyway so a
      // string containing "</script>" could not close the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
