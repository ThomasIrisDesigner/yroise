import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardExcerptClass,
  cardImageClass,
  cardTitleClass,
  cardTitleLinkClass,
  editorialCardClass,
  editorialCardSliderClass,
} from '@/components/ui/card-shared'
import { TriangleYroise } from '@/components/ui/triangle-yroise'
import { cn } from '@/lib/utils'

export interface HistoireCardProps {
  to: string
  titre: string
  extrait?: string
  imageSrc?: string
  imageAlt?: string
  sliderItem?: boolean
  className?: string
}

export function HistoireCard({
  to,
  titre,
  extrait,
  imageSrc,
  imageAlt,
  sliderItem = false,
  className,
}: HistoireCardProps) {
  return (
    <article
      className={cn(
        editorialCardClass,
        sliderItem && editorialCardSliderClass,
        className
      )}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt ?? ''}
          className={cardImageClass}
          draggable={false}
        />
      ) : (
        <div
          className={cardImageClass}
          role={imageAlt ? 'img' : undefined}
          aria-label={imageAlt}
          aria-hidden={!imageAlt}
        />
      )}
      <div className={cardBodyClass}>
        <h3 className={cardTitleClass}>
          <Link to={to} className={cardTitleLinkClass}>
            <span className="line-clamp-2">{titre}</span>
          </Link>
        </h3>
        {extrait ? <p className={cardExcerptClass}>{extrait}</p> : null}
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-text px-4 py-2 font-outfit text-[13px] font-normal text-text">
            Lire
            <TriangleYroise size={8} color="rgb(var(--color-text))" />
          </span>
        </div>
      </div>
    </article>
  )
}
