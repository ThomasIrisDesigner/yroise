import { ArrowRight } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { GenialiEmbed } from '@/components/features/jeunesse/GenialiEmbed'
import { JeunesseTypeBadge } from '@/components/features/jeunesse/JeunesseTypeBadge'
import { SectionBackLink } from '@/components/features/site/SectionBackLink'
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
      <article className="px-5 pt-4 pb-10">
        <SectionBackLink to="/jeunesse">← Jeunesse</SectionBackLink>
        <JeunesseTypeBadge type={activite.type} className="mt-3" />
        <h1 className={`mt-3 ${typography.pageTitle}`}>{activite.titre}</h1>
        <p className={`mt-3 ${typography.bodyMuted}`}>{detail.intro}</p>

        {isJeu ? (
          <>
            <GenialiEmbed />
            <Button
              asChild
              className="mb-6 h-12 w-full rounded-md bg-aurore-700 text-base font-bold tracking-wide text-surface hover:bg-aurore-700/90"
            >
              <a href="#">Jouer en plein écran</a>
            </Button>
          </>
        ) : (
          <div
            className={`my-6 flex h-44 items-center justify-center rounded-md border border-dashed border-border bg-surface/50 ${typography.editorialCaption}`}
          >
            Séquence pédagogique — contenu à venir
          </div>
        )}

        <div className="mb-6 rounded-md border border-border bg-surface/40 p-4">
          <p className={typography.sectionLabel}>À propos</p>
          <dl className="mt-3 space-y-3">
            <div className="flex gap-3">
              <dt className={`w-28 shrink-0 ${typography.meta}`}>Niveau</dt>
              <dd className={typography.titleM}>{detail.niveau}</dd>
            </div>
            <div className="flex gap-3">
              <dt className={`w-28 shrink-0 ${typography.meta}`}>Durée</dt>
              <dd className={typography.titleM}>{detail.duree}</dd>
            </div>
            <div className="flex gap-3">
              <dt className={`w-28 shrink-0 ${typography.meta}`}>Document source</dt>
              <dd className={typography.titleM}>{detail.documentSource}</dd>
            </div>
          </dl>
        </div>

        <a
          href={detail.documentGallicaHref}
          className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-border bg-surface/50 px-4 py-3"
        >
          <span className={typography.meta}>{detail.documentSource}</span>
          <span className={`inline-flex shrink-0 items-center ${typography.titleM}`}>
            Voir sur Gallica
            <ArrowRight className="ml-1 inline h-4 w-4" />
          </span>
        </a>
      </article>
    </SitePageShell>
  )
}
