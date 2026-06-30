import { typography } from '@/styles/typography'

import { gmbMediaAspectClass } from './gmb-shared'
import { GmbFigureLegend } from './GmbFigureLegend'

interface GmbImagePairProps {
  leftLabel: string
  rightLabel: string
  caption: string
  meta?: string
  linkLabel?: string
  linkHref?: string
}

/** Double image Drupal — 2 colonnes + légende partagée. */
export function GmbImagePair({
  leftLabel,
  rightLabel,
  caption,
  meta,
  linkLabel,
  linkHref,
}: GmbImagePairProps) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="flex gap-3">
        <div
          className={`${gmbMediaAspectClass} flex flex-1 items-center justify-center bg-surface`}
          aria-hidden
        >
          <span className={typography.editorialCaption}>{leftLabel}</span>
        </div>
        <div
          className={`${gmbMediaAspectClass} flex flex-1 items-center justify-center bg-surface`}
          aria-hidden
        >
          <span className={typography.editorialCaption}>{rightLabel}</span>
        </div>
      </div>
      <GmbFigureLegend
        caption={caption}
        meta={meta}
        linkLabel={linkLabel}
        linkHref={linkHref}
      />
    </figure>
  )
}
