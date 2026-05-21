import * as React from 'react'

import { MobileMenu } from '@/components/features/site/MobileMenu'
import { SearchPanel } from '@/components/features/site/SearchPanel'
import { SiteHeader } from '@/components/features/site/SiteHeader'

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

  React.useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  return (
    <div
      className={
        fillMockup
          ? 'flex min-h-full flex-1 flex-col bg-surface text-text'
          : 'flex min-h-full flex-col bg-surface text-text'
      }
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
