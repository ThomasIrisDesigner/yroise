import type { RefObject } from 'react'

function isScrollableOverflow(overflowY: string) {
  return overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay'
}

export function getScrollParent(element: HTMLElement): HTMLElement | Window {
  let parent = element.parentElement

  while (parent) {
    if (isScrollableOverflow(getComputedStyle(parent).overflowY)) {
      return parent
    }
    parent = parent.parentElement
  }

  return window
}

export function resolveScrollTarget(
  scrollContainerRef?: RefObject<HTMLElement | null>,
  anchorRef?: RefObject<HTMLElement | null>
): HTMLElement | Window | null {
  const scrollContainer = scrollContainerRef?.current

  if (
    scrollContainer &&
    isScrollableOverflow(getComputedStyle(scrollContainer).overflowY)
  ) {
    return scrollContainer
  }

  const anchor = anchorRef?.current
  if (anchor) {
    return getScrollParent(anchor)
  }

  return window
}

export function readScrollOffset(target: HTMLElement | Window): number {
  if (target === window) {
    return window.scrollY
  }
  return (target as HTMLElement).scrollTop
}
