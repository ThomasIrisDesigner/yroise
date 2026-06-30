import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

import { gmbMediaAspectClass } from './gmb-shared'
import { GmbFigureLegend } from './GmbFigureLegend'

interface GmbMediaCarouselProps {
  slides: { label: string }[]
  caption: string
  meta?: string
  linkLabel?: string
  linkHref?: string
  initialIndex?: number
}

/** Carrousel média Drupal — flèches, indicateurs, légende GMB. */
export function GmbMediaCarousel({
  slides,
  caption,
  meta,
  linkLabel,
  linkHref,
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
    <figure className="flex flex-col gap-2">
      <div className={cn(gmbMediaAspectClass, 'bg-surface')}>
        <div
          className="flex h-full w-full items-center justify-center"
          role="img"
          aria-label={slide.label}
        >
          <span className={typography.editorialCaption}>{slide.label}</span>
        </div>
        {total > 1 ? (
          <>
            <button
              type="button"
              aria-label="Image précédente"
              onClick={goPrev}
              className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-text shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Image suivante"
              onClick={goNext}
              className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-text shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>
      {total > 1 ? (
        <div className="flex justify-center gap-1.5" aria-hidden>
          {slides.map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1 rounded-sm',
                i === index ? 'w-4 bg-glaz-700' : 'w-1.5 bg-border'
              )}
            />
          ))}
        </div>
      ) : null}
      <GmbFigureLegend
        caption={caption}
        meta={meta}
        linkLabel={linkLabel}
        linkHref={linkHref}
      />
    </figure>
  )
}
