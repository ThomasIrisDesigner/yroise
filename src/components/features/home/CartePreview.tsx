import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { HOME_CARTE } from '@/data/home'
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
    <section className="border-t border-border px-5 pt-10 pb-10">
      <h2 className={typography.sectionLabel}>📍 La carte</h2>
      <p className={`mt-4 ${typography.editorialLead}`}>{HOME_CARTE.titre}</p>
      <p className={`mt-3 ${typography.bodyMuted}`}>{HOME_CARTE.chapeau}</p>
      <p className="mt-4 flex items-center gap-2 text-sm font-medium text-secondary">
        <MapPin className="h-4 w-4 shrink-0" />
        {HOME_CARTE.indicateur}
      </p>
      <div className="relative mt-5 flex h-32 w-full items-center justify-center rounded-md border border-border bg-muted/80">
        <span className="text-sm italic text-text/40">Carte OSM — Brest</span>
        {MAP_PINS.map((pin, i) => (
          <span
            key={i}
            className="absolute h-2.5 w-2.5 rotate-45 rounded-sm bg-secondary ring-2 ring-surface"
            style={{ left: pin.left, top: pin.top }}
            aria-hidden
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm italic text-text/50">{HOME_CARTE.note}</p>
        <Link
          to="/carte"
          className="inline-flex h-11 shrink-0 items-center text-sm font-semibold text-secondary"
        >
          {HOME_CARTE.ctaLabel} →
        </Link>
      </div>
    </section>
  )
}
