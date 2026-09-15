import { ArticleContentColumn } from '@/components/features/site/ArticleContentColumn'
import { Fragment } from 'react'

import { cn } from '@/lib/utils'
import type { InstitutionalSection } from '@/types/institutionalPage'
import { typography } from '@/styles/typography'

interface InstitutionalArticleBodyProps {
  sections: InstitutionalSection[]
}

/** Corps page institutionnelle — marges et colonnes alignées sur le modèle article. */
export function InstitutionalArticleBody({
  sections,
}: InstitutionalArticleBodyProps) {
  return (
    <div className="article-page-content-wrap">
      <ArticleContentColumn as="article" className="article-page-body py-6">
        <div className={typography.editorialBodyStack}>
          {sections.map((section) => (
            <Fragment key={section.heading}>
              <h2 className={cn(typography.articleHeading, 'pt-6')}>
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className={typography.editorialBody}>
                  {paragraph}
                </p>
              ))}
            </Fragment>
          ))}
        </div>
      </ArticleContentColumn>
    </div>
  )
}
