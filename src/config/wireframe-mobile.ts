/**
 * Dimensions carousels home — calées sur wireframes (viewport ref. 220px → mockup 390px).
 */
const WF_PHONE_W = 220
const MOCKUP_W = 390
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
