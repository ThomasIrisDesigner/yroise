import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SITE_LOGO } from '@/config/assets'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface SiteHeaderProps {
  onOpenSearch: () => void
  onOpenMenu: () => void
  className?: string
}

export function SiteHeader({ onOpenSearch, onOpenMenu, className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 flex shrink-0 items-center border-b border-border bg-surface px-5 py-2',
        className
      )}
    >
      <div className="flex w-full items-start justify-between gap-3">
        <Link
          to="/prototype"
          className="flex min-w-0 flex-col gap-1 hover:opacity-80"
        >
          <span className="flex h-11 items-center">
            <img
              src={SITE_LOGO.src}
              alt={SITE_LOGO.alt}
              width={SITE_LOGO.widthPx}
              className="block h-auto w-[96px]"
            />
          </span>
          <span className={typography.institutionalSubtitle}>
            Bibliothèque numérique patrimoniale de Brest
          </span>
        </Link>
        <div className="flex h-11 shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="Ouvrir la recherche"
            onClick={onOpenSearch}
            className="inline-flex h-11 w-11 items-center justify-center text-text transition-colors hover:text-glaz-700"
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
      </div>
    </header>
  )
}
