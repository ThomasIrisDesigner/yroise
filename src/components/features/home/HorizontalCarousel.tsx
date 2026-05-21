import * as React from 'react'

import { useHorizontalSwipeScroll } from '@/lib/useHorizontalSwipeScroll'
import { cn } from '@/lib/utils'

interface HorizontalCarouselProps {
  gapPx: number
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

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
        'scrollbar-none flex cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-2 touch-pan-x select-none active:cursor-grabbing',
        className
      )}
      style={{ gap: gapPx, WebkitOverflowScrolling: 'touch' }}
      {...handlers}
    >
      {children}
    </div>
  )
}
