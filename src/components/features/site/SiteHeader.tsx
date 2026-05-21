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
        'sticky top-0 z-20 flex items-center justify-between border-b border-border bg-surface px-4 py-2',
        className
      )}
    >
      <Link
        to="/prototype"
        className="text-sm font-extrabold tracking-wider text-secondary hover:opacity-80"
      >
        YROISE
      </Link>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Ouvrir la recherche"
          onClick={onOpenSearch}
          className="inline-flex h-8 w-8 items-center justify-center text-text transition-colors hover:text-secondary"
        >
          <Search className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={onOpenMenu}
          className="inline-flex h-8 w-8 flex-col items-center justify-center gap-1 text-text"
        >
          <span className="h-0.5 w-3.5 rounded-full bg-current" />
          <span className="h-0.5 w-3.5 rounded-full bg-current" />
          <span className="h-0.5 w-3.5 rounded-full bg-current" />
        </button>
      </div>
    </header>
  )
}
