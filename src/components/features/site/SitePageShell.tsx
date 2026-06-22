import * as React from 'react'

import { MobileMenu } from '@/components/features/site/MobileMenu'
import { SearchPanel } from '@/components/features/site/SearchPanel'
import { SiteHeader } from '@/components/features/site/SiteHeader'
import { FriseHaut } from '@/components/ui/frise-haut'
import { cn } from '@/lib/utils'

interface SitePageShellProps {
  children: React.ReactNode
  showFooter?: boolean
  footer?: React.ReactNode
  /** Remplit la hauteur disponible (pages courtes type carte). */
  fillMockup?: boolean
}

export function SitePageShell({
  children,
  showFooter = false,
  footer,
  fillMockup = false,
}: SitePageShellProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const scrollMainRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  return (
    <div
      className={cn(
        'site-page-shell flex min-h-full flex-col bg-surface text-text',
        fillMockup && 'flex-1'
      )}
    >
      <div className="site-top-chrome shrink-0">
        <SiteHeader
          scrollContainerRef={scrollMainRef}
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

      <div
        ref={scrollMainRef}
        className={cn('site-scroll-main', fillMockup && 'flex min-h-0 flex-1 flex-col')}
      >
        {children}
        {showFooter && footer}
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
