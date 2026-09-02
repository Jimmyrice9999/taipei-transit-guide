import RichText from './RichText'
import Link from '@/components/LocaleLink'
import { getImageSize } from '@/lib/image-size'
import { src as imageSrc, srcset, type SiteImage } from '@/lib/images'

/**
 * A photograph with caption and credit — or a visible placeholder where one
 * should be.
 *
 * The placeholder is the point. A page with no image and no gap looks finished;
 * a page with a labelled empty frame says what is missing. This site is a
 * reference under construction, and hiding that would be the wrong kind of tidy.
 *
 * Two image paths:
 *
 *   image   A pipeline image (lib/images) — responsive WebP with the Commons
 *           attribution rendered under it. The credit line is not optional
 *           and not a tooltip: CC BY / CC BY-SA make attribution and licence
 *           indication licence terms, and this component is where the site
 *           meets them. Both the photographer and the licence are links — to
 *           the source file page and the licence deed respectively.
 *   src     A plain committed file (legacy path), dimensions read at build.
 *
 * Dimensions are always set, so the reserved space is right and the page
 * never jumps as photographs load.
 */

export type FigureProps = {
  image?: SiteImage | null
  src?: string
  alt?: string
  caption?: string
  credit?: string
  /** Shown in the placeholder when there is no image yet. */
  wanted?: string
  /** Above-the-fold hero: eager load, high fetch priority. */
  priority?: boolean
  className?: string
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Render the small subset of Markdown links allowed in frontmatter captions. */
function Caption({ value }: { value: string }) {
  const parts: React.ReactNode[] = []
  const pattern = /\[([^\]]+)\]\((\/[^)\s]+)\)/g
  let cursor = 0
  let match
  while ((match = pattern.exec(value)) !== null) {
    if (match.index > cursor) {
      parts.push(<RichText key={`text-${cursor}`}>{value.slice(cursor, match.index)}</RichText>)
    }
    parts.push(
      <Link href={match[2]} key={`link-${match.index}`}>
        <RichText>{match[1]}</RichText>
      </Link>,
    )
    cursor = match.index + match[0].length
  }
  if (cursor < value.length) {
    parts.push(<RichText key={`text-${cursor}`}>{value.slice(cursor)}</RichText>)
  }
  return parts.length ? <>{parts}</> : <RichText>{value}</RichText>
}

export default function Figure({
  image,
  src,
  alt,
  caption,
  credit,
  wanted,
  priority = false,
  className = 'figure wide',
}: FigureProps) {
  if (image) {
    return (
      <figure className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc(image)}
          srcSet={srcset(image)}
          sizes="(max-width: 780px) 100vw, 760px"
          alt={alt ?? caption ?? ''}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding={priority ? undefined : 'async'}
        />
        <figcaption>
          {caption && <Caption value={caption} />}
          <span className="figure-credit">
            {/* Photographer names are often Chinese; RichText tags the Han
                so the credit renders in the Traditional-variant face. */}
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
            {' · Wikimedia Commons'}
          </span>
        </figcaption>
      </figure>
    )
  }

  if (!src) {
    return (
      <figure className="figure figure-empty wide">
        <div className="figure-placeholder">
          <span className="figure-placeholder-label">Photograph wanted</span>
          {wanted && <span className="figure-placeholder-what">{wanted}</span>}
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  }

  const size = getImageSize(src)

  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE_PATH}${src}`}
        alt={alt ?? caption ?? ''}
        width={size?.width}
        height={size?.height}
        loading="lazy"
        decoding="async"
      />
      {(caption || credit) && (
        <figcaption>
          {caption}
          {credit && <span className="figure-credit">{credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}
