import { Navigate, useParams } from 'react-router-dom'

import { ArticleContentColumn } from '@/components/features/site/ArticleContentColumn'
import { HistoireArticleHeader } from '@/components/features/histoires/HistoireArticleHeader'
import { HistoireArticleHero } from '@/components/features/histoires/HistoireArticleHero'
import { HistoireBilletBody } from '@/components/features/histoires/gmb/HistoireBilletBody'
import { HistoireReferencesSection } from '@/components/features/histoires/HistoireReferencesSection'
import { HistoireRelatedCarousel } from '@/components/features/histoires/HistoireRelatedCarousel'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getHistoireContent } from '@/data/histoireContents'
import { getHistoireBySlug } from '@/data/histoires'

/**
 * Billet Histoire — modèle GMB (maquette Figma 102:738 / desktop 131:12163).
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
      <div className="histoire-article-page section-histoires bg-background">
        <div className="article-page-header-wrap">
          <HistoireArticleHeader
            titre={histoire.titre}
            chapeau={content.chapeau}
            auteur={content.auteur}
          />
        </div>

        <div className="article-page-hero-wrap mt-4">
          <HistoireArticleHero
            imageSrc={content.heroImageSrc ?? histoire.imageSrc}
            placeholder={content.heroPlaceholder}
            caption={content.heroCaption}
            meta={content.heroMeta}
            linkLabel={content.heroLinkLabel}
            linkHref={content.heroLinkHref}
          />
        </div>

        <div className="article-page-content-wrap">
          <ArticleContentColumn as="article" className="article-page-body py-6">
            <HistoireBilletBody blocks={content.blocks} />
          </ArticleContentColumn>
        </div>

        <HistoireReferencesSection sources={content.sources} />

        <HistoireRelatedCarousel items={content.rebonds} />
      </div>
    </SitePageShell>
  )
}
