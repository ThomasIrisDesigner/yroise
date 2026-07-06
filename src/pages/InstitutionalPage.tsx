import { Navigate } from 'react-router-dom'

import { InstitutionalArticleBody } from '@/components/features/institutional/InstitutionalArticleBody'
import { InstitutionalArticleHeader } from '@/components/features/institutional/InstitutionalArticleHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getInstitutionalPage } from '@/data/institutionalPages'

interface InstitutionalPageProps {
  pageSlug: string
}

/**
 * Page annexe institutionnelle — modèle Figma 117:1660.
 * Informations pratiques, FAQ, Accessibilité, Mentions légales…
 */
export function InstitutionalPage({ pageSlug }: InstitutionalPageProps) {
  const page = getInstitutionalPage(pageSlug)

  if (!page) {
    return <Navigate to="/prototype" replace />
  }

  return (
    <SitePageShell>
      <div className="bg-background">
        <InstitutionalArticleHeader titre={page.titre} />
        <InstitutionalArticleBody sections={page.sections} />
      </div>
    </SitePageShell>
  )
}
