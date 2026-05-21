import { Link } from 'react-router-dom'

import { HistoireTypeBadge } from '@/components/features/histoires/HistoireTypeBadge'
import type { HistoireBillet } from '@/data/histoires'
import { typography } from '@/styles/typography'

interface HistoireListCardProps {
  histoire: HistoireBillet
}

export function HistoireListCard({ histoire }: HistoireListCardProps) {
  return (
    <Link
      to={`/histoires/${histoire.slug}`}
      className="block overflow-hidden rounded-md border border-border"
    >
      <div className="h-24 w-full bg-muted" aria-hidden />
      <div className="bg-surface px-3 py-3 pb-4">
        <HistoireTypeBadge type={histoire.type} className="mb-1.5" />
        <h2 className={`${typography.cardTitle} leading-snug`}>{histoire.titre}</h2>
      </div>
    </Link>
  )
}
