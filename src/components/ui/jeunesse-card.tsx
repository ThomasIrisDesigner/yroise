import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardImageClass,
  cardLabelWrapClass,
  cardMetaClass,
  cardTitleClass,
  cardTitleLinkClass,
  editorialCardClass,
  editorialCardSliderClass,
} from '@/components/ui/card-shared'
import { TypeLabel } from '@/components/ui/type-label'
import type { JeunesseType } from '@/data/jeunesse'
import { cn } from '@/lib/utils'

export interface JeunesseCardProps {
  to: string
  titre: string
  type: JeunesseType
  meta?: string
  imageSrc?: string
  imageAlt?: string
  sliderItem?: boolean
  className?: string
}

export function JeunesseCard({
  to,
  titre,
  type,
  meta,
  imageSrc,
  imageAlt,
  sliderItem = false,
  className,
}: JeunesseCardProps) {
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
        {meta ? <p className={cardMetaClass}>{meta}</p> : null}
        <div className={cardLabelWrapClass}>
          <TypeLabel type={type} className="text-[10px] tracking-[3px]" />
        </div>
      </div>
    </article>
  )
}
