import * as React from 'react'

import { useHorizontalSwipeScroll } from '@/lib/useHorizontalSwipeScroll'
import { cn } from '@/lib/utils'

interface CardSliderProps {
  children: React.ReactNode
  className?: string
  'aria-label'?: string
  onActiveIndexChange?: (index: number) => void
}

function getSnapActiveIndex(container: HTMLElement): number {
  const items = container.querySelectorAll<HTMLElement>('.card-slider-item')
  if (!items.length) return 0

  const scrollLeft = container.scrollLeft
  let closest = 0
  let minDistance = Number.POSITIVE_INFINITY

  items.forEach((item, index) => {
    const distance = Math.abs(item.offsetLeft - scrollLeft)
    if (distance < minDistance) {
      minDistance = distance
      closest = index
    }
  })

  return closest
}

/** Slider horizontal Yroise — gap 24px · pl 16px · snap · scrollbar masquée. */
export function CardSlider({
  children,
  className,
  'aria-label': ariaLabel,
  onActiveIndexChange,
}: CardSliderProps) {
  const { ref, handlers } = useHorizontalSwipeScroll<HTMLDivElement>()
  const activeIndexRef = React.useRef(0)

  React.useEffect(() => {
    const container = ref.current
    if (!container || !onActiveIndexChange) return

    const syncActiveIndex = () => {
      const nextIndex = getSnapActiveIndex(container)
      if (nextIndex === activeIndexRef.current) return
      activeIndexRef.current = nextIndex
      onActiveIndexChange(nextIndex)
    }

    syncActiveIndex()
    container.addEventListener('scroll', syncActiveIndex, { passive: true })
    window.addEventListener('resize', syncActiveIndex)

    return () => {
      container.removeEventListener('scroll', syncActiveIndex)
      window.removeEventListener('resize', syncActiveIndex)
    }
  }, [onActiveIndexChange, ref])

  return (
    <div
      ref={ref}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      className={cn(
        'slider scrollbar-none flex items-start snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain',
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
