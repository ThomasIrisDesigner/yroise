import { Navigate, useParams } from 'react-router-dom'

import { HistoireRebondCard } from '@/components/features/histoires/HistoireRebondCard'
import { HistoireTypeBadge } from '@/components/features/histoires/HistoireTypeBadge'
import { SourcesAccordion } from '@/components/features/histoires/SourcesAccordion'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import {
  getHistoireBySlug,
  HISTOIRE_DETAIL_DEFAULT,
} from '@/data/histoires'
import { LOREM } from '@/data/placeholders'
import { typography } from '@/styles/typography'

export function HistoireDetail() {
  const { slug } = useParams<{ slug: string }>()
  const histoire = slug ? getHistoireBySlug(slug) : undefined

  if (!histoire) {
    return <Navigate to="/histoires" replace />
  }

  const { auteur, corps, sources, rebonds } = HISTOIRE_DETAIL_DEFAULT

  return (
    <SitePageShell>
      <Breadcrumb
        items={[
          { label: 'Histoires', to: '/histoires' },
          { label: histoire.titre },
        ]}
      />

      <div className="h-44 w-full bg-muted" aria-hidden />

      <article className="px-5 pt-5 pb-10">
        <HistoireTypeBadge type={histoire.type} />
        <h1 className={`mt-3 ${typography.pageTitle}`}>{histoire.titre}</h1>
        <p className="mt-3 border-b border-border pb-4 text-sm italic text-text/60">
          Par {auteur}
        </p>

        <div className="mt-5 space-y-4">
          <p className={typography.body}>{corps}</p>
          <p className={typography.body}>{LOREM.paragraph}</p>
        </div>

        <div
          className="my-6 flex h-32 w-full items-center justify-center rounded-md border border-border bg-muted text-sm italic text-text/40"
          aria-hidden
        >
          Image inline
        </div>

        <p className={typography.body}>{LOREM.line}</p>

        <div className="mt-8">
          <SourcesAccordion sources={sources} />
        </div>

        <section className="border-t border-border pt-6">
          <h2 className={typography.sectionLabel}>Nos autres histoires</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {rebonds.map((item) => (
              <li key={item.slug}>
                <HistoireRebondCard histoire={item} />
              </li>
            ))}
          </ul>
        </section>
      </article>
    </SitePageShell>
  )
}
