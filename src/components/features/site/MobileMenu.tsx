import { ChevronDown, ChevronRight, X } from 'lucide-react'
import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { COLLECTIONS } from '@/data/collections'
import { getActiveNavSection } from '@/lib/navActive'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

function navItemClass(active: boolean) {
  return cn(
    'flex min-h-14 items-center border-b border-border px-5 py-4 font-outfit text-base tracking-wide transition-colors',
    active
      ? 'border-l-[3px] border-l-glaz-700 bg-surface/50 pl-[17px] font-extrabold text-glaz-700'
      : 'font-bold text-text hover:text-glaz-700'
  )
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { pathname } = useLocation()
  const activeSection = getActiveNavSection(pathname)
  const [collectionsOpen, setCollectionsOpen] = React.useState(
    activeSection === 'collections'
  )

  React.useEffect(() => {
    if (activeSection === 'collections') {
      setCollectionsOpen(true)
    }
  }, [activeSection, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-surface">
      <div className="flex h-14 items-center justify-between border-b border-border px-5">
        <span className={typography.logo}>YROISE</span>
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-text"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="scrollbar-none flex-1 overflow-y-auto" aria-label="Navigation principale">
        <Link
          to="/histoires"
          onClick={onClose}
          aria-current={activeSection === 'histoires' ? 'page' : undefined}
          className={navItemClass(activeSection === 'histoires')}
        >
          Histoires
        </Link>

        <div
          className={cn(
            'border-b border-border',
            (collectionsOpen || activeSection === 'collections') && 'bg-surface/30'
          )}
        >
          <button
            type="button"
            onClick={() => setCollectionsOpen((v) => !v)}
            aria-expanded={collectionsOpen}
            className={cn(
              navItemClass(activeSection === 'collections'),
              'w-full justify-between'
            )}
          >
            <span>Collections</span>
            {collectionsOpen ? (
              <ChevronDown className="h-5 w-5 shrink-0" />
            ) : (
              <ChevronRight className="h-5 w-5 shrink-0 text-text/50" />
            )}
          </button>
          {collectionsOpen ? (
            <div>
              <Link
                to="/collections"
                onClick={onClose}
                aria-current={pathname === '/collections' ? 'page' : undefined}
                className={cn(
                  'flex min-h-12 items-center gap-2 border-t border-border px-5 py-3 pl-9 text-base',
                  pathname === '/collections'
                    ? 'font-bold text-glaz-700'
                    : 'font-semibold text-glaz-700'
                )}
              >
                Tout voir →
              </Link>
              {COLLECTIONS.map((col) => {
                const colActive = pathname === `/collections/${col.slug}`
                return (
                  <Link
                    key={col.slug}
                    to={`/collections/${col.slug}`}
                    onClick={onClose}
                    aria-current={colActive ? 'page' : undefined}
                    className={cn(
                      'flex min-h-12 items-center gap-2 border-t border-border px-5 py-3 pl-9 text-base',
                      colActive
                        ? 'bg-surface/60 font-semibold text-glaz-700'
                        : 'bg-background text-text'
                    )}
                  >
                    <span
                      className={cn(
                        'h-1.5 w-1.5 shrink-0 rounded-full',
                        colActive ? 'bg-glaz-700' : 'bg-glaz-700/60'
                      )}
                    />
                    {col.name}
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>

        <Link
          to="/carte"
          onClick={onClose}
          aria-current={activeSection === 'carte' ? 'page' : undefined}
          className={navItemClass(activeSection === 'carte')}
        >
          📍 La carte
        </Link>

        <Link
          to="/jeunesse"
          onClick={onClose}
          aria-current={activeSection === 'jeunesse' ? 'page' : undefined}
          className={navItemClass(activeSection === 'jeunesse')}
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
