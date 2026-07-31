import * as React from 'react'

import {
  getCarouselItemsPerPage,
  getCarouselPageCount,
  getCarouselPageFromScroll,
  getSnapActiveIndex,
  scrollCarouselToIndex,
  scrollCarouselToPage,
  watchCarouselScrollEnd,
} from '@/lib/carouselScroll'

export type CarouselPaginationMode = 'item' | 'page'

interface UseCarouselScrollControlOptions {
  /**
   * `item` — une flèche = une card (défaut).
   * `page` — une flèche = une « vue » (~cards visibles) ; compteur = pages.
   */
  mode?: CarouselPaginationMode
}

/** Contrôle prev/next d’un CardSlider via ref du conteneur `.slider`. */
export function useCarouselScrollControl(
  itemCount: number,
  options: UseCarouselScrollControlOptions = {}
) {
  const mode = options.mode ?? 'item'
  const sliderRef = React.useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeIndexRef = React.useRef(0)
  const [pageCount, setPageCount] = React.useState(1)
  const pageCountRef = React.useRef(1)
  /** Ignore le sync mid-animation pendant un scroll déclenché par les flèches. */
  const isProgrammaticScrollRef = React.useRef(false)
  const programmaticTokenRef = React.useRef(0)

  const measurePages = React.useCallback(() => {
    if (mode !== 'page') {
      pageCountRef.current = Math.max(1, itemCount)
      setPageCount(Math.max(1, itemCount))
      return
    }

    const container = sliderRef.current
    if (!container || container.clientWidth <= 0) return

    const pages = getCarouselPageCount(
      itemCount,
      getCarouselItemsPerPage(container)
    )
    pageCountRef.current = pages
    setPageCount(pages)
  }, [itemCount, mode])

  const syncFromScroll = React.useCallback(() => {
    if (isProgrammaticScrollRef.current) return

    const container = sliderRef.current
    if (!container) return

    if (mode === 'page') {
      measurePages()
      const page = getCarouselPageFromScroll(container, itemCount)
      if (page === activeIndexRef.current) return
      activeIndexRef.current = page
      setActiveIndex(page)
      return
    }

    const itemIndex = getSnapActiveIndex(container)
    if (itemIndex === activeIndexRef.current) return
    activeIndexRef.current = itemIndex
    setActiveIndex(itemIndex)
  }, [itemCount, measurePages, mode])

  React.useEffect(() => {
    measurePages()

    const container = sliderRef.current
    if (!container || mode !== 'page') return

    const observer = new ResizeObserver(() => {
      measurePages()
      syncFromScroll()
    })
    observer.observe(container)
    window.addEventListener('resize', measurePages)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measurePages)
    }
  }, [measurePages, mode, syncFromScroll, itemCount])

  const finishProgrammaticScroll = React.useCallback(
    (container: HTMLElement) => {
      const token = ++programmaticTokenRef.current
      watchCarouselScrollEnd(container, () => {
        if (token !== programmaticTokenRef.current) return
        isProgrammaticScrollRef.current = false
        syncFromScroll()
      })
    },
    [syncFromScroll]
  )

  const goToIndex = React.useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(itemCount - 1, index))
      activeIndexRef.current = clamped
      setActiveIndex(clamped)

      const container = sliderRef.current
      if (!container) return

      isProgrammaticScrollRef.current = true
      scrollCarouselToIndex(container, clamped)
      finishProgrammaticScroll(container)
    },
    [finishProgrammaticScroll, itemCount]
  )

  const goToPage = React.useCallback(
    (page: number) => {
      measurePages()
      const pages = pageCountRef.current
      const clamped = Math.max(0, Math.min(pages - 1, page))
      activeIndexRef.current = clamped
      setActiveIndex(clamped)

      const container = sliderRef.current
      if (!container) return

      isProgrammaticScrollRef.current = true
      scrollCarouselToPage(container, clamped, itemCount)
      finishProgrammaticScroll(container)
    },
    [finishProgrammaticScroll, itemCount, measurePages]
  )

  const prev = React.useCallback(() => {
    if (mode === 'page') {
      goToPage(activeIndexRef.current - 1)
      return
    }
    goToIndex(activeIndexRef.current - 1)
  }, [goToIndex, goToPage, mode])

  const next = React.useCallback(() => {
    if (mode === 'page') {
      goToPage(activeIndexRef.current + 1)
      return
    }
    goToIndex(activeIndexRef.current + 1)
  }, [goToIndex, goToPage, mode])

  const handleActiveIndexChange = React.useCallback(
    (index: number) => {
      if (isProgrammaticScrollRef.current) return

      if (mode === 'page') {
        const container = sliderRef.current
        if (!container) return
        measurePages()
        const page = getCarouselPageFromScroll(container, itemCount)
        activeIndexRef.current = page
        setActiveIndex(page)
        return
      }

      activeIndexRef.current = index
      setActiveIndex(index)
    },
    [itemCount, measurePages, mode]
  )

  const total = mode === 'page' ? pageCount : itemCount

  return {
    sliderRef,
    activeIndex,
    onActiveIndexChange: handleActiveIndexChange,
    prev,
    next,
    canPrev: activeIndex > 0,
    canNext: activeIndex < total - 1,
    counter: `${String(activeIndex + 1).padStart(2, '0')} - ${String(total).padStart(2, '0')}`,
  }
}
