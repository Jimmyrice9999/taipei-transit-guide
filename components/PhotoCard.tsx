import Link from 'next/link'
import RichText from './RichText'
import { getLine } from '@/lib/lines'
import { srcCapped, srcsetCapped, type SiteImage } from '@/lib/images'

/**
 * The card's photo never displays wider than ~280px, so it asks for the
 * dedicated 240w "card" variant (scripts/make-card-thumbs.mjs) rather than
 * the 400/800/1600 tiers a hero photograph uses. A grid can carry two dozen
 * cards on one page — the stations index already does — and the smallest
 * hero tier (400w) alone summed past the 400 KB page budget before this
 * existed. Falls back to the smallest available tier for any image this
 * script has not been run against yet.
 */
const CARD_IMAGE_MAX_WIDTH = 240

/**
 * One card in a photographed index grid — /rail/rolling-stock/, /rail/depots/,
 * /rail/stations/.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE NO-PHOTO CASE
 *
 * Tucheng and Xinzhuang depots have no Commons photograph at all (run 19 — the
 * category and title searches both came up empty, and neither depot has a public
 * vantage point). `Figure`'s "Photograph wanted" placeholder is right for a hero,
 * where one page owns the whole frame and a labelled gap is useful information.
 * In a grid sitting next to six photographed depots, the same dashed box reads as
 * a fault, repeated eight times over — decoration pretending to be a diagnostic.
 *
 * So the card frame here does not depend on the photo. Every card is the same
 * bordered box; a card with no `image` simply has no image slot, and the text
 * starts where the photo would have been. Nothing is missing from the frame
 * because the frame was never the photo's shape to begin with.
 *
 * THE COLOUR
 *
 * A 4px bar across the top, in the line's own colour with the same text-safe
 * hairline CardRow uses — brown, orange and Circular yellow all measure under
 * 3:1 on white and need the edge to read as a mark rather than a rendering
 * fault. Reinforcement: the LineBadge in the meta row carries the code and name
 * regardless, so the bar is never the only place the line is stated.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function PhotoCard({
  href,
  image,
  title,
  subtitle,
  summary,
  meta,
  line: lineCode,
}: {
  href: string
  image?: SiteImage | null
  title: React.ReactNode
  /** Rendered under the title, e.g. a station's Chinese name. */
  subtitle?: React.ReactNode
  summary?: string
  /** The "lines it serves" row — real links, rendered outside the card's own link. */
  meta?: React.ReactNode
  line?: string
}) {
  const line = getLine(lineCode)

  return (
    <li
      className="photo-card"
      data-line={line ? line.code : undefined}
      style={
        line
          ? ({ '--row-map': line.map, '--row-ink': line.ink } as React.CSSProperties)
          : undefined
      }
    >
      <Link href={href} className="photo-card-link">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={srcCapped(image, CARD_IMAGE_MAX_WIDTH)}
            srcSet={srcsetCapped(image, CARD_IMAGE_MAX_WIDTH)}
            /*
             * Matches `.photo-card-grid`'s real column counts (Run 20:
             * 1/2/4/5/6 columns at 375/768/1440/1920/2560), capped at
             * CARD_IMAGE_MAX_WIDTH — the browser can never be told to want
             * more than the largest variant this component ever references.
             * No byte saving today: every image with a card tier currently
             * offers exactly one candidate at 240w, so there is nothing to
             * choose between yet. It is still the correct hint for whichever
             * srcset a future narrower tier adds under this cap.
             */
            sizes={`(max-width: 560px) 90vw, (max-width: 768px) 45vw, (max-width: 1440px) 23vw, (max-width: 1920px) 18vw, ${CARD_IMAGE_MAX_WIDTH}px`}
            alt=""
            width={image.width}
            height={image.height}
            loading="lazy"
            /*
             * `async` (the site default for non-hero photos) reproduced a
             * real rendering bug on this grid: some cards' images decoded
             * and reported ready — `complete`, `naturalWidth`, even a
             * correct canvas pixel sample — but never composited, leaving a
             * blank frame that only ever painted after a manual repaint
             * trigger. Reproducible across widths, non-deterministic in
             * which card it hit. `sync` decodes the small thumbnail on the
             * main thread before the image is considered ready, which
             * removes the race; at 400w-webp thumbnail size the cost is not
             * measurable the way it would be on a full hero.
             */
            decoding="sync"
            className="photo-card-img"
          />
        )}
        <span className="photo-card-body">
          <span className="photo-card-title">
            {typeof title === 'string' ? <RichText>{title}</RichText> : title}
          </span>
          {subtitle && <span className="photo-card-subtitle">{subtitle}</span>}
          {summary && (
            <span className="photo-card-summary">
              <RichText>{summary}</RichText>
            </span>
          )}
        </span>
      </Link>
      {/*
        Attribution links live outside the card's own <Link> — an <a> inside
        an <a> is invalid HTML and, worse, the two elements disagree about
        where a click should go. Same rule CardRow and StationBadge apply
        with `linked={false}`, applied here because this credit line has no
        such prop to pass.
      */}
      {image && (
        <span className="figure-credit photo-card-credit">
          <a href={image.source} rel="nofollow noopener">
            <RichText>{image.artist}</RichText>
          </a>
          {' · '}
          {image.licenseUrl ? (
            <a href={image.licenseUrl} rel="nofollow noopener license">
              {image.license}
            </a>
          ) : (
            image.license
          )}
        </span>
      )}
      {meta && <span className="photo-card-meta">{meta}</span>}
    </li>
  )
}
