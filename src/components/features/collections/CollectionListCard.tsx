import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  cardExcerptListClass,
  cardTitleLinkClass,
  listCardStackClass,
} from '@/components/ui/card-shared'
import { COLLECTION_EXAMPLE_IMAGE, type Collection } from '@/data/collections'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface CollectionListCardProps {
  collection: Collection
}

/** Card collection page liste — hublot centré, titre, accroche, CTA Explorer. */
export function CollectionListCard({ collection }: CollectionListCardProps) {
  const to = `/collections/${collection.slug}`

  return (
    <article
      className={cn(
        'collection-list-card group relative flex h-full flex-col items-center justify-between gap-6 pb-1',
        listCardStackClass
      )}
    >
      <div className="collection-list-card-body flex w-full flex-col items-center gap-6">
        <div className="collection-list-card-hublot hublot-frame relative size-[224px] shrink-0 overflow-hidden rounded-full border-[9px] border-text bg-surface transition-colors duration-150 group-hover:border-glaz-700">
          <img
            src={collection.hublotImageSrc ?? COLLECTION_EXAMPLE_IMAGE}
            alt=""
            className="block h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="collection-list-card-copy flex w-full flex-col items-center gap-2 text-center">
          <h2
            className={cn(
              typography.cardTitleEditorial,
              'collection-list-card-title leading-[1.3]'
            )}
          >
            <Link to={to} className={cardTitleLinkClass}>
              {collection.name}
            </Link>
          </h2>
          <p className={cn(cardExcerptListClass, 'collection-list-card-excerpt')}>
            {collection.accroche}
          </p>
        </div>
      </div>

      <div className="collection-list-card-cta flex w-full shrink-0 justify-center">
        <Button
          variant="secondary"
          size="sm"
          className="pointer-events-none"
          tabIndex={-1}
          aria-hidden
        >
          Explorer
        </Button>
      </div>
    </article>
  )
}
