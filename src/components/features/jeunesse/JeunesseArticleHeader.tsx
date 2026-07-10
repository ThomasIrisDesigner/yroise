import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface JeunesseArticleHeaderProps {
  titre: string
  chapeau: string
}

/** En-tête page jeu / atelier — même grille que billet article (Figma 117:1217). */
export function JeunesseArticleHeader({
  titre,
  chapeau,
}: JeunesseArticleHeaderProps) {
  return (
    <header className="article-page-header">
      <div className="article-page-header-meta">
        <SectionRubriqueLink
          to="/jeunesse"
          className="text-aurore-700 hover:text-aurore-700/80"
        >
          Jeunesse
        </SectionRubriqueLink>
        <h1 className={typography.articleTitle}>{titre}</h1>
        <div className="article-page-header-chapeau">
          <p className={typography.chapeau}>{chapeau}</p>
        </div>
      </div>
    </header>
  )
}
