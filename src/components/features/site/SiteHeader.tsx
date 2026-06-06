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
        'site-header sticky top-0 z-50 box-border flex shrink-0 items-center justify-between border-b border-border bg-background px-section',
        scrolled ? 'min-h-14' : 'min-h-[72px]',
        className
      )}
    >
      <Link
        to="/prototype"
        className="flex min-w-0 flex-col gap-0.5 hover:opacity-80"
      >
        <img
          src={SITE_LOGO.src}
          alt={SITE_LOGO.alt}
          width={SITE_LOGO.widthPx}
          className="block h-auto w-[96px]"
          draggable={false}
        />
        <span
          className={cn(
            'site-header-tagline block overflow-hidden font-outfit text-[9.5px] font-normal leading-none text-muted',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-3.5 opacity-100'
          )}
        >
          Bibliothèque numérique patrimoniale de Brest
        </span>
      </Link>

      <div className="flex shrink-0 items-center gap-[18px]">
        <button
          type="button"
          aria-label="Ouvrir la recherche"
          onClick={onOpenSearch}
          className="inline-flex h-11 w-11 items-center justify-center text-text transition-colors hover:text-glaz-700"
        >
          <Search className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={onOpenMenu}
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-text"
        >
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
        </button>
      </div>
    </header>
  )
}
