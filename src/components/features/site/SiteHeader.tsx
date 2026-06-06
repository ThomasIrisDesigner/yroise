import * as React from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import { useScrollThreshold } from '@/lib/useScrollThreshold'
import { cn } from '@/lib/utils'

interface SiteHeaderProps {
  onOpenSearch: () => void
  onOpenMenu: () => void
  className?: string
}

export function SiteHeader({ onOpenSearch, onOpenMenu, className }: SiteHeaderProps) {
  const headerRef = React.useRef<HTMLElement>(null)
  const scrolled = useScrollThreshold(10, headerRef)

  return (
    <header
      ref={headerRef}
      className={cn(
        'site-header sticky top-0 z-50 box-border flex shrink-0 items-center border-b border-border bg-background px-section',
        scrolled ? 'h-14' : 'h-[72px]',
        className
      )}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Link to="/prototype" className="shrink-0 hover:opacity-80">
            <img
              src={SITE_LOGO.src}
              alt={SITE_LOGO.alt}
              width={scrolled ? SITE_LOGO.widthCollapsedPx : SITE_LOGO.widthExpandedPx}
              className={cn(
                'site-header-logo',
                scrolled ? 'w-24' : 'w-[120px]'
              )}
              draggable={false}
            />
          </Link>

          <div className="flex shrink-0 items-center gap-[18px]">
            <button
              type="button"
              aria-label="Ouvrir la recherche"
              onClick={onOpenSearch}
              className="site-header-icon-btn justify-center text-text transition-colors hover:text-glaz-700"
            >
              <Search className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={onOpenMenu}
              className="site-header-icon-btn flex-col justify-center gap-1.5 text-text"
            >
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            'site-header-tagline mt-[5px] overflow-hidden font-outfit text-[11px] font-normal leading-none text-muted',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-3.5 opacity-100'
          )}
        >
          Bibliothèque numérique patrimoniale de Brest
        </div>
      </div>
    </header>
  )
}
