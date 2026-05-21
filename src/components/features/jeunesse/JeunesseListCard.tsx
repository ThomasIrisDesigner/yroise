import { Link } from 'react-router-dom'

import { JeunesseTypeBadge } from '@/components/features/jeunesse/JeunesseTypeBadge'
import type { JeunesseActivite } from '@/data/jeunesse'
import { typography } from '@/styles/typography'

interface JeunesseListCardProps {
  activite: JeunesseActivite
}

export function JeunesseListCard({ activite }: JeunesseListCardProps) {
  const mediaLabel = activite.type === 'jeu' ? 'Jeu interactif' : 'Séquence pédagogique'

  return (
    <Link
      to={`/jeunesse/${activite.slug}`}
      className="block overflow-hidden rounded-md border border-border"
    >
      <div className="flex h-[70px] items-center justify-center bg-muted text-[11px] italic text-text/40">
        {activite.type === 'jeu' ? '🎮 ' : '📚 '}
        {mediaLabel}
      </div>
      <div className="bg-surface px-3 py-3 pb-4">
        <JeunesseTypeBadge type={activite.type} className="mb-2" />
        <h2 className={`${typography.cardTitle} leading-snug`}>{activite.titre}</h2>
        <p className="mt-1 text-xs leading-relaxed text-text/70">{activite.description}</p>
      </div>
    </Link>
  )
}
