import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { typography } from '@/styles/typography'
import { cn } from '@/lib/utils'

interface SourceItem {
  label: string
  href: string
}

interface SourcesAccordionProps {
  sources: SourceItem[]
}

export function SourcesAccordion({ sources }: SourcesAccordionProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="mb-6 overflow-hidden rounded-md border-2 border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between bg-muted px-3 py-2.5 text-left"
        aria-expanded={open}
      >
        <span className={typography.sectionLabel}>Sources</span>
        <ChevronDown
          className={cn('h-4 w-4 text-text/50 transition-transform', open && 'rotate-180')}
        />
      </button>
      {open ? (
        <ul>
          {sources.map((source, i) => (
            <li
              key={source.label}
              className={cn(
                'flex items-center justify-between gap-2 border-t border-border px-3 py-2.5',
                i === sources.length - 1 && 'border-b-0'
              )}
            >
              <span className="text-xs leading-snug text-text">{source.label}</span>
              <a
                href={source.href}
                className="shrink-0 text-xs font-semibold text-secondary"
                aria-label={`Voir ${source.label} sur Gallica`}
              >
                →
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
