import { typography } from '@/styles/typography'

interface ArticleBylineProps {
  auteur: string
}

/** Byline article — PAR en regular, prénom en medium, rôle en regular. */
export function ArticleByline({ auteur }: ArticleBylineProps) {
  const commaIdx = auteur.indexOf(',')
  const name = (commaIdx >= 0 ? auteur.slice(0, commaIdx) : auteur).trim()
  const role = commaIdx >= 0 ? auteur.slice(commaIdx + 1).trim() : null

  return (
    <p className={typography.articleByline}>
      Par <span className="font-semibold">{name}</span>
      {role ? (
        <>
          {' '}
          <span className="font-normal">- {role}</span>
        </>
      ) : null}
    </p>
  )
}
