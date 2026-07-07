/** Index actif d’un slider snap — tient compte du scroll-padding. */
export function getSnapActiveIndex(container: HTMLElement): number {
  const items = container.querySelectorAll<HTMLElement>('.card-slider-item')
  if (!items.length) return 0

  const scrollLeft = container.scrollLeft
  const styles = getComputedStyle(container)
  const scrollPaddingLeft = Number.parseFloat(styles.scrollPaddingLeft) || 0
  let closest = 0
  let minDistance = Number.POSITIVE_INFINITY

  items.forEach((item, index) => {
    const snapScrollLeft = Math.max(0, item.offsetLeft - scrollPaddingLeft)
    const distance = Math.abs(scrollLeft - snapScrollLeft)
    if (distance < minDistance) {
      minDistance = distance
      closest = index
    }
  })

  return closest
}

export function scrollCarouselToIndex(
  container: HTMLElement,
  index: number,
  behavior: ScrollBehavior = 'smooth'
) {
  const item = container.querySelectorAll<HTMLElement>('.card-slider-item')[index]
  if (!item) return

  const scrollPaddingLeft =
    Number.parseFloat(getComputedStyle(container).scrollPaddingLeft) || 0
  const left = Math.max(0, item.offsetLeft - scrollPaddingLeft)

  container.scrollTo({ left, behavior })
}

export function watchCarouselScrollEnd(
  container: HTMLElement,
  onEnd: () => void,
  fallbackMs = 500
) {
  if ('onscrollend' in container) {
    container.addEventListener('scrollend', onEnd, { once: true })
    return
  }

  window.setTimeout(onEnd, fallbackMs)
}
