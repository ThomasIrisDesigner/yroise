import type { ContentType } from '@/data/contentTypes'
import { CONTENT_TYPE_LABELS } from '@/data/contentTypes'
import { cn } from '@/lib/utils'

export interface TypeLabelProps {
  type: ContentType
  className?: string
}

export function TypeLabel({ type, className }: TypeLabelProps) {
  return (
    <p
      className={cn(
        'type-label font-outfit text-[11px] font-bold uppercase leading-none tracking-[3px] text-muted',
        className
      )}
    >
      {CONTENT_TYPE_LABELS[type]}
    </p>
  )
}
