import * as React from 'react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import { PageContainer } from '@/components/features/site/PageContainer'
import { SiteHeaderDesktopNav } from '@/components/features/site/SiteHeaderDesktopNav'
import { SiteHeaderLangSwitcher } from '@/components/features/site/SiteHeaderLangSwitcher'
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
      src="/images/Icon_search.svg"
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
        'site-header page-full-bleed box-border flex shrink-0 items-center border-b',
        tone !== 'default' ? 'border-transparent' : 'border-border',
        toneClasses.header,
        compact ? 'h-14' : 'h-[72px]',
        className
      )}
    >
      <PageContainer
        variant="header"
        className={cn(
          'site-header-inner relative flex h-full items-center',
          compact ? 'h-14' : 'h-[72px]'
        )}
      >
        <div className="site-header-bar flex w-full items-center justify-between gap-4">
          {compact ? (
            <HeaderLogoLink
              onGoHome={onGoHome}
              className="site-header-brand flex h-10 shrink-0 items-center hover:opacity-80"
              width={SITE_LOGO.widthCollapsedPx}
              logoClassName="site-header-logo block w-24"
            />
          ) : (
            <div className="site-header-brand flex min-w-0 flex-col gap-1.5">
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

          <SiteHeaderDesktopNav />

          <div className="site-header-actions flex shrink-0 items-center gap-4">
            <div className="prototype-mobile-only flex items-center gap-2">
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

            <div className="prototype-desktop-only items-center gap-4">
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Rechercher"
                aria-expanded={searchOpen}
                className="site-header-search-pill box-border flex h-10 shrink-0 items-center gap-2 rounded-full border-[1.5px] border-solid border-text px-3 font-outfit text-base font-medium tracking-[1px] text-text transition-colors hover:border-glaz-700"
              >
                <HeaderSearchIcon />
                <span className="site-header-search-label">Rechercher</span>
              </button>
              <SiteHeaderLangSwitcher />
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  )
}
