import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

import { gmbDocLinkClass, gmbLegendBorderClass } from './gmb-shared'

interface GmbFigureLegendProps {
  caption: string
  meta?: string
  linkLabel?: string
  linkHref?: string
  /** Classes sur le figcaption (gouttières page article, etc.) */
  className?: string
  /** Classes sur le bloc borduré interne */
  innerClassName?: string
  /** Colonne 792px entre gouttières et bloc borduré (légende hero) */
  columnWrap?: boolean
}

function LegendContent({
  caption,
  meta,
  linkLabel,
  linkHref,
  innerClassName,
}: Pick<
  GmbFigureLegendProps,
  'caption' | 'meta' | 'linkLabel' | 'linkHref' | 'innerClassName'
>) {
  const hasMetaRow = meta || linkLabel

  return (
    <div
      className={cn(gmbLegendBorderClass, 'flex flex-col gap-2', innerClassName)}
    >
      <p className={cn(typography.editorialCaption, 'text-text')}>{caption}</p>
      {hasMetaRow ? (
        <p className={typography.articleMetaCaps}>
          {meta}
          {meta && linkLabel ? ' · ' : null}
          {linkLabel ? (
            <a href={linkHref} className={gmbDocLinkClass}>
              {linkLabel}
            </a>
          ) : null}
        </p>
      ) : null}
    </div>
  )
}

/** Légende GMB — bordure gauche, crédit + lien document. */
export function GmbFigureLegend({
  caption,
  meta,
  linkLabel,
  linkHref = '#',
  className,
  innerClassName,
  columnWrap = false,
}: GmbFigureLegendProps) {
  return (
    <figcaption className={className}>
      {columnWrap ? (
        <div className="article-content-column">
          <LegendContent
            caption={caption}
            meta={meta}
            linkLabel={linkLabel}
            linkHref={linkHref}
            innerClassName={innerClassName}
          />
        </div>
      ) : (
        <LegendContent
          caption={caption}
          meta={meta}
          linkLabel={linkLabel}
          linkHref={linkHref}
          innerClassName={innerClassName}
        />
      )}
    </figcaption>
  )
}
