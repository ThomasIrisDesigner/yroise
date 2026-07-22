import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { COLLECTIONS } from '@/data/collections'
import { NavCollectionsTriangle } from '@/components/ui/nav-collections-triangle'
import { getActiveNavSection } from '@/lib/navActive'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/** Figma menu mobile <520 — titres : 19px / 3px, sous-entrées : 18px / 1px */
const menuMainClass =
  'mobile-menu-link font-outfit text-[1.1875rem] font-bold leading-normal tracking-[0.1875rem] text-on-dark uppercase'
const menuSubLeadClass =
  'mobile-menu-sub-lead font-outfit text-[1.125rem] font-medium leading-normal tracking-[0.0625rem] text-on-dark'
const menuSubClass =
  'mobile-menu-sub font-outfit text-[1.125rem] font-normal leading-normal tracking-[0.0625rem] text-on-dark'

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
    <div
      className={cn(
        'mobile-menu absolute inset-0 z-[60] overflow-y-auto overscroll-y-contain bg-ocean-900 text-on-dark scrollbar-none [-webkit-overflow-scrolling:touch]',
        collectionsOpen && 'mobile-menu--collections-open'
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal"
    >
      <div className="mobile-menu-inner flex min-h-full flex-col">
        {/* NAV — 72px, padding 16px, bouton fermer 40px */}
        <div className="mobile-menu-topbar flex h-[4.5rem] shrink-0 items-center justify-end px-section">
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center"
          >
            <img
              src="/images/Icon_fermer.svg"
              alt=""
              aria-hidden
              className="size-6"
              draggable={false}
            />
          </button>
        </div>

        {/* MENU — grow pousse les langues en bas si contenu court */}
        <nav
          className="mobile-menu-nav flex grow flex-col items-center gap-8 px-6 pt-6"
          aria-label="Navigation principale"
        >
          <Link
            to="/histoires"
            onClick={onClose}
            aria-current={activeSection === 'histoires' ? 'page' : undefined}
            className={menuMainClass}
          >
            Histoires
          </Link>

          <div className="mobile-menu-collections flex w-full flex-col items-center">
            <button
              type="button"
              onClick={(e) => {
                const scroller = e.currentTarget.closest('.mobile-menu')
                const scrollTop = scroller instanceof HTMLElement ? scroller.scrollTop : 0
                setCollectionsOpen((v) => !v)
                requestAnimationFrame(() => {
                  if (scroller instanceof HTMLElement) {
                    scroller.scrollTop = scrollTop
                  }
                })
              }}
              aria-expanded={collectionsOpen}
              className={cn(
                menuMainClass,
                'mobile-menu-collections-trigger flex w-auto items-center gap-1'
              )}
            >
              <span>Collections</span>
              <NavCollectionsTriangle open={collectionsOpen} className="text-on-dark" />
            </button>

            {collectionsOpen ? (
              <div className="mobile-menu-collections-list flex flex-col items-center gap-4 px-2 pt-6">
                <Link
                  to="/collections"
                  onClick={onClose}
                  className={cn(menuSubLeadClass, 'text-center')}
                >
                  Tout voir
                </Link>
                {COLLECTIONS.map((col) => (
                  <Link
                    key={col.slug}
                    to={`/collections/${col.slug}`}
                    onClick={onClose}
                    aria-current={
                      pathname === `/collections/${col.slug}` ? 'page' : undefined
                    }
                    className={cn(menuSubClass, 'text-center')}
                  >
                    {col.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            to="/carte"
            onClick={onClose}
            aria-current={activeSection === 'carte' ? 'page' : undefined}
            className={menuMainClass}
          >
            Carte interactive
          </Link>

          <Link
            to="/jeunesse"
            onClick={onClose}
            aria-current={activeSection === 'jeunesse' ? 'page' : undefined}
            className={menuMainClass}
          >
            Jeunesse
          </Link>
        </nav>

        {/* Langues — 40px du bas si contenu court ; sous le contenu si scroll */}
        <footer className="mobile-menu-footer shrink-0 bg-ocean-900 px-6 pt-4 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <div className="mobile-menu-langs flex items-center justify-center gap-6">
            <button
              type="button"
              aria-pressed
              className="flex size-10 items-center justify-center rounded-full border-[3px] border-on-dark bg-on-dark font-outfit text-[1.25rem] font-medium tracking-[0.0625rem] text-text"
            >
              FR
            </button>
            <button
              type="button"
              aria-pressed={false}
              className="flex size-10 items-center justify-center rounded-full border-[3px] border-on-dark font-outfit text-[1.25rem] font-medium tracking-[0.0625rem] text-on-dark"
            >
              BR
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
