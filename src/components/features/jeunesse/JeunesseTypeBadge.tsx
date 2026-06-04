import type { JeunesseType } from '@/data/jeunesse'
import { JEUNESSE_TYPE_LABELS } from '@/data/jeunesse'
import { cn } from '@/lib/utils'

interface JeunesseTypeBadgeProps {
  type: JeunesseType
  className?: string
}

export function JeunesseTypeBadge({ type, className }: JeunesseTypeBadgeProps) {
  const isJeu = type === 'jeu'
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-1 text-xs font-bold uppercase tracking-widest',
        isJeu
          ? 'border border-border bg-surface text-aurore-700'
          : 'border border-border bg-background text-text/60',
        className
      )}
    >
      {JEUNESSE_TYPE_LABELS[type]}
    </span>
  )
}
