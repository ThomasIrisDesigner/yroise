import { Navigate, useParams } from 'react-router-dom'

import { ArticleContentColumn } from '@/components/features/site/ArticleContentColumn'
import { GeniallyEmbed } from '@/components/features/jeunesse/GeniallyEmbed'
import { JeunesseArticleBody } from '@/components/features/jeunesse/JeunesseArticleBody'
import { JeunesseArticleHeader } from '@/components/features/jeunesse/JeunesseArticleHeader'
import { JeunesseArticleHero } from '@/components/features/jeunesse/JeunesseArticleHero'
import { JeunesseReferencesSection } from '@/components/features/jeunesse/JeunesseReferencesSection'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getJeunesseContent } from '@/data/jeunesseContents'
import { getJeunesseBySlug } from '@/data/jeunesse'

/**
 * Page jeu / atelier Jeunesse — même grille responsive que billet article (Figma 117:1217).
 * Ordre : en-tête → hero optionnel → embed Genially optionnel → présentation → sources.
 */
export function JeunesseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const activite = slug ? getJeunesseBySlug(slug) : undefined

  if (!activite) {
    return <Navigate to="/jeunesse" replace />
  }

  const content = getJeunesseContent(activite.slug)
  const hasHero = Boolean(content.heroImageSrc)
  const hasEmbed = Boolean(content.geniallyEmbed || content.geniallyEmbedSrc)

  return (
    <SitePageShell>
      <div className="jeunesse-article-page section-jeunesse bg-background">
        <div className="article-page-header-wrap">
          <JeunesseArticleHeader titre={activite.titre} chapeau={content.chapeau} />
        </div>

        {hasHero ? (
          <div className="article-page-hero-wrap mt-4">
            <JeunesseArticleHero
              imageSrc={content.heroImageSrc}
              imageAlt={content.heroImageAlt ?? activite.imageAlt}
              placeholder={content.heroPlaceholder}
            />
          </div>
        ) : null}

        <div className="article-page-content-wrap">
          {hasEmbed ? (
            <div className="article-page-header-column jeunesse-embed-wrap">
              <GeniallyEmbed
                src={content.geniallyEmbedSrc}
                title={`Jeu interactif — ${activite.titre}`}
              />
            </div>
          ) : null}

          <ArticleContentColumn as="article" className="article-page-body py-6">
            <JeunesseArticleBody presentation={content.presentation} />
          </ArticleContentColumn>
        </div>

        <JeunesseReferencesSection sources={content.sources} />
      </div>
    </SitePageShell>
  )
}
