import { Link } from 'react-router-dom'

import { HistoireTypeBadge } from '@/components/features/histoires/HistoireTypeBadge'
import type { HistoireBillet } from '@/data/histoires'
import { typography } from '@/styles/typography'

interface HistoireRebondCardProps {
  histoire: HistoireBillet
}

export function HistoireRebondCard({ histoire }: HistoireRebondCardProps) {
  return (
    <Link
      to={`/histoires/${histoire.slug}`}
      className="flex gap-4 rounded-md border border-border p-4"
    >
      <div className="h-16 w-20 shrink-0 rounded bg-muted" aria-hidden />
      <div className="min-w-0">
        <HistoireTypeBadge type={histoire.type} className="mb-1" />
        <p className={typography.cardTitle}>{histoire.titre}</p>
      </div>
    </Link>
  )
}
