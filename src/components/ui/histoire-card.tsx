import { Link } from 'react-router-dom'

import {
  cardBodyClass,
  cardExcerptClass,
  cardImageClass,
  cardLabelWrapClass,
  cardTitleClass,
  cardTitleLinkClass,
  editorialCardClass,
  editorialCardSliderClass,
} from '@/components/ui/card-shared'
import { TypeLabel } from '@/components/ui/type-label'
import type { HistoireType } from '@/data/histoires'
import { cn } from '@/lib/utils'

export interface HistoireCardProps {
  to: string
  titre: string
  type: HistoireType
  extrait?: string
  imageSrc?: string
  imageAlt?: string
  sliderItem?: boolean
  className?: string
}

export function HistoireCard({
  to,
  titre,
  type,
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
        <div className={cardLabelWrapClass}>
          <TypeLabel type={type} className="text-[10px] tracking-[3px]" />
        </div>
      </div>
    </article>
  )
}
