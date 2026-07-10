import { Fragment } from 'react'

import { cn } from '@/lib/utils'
import type { InstitutionalSection } from '@/types/institutionalPage'
import { typography } from '@/styles/typography'

interface InstitutionalArticleBodyProps {
  sections: InstitutionalSection[]
}

/** Corps page institutionnelle — sections H2 + paragraphes Source Serif 4. */
export function InstitutionalArticleBody({
  sections,
}: InstitutionalArticleBodyProps) {
  return (
    <article className="px-section py-6 pb-[72px]">
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
    </article>
  )
}
