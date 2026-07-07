import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { COLLECTIONS } from '@/data/collections'
import { getActiveNavSection } from '@/lib/navActive'
import { cn } from '@/lib/utils'

const navLinkClass =
  'whitespace-nowrap font-outfit text-sm font-bold uppercase tracking-[3px] text-text transition-colors hover:text-glaz-700'

export function SiteHeaderDesktopNav({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation()
  const activeSection = getActiveNavSection(pathname)
  const [collectionsOpen, setCollectionsOpen] = React.useState(
    activeSection === 'collections'
  )

  React.useEffect(() => {
    if (activeSection === 'collections') {
      setCollectionsOpen(true)
    }
  }, [activeSection])

  return (
    <nav
      className="site-header-desktop-nav prototype-desktop-only items-center gap-10"
      aria-label="Navigation principale"
    >
      <Link
        to="/histoires"
        onClick={onNavigate}
        aria-current={activeSection === 'histoires' ? 'page' : undefined}
        className={navLinkClass}
      >
        Histoires
      </Link>

      <div className="relative">
        <button
          type="button"
          aria-expanded={collectionsOpen}
          aria-haspopup="true"
          onClick={() => setCollectionsOpen((open) => !open)}
          className={cn(navLinkClass, 'flex items-center gap-2')}
        >
          Collections
          <img
            src="/images/Icon_chevron.svg"
            alt=""
            aria-hidden
            className={cn(
              'size-6 shrink-0 transition-transform duration-200',
              collectionsOpen ? '-rotate-90' : 'rotate-90'
            )}
            draggable={false}
          />
        </button>

        {collectionsOpen ? (
          <div className="absolute left-0 top-full z-50 mt-3 min-w-[280px] rounded border border-border bg-surface py-3 shadow-lg">
            <Link
              to="/collections"
              onClick={onNavigate}
              className="block px-4 py-2 font-outfit text-base font-medium text-text hover:bg-sable-100"
            >
              Tout voir
            </Link>
            {COLLECTIONS.map((col) => (
              <Link
                key={col.slug}
                to={`/collections/${col.slug}`}
                onClick={onNavigate}
                aria-current={pathname === `/collections/${col.slug}` ? 'page' : undefined}
                className="block px-4 py-2 font-outfit text-base font-normal text-text hover:bg-sable-100"
              >
                {col.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <Link
        to="/carte"
        onClick={onNavigate}
        aria-current={activeSection === 'carte' ? 'page' : undefined}
        className={navLinkClass}
      >
        Carte interactive
      </Link>

      <Link
        to="/jeunesse"
        onClick={onNavigate}
        aria-current={activeSection === 'jeunesse' ? 'page' : undefined}
        className={navLinkClass}
      >
        Jeunesse
      </Link>
    </nav>
  )
}
