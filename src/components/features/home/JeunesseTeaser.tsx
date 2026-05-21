import { Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { typography } from '@/styles/typography'

/** Bloc Jeunesse — fond discret, wireframe v2 home. */
export function JeunesseTeaser() {
  return (
    <Link
      to="/jeunesse"
      className="block border-t border-border bg-muted/60 px-4 py-3 transition-colors hover:bg-muted/80"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary">
            <Puzzle className="h-3.5 w-3.5 text-surface" strokeWidth={2} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className={typography.sectionLabel}>Jeunesse</p>
            <p className="text-[11px] leading-snug text-text/70">
              Jeux et ateliers pour découvrir le patrimoine.
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs font-semibold text-secondary">Découvrir →</span>
      </div>
    </Link>
  )
}
