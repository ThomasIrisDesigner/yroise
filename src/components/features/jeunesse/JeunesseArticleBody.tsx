import { typography } from '@/styles/typography'

interface JeunesseArticleBodyProps {
  presentation: string
}

/** Corps éditorial page jeu / atelier — intertitre + texte Source Serif 4. */
export function JeunesseArticleBody({ presentation }: JeunesseArticleBodyProps) {
  return (
    <div className={typography.editorialBodyStack}>
      <h2 className={typography.articleHeading}>Présentation</h2>
      <p className={typography.editorialBody}>{presentation}</p>
    </div>
  )
}
