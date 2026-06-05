import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
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
        className="flex min-h-14 w-full items-center justify-between bg-surface px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className={typography.sectionLabel}>Sources</span>
        <ChevronDown
          className={cn('h-5 w-5 text-text/50 transition-transform', open && 'rotate-180')}
        />
      </button>
      {open ? (
        <ul>
          {sources.map((source, i) => (
            <li
              key={source.label}
              className={cn(
                'flex min-h-14 items-center justify-between gap-3 border-t border-border px-4 py-3',
                i === sources.length - 1 && 'border-b-0'
              )}
            >
              <span className="text-sm leading-snug text-text">{source.label}</span>
              <Button asChild variant="ghost" size="sm" className="shrink-0">
                <a href={source.href} aria-label={`Voir ${source.label} sur Gallica`}>
                  Voir
                </a>
              </Button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
