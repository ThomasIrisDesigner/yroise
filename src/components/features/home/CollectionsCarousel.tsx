import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { COLLECTIONS } from '@/data/collections'
import { useSwipeNavigation } from '@/lib/useSwipeNavigation'
import { typography } from '@/styles/typography'

function NavArrow({ direction, active }: { direction: 'left' | 'right'; active: boolean }) {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      aria-hidden
      style={{ opacity: active ? 1 : 0.25 }}
      className="shrink-0"
    >
      {direction === 'right' ? (
        <polygon points="0,0 0,24 20,12" fill="rgb(var(--glaz-700))" />
      ) : (
        <polygon points="20,0 20,24 0,12" fill="rgb(var(--glaz-700))" />
      )}
    </svg>
  )
}

export function CollectionsCarousel() {
  const [current, setCurrent] = useState(0)
  const total = COLLECTIONS.length

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  )
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const swipeHandlers = useSwipeNavigation(prev, next)

  const counter = `${String(current + 1).padStart(2, '0')} – ${String(total).padStart(2, '0')}`
  const collection = COLLECTIONS[current]!

  return (
    <section className="bg-glaz-100 pt-10 pb-10">
      {/* En-tête centré */}
      <div className="flex flex-col items-center gap-0 px-section">
        <h2 className={typography.sectionLabel}>Collections</h2>
        <p className="mt-1 font-outfit text-[14px] font-normal leading-[1.55] text-text">
          {counter}
        </p>
      </div>

      {/* Hublot + navigation — swipe horizontal sur la zone (hors boutons) */}
      <div
        className="mt-4 flex touch-pan-y items-center justify-center gap-8 px-section"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest('button')) return
          swipeHandlers.onPointerDown(e)
        }}
        onPointerUp={swipeHandlers.onPointerUp}
        onPointerCancel={swipeHandlers.onPointerCancel}
      >
        <button
          onClick={prev}
          aria-label="Collection précédente"
          className="flex h-12 w-12 items-center justify-center"
          disabled={false}
        >
          <NavArrow direction="left" active={current > 0} />
        </button>

        {/* Hublot — 198×198 total, ouverture intérieure 180×180 (bordure 9px) */}
        <div className="hublot-frame relative size-[198px] shrink-0 overflow-hidden rounded-full border-[9px] border-text bg-surface">
          {COLLECTIONS.map((col, i) =>
            col.hublotImageSrc ? (
              <img
                key={col.slug}
                src={col.hublotImageSrc}
                alt={col.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                style={{ opacity: i === current ? 1 : 0 }}
                aria-hidden={i !== current}
                draggable={false}
              />
            ) : (
              <div
                key={col.slug}
                className="absolute inset-0 bg-surface transition-opacity duration-500"
                style={{ opacity: i === current ? 1 : 0 }}
                aria-hidden={i !== current}
              />
            )
          )}
        </div>

        <button
          onClick={next}
          aria-label="Collection suivante"
          className="flex h-12 w-12 items-center justify-center"
        >
          <NavArrow direction="right" active={current < total - 1} />
        </button>
      </div>

      {/* Label collection — transition via opacity */}
      <div className="mt-4 px-section text-center">
        <p className="font-outfit text-[22px] font-semibold text-text">{collection.name}</p>
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center px-section">
        <Button asChild variant="primary">
          <Link to="/collections">Découvrir toutes les collections</Link>
        </Button>
      </div>
    </section>
  )
}
