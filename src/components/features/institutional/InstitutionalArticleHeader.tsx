import { ArticleContentColumn } from '@/components/features/site/ArticleContentColumn'
import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { typography } from '@/styles/typography'

interface InstitutionalArticleHeaderProps {
  titre: string
}

/** En-tête page institutionnelle — même colonne 792px que le corps. */
export function InstitutionalArticleHeader({
  titre,
}: InstitutionalArticleHeaderProps) {
  return (
    <div className="article-page-content-wrap pt-4">
      <ArticleContentColumn>
        <div className="flex flex-col gap-4">
          <SectionRubriqueLink to="/prototype">Accueil</SectionRubriqueLink>
          <h1 className={typography.articleTitle}>{titre}</h1>
        </div>
      </ArticleContentColumn>
    </div>
  )
}
