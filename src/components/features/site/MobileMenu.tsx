import { ChevronDown, ChevronRight, X } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { COLLECTIONS } from '@/data/collections'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [collectionsOpen, setCollectionsOpen] = React.useState(false)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-sm font-extrabold tracking-wider text-secondary">YROISE</span>
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-text"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <nav className="scrollbar-none flex-1 overflow-y-auto py-1">
        <Link
          to="/histoires"
          onClick={onClose}
          className="flex items-center border-b border-border px-5 py-4 text-sm font-bold tracking-wide text-text"
        >
          Histoires de Brest
        </Link>

        <div className={cn('border-b border-border', collectionsOpen && 'bg-muted')}>
          <button
            type="button"
            onClick={() => setCollectionsOpen((v) => !v)}
            className="flex w-full items-center justify-between px-5 py-4 text-sm font-bold tracking-wide text-text"
          >
            Collections
            {collectionsOpen ? (
              <ChevronDown className="h-4 w-4 text-secondary" />
            ) : (
              <ChevronRight className="h-4 w-4 text-text/50" />
            )}
          </button>
          {collectionsOpen ? (
            <div>
              <Link
                to="/collections"
                onClick={onClose}
                className="flex items-center gap-2 border-t border-border bg-muted/80 px-5 py-3 pl-8 text-sm font-semibold text-secondary"
              >
                Tout voir →
              </Link>
              {COLLECTIONS.map((col) => (
                <Link
                  key={col.slug}
                  to={`/collections/${col.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-2 border-t border-border bg-background px-5 py-3 pl-8 text-sm text-text"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-secondary" />
                  {col.name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <Link
          to="/carte"
          onClick={onClose}
          className="flex items-center border-b border-border px-5 py-4 text-sm font-bold tracking-wide text-text"
        >
          La carte
        </Link>
      </nav>

      <div className="flex gap-2 border-t border-border px-5 py-4">
        <span className="rounded bg-primary px-3 py-1 text-xs font-bold text-surface">FR</span>
        <span className="rounded border border-border px-3 py-1 text-xs font-bold text-text/50">
          BR
        </span>
      </div>
    </div>
  )
}
