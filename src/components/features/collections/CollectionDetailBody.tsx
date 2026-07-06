import { GmbImageFigure } from '@/components/features/histoires/gmb/GmbImageFigure'
import { Button } from '@/components/ui/button'
import type { CollectionDetailContent } from '@/types/collectionContent'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface CollectionDetailBodyProps {
  content: CollectionDetailContent
  documentCount?: number
}

/** Corps page collection — Présentation, Aperçu documents, CTA Gallica. */
export function CollectionDetailBody({
  content,
  documentCount,
}: CollectionDetailBodyProps) {
  const ctaLabel =
    documentCount != null
      ? `Voir les ${documentCount} documents`
      : 'Voir les documents'

  return (
    <article className="px-section py-6">
      <div className={typography.editorialBodyStack}>
        <h2 className={cn(typography.titleL, 'font-bold leading-7')}>Présentation</h2>
        <p className={typography.editorialBody}>{content.presentationBody}</p>

        <h2 className={cn(typography.titleL, 'font-bold leading-7 pt-6')}>Aperçu</h2>
        {content.apercuItems.map((item, i) => (
          <GmbImageFigure
            key={i}
            placeholder={item.caption}
            caption={item.caption}
            meta={item.meta}
            linkLabel={item.linkLabel}
            linkHref={item.linkHref}
            imageSrc={item.imageSrc}
          />
        ))}

        <div className="flex justify-center pt-6">
          <Button asChild variant="primary" size="sm">
            <a href={content.gallicaHref} aria-label={`${ctaLabel} sur Gallica (externe)`}>
              {ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
