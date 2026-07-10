import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardBodyListClass,
  cardBodyOnDarkClass,
  cardCtaFeaturedListWrapClass,
  cardCtaListWrapClass,
  cardCtaOnDarkWrapClass,
  cardCtaWrapClass,
  cardExcerptClass,
  cardExcerptListClass,
  cardExcerptOnDarkClass,
  cardImageClass,
  cardImageListClass,
  editorialCardClass,
  editorialCardOnDarkClass,
  editorialCardSliderClass,
  cardTitleClass,
  cardTitleLinkClass,
  cardTitleLinkOnDarkClass,
  cardTitleOnDarkClass,
  listCardStackClass,
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
  /** Carousel sur fond sombre (article — Vous aimerez aussi) */
  onDark?: boolean
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
  onDark = false,
  className,
}: HistoireCardProps) {
  const isList = layout === 'list'
  const isFeaturedList = isList && featured
  const isOnDark = onDark || isFeaturedList
  const isOnDarkSlider = onDark && !isList

  return (
    <article
      className={cn(
        isOnDarkSlider && editorialCardOnDarkClass,
        !isOnDarkSlider && !isFeaturedList && editorialCardClass,
        isFeaturedList &&
          'histoire-list-card histoire-list-card--featured card group relative mx-auto flex w-full max-w-[310px] flex-col overflow-hidden bg-transparent',
        !isFeaturedList && isList && 'histoire-list-card',
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
      <div
        className={
          isOnDarkSlider
            ? cardBodyOnDarkClass
            : isList
              ? cardBodyListClass
              : cardBodyClass
        }
      >
        <h3
          className={cn(
            isOnDarkSlider ? cardTitleOnDarkClass : cardTitleClass,
            isList && !isOnDarkSlider && 'mb-0',
            isFeaturedList && 'text-on-dark'
          )}
        >
          <Link
            to={to}
            className={isOnDark ? cardTitleLinkOnDarkClass : cardTitleLinkClass}
          >
            <span className="line-clamp-2">{titre}</span>
          </Link>
        </h3>
        {extrait ? (
          <p
            className={
              isOnDarkSlider
                ? cardExcerptOnDarkClass
                : isList
                  ? cn(cardExcerptListClass, isFeaturedList && 'text-on-dark')
                  : cardExcerptClass
            }
          >
            {extrait}
          </p>
        ) : null}
        <div
          className={
            isOnDarkSlider
              ? cardCtaOnDarkWrapClass
              : isFeaturedList
                ? cardCtaFeaturedListWrapClass
                : isList
                  ? cardCtaListWrapClass
                  : cardCtaWrapClass
          }
        >
          <Button
            variant="secondary"
            size={isOnDarkSlider ? 'default' : 'sm'}
            inverted={isOnDark}
            className={cn(
              'pointer-events-none',
              isOnDarkSlider && 'histoire-related-card-cta'
            )}
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
