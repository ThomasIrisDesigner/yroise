import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { COLLECTIONS } from '@/data/collections'
import { getActiveNavSection } from '@/lib/navActive'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/** Figma menu — titres principaux : 22px / 3px, sous-entrées : 20px / 1px */
const menuMainClass =
  'font-outfit text-[1.375rem] font-bold leading-normal tracking-[0.1875rem] text-on-dark uppercase'
const menuSubBoldClass =
  'font-outfit text-[1.25rem] font-bold leading-normal tracking-[0.0625rem] text-on-dark'
const menuSubClass =
  'font-outfit text-[1.25rem] font-medium leading-normal tracking-[0.0625rem] text-on-dark'

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
      className="fixed inset-0 z-[60] flex flex-col justify-between bg-text text-on-dark"
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal"
    >
      <div className="min-h-0 w-full flex-1 overflow-y-auto">
        {/* NAV — 72px, padding 16px, bouton fermer 40px */}
        <div className="flex h-[4.5rem] items-center justify-end px-section">
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-on-dark"
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

        {/* MENU — padding 24px, gap 32px entre rubriques */}
        <nav className="flex flex-col gap-8 px-6" aria-label="Navigation principale">
          <Link
            to="/histoires"
            onClick={onClose}
            aria-current={activeSection === 'histoires' ? 'page' : undefined}
            className={menuMainClass}
          >
            Histoires
          </Link>

          <div className="w-full">
            <button
              type="button"
              onClick={() => setCollectionsOpen((v) => !v)}
              aria-expanded={collectionsOpen}
              className={cn(menuMainClass, 'flex w-full items-center justify-between gap-4')}
            >
              <span>Collections</span>
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
              <div className="flex flex-col gap-4 px-2 pt-6">
                <Link
                  to="/collections"
                  onClick={onClose}
                  className={menuSubBoldClass}
                >
                  Tout voir
                </Link>
                {COLLECTIONS.map((col) => (
                  <Link
                    key={col.slug}
                    to={`/collections/${col.slug}`}
                    onClick={onClose}
                    aria-current={pathname === `/collections/${col.slug}` ? 'page' : undefined}
                    className={menuSubClass}
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
      </div>

      {/* Langues — padding 24px, pb 32px, gap 24px */}
      <div className="flex items-center justify-center gap-6 px-6 pb-8">
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
    </div>
  )
}
