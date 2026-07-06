import { Button } from '@/components/ui/button'
import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface CollectionArticleHeaderProps {
  titre: string
  chapeau: string
  documentCount?: number
  gallicaHref: string
}

/** En-tête collection — fond glaz-100, fil d'Ariane, H1, chapeau, CTA Gallica. */
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
    <header className="bg-glaz-100 px-section pt-4 pb-10">
      <div className="flex flex-col gap-4">
        <SectionRubriqueLink to="/collections">Collections</SectionRubriqueLink>
        <h1 className={typography.articleTitle}>{titre}</h1>
        <p className={typography.chapeau}>{chapeau}</p>
        <div className="pt-6">
          <Button asChild variant="primary" size="sm">
            <a href={gallicaHref} aria-label={`${ctaLabel} sur Gallica (externe)`}>
              {ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
