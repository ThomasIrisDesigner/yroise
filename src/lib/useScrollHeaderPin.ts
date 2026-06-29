import * as React from 'react'

import { readScrollOffset, resolveScrollTarget } from '@/lib/scrollContainer'

const TOP_THRESHOLD = 10

/**
 * Header étendu dans le flux ; barre compacte épinglée au scroll vers le haut
 * (masquée en haut de page et au scroll vers le bas).
 */
export function useScrollHeaderPin(
  scrollContainerRef: React.RefObject<HTMLElement | null>,
  flowChromeRef: React.RefObject<HTMLElement | null>
) {
  const [pinCompact, setPinCompact] = React.useState(false)
  const lastScrollY = React.useRef(0)

  React.useEffect(() => {
    const target = resolveScrollTarget(scrollContainerRef, flowChromeRef)
    if (!target) return

    const onScroll = () => {
      const scrollY = readScrollOffset(target)

      if (scrollY <= TOP_THRESHOLD) {
        setPinCompact(false)
      } else if (scrollY < lastScrollY.current) {
        setPinCompact(true)
      } else if (scrollY > lastScrollY.current) {
        setPinCompact(false)
      }

      lastScrollY.current = scrollY
    }

    lastScrollY.current = readScrollOffset(target)
    onScroll()
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [scrollContainerRef, flowChromeRef])

  return pinCompact
}
