import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardCtaWrapClass,
  cardExcerptClass,
  cardImageClass,
  cardTitleClass,
  cardTitleLinkClass,
  editorialCardClass,
  editorialCardSliderClass,
} from '@/components/ui/card-shared'
import { Button } from '@/components/ui/button'
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
        <div className={cardCtaWrapClass}>
          <Button
            variant="secondary"
            size="sm"
            className="pointer-events-none"
            tabIndex={-1}
            aria-hidden
          >
            Lire
          </Button>
        </div>
      </div>
    </article>
  )
}
