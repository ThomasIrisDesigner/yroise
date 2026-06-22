import * as React from 'react'

function getScrollParent(element: HTMLElement): HTMLElement | Window {
  let parent = element.parentElement

  while (parent) {
    const { overflowY } = getComputedStyle(parent)
    if (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') {
      return parent
    }
    parent = parent.parentElement
  }

  return window
}

function readScrollOffset(target: HTMLElement | Window): number {
  if (target === window) {
    return window.scrollY
  }
  return (target as HTMLElement).scrollTop
}

/** Détecte le scroll sur l’ancêtre scrollable (mockup mobile) ou la fenêtre (plein écran). */
export function useScrollThreshold(
  threshold = 10,
  elementRef: React.RefObject<HTMLElement | null>,
  scrollContainerRef?: React.RefObject<HTMLElement | null>
) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const element = elementRef.current
    const scrollContainer = scrollContainerRef?.current

    const target =
      scrollContainer &&
      (() => {
        const { overflowY } = getComputedStyle(scrollContainer)
        return overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay'
      })()
        ? scrollContainer
        : element
          ? getScrollParent(element)
          : window

    const onScroll = () => {
      setScrolled(readScrollOffset(target) > threshold)
    }

    onScroll()
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [threshold, elementRef, scrollContainerRef])

  return scrolled
}
