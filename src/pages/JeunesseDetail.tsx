import { ArrowRight } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { GenialiEmbed } from '@/components/features/jeunesse/GenialiEmbed'
import { JeunesseTypeBadge } from '@/components/features/jeunesse/JeunesseTypeBadge'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { Button } from '@/components/ui/button'
import {
  getJeunesseBySlug,
  getJeunesseDetail,
} from '@/data/jeunesse'
import { typography } from '@/styles/typography'

export function JeunesseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const activite = slug ? getJeunesseBySlug(slug) : undefined

  if (!activite) {
    return <Navigate to="/jeunesse" replace />
  }

  const detail = getJeunesseDetail(activite.slug)
  const isJeu = activite.type === 'jeu'

  return (
    <SitePageShell>
      <Breadcrumb
        items={[
          { label: 'Jeunesse', to: '/jeunesse' },
          { label: activite.titre },
        ]}
      />

      <article className="px-5 pt-5 pb-10">
        <JeunesseTypeBadge type={activite.type} />
        <h1 className={`mt-3 ${typography.pageTitle}`}>{activite.titre}</h1>
        <p className={`mt-3 ${typography.bodyMuted}`}>{detail.intro}</p>

        {isJeu ? (
          <>
            <GenialiEmbed />
            <Button
              asChild
              variant="secondary"
              className="mb-6 h-12 w-full rounded-md text-base font-bold tracking-wide"
            >
              <a href="#">Jouer en plein écran</a>
            </Button>
          </>
        ) : (
          <div className="my-6 flex h-44 items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-base italic text-text/50">
            Séquence pédagogique — contenu à venir
          </div>
        )}

        <div className="mb-6 rounded-md border border-border bg-muted/40 p-4">
          <p className={typography.sectionLabel}>À propos</p>
          <dl className="mt-3 space-y-3">
            <div className="flex gap-3 text-sm">
              <dt className="w-28 shrink-0 text-text/60">Niveau</dt>
              <dd className="font-medium text-text">{detail.niveau}</dd>
            </div>
            <div className="flex gap-3 text-sm">
              <dt className="w-28 shrink-0 text-text/60">Durée</dt>
              <dd className="font-medium text-text">{detail.duree}</dd>
            </div>
            <div className="flex gap-3 text-sm">
              <dt className="w-28 shrink-0 text-text/60">Document source</dt>
              <dd className="font-medium text-text">{detail.documentSource}</dd>
            </div>
          </dl>
        </div>

        <a
          href={detail.documentGallicaHref}
          className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-border bg-muted/50 px-4 py-3"
        >
          <span className="text-sm leading-snug text-text">{detail.documentSource}</span>
          <span className="inline-flex shrink-0 items-center text-sm font-semibold text-secondary">
            Voir sur Gallica
            <ArrowRight className="ml-1 inline h-4 w-4" />
          </span>
        </a>
      </article>
    </SitePageShell>
  )
}
