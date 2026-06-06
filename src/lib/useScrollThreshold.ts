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

function isWindow(target: HTMLElement | Window): target is Window {
  return target === window
}

function getScrollTop(target: HTMLElement | Window) {
  if (isWindow(target)) {
    return target.scrollY
  }
  return target.scrollTop
}

/** Détecte le scroll sur l’ancêtre scrollable (mockup mobile) ou la fenêtre (plein écran). */
export function useScrollThreshold(
  threshold = 10,
  elementRef: React.RefObject<HTMLElement | null>
) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const target = getScrollParent(element)

    const onScroll = () => {
      setScrolled(getScrollTop(target) > threshold)
    }

    onScroll()
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [threshold, elementRef])

  return scrolled
}
