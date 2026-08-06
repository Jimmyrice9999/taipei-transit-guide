import { getImageSize } from '@/lib/image-size'

/**
 * A photograph with caption and credit — or a visible placeholder where one
 * should be.
 *
 * The placeholder is the point. A page with no image and no gap looks finished;
 * a page with a labelled empty frame says what is missing. This site is a
 * reference under construction, and hiding that would be the wrong kind of tidy.
 *
 * Dimensions are read from the file at build time, so the reserved space is
 * always right and the page never jumps as photographs load.
 */

export type FigureProps = {
  src?: string
  alt?: string
  caption?: string
  credit?: string
  /** Shown in the placeholder when there is no image yet. */
  wanted?: string
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Figure({ src, alt, caption, credit, wanted }: FigureProps) {
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
    <figure className="figure wide">
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
