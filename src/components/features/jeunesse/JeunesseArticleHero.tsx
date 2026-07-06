import { typography } from '@/styles/typography'

interface JeunesseArticleHeroProps {
  imageSrc?: string
  imageAlt?: string
  placeholder?: string
}

/** Image hero jeu / atelier — bordure aurore, coins arrondis (Figma 117:1217). */
export function JeunesseArticleHero({
  imageSrc,
  imageAlt = '',
  placeholder = 'Image',
}: JeunesseArticleHeroProps) {
  return (
    <figure className="px-section">
      <div className="overflow-hidden rounded-lg border-4 border-aurore-700">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-[358px] w-full object-cover"
            draggable={false}
          />
        ) : (
          <div
            className="flex h-[358px] w-full items-center justify-center bg-surface"
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
