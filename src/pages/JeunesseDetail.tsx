import { Navigate, useParams } from 'react-router-dom'

import { GenialiEmbed } from '@/components/features/jeunesse/GenialiEmbed'
import { SectionBackLink } from '@/components/features/site/SectionBackLink'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { Button } from '@/components/ui/button'
import { TypeLabel } from '@/components/ui/type-label'
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
  const mediaLabel = isJeu ? 'Jeu interactif' : 'Séquence pédagogique'

  return (
    <SitePageShell>
      <article className="section-jeunesse px-section pt-4 pb-10">
        <SectionBackLink to="/jeunesse">← Jeunesse</SectionBackLink>

        <div className="mt-4 flex aspect-[3/2] w-full items-center justify-center rounded-md border border-border bg-surface text-sm italic text-text/50">
          {isJeu ? '🎮 ' : '📚 '}
          {mediaLabel}
        </div>

        <TypeLabel type={activite.type} className="mt-3" />
        <h1 className={`mt-3 ${typography.pageTitle}`}>{activite.titre}</h1>
        <p className={`mt-3 ${typography.bodyMuted}`}>{detail.intro}</p>

        {isJeu ? (
          <>
            <GenialiEmbed />
            <Button asChild variant="primary" className="mb-6 w-full justify-center">
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

        <div className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-border bg-surface/50 px-4 py-3">
          <span className={typography.meta}>{detail.documentSource}</span>
          <Button asChild variant="ghost" size="sm">
            <a href={detail.documentGallicaHref}>Voir sur Gallica</a>
          </Button>
        </div>
      </article>
    </SitePageShell>
  )
}
