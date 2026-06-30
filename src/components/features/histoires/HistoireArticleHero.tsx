import { GmbFigureLegend } from '@/components/features/histoires/gmb/GmbFigureLegend'
import { gmbMediaAspectClass } from '@/components/features/histoires/gmb/gmb-shared'
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
    <figure className="flex flex-col gap-2">
      <div className={gmbMediaAspectClass}>
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
        className="px-section"
        caption={caption}
        meta={meta}
        linkLabel={linkLabel}
        linkHref={linkHref}
      />
    </figure>
  )
}
