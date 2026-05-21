import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { Collection } from '@/data/collections'
import { LOREM } from '@/data/placeholders'
import { typography } from '@/styles/typography'

interface CollectionListCardProps {
  collection: Collection
}

export function CollectionListCard({ collection }: CollectionListCardProps) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      className="block overflow-hidden rounded-md border border-border"
    >
      <div
        className="flex h-28 w-full items-center justify-center bg-muted"
        aria-hidden
      >
        <span className="text-xs italic text-text/40">{collection.name}</span>
      </div>
      <div className="bg-surface p-3">
        <h2 className={typography.cardTitle}>{collection.name}</h2>
        <p className="mt-1 text-xs leading-relaxed text-text/70">{LOREM.line}</p>
        <p className="mt-2 flex justify-end text-xs font-semibold text-secondary">
          Découvrir
          <ArrowRight className="ml-0.5 h-3.5 w-3.5" />
        </p>
      </div>
    </Link>
  )
}
