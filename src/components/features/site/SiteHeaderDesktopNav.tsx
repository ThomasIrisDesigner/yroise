import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { COLLECTIONS } from '@/data/collections'
import { PastilleTriangle } from '@/components/ui/pastille-triangle'
import { getActiveNavSection } from '@/lib/navActive'
import { cn } from '@/lib/utils'

const navLinkClass =
  'whitespace-nowrap font-outfit text-sm font-bold uppercase tracking-[3px] text-text transition-colors hover:text-glaz-700'

const collectionsPanelLinkClass =
  'group flex items-center font-outfit text-base tracking-[1px] text-text transition-colors'

const collectionsPanelFeaturedLinkClass = cn(collectionsPanelLinkClass, 'font-semibold')

const collectionsPanelItemLinkClass = cn(collectionsPanelLinkClass, 'font-medium')

function CollectionsPanelPastille() {
  return (
    <span
      aria-hidden
      className="inline-flex w-0 shrink-0 overflow-hidden opacity-0 transition-[width,margin,opacity] duration-150 group-hover:mr-2 group-hover:w-[6px] group-hover:opacity-100"
    >
      <PastilleTriangle />
    </span>
  )
}

function CollectionsPanelLink({
  to,
  onClick,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link to={to} onClick={onClick} role="menuitem" className={className} {...props}>
      <CollectionsPanelPastille />
      {children}
    </Link>
  )
}

function HeaderNavChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden
      className={cn(
        'size-6 shrink-0 text-text transition-[color,transform] duration-200 group-hover:text-glaz-700',
        open && 'rotate-180'
      )}
    >
      <path
        d="M8 10l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SiteHeaderDesktopNav({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation()
  const activeSection = getActiveNavSection(pathname)
  const [collectionsOpen, setCollectionsOpen] = React.useState(false)

  React.useEffect(() => {
    setCollectionsOpen(false)
  }, [pathname])

  const handlePanelNavigate = React.useCallback(() => {
    setCollectionsOpen(false)
    onNavigate?.()
  }, [onNavigate])

  return (
    <nav
      className={cn(
        'site-header-desktop-nav prototype-desktop-only items-center gap-8',
        collectionsOpen && 'z-20'
      )}
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

      <div className="site-header-collections-dropdown relative">
        <button
          type="button"
          aria-expanded={collectionsOpen}
          aria-haspopup="true"
          onClick={() => setCollectionsOpen((open) => !open)}
          className={cn(navLinkClass, 'group flex items-center gap-0')}
        >
          Collections
          <HeaderNavChevron open={collectionsOpen} />
        </button>

        {collectionsOpen ? (
          <div
            className="site-header-collections-panel absolute left-0 top-full z-50 mt-3 flex w-[250px] flex-col gap-5 rounded-lg border-2 border-solid border-primary bg-background p-6"
            role="menu"
          >
            <CollectionsPanelLink
              to="/collections"
              onClick={handlePanelNavigate}
              className={collectionsPanelFeaturedLinkClass}
            >
              Tout voir
            </CollectionsPanelLink>
            {COLLECTIONS.map((col) => (
              <CollectionsPanelLink
                key={col.slug}
                to={`/collections/${col.slug}`}
                onClick={handlePanelNavigate}
                aria-current={pathname === `/collections/${col.slug}` ? 'page' : undefined}
                className={collectionsPanelItemLinkClass}
              >
                {col.name}
              </CollectionsPanelLink>
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
