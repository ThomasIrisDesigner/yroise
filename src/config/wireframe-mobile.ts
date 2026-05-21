/** Dimensions du mockup mobile (iPhone 14 class). */
export const MOBILE_MOCKUP_W = 390
export const MOBILE_MOCKUP_H = 844

/**
 * Dimensions carousels home — accordées aux contraintes ergo mobile (titres 14px lisibles,
 * gap suffisant pour le swipe). Valeurs en px sur mockup 390px.
 */
export const mobileCarousel = {
  gapPx: 12,
  histoires: {
    cardWidthPx: 176,
    imageHeightPx: 112,
  },
  collections: {
    cardWidthPx: 132,
    imageHeightPx: 96,
  },
} as const
