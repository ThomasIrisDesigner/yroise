import type { HistoireType } from '@/data/histoires'
import { HISTOIRE_TYPE_LABELS } from '@/data/histoires'

interface HistoireTypeBadgeProps {
  type: HistoireType
  className?: string
}

export function HistoireTypeBadge({ type, className }: HistoireTypeBadgeProps) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-widest text-text/60 ${className ?? ''}`}
    >
      {HISTOIRE_TYPE_LABELS[type]}
    </p>
  )
}
