import * as React from 'react'

import { MOBILE_MOCKUP_H } from '@/config/wireframe-mobile'
import { MobileMenu } from '@/components/features/site/MobileMenu'
import { SearchPanel } from '@/components/features/site/SearchPanel'
import { SiteHeader } from '@/components/features/site/SiteHeader'
import { cn } from '@/lib/utils'

interface SitePageShellProps {
  children: React.ReactNode
  showFooter?: boolean
  footer?: React.ReactNode
  /** Remplit la hauteur du mockup (pages courtes type carte). */
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

  React.useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  return (
    <div
      className={cn('flex flex-col bg-surface text-text', fillMockup ? 'min-h-[844px]' : 'min-h-full')}
      style={fillMockup ? { minHeight: MOBILE_MOCKUP_H } : undefined}
    >
      <SiteHeader
        onOpenSearch={() => {
          setMenuOpen(false)
          setSearchOpen(true)
        }}
        onOpenMenu={() => {
          setSearchOpen(false)
          setMenuOpen(true)
        }}
      />
      {children}
      {showFooter && footer}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
