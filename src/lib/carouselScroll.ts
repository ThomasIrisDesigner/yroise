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

/** Nombre de cards entièrement visibles dans le viewport du slider. */
export function getCarouselItemsPerPage(container: HTMLElement): number {
  const items = container.querySelectorAll<HTMLElement>('.card-slider-item')
  if (!items.length) return 1

  const styles = getComputedStyle(container)
  const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0
  const stride = items[0]!.offsetWidth + gap
  if (stride <= 0) return 1

  return Math.max(1, Math.floor((container.clientWidth + gap) / stride))
}

export function getCarouselPageCount(
  itemCount: number,
  itemsPerPage: number
): number {
  return Math.max(1, Math.ceil(itemCount / Math.max(1, itemsPerPage)))
}

function getScrollPaddingLeft(container: HTMLElement): number {
  return Number.parseFloat(getComputedStyle(container).scrollPaddingLeft) || 0
}

/** Positions scrollLeft cibles pour chaque page (dernière = maxScroll). */
export function getCarouselPageScrollTargets(
  container: HTMLElement,
  itemCount: number
): number[] {
  const perPage = getCarouselItemsPerPage(container)
  const pageCount = getCarouselPageCount(itemCount, perPage)
  const items = container.querySelectorAll<HTMLElement>('.card-slider-item')
  const pad = getScrollPaddingLeft(container)
  const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)

  if (pageCount <= 1) return [0]

  const targets: number[] = []
  for (let page = 0; page < pageCount; page += 1) {
    if (page === 0) {
      targets.push(0)
      continue
    }

    if (page === pageCount - 1) {
      targets.push(maxScroll)
      continue
    }

    const startIndex = page * perPage
    const item = items[startIndex]
    const left = item ? Math.max(0, item.offsetLeft - pad) : 0
    targets.push(Math.min(maxScroll, left))
  }

  return targets
}

/** Page courante à partir de la position de scroll. */
export function getCarouselPageFromScroll(
  container: HTMLElement,
  itemCount: number
): number {
  const targets = getCarouselPageScrollTargets(container, itemCount)
  if (targets.length <= 1) return 0

  const scrollLeft = container.scrollLeft
  const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
  if (maxScroll > 0 && scrollLeft >= maxScroll - 4) {
    return targets.length - 1
  }

  let closest = 0
  let minDistance = Number.POSITIVE_INFINITY
  targets.forEach((target, index) => {
    const distance = Math.abs(scrollLeft - target)
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

  const left = Math.max(0, item.offsetLeft - getScrollPaddingLeft(container))
  container.scrollTo({ left, behavior })
}

export function scrollCarouselToPage(
  container: HTMLElement,
  page: number,
  itemCount: number,
  behavior: ScrollBehavior = 'smooth'
) {
  const targets = getCarouselPageScrollTargets(container, itemCount)
  if (!targets.length) return

  const clamped = Math.max(0, Math.min(targets.length - 1, page))
  const left = targets[clamped]!
  if (Math.abs(container.scrollLeft - left) < 1) return

  // Désactive le snap le temps du glissement (évite les à-coups / annulations).
  const previousSnap = container.style.scrollSnapType
  container.style.scrollSnapType = 'none'
  container.scrollTo({ left, behavior })

  watchCarouselScrollEnd(container, () => {
    container.style.scrollSnapType = previousSnap
  })
}

export function watchCarouselScrollEnd(
  container: HTMLElement,
  onEnd: () => void,
  fallbackMs = 650
) {
  let done = false
  const finish = () => {
    if (done) return
    done = true
    container.removeEventListener('scrollend', finish)
    window.clearTimeout(timeoutId)
    onEnd()
  }

  container.addEventListener('scrollend', finish)
  const timeoutId = window.setTimeout(finish, fallbackMs)
}
