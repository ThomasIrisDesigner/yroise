import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

import { gmbDocLinkClass, gmbLegendBorderClass } from './gmb-shared'

interface GmbFigureLegendProps {
  caption: string
  meta?: string
  linkLabel?: string
  linkHref?: string
  className?: string
}

/** Légende GMB — bordure gauche, crédit + lien document. */
export function GmbFigureLegend({
  caption,
  meta,
  linkLabel,
  linkHref = '#',
  className,
}: GmbFigureLegendProps) {
  const hasMetaRow = meta || linkLabel

  return (
    <figcaption className={cn(gmbLegendBorderClass, 'flex flex-col gap-1', className)}>
      <p className={cn(typography.editorialCaption, 'text-text')}>{caption}</p>
      {hasMetaRow ? (
        <p className={cn(typography.uiXs, 'uppercase tracking-[0.1px] text-text')}>
          {meta}
          {meta && linkLabel ? ' · ' : null}
          {linkLabel ? (
            <a href={linkHref} className={gmbDocLinkClass}>
              {linkLabel}
            </a>
          ) : null}
        </p>
      ) : null}
    </figcaption>
  )
}
