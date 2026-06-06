import { Link } from 'react-router-dom'

import {
  collectionCardClass,
  collectionTitleClass,
  collectionTitleLinkClass,
  hublotClass,
} from '@/components/ui/card-shared'
import { cn } from '@/lib/utils'

export interface CollectionHublotCardProps {
  to: string
  titre: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export function CollectionHublotCard({
  to,
  titre,
  imageSrc,
  imageAlt,
  className,
}: CollectionHublotCardProps) {
  return (
    <article className={cn(collectionCardClass, className)}>
      <div className={hublotClass}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? ''}
            className="block h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <div
            className="h-full w-full bg-surface"
            role={imageAlt ? 'img' : undefined}
            aria-label={imageAlt}
            aria-hidden={!imageAlt}
          />
        )}
      </div>
      <p className={collectionTitleClass}>
        <Link to={to} className={collectionTitleLinkClass}>
          {titre}
        </Link>
      </p>
    </article>
  )
}
