import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface JeunesseArticleBodyProps {
  presentation: string
}

/** Corps éditorial page jeu / atelier — sous-titre + texte Source Serif 4. */
export function JeunesseArticleBody({ presentation }: JeunesseArticleBodyProps) {
  return (
    <article className="px-section py-6">
      <div className={typography.editorialBodyStack}>
        <h2 className={cn(typography.titleL, 'pt-6 font-bold leading-7')}>
          Présentation
        </h2>
        <p className={typography.editorialBody}>{presentation}</p>
      </div>
    </article>
  )
}
