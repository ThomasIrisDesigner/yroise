import { cn } from '@/lib/utils'
import type { HistoireSource } from '@/types/histoireContent'
import { typography } from '@/styles/typography'

import { gmbDocLinkClass } from './gmb/gmb-shared'

interface HistoireReferencesSectionProps {
  sources: HistoireSource[]
}

/** Section « sources & références » — fond surface, liste statique. */
export function HistoireReferencesSection({ sources }: HistoireReferencesSectionProps) {
  return (
    <section className="bg-surface px-section py-10">
      <h2 className={cn(typography.sectionTitleSm, 'text-text')}>
        sources &amp; références
      </h2>
      <ul className="mt-4 flex flex-col gap-4">
        {sources.map((source, i) => (
          <li
            key={`${source.label}-${i}`}
            className={cn(
              'border-b border-list-separator/20 pb-4',
              i === sources.length - 1 && 'border-b-0 pb-0'
            )}
          >
            <p className={cn(typography.meta, 'leading-[22px] text-text')}>
              {source.prefix ? (
                <>
                  {source.prefix}
                  {' — '}
                </>
              ) : null}
              <a href={source.href} className={gmbDocLinkClass}>
                {source.label}
              </a>
            </p>
            {source.detail ? (
              <p className={cn(typography.uiXs, 'mt-1 text-muted')}>{source.detail}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
