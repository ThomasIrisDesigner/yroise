import { Navigate, useParams } from 'react-router-dom'

import { HistoireBilletBody } from '@/components/features/histoires/gmb/HistoireBilletBody'
import { HistoireRebondCard } from '@/components/features/histoires/HistoireRebondCard'
import { SourcesAccordion } from '@/components/features/histoires/SourcesAccordion'
import { SectionBackLink } from '@/components/features/site/SectionBackLink'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { TypeLabel } from '@/components/ui/type-label'
import { getHistoireContent } from '@/data/histoireContents'
import { getHistoireBySlug } from '@/data/histoires'
import { typography } from '@/styles/typography'

/**
 * Billet Histoire — modèle GMB (wireframe « Billet — composants GMB »).
 * Ordre : image hero → type → H1 → chapeau → auteur/date → corps → sources → rebonds.
 */
export function HistoireDetail() {
  const { slug } = useParams<{ slug: string }>()
  const histoire = slug ? getHistoireBySlug(slug) : undefined

  if (!histoire) {
    return <Navigate to="/histoires" replace />
  }

  const content = getHistoireContent(histoire.slug)

  return (
    <SitePageShell>
      <div className="section-histoires">
        <header className="px-section pt-4">
          <SectionBackLink to="/histoires">← Toutes les histoires</SectionBackLink>
        </header>

        <div
          className="flex aspect-[3/2] w-full items-center justify-center bg-surface"
          role="img"
          aria-label={content.heroPlaceholder}
        >
          <span className={typography.editorialCaption}>{content.heroPlaceholder}</span>
        </div>
        <p className={`border-b border-border px-section py-3 ${typography.editorialCaption}`}>
          {content.heroCaption}
        </p>

        <div className="px-section pt-4">
          <TypeLabel type={histoire.type} />
          <h1 className={`mt-3 ${typography.pageTitle}`}>{histoire.titre}</h1>
          <p className={`mt-3 ${typography.chapeau}`}>
            {histoire.accroche ?? content.chapeau}
          </p>
          <div className="mt-4 border-b border-border pb-4">
            <p className={typography.titleM}>Par {content.auteur}</p>
            <p className={`mt-1 ${typography.meta}`}>
              {content.institution} · {content.datePublication}
            </p>
          </div>
        </div>

        <article className="px-section pt-6 pb-10">
          <HistoireBilletBody blocks={content.blocks} />

          <div className="mt-10">
            <SourcesAccordion sources={content.sources} />
          </div>

          <section className="mt-10 border-t border-border pt-8">
            <h2 className={typography.sectionLabel}>Nos autres histoires</h2>
            <ul className="mt-4 flex flex-col gap-4">
              {content.rebonds.map((item) => (
                <li key={item.slug}>
                  <HistoireRebondCard histoire={item} />
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </SitePageShell>
  )
}
