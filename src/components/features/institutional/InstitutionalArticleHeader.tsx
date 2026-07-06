import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface InstitutionalArticleHeaderProps {
  titre: string
}

/** En-tête page institutionnelle — rubrique Accueil, H1 (Figma 117:1660). */
export function InstitutionalArticleHeader({
  titre,
}: InstitutionalArticleHeaderProps) {
  return (
    <header className="flex flex-col gap-4 px-section pt-4">
      <SectionRubriqueLink to="/prototype">Accueil</SectionRubriqueLink>
      <h1 className={typography.articleTitle}>{titre}</h1>
    </header>
  )
}
