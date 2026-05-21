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
      <div className="h-32 w-full bg-muted" aria-hidden />
      <div className="bg-surface p-4">
        <HistoireTypeBadge type={histoire.type} className="mb-2" />
        <h2 className={typography.cardTitle}>{histoire.titre}</h2>
      </div>
    </Link>
  )
}
