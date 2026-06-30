import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { cardExcerptListClass, cardTitleLinkClass, listCardStackClass } from '@/components/ui/card-shared'
import type { Collection } from '@/data/collections'

interface CollectionListCardProps {
  collection: Collection
}

/** Card collection page liste — hublot centré, titre, accroche, CTA Explorer. */
export function CollectionListCard({ collection }: CollectionListCardProps) {
  const to = `/collections/${collection.slug}`

  return (
    <article className={`group relative flex flex-col items-center gap-6 ${listCardStackClass}`}>
      <div className="hublot-frame relative size-[224px] shrink-0 overflow-hidden rounded-full border-[9px] border-text bg-surface">
        <img
          src={collection.hublotImageSrc ?? '/images/voilier-brest.png'}
          alt=""
          className="block h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <div className="flex w-full max-w-[305px] flex-col items-center gap-2 text-center">
        <h2 className="font-outfit text-[1.375rem] font-semibold leading-[1.3] text-text">
          <Link to={to} className={cardTitleLinkClass}>
            {collection.name}
          </Link>
        </h2>
        <p className={cardExcerptListClass}>
          {collection.accroche}
        </p>
      </div>

      <Button
        variant="secondary"
        size="sm"
        className="pointer-events-none"
        tabIndex={-1}
        aria-hidden
      >
        Explorer
      </Button>
    </article>
  )
}
