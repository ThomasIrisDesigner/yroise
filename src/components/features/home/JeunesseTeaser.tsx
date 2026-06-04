import { Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { typography } from '@/styles/typography'

/** Bloc Jeunesse — fond discret, wireframe v2 home. */
export function JeunesseTeaser() {
  return (
    <Link
      to="/jeunesse"
      className="block border-t border-border bg-surface/60 px-5 py-5 transition-colors hover:bg-surface/80"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-aurore-700">
            <Puzzle className="h-5 w-5 text-surface" strokeWidth={2} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className={typography.sectionLabel}>Jeunesse</p>
            <p className="mt-0.5 text-sm leading-snug text-text/70">
              Jeux et ateliers pour découvrir le patrimoine.
            </p>
          </div>
        </div>
        <span className="shrink-0 text-sm font-semibold text-aurore-700">Découvrir →</span>
      </div>
    </Link>
  )
}
