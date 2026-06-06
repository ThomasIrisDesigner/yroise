import { Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

/** Bloc Jeunesse — fond discret, wireframe v2 home. */
export function JeunesseTeaser() {
  return (
    <section className="border-t border-border bg-surface/60 px-section py-4 transition-colors hover:bg-surface/80">
      <div className="flex items-center justify-between gap-4">
        <Link to="/jeunesse" className="flex min-w-0 flex-1 items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-aurore-700">
            <Puzzle className="h-5 w-5 text-surface" strokeWidth={2} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className={typography.sectionLabel}>Jeunesse</p>
            <p className="mt-0.5 text-sm leading-snug text-text/70">
              Jeux et ateliers pour découvrir le patrimoine.
            </p>
          </div>
        </Link>
        <Button asChild variant="ghost" size="sm" className="shrink-0">
          <Link to="/jeunesse">Découvrir</Link>
        </Button>
      </div>
    </section>
  )
}
