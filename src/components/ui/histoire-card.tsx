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
  listCardStackClass,
  cardTitleClass,
  cardTitleLinkClass,
  cardTitleLinkOnDarkClass,
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
  /** Premier billet mis en avant — fond sombre, texte blanc */
  featured?: boolean
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
  featured = false,
  className,
}: HistoireCardProps) {
  const isList = layout === 'list'
  const isFeaturedList = isList && featured

  return (
    <article
      className={cn(
        !isFeaturedList && editorialCardClass,
        isFeaturedList &&
          'card group relative mx-auto flex w-full max-w-[310px] flex-col overflow-hidden bg-transparent',
        sliderItem && editorialCardSliderClass,
        isList && !isFeaturedList && cn('mx-auto w-full max-w-[310px]', listCardStackClass),
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
        <h3 className={cn(cardTitleClass, isList && 'mb-0', isFeaturedList && 'text-on-dark')}>
          <Link
            to={to}
            className={isFeaturedList ? cardTitleLinkOnDarkClass : cardTitleLinkClass}
          >
            <span className="line-clamp-2">{titre}</span>
          </Link>
        </h3>
        {extrait ? (
          <p
            className={
              isList
                ? cn(cardExcerptListClass, isFeaturedList && 'text-on-dark')
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
            inverted={isFeaturedList}
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
