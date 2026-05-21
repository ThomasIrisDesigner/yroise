/** Dimensions du mockup mobile (iPhone 14 class). */
export const MOBILE_MOCKUP_W = 390
export const MOBILE_MOCKUP_H = 844

/**
 * Dimensions carousels home — calées sur wireframes (viewport ref. 220px → mockup 390px).
 */
const WF_PHONE_W = 220
const MOCKUP_W = MOBILE_MOCKUP_W
const scale = MOCKUP_W / WF_PHONE_W

export const mobileCarousel = {
  gapPx: Math.round(8 * scale),
  histoires: {
    cardWidthPx: Math.round(88 * scale),
    imageHeightPx: Math.round(60 * scale),
  },
  collections: {
    cardWidthPx: Math.round(72 * scale),
    imageHeightPx: Math.round(50 * scale),
  },
} as const
