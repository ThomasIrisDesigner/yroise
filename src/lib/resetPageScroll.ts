/** Remet à zéro tous les conteneurs scrollables du prototype (mobile réel + mockup). */
export function resetPageScroll() {
  const opts: ScrollToOptions = { top: 0, left: 0 }

  document.querySelector<HTMLElement>('.site-outer-scroll')?.scrollTo(opts)
  document.querySelector<HTMLElement>('.site-scroll-main')?.scrollTo(opts)
  window.scrollTo(opts)
}
