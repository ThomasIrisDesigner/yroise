import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface GmbMediaCarouselProps {
  slides: { label: string }[]
  caption: string
  initialIndex?: number
}

/** Carrousel média Drupal — flèches, indicateurs, légende (wireframe GMB). */
export function GmbMediaCarousel({
  slides,
  caption,
  initialIndex = 0,
}: GmbMediaCarouselProps) {
  const [index, setIndex] = React.useState(initialIndex)
  const total = slides.length
  const slide = slides[index]

  function goPrev() {
    setIndex((i) => (i <= 0 ? total - 1 : i - 1))
  }

  function goNext() {
    setIndex((i) => (i >= total - 1 ? 0 : i + 1))
  }

  if (!slide) return null

  return (
    <figure>
      <div className="relative overflow-hidden rounded-md bg-muted">
        <div
          className="flex h-36 w-full items-center justify-center"
          role="img"
          aria-label={slide.label}
        >
          <span className="text-sm italic text-text/40">{slide.label}</span>
        </div>
        {total > 1 ? (
          <>
            <button
              type="button"
              aria-label="Image précédente"
              onClick={goPrev}
              className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Image suivante"
              onClick={goNext}
              className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>
      {total > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
          {slides.map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1 rounded-sm',
                i === index ? 'w-4 bg-secondary' : 'w-1.5 bg-border'
              )}
            />
          ))}
        </div>
      ) : null}
      <figcaption className="mt-2 text-sm italic leading-snug text-text/60">
        {caption}
      </figcaption>
    </figure>
  )
}
