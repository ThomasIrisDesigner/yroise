import * as React from 'react'

import { readScrollOffset, resolveScrollTarget } from '@/lib/scrollContainer'

/** Détecte le scroll sur l’ancêtre scrollable (mockup mobile) ou la fenêtre (plein écran). */
export function useScrollThreshold(
  threshold = 10,
  elementRef: React.RefObject<HTMLElement | null>,
  scrollContainerRef?: React.RefObject<HTMLElement | null>
) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const target = resolveScrollTarget(scrollContainerRef, elementRef)
    if (!target) return

    const onScroll = () => {
      setScrolled(readScrollOffset(target) > threshold)
    }

    onScroll()
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [threshold, elementRef, scrollContainerRef])

  return scrolled
}
