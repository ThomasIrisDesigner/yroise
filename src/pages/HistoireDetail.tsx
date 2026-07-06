import { Navigate, useParams } from 'react-router-dom'

import { HistoireArticleHeader } from '@/components/features/histoires/HistoireArticleHeader'
import { HistoireArticleHero } from '@/components/features/histoires/HistoireArticleHero'
import { HistoireBilletBody } from '@/components/features/histoires/gmb/HistoireBilletBody'
import { HistoireRebondCard } from '@/components/features/histoires/HistoireRebondCard'
import { HistoireReferencesSection } from '@/components/features/histoires/HistoireReferencesSection'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getHistoireContent } from '@/data/histoireContents'
import { getHistoireBySlug } from '@/data/histoires'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

/**
 * Billet Histoire — modèle GMB (maquette Figma 102:738).
 * Ordre : en-tête → hero → corps → sources → rebonds.
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
      <div className="section-histoires bg-background">
        <HistoireArticleHeader
          titre={histoire.titre}
          chapeau={content.chapeau}
          auteur={content.auteur}
        />

        <div className="mt-4">
          <HistoireArticleHero
            imageSrc={content.heroImageSrc ?? histoire.imageSrc}
            placeholder={content.heroPlaceholder}
            caption={content.heroCaption}
            meta={content.heroMeta}
            linkLabel={content.heroLinkLabel}
            linkHref={content.heroLinkHref}
          />
        </div>

        <article className="px-section py-6">
          <HistoireBilletBody blocks={content.blocks} />
        </article>

        <HistoireReferencesSection sources={content.sources} />

        <section className="bg-text px-section py-10">
          <h2 className={cn(typography.sectionTitleSm, 'text-on-dark')}>
            Nos autres histoires
          </h2>
          <ul className="mt-8 flex flex-col gap-8">
            {content.rebonds.map((item) => (
              <li key={item.slug}>
                <HistoireRebondCard histoire={item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SitePageShell>
  )
}
