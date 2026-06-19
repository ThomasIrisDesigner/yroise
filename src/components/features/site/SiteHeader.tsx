import * as React from 'react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import { useScrollThreshold } from '@/lib/useScrollThreshold'
import { cn } from '@/lib/utils'

interface SiteHeaderProps {
  onOpenSearch: () => void
  onOpenMenu: () => void
  className?: string
}

function HeaderSearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="block">
      <circle
        cx="11.5"
        cy="11.5"
        r="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 15l2.5 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeaderMenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="block">
      <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
      <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
      <rect x="6" y="15" width="12" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}

function HeaderNavIconButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="site-header-icon-btn justify-center text-glaz-700 transition-opacity hover:opacity-80"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-text">
        {children}
      </span>
    </button>
  )
}

export function SiteHeader({ onOpenSearch, onOpenMenu, className }: SiteHeaderProps) {
  const headerRef = React.useRef<HTMLElement>(null)
  const scrolled = useScrollThreshold(10, headerRef)

  return (
    <header
      ref={headerRef}
      className={cn(
        'site-header sticky top-0 z-50 box-border flex shrink-0 items-center border-b border-border bg-background px-section',
        scrolled ? 'h-14' : 'h-[72px]',
        className
      )}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Link to="/prototype" className="shrink-0 hover:opacity-80">
            <img
              src={SITE_LOGO.src}
              alt={SITE_LOGO.alt}
              width={scrolled ? SITE_LOGO.widthCollapsedPx : SITE_LOGO.widthExpandedPx}
              className={cn(
                'site-header-logo',
                scrolled ? 'w-24' : 'w-[120px]'
              )}
              draggable={false}
            />
          </Link>

          <div className="flex shrink-0 items-center gap-4">
            <HeaderNavIconButton label="Ouvrir la recherche" onClick={onOpenSearch}>
              <HeaderSearchIcon />
            </HeaderNavIconButton>
            <HeaderNavIconButton label="Ouvrir le menu" onClick={onOpenMenu}>
              <HeaderMenuIcon />
            </HeaderNavIconButton>
          </div>
        </div>

        <div
          className={cn(
            'site-header-tagline mt-[5px] overflow-hidden font-outfit text-[11px] font-normal leading-none text-muted',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-3.5 opacity-100'
          )}
        >
          Bibliothèque numérique patrimoniale de Brest
        </div>
      </div>
    </header>
  )
}
