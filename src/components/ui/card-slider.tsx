import * as React from 'react'

import { useHorizontalSwipeScroll } from '@/lib/useHorizontalSwipeScroll'
import { cn } from '@/lib/utils'

interface CardSliderProps {
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

/** Slider horizontal Yroise — gap 12px · pl 16px · snap · scrollbar masquée. */
export function CardSlider({
  children,
  className,
  'aria-label': ariaLabel,
}: CardSliderProps) {
  const { ref, handlers } = useHorizontalSwipeScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      className={cn(
        'slider scrollbar-none flex items-start snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain',
        'cursor-grab active:cursor-grabbing [&_a]:touch-manipulation',
        className
      )}
      style={{
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-x pan-y',
      }}
      {...handlers}
    >
      {children}
    </div>
  )
}
