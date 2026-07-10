import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardBodyListClass,
  cardCtaListWrapClass,
  cardImageClass,
  cardImageListClass,
  cardLabelWrapClass,
  cardMetaClass,
  cardTitleClass,
  cardTitleLinkClass,
  cardTitleLinkOnDarkClass,
  editorialCardClass,
  editorialCardSliderClass,
  jeunesseListImageFrameClass,
} from '@/components/ui/card-shared'
import { Button } from '@/components/ui/button'
import { TypeLabel } from '@/components/ui/type-label'
import type { JeunesseType } from '@/data/jeunesse'
import { cn } from '@/lib/utils'

const JEUNESSE_CTA_LABELS: Record<JeunesseType, string> = {
  jeu: 'Jouer',
  sequence: 'Découvrir',
}

export interface JeunesseCardProps {
  to: string
  titre: string
  type: JeunesseType
  meta?: string
  imageSrc?: string
  imageAlt?: string
  sliderItem?: boolean
  /** Page liste Jeunesse (défaut : card home / slider) */
  layout?: 'default' | 'list'
  /** Premier item mis en avant — fond aurore-900, texte clair */
  featured?: boolean
  className?: string
}

export function JeunesseCard({
  to,
  titre,
  type,
  meta,
  imageSrc = '/images/Jeunesse_photo.jpg',
  imageAlt,
  sliderItem = false,
  layout = 'default',
  featured = false,
  className,
}: JeunesseCardProps) {
  const isList = layout === 'list'
  const isFeaturedList = isList && featured
  const ctaLabel = JEUNESSE_CTA_LABELS[type]
  const listCardClass =
    'jeunesse-list-card card group relative mx-auto flex w-full max-w-[310px] flex-col overflow-hidden bg-background'

  const imageNode = imageSrc ? (
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
  )

  return (
    <article
      className={cn(
        isList && !isFeaturedList && listCardClass,
        !isList && !isFeaturedList && editorialCardClass,
        isFeaturedList &&
          'card group relative mx-auto flex w-full max-w-[310px] flex-col overflow-hidden bg-transparent',
        sliderItem && editorialCardSliderClass,
        className
      )}
    >
      {isList ? (
        <div className={jeunesseListImageFrameClass}>{imageNode}</div>
      ) : (
        imageNode
      )}
      <div className={isList ? cardBodyListClass : cardBodyClass}>
        {isList ? (
          <TypeLabel
            type={type}
            className={cn(
              'mb-0',
              isFeaturedList ? 'text-aurore-300' : 'text-aurore-700'
            )}
          />
        ) : null}
        <h3
          className={cn(
            cardTitleClass,
            isList && 'mb-0',
            isFeaturedList && 'text-on-dark'
          )}
        >
          <Link
            to={to}
            className={isFeaturedList ? cardTitleLinkOnDarkClass : cardTitleLinkClass}
          >
            <span className="line-clamp-2">{titre}</span>
          </Link>
        </h3>
        {meta && !isList ? (
          <p className={cardMetaClass}>{meta}</p>
        ) : null}
        {isList ? (
          <div className={cardCtaListWrapClass}>
            <Button
              variant="secondary"
              size="sm"
              inverted={isFeaturedList}
              className="pointer-events-none"
              tabIndex={-1}
              aria-hidden
            >
              {ctaLabel}
            </Button>
          </div>
        ) : (
          <div className={cardLabelWrapClass}>
            <TypeLabel type={type} className="text-[10px] tracking-[3px]" />
          </div>
        )}
      </div>
    </article>
  )
}
