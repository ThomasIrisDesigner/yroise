import * as React from 'react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import { PageContainer } from '@/components/features/site/PageContainer'
import { SiteHeaderDesktopNav } from '@/components/features/site/SiteHeaderDesktopNav'
import { SiteHeaderLangSwitcher } from '@/components/features/site/SiteHeaderLangSwitcher'
import type { SiteHeaderTone } from '@/config/site-header'
import { SITE_HEADER_TONE_CLASSES } from '@/config/site-header'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

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
  height,
  logoClassName,
}: {
  onGoHome: () => void
  className?: string
  width: number
  height?: number
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
        height={height}
        className={logoClassName}
        draggable={false}
      />
    </Link>
  )
}

function HeaderSearchIcon() {
  return (
    <img
      src="/images/Icon_recherche_header.svg"
      alt=""
      aria-hidden
      width={24}
      height={24}
      className="block h-6 w-6"
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
      width={24}
      height={24}
      className="block h-6 w-6"
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
        'site-header page-full-bleed box-border flex shrink-0 items-center',
        toneClasses.header,
        compact ? 'h-14' : 'h-[var(--header-height-expanded)]',
        className
      )}
    >
      <PageContainer
        variant="header"
        className={cn(
          'site-header-inner relative flex h-full items-center',
          compact ? 'h-14' : 'h-[var(--header-height-expanded)]'
        )}
      >
        <div className="site-header-bar flex w-full items-center justify-between gap-[5px]">
          {compact ? (
            <HeaderLogoLink
              onGoHome={onGoHome}
              className="site-header-brand flex h-10 shrink-0 items-center hover:opacity-80"
              width={SITE_LOGO.widthCollapsedPx}
              logoClassName="site-header-logo site-header-logo--collapsed block"
            />
          ) : (
            <div className="site-header-brand flex min-w-0 flex-1 flex-col gap-1.5">
              <HeaderLogoLink
                onGoHome={onGoHome}
                className="shrink-0 hover:opacity-80"
                width={SITE_LOGO.widthExpandedPx}
                height={SITE_LOGO.heightExpandedPx}
                logoClassName="site-header-logo block"
              />

              <div className={cn('site-header-tagline', typography.uiXs)}>
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
                className="site-header-search-btn group flex h-10 shrink-0 cursor-pointer items-center gap-2 text-text"
              >
                <HeaderSearchIcon />
                {/* Visible ≥1281px — Figma 158:8429 */}
                <span className="site-header-search-label font-outfit text-base font-normal tracking-[0.32px] text-muted transition-colors duration-150 group-hover:text-text">
                  Rechercher
                </span>
              </button>
              <div
                className="site-header-actions-separator h-6 w-px shrink-0 bg-text/10"
                aria-hidden
              />
              <SiteHeaderLangSwitcher />
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  )
}
