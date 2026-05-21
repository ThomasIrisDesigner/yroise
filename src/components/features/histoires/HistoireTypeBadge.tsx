import type { HistoireType } from '@/data/histoires'
import { HISTOIRE_TYPE_LABELS } from '@/data/histoires'
import { typography } from '@/styles/typography'

interface HistoireTypeBadgeProps {
  type: HistoireType
  className?: string
}

export function HistoireTypeBadge({ type, className }: HistoireTypeBadgeProps) {
  return (
    <p className={`${typography.histoireType} ${className ?? ''}`}>
      {HISTOIRE_TYPE_LABELS[type]}
    </p>
  )
}
