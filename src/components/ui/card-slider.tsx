import * as React from 'react'

import { getSnapActiveIndex } from '@/lib/carouselScroll'
import { useHorizontalSwipeScroll } from '@/lib/useHorizontalSwipeScroll'
import { cn } from '@/lib/utils'

interface CardSliderProps {
  children: React.ReactNode
  className?: string
  'aria-label'?: string
  onActiveIndexChange?: (index: number) => void
  /** Ref du conteneur scrollable (`.slider`) pour navigation externe. */
  sliderRef?: React.Ref<HTMLDivElement>
}

/** Slider horizontal Yroise — gap 24px · pl 16px · snap · scrollbar masquée. */
function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') ref(node)
      else (ref as React.MutableRefObject<T | null>).current = node
    })
  }
}

export function CardSlider({
  children,
  className,
  'aria-label': ariaLabel,
  onActiveIndexChange,
  sliderRef,
}: CardSliderProps) {
  const { ref, handlers } = useHorizontalSwipeScroll<HTMLDivElement>()
  const activeIndexRef = React.useRef(0)
  const setContainerRef = mergeRefs(ref, sliderRef)

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
      ref={setContainerRef}
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
