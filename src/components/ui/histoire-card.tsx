import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardBodyListClass,
  cardCtaListWrapClass,
  cardCtaWrapClass,
  cardExcerptClass,
  cardExcerptListClass,
  cardImageClass,
  cardImageListClass,
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
  /** Carousel home (défaut) ou page liste Histoires */
  layout?: 'slider' | 'list'
  /** Premier billet de liste — extrait en 16px */
  featuredExcerpt?: boolean
  className?: string
}

export function HistoireCard({
  to,
  titre,
  extrait,
  imageSrc,
  imageAlt,
  sliderItem = false,
  layout = 'slider',
  featuredExcerpt = false,
  className,
}: HistoireCardProps) {
  const isList = layout === 'list'

  return (
    <article
      className={cn(
        editorialCardClass,
        sliderItem && editorialCardSliderClass,
        isList && 'mx-auto w-full max-w-[310px]',
        className
      )}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt ?? ''}
          className={isList ? cardImageListClass : cardImageClass}
          draggable={false}
        />
      ) : (
        <div
          className={isList ? cardImageListClass : cardImageClass}
          role={imageAlt ? 'img' : undefined}
          aria-label={imageAlt}
          aria-hidden={!imageAlt}
        />
      )}
      <div className={isList ? cardBodyListClass : cardBodyClass}>
        <h3 className={cn(cardTitleClass, isList && 'mb-0')}>
          <Link to={to} className={cardTitleLinkClass}>
            <span className="line-clamp-2">{titre}</span>
          </Link>
        </h3>
        {extrait ? (
          <p
            className={
              isList
                ? featuredExcerpt
                  ? cn(cardExcerptClass, 'line-clamp-4')
                  : cardExcerptListClass
                : cardExcerptClass
            }
          >
            {extrait}
          </p>
        ) : null}
        <div className={isList ? cardCtaListWrapClass : cardCtaWrapClass}>
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
