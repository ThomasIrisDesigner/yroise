import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

import { gmbDocLinkClass } from './gmb-shared'

interface GmbEditorialQuoteProps {
  quote: string
  meta?: string
  linkLabel?: string
  linkHref?: string
}

/** Citation éditoriale — fond surface, bordure gauche Glaz. */
export function GmbEditorialQuote({
  quote,
  meta,
  linkLabel,
  linkHref = '#',
}: GmbEditorialQuoteProps) {
  const hasMetaRow = meta || linkLabel

  return (
    <figure className="border-l border-glaz-700 bg-surface py-4 pl-[17px] pr-4">
      <blockquote className={cn(typography.editorialBody, 'font-semibold italic')}>
        {quote}
      </blockquote>
      {hasMetaRow ? (
        <p className={cn(typography.uiXs, 'mt-2 uppercase tracking-[0.1px] text-text')}>
          {meta}
          {meta && linkLabel ? ', ' : null}
          {linkLabel ? (
            <a href={linkHref} className={gmbDocLinkClass}>
              {linkLabel}
            </a>
          ) : null}
        </p>
      ) : null}
    </figure>
  )
}
