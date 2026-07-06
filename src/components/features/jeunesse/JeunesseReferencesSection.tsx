import { cn } from '@/lib/utils'
import type { HistoireSource } from '@/types/histoireContent'
import { typography } from '@/styles/typography'

import { gmbDocLinkClass } from '@/components/features/histoires/gmb/gmb-shared'

interface JeunesseReferencesSectionProps {
  sources: HistoireSource[]
}

/** Section « sources & références » — fond surface, titre centré (Figma 117:1217). */
export function JeunesseReferencesSection({
  sources,
}: JeunesseReferencesSectionProps) {
  return (
    <section className="bg-surface px-section py-10">
      <h2
        className={cn(
          typography.sectionTitleSm,
          'pb-6 text-center text-text'
        )}
      >
        sources &amp; références
      </h2>
      <ul className="flex flex-col gap-4">
        {sources.map((source, i) => (
          <li key={`${source.label}-${i}`}>
            <p className={cn(typography.meta, 'leading-[22px] text-text')}>
              {source.prefix ? (
                <>
                  <span className="font-medium">{source.prefix}</span>
                  {' '}
                </>
              ) : null}
              <a href={source.href} className={gmbDocLinkClass}>
                {source.label}
              </a>
            </p>
            {source.detail ? (
              <p className={cn(typography.uiXs, 'mt-0 text-muted')}>
                {source.detail}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
