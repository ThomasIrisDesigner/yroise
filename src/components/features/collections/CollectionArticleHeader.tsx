import { Button } from '@/components/ui/button'
import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface CollectionArticleHeaderProps {
  titre: string
  chapeau: string
  documentCount?: number
  gallicaHref: string
}

/** En-tête collection — même grille que billet article, fond glaz sur le wrap parent. */
export function CollectionArticleHeader({
  titre,
  chapeau,
  documentCount,
  gallicaHref,
}: CollectionArticleHeaderProps) {
  const ctaLabel =
    documentCount != null
      ? `Voir les ${documentCount} documents`
      : 'Voir les documents'

  return (
    <header className="article-page-header">
      <div className="article-page-header-meta">
        <SectionRubriqueLink to="/collections">Collections</SectionRubriqueLink>
        <h1 className={typography.articleTitle}>{titre}</h1>
        <div className="article-page-header-chapeau">
          <p className={typography.chapeau}>{chapeau}</p>
        </div>
        <Button asChild variant="primary" size="sm" className="self-start">
          <a href={gallicaHref} aria-label={`${ctaLabel} sur Gallica (externe)`}>
            {ctaLabel}
          </a>
        </Button>
      </div>
    </header>
  )
}
