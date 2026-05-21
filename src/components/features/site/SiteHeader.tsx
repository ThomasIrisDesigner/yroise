import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface SiteHeaderProps {
  onOpenSearch: () => void
  onOpenMenu: () => void
  className?: string
}

export function SiteHeader({ onOpenSearch, onOpenMenu, className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-surface px-5',
        className
      )}
    >
      <Link
        to="/prototype"
        className="inline-flex h-11 items-center text-base font-extrabold tracking-wider text-secondary hover:opacity-80"
      >
        YROISE
      </Link>
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Ouvrir la recherche"
          onClick={onOpenSearch}
          className="inline-flex h-11 w-11 items-center justify-center text-text transition-colors hover:text-secondary"
        >
          <Search className="h-6 w-6" strokeWidth={2} />
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
