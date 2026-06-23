import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { MobileMenu } from '@/components/features/site/MobileMenu'
import { SearchPanel } from '@/components/features/site/SearchPanel'
import { SiteHeader } from '@/components/features/site/SiteHeader'
import { FriseHaut } from '@/components/ui/frise-haut'

interface SitePageShellProps {
  children: React.ReactNode
  showFooter?: boolean
  footer?: React.ReactNode
}

export function SitePageShell({
  children,
  showFooter = false,
  footer,
}: SitePageShellProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const scrollMainRef = React.useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollPageToTop = React.useCallback(() => {
    scrollMainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    document
      .querySelector<HTMLElement>('.site-outer-scroll')
      ?.scrollTo({ top: 0, behavior: 'smooth' })
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
    <div className="site-page-shell flex min-h-0 flex-1 flex-col bg-surface text-text">
      <div className="site-top-chrome shrink-0">
        <SiteHeader
          scrollContainerRef={scrollMainRef}
          searchOpen={searchOpen}
          menuOpen={menuOpen}
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
        <div className="relative z-10 -mb-2">
          <FriseHaut className="block w-full" />
        </div>
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
