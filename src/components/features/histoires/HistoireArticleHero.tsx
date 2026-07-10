import { GmbFigureLegend } from '@/components/features/histoires/gmb/GmbFigureLegend'
import { gmbMediaAspectClass } from '@/components/features/histoires/gmb/gmb-shared'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface HistoireArticleHeroProps {
  imageSrc?: string
  placeholder: string
  caption: string
  meta?: string
  linkLabel?: string
  linkHref?: string
}

/** Image bandeau article — ratio 310/174 + légende GMB. */
export function HistoireArticleHero({
  imageSrc,
  placeholder,
  caption,
  meta,
  linkLabel,
  linkHref,
}: HistoireArticleHeroProps) {
  return (
    <figure className="article-page-hero flex flex-col">
      <div className={cn(gmbMediaAspectClass, 'article-hero-media')}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={caption}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-surface"
            role="img"
            aria-label={placeholder}
          >
            <span className={typography.editorialCaption}>{placeholder}</span>
          </div>
        )}
      </div>
      <GmbFigureLegend
        className="article-page-content-wrap py-4"
        columnWrap
        innerClassName="article-hero-caption"
        caption={caption}
        meta={meta}
        linkLabel={linkLabel}
        linkHref={linkHref}
      />
    </figure>
  )
}
