import { gmbMediaAspectClass } from '@/components/features/histoires/gmb/gmb-shared'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface JeunesseArticleHeroProps {
  imageSrc?: string
  imageAlt?: string
  placeholder?: string
}

/** Image hero jeu / atelier — pleine largeur, bordure aurore (Figma 117:1217). */
export function JeunesseArticleHero({
  imageSrc,
  imageAlt = '',
  placeholder = 'Image',
}: JeunesseArticleHeroProps) {
  return (
    <figure className="article-page-hero flex flex-col">
      <div
        className={cn(
          gmbMediaAspectClass,
          'article-hero-media overflow-hidden rounded-lg border-4 border-aurore-700'
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            draggable={false}
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
    </figure>
  )
}
