import { HistoireBilletBody } from '@/components/features/histoires/gmb/HistoireBilletBody'
import { ArticleContentColumn } from '@/components/features/site/ArticleContentColumn'
import { Button } from '@/components/ui/button'
import type { CollectionDetailContent } from '@/types/collectionContent'

interface CollectionDetailBodyProps {
  content: CollectionDetailContent
  documentCount?: number
}

/** Corps page collection — colonne éditoriale + blocs GMB + CTA Gallica. */
export function CollectionDetailBody({
  content,
  documentCount,
}: CollectionDetailBodyProps) {
  const ctaLabel =
    documentCount != null
      ? `Voir les ${documentCount} documents`
      : 'Voir les documents'

  return (
    <ArticleContentColumn as="article" className="article-page-body py-6">
      <HistoireBilletBody blocks={content.blocks} />
      <div className="flex justify-center pt-6">
        <Button asChild variant="primary" size="sm">
          <a href={content.gallicaHref} aria-label={`${ctaLabel} sur Gallica (externe)`}>
            {ctaLabel}
          </a>
        </Button>
      </div>
    </ArticleContentColumn>
  )
}
