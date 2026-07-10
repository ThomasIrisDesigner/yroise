import * as React from 'react'

import {
  getSnapActiveIndex,
  scrollCarouselToIndex,
  watchCarouselScrollEnd,
} from '@/lib/carouselScroll'

/** Contrôle prev/next d’un CardSlider via ref du conteneur `.slider`. */
export function useCarouselScrollControl(itemCount: number) {
  const sliderRef = React.useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeIndexRef = React.useRef(0)

  const syncActiveIndex = React.useCallback(() => {
    const container = sliderRef.current
    if (!container) return

    const nextIndex = getSnapActiveIndex(container)
    if (nextIndex === activeIndexRef.current) return
    activeIndexRef.current = nextIndex
    setActiveIndex(nextIndex)
  }, [])

  const goToIndex = React.useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(itemCount - 1, index))
      activeIndexRef.current = clamped
      setActiveIndex(clamped)

      const container = sliderRef.current
      if (!container) return

      scrollCarouselToIndex(container, clamped)
      watchCarouselScrollEnd(container, syncActiveIndex)
    },
    [itemCount, syncActiveIndex]
  )

  const prev = React.useCallback(() => {
    goToIndex(activeIndexRef.current - 1)
  }, [goToIndex])

  const next = React.useCallback(() => {
    goToIndex(activeIndexRef.current + 1)
  }, [goToIndex])

  const handleActiveIndexChange = React.useCallback((index: number) => {
    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  return {
    sliderRef,
    activeIndex,
    onActiveIndexChange: handleActiveIndexChange,
    prev,
    next,
    canPrev: activeIndex > 0,
    canNext: activeIndex < itemCount - 1,
    counter: `${String(activeIndex + 1).padStart(2, '0')} - ${String(itemCount).padStart(2, '0')}`,
  }
}
