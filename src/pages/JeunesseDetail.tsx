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

      <article className="px-4 pt-4 pb-8">
        <JeunesseTypeBadge type={activite.type} />
        <h1 className="mt-2 text-lg font-extrabold leading-tight text-text">
          {activite.titre}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-text/80">{detail.intro}</p>

        {isJeu ? (
          <>
            <GenialiEmbed />
            <Button
              asChild
              variant="secondary"
              className="mb-6 h-11 w-full rounded-md text-sm font-bold tracking-wide"
            >
              <a href="#">Jouer en plein écran</a>
            </Button>
          </>
        ) : (
          <div className="my-6 flex h-40 items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-sm italic text-text/50">
            Séquence pédagogique — contenu à venir
          </div>
        )}

        <div className="mb-6 rounded-md border border-border bg-muted/40 p-3">
          <p className={typography.sectionLabel}>À propos</p>
          <dl className="mt-3 space-y-2">
            <div className="flex gap-3 text-xs">
              <dt className="w-24 shrink-0 text-text/60">Niveau</dt>
              <dd className="font-medium text-text">{detail.niveau}</dd>
            </div>
            <div className="flex gap-3 text-xs">
              <dt className="w-24 shrink-0 text-text/60">Durée</dt>
              <dd className="font-medium text-text">{detail.duree}</dd>
            </div>
            <div className="flex gap-3 text-xs">
              <dt className="w-24 shrink-0 text-text/60">Document source</dt>
              <dd className="font-medium text-text">{detail.documentSource}</dd>
            </div>
          </dl>
        </div>

        <a
          href={detail.documentGallicaHref}
          className="flex items-center justify-between rounded-md border border-border bg-muted/50 px-3 py-3"
        >
          <span className="text-xs leading-snug text-text">{detail.documentSource}</span>
          <span className="ml-2 shrink-0 text-xs font-semibold text-secondary">
            Voir sur Gallica
            <ArrowRight className="ml-0.5 inline h-3 w-3" />
          </span>
        </a>
      </article>
    </SitePageShell>
  )
}
