import * as React from 'react'

import { useHorizontalSwipeScroll } from '@/lib/useHorizontalSwipeScroll'
import { cn } from '@/lib/utils'

interface HorizontalCarouselProps {
  gapPx: number
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

/**
 * Carousel horizontal mobile.
 *
 * Important ergonomie :
 *  - `touchAction: 'pan-x pan-y'` permet à l'utilisateur de scroller la page
 *    verticalement même quand son doigt commence sur le carousel — le navigateur
 *    arbitre selon la direction dominante du geste.
 *  - Le drag souris (desktop) est géré dans `useHorizontalSwipeScroll`.
 */
export function HorizontalCarousel({
  gapPx,
  children,
  className,
  'aria-label': ariaLabel,
}: HorizontalCarouselProps) {
  const { ref, handlers } = useHorizontalSwipeScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      className={cn(
        'scrollbar-none flex cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-3 active:cursor-grabbing [&_a]:cursor-pointer [&_a]:touch-manipulation',
        /* Alignement 1re / dernière carte avec la gouttière section (16px) */
        'scroll-pl-section scroll-pr-section [&>*:first-child]:ml-section [&>*:last-child]:mr-section',
        className
      )}
      style={{
        gap: gapPx,
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-x pan-y',
      }}
      {...handlers}
    >
      {children}
    </div>
  )
}
