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
      <div className="flex h-14 items-center justify-between border-b border-border px-5">
        <span className="text-base font-extrabold tracking-wider text-secondary">YROISE</span>
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-muted text-text"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="scrollbar-none flex-1 overflow-y-auto">
        <Link
          to="/histoires"
          onClick={onClose}
          className="flex min-h-14 items-center border-b border-border px-5 py-4 text-base font-bold tracking-wide text-text"
        >
          Histoires
        </Link>

        <div className={cn('border-b border-border', collectionsOpen && 'bg-muted')}>
          <button
            type="button"
            onClick={() => setCollectionsOpen((v) => !v)}
            className="flex min-h-14 w-full items-center justify-between px-5 py-4 text-base font-bold tracking-wide text-text"
          >
            Collections
            {collectionsOpen ? (
              <ChevronDown className="h-5 w-5 text-secondary" />
            ) : (
              <ChevronRight className="h-5 w-5 text-text/50" />
            )}
          </button>
          {collectionsOpen ? (
            <div>
              <Link
                to="/collections"
                onClick={onClose}
                className="flex min-h-12 items-center gap-2 border-t border-border bg-muted/80 px-5 py-3 pl-9 text-base font-semibold text-secondary"
              >
                Tout voir →
              </Link>
              {COLLECTIONS.map((col) => (
                <Link
                  key={col.slug}
                  to={`/collections/${col.slug}`}
                  onClick={onClose}
                  className="flex min-h-12 items-center gap-2 border-t border-border bg-background px-5 py-3 pl-9 text-base text-text"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {col.name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <Link
          to="/carte"
          onClick={onClose}
          className="flex min-h-14 items-center border-b border-border px-5 py-4 text-base font-bold tracking-wide text-text"
        >
          📍 La carte
        </Link>

        <Link
          to="/jeunesse"
          onClick={onClose}
          className="flex min-h-14 items-center border-b border-border px-5 py-4 text-base font-bold tracking-wide text-text"
        >
          Jeunesse
        </Link>
      </nav>

      <div className="flex items-center gap-2 border-t border-border px-5 py-4">
        <span className="inline-flex h-9 items-center rounded bg-primary px-3 text-sm font-bold text-surface">
          FR
        </span>
        <span className="inline-flex h-9 items-center rounded border border-border px-3 text-sm font-bold text-text/50">
          BR
        </span>
      </div>
    </div>
  )
}
