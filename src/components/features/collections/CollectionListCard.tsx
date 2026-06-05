import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import type { Collection } from '@/data/collections'
import { LOREM } from '@/data/placeholders'
import { typography } from '@/styles/typography'

interface CollectionListCardProps {
  collection: Collection
}

export function CollectionListCard({ collection }: CollectionListCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-border">
      <Link to={`/collections/${collection.slug}`} className="block">
        <div
          className="flex h-36 w-full items-center justify-center bg-surface"
          aria-hidden
        >
          <span className="text-sm italic text-text/40">{collection.name}</span>
        </div>
        <div className="bg-surface p-4">
          <h2 className={typography.cardTitle}>{collection.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text/70">{LOREM.line}</p>
        </div>
      </Link>
      <div className="flex justify-end bg-surface px-4 pb-4">
        <Button asChild variant="ghost" size="sm">
          <Link to={`/collections/${collection.slug}`}>Découvrir</Link>
        </Button>
      </div>
    </article>
  )
}
