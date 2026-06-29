import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { MobileMenu } from '@/components/features/site/MobileMenu'
import { SearchPanel } from '@/components/features/site/SearchPanel'
import { SiteHeader } from '@/components/features/site/SiteHeader'
import { FriseHaut } from '@/components/ui/frise-haut'
import type { SiteHeaderTone } from '@/config/site-header'
import { SITE_HEADER_TONE_CLASSES, resolveSiteHeaderTone } from '@/config/site-header'
import { resetPageScroll } from '@/lib/resetPageScroll'
import { useScrollHeaderPin } from '@/lib/useScrollHeaderPin'
import { cn } from '@/lib/utils'

interface SitePageShellProps {
  children: React.ReactNode
  showFooter?: boolean
  footer?: React.ReactNode
  /** Surcharge le ton header ; par défaut déduit de la route */
  headerTone?: SiteHeaderTone
}

export function SitePageShell({
  children,
  showFooter = false,
  footer,
  headerTone,
}: SitePageShellProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const scrollMainRef = React.useRef<HTMLDivElement>(null)
  const flowChromeRef = React.useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const resolvedHeaderTone =
    headerTone ?? resolveSiteHeaderTone(location.pathname)
  const headerToneClasses = SITE_HEADER_TONE_CLASSES[resolvedHeaderTone]
  const pinCompactHeader = useScrollHeaderPin(scrollMainRef, flowChromeRef)

  const scrollPageToTop = React.useCallback(() => {
    resetPageScroll()
  }, [])

  const goHome = React.useCallback(() => {
    setMenuOpen(false)
    setSearchOpen(false)

    if (location.pathname === '/prototype') {
      scrollPageToTop()
      return
    }

    navigate('/prototype')
    window.setTimeout(scrollPageToTop, 0)
  }, [location.pathname, navigate, scrollPageToTop])

  const openSearch = React.useCallback(() => {
    setMenuOpen(false)
    setSearchOpen(true)
  }, [])

  const openMenu = React.useCallback(() => {
    setSearchOpen(false)
    setMenuOpen(true)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  const headerProps = {
    searchOpen,
    menuOpen,
    tone: resolvedHeaderTone,
    onGoHome: goHome,
    onOpenSearch: openSearch,
    onOpenMenu: openMenu,
  }

  return (
    <div className="site-page-shell relative flex min-h-0 flex-1 flex-col bg-surface text-text">
      <div
        ref={scrollMainRef}
        className="site-scroll-main flex min-h-0 flex-1 flex-col"
      >
        <div
          ref={flowChromeRef}
          className="site-top-chrome site-top-chrome--flow shrink-0"
        >
          <SiteHeader variant="expanded" {...headerProps} />
          <div className="relative z-10 -mb-2 bg-transparent">
            <FriseHaut
              fill={headerToneClasses.friseFill}
              className="block w-full"
            />
          </div>
        </div>

        {children}
        {showFooter && footer}
      </div>

      <div
        className={cn(
          'site-top-chrome site-top-chrome--pinned',
          pinCompactHeader && 'site-top-chrome--pinned-visible'
        )}
        aria-hidden={!pinCompactHeader}
      >
        <SiteHeader variant="compact" {...headerProps} />
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
