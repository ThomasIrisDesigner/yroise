import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface HistoireArticleHeaderProps {
  titre: string
  chapeau: string | string[]
  auteur: string
}

/** En-tête éditorial billet — fil d'Ariane rubrique, H1, chapeau, byline. */
export function HistoireArticleHeader({
  titre,
  chapeau,
  auteur,
}: HistoireArticleHeaderProps) {
  const chapeauParagraphs = Array.isArray(chapeau) ? chapeau : [chapeau]

  return (
    <header className="flex flex-col gap-4 px-section pt-4">
      <SectionRubriqueLink to="/histoires">Histoires</SectionRubriqueLink>
      <h1 className={typography.articleTitle}>{titre}</h1>
      <div className="flex flex-col">
        {chapeauParagraphs.map((paragraph, i) => (
          <p key={i} className={typography.chapeau}>
            {paragraph}
          </p>
        ))}
      </div>
      <p className={typography.articleByline}>Par {auteur}</p>
    </header>
  )
}
