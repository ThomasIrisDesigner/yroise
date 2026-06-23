import * as React from 'react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import { useScrollThreshold } from '@/lib/useScrollThreshold'
import { cn } from '@/lib/utils'

interface SiteHeaderProps {
  onOpenSearch: () => void
  onOpenMenu: () => void
  onGoHome: () => void
  searchOpen?: boolean
  menuOpen?: boolean
  scrollContainerRef?: React.RefObject<HTMLElement | null>
  className?: string
}

function HeaderLogoLink({
  onGoHome,
  className,
  width,
  logoClassName,
}: {
  onGoHome: () => void
  className?: string
  width: number
  logoClassName: string
}) {
  return (
    <Link
      to="/prototype"
      aria-label="Retour à l'accueil"
      onClick={(e) => {
        e.preventDefault()
        onGoHome()
      }}
      className={className}
    >
      <img
        src={SITE_LOGO.src}
        alt={SITE_LOGO.alt}
        width={width}
        className={logoClassName}
        draggable={false}
      />
    </Link>
  )
}

function HeaderSearchIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className="block h-full w-full">
      <circle
        cx="19"
        cy="19.5"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M25 24l5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeaderMenuIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className="block h-full w-full">
      <line
        x1="12"
        y1="14"
        x2="29"
        y2="14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="20"
        x2="29"
        y2="20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="26"
        x2="29"
        y2="26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeaderNavIconButton({
  label,
  onClick,
  active = false,
  children,
}: {
  label: string
  onClick: () => void
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={active}
      onClick={onClick}
      className={cn(
        'site-header-icon-btn box-border h-10 w-10 shrink-0 rounded-full border-[2.5px] border-solid text-text transition-colors duration-150',
        active ? 'border-text' : 'border-transparent'
      )}
    >
      {children}
    </button>
  )
}

export function SiteHeader({
  onOpenSearch,
  onOpenMenu,
  onGoHome,
  searchOpen = false,
  menuOpen = false,
  scrollContainerRef,
  className,
}: SiteHeaderProps) {
  const headerRef = React.useRef<HTMLElement>(null)
  const scrolled = useScrollThreshold(10, headerRef, scrollContainerRef)

  return (
    <header
      ref={headerRef}
      className={cn(
        'site-header box-border flex shrink-0 items-center border-b border-border bg-background px-section',
        scrolled ? 'h-14' : 'h-[72px]',
        className
      )}
    >
      <div className="flex w-full items-center justify-between gap-4">
        {scrolled ? (
          <HeaderLogoLink
            onGoHome={onGoHome}
            className="flex h-10 shrink-0 items-center hover:opacity-80"
            width={SITE_LOGO.widthCollapsedPx}
            logoClassName="site-header-logo block w-24"
          />
        ) : (
          <div className="flex min-w-0 flex-col gap-1.5">
            <HeaderLogoLink
              onGoHome={onGoHome}
              className="shrink-0 hover:opacity-80"
              width={SITE_LOGO.widthExpandedPx}
              logoClassName="site-header-logo block w-[120px]"
            />

            <div className="site-header-tagline max-h-3.5 overflow-hidden font-outfit text-[11px] font-normal leading-none text-muted opacity-100">
              Bibliothèque numérique patrimoniale de Brest
            </div>
          </div>
        )}

        <div className="flex shrink-0 items-center gap-4">
          <HeaderNavIconButton
            label="Ouvrir la recherche"
            onClick={onOpenSearch}
            active={searchOpen}
          >
            <HeaderSearchIcon />
          </HeaderNavIconButton>
          <HeaderNavIconButton label="Ouvrir le menu" onClick={onOpenMenu} active={menuOpen}>
            <HeaderMenuIcon />
          </HeaderNavIconButton>
        </div>
      </div>
    </header>
  )
}
