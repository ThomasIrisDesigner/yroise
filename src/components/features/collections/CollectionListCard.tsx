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
        className="flex h-36 w-full items-center justify-center bg-surface"
        aria-hidden
      >
        <span className="text-sm italic text-text/40">{collection.name}</span>
      </div>
      <div className="bg-surface p-4">
        <h2 className={typography.cardTitle}>{collection.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-text/70">{LOREM.line}</p>
        <p className="mt-3 flex justify-end text-sm font-semibold text-glaz-700">
          Découvrir
          <ArrowRight className="ml-1 h-4 w-4" />
        </p>
      </div>
    </Link>
  )
}
