import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { MobileMenu } from '@/components/features/site/MobileMenu'
import { SearchPanel } from '@/components/features/site/SearchPanel'
import { SiteHeader } from '@/components/features/site/SiteHeader'
import { FriseHaut } from '@/components/ui/frise-haut'
import type { SiteHeaderTone } from '@/config/site-header'
import {
  SITE_HEADER_TONE_CLASSES,
  resolveSiteFrisePlacement,
  resolveSiteHeaderTone,
} from '@/config/site-header'
import { resetPageScroll } from '@/lib/resetPageScroll'

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
  const navigate = useNavigate()
  const location = useLocation()
  const resolvedHeaderTone =
    headerTone ?? resolveSiteHeaderTone(location.pathname)
  const headerToneClasses = SITE_HEADER_TONE_CLASSES[resolvedHeaderTone]
  const frisePlacement = resolveSiteFrisePlacement(location.pathname)
  const showChromeFrise = frisePlacement === 'chrome'

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

  React.useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  return (
    <div className="site-page-shell relative flex min-h-0 flex-1 flex-col bg-surface text-text">
      <div className="site-top-chrome shrink-0">
        <SiteHeader
          scrollContainerRef={scrollMainRef}
          searchOpen={searchOpen}
          menuOpen={menuOpen}
          tone={resolvedHeaderTone}
          onGoHome={goHome}
          onOpenSearch={() => {
            setMenuOpen(false)
            setSearchOpen(true)
          }}
          onOpenMenu={() => {
            setSearchOpen(false)
            setMenuOpen(true)
          }}
        />
        {showChromeFrise ? (
          <div className="relative z-10 -mb-2">
            <FriseHaut
              fill={headerToneClasses.friseFill}
              className="block w-full"
            />
          </div>
        ) : null}
      </div>

      <div ref={scrollMainRef} className="site-scroll-main flex min-h-0 flex-1 flex-col">
        {children}
        {showFooter && footer}
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
