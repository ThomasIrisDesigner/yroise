import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface JeunesseArticleHeaderProps {
  titre: string
  chapeau: string
}

/** En-tête page jeu / atelier — rubrique Jeunesse, H1, chapeau (Figma 117:1217). */
export function JeunesseArticleHeader({
  titre,
  chapeau,
}: JeunesseArticleHeaderProps) {
  return (
    <header className="flex flex-col gap-4 px-section pt-4 pb-10">
      <SectionRubriqueLink
        to="/jeunesse"
        className="text-aurore-700 hover:text-aurore-700/80"
      >
        Jeunesse
      </SectionRubriqueLink>
      <h1 className={typography.articleTitle}>{titre}</h1>
      <p className={typography.chapeau}>{chapeau}</p>
    </header>
  )
}
