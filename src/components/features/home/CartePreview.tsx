import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { HOME_CARTE } from '@/data/home'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

const MAP_PINS = [
  { left: '28%', top: '38%' },
  { left: '58%', top: '52%' },
  { left: '42%', top: '22%' },
  { left: '75%', top: '62%' },
  { left: '55%', top: '78%' },
] as const

export function CartePreview() {
  return (
    <section className="border-t border-border px-4 pt-6">
      <h2 className={typography.sectionLabel}>📍 La carte</h2>
      <p className={cn('mt-2', typography.editorialLead)}>{HOME_CARTE.titre}</p>
      <p className="mt-2 text-sm leading-relaxed text-text/80">{HOME_CARTE.chapeau}</p>
      <p className="mt-3 flex items-center gap-2 text-xs font-medium text-secondary">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        {HOME_CARTE.indicateur}
      </p>
      <div className="relative mt-3 flex h-24 w-full items-center justify-center rounded border border-border bg-muted/80">
        <span className="text-xs italic text-text/40">Carte OSM — Brest</span>
        {MAP_PINS.map((pin, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rotate-45 rounded-sm bg-secondary ring-2 ring-surface"
            style={{ left: pin.left, top: pin.top }}
            aria-hidden
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="text-xs italic text-text/50">{HOME_CARTE.note}</p>
        <Link to="/carte" className="shrink-0 text-xs font-semibold text-secondary">
          {HOME_CARTE.ctaLabel} →
        </Link>
      </div>
    </section>
  )
}
