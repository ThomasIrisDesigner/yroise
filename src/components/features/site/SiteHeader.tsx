import * as React from 'react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import type { SiteHeaderTone } from '@/config/site-header'
import { SITE_HEADER_TONE_CLASSES } from '@/config/site-header'
import { cn } from '@/lib/utils'

export type SiteHeaderVariant = 'expanded' | 'compact'

interface SiteHeaderProps {
  onOpenSearch: () => void
  onOpenMenu: () => void
  onGoHome: () => void
  searchOpen?: boolean
  menuOpen?: boolean
  variant?: SiteHeaderVariant
  tone?: SiteHeaderTone
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
    <img
      src="/images/Icon_recherche.svg"
      alt=""
      aria-hidden
      className="h-6 w-6"
      draggable={false}
    />
  )
}

function HeaderMenuIcon() {
  return (
    <img
      src="/images/Icon_menu.svg"
      alt=""
      aria-hidden
      className="h-6 w-6"
      draggable={false}
    />
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
        active ? 'border-text' : 'border-transparent hover:border-text'
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
  variant = 'expanded',
  tone = 'default',
  className,
}: SiteHeaderProps) {
  const toneClasses = SITE_HEADER_TONE_CLASSES[tone]
  const compact = variant === 'compact'

  return (
    <header
      className={cn(
        'site-header box-border flex shrink-0 items-center border-b px-section',
        tone !== 'default' ? 'border-transparent' : 'border-border',
        toneClasses.header,
        compact ? 'h-14' : 'h-[72px]',
        className
      )}
    >
      <div className="flex w-full items-center justify-between gap-4">
        {compact ? (
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

        <div className="flex shrink-0 items-center gap-2">
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
