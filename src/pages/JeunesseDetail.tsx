import { Navigate, useParams } from 'react-router-dom'

import { JeunesseArticleBody } from '@/components/features/jeunesse/JeunesseArticleBody'
import { JeunesseArticleHeader } from '@/components/features/jeunesse/JeunesseArticleHeader'
import { JeunesseArticleHero } from '@/components/features/jeunesse/JeunesseArticleHero'
import { JeunesseReferencesSection } from '@/components/features/jeunesse/JeunesseReferencesSection'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getJeunesseContent } from '@/data/jeunesseContents'
import { getJeunesseBySlug } from '@/data/jeunesse'

/**
 * Page jeu / atelier Jeunesse — modèle éditorial (maquette Figma 117:1217).
 * Ordre : en-tête → hero → présentation → sources.
 */
export function JeunesseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const activite = slug ? getJeunesseBySlug(slug) : undefined

  if (!activite) {
    return <Navigate to="/jeunesse" replace />
  }

  const content = getJeunesseContent(activite.slug)

  return (
    <SitePageShell>
      <div className="section-jeunesse bg-background">
        <JeunesseArticleHeader
          titre={activite.titre}
          chapeau={content.chapeau}
        />

        <JeunesseArticleHero
          imageSrc={content.heroImageSrc ?? activite.imageSrc}
          imageAlt={content.heroImageAlt ?? activite.imageAlt}
        />

        <JeunesseArticleBody presentation={content.presentation} />

        <JeunesseReferencesSection sources={content.sources} />
      </div>
    </SitePageShell>
  )
}
