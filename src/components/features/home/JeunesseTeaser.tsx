import { Link } from 'react-router-dom'

import { LOREM } from '@/data/placeholders'
import { typography } from '@/styles/typography'

/** Bloc discret en bas de home (arborescence v2). */
export function JeunesseTeaser() {
  return (
    <section className="border-t border-border px-4 py-5">
      <p className={typography.sectionLabel}>Jeunesse</p>
      <p className="mt-2 text-sm text-text/70">{LOREM.line}</p>
      <Link
        to="/jeunesse"
        className="mt-3 inline-block text-xs font-semibold text-secondary hover:underline"
      >
        Jeux et parcours pédagogiques →
      </Link>
    </section>
  )
}
